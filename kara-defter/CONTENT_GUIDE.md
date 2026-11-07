# Kara Defter — içerik kılavuzu

Oyun: Her gün herkes aynı vakayı oynar. Bir köyden mektup gelir. Oyuncunun altı mumu var; her mum bir soruşturma açar (Kurban, İzler, Tanık, Vakit, Olay yeri, Köyün yaşlısı). Her ipucu, defterdeki yaratıkların bir **özelliğini** (trait) anlatır. Oyuncu defterdeki 50 sayfa arasından yaratığı teşhis eder, sonra zaafı olan iki aracı seçip ava çıkar.

## Sistem

- `js/traits.js`: boyutlar (`DIMS`), her boyuttaki özellik değerleri (`TRAITS`), bunların aileleri (`FAMILIES`) ve 14 araç (`TOOLS`).
- `js/content/roster.js`: 50 yaratığın iskeleti. Her yaratığın her boyuttaki özellikleri ve iki aracı burada **sabittir**; değiştirme.
- Bir vaka üretilirken her boyut için yaratığın değerlerinden biri seçilir. O değeri anlatan bir ipucu metni seçilir: genel metinlerden (`clues-generic.js`) ya da yaratığa özel metinlerden (`bestiary-*.js`).
- İpucu ekranda ailesiyle işaretlenir (ör. "İz · Su izi"). Defter bu aileye göre eler. Ailenin içindeki asıl özellik (ör. "Yosun ve saz" mı, "Islak ayak izi" mi) yalnızca metinde ve defter sayfasında yazar. **Dikkatli okuyan oyuncu metinden asıl özelliği çıkarabilmeli.** Bu yüzden her metin kendi özelliğini açıkça taşımalı.

## Metin yer tutucuları

- `{K}`: kurban; vakanın kurban özelliğine göre kadın, erkek ya da çocuk adı.
- `{T}`: tanık.
- `{Y}`: köyün yaşlısı (ör. "Hacer Nine", "Dursun Dede").
- `{D}`: yeni ölmüş bir erkek; yas evi ve ölü vakaları için.
- `{koy}`: köyün adı.
- `{K:gen}`, `{T:gen}`, `{D:gen}`: iyelik eki eklenmiş hâli (Zehra’nın, Osman’ın).

Adların sonuna kendin ek yazma (`{K}'nın` YAZMA). Yalnızca `:gen` kullan. Başka bir ek gerekiyorsa cümleyi o eki gerektirmeyecek biçimde kur.

## Yazım kuralları (hepsi zorunlu)

1. **Tutarlılık.** Bir metin yalnızca o yaratığın roster’daki özellikleriyle tutarlı ayrıntı içerebilir. Örneğin yeri yalnızca "ocak" olan bir yaratığın iz metni dereden söz etmez. Başka boyutun özelliğini sezdirmek serbesttir ama yalnızca yaratığın gerçekten sahip olduğu özelliği.
2. **Kurban dışındaki metinlerde {K}’nin cinsiyeti ya da rolü varsayılmaz.** "{K:gen} kocası", "gelin {K}" gibi ifadeler yalnızca ilgili kurban özelliğine bağlı metinde geçebilir. Örneğin `lohusa` ve `kadin` kadındır, `delikanli` erkektir. `hane` ve `hayvan` herhangi biri olabilir; `hayvan` vakasında {K} hayvanların sahibidir.
3. **Kurban metinleri** {K}’yi o özelliğin rolüyle anlatır. Örnek: `lohusa` → "{K} doğuralı dokuz gün oldu…".
4. **Tanık metinleri** `{T}: “…”` biçimindedir. **Yaşlı (sebep) metinleri** `{Y}: “…”` biçimindedir ve yaratığın neden geldiğini, hangi töreye uyulmadığını söyler. Aracı (zaafı) doğrudan söylemez.
5. **Üslup.** Köylü ağzına kaçmayan, sade, somut, ürpertici Türkçe. Kısa cümleler. Duyusal ayrıntı ver: koku, ses, soğuk, ışık. Yapay zekâ klişesi yok: "gizemli bir aura", "kanını donduran", "karanlığın derinliklerinden" gibi süslü kalıplar yazılmaz. Ünlem yok. Her ipucu 1–3 cümle, ~15–40 kelime.
6. **Tırnak işaretleri:** “ ” ve ’ (kıvrık). Şapkalı harfler doğru yerde: hâlâ, kâğıt, dükkân.
7. Şiddet, oyunun tonuna uygun ölçüde imalıdır; kan gölü ve kesik uzuv betimlenmez. Dinî unsurlar (besmele, ezan, dua) halk inancı olarak saygıyla anılır.

## Bestiary dosyası biçimi (`js/content/bestiary-X.js`)

```js
export default {
  albasti: {
    aka: ['Alkarısı', 'Albız'],                    // 1–3 başka ad (uydurma ad yazma)
    region: 'Anadolu’nun hemen her yerinde',       // nerede anlatılır
    epithet: 'Lohusaya ve yeni doğana musallat olan', // kısa sıfat cümlesi, ≤ 7 kelime
    lore: `Derler ki …`,                           // 90–150 kelime, defter sayfası
    clues: {
      kurban: [{ trait: 'lohusa', t: '…' }, …],
      iz:     [{ trait: 'islak', t: '…' }, { trait: 'sac', t: '…' }, …],
      tanik:  […], zaman: […], yer: […], sebep: […],
    },
    hunt: {
      intro:   ['…', '…'],  // av gecesi: bekleyiş ve geliş, 2 cümle
      success: ['…', '…'],  // iki doğru araçla: nasıl püskürtüldü + sabah
      partial: ['…', '…'],  // yalnız bir doğru araçla: kaçtı ama köy kurtuldu
    },
  },
};
```

- **lore**: "Derler ki" ile başlar. Yaratığın neye benzediğini, ne yaptığını, kime geldiğini, nerede ve ne zaman görüldüğünü, neden geldiğini anlatır. Roster’daki iki aracın neden işe yaradığını da halk inancı olarak anlatır. Araçların adı geçmeli ama liste gibi değil, inancın parçası olarak. Diğer 12 araçtan hiçbiri işe yarıyormuş gibi anılmaz.
- **clues**: Roster’da yaratığın her boyuttaki **her** özelliği için en az **2** metin. Her metnin `trait` alanı o boyutta yaratığın sahip olduğu bir değer olmalı.
- **hunt**: Metinler {K}, {D}, {koy} kullanabilir. `success` iki aracı sahnede gösterir. `partial`, yaratığın neden tam durdurulamadığını ima eder.

## Notlar dosyası

Her toplu iş için `FOLKLORE_NOTES-X.md` yaz. Her yaratık için:

- Hangi gelenekte anlatıldığı.
- Lore’daki her önemli motifin etiketi: **[yaygın]** sık anlatılır, **[kısmi]** bazı yörelerde ya da başka bir varlık için anlatılır, **[oyun]** oyun için eklendi.

Emin olmadığın şeyi [kısmi] ya da [oyun] diye işaretle; uydurma kaynak gösterme.

## Kontrol

`node tools/check-content.mjs` biçimi, yer tutucuları, trait uyumunu ve sayıları denetler. İşin bitince bunu çalıştır; kendi dosyandaki hataları sıfırla.
