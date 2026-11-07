# Kara Defter — çizim kılavuzu

Çizimler elle yazılmış SVG yollarıdır (path). Bir mürekkep filtresi kenarları titretir. Hedef, bir halk kitabındaki kesme kâğıt ya da tahta baskı siluet duygusudur: tek renk, güçlü bir duruş, ilk bakışta okunan bir siluet. Biçim `js/art.js` dosyasının başındaki yorumda anlatılıyor. Mevcut sekiz örnek `js/art/figures-0.js` içinde.

## Figür kuralları

- viewBox `0 0 200 280`. Zemin y≈266. Figür x 6–194 ve y 10–268 arasında kalır; yüksekliği genelde 180–250.
- **Siluet önce gelir.** Figür 76 px genişlikte bir karede bile tanınmalı: kafanın, kolların ve sırtın biçimi, bir sahne nesnesi (iğ, tarak, kefen, kuyruk). Yapışık, okunmayan bir leke çizme.
- Her figürün **kendine özgü bir duruşu ve hikâye anı** olsun: eğilmiş, çömelmiş, kapıya uzanan, sudan yükselen, sürünen, sırtını dönmüş. Herkesi dimdik ve önden çizme. Aynı gövde kalıbını iki yaratıkta kullanma.
- `body` kübik eğrilerle (C) yazılır. Kıl, saç ve paçavra için kısa zikzaklar (L) kullan, ölçülü. 1–3 alt yol yeterli; kollar ve sahne nesneleri ayrı alt yol olabilir.
- `detail` (gövdenin üstüne açık renk çizgiler) azıyla etkilidir: 2–5 çizgi; saç telleri, kefen bağları, kaburga, kıvrım.
- `line` mürekkep konturudur, dolgusuz: ip, iğ, su çizgileri, yatak, yular. Ölçülü kullan.
- `faint` arkadaki ikinci, soluk biçimdir: eş, yavru, gölge, yansıma. Gerekirse kullan.
- `eyes`: gece sahnelerinde kor gibi parlayan göz noktaları. Gözü olan ve yüzü görünen yaratıklara 1–2 nokta koy (tek gözlüye bir). Kefenli ölü, görünmeyen varlık gibi uygun olmayanlara koyma.
- Yasak: herhangi bir film, oyun ya da çizgi romandaki tasarımı kopyalamak. Ayrıca jenerik "fantastik canavar" klişesi (boynuzlu iblis, Batı tipi cadı şapkası).
- `label`: Türkçe, kısa bir betimleme ("Kuyunun ağzından uzanan yosunlu kollar").

## Kontrol

Yerel sunucu `http://127.0.0.1:8765` adresinde çalışıyor (`insta-games` klasörünü servis eder). Kapalıysa şununla aç:
`cd /Users/ayberk/Desktop/ideas/insta-games && nohup python3 -m http.server 8765 --bind 127.0.0.1 >/dev/null 2>&1 &`

Ekran görüntüsünü şöyle al:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=1000,900 --virtual-time-budget=3000 --screenshot=/ÇIKTI/YOLU.png "http://127.0.0.1:8765/kara-defter/tools/silhouettes.html?ids=id1,id2,id3"
```

Gece paleti için sona `&night=1`, sahneler için `?scenes=1` ekle. PNG’yi Read aracıyla açıp bak. Her figürü en az bir kez görsel olarak kontrol et ve beğenmediğini düzelt. Çıktıları kendi scratchpad klasörüne yaz, proje klasörüne yazma.
