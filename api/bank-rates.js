module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const upstream = await fetch("https://bank.uz/uz/currency", {
      headers: {
        Accept: "text/html",
        "User-Agent": "Mozilla/5.0 (compatible; Convertion.uz/1.0)"
      },
      signal: controller.signal
    });

    if (!upstream.ok) {
      throw new Error(`Bank.uz returned HTTP ${upstream.status}`);
    }

    const html = await upstream.text();
    if (!html.includes('id="best_USD"')) {
      throw new Error("Bank.uz response does not contain exchange-rate data");
    }

    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=900");
    response.status(200).send(html);
  } catch (error) {
    console.error("Could not retrieve commercial bank rates from Bank.uz:", error);
    response.status(controller.signal.aborted ? 504 : 502).json({
      error: "Commercial bank rates are temporarily unavailable"
    });
  } finally {
    clearTimeout(timeoutId);
  }
};
