// Weather App using Open-Meteo API (free, no key needed)
// Color scheme inspired by convertion.uz

const weatherCodes = {
    0: { icon: '☀️', desc: 'Ясно' },
    1: { icon: '🌤️', desc: 'Малооблачно' },
    2: { icon: '⛅', desc: 'Переменная облачность' },
    3: { icon: '☁️', desc: 'Пасмурно' },
    45: { icon: '🌫️', desc: 'Туман' },
    48: { icon: '🌫️', desc: 'Изморозь' },
    51: { icon: '🌦️', desc: 'Морось' },
    53: { icon: '🌦️', desc: 'Умеренная морось' },
    55: { icon: '🌧️', desc: 'Сильная морось' },
    56: { icon: '🌧️', desc: 'Ледяная морось' },
    57: { icon: '🌧️', desc: 'Сильная ледяная морось' },
    61: { icon: '🌧️', desc: 'Небольшой дождь' },
    63: { icon: '🌧️', desc: 'Дождь' },
    65: { icon: '🌧️', desc: 'Сильный дождь' },
    66: { icon: '🌧️', desc: 'Ледяной дождь' },
    67: { icon: '🌧️', desc: 'Сильный ледяной дождь' },
    71: { icon: '🌨️', desc: 'Небольшой снег' },
    73: { icon: '🌨️', desc: 'Снег' },
    75: { icon: '🌨️', desc: 'Сильный снег' },
    77: { icon: '❄️', desc: 'Снежные зерна' },
    80: { icon: '🌦️', desc: 'Ливневый дождь' },
    81: { icon: '🌧️', desc: 'Умеренный ливень' },
    82: { icon: '⛈️', desc: 'Сильный ливень' },
    85: { icon: '🌨️', desc: 'Ливневый снег' },
    86: { icon: '🌨️', desc: 'Сильный ливневый снег' },
    95: { icon: '⛈️', desc: 'Гроза' },
    96: { icon: '⛈️', desc: 'Гроза с градом' },
    99: { icon: '⛈️', desc: 'Сильная гроза с градом' }
};

const weatherDescriptions = {
    ru: ['Ясно', 'Малооблачно', 'Переменная облачность', 'Пасмурно', 'Туман', 'Изморозь', 'Морось', 'Умеренная морось', 'Сильная морось', 'Ледяная морось', 'Сильная ледяная морось', 'Небольшой дождь', 'Дождь', 'Сильный дождь', 'Ледяной дождь', 'Сильный ледяной дождь', 'Небольшой снег', 'Снег', 'Сильный снег', 'Снежные зерна', 'Ливневый дождь', 'Умеренный ливень', 'Сильный ливень', 'Ливневый снег', 'Сильный ливневый снег', 'Гроза', 'Гроза с градом', 'Сильная гроза с градом'],
    uz: ['Ochiq', 'Biroz bulutli', 'Oʻzgaruvchan bulutli', 'Bulutli', 'Tuman', 'Qirovli tuman', 'Mayda yomgʻir', 'Oʻrtacha mayda yomgʻir', 'Kuchli mayda yomgʻir', 'Muzli mayda yomgʻir', 'Kuchli muzli mayda yomgʻir', 'Yengil yomgʻir', 'Yomgʻir', 'Kuchli yomgʻir', 'Muzli yomgʻir', 'Kuchli muzli yomgʻir', 'Yengil qor', 'Qor', 'Kuchli qor', 'Muz donachalari', 'Jala', 'Oʻrtacha jala', 'Kuchli jala', 'Qor jala', 'Kuchli qor jala', 'Momaqaldiroq', 'Doʻl bilan momaqaldiroq', 'Kuchli doʻlli momaqaldiroq'],
    en: ['Clear', 'Mainly clear', 'Partly cloudy', 'Overcast', 'Fog', 'Depositing rime fog', 'Drizzle', 'Moderate drizzle', 'Dense drizzle', 'Freezing drizzle', 'Dense freezing drizzle', 'Light rain', 'Rain', 'Heavy rain', 'Freezing rain', 'Heavy freezing rain', 'Light snow', 'Snow', 'Heavy snow', 'Snow grains', 'Rain showers', 'Moderate rain showers', 'Violent rain showers', 'Snow showers', 'Heavy snow showers', 'Thunderstorm', 'Thunderstorm with hail', 'Heavy thunderstorm with hail']
};
const weatherCodeOrder = [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99];
const weatherTranslations = {
    ru: {
        weather: 'Погода', searchCity: 'Найти город...', locate: 'Определить местоположение', loading: 'Загрузка...', currentLocation: 'Текущее местоположение',
        feelsLike: 'Ощущается как', wind: 'Ветер', humidity: 'Влажность', pressure: 'Давление', precipitation: 'Осадки',
        hourlyForecast: 'Почасовой прогноз', dailyForecast: 'Прогноз на 7 дней', now: 'Сейчас', today: 'Сегодня', tomorrow: 'Завтра',
        morning: 'Утром', day: 'Днём', evening: 'Вечером', night: 'Ночью', time: 'Время', weatherLabel: 'Погода',
        feels: 'Ощущается', windSpeed: 'Ветер', humidityLabel: 'Влажность', pressureLabel: 'Давление',
        daylight: 'Световой день', sunriseSunset: 'Восход / закат', uvIndex: 'УФ-индекс', moonPhase: 'Фаза Луны',
        geomagnetic: 'Магнитное поле (Kp)', noData: 'Нет данных', noCities: 'Города не найдены',
        requestingLocation: 'Определяем ваше местоположение…', locationFallback: 'Не удалось получить местоположение. Показываем погоду для Ташкента.',
        errorLocation: 'Не удалось определить местоположение', unsupportedLocation: 'Геолокация не поддерживается браузером',
        permissionDenied: 'Доступ к местоположению запрещён', positionUnavailable: 'Не удалось получить координаты',
        timeout: 'Время ожидания геолокации истекло', moonNew: 'новолуние', moonYoung: 'молодая Луна', moonFirst: 'первая четверть',
        moonWaxing: 'растущая Луна', moonFull: 'полнолуние', moonWaning: 'убывающая Луна', moonLast: 'последняя четверть', moonOld: 'старая Луна',
        kpQuiet: 'спокойно', kpMinor: 'слабая буря', kpModerate: 'умеренная буря', kpStrong: 'сильная буря',
        kpSevere: 'очень сильная буря', kpExtreme: 'экстремальная буря',
        windUnit: 'м/с', pressureUnit: 'мм рт. ст.', precipitationUnit: 'мм',
        directions: ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'], locale: 'ru-RU',
        months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        weekdays: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        cityTashkent: 'Ташкент'
    },
    uz: {
        weather: 'Ob-havo', searchCity: 'Shaharni qidirish...', locate: 'Joylashuvni aniqlash', loading: 'Yuklanmoqda...', currentLocation: 'Joriy joylashuv',
        feelsLike: 'His etilishi', wind: 'Shamol', humidity: 'Namlik', pressure: 'Bosim', precipitation: 'Yogʻingarchilik',
        hourlyForecast: 'Soatlik prognoz', dailyForecast: '7 kunlik prognoz', now: 'Hozir', today: 'Bugun', tomorrow: 'Ertaga',
        morning: 'Ertalab', day: 'Kunduzi', evening: 'Kechqurun', night: 'Kechasi', time: 'Vaqt', weatherLabel: 'Ob-havo',
        feels: 'His etilishi', windSpeed: 'Shamol', humidityLabel: 'Namlik', pressureLabel: 'Bosim',
        daylight: 'Kunduz davomiyligi', sunriseSunset: 'Quyosh chiqishi / botishi', uvIndex: 'UV indeksi', moonPhase: 'Oy fazasi',
        geomagnetic: 'Magnit maydon (Kp)', noData: 'Maʼlumot yoʻq', noCities: 'Shaharlar topilmadi',
        requestingLocation: 'Joylashuv aniqlanmoqda…', locationFallback: 'Joylashuv aniqlanmadi. Toshkent ob-havosi koʻrsatilmoqda.',
        errorLocation: 'Joylashuvni aniqlab boʻlmadi', unsupportedLocation: 'Brauzer geolokatsiyani qoʻllab-quvvatlamaydi',
        permissionDenied: 'Joylashuvga ruxsat berilmadi', positionUnavailable: 'Koordinatalarni olib boʻlmadi',
        timeout: 'Geolokatsiyani kutish vaqti tugadi', moonNew: 'yangi oy', moonYoung: 'yosh oy', moonFirst: 'birinchi chorak',
        moonWaxing: 'oʻsayotgan oy', moonFull: 'toʻlin oy', moonWaning: 'kamayayotgan oy', moonLast: 'soʻnggi chorak', moonOld: 'eski oy',
        kpQuiet: 'tinch', kpMinor: 'kuchsiz boʻron', kpModerate: 'oʻrtacha boʻron', kpStrong: 'kuchli boʻron',
        kpSevere: 'juda kuchli boʻron', kpExtreme: 'ekstremal boʻron',
        windUnit: 'm/s', pressureUnit: 'mm sim. ust.', precipitationUnit: 'mm',
        directions: ['Sh', 'ShShq', 'Shq', 'JShq', 'J', 'Jgʻ', 'Gʻ', 'ShGʻ'], locale: 'uz-UZ',
        months: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
        weekdays: ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'],
        cityTashkent: 'Toshkent'
    },
    en: {
        weather: 'Weather', searchCity: 'Search for a city...', locate: 'Use my location', loading: 'Loading...', currentLocation: 'Current location',
        feelsLike: 'Feels like', wind: 'Wind', humidity: 'Humidity', pressure: 'Pressure', precipitation: 'Precipitation',
        hourlyForecast: 'Hourly forecast', dailyForecast: '7-day forecast', now: 'Now', today: 'Today', tomorrow: 'Tomorrow',
        morning: 'Morning', day: 'Day', evening: 'Evening', night: 'Night', time: 'Time', weatherLabel: 'Weather',
        feels: 'Feels like', windSpeed: 'Wind', humidityLabel: 'Humidity', pressureLabel: 'Pressure',
        daylight: 'Daylight', sunriseSunset: 'Sunrise / sunset', uvIndex: 'UV index', moonPhase: 'Moon phase',
        geomagnetic: 'Geomagnetic field (Kp)', noData: 'No data', noCities: 'No cities found',
        requestingLocation: 'Getting your location…', locationFallback: 'Could not access your location. Showing weather for Tashkent.',
        errorLocation: 'Could not determine your location', unsupportedLocation: 'Geolocation is not supported by this browser',
        permissionDenied: 'Location permission was denied', positionUnavailable: 'Could not determine coordinates',
        timeout: 'Location request timed out', moonNew: 'new moon', moonYoung: 'waxing crescent', moonFirst: 'first quarter',
        moonWaxing: 'waxing gibbous', moonFull: 'full moon', moonWaning: 'waning gibbous', moonLast: 'last quarter', moonOld: 'waning crescent',
        kpQuiet: 'quiet', kpMinor: 'minor storm', kpModerate: 'moderate storm', kpStrong: 'strong storm',
        kpSevere: 'severe storm', kpExtreme: 'extreme storm',
        windUnit: 'm/s', pressureUnit: 'mmHg', precipitationUnit: 'mm',
        directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'], locale: 'en-US',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        cityTashkent: 'Tashkent'
    }
};

let currentLat = 41.311151;
let currentLon = 69.279737;
let currentCityName = 'Ташкент';
let activeLanguage = 'ru';
let latestWeatherData = null;
let currentKpByDate = new Map();
let hasSelectedLocation = false;

const citySearch = document.getElementById('citySearch');
const searchDropdown = document.getElementById('searchDropdown');
const locationBtn = document.getElementById('locationBtn');

const currentCityEl = document.getElementById('currentCity');
const currentTimeEl = document.getElementById('currentTime');
const locationStatusEl = document.getElementById('locationStatus');
const currentIconEl = document.getElementById('currentIcon');
const currentTempEl = document.getElementById('currentTemp');
const currentDescriptionEl = document.getElementById('currentDescription');
const feelsLikeEl = document.getElementById('feelsLike');
const windSpeedEl = document.getElementById('windSpeed');
const humidityEl = document.getElementById('humidity');
const pressureEl = document.getElementById('pressure');
const precipitationEl = document.getElementById('precipitation');
const hourlyForecastEl = document.getElementById('hourlyForecast');
const dailyForecastEl = document.getElementById('dailyForecast');
const kpForecastUrl = 'https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json';

function reportFrameHeight() {
    if (window.parent === window) return;
    window.parent.postMessage({
        type: 'weather-frame-height',
        height: document.documentElement.scrollHeight
    }, '*');
}

window.addEventListener('load', reportFrameHeight);
window.addEventListener('resize', reportFrameHeight);
window.addEventListener('message', (event) => {
    if (event.source !== window.parent || !event.data || event.data.type !== 'weather-frame-settings') return;
    if (event.data.theme === 'light' || event.data.theme === 'dark') {
        document.documentElement.dataset.theme = event.data.theme;
    }
    if (weatherTranslations[event.data.language]) {
        activeLanguage = event.data.language;
        applyLanguage();
    }
});

function text(key) {
    return weatherTranslations[activeLanguage][key];
}

function getWeather(code) {
    const weather = weatherCodes[code] || { icon: '🌤️' };
    const index = weatherCodeOrder.indexOf(Number(code));
    return { ...weather, desc: index < 0 ? text('noData') : weatherDescriptions[activeLanguage][index] };
}

function applyLanguage() {
    const labels = weatherTranslations[activeLanguage];
    document.documentElement.lang = activeLanguage;
    document.title = labels.weather;
    document.querySelectorAll('[data-weather-i18n]').forEach((element) => {
        element.textContent = labels[element.dataset.weatherI18n];
    });
    document.querySelectorAll('[data-weather-placeholder]').forEach((element) => {
        element.placeholder = labels[element.dataset.weatherPlaceholder];
    });
    document.querySelectorAll('[data-weather-title]').forEach((element) => {
        element.title = labels[element.dataset.weatherTitle];
    });
    if (!hasSelectedLocation) currentCityName = labels.cityTashkent;
    renderLocationStatus();
    updateTime();
    if (latestWeatherData) {
        updateCurrentWeather(latestWeatherData);
        updateHourlyForecast(latestWeatherData);
        updateDailyForecast(latestWeatherData, currentKpByDate);
        requestAnimationFrame(reportFrameHeight);
    } else {
        currentCityEl.textContent = labels.loading;
    }
}

function updateTime() {
    const now = new Date();
    const weekday = text('weekdays')[now.getDay()];
    const month = text('months')[now.getMonth()];
    const time = now.toLocaleTimeString(text('locale'), { hour: '2-digit', minute: '2-digit' });
    if (activeLanguage === 'en') {
        currentTimeEl.textContent = `${weekday}, ${month} ${now.getDate()}, ${time}`;
    } else if (activeLanguage === 'uz') {
        currentTimeEl.textContent = `${now.getDate()}-${month}, ${weekday}, ${time}`;
    } else {
        currentTimeEl.textContent = `${weekday}, ${now.getDate()} ${month}, ${time}`;
    }
}

setInterval(updateTime, 60000);
applyLanguage();

async function searchCities(query) {
    if (query.length < 2) {
        searchDropdown.classList.remove('active');
        return;
    }
    
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=${activeLanguage}&format=json`);
        if (!response.ok) throw new Error(`City search failed: ${response.status}`);
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            searchDropdown.textContent = text('noCities');
            searchDropdown.classList.add('active');
            return;
        }
        
        searchDropdown.innerHTML = '';
        data.results.forEach(city => {
            const div = document.createElement('div');
            div.className = 'search-result';
            div.textContent = `${city.name}, ${city.country || ''}`;
            div.onclick = () => {
                currentLat = city.latitude;
                currentLon = city.longitude;
                currentCityName = city.name;
                hasSelectedLocation = true;
                citySearch.value = city.name;
                searchDropdown.classList.remove('active');
                fetchWeather();
            };
            searchDropdown.appendChild(div);
        });
        searchDropdown.classList.add('active');
    } catch (error) {
        console.error('Error searching cities:', error);
        searchDropdown.classList.remove('active');
    }
}

citySearch.addEventListener('input', (e) => {
    searchCities(e.target.value);
});

citySearch.addEventListener('focus', () => {
    if (citySearch.value.length >= 2) {
        searchDropdown.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__search')) {
        searchDropdown.classList.remove('active');
    }
});

function renderLocationStatus() {
    const state = locationStatusEl.dataset.state;
    const errorMessages = {
        1: text('permissionDenied'),
        2: text('positionUnavailable'),
        3: text('timeout')
    };
    const messages = {
        requesting: text('requestingLocation'),
        unsupported: `${text('unsupportedLocation')} ${text('locationFallback')}`,
        failed: `${errorMessages[locationStatusEl.dataset.errorCode] || text('errorLocation')} ${text('locationFallback')}`
    };
    locationStatusEl.textContent = messages[state] || '';
    locationStatusEl.hidden = !messages[state];
}

function showLocationStatus(state, errorCode = '') {
    locationStatusEl.dataset.state = state;
    locationStatusEl.dataset.errorCode = String(errorCode);
    renderLocationStatus();
    requestAnimationFrame(reportFrameHeight);
}

function requestCurrentLocation() {
    if (!navigator.geolocation) {
        showLocationStatus('unsupported');
        return;
    }

    locationBtn.disabled = true;
    locationBtn.style.opacity = '0.5';
    showLocationStatus('requesting');
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            currentLat = position.coords.latitude;
            currentLon = position.coords.longitude;
            hasSelectedLocation = true;

            try {
                const response = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${currentLat}&longitude=${currentLon}&language=${activeLanguage}&format=json`);
                if (!response.ok) throw new Error(`Reverse geocoding failed: ${response.status}`);
                const data = await response.json();
                if (data.results && data.results[0]) {
                    currentCityName = data.results[0].name;
                    citySearch.value = currentCityName;
                } else {
                    currentCityName = text('currentLocation');
                    citySearch.value = '';
                }
            } catch (error) {
                console.warn('Could not resolve the current city:', error);
                currentCityName = text('currentLocation');
                citySearch.value = '';
            }

            locationBtn.disabled = false;
            locationBtn.style.opacity = '1';
            showLocationStatus('');
            await fetchWeather();
        },
        (error) => {
            console.error('Geolocation error:', error);
            locationBtn.disabled = false;
            locationBtn.style.opacity = '1';
            showLocationStatus('failed', error.code);
        },
        { enableHighAccuracy: false, maximumAge: 600000, timeout: 10000 }
    );
}

locationBtn.addEventListener('click', requestCurrentLocation);

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${currentLat}&longitude=${currentLon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=7`
        );
        if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
        const data = await response.json();
        const kpByDate = await fetchKpForecast(data.utc_offset_seconds || 0);

        latestWeatherData = data;
        currentKpByDate = kpByDate;
        updateCurrentWeather(data);
        updateHourlyForecast(data);
        updateDailyForecast(data, kpByDate);
        requestAnimationFrame(reportFrameHeight);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

async function fetchKpForecast(utcOffsetSeconds) {
    try {
        const response = await fetch(kpForecastUrl);
        if (!response.ok) throw new Error(`NOAA Kp request failed: ${response.status}`);
        const rows = await response.json();
        const kpByDate = new Map();
        rows.forEach((row) => {
            if (!row.time_tag || !Number.isFinite(Number(row.kp))) return;
            const localDate = new Date(Date.parse(`${row.time_tag}Z`) + utcOffsetSeconds * 1000)
                .toISOString()
                .slice(0, 10);
            kpByDate.set(localDate, Math.max(kpByDate.get(localDate) || 0, Number(row.kp)));
        });
        return kpByDate;
    } catch (error) {
        console.error('Could not load NOAA geomagnetic forecast:', error);
        return new Map();
    }
}

function updateCurrentWeather(data) {
    const current = data.current;
    const weather = getWeather(current.weather_code);
    
    currentCityEl.textContent = currentCityName;
    currentIconEl.textContent = weather.icon;
    currentTempEl.textContent = Math.round(current.temperature_2m) + '°';
    currentDescriptionEl.textContent = weather.desc;
    feelsLikeEl.textContent = Math.round(current.apparent_temperature) + '°';
    windSpeedEl.textContent = `${Math.round(current.wind_speed_10m / 3.6)} ${text('windUnit')}`;
    humidityEl.textContent = Math.round(current.relative_humidity_2m) + ' %';
    pressureEl.textContent = `${Math.round(current.pressure_msl * 0.750062)} ${text('pressureUnit')}`;
    precipitationEl.textContent = `${current.precipitation} ${text('precipitationUnit')}`;
}

function updateHourlyForecast(data) {
    hourlyForecastEl.innerHTML = '';
    const now = new Date();
    const currentHour = now.getHours();
    
    // Show next 24 hours
    for (let i = 0; i < 24; i++) {
        const hourIndex = (currentHour + i) % 24;
        if (hourIndex >= data.hourly.time.length) break;
        
        const time = new Date(data.hourly.time[hourIndex]);
        const temp = Math.round(data.hourly.temperature_2m[hourIndex]);
        const weatherCode = data.hourly.weather_code[hourIndex];
        const weather = getWeather(weatherCode);
        
        const card = document.createElement('div');
        card.className = 'hourly-card';
        
        let timeStr;
        if (i === 0) {
            timeStr = text('now');
        } else {
            timeStr = time.toLocaleTimeString(text('locale'), { hour: '2-digit', minute: '2-digit' });
        }
        
        card.innerHTML = `
            <div class="hourly-card__time">${timeStr}</div>
            <div class="hourly-card__icon">${weather.icon}</div>
            <div class="hourly-card__temp">${temp}°</div>
        `;
        
        hourlyForecastEl.appendChild(card);
    }
}

function updateDailyForecast(data, kpByDate) {
    dailyForecastEl.innerHTML = '';
    const dayParts = [
        { label: text('morning'), hour: '06' },
        { label: text('day'), hour: '12' },
        { label: text('evening'), hour: '18' },
        { label: text('night'), hour: '00' }
    ];
    const hourlyByTime = new Map(data.hourly.time.map((time, index) => [time, index]));
    
    for (let i = 0; i < 7; i++) {
        if (i >= data.daily.time.length) break;
        const dateKey = data.daily.time[i];
        const date = new Date(`${dateKey}T12:00:00Z`);
        const monthName = text('months')[date.getUTCMonth()];
        const dateLabel = activeLanguage === 'en'
            ? `${monthName} ${date.getUTCDate()}`
            : `${date.getUTCDate()} ${monthName}`;
        const dayName = i === 0 ? text('today') : i === 1 ? text('tomorrow') : date.toLocaleDateString(text('locale'), { weekday: 'long', timeZone: 'UTC' });
        const dayWeather = getWeather(data.daily.weather_code[i]);
        const card = document.createElement('div');
        card.className = 'daily-card';
        const rows = dayParts.map(({ label, hour }) => {
            const hourIndex = hourlyByTime.get(`${dateKey}T${hour}:00`);
            if (hourIndex === undefined) {
                return `<tr><th scope="row">${label}</th><td colspan="5">${text('noData')}</td></tr>`;
            }

            const weather = getWeather(data.hourly.weather_code[hourIndex]);
            const windDirection = getWindDirection(data.hourly.wind_direction_10m[hourIndex]);
            return `
                <tr>
                    <th scope="row">${label}</th>
                    <td><span class="daily-table__weather">${weather.icon} ${Math.round(data.hourly.temperature_2m[hourIndex])}°</span><span class="daily-table__description">${weather.desc}</span></td>
                    <td>${Math.round(data.hourly.apparent_temperature[hourIndex])}°</td>
                    <td>${Math.round(data.hourly.wind_speed_10m[hourIndex] / 3.6)} ${text('windUnit')} ${windDirection}</td>
                    <td>${Math.round(data.hourly.relative_humidity_2m[hourIndex])}%</td>
                    <td>${Math.round(data.hourly.pressure_msl[hourIndex] * 0.750062)} ${text('pressureUnit')}</td>
                </tr>`;
        }).join('');
        const sunrise = data.daily.sunrise?.[i];
        const sunset = data.daily.sunset?.[i];
        const daylight = sunrise && sunset ? formatDaylight(sunrise, sunset) : '—';
        const kp = kpByDate.get(dateKey);

        card.innerHTML = `
            <div class="daily-card__heading">
                <div>
                    <div class="daily-card__day">${dayName}, ${dateLabel}</div>
                    <div class="daily-card__summary">${dayWeather.icon} ${dayWeather.desc}</div>
                </div>
                <div class="daily-card__temps"><strong>↑ ${Math.round(data.daily.temperature_2m_max[i])}°</strong><span>↓ ${Math.round(data.daily.temperature_2m_min[i])}°</span></div>
            </div>
            <div class="daily-table-scroll">
                <table class="daily-table">
                    <thead><tr><th scope="col">${text('time')}</th><th scope="col">${text('weatherLabel')}</th><th scope="col">${text('feels')}</th><th scope="col">${text('windSpeed')}</th><th scope="col">${text('humidityLabel')}</th><th scope="col">${text('pressureLabel')}</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
            <div class="daily-card__extras">
                <span><strong>${text('daylight')}</strong>${daylight}</span>
                <span><strong>${text('sunriseSunset')}</strong>${formatClock(sunrise)} / ${formatClock(sunset)}</span>
                <span><strong>${text('uvIndex')}</strong>${Number.isFinite(data.daily.uv_index_max?.[i]) ? data.daily.uv_index_max[i].toFixed(1) : '—'}</span>
                <span><strong>${text('moonPhase')}</strong>${getMoonPhase(dateKey)}</span>
                <span><strong>${text('geomagnetic')}</strong>${kp === undefined ? text('noData') : `${kp.toFixed(1)} — ${getGeomagneticActivity(kp)}`} <a href="${kpForecastUrl}" target="_blank" rel="noopener noreferrer" aria-label="${text('geomagnetic')} NOAA">ⓘ</a></span>
            </div>
        `;
        dailyForecastEl.appendChild(card);
    }
}

function getWindDirection(degrees) {
    if (!Number.isFinite(degrees)) return '';
    return text('directions')[Math.round(degrees / 45) % 8];
}

function formatClock(dateTime) {
    return dateTime ? dateTime.slice(11, 16) : '—';
}

function formatDaylight(sunrise, sunset) {
    const toMinutes = (dateTime) => {
        const [hours, minutes] = dateTime.slice(11, 16).split(':').map(Number);
        return hours * 60 + minutes;
    };
    const minutes = toMinutes(sunset) - toMinutes(sunrise);
    if (activeLanguage === 'en') return `${Math.floor(minutes / 60)} h ${minutes % 60} min`;
    if (activeLanguage === 'uz') return `${Math.floor(minutes / 60)} soat ${minutes % 60} daq`;
    return `${Math.floor(minutes / 60)} ч ${minutes % 60} мин`;
}

function getMoonPhase(dateKey) {
    const synodicMonth = 29.530588853;
    const referenceNewMoon = Date.UTC(2000, 0, 6, 18, 14);
    const date = Date.parse(`${dateKey}T12:00:00Z`);
    const age = ((date - referenceNewMoon) / 86400000 % synodicMonth + synodicMonth) % synodicMonth;
    const phase = age / synodicMonth;
    const phases = [
        ['🌑', 'moonNew'], ['🌒', 'moonYoung'], ['🌓', 'moonFirst'],
        ['🌔', 'moonWaxing'], ['🌕', 'moonFull'], ['🌖', 'moonWaning'],
        ['🌗', 'moonLast'], ['🌘', 'moonOld']
    ];
    const index = Math.round(phase * phases.length) % phases.length;
    return `${phases[index][0]} ${text(phases[index][1])}`;
}

function getGeomagneticActivity(kp) {
    if (kp < 5) return text('kpQuiet');
    if (kp < 6) return text('kpMinor');
    if (kp < 7) return text('kpModerate');
    if (kp < 8) return text('kpStrong');
    if (kp < 9) return text('kpSevere');
    return text('kpExtreme');
}

// Start with a useful forecast while the browser resolves the visitor's location.
fetchWeather();
requestCurrentLocation();
