module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const code = typeof request.query?.rate === "string" ? request.query.rate.toUpperCase() : "";
  if (!/^[A-Z]{3}$/.test(code)) {
    response.status(400).json({ error: "A valid three-letter currency code is required" });
    return;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const url = `https://cbu.uz/common/json/amcharts.php?rate=${encodeURIComponent(code)}`;
    const upstream = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (!upstream.ok) throw new Error(`CBU history returned HTTP ${upstream.status}`);

    const history = await upstream.json();
    if (!Array.isArray(history) || history.length === 0 || history.some((point) => (
      typeof point.date !== "string"
      || !/^\d{4}-\d{2}-\d{2}$/.test(point.date)
      || !Number.isFinite(Number(point.value))
      || Number(point.value) <= 0
    ))) {
      throw new Error(`CBU returned invalid ${code} history`);
    }

    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    response.status(200).json(history);
  } catch (error) {
    console.error(`Could not retrieve CBU history for ${code}:`, error);
    response.status(controller.signal.aborted ? 504 : 502).json({
      error: "Currency history is temporarily unavailable"
    });
  } finally {
    clearTimeout(timeoutId);
  }
};
