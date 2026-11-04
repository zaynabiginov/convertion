# Convertion.uz

Currency converter and weather forecast for Uzbekistan and other locations.

[English](README.md) | [Русский](READMEru.md) | [O‘zbekcha](READMEuz.md)

## Features

- Convert between Uzbekistani som (UZS) and supported currencies using exchange rates from the Central Bank of the Republic of Uzbekistan.
- Browse currency cards, search by country or currency, and view historical rates with chart statistics.
- Compare commercial bank buy and sell offers with search, filters, and sorting.
- Check current conditions, an hourly forecast, and a seven-day forecast. Each day includes morning, daytime, evening, and night details.
- Search for a city or use your current location. The weather page requests location access when it loads; the browser will ask for permission.
- Switch between Russian, Uzbek, and English, and between dark and light themes.

## Run locally

Serve the project directory over HTTP instead of opening `index.html` directly. On Windows, run one of these commands from the project directory:

```powershell
py -m http.server 8000
# Or, if the Python launcher is unavailable:
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. No package installation or build step is required.

Geolocation is available on HTTPS sites and localhost. Allow location access when prompted; if access is denied or unavailable, the forecast falls back to Tashkent. You can try again with the location button or search for a city. Coordinates are used to request the forecast and resolve the city name through Open-Meteo.

## Use the converter

1. Enter an amount and select the source and target currencies. Search the currency lists by name or code.
2. The result updates as you type. Use the swap button to reverse the conversion.
3. Search and adjust the amount shown in the Central Bank rate cards. Select a card to open its historical chart.
4. In commercial bank rates, filter by bank, currency, buy/sell price, and price range; select a table heading to sort. Buy and sell are from the bank's perspective: compare **Sell** when buying foreign currency from a bank and **Buy** when selling it to a bank.
5. In the history dialog, choose a date range or preset, inspect chart points, zoom, and review period statistics.

Language and theme preferences are saved in the current browser.

## Weather

The weather section is embedded on the main page and can also be opened directly at `weather/index.html`. It shows current conditions, the next 24 hours, and seven days of forecasts. Daily details include temperature, feels-like temperature, wind, humidity, pressure, daylight, sunrise and sunset, UV index, and moon phase. Geomagnetic Kp data is provided by NOAA when available.

The location button can request the browser's current location again. If you do not grant permission, the site continues to show Tashkent and lets you search for another city. Location access may be unavailable when the site is opened as a local `file://` document or served from an insecure non-local origin.

## Data sources

- Central Bank of the Republic of Uzbekistan — official exchange rates and rate history.
- Bank.uz — commercial bank currency offers.
- Open-Meteo — geocoding and weather forecasts.
- NOAA Space Weather Prediction Center — geomagnetic Kp forecast.

Weather and exchange-rate data require an internet connection. Providers may be temporarily unavailable; Kp data may not cover every forecast date.

## Prepare a static deployment

The project has no runtime package dependencies. To prepare an updated static site with current bank rates, Central Bank rate histories, and the weather page, run:

```powershell
python scripts/prepare-pages.py --output .\pages-output
```

The output directory must be new or empty. The script downloads source data and assembles the site; deploy the contents of that directory to a static host. Serve the deployed site over HTTPS so browsers can offer geolocation access.

The optional handlers in `api/` are for serverless hosts that support server-side functions. GitHub Pages does not run those handlers.

## Project structure

```text
convertion/
├── index.html
├── assets/
│   ├── app.js
│   └── site.css
├── weather/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── data/
│   ├── bank-rates.json
│   └── history/
├── api/
│   ├── bank-rates.js
│   ├── cbu-history.js
│   └── history.js
├── scripts/
│   ├── prepare-pages.py
│   └── update-bank-rates.py
├── README.md
├── READMEru.md
└── READMEuz.md
```
