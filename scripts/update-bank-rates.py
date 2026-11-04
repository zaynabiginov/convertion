import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen


CURRENCY_CODES = ("USD", "RUB", "EUR", "GBP", "KZT")
OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "bank-rates.json"


class BankRatesParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.rows = {}
        self.current_row = None
        self.anchor_depth = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        classes = set(attributes.get("class", "").split())
        depth = len(self.stack)

        if tag == "div" and "bc-inner-block-left-texts" in classes:
            currency = next(
                (
                    node["id"][5:]
                    for node in reversed(self.stack)
                    if node.get("id", "").startswith("best_")
                ),
                None,
            )
            rate_type = next(
                (
                    rate
                    for node in reversed(self.stack)
                    for marker, rate in (
                        ("bc-inner-blocks-left", "buy"),
                        ("bc-inner-blocks-right", "sell"),
                    )
                    if marker in node["classes"]
                ),
                None,
            )
            if currency in CURRENCY_CODES and rate_type:
                self.current_row = {
                    "depth": depth,
                    "currency": currency,
                    "type": rate_type,
                    "slug": None,
                    "name": "",
                    "value": "",
                }

        if self.current_row and tag == "a":
            href = attributes.get("href", "")
            match = re.search(r"/currency/bank/([^/?#]+)", href)
            if match:
                self.current_row["slug"] = match.group(1)
                self.anchor_depth = depth

        self.stack.append({"tag": tag, "id": attributes.get("id", ""), "classes": classes})

    def handle_data(self, data):
        if not self.current_row:
            return
        if self.anchor_depth is not None:
            self.current_row["name"] += data
        else:
            self.current_row["value"] += data

    def handle_endtag(self, tag):
        depth = len(self.stack) - 1
        if self.current_row and tag == "a" and self.anchor_depth == depth:
            self.anchor_depth = None
        if self.current_row and tag == "div" and self.current_row["depth"] == depth:
            row = self.current_row
            name = re.sub(r"\s+", " ", row["name"]).strip()
            raw_value = re.sub(r"[^\d,.-]", "", row["value"])
            if "," in raw_value and "." not in raw_value:
                raw_value = raw_value.replace(",", ".")
            elif "," in raw_value:
                raw_value = raw_value.replace(",", "")
            value = float(raw_value) if raw_value else None
            if not row["slug"] or not name or value is None or value < 0:
                raise ValueError(f"Bank.uz returned an invalid {row['currency']} quote")

            bank = self.rows.setdefault(
                row["slug"], {"slug": row["slug"], "name": name, "rates": {}}
            )
            quote = bank["rates"].setdefault(
                row["currency"], {"buy": None, "sell": None}
            )
            quote[row["type"]] = value
            self.current_row = None
        if self.stack:
            self.stack.pop()


def fetch_rates():
    request = Request(
        "https://bank.uz/uz/currency",
        headers={
            "Accept": "text/html",
            "User-Agent": "Mozilla/5.0 (compatible; Convertion.uz/1.0)",
        },
    )
    with urlopen(request, timeout=20) as response:
        if response.status != 200:
            raise RuntimeError(f"Bank.uz returned HTTP {response.status}")
        html = response.read().decode("utf-8")

    parser = BankRatesParser()
    parser.feed(html)
    if not parser.rows:
        raise RuntimeError("Bank.uz response contains no commercial bank rates")
    for code in CURRENCY_CODES:
        for rate_type in ("buy", "sell"):
            if not any(
                bank["rates"].get(code, {}).get(rate_type) is not None
                for bank in parser.rows.values()
            ):
                raise RuntimeError(f"Bank.uz response is missing {rate_type} rates for {code}")
    return {"banks": sorted(parser.rows.values(), key=lambda bank: bank["name"].casefold())}


def main():
    updated = fetch_rates()
    existing = json.loads(OUTPUT_PATH.read_text(encoding="utf-8"))
    if updated != {"banks": existing.get("banks")}:
        OUTPUT_PATH.write_text(
            json.dumps(updated, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"Updated rates for {len(updated['banks'])} banks")
    else:
        print("Bank rates have not changed")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Could not update commercial bank rates: {error}", file=sys.stderr)
        raise
