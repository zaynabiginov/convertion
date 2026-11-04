import argparse
import json
import math
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
RATES_URL = "https://cbu.uz/ru/arkhiv-kursov-valyut/json/"
HISTORY_URL = "https://cbu.uz/common/json/amcharts.php?rate={code}"
BANK_RATES_URL = "https://bank.uz/uz/currency"
SUPPORTED_BANK_CODES = ("USD", "RUB", "EUR", "GBP", "KZT")
VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "param", "source", "track", "wbr",
}


def fetch(url, accept):
    referer = "https://cbu.uz/" if "cbu.uz/" in url else "https://bank.uz/"
    request = Request(
        url,
        headers={
            "Accept": accept,
            "Referer": referer,
            "User-Agent": "Mozilla/5.0 (compatible; Convertion.uz/1.0)",
        },
    )
    with urlopen(request, timeout=30) as response:
        if response.status != 200:
            raise RuntimeError(f"{url} returned HTTP {response.status}")
        return response.read()


class BankRatesParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.banks = {}
        self.row = None
        self.anchor_depth = None
        self.rate_depth = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        classes = set(attributes.get("class", "").split())
        depth = len(self.stack)

        if tag == "div" and "bc-inner-block-left-texts" in classes:
            currency = next(
                (
                    node["id"][5:]
                    for node in reversed(self.stack)
                    if isinstance(node["id"], str) and node["id"].startswith("best_")
                ),
                None,
            )
            rate_type = next(
                (
                    value
                    for node in reversed(self.stack)
                    for marker, value in (
                        ("bc-inner-blocks-left", "buy"),
                        ("bc-inner-blocks-right", "sell"),
                    )
                    if marker in node["classes"]
                ),
                None,
            )
            if currency in SUPPORTED_BANK_CODES and rate_type:
                self.row = {
                    "depth": depth,
                    "currency": currency,
                    "type": rate_type,
                    "slug": None,
                    "name": "",
                    "value": "",
                }

        if self.row and tag == "a":
            match = re.search(r"/currency/bank/([^/?#]+)", attributes.get("href", ""))
            if match:
                self.row["slug"] = match.group(1)
                self.anchor_depth = depth
        if self.row and tag == "span" and classes.intersection({"green-date", "red-date"}):
            self.rate_depth = depth

        if tag not in VOID_TAGS:
            self.stack.append({"tag": tag, "id": attributes.get("id", ""), "classes": classes})

    def handle_data(self, data):
        if not self.row:
            return
        if self.anchor_depth is not None:
            self.row["name"] += data
        elif self.rate_depth is not None:
            self.row["value"] += data

    def handle_endtag(self, tag):
        depth = next(
            (index for index in range(len(self.stack) - 1, -1, -1) if self.stack[index]["tag"] == tag),
            None,
        )
        if depth is None:
            return

        if self.row and tag == "a" and self.anchor_depth == depth:
            self.anchor_depth = None
        if self.row and tag == "span" and self.rate_depth == depth:
            self.rate_depth = None
        if self.row and tag == "div" and self.row["depth"] == depth:
            self._finish_row()
        del self.stack[depth:]

    def _finish_row(self):
        row = self.row
        self.row = None
        name = re.sub(r"\s+", " ", row["name"]).strip()
        raw_value = re.sub(r"[^\d,.-]", "", row["value"])
        if "," in raw_value and "." not in raw_value:
            raw_value = raw_value.replace(",", ".")
        elif "," in raw_value:
            raw_value = raw_value.replace(",", "")

        try:
            value = float(raw_value)
        except ValueError as error:
            raise ValueError(f"Bank.uz returned an invalid {row['currency']} quote") from error
        if not row["slug"] or not name or not raw_value or not math.isfinite(value) or value < 0:
            raise ValueError(f"Bank.uz returned an invalid {row['currency']} quote")

        bank = self.banks.setdefault(
            row["slug"], {"slug": row["slug"], "name": name, "rates": {}}
        )
        quote = bank["rates"].setdefault(row["currency"], {"buy": None, "sell": None})
        quote[row["type"]] = value


def fetch_bank_rates():
    html = fetch(BANK_RATES_URL, "text/html").decode("utf-8")
    parser = BankRatesParser()
    parser.feed(html)
    if not parser.banks:
        raise RuntimeError("Bank.uz response contains no commercial bank rates")
    for code in SUPPORTED_BANK_CODES:
        for rate_type in ("buy", "sell"):
            if not any(
                bank["rates"].get(code, {}).get(rate_type) is not None
                for bank in parser.banks.values()
            ):
                raise RuntimeError(f"Bank.uz response is missing {rate_type} rates for {code}")
    return sorted(parser.banks.values(), key=lambda bank: bank["name"].casefold())


def fetch_currency_codes():
    data = json.loads(fetch(RATES_URL, "application/json"))
    if not isinstance(data, list) or not data:
        raise RuntimeError("Central Bank returned no current currency rates")
    codes = {
        item.get("Ccy", "").strip().upper()
        for item in data
        if isinstance(item, dict)
        and isinstance(item.get("Ccy"), str)
        and item.get("Ccy").strip().upper() != "UZS"
    }
    if not codes or any(not re.fullmatch(r"[A-Z]{3}", code) for code in codes):
        raise RuntimeError("Central Bank returned invalid currency codes")
    return sorted(codes)


def fetch_currency_history(code):
    data = json.loads(fetch(HISTORY_URL.format(code=code), "application/json"))
    if not isinstance(data, list) or not data:
        raise RuntimeError(f"Central Bank returned no {code} history")

    series = []
    for point in data:
        if not isinstance(point, dict):
            raise RuntimeError(f"Central Bank returned invalid {code} history")
        date = point.get("date")
        value = point.get("value")
        if not isinstance(date, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", date):
            raise RuntimeError(f"Central Bank returned an invalid {code} history date")
        try:
            parsed_date = datetime.strptime(date, "%Y-%m-%d").date()
            rate = float(value)
        except (TypeError, ValueError) as error:
            raise RuntimeError(f"Central Bank returned an invalid {code} history rate") from error
        if parsed_date.isoformat() != date or not math.isfinite(rate) or rate <= 0:
            raise RuntimeError(f"Central Bank returned an invalid {code} history rate")
        series.append({"date": date, "value": rate})

    series.sort(key=lambda point: point["date"])
    return code, series


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


def prepare_site(output):
    output.mkdir(parents=True, exist_ok=True)
    (output / "assets").mkdir(parents=True, exist_ok=True)
    for filename in ("index.html", "favicon.svg", "CNAME"):
        source = ROOT / filename
        if source.exists():
            (output / filename).write_bytes(source.read_bytes())
    for filename in ("app.js", "site.css"):
        source = ROOT / "assets" / filename
        (output / "assets" / filename).write_bytes(source.read_bytes())
    weather_output = output / "weather"
    weather_output.mkdir(parents=True, exist_ok=True)
    for filename in ("index.html", "app.js", "style.css"):
        source = ROOT / "weather" / filename
        (weather_output / filename).write_bytes(source.read_bytes())

    codes = fetch_currency_codes()
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {
            executor.submit(fetch_currency_history, code): code
            for code in codes
        }
        histories = {}
        for future in as_completed(futures):
            code, series = future.result()
            histories[code] = series

    for code, series in histories.items():
        write_json(output / "data" / "history" / f"{code}.json", series)

    bank_rates = {
        "updatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "banks": fetch_bank_rates(),
    }
    write_json(output / "data" / "bank-rates.json", bank_rates)
    print(f"Prepared {len(histories)} online currency histories and rates for {len(bank_rates['banks'])} banks")


def main():
    parser = argparse.ArgumentParser(description="Build a GitHub Pages site with current online exchange data")
    parser.add_argument("--output", required=True, type=Path, help="New, empty directory for the Pages artifact")
    arguments = parser.parse_args()
    output = arguments.output.resolve()
    if output.exists() and any(output.iterdir()):
        raise RuntimeError(f"Pages output directory is not empty: {output}")
    prepare_site(output)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Could not prepare the Pages deployment: {error}", file=sys.stderr)
        raise
