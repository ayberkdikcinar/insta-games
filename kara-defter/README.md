# Kara Defter — prototip

Her gün herkes aynı vakayı oynar. Köyden bir mektup gelir; altı mumla soruşturma yapılır, notlar defterle karşılaştırılıp yaratık teşhis edilir, zaafı olan iki şeyle ava çıkılır. Sonuç, spoiler içermeyen 1080×1920 bir kartla paylaşılır.

## Çalıştırma

Statik dosyalar; derleme yok, bağımlılık yok (yalnızca Google Fonts). Klasörü herhangi bir statik sunucuyla servis etmek yeterli:

```bash
python3 -m http.server 8765 --directory insta-games
```

Sonra `http://localhost:8765/kara-defter/`. Bütün yollar göreli, alt dizinde yayınlanabilir.

## Geliştirici parametreleri

- `?vaka=N` — N numaralı vakayı oynatır, günlük kilidi yok sayar. Sonuç “deneme” olarak ayrı tutulur; seriye ve günlük kilide yazılmaz.
- `?reset=1` — kaydı siler.
- `node tools/check-cases.mjs` — içerik denetimi: her ipucunun kendi yaratığını gösterdiğini, ipucu kombinasyonlarının her durumda tek bir yaratığa indiğini (tüm kombinasyonlar denenir), araç çiftlerinin benzersiz olduğunu ve 1–60. vakaların eksiksiz üretildiğini doğrular.
- `tools/silhouettes.html` — bütün siluetleri gündüz, gece ve örtülü hâlleriyle tek sayfada gösterir.

## Dosyalar

- `js/data.js` — yaratıklar, ipuçları (her ipucunun `fits` listesiyle), araçlar, isimler, köyler
- `js/cases.js` — günlük vaka üretimi (İstanbul tarihi → tohum; 1 Kasım 2026 = Vaka #1; bir yaratık bir hafta içinde tekrar gelmez)
- `js/main.js` — ekranlar ve akış
- `js/art.js` — elle çizilmiş SVG siluetler ve mum
- `js/share.js` — paylaşım kartı ve paylaşım akışı
- `js/store.js` — localStorage kaydı (erişilemezse yalnızca bellekte)

## Prototipte olmayanlar

- Sunucu yok. Seri, defter ve sonuçlar yalnızca o tarayıcıda tutulur; cihazlar arası kayıt, küresel istatistik (“oyuncuların %X’i çözdü”) ve skor tablosu için arka uç gerekir. Uydurma istatistik gösterilmiyor.
- Arşivdeki “Lonca üyeliği” yalnızca “yakında” yazan bir yer tutucu; ödeme kodu yok.
- Paylaşım: `navigator.canShare({files})` destekleniyorsa görsel + metin (metnin içinde link) paylaşılır. `url` alanı bilerek eklenmedi: bazı paylaşım hedefleri (Instagram dahil) URL görünce görseli düşürebiliyor. Desteklenmiyorsa görseli indirme / linki kopyalama penceresi açılır.
- `og:image` yok; link önizlemesi için sabit bir görsel eklenmeli.
- Folklor bilgileri editoryal kontrolden geçmedi; bkz. `FOLKLORE_NOTES.md`.
