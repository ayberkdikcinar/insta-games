# Kara Defter

Her gün herkes aynı vakayı oynar. Bir köyden mektup gelir. Altı mumla soruşturma yapılır: açık kaynaklardan ipucu toplanır, geceye sınama bırakılır, notlar 50 sayfalık defterle karşılaştırılıp hüküm yazılır. Sonuç, spoiler içermeyen 1080×1920 bir kartla paylaşılır.

## Nasıl çalışıyor

İçerik elle yazılmış vaka listelerinden değil, bir **özellik sisteminden** üretilir:

- `js/traits.js` iki şeyi tanımlar:
  - **Altı soruşturma boyutu:** kurban, iz, tanık, vakit, olay yeri ve sebep. Her boyutta 13–18 özellik vardır ve bunlar 5–8 **aileye** ayrılır.
  - **14 araç.** Her yaratık ikisinden çekinir; oyuncu bunları sınama olarak kullanır.
- `js/content/roster.js` her yaratığın her boyuttaki özelliklerini ve iki aracını tek satırda tutar. Hangi ipucunun hangi yaratığa uyduğu buradan hesaplanır; elle liste tutulmaz.
- `js/content/bestiary-*.js` dosyalarında her yaratığın şunları bulunur:
  - Diğer adları, yöresi ve defter metni (lore).
  - Her özelliği için en az 3 yaratığa özel ipucu.
  - Av sahneleri.
- `js/content/clues-generic.js` iki tür ortak metin tutar:
  - Her özellik için, o özelliği taşıyan her yaratığa uyan genel ipuçları.
  - Mektup parçaları.
- `js/cases.js` vakayı İstanbul tarihinden üretir. 1 Kasım 2026 Vaka #1'dir. Adımlar:
  - Takvim, 50 yaratığı karışık bir deste gibi dağıtır: her yaratık 50 günde bir gelir ve bir hafta içinde tekrar etmez.
  - Her boyut için yaratığın özelliklerinden biri seçilir.
  - O özellik için yaratığa özel ya da ortak bir metin seçilir.
  - Altı kaynaktan genelde üçü açık kalır. Açık kaynaklar, tam okunduğunda 2–4 sayfa bırakacak şekilde seçilir; kalanı sınama ayırır ve bu her zaman altı mumla bitirilebilir.
- **Oyunda:**
  - Her ipucu **ailesiyle** işaretlenir (ör. "İz · Su izi") ve defter bu aileye göre eler.
  - Asıl özellik (ör. "Yosun ve saz" mı, "Islak ayak izi" mi) yalnızca metinde ve sayfada yazar. Dikkatli okuyan oyuncu kalan sayfaları kendisi eler.
  - **Sınama** bir mum yakar ve seçilen aracın işleyip işlemediğini söyler (`js/content/tests.js`). Araçlar her sayfada yazılıdır.
  - **Hüküm:** sayfa seçilir. Okunmamış açık kaynaklarda sayfanın birden çok değeri varsa oyuncu bu köyde hangisi olduğunu seçer. Yaratık doğru, boşluk yanlışsa sonuç "hüküm eksik" olur; seri bozulmaz.
  - **Usta avcı** değeri, her adımda en çok eleyen adımı (ipucu ya da sınama) seçen ve metni tam okuyan bir oyuncunun kaç mumda kesinleştireceğidir.

Simülasyon sonuçları:

- Aile filtresine güvenen oyuncu ortalama ~3,7–4,3 mum yakar, vaka başına ~1,4 sınama yapar.
- Metni tam okuyan oyuncu ~3,1–3,9 mum yakar.
- Usta avcı çoğunlukla 3 mumda kesinleştirir.

## Çizimler

`js/art.js` iki tür çizim üretir:

- **Figür:** defter kareleri için.
- **Levha:** figür + olay yeri sahnesi + vakit göğü. Defter sayfası, av ve sonuç ekranlarında kullanılır.

Dosyalar:

- Figürler `js/art/figures-*.js` içinde, elle yazılmış SVG yolları. Avlanmamış sayfalarda örtülü görünürler.
- 17 sahne ve 13 gök `js/art/scenes.js` içinde.
- Gündüz ve gece paletleri CSS'te.

Kurallar `ART_GUIDE.md` dosyasında. Bütün çizimler `tools/silhouettes.html` sayfasında görülebilir; sahneler için `?scenes=1`, gece için `&night=1`.

## Çalıştırma

Statik dosyalar; derleme yok, bağımlılık yok (yalnızca Google Fonts):

```bash
python3 -m http.server 8765 --directory insta-games
```

Sonra `http://localhost:8765/kara-defter/` adresini aç. Bütün yollar göreli, alt dizinde yayınlanabilir.

## Denetimler

- `node tools/check-roster.mjs`: olası her vakanın (244) tam okunduğunda tek bir yaratığa indiğini kanıtlar. Ayrıca araç çiftlerinin benzersizliğini ve özellik dağılımını denetler.
- `node tools/check-content.mjs`: metinlerin biçimini, yer tutucularını, roster'a uyumunu ve sayılarını denetler.
- `node tools/check-cases.mjs`: ilk 500 vakanın eksiksiz üretildiğini, takvimi ve zorluk dağılımını denetler.

İçerik yazım kuralları `CONTENT_GUIDE.md` dosyasında.

## Geliştirici parametreleri

- `?vaka=N`: N numaralı vakayı deneme olarak oynatır. Sonuç seriye ve günlük kilide yazılmaz.
- `?reset=1`: kaydı siler.

## Oyuncu tarafı

- **Tek masa:** notlar sırayla birikir, yapılacaklar altında durur, kalan sayfalar ekranın altında hep görünür. Mumlar yandıkça oda kararır.
- **Geniş ekran (980px ve üstü):** vaka açık defter gibi iki sayfadır; solda notlar, sağda kalan sayfalar ve seçili sayfa. Ok tuşları sayfa çevirir, `X` eler, adın üstü fareyle de çizilir.
- **Sayfa çekmecesi:** sayfanın her işareti oyuncunun kendi notuyla yan yana gösterilir. Yana kaydırınca sıradaki sayfaya geçilir, adının üstü parmakla çizilince sayfa elenir (düğmesi de var).
- İlk ziyarette kısa bir tanıtım gösterilir.
- **Sicil:** seri, en uzun seri, tam av oranı, kalan mum dağılımı.
- **Defter:** 50 sayfa; yaratığı doğru bulunanların çizimi ve av notları açılır.
- **Arşiv:** geçmiş vakalar oynanabilir; seriyi etkilemez, defteri doldurur.
- Manifest ve ikonlar sayesinde ana ekrana eklenebilir.
- Link önizlemesi için `assets/og.png` var.

## Prototipte olmayanlar

- **Sunucu yok.** Seri, defter ve sonuçlar yalnızca o tarayıcıda tutulur. Cihazlar arası kayıt, küresel istatistik ("oyuncuların %X'i çözdü") ve skor tablosu için arka uç gerekir. Uydurma istatistik gösterilmez.
- **Lonca üyeliği** yalnızca bir yer tutucu; arşiv şimdilik herkese açık.
- **Paylaşım:** `navigator.canShare({files})` destekleniyorsa görsel + metin paylaşılır (link metnin içinde). Desteklenmiyorsa görseli indirme / linki kopyalama penceresi açılır.
- **Folklor** bilgileri editoryal kontrolden geçmedi; bkz. `FOLKLORE_NOTES.md`. Zaaf eşleşmelerinin çoğu oyun kararıdır.
