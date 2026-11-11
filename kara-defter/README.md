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
- **Künye:** not damgasız gelir. Oyuncu notu okur, o boyutun 5–8 damgasından birini (en çok ikisini) kendi vurur; her damganın altında kapsadığı işaretler yazar. Defter yalnızca oyuncunun damgalarına göre daralır (`candidatesByMarks`). Yanlış damga doğru sayfayı sessizce düşürür; bir sınama hiçbir sayfaya uymayınca defter "uyan sayfa kalmadı" der, hangi damganın yanlış olduğunu söylemez. Damga sonradan değiştirilebilir. Hüküm ekranı her notun damgasını gerçeğiyle yan yana gösterir. Sınama sonucu bir okuma değil olgu olduğu için defter onu kendisi uygular.
- Doğru damgalar eski otomatik kısa listenin aynısını verir, yani mum dengesi değişmedi. Bir nota ikinci damga vurmak listeyi ortalama 0,4 sayfa uzatır.
- Notların dili: 50 hikâyenin notları işareti defterin kelimeleriyle söylemez, gösterir (`HIKAYE_REHBERI.md`, "Not ve damga"). Tek dürüst adı olan somut şeyler (kuyu, ahır, yılan) adıyla geçer. Yaratığın o boyutta taşıdığı herhangi bir işaretin damgası doğru sayılır.
- **Gidişat:** ikinci, dördüncü ve beşinci mumda köyde işler kötüleşir.
- **Yüzleşme:** bir kaynak okununca açılır, mum yakmaz.
- **Hüküm:** yaratık ve insan sırrı. Yaratık yanlışsa vaka kaybedilir. Yaratık doğru, sır yanlışsa cevap mektubunun eksik hali gelir; seri bozulmaz.
- Beş ya da altı mum yakılırsa cevap mektubuna bir "geç kalma" satırı eklenir.
- **Kenar notları** ve defterin arkasındaki notlar (`js/content/nazire.js`, 10/20/30/40/50 sayfada) önceki sahibin hikâyesini anlatır.

Vaka başına ortalama 3–4 mum yanar, Usta avcı değeri çoğunlukla 3'tür.

## Görsel dil

Tema, adını oyundan alır: **kara kaplı defter**. Gece masada duran, siyah bez ciltli, bordo sırtlı bir hesap defteri.

- **Dışarısı karanlık, okunan her şey kâğıtta.** Ana ekran defterin kapağıdır (siyah bez, bordo sırt ve köşeler, üstünde etiket); günün vakası kapağın üstünde duran pullu, damgalı bir zarftır. Vaka ekranı açık sayfadır: üstte mum rafı, altında kırmızı kenar çizgili saman kâğıdı.
- **Mum ışığı** temanın imzasıdır: mumlar karanlık rafta parlar, ışıkları sayfaya vurur ve her mum yandıkça daralır (`--lit`), oda kararır (`.dusk`).
- **Renkler:** kapak `#1B1916`, bordo `#7B1E26`, saman kâğıdı `#E9DEB6`, ayrı kâğıtlar `#F4ECCF`, mavi-siyah mürekkep `#1C2946`, kopya kalemi moru `#5B3B8F` (damgalar, işaretler, Nazire Ebe'nin notları), alev `#F2A93B`.
- **Yazı:** başlıklar, adlar ve etiket Besley (defter etiketlerinin Clarendon harfi), okuma metni Literata (imzalar ve kenar notları italik), defterin basılı kısımları ve düğmeler Barlow Condensed, daktiloyla yazılmış resmî mektuplar Courier Prime (`isOfficial`, `js/cases.js`).
- **Kenar boşluğu** bilgi taşır: her notun yanında, o notun kaçıncı muma mal olduğu yazar.
- Koyu ve kâğıt yüzeyler aynı değişkenleri (`--ink`, `--ink-2`, `--line`) yeniden tanımlar; bkz. `style.css` içinde "surfaces".
- `assets/og.png` ve ikonlar `tools/og.html` ile `tools/icon.html` sayfalarının ekran görüntüsüdür.

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

- `node tools/check-stories.mjs`: 50 hikâyenin yapısını, roster'a uyumunu, kısa listesini, ad sızıntılarını, yasak kalıpları ve uzunlukları denetler; bir notun defterdeki kalıbı ya da damga adını aynen söylemesini de hata sayar.
- `node tools/check-roster.mjs`: olası her vakanın (244) tam okunduğunda tek bir yaratığa indiğini kanıtlar. Ayrıca araç çiftlerinin benzersizliğini ve özellik dağılımını denetler.
- `node tools/check-content.mjs`: metinlerin biçimini, yer tutucularını, roster'a uyumunu ve sayılarını denetler.
- `node tools/check-cases.mjs`: ilk 500 vakanın eksiksiz üretildiğini, takvimi ve zorluk dağılımını denetler.
- `node tools/check-kunye.mjs`: damga kurallarını denetler: doğru damgalar eski kısa listeyi verir, yaratığın taşımadığı bir damga sayfasını düşürür, ikinci damga sayfayı kaybettirmez.
- `node tools/check-meta.mjs`: seri ve yedek mum kurallarını, mühürleri, çağrı linklerini ve 50 mektubun "yarının zarfı" alıntısını denetler (`--teasers` hepsini yazdırır).

Hikâye yazım kuralları `HIKAYE_REHBERI.md`, defter sayfası kuralları `CONTENT_GUIDE.md` dosyasında.

## Geliştirici parametreleri

- `?vaka=N`: N numaralı vakayı deneme olarak oynatır. Sonuç seriye ve günlük kilide yazılmaz.
- `?reset=1`: kaydı siler.
- `?c=<vaka>.<yanan mum>.<t|e|y>.<rütbe>`: çağrı linki; oyuncular birbirine gönderir (bkz. Uzun oyun).

## Oyuncu tarafı

- **Tek masa:** notlar sırayla birikir, yapılacaklar altında durur, kalan sayfalar ekranın altında hep görünür. Mumlar yandıkça oda kararır.
- **Ekran genişlikleri:** 620px'in altı telefon düzenidir. 620–899px arasında sayfa 720px'e kadar genişler, alt kenara yapışan düğmeler metnin içine iner, çekmece ve defter ortada açılır. 900px ve üstünde defter açık durur: vaka, hüküm ve sonuç iki sayfadır (solda notlar ya da levha, sağda kalan sayfalar ya da kayıt), bütün ekranlar aynı genişliktedir, ana ekrandaki kapalı defter içeriği kadar yer tutar ve masanın ortasında durur. Ok tuşları sayfa çevirir, `X` eler, adın üstü fareyle de çizilir. Kırılma noktası `style.css` ve `main.js` içindeki `wide` sorgusunda aynı olmalı.
- **Sayfa çekmecesi:** sayfanın her işareti oyuncunun kendi notuyla yan yana gösterilir. Yana kaydırınca sıradaki sayfaya geçilir, adının üstü parmakla çizilince sayfa elenir (düğmesi de var).
- İlk ziyarette kısa bir tanıtım gösterilir.
- **Sicil:** rütbe, seri, en uzun seri, tam av oranı, kalan mum dağılımı, mühürler.
- **Defter:** 50 sayfa; yaratığı doğru bulunanların çizimi ve av notları açılır.
- **Arşiv:** geçmiş vakalar oynanabilir; seriyi etkilemez, defteri doldurur.
- Manifest ve ikonlar sayesinde ana ekrana eklenebilir.
- Link önizlemesi için `assets/og.png` var.

## Uzun oyun

Günlük vakanın etrafındaki, geri getiren ve paylaştıran katman. Kurallar `js/meta.js` dosyasında, sunucu gerektirmez.

- **Yarının zarfı:** günün vakası kapanınca ertesi günün köyü ve mektubun ilk satırları görünür; zarf gece yarısı açılır.
- **Seri şeridi ve yedek mum:** ana ekranda son yedi gece. Yedi günde bir yedek mum kazanılır (en çok bir tane tutulur); kaçırılan ya da yanılınan tek geceyi kurtarır. Kurtarılan gece seriyi bozmaz ama sayıya eklenmez.
- **Çağrı:** her paylaşım linki sonucu taşır. Linki açan aynı vakayı oynar (geçmiş vakaysa arşivden), sonunda iki sonuç karşılaştırılır: önce ne bulunduğu, sonra yanan mum. Link doğrulanmaz; elle değiştirilebilir.
- **Rütbe:** dolan sayfaya göre Emanetçi, Çırak (3), Kalfa (10), Usta (20), Ocaklı (35), Defterin sahibi (50). Paylaşım kartında ve çağrıda görünür.
- **Mühürler:** 14 hedef (ilk hüküm, usta işi, son mum, seriler, on dört çare, yaratık takımları, çağrı, yarım ve dolu defter). Sicilde ilerlemesiyle listelenir.
- **Kazanımlar:** sonuç ekranı o hükmün getirdiğini (yeni sayfa, mühür, rütbe, defterin arkasında açılan not) ve sıradaki hedefe kalan sayfayı gösterir.
- **Hatırlatma:** sayfa bildirim gönderemez; oyuncu isterse takvimine her akşam 21.00 için günlük hatırlatma ekler (Google Takvim linki ya da `.ics`). Ana ekrana ekleme ipucu da buradadır.

## Prototipte olmayanlar

- **Sunucu yok.** Seri, defter ve sonuçlar yalnızca o tarayıcıda tutulur. Cihazlar arası kayıt, küresel istatistik ("oyuncuların %X'i çözdü") ve skor tablosu için arka uç gerekir. Uydurma istatistik gösterilmez.
- **Lonca üyeliği** yalnızca bir yer tutucu; arşiv şimdilik herkese açık.
- **Paylaşım:** `navigator.canShare({files})` destekleniyorsa görsel + metin paylaşılır (link metnin içinde). Desteklenmiyorsa görseli indirme / linki kopyalama penceresi açılır.
- **Folklor** bilgileri editoryal kontrolden geçmedi; bkz. `FOLKLORE_NOTES.md`. Zaaf eşleşmelerinin çoğu oyun kararıdır.
