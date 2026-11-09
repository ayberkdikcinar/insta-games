// Hand-written cases. Rules: HIKAYE_REHBERI.md; chosen/open come from tools/story-plan.json.
export default {
 "karakoncolos": {
  "village": "Aşağı Yayla",
  "chosen": {
   "kurban": "hane",
   "iz": "buyuk_iz",
   "tanik": "cagiran",
   "zaman": "zemheri",
   "yer": "esik",
   "sebep": "cevap"
  },
  "open": [
   "kurban",
   "tanik",
   "yer"
  ],
  "letter": {
   "body": "T.C. Aşağı Yayla Köyü Muhtarlığı\nSayı: 7\nKonu: Kapı\n\nKara Defter Sahibi Makamına,\n\n1. Köyümüzde hane sayısı otuz ikidir. Bu ay başında otuz üç idi.\n2. Demirci Ali’nin hanesi ayın 11’i sabahı kapısı açık olarak bulunmuştur. Hanede kimse yoktur.\n3. Durum Jandarmaya bildirilmiş, Jandarma yol kapalı olduğundan gelememiştir.\n4. Halka geceleri kapı açılmaması ilan edilmiştir. Halkın bir kısmı ilana uymaktadır.\n5. Dün gece Muhtarlık kapısı da çalınmıştır. Tarafımdan cevap verilmemiştir. Çalanın kimliği hususunda kanaatim vardır, ancak merhum hakkında resmî yazı yazmak istemem.\n\nGereğini arz ederim.",
   "sign": "Muhtar Recep"
  },
  "clues": {
   "kurban": "Demirci Ali’nin evine giriyorsun. Sofra beş kişilik kurulu, kaşıklar çorbanın içinde, çorba donmuş. Çocuk terliğinin biri sofranın altında, öbürü eşikte. Ali, karısı, iki oğlu ve Ali’nin anası: bir hanenin tamamı aynı akşam kalkıp gitmiş. Kapının hemen yanındaki yatakta yorgan açık. Yaşlı kadının değneği duvarda duruyor. Muhtar arkandan “O kadın değneksiz ayağa kalkamazdı” diyor.",
   "tanik": "On iki yaşındaki Gülizar annesinin eteğini bırakmıyor: “Dedem dört yıl önce öldü. Gece kapıdan ‘Gülizar, kızım, üşüdüm, aç’ dedi. Öksürüğü bile aynıydı. Sonra annemi adıyla çağırdı, onun ölmüş ablasının sesiyle. Sonra babamı. Annem ağzımı kapattı. Babam kalktı, kilimle bağladık. Demirci’nin ninesi de her kış kapıyı dinlerdi. Kırk yıldır dul. Kocası bir kış gelecek der dururdu.”",
   "yer": "Kapıları tek tek geziyorsun. Yedi evin önünde aynı şey var: eşik taşının hemen dışında kar ezilmiş, bir şey orada uzun uzun durmuş. Eşikten içeri geçen olmamış. Eşiği aşılmış tek ev Demirci’nin evi, onun da kapısı içeriden açılmış: sürgü kırık değil, usulca çekilmiş. Sürgü alçakta. Yatağından doğrulan biri elini uzatsa yetişir."
  },
  "closed": {
   "iz": "Muhtar, düzen bozulmasın diye köyün yollarını her sabah kürettirmiş. Takip edilecek ayak izi kalmamış.",
   "zaman": "Muhtarın defterinde gün yazıyor, saat yazmıyor. O saatlerde herkes kapısını bağlayıp oturuyormuş, dışarı bakan olmamış.",
   "sebep": "Köyün en yaşlısı Demirci’nin anasıydı."
  },
  "gidisat": [
   "Gece kapılar yine çalındı. Bu sefer dokuz evde.",
   "Sabah Gülizar’ın babası bağlandığı kilimi kesmiş bulundu. Evde, kapının karşısında oturuyor. Konuşmuyor.",
   "Recep Muhtar geceleri babasının sesine cevap vermeye başlamış, kapıyı açmadan. Yalnızca “Bekle” diyor."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "Muhtara yaşlı kadının kocasını sor",
   "text": "Recep Muhtar kalemi bırakıyor. “Hacı Bekir kırk sene önce köyün yolunda kara kaldı. İki gün aranmadı, tipi vardı. O zaman muhtar babamdı.” Bir süre pencereye bakıyor. “Bana babamın sesiyle geliyor. Neden onun sesiyle, onu bilmiyorum, deyip duruyorum.”"
  },
  "sir": {
   "q": "Demirci Ali’nin kapısını kim açtı?",
   "right": "Ali’nin anası, ölen kocasının sesine",
   "wrong": [
    "Ali, jandarma geldi sanarak",
    "Küçük oğlan, dedesinin sesine"
   ]
  },
  "sahne": "Gece Muhtarlığın kapısında bekliyorsun. Recep Muhtar içeride, kucağında resmî defter. Lamba titremiyor, kimse konuşmuyor. Kapı üç kere vuruluyor, usul usul. Sonra bir ses, pek yumuşak: “Recep. Oğlum. Üşüdüm.” Muhtar kalemi kırıyor.",
  "kovma": "Ocağı harlatıyorsun, Muhtar ambardaki kalburu kapıya çakıyor. Dışarıdaki ses kesiliyor. Bir süre sonra başka bir şey başlıyor, kalın, sabırlı bir mırıltı: “Bir. İki. Üç. Dört.” Yanlışlıyor, baştan alıyor. Sabaha kadar sayıyor.",
  "yanlis": "Hazırlığın o kapıya işlemiyor. Gece yarısına doğru Recep Muhtar kapının önüne gidip “Buyur baba” diyor. Sabah Muhtarlığın kapısı açık. Defter masanın üstünde, son satır yarım.",
  "cevap": {
   "tam": "Kara Defter Sahibi Makamına,\n\n1. Zemheri sona ermiştir.\n2. Her haneye birer kalbur dağıtılmıştır.\n3. Demirci Ali ve hanesi bulunamamıştır. Nüfustan düşülmemiştir, elim varmadı.\n4. Yaşlı kadının yatağını kapının yanından almadılar. Komşular her akşam oraya bir lamba koyuyor. Bu hususta bir ilan yapmadım.\n5. Merhum babam bir daha gelmemiştir. Bazı geceler bunu da düşünüyorum.\n\nGereğini arz ederim.",
   "eksik": "Kara Defter Sahibi Makamına,\n\nKapılar artık çalınmıyor. Köy, kapıyı açan kişinin Demirci Ali olduğu kanaatindedir ve kendisi hakkında konuşmaktadır. Tarafımdan bir düzeltme yapılmamıştır.\n\nGereğini arz ederim.",
   "gec": "Gülizar’ın babası ayın 20’si gecesi evde bulunamamıştır. Kilim yerdeydi."
  },
  "kenar": "Kalburu kapıya as, sonra uyu. Sesi tanıyorsan ikincisini de as. Ben tanımıştım."
 },
 "albasti": {
  "village": "Yukarı Söğüt",
  "chosen": {
   "kurban": "lohusa",
   "iz": "sac",
   "tanik": "uzun_sacli",
   "zaman": "kirk",
   "yer": "oda",
   "sebep": "yalniz"
  },
  "open": [
   "kurban",
   "yer",
   "sebep"
  ],
  "letter": {
   "body": "Kara Defter’in sahibine,\n\nBu mektubu Hatice Kadın söyledi, ben yazdım. Sözü sözüne koydum:\n\n“Oğlum Mahmut askerde. Gelinim Emine on bir gün önce bir oğlan doğurdu. Doğum kolay geçti, ebe de öyle dedi. Dördüncü gün yataktan kalkamaz oldu. Şimdi ne çocuğa bakıyor ne bize. Bu kız bize zaten zayıf geldi, anası babası söylememişti. Ben üstüne titredim, kimse aksini diyemez. Oğluma ne yazacağımı bilmiyorum. Gelin bakın, ne ise söyleyin.”\n\nParmağını bastı, gitti. Bir şey daha var ama onu buraya yazmam. Gelince sorun.",
   "sign": "Eğitmen Fikret, Yukarı Söğüt"
  },
  "clues": {
   "kurban": "Emine odanın dibinde yatıyor. Yirmi yaşında bile yok. Alnı yanıyor, parmakları buz. Bebeği göğsüne yaklaştırıyorlar, başını çeviriyor. Ebe çocuğun ağzına pamukla süt damlatıyor. Seni görünce “Kapıyı kapatma” diyor. Kapı açık. Hatice Kadın arkandan “Sayıklıyor, aldırmayın” diyor. Emine’nin gözü kayınvalidesine gidiyor ve bir daha konuşmuyor.",
   "yer": "Evin en içindeki oda. Tek penceresi avluya bakıyor, üstü kalın bir kilimle kapatılmış. İçerisi havasız, yeni yıkanmış tahta ve sabun kokuyor. Kapıyı kapatıp bakıyorsun: sürgü dışarıda. Demiri yeni. Tahtanın iç yüzünde eski bir sürgünün delikleri duruyor, onlar macunla doldurulmuş. Odada bir bardak su yok.",
   "sebep": "Ebe Döne Nine sesini alçaltıyor: “Kırk çıkmadan lohusa yalnız bırakılmaz, bunu bu köyde çocuklar bilir. Doğumun üçüncü akşamı Hatice’nin yeğeninin düğünü vardı, aşağı köyde. Herkes gitti. Sabaha kadar o evde ne lamba yandı ne bir ses çıktı. Dördüncü gün beni çağırdılar. Bana yemin ettirdi, sana söylemedim say.”"
  },
  "closed": {
   "iz": "Hatice Kadın odayı ertesi sabah kendi elleriyle yıkamış, yorganı dereye götürüp çitilemiş. Bakılacak bir şey bırakmamış.",
   "tanik": "O gece odada Emine’den başka kimse yokmuş. Bir de üç günlük bebek.",
   "zaman": "Kim ne zaman ne gördü, herkes başka gün söylüyor. Hatice Kadın’a sorunca çayını tazeliyor."
  },
  "gidisat": [
   "Ebe akşam bebeğin ağzına süt damlatamadı. Çocuk yutmayı bıraktı.",
   "Emine pencerenin önündeki kilimi indirin diye tutturuyor. Dereyi görmek istiyormuş.",
   "Yorganını sabah değiştirdiler. Öğlen yine ıslaktı."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Hatice Kadın’a sürgüyü sor",
   "text": "Hatice Kadın sürgüye bakmıyor, sana bakıyor. “Geçen bahar iki kere anasının evine kaçtı. Oğlum yokken bu evin kapısı sürülür.” Çayı koyuyor, eli titriyor, tabağa dökülüyor. “Sen de bir gün evlat sahibi olursan.” Cümlesini bitirmiyor."
  },
  "sir": {
   "q": "O gece kapıyı kim sürdü?",
   "right": "Hatice Kadın, düğüne gitmeden önce, dışarıdan",
   "wrong": [
    "Emine, korkusundan, içeriden",
    "Ebe Döne Nine, odaya kimse girmesin diye"
   ]
  },
  "sahne": "Emine’nin başucunda oturuyorsun. Kapıyı açık bıraktırdın, Hatice Kadın eşikte bir iskemlede sesini çıkarmıyor. Lamba kısık. Bir ara burnuna dere suyu geliyor. Kimse kıpırdamadan yorganın ucu ıslanmaya başlıyor. Beşiğin üstünden bir tutam sarı saç iniyor. Yukarı bakmıyorsun.",
  "kovma": "Yastığın altına makası sen koyuyorsun. Al bezi beşiğe Hatice Kadın bağlıyor, bağı iki kere çözülüyor, üçüncüde tutuyor. Saç, geldiği gibi çekiliyor. Dere kokusu önce odadan, sonra avludan gidiyor. Sabaha karşı Emine başını çevirip çocuğu istiyor.",
  "yanlis": "Üç gece başka bir şeyin yolunu bekledin. Dördüncü gün Hatice Kadın eğitmeni çağırdı. Fikret mektubu askere yazdı, sözü sözüne koydu. Bu sefer parmağını basamadı, elini tuttular.",
  "cevap": {
   "tam": "Kara Defter’in sahibine,\n\nKırk çıktı. Emine çocuğu kendi emziriyor. Adını Mahmut gelince koyacaklar.\n\nHatice Kadın geçen hafta yine düğüne gitti. Gelini de çocuğu da götürdü, bütün gün kucağından indirmedi. Sürgüyü söktürdü. Delikleri duruyor.\n\nBunları bana yazdırmadı. Kendim yazdım.\n\nEğitmen Fikret",
   "eksik": "Kara Defter’in sahibine,\n\nEmine ayağa kalktı, çocuk da iyi. Allah razı olsun. Hatice Kadın herkese gelininin kapıyı kendi üstüne sürdüğünü anlatıyor. Sürgü yerinde.\n\nEğitmen Fikret",
   "gec": "Emine’nin sol eli bir daha tutmadı. Çocuğu sağ koluyla alıyor."
  },
  "kenar": "Önce kapıya bak, sonra yatağa. Yıllarca tersini yaptım."
 },
 "definebekcisi": {
  "village": "Çukurhan",
  "chosen": {
   "kurban": "defineci",
   "iz": "mezar",
   "tanik": "golge",
   "zaman": "gece_yarisi",
   "yer": "harabe",
   "sebep": "define"
  },
  "open": [
   "kurban",
   "yer",
   "sebep"
  ],
  "letter": {
   "body": "Muhterem efendim,\n\nBen Çukurhan köyünde bakkal Şükrü. Hasan Usta’nın durumunu bildireyim.\n\nHasan dokuz gündür kazmayı elinden bırakamıyor. Bir parmağını açıyoruz, öbürü kapanıyor. Dili de tutuldu. Karısına bakıp ağzını açıyor, ses yok. Yemeğini karısı yediriyor.\n\nKöyde herkes bir şey söylüyor, siz onları dinlemeyin. Hasan’la aramda bir alacak verecek meselesi vardır, yanlış anlaşılmasın. Yol masrafınızı ben öderim.\n\nYalnız gündüz gelin. Geldiğinizde önce bana uğrayın, başkasıyla konuşmadan.",
   "sign": "Şükrü"
  },
  "clues": {
   "kurban": "Hasan Usta avlunun ortasında bir kütüğe oturmuş. Sağ eli kazmanın sapında, parmakları bembeyaz. Tırnaklarının içi toprak dolu, dokuz gündür yıkanıyor, çıkmıyor. Karısı adamın ağzına bir lokma ekmek koyarken “Kışın harabe kazar, yazın borç öder” diyor. “Üç sene önce de küp bulacaktı.” Hasan seni görünce kazmayı bir karış kaldırıp yıkık hanın olduğu tepeyi gösteriyor. Sonra aynı kazmayla bakkalın olduğu yanı.",
   "yer": "Köyün üstündeki yıkık han. Dört duvardan ikisi ayakta, avluyu diken basmış. Eski ahırın köşesinde yeni doldurulmuş toprak var, üstüne bir kapı tahtası atmışlar. Tahtanın altından bir kâğıt parçası çıkıyor. Kurşun kalemle yazılmış: “Ortaklık, yarı yarıya.” Altında bir imza, yanında bir parmak izi. İmzadaki Ş’nin kuyruğu uzun. Cebindeki mektubu çıkarıp yan yana tutuyorsun.",
   "sebep": "Ali Dede tütününü sarıyor: “O handa ne varsa sahibine kalmış. Sahibi öleli iki yüz sene oldu, ama orası sahipsiz değil. Şükrü’ye dedim, toprağın altındakine el uzatma. ‘Dede, devlet bile kazıyor’ dedi. Haritayı seyyardan on liraya aldı. Aynısından iki köy ötede de var. Kendi gitmedi, Hasan’a verdi kazmayı. Akıllıdır. Akıllıya dokunmuyor işte.”"
  },
  "closed": {
   "iz": "Şükrü Bakkal çukuru bir gecede doldurtmuş. “Çocuklar düşmesin” diyor. Köyde o tarafa giden çocuk yok.",
   "tanik": "O gece hana kim çıktı diye soruyorsun. Köyde kimse çıkmamış. Şükrü Bakkal da erken yatmış, bunu sormadan söylüyor.",
   "zaman": "Hasan söyleyemiyor. Karısına göre yatsıdan sonra çıktı, Şükrü’ye göre hiç çıkmadı."
  },
  "gidisat": [
   "Karısı sabah Hasan’ın sol elini de yumruk halinde buldu. Sağdaki gibi.",
   "Şükrü Bakkal’ın dükkânında ışık sabaha kadar yandı. Giren çıkan olmadı.",
   "Hasan yemeyi bıraktı. Başını tepeye çevirmiş oturuyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Şükrü Bakkal’a kâğıdı göster",
   "text": "Şükrü Bakkal kâğıda dokunmuyor. Terazinin kefesini siliyor, temiz olduğu halde. “O gece erken yattım” diyor. Sen bir şey sormadan bir daha söylüyor. Elindeki bez yere düşüyor, almıyor. Dükkânın arkasındaki çamurlu çizmeler kapı aralığından görünüyor. Kapıyı ayağıyla itip kapatıyor."
  },
  "sir": {
   "q": "Hasan’ı o çukura kim gönderdi?",
   "right": "Bakkal Şükrü, haritayı alıp kazmayı Hasan’a vererek",
   "wrong": [
    "Hasan’ın karısı, borçlar yüzünden",
    "Ali Dede, köyden uzaklaştırmak için"
   ]
  },
  "sahne": "Gece yarısı yıkık hana çıkıyorsun. Hasan’ın koluna girmişsin, kazma hâlâ elinde. Tahtayı kaldırıyorsun. Fenerin ağzından duman çıkıp sönüyor, gaz doluyken. Karanlıkta dolgu toprak kendi kendine çukura akıyor. Dizinin hizasından biri öksürüyor.",
  "kovma": "Tuzu çukurun dört yanına sen serpiyorsun. Öksürük köşeye çekiliyor. Kurşunu Hasan’ın başının üstünde suya döktürüyorsun, cızırdayıp donuyor. Parmaklar birer birer açılıyor, kazma yere düşüyor. Hasan dokuz gün sonra ilk sözünü söylüyor: “Şükrü niye kaçtı?”",
  "yanlis": "Getirdiklerin çukurun başında hiçbir işe yaramıyor. Fener sönüyor, bir daha yanmıyor. Hasan’ı aşağı indiriyorsun, kazması elinde. Sabah sol eli de sapa yapışmış. Şükrü Bakkal o gün kepengi açmıyor.",
  "cevap": {
   "tam": "Muhterem efendim,\n\nHasan iyidir. Dükkânın önünden geçerken bana bakmıyor. Borcunu sildim, almadı.\n\nO gece oradaydım. Bunu size söylemedim, siz de biliyorsunuz.\n\nGeçen gece dükkânın terazisi kendi kendine indi, kefede bir avuç kül vardı. Her gece iniyor. Tuzun hepsini eşiğe döktüm.\n\nŞükrü",
   "eksik": "Muhterem efendim,\n\nHasan iyidir. Köy bu işi Hasan’ın kendi hırsına veriyor. Ben de bir şey demedim.\n\nŞükrü",
   "gec": "Hasan’ın dili bir daha açılmadı. O gece ne gördüyse kendisiyle kaldı."
  },
  "kenar": "Gömülü küpün başında iki kişi vardır: kazan ile kazdıran. Bekçi ilkini tanır."
 }
};
