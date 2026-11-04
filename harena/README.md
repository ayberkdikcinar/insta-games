# Harena (prototip)

Küçük bir gladyatör okulu (ludus) işletiyorsun. Yaralar kalıcı ve portrede görünür, lakaplar olaylardan doğar, ölüm gerçektir. Paylaşılan her kart bir meydan okuma linki ve yazılabilir bir kod taşır.

Statik site: vanilla HTML/CSS/JS (ES modules), build yok, bağımlılık yok (yalnızca Google Fonts).

## Çalıştırma

Herhangi bir statik sunucu yeter. `insta-games` klasöründen:

```bash
python3 -m http.server 8766 --bind 127.0.0.1 --directory insta-games
```

Sonra `http://127.0.0.1:8766/harena/` adresini aç. (`--bind 127.0.0.1` önemli: bu makinede bind adresi verilmeyince `http.server` port açmadan takılı kalabiliyor.)

## Geliştirici parametreleri

- `?reset=1`: kaydı siler (localStorage `harena.save.v1` ve `harena.pending.v1`).
- `?gun=N`: günlük sayacı N'e sabitler; Ferman #N'i test etmek için (gerçek tarih yerine).
- `#ferman`: doğrudan günün fermanını açar (ferman kartının linki budur).
- `#m=<base64url JSON>`: meydan okuma linki (canlı gladyatör) ya da mezar taşı linki (ölü gladyatör + kitabe).
- `#k=XXXX-XXXX-XXXX-XXXX`: kısa kodla aynı şey; kod oyundaki "kodu gir" kutusuna da yazılabilir.

## Dosyalar

- `js/main.js`: ekranlar, akış, sonuçların kayda işlenmesi
- `js/gen.js`: gladyatör/rakip/pazar/ferman üretimi, lakaplar, kitabe, Türkçe ek uyumu
- `js/fight.js`: deterministik dövüş simülasyonu (olay zaman çizelgesi)
- `js/arena.js`: dövüş animasyonu (canvas), ağır çekim final, missio/iugula kararı
- `js/portrait.js`: tohumdan üretilen fresk stili SVG portreler + yara katmanları
- `js/share.js`: 1080×1920 hikâye kartları (şampiyon, mezar taşı, ferman) ve paylaşım sayfası
- `js/codec.js`: link (`#m=`) ve 16 karakterlik kısa kod (Crockford base32, sağlama toplamlı)
- `js/store.js`: localStorage, hata verirse bellekten devam
- `js/data.js`, `js/rng.js`: veri tabloları, tohumlu rastgelelik, İstanbul tarihine göre gün sayacı (#1 = 1 Kasım 2026)

## Prototipte olmayanlar / backend gerektirenler

- Meydan okuma sonucu, meydan okuyan oyuncuya geri gitmiyor (sayaç, "Marcus bu hafta 41 kişiyi öldürdü" bildirimi). Bunun için sonuçları toplayan bir sunucu gerekir.
- Fermanda "oyuncuların %X'i kazandı" gibi genel istatistik yok; uydurmamak için bilerek gösterilmiyor.
- Kısa link yok: paylaşım linki snapshot'ı hash içinde taşıyor (~230 karakter, mezar taşında ~530). Kısa kod linksiz de çalışıyor ama ludus adını ve kitabeyi taşımıyor.
- Hesap ve cihazlar arası kayıt yok; her şey tarayıcıda.
- "5. yatak · Yakında" ödeme taslağı; ödeme kodu yok, güç satılmıyor.

## Editoryal kontrol önerilenler

- Kökenlere göre isim listeleri (`data.js`): Nubya listesindeki bazı adlar Meroë krallarının adları; Germen/Galya listesinde tarihi şefler var (Brennus, Orgetorix, Dumnorix, Segestes). Bilinçli bir tercih olarak kalabilir ama gözden geçirilmeli.
- Silah eşleşmeleri sadeleştirildi: tarihte retiarius genellikle secutor'a, murmillo ise thraex/hoplomachus'a karşı çıkardı. Oyundaki taş-kâğıt-makas üçlüsü oyun kuralı, tarih değil.
- "D · M" (Dis Manibus) ve dövüş sayısının Roma rakamıyla yazılması gerçek gladyatör mezar taşlarından esinli.
- "Missio" (bırak) ve "Iugula" (gırtlağını kes) kalabalık çağrıları kaynaklarda geçer; başparmak hareketinin yönü tartışmalı olduğu için oyunda başparmak gösterilmiyor.
- Gladyatörler arasında Nemesis kültü yaygındı ("Nemesis'e adak adamış" huyu buradan).
- "Stantes missi" (ikisi de ayakta gönderildi) berabere biten dövüşler için kullanılan ifade.
- Capua'daki ludus ve "auctoratus" (kendi isteğiyle sözleşme imzalayan özgür adam) tarihsel; giriş metni ve pazar notu bunlara dayanıyor.
