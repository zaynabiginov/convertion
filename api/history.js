const CBU_HISTORY_URL = "https://cbu.uz/common/json/amcharts.php";

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const rate = typeof request.query.rate === "string" ? request.query.rate : "";
  if (!/^[A-Z]{3}$/.test(rate)) {
    response.status(400).json({ error: "A valid three-letter currency code is required" });
    return;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    const url = new URL(CBU_HISTORY_URL);
    url.searchParams.set("rate", rate);
    const upstreamResponse = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      redirect: "error",
      signal: controller.signal
    });
    if (!upstreamResponse.ok) {
      throw new Error(`CBU history returned HTTP ${upstreamResponse.status}`);
    }

    const contentType = upstreamResponse.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("CBU history returned a non-JSON response");
    }

    const data = await upstreamResponse.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("CBU history returned no data");
    }

    const series = data.map((point) => {
      const value = Number(point.value);
      if (
        typeof point.date !== "string"
        || !/^\d{4}-\d{2}-\d{2}$/.test(point.date)
        || !Number.isFinite(value)
        || value <= 0
      ) {
        throw new Error("CBU history contains an invalid date or rate");
      }
      return { date: point.date, value };
    });

    response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    response.status(200).json(series);
  } catch (error) {
    console.error(`Could not load CBU history for ${rate}:`, error);
    response
      .status(controller.signal.aborted ? 504 : 502)
      .json({ error: "Exchange-rate history is temporarily unavailable" });
  } finally {
    clearTimeout(timeoutId);
  }
};
