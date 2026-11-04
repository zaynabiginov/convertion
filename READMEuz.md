# Convertion.uz

O‘zbekiston va boshqa shaharlar uchun valyuta konvertori hamda ob-havo prognozi.

[English](README.md) | [Русский](READMEru.md) | [O‘zbekcha](READMEuz.md)

## Imkoniyatlar

- O‘zbekiston Respublikasi Markaziy banki kurslari asosida O‘zbekiston so‘mi (UZS) va boshqa qo‘llab-quvvatlanadigan valyutalar o‘rtasida hisoblash.
- Valyuta kartochkalari, qidiruv, kurslar tarixi, grafiklar va tanlangan davr statistikasi.
- Tijorat banklarining sotib olish va sotish kurslarini qidirish, filtrlash va saralash orqali taqqoslash.
- Joriy ob-havo, soatlik prognoz va 7 kunlik prognoz. Har bir kun uchun ertalab, kunduzi, kechqurun va kechasi ko‘rsatkichlari mavjud.
- Shaharni qidirish yoki joriy joylashuvni aniqlash. Ob-havo bo‘limi yuklanganda brauzer geolokatsiyaga ruxsat so‘raydi.
- O‘zbek, rus va ingliz tillari, yorug‘ va qorong‘i mavzular.

## Mahalliy ishga tushirish

`index.html` faylini bevosita ochmang, loyiha papkasini HTTP server orqali ishga tushiring. Windows’da loyiha papkasidan quyidagi buyruqlardan birini bajaring:

```powershell
py -m http.server 8000
# Python Launcher mavjud bo‘lmasa:
python -m http.server 8000
```

Brauzerda [http://localhost:8000](http://localhost:8000) manzilini oching. Paketlarni o‘rnatish yoki loyihani yig‘ish talab qilinmaydi.

Geolokatsiya HTTPS saytlarida va localhost’da ishlaydi. Brauzer so‘raganda joylashuvga ruxsat bering. Ruxsat berilmasa yoki koordinatalar olinmasa, Toshkent ob-havosi ko‘rsatiladi. Joylashuv tugmasi orqali qayta urinib ko‘rish yoki shaharni qidirish mumkin. Koordinatalar prognozni olish va shahar nomini Open-Meteo orqali aniqlash uchun ishlatiladi.

## Valyuta konvertori

1. Miqdorni kiriting va boshlang‘ich hamda maqsadli valyutalarni tanlang. Ro‘yxatlarni valyuta nomi yoki kodi bo‘yicha qidirish mumkin.
2. Natija avtomatik hisoblanadi. Ikki valyuta orasidagi almashtirish tugmasi hisoblash yo‘nalishini o‘zgartiradi.
3. Markaziy bank kurslari kartochkalarida valyuta va summani tanlang. Kurs tarixini ochish uchun kartochkani bosing.
4. Tijorat banklari jadvalini bank, valyuta, kurs turi va narx oralig‘i bo‘yicha filtrlash, sarlavhalar orqali saralash mumkin. Sotib olish va sotish bank nuqtai nazaridan ko‘rsatiladi: bankdan xorijiy valyuta olayotganda **Sotish**, bankka valyuta topshirayotganda **Sotib olish** kursini taqqoslang.
5. Kurs tarixi oynasida sanalar yoki tayyor davrni tanlang, grafik qiymatlarini ko‘ring, masshtabni o‘zgartiring va statistikani tekshiring.

Tanlangan til va mavzu joriy brauzerda saqlanadi.

## Ob-havo

Ob-havo bo‘limi bosh sahifaga joylashtirilgan; uni `weather/index.html` manzilida alohida ham ochish mumkin. Bo‘lim joriy sharoitlar, keyingi 24 soat va 7 kunlik prognozni ko‘rsatadi. Kunlik prognozda harorat, his etiladigan harorat, shamol, namlik, bosim, kunduz davomiyligi, quyosh chiqishi va botishi, UV indeksi hamda Oy fazasi beriladi. Kp geomagnit prognozini ma’lumot mavjud bo‘lsa NOAA taqdim etadi.

Joylashuv tugmasi geolokatsiyani qayta so‘rash imkonini beradi. Ruxsat berilmasa, Toshkent prognozi qoladi; qidiruv orqali boshqa shaharni tanlash mumkin. Sahifa `file://` orqali bevosita ochilganda yoki xavfsiz bo‘lmagan, localhost bo‘lmagan manzilda geolokatsiya ishlamasligi mumkin.

## Ma’lumot manbalari

- O‘zbekiston Respublikasi Markaziy banki — rasmiy valyuta kurslari va kurslar tarixi.
- Bank.uz — tijorat banklarining valyuta sotib olish va sotish kurslari.
- Open-Meteo — joylarni qidirish va ob-havo prognozi.
- NOAA Space Weather Prediction Center — Kp geomagnit prognozi.

Kurslar va ob-havoni olish uchun internet kerak. Manbalar vaqtincha ishlamay qolishi, ayrim prognoz kunlari uchun Kp ma’lumoti mavjud bo‘lmasligi mumkin.

## Statik nashrni tayyorlash

Loyihani ishga tushirish uchun paketlar kerak emas. Joriy bank kurslari, Markaziy bank kurslari tarixi va ob-havo bo‘limi mavjud statik saytni tayyorlash uchun quyidagini bajaring:

```powershell
python scripts/prepare-pages.py --output .\pages-output
```

Natija papkasi yangi yoki bo‘sh bo‘lishi kerak. Skript ma’lumotlarni yuklab, sayt fayllarini tayyorlaydi; natija papkasi statik hostingga joylanadi. Brauzer geolokatsiyani taklif qilishi uchun saytni HTTPS orqali oching.

`api/` ichidagi ishlov beruvchilar server funksiyalarini qo‘llab-quvvatlaydigan serverless hostinglar uchun. GitHub Pages bu ishlov beruvchilarni bajarmaydi.

## Loyiha tuzilishi

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
