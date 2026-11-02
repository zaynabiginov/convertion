    const currencyMetadata = {
      USD: ["🇺🇸", "$"], EUR: ["🇪🇺", "€"], RUB: ["🇷🇺", "₽"], GBP: ["🇬🇧", "£"],
      JPY: ["🇯🇵", "¥"], AZN: ["🇦🇿", "₼"], BDT: ["🇧🇩", "৳"], BHD: ["🇧🇭", "د.ب"],
      BND: ["🇧🇳", "$"], BRL: ["🇧🇷", "R$"], BYN: ["🇧🇾", "Br"], CAD: ["🇨🇦", "$"],
      CHF: ["🇨🇭", "Fr"], CNY: ["🇨🇳", "¥"], CUP: ["🇨🇺", "$"], CZK: ["🇨🇿", "Kč"],
      DKK: ["🇩🇰", "kr"], DZD: ["🇩🇿", "دج"], EGP: ["🇪🇬", "£"], AFN: ["🇦🇫", "؋"],
      ARS: ["🇦🇷", "$"], GEL: ["🇬🇪", "₾"], HKD: ["🇭🇰", "$"], HUF: ["🇭🇺", "Ft"],
      IDR: ["🇮🇩", "Rp"], ILS: ["🇮🇱", "₪"], INR: ["🇮🇳", "₹"], IQD: ["🇮🇶", "ع.د"],
      IRR: ["🇮🇷", "﷼"], ISK: ["🇮🇸", "kr"], JOD: ["🇯🇴", "د.ا"], AUD: ["🇦🇺", "$"],
      KGS: ["🇰🇬", "с"], KHR: ["🇰🇭", "៛"], KRW: ["🇰🇷", "₩"], KWD: ["🇰🇼", "د.ك"],
      KZT: ["🇰🇿", "₸"], LAK: ["🇱🇦", "₭"], LBP: ["🇱🇧", "ل.ل"], LYD: ["🇱🇾", "ل.د"],
      MAD: ["🇲🇦", "د.م."], MDL: ["🇲🇩", "L"], MMK: ["🇲🇲", "K"], MNT: ["🇲🇳", "₮"],
      MXN: ["🇲🇽", "$"], MYR: ["🇲🇾", "RM"], NOK: ["🇳🇴", "kr"], NZD: ["🇳🇿", "$"],
      OMR: ["🇴🇲", "ر.ع."], PHP: ["🇵🇭", "₱"], PKR: ["🇵🇰", "₨"], PLN: ["🇵🇱", "zł"],
      QAR: ["🇶🇦", "ر.ق"], RON: ["🇷🇴", "lei"], RSD: ["🇷🇸", "дин"], AMD: ["🇦🇲", "֏"],
      SAR: ["🇸🇦", "ر.س"], SDG: ["🇸🇩", "ج.س"], SEK: ["🇸🇪", "kr"], SGD: ["🇸🇬", "$"],
      SYP: ["🇸🇾", "£"], THB: ["🇹🇭", "฿"], TJS: ["🇹🇯", "ЅМ"], TMT: ["🇹🇲", "m"],
      TND: ["🇹🇳", "د.ت"], TRY: ["🇹🇷", "₺"], UAH: ["🇺🇦", "₴"], AED: ["🇦🇪", "د.إ"],
      UYU: ["🇺🇾", "$"], VES: ["🇻🇪", "Bs"], VND: ["🇻🇳", "₫"], XDR: ["🌐", "XDR"],
      YER: ["🇾🇪", "﷼"], ZAR: ["🇿🇦", "R"]
    };

    const uzsCurrency = {
      code: "UZS",
      flag: "🇺🇿",
      symbol: "so'm",
      rate: 1,
      nominal: 1,
      region: "UZ",
      names: { ru: "Узбекский сум", uz: "O'zbek so'mi", en: "Uzbekistani som" }
    };
    const usdCurrency = {
      code: "USD",
      flag: currencyMetadata.USD[0],
      symbol: currencyMetadata.USD[1],
      rate: null,
      nominal: 1,
      region: "US",
      names: { ru: "Доллар США", uz: "AQSH dollari", en: "US dollar" }
    };
    let currencies = [uzsCurrency, usdCurrency];

    const translations = {
      ru: {
        eyebrow: "По курсу Центрального банка Узбекистана", pageTitle: "Конвертер валют",
        pageIntro: "Мировые валюты. Понятные цифры. Переводите в сумы и обратно за пару секунд.",
        calculator: "Калькулятор валют", autoCalc: "Автоматический расчет", amount: "Сумма", from: "Из", to: "В",
        sourceCurrencyLabel: "Исходная валюта", targetCurrencyLabel: "Целевая валюта",
        currencySearchLabel: "Поиск валюты", currencySearchPlaceholder: "Введите код или название валюты", currencySearchEmpty: "Валюта не найдена",
        result: "Результат", currencies: "КУРСЫ ЦБ", ratesTitle: "Текущие курсы валют",
        bankRatesKicker: "КУРСЫ БАНКОВ", bankRatesTitle: "Курсы коммерческих банков",
        worldCurrenciesTab: "Курсы центрального банка", bankRatesTab: "Курсы коммерческих банков", ratesTabsLabel: "Разделы курсов валют",
        bankName: "Банк", bankCurrency: "Валюта", bankBuy: "Покупка", bankSell: "Продажа",
        bankFiltersLabel: "Фильтры курсов банков", bankFilterSearch: "Поиск банка",
        bankFilterCurrency: "Валюта", bankFilterAllCurrencies: "Все валюты", bankFilterRate: "Фильтровать по цене",
        bankFilterMinimum: "Цена от", bankFilterMaximum: "Цена до", bankRatesCount: "Найдено предложений: {count}",
        bankRatesNoResults: "По заданным фильтрам курсы не найдены.",
        bankRatesLoading: "Загружаем курсы банков…", bankRatesError: "Не удалось загрузить или обновить курсы банков. Данные могут быть устаревшими.",
        bankRatesSource: "Источник: Bank.uz", bankRatesUpdated: "Получено",
        bankRatesDisclaimer: "Курсы покупки и продажи предоставляет Bank.uz; перед обменом уточняйте курс в банке.",
        ratesNote: "Сумма в валюте → UZS", reverseRatesNote: "Сумма в UZS → валюта",
        rateAmount: "Сумма", reverseRates: "Обратный курс",
        searchPlaceholder: "Поиск по стране или валюте", searchLabel: "Поиск по стране или названию валюты",
        resultsFound: "Найдено валют: {count}", noRatesFound: "Ничего не найдено. Попробуйте изменить запрос.",
        showAllRates: "Показать все курсы", showLessRates: "Свернуть список",
        themeLight: "Светлая тема", themeDark: "Тёмная тема", languageLabel: "Выбор языка", displayPreferences: "Настройки отображения",
        international: "Международная расчётная единица", aboutTitle: "О конвертере валют", aboutEasyTitle: "Просто и удобно",
        aboutEasyText: "Введите сумму, выберите валюты — результат пересчитывается автоматически. Кнопка со стрелками меняет направления конвертации местами.",
        aboutRatesTitle: "Официальные курсы", aboutRatesText: "Официальные курсы загружаются с сайта Центрального банка, курсы банков — с Bank.uz.",
        aboutCurrenciesTitle: "Поддерживаемые валюты", aboutCurrenciesText: "Доллар США, евро, российский рубль и другие валюты к узбекскому суму.",
        footer: "Курсы валют Центрального банка Узбекистана", githubLink: "Проект на GitHub",
        loadingRates: "Загружаем официальный курс…", loadError: "Не удалось загрузить курсы ЦБ. Проверьте подключение и откройте страницу через веб-сервер.",
        invalidAmount: "Введите корректную сумму", noRate: "Курс недоступен", source: "Последний опубликованный курс ЦБ",
        historyTitle: "Динамика курса", historyFrom: "С даты", historyTo: "По дату", historyClose: "Закрыть",
        historyLoading: "Загружаем историю курса…", historyError: "Не удалось загрузить историю курса ЦБ. Попробуйте позже.",
        historyNoData: "За выбранный период опубликованных значений нет.",
        historyInvalidRange: "Дата начала должна быть раньше даты окончания.",
        historyPoints: "Точек на графике: {count}", historyChartLabel: "График курса {code} в узбекских сумах",
        historyPresets: "Быстрый выбор периода", historyZoom: "Масштаб графика", historyZoomIn: "Приблизить график",
        historyZoomOut: "Отдалить график", historyReset: "Сбросить масштаб", history1m: "1 мес.", history3m: "3 мес.",
        history6m: "6 мес.", history1y: "1 год", history3y: "3 года", history5y: "5 лет", history7y: "7 лет",
        historyAll: "Всё", historyStats: "Статистика за период", historyScrollbar: "Прокрутка периода графика",
        historyLatest: "Последнее значение", historyMinimum: "Минимум", historyMaximum: "Максимум",
        historyAverage: "Среднее", historyChange: "Изменение за период",
        historyHelp: "Колесо мыши — масштаб, перетаскивание — сдвиг графика, наведите курсор для значений. Потяните за нижний правый угол окна, чтобы изменить его размер."
      },
      uz: {
        eyebrow: "O'zbekiston Markaziy banki kursi bo'yicha", pageTitle: "Valyuta konvertori",
        pageIntro: "Jahon valyutalari. Aniq hisob-kitob. So'mga va aksincha bir necha soniyada o'tkazing.",
        calculator: "Valyuta kalkulyatori", autoCalc: "Avtomatik hisob-kitob", amount: "Miqdor", from: "Dan", to: "Ga",
        sourceCurrencyLabel: "Boshlang'ich valyuta", targetCurrencyLabel: "Maqsadli valyuta",
        currencySearchLabel: "Valyutani qidirish", currencySearchPlaceholder: "Valyuta kodi yoki nomini kiriting", currencySearchEmpty: "Valyuta topilmadi",
        result: "Natija", currencies: "MB KURSLARI", ratesTitle: "Joriy valyuta kurslari",
        bankRatesKicker: "BANK KURSLARI", bankRatesTitle: "Tijorat banklari valyuta kurslari",
        worldCurrenciesTab: "Markaziy bank kurslari", bankRatesTab: "Tijorat banklari kurslari", ratesTabsLabel: "Valyuta kurslari bo'limlari",
        bankName: "Bank", bankCurrency: "Valyuta", bankBuy: "Sotib olish", bankSell: "Sotish",
        bankFiltersLabel: "Bank kurslari filtrlari", bankFilterSearch: "Bankni qidirish",
        bankFilterCurrency: "Valyuta", bankFilterAllCurrencies: "Barcha valyutalar", bankFilterRate: "Narx bo'yicha filtrlash",
        bankFilterMinimum: "Narxdan", bankFilterMaximum: "Narxgacha", bankRatesCount: "Topilgan takliflar: {count}",
        bankRatesNoResults: "Tanlangan filtrlar bo'yicha kurslar topilmadi.",
        bankRatesLoading: "Bank kurslari yuklanmoqda…", bankRatesError: "Bank kurslarini yuklab yoki yangilab bo'lmadi. Ma'lumotlar eskirgan bo'lishi mumkin.",
        bankRatesSource: "Manba: Bank.uz", bankRatesUpdated: "Yuklandi",
        bankRatesDisclaimer: "Sotib olish va sotish kurslari Bank.uz tomonidan taqdim etilgan; almashtirishdan oldin bankdan aniqlashtiring.",
        ratesNote: "Valyuta miqdori → UZS", reverseRatesNote: "UZS miqdori → valyuta",
        rateAmount: "Miqdor", reverseRates: "Teskari kurs",
        searchPlaceholder: "Mamlakat yoki valyuta bo'yicha qidirish", searchLabel: "Mamlakat yoki valyuta nomi bo'yicha qidirish",
        resultsFound: "Topilgan valyutalar: {count}", noRatesFound: "Hech narsa topilmadi. Qidiruvni o'zgartirib ko'ring.",
        showAllRates: "Barcha kurslarni ko'rsatish", showLessRates: "Ro'yxatni yig'ish",
        themeLight: "Yorug' mavzu", themeDark: "Qorong'i mavzu", languageLabel: "Tilni tanlash", displayPreferences: "Ko'rinish sozlamalari",
        international: "Xalqaro hisob-kitob birligi", aboutTitle: "Valyuta konvertori haqida", aboutEasyTitle: "Oddiy va qulay",
        aboutEasyText: "Miqdorni kiriting va valyutalarni tanlang — natija avtomatik hisoblanadi. Strelkali tugma konvertatsiya yo'nalishini almashtiradi.",
        aboutRatesTitle: "Rasmiy kurslar", aboutRatesText: "Rasmiy kurslar Markaziy bankdan, bank kurslari esa Bank.uz saytidan yuklanadi.",
        aboutCurrenciesTitle: "Qo'llab-quvvatlanadigan valyutalar", aboutCurrenciesText: "AQSH dollari, yevro, Rossiya rubli va boshqa valyutalar o'zbek so'miga nisbatan.",
        footer: "O'zbekiston Markaziy bankining valyuta kurslari", githubLink: "GitHub loyihasi",
        loadingRates: "Rasmiy kurs yuklanmoqda…", loadError: "Markaziy bank kurslarini yuklab bo'lmadi. Internetni tekshiring va sahifani veb-server orqali oching.",
        invalidAmount: "To'g'ri miqdorni kiriting", noRate: "Kurs mavjud emas", source: "Markaziy bank e'lon qilgan so'nggi kurs",
        historyTitle: "Valyuta kursi dinamikasi", historyFrom: "Boshlanish sanasi", historyTo: "Tugash sanasi", historyClose: "Yopish",
        historyLoading: "Valyuta kursi tarixi yuklanmoqda…", historyError: "Markaziy bank kursi tarixini yuklab bo'lmadi. Keyinroq urinib ko'ring.",
        historyNoData: "Tanlangan davr uchun e'lon qilingan qiymatlar yo'q.",
        historyInvalidRange: "Boshlanish sanasi tugash sanasidan oldin bo'lishi kerak.",
        historyPoints: "Grafikdagi nuqtalar: {count}", historyChartLabel: "{code} valyuta kursining o'zbek so'midagi grafigi",
        historyPresets: "Davrni tez tanlash", historyZoom: "Grafik masshtabi", historyZoomIn: "Grafikni yaqinlashtirish",
        historyZoomOut: "Grafikni uzoqlashtirish", historyReset: "Masshtabni tiklash", history1m: "1 oy", history3m: "3 oy",
        history6m: "6 oy", history1y: "1 yil", history3y: "3 yil", history5y: "5 yil", history7y: "7 yil",
        historyAll: "Hammasi", historyStats: "Davr statistikasi", historyScrollbar: "Grafik davri bo'ylab surish",
        historyLatest: "So'nggi qiymat", historyMinimum: "Eng kam", historyMaximum: "Eng ko'p",
        historyAverage: "O'rtacha", historyChange: "Davrdagi o'zgarish",
        historyHelp: "Sichqoncha g'ildiragi — masshtab, sudrash — grafikni siljitish, qiymatlarni ko'rish uchun kursorni olib boring. Oyna o'lchamini o'zgartirish uchun pastki o'ng burchakni torting."
      },
      en: {
        eyebrow: "Central Bank of Uzbekistan exchange rates", pageTitle: "Currency converter",
        pageIntro: "World currencies. Clear numbers. Convert to and from Uzbek som in seconds.",
        calculator: "Currency calculator", autoCalc: "Automatic calculation", amount: "Amount", from: "From", to: "To",
        sourceCurrencyLabel: "Source currency", targetCurrencyLabel: "Target currency",
        currencySearchLabel: "Search currency", currencySearchPlaceholder: "Enter currency code or name", currencySearchEmpty: "No currency found",
        result: "Result", currencies: "CENTRAL BANK RATES", ratesTitle: "Current exchange rates",
        bankRatesKicker: "BANK RATES", bankRatesTitle: "Commercial bank exchange rates",
        worldCurrenciesTab: "Central Bank rates", bankRatesTab: "Commercial bank rates", ratesTabsLabel: "Exchange rate sections",
        bankName: "Bank", bankCurrency: "Currency", bankBuy: "Buy", bankSell: "Sell",
        bankFiltersLabel: "Bank rate filters", bankFilterSearch: "Search banks",
        bankFilterCurrency: "Currency", bankFilterAllCurrencies: "All currencies", bankFilterRate: "Filter by price",
        bankFilterMinimum: "Price from", bankFilterMaximum: "Price to", bankRatesCount: "Offers found: {count}",
        bankRatesNoResults: "No rates match the selected filters.",
        bankRatesLoading: "Loading bank rates…", bankRatesError: "Could not load or refresh bank rates. The displayed data may be stale.",
        bankRatesSource: "Source: Bank.uz", bankRatesUpdated: "Fetched",
        bankRatesDisclaimer: "Buy and sell rates are provided by Bank.uz; confirm the rate with the bank before exchanging.",
        ratesNote: "Currency amount → UZS", reverseRatesNote: "UZS amount → currency",
        rateAmount: "Amount", reverseRates: "Reverse rate",
        searchPlaceholder: "Search by country or currency", searchLabel: "Search by country or currency name",
        resultsFound: "Currencies found: {count}", noRatesFound: "No currencies found. Try a different search.",
        showAllRates: "Show all rates", showLessRates: "Show fewer",
        themeLight: "Light theme", themeDark: "Dark theme", languageLabel: "Choose language", displayPreferences: "Display settings",
        international: "International reserve asset", aboutTitle: "About the currency converter", aboutEasyTitle: "Simple and convenient",
        aboutEasyText: "Enter an amount and choose currencies — the result updates automatically. Use the arrow button to swap conversion directions.",
        aboutRatesTitle: "Official exchange rates", aboutRatesText: "Official rates come from the Central Bank; commercial bank rates are provided by Bank.uz.",
        aboutCurrenciesTitle: "Supported currencies", aboutCurrenciesText: "US dollar, euro, Russian ruble, and more currencies against the Uzbek som.",
        footer: "Central Bank of Uzbekistan exchange rates", githubLink: "View on GitHub",
        loadingRates: "Loading official exchange rates…", loadError: "Could not load Central Bank rates. Check your connection and open this page through a web server.",
        invalidAmount: "Enter a valid amount", noRate: "Rate unavailable", source: "Latest rate published by the Central Bank",
        historyTitle: "Exchange rate history", historyFrom: "From date", historyTo: "To date", historyClose: "Close",
        historyLoading: "Loading exchange rate history…", historyError: "Could not load Central Bank rate history. Please try again later.",
        historyNoData: "No published rates are available for this period.",
        historyInvalidRange: "The start date must be earlier than the end date.",
        historyPoints: "Chart points: {count}", historyChartLabel: "{code} exchange rate chart in Uzbek som",
        historyPresets: "Quick period selection", historyZoom: "Chart zoom", historyZoomIn: "Zoom in",
        historyZoomOut: "Zoom out", historyReset: "Reset zoom", history1m: "1 mo.", history3m: "3 mo.",
        history6m: "6 mo.", history1y: "1 yr.", history3y: "3 yrs.", history5y: "5 yrs.", history7y: "7 yrs.",
        historyAll: "All", historyStats: "Period statistics", historyScrollbar: "Scroll the chart time period",
        historyLatest: "Latest value", historyMinimum: "Minimum", historyMaximum: "Maximum",
        historyAverage: "Average", historyChange: "Change over period",
        historyHelp: "Scroll to zoom, drag to pan, and hover to inspect values. Drag the lower-right corner of the window to resize it."
      }
    };

    function readPreference(key, allowedValues, fallback) {
      try {
        const value = window.localStorage.getItem(key);
        return allowedValues.includes(value) ? value : fallback;
      } catch (error) {
        console.warn(`Could not read saved preference "${key}":`, error);
        return fallback;
      }
    }

    function savePreference(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(`Could not save preference "${key}":`, error);
      }
    }

    const apiUrl = "https://cbu.uz/ru/arkhiv-kursov-valyut/json/";
    const bankRatesApiUrl = window.location.protocol === "file:"
      ? "https://bank.uz/uz/currency"
      : "/api/bank-rates";
    const commercialRateCodes = ["USD", "RUB", "EUR", "GBP", "KZT"];
    const amountInput = document.querySelector("#amount");
    const fromSelect = document.querySelector("#from-currency");
    const toSelect = document.querySelector("#to-currency");
    const result = document.querySelector("#result");
    const rateLine = document.querySelector("#rate-line");
    const updatedLine = document.querySelector("#updated-line");
    const ratesGrid = document.querySelector("#rates-grid");
    const rateSearch = document.querySelector("#rate-search");
    const rateAmountInput = document.querySelector("#rate-amount");
    const rateCount = document.querySelector("#rate-count");
    const rateEmpty = document.querySelector("#rate-empty");
    const ratesMoreButton = document.querySelector("#rates-more");
    const ratesNote = document.querySelector("#rates-note");
    const rateViewToggle = document.querySelector("#rate-view-toggle");
    const bankRatesBody = document.querySelector("#bank-rates-body");
    const bankRatesStatus = document.querySelector("#bank-rates-status");
    const bankRatesCount = document.querySelector("#bank-rates-count");
    const bankRatesEmpty = document.querySelector("#bank-rates-empty");
    const bankFilterSearch = document.querySelector("#bank-filter-search");
    const bankFilterCurrency = document.querySelector("#bank-filter-currency");
    const bankFilterType = document.querySelector("#bank-filter-type");
    const bankFilterMinimum = document.querySelector("#bank-filter-min");
    const bankFilterMaximum = document.querySelector("#bank-filter-max");
    const ratesTabButtons = [...document.querySelectorAll(".rates-tab")];
    const ratesTabPanels = ratesTabButtons.map((button) => document.getElementById(button.getAttribute("aria-controls")));
    const historyDialog = document.querySelector("#history-dialog");
    const historyTitle = document.querySelector("#history-title");
    const historySubtitle = document.querySelector("#history-subtitle");
    const historyFromInput = document.querySelector("#history-from");
    const historyToInput = document.querySelector("#history-to");
    const historyStatus = document.querySelector("#history-status");
    const historyChart = document.querySelector("#history-chart");
    const historyTooltip = document.querySelector("#history-tooltip");
    const historyStatLatest = document.querySelector("#history-stat-latest");
    const historyStatMin = document.querySelector("#history-stat-min");
    const historyStatMax = document.querySelector("#history-stat-max");
    const historyStatAverage = document.querySelector("#history-stat-average");
    const historyStatChange = document.querySelector("#history-stat-change");
    const historyScrollTrack = document.querySelector("#history-scroll-track");
    const historyScrollThumb = document.querySelector("#history-scroll-thumb");
    const historyScrollStart = document.querySelector("#history-scroll-start");
    const historyScrollEnd = document.querySelector("#history-scroll-end");
    const languageSelect = document.querySelector("#language-select");
    const themeToggle = document.querySelector("#theme-toggle");
    document.querySelector("#current-year").textContent = String(new Date().getFullYear());
    const localeCodes = { ru: "ru-RU", uz: "uz-UZ", en: "en-US" };
    let activeLanguage = readPreference("convertion-language", ["ru", "uz", "en"], "ru");
    let officialRateDate = null;
    let rateLoadFailed = false;
    let rateRequestInProgress = false;
    let commercialBankRates = new Map();
    let bankRatesFetchedAt = null;
    let bankRatesLoadFailed = false;
    let bankRatesRequestInProgress = false;
    let bankSortKey = "bank";
    let bankSortDirection = "ascending";
    let showReverseRates = false;
    let showAllRates = false;
    let rateListAnimationTimer = null;
    let rateListTransitionHandler = null;
    const historyCache = new Map();
    let selectedHistoryCurrency = null;
    let selectedHistorySeries = null;
    let historyRequestController = null;
    let historyRequestId = 0;
    let historyViewStart = null;
    let historyViewEnd = null;
    let historyPointerRatio = 0.5;
    let historyPanState = null;
    let historyCloseTimer = null;
    let renderedHistoryWidth = 0;
    let renderedHistoryHeight = 0;
    let historyScrollbarDrag = null;
    const primaryCurrencyCodes = ["USD", "EUR", "RUB", "GBP", "JPY", "CNY", "KZT", "TRY", "CHF"];

    function applyTheme(theme) {
      const light = theme === "light";
      document.documentElement.dataset.theme = light ? "light" : "dark";
      themeToggle.checked = light;
      themeToggle.setAttribute("aria-label", translations[activeLanguage][light ? "themeLight" : "themeDark"]);
      themeToggle.setAttribute("aria-checked", String(light));
      document.querySelector('meta[name="theme-color"]').content = light ? "#f5f7fb" : "#101a2d";
    }

    applyTheme(readPreference("convertion-theme", ["light", "dark"], "dark"));

    function formatNumber(value, options) {
      return new Intl.NumberFormat(localeCodes[activeLanguage], options).format(value);
    }

    function updateCommercialBankStatus() {
      const labels = translations[activeLanguage];
      if (bankRatesLoadFailed) {
        bankRatesStatus.textContent = labels.bankRatesError;
        return;
      }
      if (!bankRatesFetchedAt) {
        bankRatesStatus.textContent = labels.bankRatesLoading;
        return;
      }
      const fetchedAt = new Intl.DateTimeFormat(localeCodes[activeLanguage], {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(bankRatesFetchedAt);
      bankRatesStatus.textContent = `${labels.bankRatesUpdated}: ${fetchedAt}`;
    }

    function renderCommercialBankRates() {
      bankRatesBody.replaceChildren();
      const search = searchKey(bankFilterSearch.value);
      const currency = bankFilterCurrency.value;
      const rateType = bankFilterType.value;
      const minimum = bankFilterMinimum.value === "" ? null : Number(bankFilterMinimum.value);
      const maximum = bankFilterMaximum.value === "" ? null : Number(bankFilterMaximum.value);
      const rows = [];

      commercialBankRates.forEach((bank) => {
        if (search && !searchKey(bank.name).includes(search)) return;
        commercialRateCodes.forEach((code) => {
          if (currency !== "all" && currency !== code) return;
          const rates = bank.rates[code];
          if (!rates) return;
          const filteredRate = rates[rateType];
          if (minimum !== null && (filteredRate === null || filteredRate < minimum)) return;
          if (maximum !== null && (filteredRate === null || filteredRate > maximum)) return;
          rows.push({ bank: bank.name, code, buy: rates.buy, sell: rates.sell, sortRate: filteredRate });
        });
      });

      const direction = bankSortDirection === "ascending" ? 1 : -1;
      rows.sort((left, right) => {
        let comparison;
        if (bankSortKey === "bank") {
          comparison = left.bank.localeCompare(right.bank, localeCodes[activeLanguage]);
        } else if (bankSortKey === "currency") {
          comparison = left.code.localeCompare(right.code);
        } else {
          const leftRate = left[bankSortKey];
          const rightRate = right[bankSortKey];
          if (leftRate === null || rightRate === null) {
            if (leftRate !== rightRate) return leftRate === null ? 1 : -1;
            comparison = 0;
          } else comparison = leftRate - rightRate;
          comparison *= direction;
        }
        if (bankSortKey === "bank" || bankSortKey === "currency") comparison *= direction;
        return comparison
          || left.bank.localeCompare(right.bank, localeCodes[activeLanguage])
          || left.code.localeCompare(right.code);
      });

      document.querySelectorAll("[data-bank-sort]").forEach((button) => {
        const active = button.dataset.bankSort === bankSortKey;
        const header = button.closest("th");
        const indicator = button.querySelector(".bank-sort-indicator");
        header.setAttribute("aria-sort", active ? bankSortDirection : "none");
        indicator.textContent = active ? (bankSortDirection === "ascending" ? "↑" : "↓") : "";
      });

      rows.forEach(({ bank, code, buy, sell }) => {
        const row = document.createElement("tr");
        const bankCell = document.createElement("td");
        const currencyCell = document.createElement("td");
        const buyCell = document.createElement("td");
        const sellCell = document.createElement("td");
        bankCell.textContent = bank;
        currencyCell.textContent = code;
        buyCell.textContent = buy === null ? "—" : formatNumber(buy, { maximumFractionDigits: 2 });
        sellCell.textContent = sell === null ? "—" : formatNumber(sell, { maximumFractionDigits: 2 });
        row.append(bankCell, currencyCell, buyCell, sellCell);
        bankRatesBody.append(row);
      });

      bankRatesCount.textContent = translations[activeLanguage].bankRatesCount.replace("{count}", String(rows.length));
      bankRatesEmpty.hidden = rows.length > 0 || !commercialBankRates.size;
    }

    function parseCommercialRate(value) {
      const numericText = value.replace(/[^\d,.-]/g, "");
      const normalized = numericText.includes(",") && !numericText.includes(".")
        ? numericText.replace(",", ".")
        : numericText.replace(/,/g, "");
      const rate = Number(normalized);
      if (!Number.isFinite(rate) || rate < 0) {
        throw new Error(`Bank.uz returned an invalid exchange rate: "${value}"`);
      }
      return rate;
    }

    async function loadCommercialBankRates() {
      if (bankRatesRequestInProgress) return;
      bankRatesRequestInProgress = true;
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 12000);
      try {
        if (!commercialBankRates.size) {
          updateCommercialBankStatus();
        }
        const response = await fetch(bankRatesApiUrl, {
          cache: "no-store",
          credentials: "omit",
          signal: controller.signal
        });
        if (!response.ok) throw new Error(`Bank.uz returned HTTP ${response.status}`);
        const html = await response.text();
        const sourceDocument = new DOMParser().parseFromString(html, "text/html");
        const parsedRates = new Map();

        commercialRateCodes.forEach((code) => {
          const currencyPanel = sourceDocument.getElementById(`best_${code}`);
          if (!currencyPanel) throw new Error(`Bank.uz response is missing ${code} rates`);

          [
            ["buy", ".bc-inner-blocks-left"],
            ["sell", ".bc-inner-blocks-right"]
          ].forEach(([rateType, containerSelector]) => {
            const container = currencyPanel.querySelector(containerSelector);
            const rows = container?.querySelectorAll(".bc-inner-block-left-texts") || [];
            if (!rows.length) throw new Error(`Bank.uz response is missing ${rateType} rates for ${code}`);

            rows.forEach((row) => {
              const bankLink = row.querySelector('a[href*="/currency/bank/"]');
              const rateElement = row.querySelector(".green-date, .red-date");
              const bankName = bankLink?.textContent.trim().replace(/\s+/g, " ");
              const bankSlug = bankLink?.getAttribute("href")?.split("/").filter(Boolean).pop();
              if (!bankName || !bankSlug || !rateElement) {
                throw new Error(`Bank.uz returned an incomplete ${rateType} quote for ${code}`);
              }

              const bank = parsedRates.get(bankSlug) || { name: bankName, rates: {} };
              bank.rates[code] ||= { buy: null, sell: null };
              bank.rates[code][rateType] = parseCommercialRate(rateElement.textContent);
              parsedRates.set(bankSlug, bank);
            });
          });
        });
        if (!parsedRates.size) throw new Error("Bank.uz response contains no commercial bank rates");

        commercialBankRates = parsedRates;
        bankRatesFetchedAt = new Date();
        bankRatesLoadFailed = false;
        renderCommercialBankRates();
        updateCommercialBankStatus();
      } catch (error) {
        console.error("Could not load commercial bank exchange rates from Bank.uz:", error);
        bankRatesLoadFailed = true;
        renderCommercialBankRates();
        updateCommercialBankStatus();
      } finally {
        window.clearTimeout(timeoutId);
        bankRatesRequestInProgress = false;
      }
    }

    function updateRateStatus() {
      const labels = translations[activeLanguage];
      updatedLine.textContent = rateLoadFailed
        ? labels.loadError
        : officialRateDate
          ? `${labels.source} · ${officialRateDate}`
          : labels.loadingRates;
    }

    function currencyName(currency) {
      return currency.names[activeLanguage] || currency.names.ru;
    }

    function countryName(currency, language = activeLanguage) {
      if (!currency.region) return translations[language].international;
      return new Intl.DisplayNames([localeCodes[language]], { type: "region" }).of(currency.region)
        || translations[language].international;
    }

    function searchKey(value) {
      return value.toLocaleLowerCase(localeCodes[activeLanguage]).normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    }

    function renderCurrencyPickerOptions(picker) {
      const select = picker.querySelector(".currency-select-native");
      const searchInput = picker.querySelector(".currency-picker-search");
      const optionsList = picker.querySelector(".currency-picker-options");
      const emptyState = picker.querySelector(".currency-picker-empty");
      const query = searchKey(searchInput.value);
      const matches = currencies.filter((currency) => {
        const searchableText = [
          currency.code,
          currency.symbol,
          ...Object.values(currency.names),
          ...Object.keys(localeCodes).map((language) => countryName(currency, language))
        ].join(" ");
        return !query || searchKey(searchableText).includes(query);
      });

      optionsList.replaceChildren(...matches.map((currency) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "currency-picker-option";
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", String(currency.code === select.value));
        option.dataset.currencyCode = currency.code;
        const flag = document.createElement("span");
        const code = document.createElement("span");
        const name = document.createElement("span");
        flag.textContent = currency.flag;
        code.className = "currency-picker-option-code";
        code.textContent = currency.code;
        name.className = "currency-picker-option-name";
        name.textContent = currencyName(currency);
        option.append(flag, code, name);
        return option;
      }));
      emptyState.hidden = matches.length > 0;
    }

    function renderCurrencyPicker(picker) {
      const select = picker.querySelector(".currency-select-native");
      const selectedOption = select.selectedOptions[0];
      const trigger = picker.querySelector(".currency-picker-trigger");
      const value = picker.querySelector(".currency-picker-value");
      const searchInput = picker.querySelector(".currency-picker-search");
      const selectId = select.id;
      value.textContent = selectedOption ? selectedOption.textContent : "";
      trigger.setAttribute("aria-label", selectId === "from-currency"
        ? translations[activeLanguage].sourceCurrencyLabel
        : translations[activeLanguage].targetCurrencyLabel);
      searchInput.placeholder = translations[activeLanguage].currencySearchPlaceholder;
      searchInput.setAttribute("aria-label", translations[activeLanguage].currencySearchLabel);
      renderCurrencyPickerOptions(picker);
    }

    function setCurrencyPickerOpen(picker, open, restoreFocus = false) {
      const trigger = picker.querySelector(".currency-picker-trigger");
      const menu = picker.querySelector(".currency-picker-menu");
      const searchInput = picker.querySelector(".currency-picker-search");
      picker.classList.toggle("is-open", open);
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", String(open));
      searchInput.setAttribute("aria-expanded", String(open));
      if (open) {
        searchInput.value = "";
        renderCurrencyPickerOptions(picker);
        searchInput.focus();
      } else if (restoreFocus) {
        trigger.focus();
      }
    }

    function initializeCurrencyPickers() {
      const pickers = [...document.querySelectorAll("[data-currency-picker]")];
      pickers.forEach((picker) => {
        const trigger = picker.querySelector(".currency-picker-trigger");
        const searchInput = picker.querySelector(".currency-picker-search");
        const optionsList = picker.querySelector(".currency-picker-options");
        const select = picker.querySelector(".currency-select-native");

        trigger.addEventListener("click", () => {
          setCurrencyPickerOpen(picker, trigger.getAttribute("aria-expanded") !== "true");
        });
        trigger.addEventListener("keydown", (event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setCurrencyPickerOpen(picker, true);
          }
        });
        searchInput.addEventListener("input", () => renderCurrencyPickerOptions(picker));
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            optionsList.querySelector(".currency-picker-option")?.focus();
          } else if (event.key === "Escape") {
            event.preventDefault();
            setCurrencyPickerOpen(picker, false, true);
          } else if (event.key === "Tab") {
            setCurrencyPickerOpen(picker, false);
          }
        });
        optionsList.addEventListener("click", (event) => {
          const option = event.target.closest(".currency-picker-option");
          if (!option) return;
          select.value = option.dataset.currencyCode;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          setCurrencyPickerOpen(picker, false, true);
        });
        optionsList.addEventListener("keydown", (event) => {
          const options = [...optionsList.querySelectorAll(".currency-picker-option")];
          const currentIndex = options.indexOf(event.target.closest(".currency-picker-option"));
          if (event.key === "Escape") {
            event.preventDefault();
            setCurrencyPickerOpen(picker, false, true);
          } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const direction = event.key === "ArrowDown" ? 1 : -1;
            options[(currentIndex + direction + options.length) % options.length]?.focus();
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            options[event.key === "Home" ? 0 : options.length - 1]?.focus();
          }
        });
        select.addEventListener("change", () => renderCurrencyPicker(picker));
      });

      document.addEventListener("pointerdown", (event) => {
        pickers.forEach((picker) => {
          if (!picker.contains(event.target)) setCurrencyPickerOpen(picker, false);
        });
      });
    }

    function renderSelectPicker(picker) {
      const select = picker.querySelector(".select-picker-native");
      const trigger = picker.querySelector(".select-picker-trigger");
      const optionsList = picker.querySelector(".select-picker-options");
      const selectedOption = select.selectedOptions[0];
      const labelKey = select.dataset.i18nAria;
      const label = labelKey && translations[activeLanguage][labelKey]
        ? translations[activeLanguage][labelKey]
        : select.getAttribute("aria-label") || select.closest("label")?.querySelector("span")?.textContent.trim() || "";
      trigger.querySelector(".select-picker-value").textContent = selectedOption?.textContent.trim() || "";
      trigger.setAttribute("aria-label", label);

      optionsList.replaceChildren(...[...select.options].map((selectOption) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "select-picker-option";
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", String(selectOption.value === select.value));
        option.dataset.value = selectOption.value;
        option.textContent = selectOption.textContent.trim();
        return option;
      }));
    }

    function setSelectPickerOpen(picker, open, restoreFocus = false) {
      const trigger = picker.querySelector(".select-picker-trigger");
      const menu = picker.querySelector(".select-picker-menu");
      picker.classList.toggle("is-open", open);
      menu.hidden = !open;
      trigger.setAttribute("aria-expanded", String(open));
      if (open) {
        renderSelectPicker(picker);
        picker.querySelector(".select-picker-option[aria-selected='true']")?.focus();
      } else if (restoreFocus) {
        trigger.focus();
      }
    }

    function initializeSelectPickers() {
      const selects = [
        languageSelect,
        bankFilterCurrency,
        bankFilterType
      ];
      const pickers = selects.map((select) => {
        const picker = document.createElement("div");
        picker.className = "select-picker";
        picker.dataset.selectPicker = "";
        select.parentNode.insertBefore(picker, select);
        picker.append(select);
        select.classList.add("select-picker-native");
        select.tabIndex = -1;
        select.setAttribute("aria-hidden", "true");

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.id = `${select.id}-trigger`;
        trigger.className = "select-picker-trigger";
        trigger.setAttribute("aria-haspopup", "listbox");
        trigger.setAttribute("aria-expanded", "false");
        trigger.setAttribute("aria-controls", `${select.id}-options`);
        const value = document.createElement("span");
        value.className = "select-picker-value";
        const arrow = document.createElement("span");
        arrow.className = "select-picker-arrow";
        arrow.setAttribute("aria-hidden", "true");
        trigger.append(value, arrow);

        const menu = document.createElement("div");
        menu.className = "select-picker-menu";
        menu.hidden = true;
        const optionsList = document.createElement("div");
        optionsList.className = "select-picker-options";
        optionsList.id = `${select.id}-options`;
        optionsList.setAttribute("role", "listbox");
        menu.append(optionsList);
        picker.append(trigger, menu);

        trigger.addEventListener("click", () => {
          setSelectPickerOpen(picker, trigger.getAttribute("aria-expanded") !== "true");
        });
        trigger.addEventListener("keydown", (event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setSelectPickerOpen(picker, true);
          }
        });
        optionsList.addEventListener("click", (event) => {
          const option = event.target.closest(".select-picker-option");
          if (!option) return;
          select.value = option.dataset.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          setSelectPickerOpen(picker, false, true);
        });
        optionsList.addEventListener("keydown", (event) => {
          const options = [...optionsList.querySelectorAll(".select-picker-option")];
          const currentIndex = options.indexOf(event.target.closest(".select-picker-option"));
          if (event.key === "Escape") {
            event.preventDefault();
            setSelectPickerOpen(picker, false, true);
          } else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && options.length) {
            event.preventDefault();
            const direction = event.key === "ArrowDown" ? 1 : -1;
            options[(currentIndex + direction + options.length) % options.length].focus();
          } else if ((event.key === "Home" || event.key === "End") && options.length) {
            event.preventDefault();
            options[event.key === "Home" ? 0 : options.length - 1].focus();
          }
        });
        select.addEventListener("change", () => renderSelectPicker(picker));
        renderSelectPicker(picker);
        return picker;
      });

      document.addEventListener("pointerdown", (event) => {
        pickers.forEach((picker) => {
          if (!picker.contains(event.target)) setSelectPickerOpen(picker, false);
        });
      });
    }

    function updateRateControls() {
      const labels = translations[activeLanguage];
      rateSearch.placeholder = labels.searchPlaceholder;
      rateSearch.setAttribute("aria-label", labels.searchLabel);
      rateAmountInput.setAttribute("aria-label", labels.rateAmount);
      rateViewToggle.checked = showReverseRates;
      ratesNote.textContent = showReverseRates ? labels.reverseRatesNote : labels.ratesNote;
    }

    function countryFlagCode(flag) {
      const indicators = Array.from(flag, (character) => character.codePointAt(0))
        .filter((point) => point >= 0x1f1e6 && point <= 0x1f1ff);
      if (indicators.length !== 2) return null;
      return String.fromCharCode(...indicators.map((point) => point - 0x1f1e6 + 65)).toLowerCase();
    }

    function buildOptions() {
      [fromSelect, toSelect].forEach((select) => {
        const selectedCode = select.value;
        select.replaceChildren();
        currencies.forEach((currency) => {
          const option = new Option(`${currency.flag} ${currency.code} — ${currencyName(currency)}`, currency.code);
          select.add(option);
        });
        if (selectedCode) select.value = selectedCode;
      });
      document.querySelectorAll("[data-currency-picker]").forEach(renderCurrencyPicker);
    }

    function renderRateCards() {
      ratesGrid.replaceChildren();
      const query = searchKey(rateSearch.value);
      const inputAmount = Number(rateAmountInput.value);
      const validAmount = rateAmountInput.value.trim() !== "" && Number.isFinite(inputAmount) && inputAmount >= 0;
      rateAmountInput.setAttribute("aria-invalid", String(!validAmount));
      const matchingCurrencies = currencies.filter((currency) => {
        if (currency.code === "UZS") return false;
        const searchableText = [
          currency.code,
          currency.symbol,
          currencyName(currency),
          ...Object.values(currency.names),
          ...Object.keys(localeCodes).map((language) => countryName(currency, language))
        ].join(" ");
        return !query || searchKey(searchableText).includes(query);
      });
      if (!query) {
        matchingCurrencies.sort((left, right) => {
          const leftRank = primaryCurrencyCodes.indexOf(left.code);
          const rightRank = primaryCurrencyCodes.indexOf(right.code);
          return (leftRank < 0 ? primaryCurrencyCodes.length : leftRank)
            - (rightRank < 0 ? primaryCurrencyCodes.length : rightRank);
        });
      }
      const visibleCurrencies = query || showAllRates
        ? matchingCurrencies
        : matchingCurrencies.slice(0, 9);

      visibleCurrencies.forEach((currency) => {
        const card = document.createElement("article");
        card.className = "rate-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-haspopup", "dialog");
        card.setAttribute("aria-label", `${translations[activeLanguage].historyTitle}: ${currency.code} — ${currencyName(currency)}`);
        card.addEventListener("click", () => openCurrencyHistory(currency));
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCurrencyHistory(currency);
          }
        });
        const currencyInfo = document.createElement("div");
        currencyInfo.className = "rate-currency";
        const icon = document.createElement("span");
        icon.className = "currency-symbol";
        icon.setAttribute("aria-label", `${currency.symbol}, ${currency.flag}`);
        const flagCode = countryFlagCode(currency.flag);
        const flag = document.createElement(flagCode ? "img" : "span");
        flag.className = flagCode ? "currency-flag" : "currency-flag-generic";
        flag.setAttribute("aria-hidden", "true");
        if (flagCode) {
          flag.src = `https://flagcdn.com/24x18/${flagCode}.png`;
          flag.alt = "";
        } else {
          flag.textContent = currency.flag;
        }
        const symbol = document.createElement("span");
        symbol.className = "currency-glyph";
        symbol.textContent = currency.symbol;
        const code = document.createElement("strong");
        code.textContent = currency.code;
        const description = document.createElement("span");
        description.textContent = `${countryName(currency)} · ${currencyName(currency)}`;
        const name = document.createElement("div");
        name.className = "rate-name";
        name.append(code, description);
        icon.append(flag, symbol);
        currencyInfo.append(icon, name);
        const value = document.createElement("div");
        value.className = "rate-value";
        const amount = document.createElement("strong");
        const displayedRate = currency.rate === null || !validAmount
          ? null
          : showReverseRates
            ? inputAmount / currency.rate
            : inputAmount * currency.rate;
        amount.textContent = currency.rate === null || !Number.isFinite(displayedRate)
          ? "—"
          : formatNumber(displayedRate, showReverseRates
            ? { maximumSignificantDigits: 7 }
            : { minimumFractionDigits: 2, maximumFractionDigits: 6 });
        const unit = document.createElement("span");
        unit.textContent = showReverseRates ? currency.code : "UZS";
        value.append(amount, unit);
        card.append(currencyInfo, value);
        ratesGrid.append(card);
      });
      rateCount.textContent = translations[activeLanguage].resultsFound.replace("{count}", String(matchingCurrencies.length));
      rateEmpty.hidden = matchingCurrencies.length > 0;
      ratesGrid.hidden = matchingCurrencies.length === 0;
      const showExpansion = !query && matchingCurrencies.length > 9;
      ratesMoreButton.parentElement.hidden = !showExpansion;
      ratesMoreButton.textContent = translations[activeLanguage][showAllRates ? "showLessRates" : "showAllRates"];
      ratesMoreButton.setAttribute("aria-expanded", String(showAllRates));
    }

    function setRatesExpanded(expanded) {
      if (rateListTransitionHandler) ratesGrid.removeEventListener("transitionend", rateListTransitionHandler);
      window.clearTimeout(rateListAnimationTimer);
      const currentHeight = ratesGrid.getBoundingClientRect().height;
      showAllRates = expanded;
      ratesGrid.classList.add("is-animated");
      ratesGrid.style.maxHeight = `${currentHeight}px`;
      ratesGrid.style.overflow = "hidden";
      renderRateCards();

      requestAnimationFrame(() => {
        ratesGrid.style.maxHeight = `${ratesGrid.scrollHeight}px`;
      });

      const finishTransition = (event) => {
        if (event && (event.target !== ratesGrid || event.propertyName !== "max-height")) return;
        ratesGrid.removeEventListener("transitionend", rateListTransitionHandler);
        rateListTransitionHandler = null;
        ratesGrid.classList.remove("is-animated");
        ratesGrid.style.maxHeight = "";
        ratesGrid.style.overflow = "";
      };
      rateListTransitionHandler = finishTransition;
      ratesGrid.addEventListener("transitionend", finishTransition);
      rateListAnimationTimer = window.setTimeout(() => finishTransition(), 450);
    }

    function updateHistoryStatus(state, message) {
      historyStatus.dataset.state = state;
      historyStatus.textContent = message;
    }

    function formatHistoryDate(date) {
      return new Intl.DateTimeFormat(localeCodes[activeLanguage], {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
      }).format(new Date(`${date}T00:00:00Z`));
    }

    function configureHistoryDates(series) {
      const firstDate = series[0].date;
      const lastDate = series[series.length - 1].date;
      const defaultStart = new Date(`${lastDate}T00:00:00Z`);
      defaultStart.setUTCFullYear(defaultStart.getUTCFullYear() - 1);
      const firstAvailable = new Date(`${firstDate}T00:00:00Z`);
      const startDate = defaultStart < firstAvailable ? firstDate : defaultStart.toISOString().slice(0, 10);
      historyFromInput.min = firstDate;
      historyFromInput.max = lastDate;
      historyToInput.min = firstDate;
      historyToInput.max = lastDate;
      historyFromInput.value = startDate;
      historyToInput.value = lastDate;
      historyFromInput.disabled = false;
      historyToInput.disabled = false;
      historyViewStart = null;
      historyViewEnd = null;
      setActiveHistoryPreset("1y");
      renderHistoryChart();
    }

    function setActiveHistoryPreset(range) {
      document.querySelectorAll("[data-history-range]").forEach((button) => {
        const active = button.dataset.historyRange === range;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }

    function activateRatesTab(index, moveFocus = false) {
      ratesTabButtons.forEach((button, tabIndex) => {
        const active = tabIndex === index;
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
        ratesTabPanels[tabIndex].hidden = !active;
      });
      if (moveFocus) ratesTabButtons[index].focus();
    }

    function updateHistoryScrollbar(bounds, viewStart, viewEnd) {
      const totalSpan = bounds.end - bounds.start;
      const viewSpan = viewEnd - viewStart;
      const thumbRatio = totalSpan > 0 ? Math.min(1, viewSpan / totalSpan) : 1;
      const maxStart = Math.max(1, totalSpan - viewSpan);
      const positionRatio = thumbRatio >= 1 ? 0 : (viewStart - bounds.start) / maxStart;
      historyScrollThumb.style.width = `${Math.max(thumbRatio * 100, 4)}%`;
      historyScrollThumb.style.left = `${Math.max(0, Math.min(100 - Math.max(thumbRatio * 100, 4), positionRatio * (1 - thumbRatio) * 100))}%`;
      historyScrollTrack.setAttribute("aria-disabled", String(thumbRatio >= 1));
      historyScrollTrack.setAttribute("aria-valuemin", "0");
      historyScrollTrack.setAttribute("aria-valuemax", "1000");
      historyScrollTrack.setAttribute("aria-valuenow", String(Math.round(positionRatio * 1000)));
      historyScrollTrack.setAttribute("aria-valuetext", `${formatHistoryDate(new Date(viewStart).toISOString().slice(0, 10))} – ${formatHistoryDate(new Date(viewEnd).toISOString().slice(0, 10))}`);
      historyScrollStart.textContent = formatHistoryDate(new Date(viewStart).toISOString().slice(0, 10));
      historyScrollEnd.textContent = formatHistoryDate(new Date(viewEnd).toISOString().slice(0, 10));
    }

    function moveHistoryScrollbarTo(positionRatio, bounds, viewSpan = historyViewEnd - historyViewStart) {
      const maxStart = bounds.end - bounds.start - viewSpan;
      const start = bounds.start + Math.max(0, Math.min(1, positionRatio)) * Math.max(0, maxStart);
      setHistoryViewport(start, start + viewSpan, bounds);
    }

    function updateHistoryStatistics(points, numberFormatter) {
      const values = points.map((point) => point.value);
      const firstValue = points[0].value;
      const latestValue = points[points.length - 1].value;
      const minimum = Math.min(...values);
      const maximum = Math.max(...values);
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      const change = firstValue === 0 ? 0 : (latestValue - firstValue) / firstValue * 100;
      historyStatLatest.textContent = `${numberFormatter.format(latestValue)} UZS`;
      historyStatMin.textContent = `${numberFormatter.format(minimum)} UZS`;
      historyStatMax.textContent = `${numberFormatter.format(maximum)} UZS`;
      historyStatAverage.textContent = `${numberFormatter.format(average)} UZS`;
      historyStatChange.textContent = `${change > 0 ? "+" : ""}${numberFormatter.format(change)}%`;
      historyStatChange.parentElement.dataset.trend = change > 0 ? "up" : change < 0 ? "down" : "neutral";
    }

    function clearHistoryStatistics() {
      [historyStatLatest, historyStatMin, historyStatMax, historyStatAverage, historyStatChange].forEach((stat) => {
        stat.textContent = "—";
        stat.parentElement.dataset.trend = "neutral";
      });
    }

    function setHistoryViewport(start, end, bounds) {
      const totalSpan = bounds.end - bounds.start;
      const minimumSpan = Math.min(totalSpan, 24 * 60 * 60 * 1000);
      let span = Math.max(minimumSpan, Math.min(totalSpan, end - start));
      let nextStart = start;
      let nextEnd = start + span;
      if (nextStart < bounds.start) {
        nextStart = bounds.start;
        nextEnd = nextStart + span;
      }
      if (nextEnd > bounds.end) {
        nextEnd = bounds.end;
        nextStart = nextEnd - span;
      }
      if (span >= totalSpan) {
        historyViewStart = null;
        historyViewEnd = null;
      } else {
        historyViewStart = nextStart;
        historyViewEnd = nextEnd;
      }
      renderHistoryChart();
    }

    function getHistoryBounds() {
      const start = historyFromInput.value;
      const end = historyToInput.value;
      return {
        start: Date.parse(`${start}T00:00:00Z`),
        end: Date.parse(`${end}T00:00:00Z`) + 24 * 60 * 60 * 1000 - 1
      };
    }

    function zoomHistory(factor, anchorRatio = historyPointerRatio) {
      if (!selectedHistorySeries || !historyFromInput.value || !historyToInput.value) return;
      const bounds = getHistoryBounds();
      const currentStart = historyViewStart ?? bounds.start;
      const currentEnd = historyViewEnd ?? bounds.end;
      const currentSpan = currentEnd - currentStart;
      const nextSpan = currentSpan * factor;
      const anchor = currentStart + currentSpan * Math.min(1, Math.max(0, anchorRatio));
      setHistoryViewport(anchor - nextSpan * anchorRatio, anchor + nextSpan * (1 - anchorRatio), bounds);
    }

    function selectHistoryRange(range) {
      if (!selectedHistorySeries) return;
      const latestDate = selectedHistorySeries[selectedHistorySeries.length - 1].date;
      const firstDate = selectedHistorySeries[0].date;
      const fromDate = new Date(`${latestDate}T00:00:00Z`);
      const months = { "1m": 1, "3m": 3, "6m": 6, "1y": 12, "3y": 36, "5y": 60, "7y": 84 };
      if (range === "all") {
        historyFromInput.value = firstDate;
      } else {
        const dayOfMonth = fromDate.getUTCDate();
        fromDate.setUTCDate(1);
        fromDate.setUTCMonth(fromDate.getUTCMonth() - months[range]);
        const daysInTargetMonth = new Date(Date.UTC(fromDate.getUTCFullYear(), fromDate.getUTCMonth() + 1, 0)).getUTCDate();
        fromDate.setUTCDate(Math.min(dayOfMonth, daysInTargetMonth));
        const earliest = new Date(`${firstDate}T00:00:00Z`);
        historyFromInput.value = fromDate < earliest ? firstDate : fromDate.toISOString().slice(0, 10);
      }
      historyToInput.value = latestDate;
      historyViewStart = null;
      historyViewEnd = null;
      setActiveHistoryPreset(range);
      renderHistoryChart();
    }

    function renderHistoryChart() {
      const previousSvg = historyChart.querySelector("svg");
      if (previousSvg) previousSvg.remove();
      historyTooltip.hidden = true;
      clearHistoryStatistics();
      if (!selectedHistorySeries || !selectedHistoryCurrency) return;

      const startDate = historyFromInput.value;
      const endDate = historyToInput.value;
      if (!startDate || !endDate || startDate > endDate) {
        updateHistoryStatus("error", translations[activeLanguage].historyInvalidRange);
        return;
      }

      const points = selectedHistorySeries.filter((point) => point.date >= startDate && point.date <= endDate);
      if (!points.length) {
        updateHistoryStatus("error", translations[activeLanguage].historyNoData);
        return;
      }

      const labels = translations[activeLanguage];
      const numberFormatter = new Intl.NumberFormat(localeCodes[activeLanguage], { maximumFractionDigits: 2 });
      updateHistoryStatistics(points, numberFormatter);
      const width = Math.max(300, Math.round(historyChart.clientWidth));
      const compactChart = width < 500;
      const height = Math.max(220, Math.round(historyChart.clientHeight));
      const padding = compactChart
        ? { top: 18, right: 12, bottom: 42, left: 58 }
        : { top: 20, right: 24, bottom: 48, left: 78 };
      const plotWidth = width - padding.left - padding.right;
      const plotHeight = height - padding.top - padding.bottom;
      const bounds = getHistoryBounds();
      const viewStart = historyViewStart ?? bounds.start;
      const viewEnd = historyViewEnd ?? bounds.end;
      updateHistoryScrollbar(bounds, viewStart, viewEnd);
      const chartPoints = points.filter((point) => {
        const timestamp = Date.parse(`${point.date}T00:00:00Z`);
        return timestamp >= viewStart && timestamp <= viewEnd;
      });
      if (!chartPoints.length) {
        updateHistoryStatus("error", labels.historyNoData);
        return;
      }
      updateHistoryStatus("ready", labels.historyPoints.replace("{count}", String(chartPoints.length)));
      const values = chartPoints.map((point) => point.value);
      let minimum = Math.min(...values);
      let maximum = Math.max(...values);
      if (minimum === maximum) {
        const margin = Math.max(Math.abs(minimum) * 0.02, 1);
        minimum -= margin;
        maximum += margin;
      }
      const firstTimestamp = viewStart;
      const lastTimestamp = viewEnd;
      const xFor = (point) => padding.left + (lastTimestamp === firstTimestamp
        ? plotWidth / 2
        : (Date.parse(`${point.date}T00:00:00Z`) - firstTimestamp) / (lastTimestamp - firstTimestamp) * plotWidth);
      const yFor = (value) => padding.top + (maximum - value) / (maximum - minimum) * plotHeight;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", labels.historyChartLabel.replace("{code}", selectedHistoryCurrency.code));

      const makeSvgElement = (tag, attributes = {}) => {
        const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
        Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
        return element;
      };
      for (let index = 0; index <= 4; index += 1) {
        const ratio = index / 4;
        const y = padding.top + ratio * plotHeight;
        const value = maximum - ratio * (maximum - minimum);
        svg.append(makeSvgElement("line", { x1: padding.left, y1: y, x2: width - padding.right, y2: y, class: "chart-grid" }));
        const yLabel = makeSvgElement("text", { x: padding.left - 10, y: y + 4, "text-anchor": "end" });
        yLabel.textContent = numberFormatter.format(value);
        svg.append(yLabel);
      }

      const dateTickCount = compactChart ? 2 : 4;
      for (let index = 0; index <= dateTickCount; index += 1) {
        const ratio = index / dateTickCount;
        const timestamp = firstTimestamp + ratio * (lastTimestamp - firstTimestamp);
        const x = padding.left + ratio * plotWidth;
        const dateLabel = makeSvgElement("text", { x, y: height - 15, "text-anchor": index === 0 ? "start" : index === dateTickCount ? "end" : "middle" });
        const axisDate = new Date(timestamp);
        dateLabel.textContent = compactChart
          ? new Intl.DateTimeFormat(localeCodes[activeLanguage], { month: "short", year: "2-digit", timeZone: "UTC" }).format(axisDate)
          : formatHistoryDate(axisDate.toISOString().slice(0, 10));
        svg.append(dateLabel);
      }

      const pathData = chartPoints.map((point, index) => `${index ? "L" : "M"}${xFor(point).toFixed(2)},${yFor(point.value).toFixed(2)}`).join(" ");
      const baseline = height - padding.bottom;
      const area = makeSvgElement("path", {
        d: `${pathData} L${xFor(chartPoints[chartPoints.length - 1]).toFixed(2)},${baseline} L${xFor(chartPoints[0]).toFixed(2)},${baseline} Z`,
        class: "chart-area"
      });
      const line = makeSvgElement("path", { d: pathData, class: "chart-line" });
      svg.append(area, line);

      const pointStride = Math.max(1, Math.ceil(chartPoints.length / 160));
      chartPoints.forEach((point, index) => {
        if (index % pointStride !== 0 && index !== chartPoints.length - 1) return;
        const circle = makeSvgElement("circle", { cx: xFor(point), cy: yFor(point.value), r: 3, class: "chart-point" });
        const title = makeSvgElement("title");
        title.textContent = `${formatHistoryDate(point.date)} · ${numberFormatter.format(point.value)} UZS`;
        circle.append(title);
        svg.append(circle);
      });
      const crosshair = makeSvgElement("line", { x1: 0, x2: 0, y1: padding.top, y2: height - padding.bottom, class: "chart-crosshair", visibility: "hidden" });
      const hoverPoint = makeSvgElement("circle", { cx: 0, cy: 0, r: 5, class: "chart-hover-point", visibility: "hidden" });
      svg.append(crosshair, hoverPoint);
      historyChart.insertBefore(svg, historyTooltip);
      historyTooltip.setAttribute("aria-hidden", "true");

      historyChart.onpointermove = (event) => {
        if (historyPanState) {
          const delta = event.clientX - historyPanState.startX;
          const shift = -delta / svg.getBoundingClientRect().width * (historyPanState.end - historyPanState.start);
          setHistoryViewport(historyPanState.start + shift, historyPanState.end + shift, bounds);
          return;
        }
        const rect = svg.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        historyPointerRatio = Math.min(1, Math.max(0, (ratio * width - padding.left) / plotWidth));
        const localX = padding.left + historyPointerRatio * plotWidth;
        const nearest = chartPoints.reduce((best, point) => Math.abs(xFor(point) - localX) < Math.abs(xFor(best) - localX) ? point : best, chartPoints[0]);
        const pointX = xFor(nearest);
        crosshair.setAttribute("x1", String(pointX));
        crosshair.setAttribute("x2", String(pointX));
        crosshair.setAttribute("visibility", "visible");
        hoverPoint.setAttribute("cx", String(pointX));
        hoverPoint.setAttribute("cy", String(yFor(nearest.value)));
        hoverPoint.setAttribute("visibility", "visible");
        historyTooltip.hidden = false;
        historyTooltip.querySelector("strong").textContent = `${numberFormatter.format(nearest.value)} UZS`;
        historyTooltip.querySelector("span").textContent = formatHistoryDate(nearest.date);
        const tooltipLeft = event.clientX - rect.left > rect.width * 0.68 ? "auto" : "10px";
        historyTooltip.style.left = tooltipLeft;
        historyTooltip.style.right = tooltipLeft === "auto" ? "10px" : "auto";
      };
      historyChart.onpointerleave = () => {
        if (!historyPanState) historyTooltip.hidden = true;
      };
      historyChart.onpointerdown = (event) => {
        if (event.button !== 0 || !historyViewStart) return;
        historyPanState = { startX: event.clientX, start: historyViewStart, end: historyViewEnd };
        historyChart.classList.add("is-panning");
        historyChart.setPointerCapture(event.pointerId);
      };
      historyChart.onpointerup = (event) => {
        historyPanState = null;
        historyChart.classList.remove("is-panning");
        if (historyChart.hasPointerCapture(event.pointerId)) historyChart.releasePointerCapture(event.pointerId);
      };
      historyChart.onpointercancel = () => {
        historyPanState = null;
        historyChart.classList.remove("is-panning");
      };
      historyChart.onwheel = (event) => {
        event.preventDefault();
        zoomHistory(event.deltaY < 0 ? 0.8 : 1.25);
      };
      renderedHistoryWidth = width;
      renderedHistoryHeight = height;
    }

    async function openCurrencyHistory(currency) {
      selectedHistoryCurrency = currency;
      selectedHistorySeries = historyCache.get(currency.code) || null;
      historyTitle.textContent = `${translations[activeLanguage].historyTitle} · ${currency.code}`;
      historySubtitle.textContent = `${countryName(currency)} · ${currencyName(currency)}`;
      const previousSvg = historyChart.querySelector("svg");
      if (previousSvg) previousSvg.remove();
      historyTooltip.hidden = true;
      historyFromInput.disabled = true;
      historyToInput.disabled = true;
      updateHistoryStatus("loading", translations[activeLanguage].historyLoading);
      historyDialog.classList.remove("is-closing");
      window.clearTimeout(historyCloseTimer);
      historyDialog.showModal();
      historyDialog.scrollTop = 0;
      historyDialog.scrollLeft = 0;
      const requestId = ++historyRequestId;

      if (selectedHistorySeries) {
        configureHistoryDates(selectedHistorySeries);
        historyFromInput.focus();
        return;
      }

      const controller = new AbortController();
      historyRequestController = controller;
      const timeoutId = window.setTimeout(() => controller.abort(), 45000);
      try {
        const historyUrl = window.location.protocol === "file:"
          ? new URL(`data/history/${encodeURIComponent(currency.code)}.json`, window.location.href)
          : `/data/history/${encodeURIComponent(currency.code)}.json`;
        const response = await fetch(historyUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`Local ${currency.code} history returned HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error(`Local ${currency.code} history is not a data list`);
        const series = data.map((item) => ({
          date: typeof item.date === "string" ? item.date : "",
          value: Number(item.value)
        }));
        const hasInvalidPoint = series.some((point) => {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(point.date) || !Number.isFinite(point.value) || point.value <= 0) return true;
          const timestamp = Date.parse(`${point.date}T00:00:00Z`);
          return !Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== point.date;
        });
        if (hasInvalidPoint) throw new Error("CBU history contains an invalid date or rate");
        series.sort((left, right) => left.date.localeCompare(right.date));
        if (!series.length) throw new Error("CBU history contains no valid data points");
        historyCache.set(currency.code, series);
        if (!historyDialog.open || requestId !== historyRequestId) return;
        selectedHistorySeries = series;
        configureHistoryDates(series);
        historyFromInput.focus();
      } catch (error) {
        if (controller.signal.aborted && !historyDialog.open) return;
        if (!controller.signal.aborted) controller.abort();
        console.error(`Could not load CBU history for ${currency.code}:`, error);
        if (historyDialog.open && requestId === historyRequestId) {
          const svg = historyChart.querySelector("svg");
          if (svg) svg.remove();
          clearHistoryStatistics();
          updateHistoryStatus("error", translations[activeLanguage].historyError);
        }
      } finally {
        window.clearTimeout(timeoutId);
        if (historyRequestController === controller) historyRequestController = null;
      }
    }

    function updateConversion() {
      const amount = Number(amountInput.value);
      const from = currencies.find((currency) => currency.code === fromSelect.value);
      const to = currencies.find((currency) => currency.code === toSelect.value);
      const labels = translations[activeLanguage];

      if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount < 0 || !from || !to) {
        result.textContent = labels.invalidAmount;
        rateLine.textContent = "";
        return;
      }
      if (from.rate === null || to.rate === null) {
        result.textContent = labels.noRate;
        rateLine.textContent = "";
        return;
      }

      const converted = amount * from.rate / to.rate;
      const rate = from.rate / to.rate;
      result.textContent = `${formatNumber(converted, { maximumFractionDigits: 2 })} ${to.code}`;
      rateLine.textContent = `1 ${from.code} = ${formatNumber(rate, { maximumSignificantDigits: 8 })} ${to.code}`;
    }

    function setLanguage(language) {
      if (!translations[language]) return;
      activeLanguage = language;
      savePreference("convertion-language", language);
      document.documentElement.lang = language;
      document.title = `${translations[language].pageTitle} — convertion.uz`;
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[language][key]) element.textContent = translations[language][key];
      });
      document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;
        if (translations[language][key]) element.setAttribute("aria-label", translations[language][key]);
      });
      document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        const key = element.dataset.i18nTitle;
        if (translations[language][key]) element.title = translations[language][key];
      });
      document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (translations[language][key]) element.placeholder = translations[language][key];
      });
      languageSelect.value = language;
      languageSelect.setAttribute("aria-label", translations[language].languageLabel);
      fromSelect.setAttribute("aria-label", language === "ru" ? "Исходная валюта" : language === "uz" ? "Boshlang'ich valyuta" : "Source currency");
      toSelect.setAttribute("aria-label", language === "ru" ? "Целевая валюта" : language === "uz" ? "Maqsadli valyuta" : "Target currency");
      document.querySelector("#swap").title = language === "ru" ? "Поменять валюты местами" : language === "uz" ? "Valyutalarni almashtirish" : "Swap currencies";
      document.querySelector("#swap").setAttribute("aria-label", document.querySelector("#swap").title);
      buildOptions();
      document.querySelectorAll("[data-select-picker]").forEach(renderSelectPicker);
      updateRateControls();
      renderRateCards();
      renderCommercialBankRates();
      updateCommercialBankStatus();
      updateRateStatus();
      updateConversion();
      applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
      if (historyDialog.open && selectedHistoryCurrency) {
        historyTitle.textContent = `${translations[language].historyTitle} · ${selectedHistoryCurrency.code}`;
        historySubtitle.textContent = `${countryName(selectedHistoryCurrency)} · ${currencyName(selectedHistoryCurrency)}`;
        if (historyStatus.dataset.state === "loading") {
          updateHistoryStatus("loading", translations[language].historyLoading);
        } else if (historyStatus.dataset.state === "error" && !selectedHistorySeries) {
          updateHistoryStatus("error", translations[language].historyError);
        } else {
          renderHistoryChart();
        }
      }
    }

    async function loadOfficialRates() {
      if (rateRequestInProgress) return;
      rateRequestInProgress = true;
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 12000);
      try {
        const response = await fetch(apiUrl, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error(`CBU returned HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("CBU response is not a currency list");

        const seenCodes = new Set();
        const bankCurrencies = data.filter((item) => item.Ccy !== "UZS").map((item) => {
          const code = typeof item.Ccy === "string" ? item.Ccy.trim().toUpperCase() : "";
          const nominal = Number(item.Nominal);
          const rate = Number(item.Rate);
          if (!code || seenCodes.has(code) || !Number.isFinite(rate) || rate <= 0 || !Number.isFinite(nominal) || nominal <= 0) {
            throw new Error("CBU response contains an invalid or duplicate currency rate");
          }
          seenCodes.add(code);
          const metadata = currencyMetadata[code];
          const flag = metadata ? metadata[0] : "🌐";
          return {
            code,
            flag,
            symbol: metadata ? metadata[1] : code,
            nominal,
            rate: rate / nominal,
            region: countryFlagCode(flag)?.toUpperCase() || null,
            names: {
              ru: item.CcyNm_RU || code,
              uz: item.CcyNm_UZ || item.CcyNm_RU || code,
              en: item.CcyNm_EN || item.CcyNm_RU || code
            }
          };
        });
        if (!bankCurrencies.length) throw new Error("CBU response contains no currencies");

        const selectedFrom = fromSelect.value;
        const selectedTo = toSelect.value;
        currencies = [uzsCurrency, ...bankCurrencies];
        buildOptions();
        fromSelect.value = currencies.some(({ code }) => code === selectedFrom) ? selectedFrom : "UZS";
        toSelect.value = currencies.some(({ code }) => code === selectedTo) ? selectedTo : "USD";
        officialRateDate = data.find((item) => item.Date)?.Date || null;
        rateLoadFailed = false;
        renderRateCards();
        updateConversion();
        updateRateStatus();
      } catch (error) {
        console.error("Could not load official CBU exchange rates:", error);
        rateLoadFailed = true;
        updateRateStatus();
        updatedLine.setAttribute("role", "status");
        updateConversion();
      } finally {
        window.clearTimeout(timeoutId);
        rateRequestInProgress = false;
      }
    }

    buildOptions();
    fromSelect.value = "USD";
    toSelect.value = "UZS";
    setLanguage(activeLanguage);
    initializeCurrencyPickers();
    initializeSelectPickers();

    [amountInput, fromSelect, toSelect].forEach((element) => {
      element.addEventListener("input", updateConversion);
      element.addEventListener("change", updateConversion);
    });

    document.querySelectorAll(".number-stepper button").forEach((button) => {
      button.addEventListener("click", () => {
        const input = button.closest(".number-control").querySelector('input[type="number"]');
        const stepValue = input.step === "any" ? 1 : Number(input.step);
        const currentValue = input.value === "" ? 0 : Number(input.value);
        const direction = button.dataset.step === "up" ? 1 : -1;
        const minimum = input.min === "" ? -Infinity : Number(input.min);
        const maximum = input.max === "" ? Infinity : Number(input.max);
        const nextValue = Math.min(maximum, Math.max(minimum, currentValue + direction * stepValue));
        input.value = String(Number(nextValue.toPrecision(12)));
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.focus();
      });
    });

    const swapButton = document.querySelector("#swap");
    swapButton.addEventListener("click", () => {
      const previousFrom = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = previousFrom;
      fromSelect.dispatchEvent(new Event("change", { bubbles: true }));
      toSelect.dispatchEvent(new Event("change", { bubbles: true }));
      swapButton.classList.remove("is-swapping");
      void swapButton.offsetWidth;
      swapButton.classList.add("is-swapping");
    });
    swapButton.addEventListener("animationend", (event) => {
      if (event.animationName === "swap-rotate") swapButton.classList.remove("is-swapping");
    });

    languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
    [bankFilterSearch, bankFilterCurrency, bankFilterType, bankFilterMinimum, bankFilterMaximum].forEach((control) => {
      control.addEventListener(control.tagName === "SELECT" ? "change" : "input", renderCommercialBankRates);
    });
    document.querySelectorAll("[data-bank-sort]").forEach((button) => {
      button.addEventListener("click", () => {
        if (bankSortKey === button.dataset.bankSort) {
          bankSortDirection = bankSortDirection === "ascending" ? "descending" : "ascending";
        } else {
          bankSortKey = button.dataset.bankSort;
          bankSortDirection = "ascending";
        }
        renderCommercialBankRates();
      });
    });
    ratesTabButtons.forEach((button, index) => {
      button.addEventListener("click", () => activateRatesTab(index));
      button.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const direction = event.key === "ArrowRight" ? 1 : -1;
          activateRatesTab(index + direction, true);
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          activateRatesTab(event.key === "Home" ? 0 : ratesTabButtons.length - 1, true);
        }
      });
    });

    rateSearch.addEventListener("input", () => {
      showAllRates = false;
      ratesGrid.classList.remove("is-animated");
      ratesGrid.style.maxHeight = "";
      ratesGrid.style.overflow = "";
      renderRateCards();
    });
    rateAmountInput.addEventListener("input", renderRateCards);
    ratesMoreButton.addEventListener("click", () => setRatesExpanded(!showAllRates));
    rateViewToggle.addEventListener("change", () => {
      showReverseRates = rateViewToggle.checked;
      updateRateControls();
      renderRateCards();
    });
    [historyFromInput, historyToInput].forEach((input) => {
      const onDateChange = () => {
        historyViewStart = null;
        historyViewEnd = null;
        setActiveHistoryPreset(null);
        renderHistoryChart();
      };
      input.addEventListener("input", onDateChange);
      input.addEventListener("change", onDateChange);
    });
    document.querySelectorAll("[data-history-range]").forEach((button) => {
      button.addEventListener("click", () => selectHistoryRange(button.dataset.historyRange));
    });
    document.querySelector("#history-zoom-in").addEventListener("click", () => zoomHistory(0.7));
    document.querySelector("#history-zoom-out").addEventListener("click", () => zoomHistory(1.4));
    document.querySelector("#history-zoom-reset").addEventListener("click", () => {
      historyViewStart = null;
      historyViewEnd = null;
      renderHistoryChart();
    });
    historyScrollTrack.addEventListener("pointerdown", (event) => {
      if (historyScrollTrack.getAttribute("aria-disabled") === "true") return;
      const bounds = getHistoryBounds();
      const viewSpan = historyViewEnd - historyViewStart;
      const trackRect = historyScrollTrack.getBoundingClientRect();
      const thumbRect = historyScrollThumb.getBoundingClientRect();
      const clickedThumb = event.target === historyScrollThumb;
      historyScrollbarDrag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        initialStart: historyViewStart,
        viewSpan,
        bounds,
        trackWidth: trackRect.width,
        thumbWidth: thumbRect.width,
        clickedThumb
      };
      historyScrollTrack.setPointerCapture(event.pointerId);
      if (!clickedThumb) {
        const ratio = (event.clientX - trackRect.left) / trackRect.width;
        moveHistoryScrollbarTo(ratio, bounds, viewSpan);
        historyScrollbarDrag.initialStart = historyViewStart;
        historyScrollbarDrag.startX = event.clientX;
      }
    });
    historyScrollTrack.addEventListener("pointermove", (event) => {
      if (!historyScrollbarDrag || historyScrollbarDrag.pointerId !== event.pointerId) return;
      const { bounds, viewSpan, initialStart, trackWidth, thumbWidth, startX } = historyScrollbarDrag;
      const maxStart = bounds.end - bounds.start - viewSpan;
      const usableTrackWidth = Math.max(1, trackWidth - thumbWidth);
      const shift = (event.clientX - startX) / usableTrackWidth * maxStart;
      const ratio = maxStart > 0 ? (initialStart - bounds.start + shift) / maxStart : 0;
      moveHistoryScrollbarTo(ratio, bounds, viewSpan);
    });
    const stopHistoryScrollbarDrag = (event) => {
      if (!historyScrollbarDrag || historyScrollbarDrag.pointerId !== event.pointerId) return;
      historyScrollbarDrag = null;
      if (historyScrollTrack.hasPointerCapture(event.pointerId)) historyScrollTrack.releasePointerCapture(event.pointerId);
    };
    historyScrollTrack.addEventListener("pointerup", stopHistoryScrollbarDrag);
    historyScrollTrack.addEventListener("pointercancel", stopHistoryScrollbarDrag);
    historyScrollTrack.addEventListener("keydown", (event) => {
      if (historyScrollTrack.getAttribute("aria-disabled") === "true") return;
      const bounds = getHistoryBounds();
      const viewSpan = historyViewEnd - historyViewStart;
      const currentRatio = (historyViewStart - bounds.start) / (bounds.end - bounds.start - viewSpan);
      const shifts = {
        ArrowLeft: -0.05, ArrowRight: 0.05, PageUp: -0.25, PageDown: 0.25,
        Home: -currentRatio, End: 1 - currentRatio
      };
      if (!(event.key in shifts)) return;
      event.preventDefault();
      moveHistoryScrollbarTo(currentRatio + shifts[event.key], bounds, viewSpan);
    });
    const closeHistoryDialog = () => {
      if (!historyDialog.open || historyDialog.classList.contains("is-closing")) return;
      historyDialog.classList.add("is-closing");
      historyCloseTimer = window.setTimeout(() => {
        if (historyDialog.open) historyDialog.close();
      }, 220);
    };
    window.addEventListener("resize", () => {
      if (historyDialog.open) renderHistoryChart();
    });
    if ("ResizeObserver" in window) {
      const historyResizeObserver = new ResizeObserver(() => {
        const width = Math.round(historyChart.clientWidth);
        const height = Math.round(historyChart.clientHeight);
        if (historyDialog.open && selectedHistorySeries && (width !== renderedHistoryWidth || height !== renderedHistoryHeight)) renderHistoryChart();
      });
      historyResizeObserver.observe(historyChart);
    }
    document.querySelector("#history-close").addEventListener("click", closeHistoryDialog);
    historyDialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeHistoryDialog();
      }
    });
    historyDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeHistoryDialog();
    });
    historyDialog.addEventListener("click", (event) => {
      if (event.target === historyDialog) closeHistoryDialog();
    });
    historyDialog.addEventListener("close", () => {
      window.clearTimeout(historyCloseTimer);
      historyDialog.classList.remove("is-closing");
      historyRequestId += 1;
      if (historyRequestController) {
        historyRequestController.abort();
        historyRequestController = null;
      }
    });

    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "light" : "dark";
      applyTheme(theme);
      savePreference("convertion-theme", theme);
    });

    loadOfficialRates();
    loadCommercialBankRates();
    window.setInterval(() => {
      if (document.visibilityState === "visible") {
        loadOfficialRates();
        loadCommercialBankRates();
      }
    }, 30 * 60 * 1000);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        loadOfficialRates();
        loadCommercialBankRates();
      }
    });
