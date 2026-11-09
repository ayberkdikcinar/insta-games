// Hand-written cases. Rules: HIKAYE_REHBERI.md; chosen/open come from tools/story-plan.json.
export default {
 "ecinni": {
  "village": "Kavaklıdere",
  "chosen": {
   "kurban": "hane",
   "iz": "yele",
   "tanik": "kalabalik",
   "zaman": "gece_yarisi",
   "yer": "ocak",
   "sebep": "sozsuz"
  },
  "open": [
   "kurban",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Oğlumuz Mevlüt ile Nigâr kızımızın düğünlerini teşriflerinizle şereflendirmenizi rica ederiz. Düğün sahibi: Lütfü Ağa.\n\nÜstteki davetiyedir. Üç yüz tane bastırdım, iki yüz ellisi elimde kaldı, arkasına yazıyorum.\n\nDüğünün ikinci gecesi evim yarım kaldı. Dört gecede dört kişim çarpıldı, ağızları yana kaydı, elleri tutmuyor. Gelin ayakta. Oğlum Mevlüt de hastadır, odasından çıkmıyor, onu görmeniz gerekmez.\n\nDavulcuyu o gece parasını verip ben gönderdim. Komşular hâlâ davulu ne zaman susturacağımı soruyor.\n\nCuma günü gelinin babası düğünün kalanını görmeye geliyor. Perşembeye kadar bu iş kapansın, masrafı bendedir.",
   "sign": "Lütfü Ağa, Kavaklıdere"
  },
  "clues": {
   "kurban": "Yatakları sırayla geziyorsun. Lütfü Ağa’nın anası, karısı Naciye, kızı, küçük oğlu: her gece biri, büyük küçük seçilmeden. Bu bütün ev halkına sırayla gelen bir şey, kapı komşusuna gitmemiş. Ayakta Ağa ile gelin kalmış. Mevlüt’ün kapısını Ağa açmak istemiyor, sen açıyorsun. Oda soğuk, yorgan kabarık. Yorganı kaldırıyorsun, altında boylu boyunca iki yastık var. Ağa elini yastığın üstüne koyuyor. “Az önce kalktı” diyor.",
   "zaman": "Karşı komşu Latife Ana pencereden gösteriyor: “Her seferinde gece yarısı. Yatsıdan çok sonra, horozdan çok önce. Önce bir feryat gelir, sonra Ağa’nın lambası yanar. Düğünün ikinci günü, gün batarken çeşmeye inmiştim. Mevlüt’ü gördüm, omzunda heybe, üstünde damatlık yok, köprüye doğru yürüyordu. Selam verdim, almadı. Ertesi sabah Ağa ‘Oğlan hasta’ dedi. Ben de hasta dedim, ne diyeyim.”",
   "yer": "Ocak başı, avluya bakan mutfakta. Düğün kazanı hâlâ üç taşın üstünde, dibinde kurumuş pilav. Çarpılanların dördünü de burada bulmuşlar: gece yatağından kalkıp ocak başına inmiş, sabah taşın yanında yatıyormuş. Ocağın dibinde yeni bir minder görüyorsun, ortası çökmüş, birisi gecelerdir burada oturuyor. Ağa’ya soruyorsun, minderden haberi yok. Nigâr kapıdan bakıp geri çekiliyor."
  },
  "closed": {
   "iz": "Gelin atının yelesini Lütfü Ağa ertesi sabah kökünden kırptırmış, kılları da ocakta yaktırmış. Neden diye soruyorsun, “Karışmıştı” diyor.",
   "tanik": "O gece evin önünden geçenleri soruyorsun. Mahalle Ağa’ya borçlu, kapılar sen varmadan kapanıyor. Latife Ana bile o geceden yalnız saati konuşuyor.",
   "sebep": "Kazanı o gece Naciye indirmiş. Naciye’nin ağzı yana kaydığından beri dili dönmüyor."
  },
  "gidisat": [
   "Gece yarısı Lütfü Ağa ocak başından kalkamadı. Sabah ağzının sol ucu aşağıdaydı, çay içerken çenesini eliyle tuttu.",
   "Gelinin babasından haber geldi: Cuma’yı beklemiyor, yarın yola çıkıyor.",
   "Nigâr’ın sağ eli düştü. Minderinden kalkmıyor."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "Lütfü Ağa’ya iki yastığı sor",
   "text": "Lütfü Ağa kapıyı arkandan kapatıyor. “Yemeğini sabah akşam bu kapının önüne koyuyorum” diyor. “Düğünden beri tabak boş dönüyor.” Yastığa bakıyor, sonra sana. “Ben yemiyorum. Kim yiyor, onu sor.” Üç yüz davetiyenin, otuz sofranın parasını tarlasını rehin vererek ödediğini bunun üstüne söylüyor."
  },
  "sir": {
   "q": "Mevlüt düğünden sonra neden görünmüyor?",
   "right": "İkinci gün kaçtı, babası hasta diye saklıyor",
   "wrong": [
    "Çarpıldı, babası bu hâlini göstermek istemiyor",
    "Gelinin babası onu alacağa karşılık götürdü"
   ]
  },
  "sahne": "Gece yarısı ocak başında bekliyorsun. Nigâr minderinde, dizleri karnında. Kazanın içinde bir kaşık kendi kendine tıkırdıyor, sonra bütün raf. Avludan davul giriyor, önce uzaktan. Az sonra yüz kişinin ayağı mutfağın taşında halaya duruyor, kimseyi görmüyorsun. Ahırdaki at durmadan kişniyor. Nigâr kenara çekiliyor, birine yer açar gibi.",
  "kovma": "Lütfü Ağa ocağın önüne çöküyor, “Destur” diyor, bir daha, bir daha. Nigâr besmeleyi yüksek sesle yanından tamamlıyor. Halay duruyor, sonra daha yakından başlıyor. Kimse kalkmıyor, söz kesilmiyor. Horoz ötünce ayak sesleri kapıdan çıkıyor, davul köprüye doğru uzaklaşıyor. Sabah ezanında Naciye ilk sözünü söylüyor: “Su sıcaktı.”",
  "yanlis": "Halay getirdiklerinin üstünden geçiyor. Nigâr ocak başında yere çöküyor, ağzı yana kayıyor. Evde ayakta kimse kalmıyor. Cuma sabahı gelinin babası kapıya dayanıyor. Lütfü Ağa davetiyelerin arkasına bir şey yazmaya çalışıyor, kalem elinde durmuyor.",
  "cevap": {
   "tam": "Yine davetiye arkasına yazıyorum, iki yüz kırk dokuzu kaldı.\n\nEvim ayağa kalktı. Naciye’nin ağzı düzeldi, anamın düzelmedi. Gelinin babasına doğruyu kendim söyledim, tarlayı aldı. Mevlüt’ten yazı geldi, üstünde adres yok.\n\nNigâr babasıyla gitmedi. Evimde oturuyor, her akşam o kapının önüne bir tabak koyuyor. Geçen gün sordum, sen mi yiyorsun diye.\n\n“Ben yemiyorum” dedi.",
   "eksik": "Yine davetiye arkasına yazıyorum. Evimde herkes ayağa kalktı. Köy, oğlumu Nigâr’ın uğursuzluğu çarptı diye konuşuyor, ben de düzeltmedim. Mevlüt’ün yatağını her sabah yapıyorum. Nigâr’ın yüzüne komşu kapı açmıyor.",
   "gec": "Anam bir daha konuşmadan bayramdan önce öldü."
  },
  "kenar": "Düğün evinde ebeye iş düşmez sanırdım. Kazanın yanına oturup sabahı bekledim. O yıl Sabiha evlendi, gitmedim."
 },
 "tepegoz": {
  "village": "Yeşilyurt",
  "chosen": {
   "kurban": "coban",
   "iz": "buyuk_iz",
   "tanik": "dev",
   "zaman": "ogle",
   "yer": "dag",
   "sebep": "izinsiz"
  },
  "open": [
   "kurban",
   "iz",
   "tanik"
  ],
  "letter": {
   "body": "Yaylaya çıkan: çoban 11, koyun 800\nHaziran başı: çoban 10, koyun 800\nHaziran sonu: çoban 9, koyun 800\nTemmuz ortası: çoban 8, koyun 800\nBugün: çoban 7, koyun 800\n\nEfendim, sayım yukarıdaki gibidir. Ölü yoktur, kaçan yoktur, aşağı inen yoktur. Koyunun eksilmemesi tuhaf görülmesin, sürüm iyi güdülür.\n\nEksik dört çobanın ücreti peşin ödenmiştir, hak iddia edecek yakınları yoktur. Çarşamba kasabadan yeni bir çocuk geliyor, onun ücretini de verdim.\n\nSizden istediğim sayının tutmasıdır. Çocuklar arasında konuşulanlara itibar etmeyiniz. Yukarıda neler döndüğünü bana sormayınız, ben defter tutarım.",
   "sign": "Muzaffer Ağa, Yeşilyurt"
  },
  "clues": {
   "kurban": "Çadırda kalan yedi çobanla oturuyorsun. Hepsi çocuk denecek yaşta, üstleri yama. Kaybolan dördü de çoban: Musa, Okkeş, Lokman, Nuh. Sürüye gidip dönmemişler. Kâhya Necip defterin kenarını gösteriyor: dördünün yanında birer küçük çizik var, dördü de kasabadan alınmış, anasız babasız. Köyden tutulan çobanların adında çizik yok. “Kimin yukarı çıkacağını Ağa yazar” diyor Necip, sonra sesini kesiyor.",
   "iz": "Nadir seni kaya başındaki sulağa götürüyor. Çamurda kocaman bir ayak izi duruyor, çıplak, parmakları belli. İki ayağınla içine giriyorsun, yine yer kalıyor. Topuk çukurunda su birikmiş. Bir sonraki izi bulmak için on adım atıyorsun. İzin yanında küçük bir iz daha var, çarıklı bir çocuğun izi. Koşmamış. Büyüğün yanından yürümüş, elinde bir şey taşır gibi ağır basmış. İkisi birlikte gidiyor, küçüğü geri dönmüyor.",
   "tanik": "Nadir on üç yaşında, gözünü sürüden ayırmadan konuşuyor: “Musa önde gidiyordu, sırtında peynir tulumu. Ağa vermişti, ‘Yukarı götür’ demişti. Kaya sandığım şey ayağa kalktı. Necip Kâhya’nın boyunun iki katıydı, belki daha. İnsan gibi yürüyordu, insandan büyüktü. Tulumu aldı, Musa’yı da aldı. Yüzüne bakamadım. Bu hafta adım yazılıymış diyorlar, ben okuma bilmem.” Soluğunu tutup koyunları sayıyor."
  },
  "closed": {
   "zaman": "Çoban oğlanlar saat bilmez. Sürüden ne zaman koptuklarını söyleyecek Necip Kâhya, Ağa yanından ayrılmadan ağzını açmıyor.",
   "yer": "Yukarı giden patikanın ağzını Necip Kâhya taşla kapatmış. Ağa’nın izni olmadan geçirmiyor.",
   "sebep": "Bu otlağın kimin olduğunu soruyorsun. Ağa babasından kaldığını söylüyor, köyde oraya sürü çıkaran başka kimse yok, nedenini söyleyen de yok."
  },
  "gidisat": [
   "Necip Kâhya, Nadir’in adının yanına çiziği attı. Akşam çocuğun eline bir tulum verildi.",
   "Ağa yukarıya bir peynir tulumu daha yollattı. Necip Kâhya patikanın taşlarını kaldırdı.",
   "Kasabadan gelen yeni çocuk yaylaya vardı. Ağa adını sordu, kalemi kulağının arkasından aldı."
  ],
  "yuzlesme": {
   "after": "tanik",
   "ask": "Muzaffer Ağa’ya peynir tulumunu sor",
   "text": "Muzaffer Ağa defteri kapatmıyor, üstüne elini koyuyor. “Bu tulumu babam da yollardı. Onun babası da.” Kalemi kulağının arkasına sıkıştırıyor. “Elli iki yıldır aynı peynir, aynı yol. Kimin sırtında gittiğini sormazlar.” Sana bakıp yeni bir sayfa açıyor. “Adın neydi senin?”"
  },
  "sir": {
   "q": "Muzaffer Ağa’nın sayısı neden tutmuyor?",
   "right": "Sürü zarar görmesin diye kimsesiz çobanları yukarı yolluyor",
   "wrong": [
    "Çobanlar ücretini alıp geceleri kaçıyor, Ağa bunu saklıyor",
    "Necip Kâhya çocukları gizlice başka ağalara satıyor"
   ]
  },
  "sahne": "Öğle sıcağında sırtın üstünde duruyorsun. Sürü ağaç altına sıkışmış, çıt yok. Muzaffer Ağa arkanda, ilk kez yukarı çıkıyor, elinde közle dolu bir teneke. Mağaranın ağzında yatan şeyi önce kaya sanıyorsun. Göğsü iniyor, kalkıyor, üstünde sinekler. Uyuyor. Alnının ortasında kocaman bir göz kapağı, yarım açık, altında ak, nemli bir şey dönüyor.",
  "kovma": "Necip’in çul diktiği çuvaldızı közün içine sokuyorsun, ucu kızarıyor. Ağa elini uzatmıyor, sen eline veriyorsun. Defteri ilk kez yere bırakıyor. Alnın ortasına Ağa saplıyor. Çığlık yamaçtaki sürüyü dört yana dağıtıyor. Kör gövde el yordamıyla ateşi buluyor, yanıyor, kayaları devirerek mağaraya çekiliyor.",
  "yanlis": "Öğle sıcağı geçiyor, getirdiğin şey o koca gövdeyi kıpırdatmıyor. Necip Kâhya akşam yeni bir sayfa açıyor: çoban 6, koyun 800. Sen aşağı inerken Çarşamba gelen çocuk yukarı çıkıyor, sırtında peynir tulumu. Sana selam veriyor.",
  "cevap": {
   "tam": "Bugün: koyun 800\n\nEfendim, çoban sayısını bundan böyle yazmıyorum. Yukarıya giden yok. Kasabadan gelen çocuğu ücretini bıraktırmadan geri gönderdim.\n\nDedemin defterini çıkardım. Elli iki yıl, her yılın altında küçük çizikler. Toplam iki yüz on üç. Her birinin yanında bir ad var, çoğunun anası babası yazılmamış.\n\nİlk sayfadaki ilk ad Muzaffer. Bana adımı dedem koymuş.",
   "eksik": "Bugün: koyun 800\n\nEfendim, yukarısı yatıştı. Köy, giden dört çocuk yolunu kendi şaşırdı diyor, kasaba yetimlerinden zaten hayır beklenmezmiş. Defterime dokunmadım. Çarşamba yeni çocuk geliyor.",
   "gec": "Nadir’in çarıkları sulağın başında bulundu, bağları bağlıydı."
  },
  "kenar": "Çuvaldızı közde kızdır, uyurken yürü. Seni oraya gönderen adama da bak, o uyumaz."
 },
 "umaci": {
  "village": "Gölbaşı",
  "chosen": {
   "kurban": "cocuk",
   "iz": "buyuk_iz",
   "tanik": "golge",
   "zaman": "aksam",
   "yer": "esik",
   "sebep": "yalniz"
  },
  "open": [
   "kurban",
   "tanik",
   "sebep"
  ],
  "letter": {
   "body": "Sayın Bay ya da Bayan,\n\nMaarif’ten Gölbaşı’na atanalı iki ay oldu. Hurafeye inanmam, bu mektubu Muhtar Müslüm Bey’in ısrarıyla yazıyorum. Okulumda on dört öğrenci vardı, on ikiye düştü: önce Ömer, altı gün sonra Nurhan. Ben dereye düştükleri kanısındayım, köylü ise bana başka şeyler anlatıyor. Sınıfta şimdi Necati ağlıyor, neden ağladığını söylemiyor.\n\nNot: Ömer’i son gören kişinin kim olduğu sorulursa hatırlamıyorum. Sınıfta on dört çocuk vardı, her birini ayrı ayrı izleyemem.\n\nNot 2: O günün yoklama sayfasında mürekkep lekesi olmuştur. Sayfayı çıkarmak zorunda kaldım.",
   "sign": "Nebahat, Gölbaşı İlkokulu Öğretmeni"
  },
  "clues": {
   "kurban": "Medine, Ömer’in önlüğünü dizine koymuş oturuyor. “Dokuz yaşındaydı. Nurhan yedi. Delikanlılar o yoldan geçer, onlara bir şey olmaz. Bu köyde yalnızca çocuklar alınıyor, giden de bulunmuyor.” Önlüğün düğmesini çeviriyor. “Öğretmen Hanım, Ömer vaktinde çıktı diyor. Önlüğü okulun askısında buldular. Çocuk ayazda önlüksüz nereye çıkar.” Sonra sana soruyor: “Sizin de çocuğunuz var mı?” Cevap beklemeden önlüğü katlıyor.",
   "tanik": "Naim dokuz yaşında, okul yolundan seni ayırıp anlatıyor: “Hepimiz çıktık, Ömer çıkmadı. Çarpım cetvelini bilememişti. Köşeye varınca döndüm baktım. Ömer okulun orada tek başınaydı, yanında kapkara bir gölge duruyordu. Yüzü yoktu, biçimi yoktu, duvardan büyüktü. Ömer’in üstüne eğilmişti, Ömer kıpırdamıyordu. Sonra ikisi de yoktu. Eve koştum, kimseye demedim. Öğretmen Hanım ertesi gün bana yeni bir kalem verdi, nedenini söylemedi.”",
   "sebep": "Muhtar Müslüm elini dizine vuruyor: “Bu köyde ana çocuğunu yalnız bırakmaz, dışarı çıkarsa elinden tutar. Kim yalnız kaldıysa onu aldı. Nurhan’ı anası su almaya giderken bir an dışarıda bırakmış, yalnız kalmış. Ömer’in yanında kimin olması gerekirdi, onu bilmiyorum. Okulun anahtarı Öğretmen Hanım’da. Yoklama defterini istedim, o günün sayfası yırtık. Şehirden gelmiş hanımefendi, ben ne diyeyim.”"
  },
  "closed": {
   "iz": "Okul yolunu Nebahat Öğretmen ertesi sabah çocuklara süpürtmüş. Temizlik günü değilmiş.",
   "zaman": "Köyde saat yalnızca Nebahat Öğretmen’in bileğinde. O gün kaçta ne olduğunu soruyorsun, saatini başka yöne çeviriyor.",
   "yer": "Naim gördüğü yeri göstermeye razı. Babası oğlanı evden çıkarmıyor, kapıyı yüzüne örtüyor."
  },
  "gidisat": [
   "Analar çocukları avluya bile çıkarmıyor. Okula yarım sınıf geliyor, Nebahat Öğretmen yoklamayı yine de tam okuyor.",
   "Necati gece yatağından kalkıp kapıya gitti, babası yatağa bağladı. Sabah çocuk kimseyle konuşmuyor.",
   "Medine okul yoluna oturdu, kalkmıyor. Yağmur başladı, kimse onu kaldırmaya gitmiyor."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "Nebahat Öğretmen’e yırtık sayfayı sor",
   "text": "Nebahat Öğretmen kaleminin ucuna bakıyor. “Çarpım cetveli bilmeyen çocuk bu köyde kalır” diyor. “Bu köyden çıkmanın tek yolu o.” Sesi düzgün. Sonra pencereye dönüyor. “Önlüğünü askıya ben astım. Yerden aldım. Bunu kimse bilmiyor.” Elini yumuyor. “Önlük sıcaktı.”"
  },
  "sir": {
   "q": "O gün Ömer neden yalnız kaldı?",
   "right": "Öğretmeni ceza verip okulda tek başına bırakmıştı",
   "wrong": [
    "Anası su almaya gidip dışarıda bırakmıştı",
    "Muhtar onu bir işe gönderip unutmuştu"
   ]
  },
  "sahne": "Okulun kapısında Nebahat Öğretmen’in yanında bekliyorsun. Akşam iniyor, ışık karşı damdan çekiliyor. Bir gölge duvardan ayrılıyor, kimsenin gölgesi olmadan yürüyor. Eşiğin dışında duruyor. Kapı aralığından içeri eğiliyor, gövdesi kapının çok üstünde kalıyor. Bastığı yerde toprak gömülüyor, iz adam ayağının iki katı. Nebahat Öğretmen, içeride kimse yokken, “Ömer” diyor.",
  "kovma": "Feneri eşiğe sen koyuyorsun. Nebahat Öğretmen mangaldan közü kürekle getiriyor, eli yanıyor, bırakmıyor. Ateş eşikte büyüyor. Sınıfın süpürgesini kapının arkasına ters dikiyorsun. Gölge ışığa kadar geliyor, süpürgeye doğru eğiliyor, eşiği geçemeden dönüyor. Toprakta büyük izler köye sırt çevirip gidiyor. Öğretmen sabaha kadar köz taşıyor.",
  "yanlis": "Okulun önüne dizdiklerin akşamı durdurmuyor. Naim eve dönerken arkasına bakıyor. Çantası yolda bulunuyor. Nebahat Öğretmen ertesi sabah yoklamada onun adını okuyor. Sınıf susuyor. Öğretmen adı bir daha okuyor, defteri açık bırakıp tahtaya dönüyor.",
  "cevap": {
   "tam": "Sayın Bay ya da Bayan,\n\nTayin istemedim. Her akşam okulun önüne fener koyuyorum, süpürge kapının arkasında duruyor, müfettiş sorarsa temizlik için derim.\n\nMedine Hanım’a o günü anlattım. Uzun uzun elime baktı, kalkıp gitti. Ertesi pazartesi sınıfa geldi, okuma öğreniyor, en önde oturuyor.\n\nNot: Yoklamada Ömer’in adını okuyorum. Sınıf “Yok” diyor. Bana mevcudu düzeltin diye yazdılar, düzeltmedim.\n\nNot 2: Medine Hanım çarpım cetvelini bitirdi. Hiç yanlışı yok.",
   "eksik": "Sayın Bay ya da Bayan,\n\nÇocuklar okula dönüyor. Köy, Ömer’i anası yalnız bıraktı diye konuşuyor, Medine Hanım evden çıkmıyor. Bir düzeltme yapmadım.\n\nNot: Sayfa hâlâ yırtık.",
   "gec": "Necati ay başında babasının elinden kayıp dışarı çıktı, önlüğü bana geldi."
  },
  "kenar": "Kapı önünde çocuk bırakma. Sabiha’yı çok bıraktım, doğum vardı."
 },
 "eviyesi": {
  "village": "Eskihisar",
  "chosen": {
   "kurban": "hane",
   "iz": "dagin",
   "tanik": "ufak",
   "zaman": "ayni_saat",
   "yer": "ocak",
   "sebep": "kirlilik"
  },
  "open": [
   "kurban",
   "iz",
   "tanik"
  ],
  "letter": {
   "body": "Bu kâğıdı un çuvalının arkasında saklıyorum. Yazdığımı kimse bilmeyecek.\n\nAğustosta gelin geldim. Kayıp ne varsa benden biliyorlar. Kaynanam ‘Sen geldin geleli’ diyor.\n\nKapı sesi geldi, bıraktım.\n\nDöndüm. Kocam Mehmet cuma günü beni babama götürecekmiş, sandığımla. Evin hiçbir işine elimi sürdürmezler, kaynanam her şeyi kendi yapar, suç bana kalır. Dün çorbaya iki kere tuz attı, Mehmet sesini çıkarmadan içti.\n\nGene kapı.\n\nBir şey daha gördüm, ben de inanmadım, onu buraya yazamam. Cevabı Mediha Kadın’a verin, kuyu başında bana verir.",
   "sign": "Adımı yazmıyorum"
  },
  "clues": {
   "kurban": "Evi sırayla dinliyorsun. Mehmet tarlaya giderken aletini bulamıyor, küçük Orhan çarığını. Ambar her gün bir avuç çekiliyor, bütün ev halkının bir derdi olmuş, birbirini suçluyorlar. Naile Hanım seni oturtuyor. Sana bakıyor, ama biraz sağ yanına bakıyor. Çayı doldururken parmağının ucu bardağın kenarında duruyor. “Müzeyyen işime karışmaz” diyor. “Benim evimde her şeyin yeri bellidir.”",
   "iz": "Odaya giriyorsun, ortalık darmadağın. Sandık açık, içi dökülmüş, kaplar raftan indirilmiş, yüksük bir çarığın içinde, anahtar un küpünde. Bu sabah toplanmış, gene dağılmış. Odanın ortasında bir iskemle duruyor. Naile Hanım yürürken ayağı iskemleye çarpıyor, sendeliyor, “Bu kız koydu” diyor. Mehmet koşup iskemleyi yerine çekiyor, bir karış ölçer gibi duvara göre ayarlıyor. Seninle göz göze gelince elini çekiyor.",
   "tanik": "Küçük Orhan avucunu açıp bir karış gösteriyor: “Bu kadardı. Sakalı vardı, kendi dizine kadar. Gece su içmeye kalktım, sedirin altından yürüdü, ufacık elleriyle kapları tek tek oynatıyordu. Anneme dedim. Annem ‘Sen gözünle gördün mü’ dedi, sonra sustu. Nazire Ebe geçen güz bize geldi, anneme bir iğne uzattı, annem almadı. Ebe iğneyi yakasına geri taktı, çayını içti, gitti.”"
  },
  "closed": {
   "zaman": "Bu işin hangi vakitte olduğunu gelin biliyor. Kaynanası yanından ayrılmıyor, ağzından tek söz aldırmıyor.",
   "yer": "Evin bir odasına Naile Hanım seni almıyor. “Toplamadım, ayıp olur” diyor, kapının önünde duruyor.",
   "sebep": "Mehmet bulaşık teknesini ayağıyla sedirin altına itiyor. “Anamın evi tertemizdir” diyor, kapıyı örterek."
  },
  "gidisat": [
   "Naile Hanım sabah sedirin yerini bulamadı, yere oturdu, kimseye haber vermedi.",
   "Anahtar kuyudan çıktı. Mehmet cumayı beklemeyeceğini söyledi, kağnıyı hazırlatıyor.",
   "Naile Hanım merdivende ayağını yanlış yere bastı. Bileği şişti, hâlâ kimseye tutunmuyor."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Naile Hanım’a iskemleyi sor",
   "text": "Naile Hanım elini dizine koyuyor. “Yirmi yedi yıl önce geldim bu eve. Kaynanam ilk sene eşyaları saklardı, gelin kız aklını kaybetsin diye.” Elini duvarda gezdirip sedirin yerini buluyor, oturuyor. Sesini alçaltıyor: “Bir şey yerinden oynarsa o benim evime girmiş yabancıdır.” Yüzünü sana çeviriyor, sen öbür yandasın."
  },
  "sir": {
   "q": "Naile Hanım’ın sakladığı şey ne?",
   "right": "Gözlerinin görmediğini, oğlu da biliyor, gelin bilmiyor",
   "wrong": [
    "Yüksüğü ve anahtarı gelin gitsin diye kendi sakladığını",
    "Kocasından kalan parayı ambarın altına gömdüğünü"
   ]
  },
  "sahne": "Her gece aynı saatte ocak başı tıkırdıyor. Lambayı kısıp bekliyorsun. Külün arkasından bir karış boyunda, sakalı dizine değen bir ihtiyar çıkıyor, sedirin ayağını kucaklıyor, bir parmak çekiyor, bakıyor. Naile Hanım yatağından kalkıyor, duvarı tutarak geliyor, iskemlenin olduğu yerde duruyor. İhtiyar başını kaldırıp onun boş gözlerine bakıyor.",
  "kovma": "Bir tas sütü Müzeyyen Naile Hanım’ın eline veriyor, parmaklarını kenara o yerleştiriyor, ilk kez elini tutuyor. Naile Hanım tası ocak başına bırakıyor. Mehmet kapının arkasına süpürgeyi ters dikiyor. Sabah sedir bir parmak geri gelmiş, yüksük iğnenin yanında. Naile Hanım elini uzatıp ilk seferde oturuyor.",
  "yanlis": "Koyduklarını gün ağarınca sedirin altında buluyorsun. Cuma sabahı Mehmet gelini kağnıya bindiriyor, sandık arkadan gelecek diyor. O gece sini yine yerinden oynuyor. Naile Hanım yüklüğü ararken duvarın dibine oturuyor, seslendiği kimse yok.",
  "cevap": {
   "tam": "Kâğıdı gene un çuvalının arkasında yazıyorum, alıştım.\n\nKaynanama söylemedim, o söyledi. Bir akşam elimi tuttu, ‘Bardak nerede’ dedi. Şimdi yemeği beraber yapıyoruz. O bana neyin nerede durduğunu ezberletiyor, gözümü kapayınca evi buluyorum.\n\nAkşamları ocak başına süt bırakıyorum. Sabah tas boş oluyor. Tasın kulpu kaynanamın elinin geleceği yana çevrilmiş oluyor.",
   "eksik": "Kâğıdı saklıyorum. Evde kap kaçak durdu, beni göndermediler. Köyde hâlâ “O gelin geldi, o ev karıştı” diyorlar. Kaynanam yine tuzu iki kere atıyor. Bana bakıyor, bir karış yanıma. Ben de yüzümü o yana çeviriyorum.",
   "gec": "Kaynanamın bileği iyi kaynamadı, merdiveni artık oturarak iniyor."
  },
  "kenar": "İğne uzattım, almadı. Söylemedim. Bazen söylememek ebelik sayılır, bazen sayılmaz."
 },
 "odana": {
  "village": "Dutluca",
  "chosen": {
   "kurban": "hane",
   "iz": "kul",
   "tanik": "alev",
   "zaman": "aksam",
   "yer": "ocak",
   "sebep": "ates"
  },
  "open": [
   "kurban",
   "iz",
   "yer"
  ],
  "letter": {
   "body": "Efendim ben Dutluca’da Mahir Usta’nın büyük oğlu Necmi babam öleli bu evin büyüğü benim kimseye söz ettirmem ekmeğimiz eksik olmazdı üç haftadır ne yapsak tutmuyor, hamur ekşiyor, ambar küflü çıkıyor, karım Melahat yedi aylık, tencere başında duruyor yine iki kere kömür etti, yemin ediyor gözünü ayırmadı, çocuklarda da bir şey var, anam kolundan rahatsız, düştü, yaşı ilerledi, onu sormanıza lüzum yok, dert değil, bir şey daha var ama mektup uzadı, Melahat’ı bu evde düşündüğümde uyuyamıyorum, siz bu derdin ne olduğunu deyin, eve yabancı giren olmadı, ben ne yaptıysam kendi evimde yaptım.",
   "sign": "Necmi"
  },
  "clues": {
   "kurban": "Necmi’nin evine giriyorsun, herkesin bir yeri değmiş. Melahat’ın kaşları yarım, önlüğünün ucu kavruk. Pakize elini arkasına saklıyor, avucu su toplamış. Altı yaşındaki Osman’ın perçemi yanık. Bütün ev halkı aynı derdin içinde. Nesibe sağ kolunu bezle sarmış, açtırmıyor, sana bakıp sonra Necmi’ye bakıyor, başını önüne eğiyor. Komşu Perihan Kadın kapı arkasından fısıldıyor: “Düştü, siz de düştü deyin.”",
   "iz": "Daha kimse kalkmadan aşağıdasın. Odanın yarısı kül, ince, gri, sedirin kenarına kadar yürümüş. Silip süpürdükleri halde yine gelmiş. Kilimin bir ucu yanık, tavan is içinde, minderlerde avuç kadar kara lekeler. Necmi’nin çizmeleri kapı dibinde duruyor, sağının burnu kavrulmuş. Soruyorsun. “Eskiden beri öyle” diyor, çoraplı ayağını altına çekiyor.",
   "yer": "Ocak başına çömeliyorsun. Üç taşlı eski bir ocak, taşlardan biri iki parmak dışarı kaçmış, sac ayağı eğri. Üstü yeni sıvanmış, sıva yarım bırakılmış. Ocağın önündeki kilimi kaldırıyorsun, altında toprak çatlamış, su görüp kurumuş. Külün de yanığın da başladığı yer burası. Nesibe kırk yıl oturduğu ocak başına artık gelmiyor, odanın öte ucundaki sedirde oturuyor. “Yerim orası artık” diyor, Necmi’nin yanından geçerken kolunu öteki eliyle tutuyor."
  },
  "closed": {
   "tanik": "O gün evde kim ne gördü, soruyorsun. Necmi gelip odanın ortasına oturuyor, herkes yere bakıyor.",
   "zaman": "Melahat tam söyleyecekken Necmi araya giriyor: “Kadın her gün aynı işi yapar, saat mi tutacak?”",
   "sebep": "O gün o evde ne olduğunu Perihan Kadın biliyor. Necmi sabah erken gidip eski borcunu ödemiş, Perihan Kadın kapıyı aralamıyor."
  },
  "gidisat": [
   "Melahat tencere kapağını kaldırırken parmakları su topladı. Hamuru yine attı.",
   "Osman’ın yorganında avuç kadar bir yanık açıldı, çocuk uyurken. Necmi oturarak sabahladı.",
   "Melahat’ın karnı sancıdı, yedi aylık. Köyde ebe soruluyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Nesibe’ye neden ocak başına gelmediğini sor",
   "text": "Nesibe kolundaki bezi öteki eliyle örtüyor. “Bu ocak kırk yıl elimi yakmadı” diyor. “Mahir’in anasından aldım, ben besledim.” Sedirin ucunda dimdik oturuyor. Gözünü kapıya dikiyor. Kapıda Necmi durmuş, ne zamandır orada bilmiyorsun. Nesibe sesini değiştirmeden “Düştüm” diyor, başka bir şey söylemiyor."
  },
  "sir": {
   "q": "Nesibe’nin kolu nasıl yandı?",
   "right": "Necmi ocağı tekmeledi, köz kolunu yaktı",
   "wrong": [
    "Melahat kızgın sacı devirdi, o sustu",
    "Kendi düştü, yaşı ilerlemişti zaten"
   ]
  },
  "sahne": "Akşam karanlığında ocağı Pakize yakıyor. Nesibe karşıda sedirde, Necmi kapı dibinde, ellerini dizine koymuş. Ateş önce tutuşmuyor. Sonra birden dikilip tavana vuruyor. İçinden kırmızı bir ışık ayrılıyor, taşın üstünde oturan bir kadın gibi duruyor, yüzü yok, saçı alev. Kimseye bakmıyor, Nesibe’nin sardığı kola dönük. Necmi çoraplı ayağını altına çekiyor.",
  "kovma": "Ardıç dallarını Perihan Kadın getiriyor, tütsüyü ocak başında sen yakıyorsun, kırmızı ışık geri çekiliyor. Necmi bir kaşık yağı ateşe uzatıyor, eli titriyor, ateş almıyor. Nesibe sağlam eliyle kaşığı tutuyor, beraber atıyorlar. Ekmeğin ilk lokmasını o bırakıyor. Alev iniyor. Sabah hamur kabarmış, Necmi çizmesini kapıdan dışarı koyuyor.",
  "yanlis": "Getirdiğin hiçbir şey ocağı yatıştırmıyor. Ateş tutuşmuyor, sonra birden tutuşuyor. Pakize’nin önlüğü alıyor, Necmi üstüne atılıyor, elleri yanıyor. Sabah Necmi’nin kolları bezli, anasınınki gibi. Aynı sofrada oturuyorlar, ikisi de sağ elle kaşık tutamıyor. Kimse kimseye bir şey sormuyor.",
  "cevap": {
   "tam": "Efendim ben Necmi hamur kabarıyor ambar eski haline döndü anamın parmakları kapanmıyor ekmeği artık ben açıyorum acemiyim, ilk lokmayı ocağa atıyorum, ikincisini anama götürüyorum, alıyor, yüzüme bakmıyor, kime sorsan düştüm diyor, ben de artık söyleme demiyorum, söyle de demiyorum, dün Osman çizmemi giymiş ocağın önünde dolaşıyordu, elimi kaldırdım, baktım, indirdim.",
   "eksik": "Efendim ben Necmi evimiz düzeldi ateş yatıştı, köyde herkes anamın yaşlandığını ocağa düştüğünü söylüyor, ben de söylüyorum, kız kardeşim Pakize benimle konuşmuyor, onu da yazmış oldum.",
   "gec": "Melahat’ın çocuğu yedi aylık doğdu, bir gün yaşadı."
  },
  "kenar": "Ocağın önüne oturmayan kadına neden oturmadığını sor. Düştüm der. Çok duydum."
 },
 "kurtadam": {
  "village": "Kuyucak",
  "chosen": {
   "kurban": "yolcu",
   "iz": "kan",
   "tanik": "killi",
   "zaman": "dolunay",
   "yer": "dag",
   "sebep": "yalniz_yol"
  },
  "open": [
   "kurban",
   "iz",
   "sebep"
  ],
  "letter": {
   "body": "Polat’la yirmi yıl aynı tüfeğin yağını sürdük. O gün yoldan dönerken\n\nBaştan yazıyorum.\n\nKuyucak’tan kasabaya giden yolda üç kişi öldü. Posta müvezzii Naci, seyyar Nafiz, üçüncüsü Polat. Jandarma hayvan dedi, köy de öyle diyor. Ben avcıyım, hayvanın ne yaptığını bilirim. Polat’ın üstünde ne gördüğümü yazdım, sonra kâğıdı yırttım.\n\nKarısı Nimet soruyor, ‘Ayrıldık’ diyorum. Doğrudur.\n\nCuma pazarı dağılınca herkes kendi köyüne dönecek. O gece ben\n\nCumadan önce gelin. O yolu nasıl bildiğimi sormayın.",
   "sign": "Mürsel"
  },
  "clues": {
   "kurban": "Muhtar parmağıyla sayıyor: “Naci posta torbasıyla kasabadan dönerken. Nafiz katırla, yatsıdan sonra. Polat avdan. Üçü de gece yolcusu, gün batınca yola düşmüş. Gündüz geçen kimseye dokunulmamış, hiçbir ev basılmamış.” Posta torbası sağlam, mektuplar içinde. Polat’ın tüfeği dolu, tetiğe hiç dokunulmamış, av torbası boş. Muhtar başını sallıyor. “Yirmi yıllık avcı, tetiğe dokunamamış. Bunu nasıl yazayım?”",
   "iz": "Polat’ın yattığı yere geliyorsun. Toprak kan içmiş, kararmış, otların dibi hâlâ pas rengi. Kan burada bitmiyor. Yol boyunca iri damlalar köye doğru gidiyor, on adımda bir, gittikçe seyreliyor, mezarlık duvarına varmadan kesiliyor. Polat burada yatıyormuş. Geri dönüp Naci’nin yerine bakıyorsun, orada da aynısı: yattığı yerden köye giden damlalar. Bir ölü yürümez. Damlaların hepsi aynı taraftan geçiyor.",
   "sebep": "Nimet odun yığınının yanında: “Bu yol gece yalnız geçilmez, dedemden beri bilinir. Naci tek başınaydı, Nafiz tek başınaydı. Polat tek çıkmazdı. Yirmi yıldır yanında Mürsel vardı, o gün de ikisi çıktı. İkisi çıktı, biri döndü. Mürsel kapıma geldi, ‘Ayrıldık’ dedi, ondan başka söz etmedi. Polat o yolda gece neden tek kalsın? Mürsel her sabah gelip odunumu kırıyor.” Baltayı eline alıp bırakıyor."
  },
  "closed": {
   "tanik": "O gece gören tek canlı Nafiz’in katırı. Köyün köpekleri o yana havlamıyor, kuyruklarını kısıp ağıla giriyor, kimse de konuşmak istemiyor.",
   "zaman": "Muhtar ölüm günlerini ayrı kâğıtlara yazmış, ikisini kaybetmiş. Aradaki günleri sayan kimse olmamış.",
   "yer": "Cesetlerin bulunduğu yeri biliyorsun. Nereden geldiğini gösterecek patika iki adım sonra taşa çıkıyor, ötesine Mürsel seni götürmüyor."
  },
  "gidisat": [
   "Muhtar kimsenin gece yola çıkmamasını ilan etti. Cuma pazarına giden arabalar yine de bağlandı.",
   "Nimet Polat’ın tüfeğini Mürsel’e verdi. Mürsel tüfeği duvara dayadı, dokunmuyor.",
   "Cuma geldi. Pazardan dönenler kendi yollarına dağıldı, birinin adı akşamdan sonra sorulur oldu."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Mürsel’e kanın gittiği yönü sor",
   "text": "Mürsel oturduğu kütükten kalkmıyor. “O gün tavşan vurduk” diyor. Polat’ın av torbası boştu. Sen söylemeden o da hatırlıyor, susuyor. Sol kolunu dizinin altına çekiyor, sargının ucu ıslak. “Sabah evimin önünde uyandım. O yoldan nasıl geldiğimi bilmiyorum. Avcıyım, yol bilirim.” Sana bakıyor. “Bilmiyorum, yani.”"
  },
  "sir": {
   "q": "Mürsel’in ‘Ayrıldık’ sözünün doğrusu ne?",
   "right": "Ayrılmadılar, Mürsel o gece Polat’ın yanındaydı",
   "wrong": [
    "Yol ayrımında ayrıldılar, Polat yalnız kaldı",
    "Mürsel önce dönüp Nimet’e haber verdi"
   ]
  },
  "sahne": "Dolunayın doğacağı gece dağ yolunun başına büyük ateş yaktırıyorsun. Mürsel karşında oturuyor, kendi tüfeği dizinde. Ay sırtın üstünden çıkıyor. Köyün köpekleri bir anda susuyor. Mürsel tüfeği yere koyuyor. Sırtı ağır ağır kamburlaşıyor, gömleği omuzdan yırtılıyor, ensesinden kıl çıkıyor. Ateşin öbür yanından sana bakan şey artık onun gözleriyle bakmıyor.",
  "kovma": "Odunları Nimet atıyor, ateşi sen büyütüyorsun. Kıllı gövde çevresinde dönüyor, ateşe giremiyor. Erimiş kurşunu kepçeyle Nimet tutuyor, suyla dolu tası onun başının üstüne sen kaldırıyorsun. Suya dökülünce cızırdıyor, tasta bir kurt başı donuyor. Yerde yatan Mürsel’in kolları insan kolu. Nimet kepçeyi bırakmıyor, ona bakıyor, bir şey sormuyor.",
  "yanlis": "Hazırlığın yol başında öylece kalıyor, ay dağın arkasına iniyor. Gün doğduğunda Mürsel uyanıyor, kolunda yeni bir bez, yolu hatırlamıyor. Cuma akşamı pazardan dönen biri eve varmıyor. Mürsel cenazede kürek tutuyor, ilk toprağı o atıyor. Nimet ona su getiriyor.",
  "cevap": {
   "tam": "Polat’la yirmi yıl aynı\n\nBaştan yazıyorum.\n\nCuma pazarı geçti. Ay her dolduğunda köyün dışında ateş yakıyoruz, ben ortada oturuyorum. Kurşunu Nimet döküyor, kimseye bırakmıyor. Polat’ı bana bir daha sormadı.\n\nKurşunu dökerken elini başıma koyuyor. Geçen ay elini biraz fazla bıraktı.\n\nSonra bastırdı.",
   "eksik": "Polat’la yirmi yıl. Yol temizlendi. Köy, Polat’ın gece yolda içkili gezdiğini söylüyor. Nimet de duydu, kapısını örttü. Odununu yine ben kırıyorum. Kolumdaki bezi kimseye açmadım.",
   "gec": "Cuma akşamı pazardan dönen eğitmen Nazım yolda kaldı, atı köye yalnız geldi."
  },
  "kenar": "Yoldaki kanın yönüne bak. Bir keresinde bakmadım, kapıma kadar gelmiş."
 },
 "yeriyesi": {
  "village": "Alacahan",
  "chosen": {
   "kurban": "ciftci",
   "iz": "kuru",
   "tanik": "gorunmez",
   "zaman": "ogle",
   "yer": "tarla",
   "sebep": "izinsiz"
  },
  "open": [
   "kurban",
   "tanik",
   "yer"
  ],
  "letter": {
   "body": "Muhterem Kara Defter Sahibi,\n\nRumeli’den geldik, Alacahan’a iskân edildik. Devlete ve köye minnettarız. Muhtar Mazlum Bey bize kırk dönüm verdi, hiç sürülmemiş, bakir, köyün en iyi toprağıymış. Köylü ilk hafta ekmek bile getirdi. Kazmayı ilk vurduğumuz gün\n\nBuradan sonrasını ben yazıyorum, babamın eli kalemi tutmadı. Adım Leyla. Babamın ağzı yana kaydı, ağabeyim Mümin’inki geçen hafta kaymıştı. Tohum borcunu ödemezsek toprağı geri alacaklarmış, yarın annem gidecek.\n\nKöylüler hâlâ bize çok iyi davranıyor, selam veriyorlar. Bizim tarlaya giden yolda kimsenin ayak izi yok. Babam ‘Yazma’ dedi, yazdım.",
   "sign": "Lâtif’in kızı Leyla"
  },
  "clues": {
   "kurban": "Naime avluda, iki yatağın arasında: “Tarlada kazma tutan, harman yeri açan kim olsa. Önce Mümin, sonra babası. Gündelikçi Mehdi’yi de tuttuk, tarlanın ortasında yığıldı, eli kolu gitti, ağzı yana kaydı. Kenarda duran, yemek getiren kızıma bir şey olmadı. Yalnız orada çalışan, o toprakta eğilen.” Durup sesini alçaltıyor. “Köyde yardım edecek çok kişi var dediler, bir ay oldu, gelen olmadı.”",
   "tanik": "Leyla tarlanın kenarında, avucunu yumuyor: “Yanındaydım. Babam kazmayı kaldırdı, indirdi, durdu. Diz çöktü. Önümde hiçbir şey yoktu, kimse dokunmadı. Görünen bir şey olsa ona bakardım. Yalnızca babamın ağzı kaydı. Bu kadar yakından hiçbir şey görmek ne demek, siz bilir misiniz?” Yolun başını gösteriyor. “Muhtar Bey geçen hafta uğradı. Tarlaya adım atmadı, elimizi kenardan sıktı, ‘Allah bereket versin’ dedi.”",
   "yer": "Tarlaya yürüyorsun. Kırk dönümün çevresi ekili, ama komşunun saban izi bu toprağa on adım kala dönüyor, sınırdan öteye hiç geçmemiş. Hepsinin dönüş yeri aynı çizgide, yıllardır böyle. Köşedeki sınır taşı kaldırılıp başka yere dikilmiş, eski yerinde çukur duruyor, taşın dibi henüz ıslak. Bu tarlayı kimse sürmemiş derken doğru söylemişler. Neden sürmediklerini söylememişler."
  },
  "closed": {
   "iz": "Ekilenin hâlini görmek istiyorsun. Leyla, annesi görmesin diye köşedekileri söküp yakmış, nedenini sorunca başını çeviriyor.",
   "zaman": "Tarladakilerin hiçbiri vakti söyleyecek hâlde değil, dilleri dönmüyor. Leyla o gün yemeği kaçta götürdüğünü hatırlamıyor, gözünü babasından ayırmamış.",
   "sebep": "Köyün yaşlılarına bu toprağı soruyorsun. Seni görünce kahveden kalkıp gidiyorlar, Pembe Nine’nin kapısı yüzüne kapanıyor."
  },
  "gidisat": [
   "Naime kazmayı alıp tarlaya gitti, Leyla arkasından baktı. Akşam kağnıyla getirdiler.",
   "Tohum borcu için tahsildar geldi. Kapıya bir kâğıt bıraktı, okuyabilen yatakta.",
   "Leyla kazmayı omzuna aldı. Evde yürüyen bir tek o kaldı."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Muhtar Mazlum’a sınır taşını sor",
   "text": "Muhtar Mazlum seni kahveye oturtuyor, çay söylüyor. “Göçmen kardeşlerimize elimizden geleni yaptık.” Taşı soruyorsun, kaşığı bardakta dolaştırıyor. “Babam dedi ki o taşa dokunma, onun babası da. Ben dokunmadım.” Çayın parasını sen cebine davranmadan veriyor. “Devletin kâğıdı önüme gelince boş yer arandı, ben gösterdim. Yer boştu.” “Boş” derken sesi kısılıyor."
  },
  "sir": {
   "q": "Kırk dönüm neden göçmen aileye verildi?",
   "right": "Köy korktuğu toprağı bilerek onlara yıktı",
   "wrong": [
    "Devletin kâğıdında o tarla yazılıydı, Muhtar uydu",
    "Muhtar en iyi toprağı gerçekten onlara ayırdı"
   ]
  },
  "sahne": "Öğle sıcağında tarlanın ortasında duruyorsun. Muhtar kenarda, adım atmıyor. Leyla kazmayı dikiyor, sen bekliyorsun. Hiçbir şey görünmüyor. Ayağının altında toprak bir nefes alır gibi yükselip iniyor. Kazmanın ucundaki ot gözünün önünde sararıyor, sonra iki karış ötesindeki, sonra sana doğru bir şerit. Sol elinin parmakları kendiliğinden açılıyor.",
  "kovma": "Evdeki son unla Leyla somun yapıyor. Ekmeği ve bir kâse yağı köşeye sen gömüyorsun, önce yerin hakkı. Tuz torbasını Muhtar Mazlum getiriyor, kenardan uzatıyor. “Gir” diyorsun. Giriyor. Dört köşeye kendi eliyle serpiyor, elleri titriyor. Toprağın nefesi duruyor, sararma iki karış ötede kalıyor. Muhtar çıkarken ayakkabısına bakıyor.",
  "yanlis": "Kazma iniyor, gömdüklerin bir işe yaramıyor, Leyla’nın eli açılıyor, ağzı kayıyor. Köylüler eve somun getiriyor, “Geçmiş olsun” diyor, avluya girmiyor. Bir ay sonra devletin kâğıdı geliyor: toprak boş sayılmış. Kırk dönüme yeni bir aile atanıyor.",
  "cevap": {
   "tam": "Muhterem Kara Defter Sahibi,\n\nBen Leyla. Babam sağ elini az kaldırıyor, söylediğini yazıyorum. Buğday bu yıl dizimize geldi. Köyde selam veriyorlar. Muhtar Bey bayramda bir somun yolladı, annem elini sürmedi, götürüp tarlanın köşesine gömdük.\n\nBabam ‘Yaz, devlete ve köye minnettarız’ diyor.\n\nYazıyorum.",
   "eksik": "Muhterem Kara Defter Sahibi,\n\nToprak açıldı. Köyde ‘Göçmen bilmez, toprağa saygı göstermez’ diyorlar, Muhtar Bey de kahvede öyle anlatıyormuş. Selamımızı alıyor. Bayramda bize yine somun gönderdi, yedik.",
   "gec": "Ağabeyim Mümin yıl bitmeden sağ kolunu büsbütün kaybetti, kazma tutamıyor."
  },
  "kenar": "Toprak veren adamın kendi sınırına bak, sabanı nereden dönmüş. Çok toprak verildi benim önümde."
 },
 "karakedi": {
  "village": "Köprübaşı",
  "chosen": {
   "kurban": "hane",
   "iz": "pence",
   "tanik": "hayvan",
   "zaman": "gece_yarisi",
   "yer": "ocak",
   "sebep": "kiymak"
  },
  "open": [
   "kurban",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Ölçü Defteri, sayfa 41. Nuri Efendi hanesi.\n\nNuri Efendi: omuz, sağ 16, sol 16 idi. Bu hafta sol 14. Sol kol kalkmıyor, mezurayı kendim tutuyorum.\nMelek Hanım: bel 62. Sol ağız kenarı bir parmak aşağı. Ölçü alırken konuşuyor, anlaşılmıyor.\nNedim, dokuz yaşında: sağ kol 41, sağ kol tutmuyor.\nMakbule Hanım, abla: ölçü vermedi.\n\nEfendim, bayram elbisesi siparişi üstümde kaldı, teslim edemiyorum, kime uyacağını bilmiyorum. Bu işin aslı nedir, öğrenmek isterim.\n\nDükkânımda yirmi yıllık parası ödenmemiş bir gelinlik var, ölçüsü defterde yazılı. Sahibinin adını yazmam.\n\nBayrama on gün var.",
   "sign": "Terzi Mestan, Köprübaşı"
  },
  "clues": {
   "kurban": "Nuri Efendi’nin sofrasına oturuyorsun. Nuri Efendi’nin eli kaşığı tutmuyor. Melek’in ağzı yana kaymış. Nedim bir şey söylemek istiyor, dili dönmüyor. Bütün ev halkı çarpılmış, komşuya bir şey olmamış. Makbule Hanım da sağ kolunu eteğine sarmış, “Üşüyor” diyor. Mestan Usta kulağına eğiliyor: “Yirmi yıldır ablası olarak bu evde oturur. Düğün hazırlığı görülen ilk gelin o idi, sonra Melek geldi. Bana sormayın.”",
   "zaman": "Köprü bekçisi Paşa, kapıdan seni görünce anlatıyor: “Evin bacasını görürüm. Hep gece yarısı olur, ikinci nöbete geçerken, çarşı saati on ikiyi vurunca. Melek Hanım’ın sesi o saatte geldi, ondan önceki gece oğlanınki. Yirmi yıldır Makbule Hanım’ı da görürüm, gece yarısı köprünün başına gelip oturur. Düğün gecesi de oradaydı, üstünde gelinlik yoktu. Bana sorarsan hiç uyumaz.”",
   "yer": "Ocak başına geçiyorsun. Çarpılanları sabah orada buluyorlarmış, ocağın önünde oturur halde. Melek’in ocak başındaki minderini Mestan Usta söküyor. İçinden yassı bir kese çıkıyor: bir tutam saç, üç düğüm. Usta dikişi ışığa tutuyor. “Bu benim dikişim değil. Sol elle atılmış, ilmek ters döner.” Minderi geri koyarken ekliyor: “Nazire Ebe bu eve geldiğinde hep yere çökerdi, bu mindere hiç oturmadı.”"
  },
  "closed": {
   "iz": "Ocak taşını Melek Hanım sabah külle sıvamış, üstünde ne varsa örtmüş. “Temizlik” diyor, ağzının yarısıyla.",
   "tanik": "Küçük Nedim gördüğünü duvara kömürle çizmiş. Nuri Efendi duvarı ertesi gün kireçletmiş.",
   "sebep": "Makbule Hanım’ın sandık odasında bir kazan var, dibi yeni ovulmuş. Kazanı sorunca kalkıp odadan çıkıyor."
  },
  "gidisat": [
   "Melek konuşacak oldu, ağzından nefesten başka bir şey çıkmadı.",
   "Mestan Usta bayram elbiselerinin kollarını söküp yeniden kesiyor. Birine tek kol biçti.",
   "Nedim’in gözü sabah içeri kaydı. Nuri Efendi oğluna bakmıyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Makbule Hanım’a keseyi göster",
   "text": "Makbule Hanım keseye bakmıyor, iğnesine iplik geçiriyor, sol eliyle. “Melek küçükken benim yatağımda uyurdu” diyor. Yalnızca ipliğin sesi geliyor. “Nuri Efendi’nin anası beni istedi. Ben oturdum, Melek’i gördüler.” Keseyi alıp ağzını dikiyor, düzgün, sıkı. Başını kaldırmadan “Usta’ya sor, gelinlik nerede” diyor."
  },
  "sir": {
   "q": "Minderin içine o keseyi kim dikti?",
   "right": "Ablası Makbule, kıskançlıktan, sol eliyle",
   "wrong": [
    "Terzi Mestan, Nuri Efendi’nin siparişiyle",
    "Melek, kocasını kendine bağlamak için"
   ]
  },
  "sahne": "Gece yarısı ocak başında bekliyorsun. Ev halkı birer birer kalkıp geliyor, ellerini ateşe uzatıp oturuyor, birbirine bakmıyor. Sıcak taşın üstünde kara bir kıvrım açılıyor, gözleri kömür gibi. Kapı eşiğinde bir tane daha duruyor, yüklüğün üstünde bir tane daha. Hepsi Makbule Hanım’a dönük. Makbule Hanım eteğindeki kolu göğsüne çekiyor.",
  "kovma": "Makbule Hanım kalkıyor, ocağın önünde diz çöküyor, “Destur” diyor, kimseye bakmadan. Bir daha, daha yüksek. Mestan Usta kapının arkasına süpürgeyi ters dikiyor. Kara gövde taştan iniyor, eşiğe yürüyor, çıkarken durup ona bakıyor. Melek ağzının yarısıyla bir şey söylüyor. Yirmi yıl sonra bu evde ilk kez “Abla” deniyor.",
  "yanlis": "Gece yarısı ev halkı yine ocak başına iniyor, senin koyduklarına bakmadan oturuyor. Sabah Nuri Efendi konuşamıyor. Makbule Hanım çorbayı sol eliyle hepsinin ağzına tek tek götürüyor. Mestan Usta bayram elbiselerini teslim etmiyor, deftere yeni ölçü yazmıyor.",
  "cevap": {
   "tam": "Ölçü Defteri, sayfa 42. Nuri Efendi hanesi.\n\nNuri Efendi: sol omuz 15. Sol kol kalkıyor.\nMelek Hanım: ağız düzeldi.\nNedim: büyüyor.\nMakbule Hanım: sonunda ölçü verdi.\n\nGelinliği dükkândan aldı, yirmi yıllık parasını sayarak ödedi. Belini açtırmadı, boyunu kısalttırmadı. “Yatarken kısa gelmesin” dedi.\n\nÖlçüyü yatarak verdi.",
   "eksik": "Ölçü Defteri, sayfa 42. Hanede herkes doğruldu. Köy, keseyi Melek Hanım’ın kendi koyduğunu söylüyor, kocasını bağlamak için. Makbule Hanım duydu, iğnesine iplik geçirdi. Bayram elbiselerini teslim ettim. Gelinlik askıda.",
   "gec": "Nedim’in gözü geri gelmedi, yakasını bir yana göre kestim."
  },
  "kenar": "Minderi sökmeden oturma. Kardeş arasına ebe girmez derler, girdim, çıkamadım."
 },
 "kormos": {
  "village": "Ballıca",
  "chosen": {
   "kurban": "hane",
   "iz": "kul",
   "tanik": "olu",
   "zaman": "ayni_saat",
   "yer": "ocak",
   "sebep": "olu_unutmak"
  },
  "open": [
   "kurban",
   "iz",
   "yer"
  ],
  "letter": {
   "body": "Kalemi kendim tutuyorum, yazım bozuksa ondandır.\n\nHekim perşembeyi görmez dedi. Seksen üç yaşındayım, üstüme almadım. Bu son mektubumdur.\n\nEvde altı kişiyiz. Ekmek yedi kişiye gider gibi gidiyor, doyan yok. Torunum Lütfiye on dört yaşında, bileğini iki parmağıyla kavrıyor. Oğlum Murat kuşağını iki kat daralttı. Yiyoruz, doymuyoruz.\n\nYemen’e gitmem gereken yılı sormayın. Ben sağım, o kâfi.\n\nBen gidiyorum, bu dert evimde kalmasın. Karım Meryem’e bir şey söylemeyin. Perşembeden önce gelin. Geç kalırsanız sorunuzun cevabını kimse veremez.",
   "sign": "Mustafa, Ballıca"
  },
  "clues": {
   "kurban": "Sofraya oturuyorsun. Beş kişi oturuyor, altıncısının tası yukarı gidiyor. Hepsi yiyor, hepsinin yüzünün kemiği çıkmış. Küçük Muharrem tası sıyırıyor, karnı yine sırtına yapışık. Münevver bileziğini kolundan çıkarıp koynuna koymuş. Bütün ev halkı gün gün eriyor. Meryem Nine ekmeği bölerken duruyor: “Kaynanam ölene dek bir tabak fazla koyardı, kim için demezdi. Nazire Ebe, Lütfiye’yi doğurttuğu gece tabakları saydı, yüzüme baktı, ağzını açmadı.”",
   "iz": "Sabah odaya ilk sen iniyorsun. Kül ocaktan savrulmuş, odanın ortasına kadar incecik serilmiş. Münevver her gün süpürüyor, her sabah yine. Taşta taze is var, dün silinmiş. Külü eşeliyorsun, içinden yarım yanmış bir kâğıt çıkıyor. Eski yazı, kırmızı bir asker mührü, sevk kâğıdı. Üstünde bir ad okunuyor: Mustafa. Kâğıt ona gelmiş, adam burada yaşlanmış.",
   "yer": "Ocağın önünde diz çöküyorsun. Evde ne olduysa burada oluyor, kimse bu taşın yanında uzun oturmuyor. Taşın üstünde, külün kenarında ucu yanık bir tahta kaşık duruyor, sapına eski yazıyla bir ad kazınmış. Okuyorsun: Nusret. Evde bu adda kimse yok, köy mezarlığında da çıkmıyor. Murat’a soruyorsun, eskiden kalma diyor. “Babamın kardeşi yok” diye ekliyor, oysa kardeşi sormamıştın. Kaşığı eline aldığın an yukarıdan Mustafa Dede’nin öksürüğü kesiliyor. Sonra kesildiği yerden sürüyor."
  },
  "closed": {
   "tanik": "Gece ocak başında kim oturuyor, soruyorsun. Evdekiler başka başka yüz anlatıyor, Mustafa Dede “Ben söylerim” diye hepsini susturuyor, söylemiyor.",
   "zaman": "Evin duvar saati durmuş, akrebi hep aynı yerde. Mustafa Dede kurdurmuyor, sebebini de söylemiyor.",
   "sebep": "Evin anılan ölülerini soruyorsun. Murat mevlit defterini getiriyor, bir yaprağı sırtından kesilmiş."
  },
  "gidisat": [
   "Muharrem sofrada kaşığı bıraktı. “Doydum” demedi, eli kalkmadı.",
   "Murat sabah kuşağını üçüncü kez düğümledi. Yolda durup duvara tutundu.",
   "Mustafa Dede gözünü açmıyor. Nefes alırken ağzı bir ad söyler gibi oynuyor, ses çıkmıyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Mustafa Dede’ye kaşığı göster",
   "text": "Mustafa Dede kaşığı görünce gözünü tavana çeviriyor. “Ben o yıl üç aylık oğlumun yanındaydım” diyor. Nefes alıyor, veriyor. “Kâğıt bir kişiye gelir. Gitmek kimin ayağına düştüyse o gider.” Öksürüyor, elini kaşığa uzatıyor, yarı yolda çekiyor. “Anamı ben susturdum. Onu da yaz.”"
  },
  "sir": {
   "q": "Mustafa Dede kırk yıldır neyi saklıyor?",
   "right": "Kardeşi Nusret’in onun yerine Yemen’e gittiğini",
   "wrong": [
    "Kardeşi Nusret’i tarla yüzünden öldürdüğünü",
    "Karısı Meryem’in Nusret’in nişanlısı olduğunu"
   ]
  },
  "sahne": "Saat gelince ocak başında bekliyorsun. Ateş küllere çökmüş. Bir kaşık sesi başlıyor, tahta tabağın dibine vuruyor, ağır ağır. Ocağın önünde sırtı sana dönük biri oturuyor, üstünde eski bir asker kaputu, sırtında kül. Başını çeviriyor. Mustafa Dede’nin yüzü, kırk yıl önceki hali. Eliyle boş tası gösteriyor. Bir daha gösteriyor.",
  "kovma": "Ocağı harlatıyorsun, sabaha kadar sönmeyecek. Ateşe yağ atıyorsun, bir lokma ekmek. Mustafa Dede’yi ocak başına taşıyorlar. Kaşığı eline veriyorsun. “Adını söyle” diyorsun. Dört kere deniyor. “Nusret” diyor, bu evin içinde kırk yıldır ilk kez. Arkasından Meryem Nine söylüyor, sonra Murat, sonra Lütfiye. Kaşık sesi kesiliyor.",
  "yanlis": "Ocağa attıkların kaşık sesini kesmiyor. Perşembe sabahı Mustafa Dede gözünü kapatıyor, kimseye bir ad söylemeden. O gece sofrada yedi kaşık sesi duyuluyor. Murat babasının kalemini sandığa koyuyor. Lütfiye sofradan kalkarken duvara tutunuyor.",
  "cevap": {
   "tam": "Dedemin kalemiyle yazıyorum. Perşembeyi gördü, cumayı görmedi. Son sözü bir addı.\n\nSofraya yedi tabak koyuyoruz. Beşimiz yiyoruz. Birini ocağa boşaltıyoruz, birini dedem için kaldırıyoruz. Yüzüme et geldi.\n\nMuharrem’e Yemen’i haritadan gösterdim. Adı her akşam yüksek sesle söylüyoruz, Muharrem yanlış söylüyor, düzeltmiyoruz.\n\nEkmek az geliyor. Yetmesin.",
   "eksik": "Dedemin kalemiyle yazıyorum. Evde herkes toparlandı. Köy, bu derdi ninem getirdi diyor, kırk yıl önce bir ölünün hakkına girmiş. Ninem ne olduğunu bilmeden başını sallıyor.",
   "gec": "Küçük Muharrem’in dizleri bir daha tutmadı, sofraya kucakta geliyor."
  },
  "kenar": "Tabakları say, sonra oturanları. O kış bir evde saydım, tuttu. Bir daha saymadım."
 }
};
