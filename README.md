# Convertion.uz Currency Converter — User Guide

[English](README.md) | [Русский](READMEru.md) | [O‘zbekcha](READMEuz.md)

## 1. About the service

Convertion.uz calculates amounts in Uzbekistani som and other supported currencies, displays official exchange rates from the Central Bank of the Republic of Uzbekistan, and lets you compare commercial bank quotes. Rates are retrieved online, so an internet connection is required. If the page or rates do not load, open the website in a browser using its web address. Opening the file directly from your computer (`file://`) may prevent some data from loading.

## 2. Choose a language and appearance

- Select **UZ / RU / EN** in the upper-right corner to change the interface language.
- The moon represents the dark theme and the sun represents the light theme. Use the adjacent switch to change the theme.
- Your language and theme choices are saved in the current browser. You may need to select them again in another browser or on another device.

## 3. Convert currencies

1. Enter an amount in the **Amount** field. Negative values are not accepted; decimal amounts are supported.
2. Choose the source and target currencies from the **From** and **To** lists. Type a currency code or name in the search field to find it.
3. The result updates automatically. The applied exchange rate and the official rate date appear below the result.
4. Click the arrow button between the currencies to reverse the conversion direction. The amount stays the same while the source and target currencies switch places.

Choose **UZS** to convert to or from Uzbekistani som. When two foreign currencies are selected, the converter calculates the result using their Central Bank rates. Number formatting follows the selected interface language.

## 4. Central Bank rates

The **Central Bank rates** section contains cards for available currencies.

- Each card shows the currency code and name, country, and calculated amount.
- Search by country, currency name, or code.
- The page initially shows a selection of common currencies. Click **Show all rates** to expand the list; click it again to collapse the list. When searching, matching results are shown.
- The **Amount** field controls the quantity calculated on every card. An invalid or negative amount will not produce a displayed calculation.
- The **Reverse rate** switch changes the displayed direction: the default view converts a foreign-currency amount to UZS; the reverse view converts an amount in UZS to foreign currency.

Click a currency card to open its exchange-rate history.

## 5. View exchange-rate history

The history dialog displays a chart of the selected currency's Central Bank rates and statistics for the selected period.

1. Set the **From date** and **To date**, or choose a preset: 1, 3, or 6 months; 1, 3, 5, or 7 years; or **All**.
2. The start date must be earlier than the end date. If no rates were published during the selected period, the chart will have no data to display.
3. Hover over a chart point to inspect its date and value. Use the mouse wheel to zoom and drag the chart to pan across the time range.
4. Use **+ / −** to zoom in or out. **Reset zoom** restores the original view. The horizontal scrollbar below the chart also moves through the time range.
5. Drag the dialog's lower-right corner to resize it. Click **Close** when you are done.

The statistics show the latest value, minimum, maximum, average, and change over the selected period.

## 6. Commercial bank rates

Open **Commercial bank rates** to view buy and sell quotes provided by Bank.uz. Narrow the table using:

- a bank-name search;
- a currency filter for USD, RUB, EUR, GBP, or KZT, or select all currencies;
- the price type: **Buy** or **Sell**;
- minimum and maximum price limits for the selected price type. Either limit may be left blank;
- sorting by bank, currency, buy price, or sell price. Click a table heading; click it again to reverse the sort order.

**Important:** buy and sell are stated from the bank's perspective. If you are buying foreign currency from a bank, compare the **Sell** price. If you are selling foreign currency to a bank, compare the **Buy** price. The data retrieval time appears near the table. Quotes can change, so confirm the rate with the bank before exchanging money. Source: Bank.uz.

## 7. Data sources and troubleshooting

- Official currency rates come from the Central Bank of the Republic of Uzbekistan; commercial bank quotes come from Bank.uz. The two sources may show different values.
- Results are for informational purposes. The final exchange amount may differ because of bank terms, fees, or rate changes.
- If a loading error or **Rate unavailable** message appears, check your internet connection, reload the page, and try again later. A data provider may also be temporarily unavailable.
- If the bank table is empty, clear the search and filters, select **All currencies**, and check the minimum and maximum price limits.
- If the history chart does not load, try again later or select a wider date range.

## 8. How the website works

1. The browser loads `index.html`, then applies the styles from `assets/site.css` and runs `assets/app.js`.
2. The JavaScript requests the current currency list from the Central Bank of Uzbekistan. It validates the response, normalizes rates by their published nominal values, and uses the resulting rates for the converter and currency cards. UZS is the calculation baseline.
3. For a conversion, the site calculates `amount × source rate ÷ target rate`. Changing the amount or either currency recalculates the result immediately.
4. Commercial bank quotes are requested from `/api/bank-rates`. The server-side handler in `api/bank-rates.js` retrieves the Bank.uz page; the browser parses its quotes and applies the selected search, filters, and sorting.
5. When a currency card is opened, the browser loads that currency's saved history from `data/history/<CODE>.json`, validates and sorts the points, then adds the latest official rate and date from the live Central Bank rates response before drawing the chart and period statistics. The loaded series is cached in memory while the page remains open.
6. Language and theme preferences are stored in the browser's local storage. Rates are refreshed when the page becomes visible and at regular intervals while it remains open.

The history handlers in `api/cbu-history.js` and `api/history.js` provide server-side ways to retrieve history from the Central Bank on hosting platforms that support API functions. The static browser interface loads the prepared JSON files and merges in the latest official rate from the live rates response.

## 9. Project structure

```text
convertion/
├── index.html             # Page structure and interface elements
├── README.md              # English user guide and project overview
├── READMEru.md            # Russian user guide and project overview
├── READMEuz.md            # Uzbek user guide and project overview
├── favicon.svg            # Browser tab icon
├── api/
│   ├── bank-rates.js      # Server-side Bank.uz quotes handler
│   ├── cbu-history.js     # Server-side Central Bank history handler
│   └── history.js         # Alternative Central Bank history handler
├── assets/
│   ├── app.js             # UI behavior, translations, conversion, and data loading
│   └── site.css           # Layout, responsive rules, and themes
├── data/
│   └── history/           # Historical rate series, one JSON file per currency
```

`api/` contains server-side request handlers and requires a hosting platform that supports them. `data/history/` contains the prepared history files used by the current interface; file names are currency codes, for example `USD.json`. Add or update a history series there using the same JSON structure: an array of objects with a `date` (`YYYY-MM-DD`) and a positive numeric `value`.
