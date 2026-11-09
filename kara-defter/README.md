# Kara Defter

Her gün herkes aynı vakayı oynar. Bir köyden mektup gelir. Altı mumla soruşturma yapılır: açık kaynaklardan ipucu toplanır, geceye sınama bırakılır, köyde biriyle yüzleşilir. Sonunda hüküm yazılır: gelen neydi, köy neyi saklıyordu. Haftalar sonra köyden bir cevap mektubu gelir. Sonuç, spoiler içermeyen 1080×1920 bir kartla paylaşılır.

## Nasıl çalışıyor

Her vaka **elle yazılmış tek parça bir hikâyedir**: yaratık başına bir tane, toplam 50. Kurallar `HIKAYE_REHBERI.md` dosyasında, metinler `js/content/stories/batch-*.js` dosyalarında.

- `js/traits.js`: altı soruşturma boyutu, her birinde özellikler ve 5–8 aile, 14 araç.
- `js/content/roster.js`: her yaratığın özellikleri ve iki aracı.
- `js/content/bestiary-*.js`: defter sayfaları (diğer adlar, yöre, lore). Buradaki eski parça ipuçları ve `clues-generic.js` artık vakalarda kullanılmıyor.
- `tools/story-plan.mjs`: her vakanın işaretlerini, açık kaynaklarını, köyünü ve mektup sesini belirler (`tools/story-plan.json`).
- `js/cases.js`: İstanbul tarihinden vakayı seçer. 1 Kasım 2026 Vaka #1'dir. Takvim 50 yaratığı karışık bir deste gibi dağıtır; her yaratık 50 günde bir gelir ve bir hafta içinde tekrar etmez.

Bir vakada:

- Altı kaynaktan genelde üçü açıktır. Kapalı olanların nedeni hikâyenin parçasıdır. Açık kaynaklar tam okunduğunda 2–3 sayfa bırakır; son ayrımı **Sınama** yapar (`js/content/tests.js`).
- Her ipucu **ailesiyle** işaretlenir ve defter bu aileye göre eler. Asıl özellik yalnızca metinde ve sayfada yazar.
- **Gidişat:** ikinci, dördüncü ve beşinci mumda köyde işler kötüleşir.
- **Yüzleşme:** bir kaynak okununca açılır, mum yakmaz.
- **Hüküm:** yaratık ve insan sırrı. Yaratık yanlışsa vaka kaybedilir. Yaratık doğru, sır yanlışsa cevap mektubunun eksik hali gelir; seri bozulmaz.
- Beş ya da altı mum yakılırsa cevap mektubuna bir "geç kalma" satırı eklenir.
- **Kenar notları** ve defterin arkasındaki notlar (`js/content/nazire.js`, 10/20/30/40/50 sayfada) önceki sahibin hikâyesini anlatır.

Vaka başına ortalama 3–4 mum yanar, Usta avcı değeri çoğunlukla 3'tür.

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

- `node tools/check-stories.mjs`: 50 hikâyenin yapısını, roster'a uyumunu, kısa listesini, ad sızıntılarını, yasak kalıpları ve uzunlukları denetler.
- `node tools/check-roster.mjs`: olası her vakanın (244) tam okunduğunda tek bir yaratığa indiğini kanıtlar. Ayrıca araç çiftlerinin benzersizliğini ve özellik dağılımını denetler.
- `node tools/check-content.mjs`: metinlerin biçimini, yer tutucularını, roster'a uyumunu ve sayılarını denetler.
- `node tools/check-cases.mjs`: ilk 500 vakanın eksiksiz üretildiğini, takvimi ve zorluk dağılımını denetler.

Hikâye yazım kuralları `HIKAYE_REHBERI.md`, defter sayfası kuralları `CONTENT_GUIDE.md` dosyasında.

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
