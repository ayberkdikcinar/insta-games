// Hand-written cases. Rules: HIKAYE_REHBERI.md; chosen/open come from tools/story-plan.json.
export default {
 "hortlak": {
  "village": "Söğütlü",
  "chosen": {
   "kurban": "yas_evi",
   "iz": "mezar",
   "tanik": "olu",
   "zaman": "kirk",
   "yer": "mezarlik",
   "sebep": "usulsuz_gomu"
  },
  "open": [
   "iz",
   "tanik",
   "sebep"
  ],
  "letter": {
   "body": "Kara Defter sahibi,\n\nBunu yazmak için üç akşam oturdum, ikisinde kâğıdı ocağa attım. Kusura bakmayın, yazım kötü.\n\nKocam Kâzım geçen ay öldü. Yolda kalbi durmuş, kardeşi Hamit getirdi, sabah olmadan toprağa verdik. Allah rahmet eylesin, iyi adamdı, kimse aksini söylemesin.\n\nEvde bir hal var. Oğlum İsmet dokuz yaşında, sabahları yorgun kalkıyor, kaşığı tutamıyor. Kayınvalidem de öyle. Ben de. Görseniz tanımazsınız.\n\nNeden diye sormayın, kâğıda yazamam. Yazsam bana deli derler, çocuğumu elimden alırlar. Yalnız şunu söyleyeyim: akşamları çayı iki bardak koyuyorum. Sebebi var.\n\nGelirseniz kapıyı vurmayın. Öksürün, ben anlarım.",
   "sign": "Kıymet"
  },
  "clues": {
   "iz": "Kıymet’in eşiğinde avuç avuç toprak var. Sabah süpürmüşler, ertesi sabah yine yığılmış. Avlunun toprağı sarı, bu kara ve yaş. Avlu kapısından eşiğe kadar yer eşilmiş, biri ayağını kaldırmadan yürümüş gibi. Toprağı parmağınla dağıtıyorsun, içinden kemik bir ceket düğmesi çıkıyor, ipi üstünde. Kıymet avucuna bakıp “Bir yerden düşmüştür” diyor. Kefen düğme taşımaz.",
   "tanik": "Hediye çeşmede çamaşır çitiliyor, seni görünce ellerini kuruluyor. “Kâzım’ı ben de gördüm. Öleli ay oldu, gözümle gördüm. Yolun ortasından yürüdü, ceketi sırtında, yakası toprak, sağ kaşındaki yarık olduğu gibi. Kapımın önünde durdu. Bana bakmadı, sonra kendi evine doğru gitti.” Sesini kısıyor. “Neden bizim evin önünde durur, onu Kıymet bilir.” Sabun elinden yere düşüyor.",
   "sebep": "Hamza Hoca otuz yıldır köyün ölüsünü yıkar. Tesbihini bırakıyor. “Kâzım’ı ben yıkamadım. Kimse yıkamadı. Bana sabah haber geldi, iş bitmişti: kefen yok, namaz yok, gün doğmadan fenerle kazılmış. Hamit’e sordum, ‘Yengem istedi’ dedi. Kıymet’e sordum, ‘Yüzü kötüydü’ dedi. Yolda kalbi duran adamın yüzü neden kötü olsun? Kefenini kendi eliyle almıştı, sandıkta duruyordu. Hâlâ orada.”"
  },
  "closed": {
   "kurban": "Kıymet evin iç kapısını açmıyor. Çocuğu görmek istiyorsun, ikindi vakti “Uyuyor” diyor.",
   "zaman": "Kaç gecedir diye soruyorsun. Evin takvimi ölüm gününde kalmış, Kıymet o yaprağı koparmamış, saymadım diyor.",
   "yer": "Köyün üst yanına giden patikayı Hamit dikenle kapatmış, üstüne kağnısını çekmiş. Çekmesini istiyorsun, tekerlek kırık diyor. Tekerlek sapasağlam."
  },
  "gidisat": [
   "İsmet bugün kaşığı ağzına götüremedi. Annesi yedirmeyi denedi, çocuk lokma ağzındayken uyudu.",
   "Hafize Nine yatağından kalkmıyor. Gece birisiyle konuştuğunu komşular duymuş, karşılık verenin sesini de.",
   "Kıymet artık kapıyı sürmüyor. Sabah eşikte toprak vardı, öğlen sedirin üstünde de bulundu."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Kıymet’e düğmeyi göster",
   "text": "Kıymet düğmeyi avucuna alıyor, kapatıyor. “Eksikti zaten, dikecektim.” Ocağa dönüyor. Bir süre sonra, sırtı sana dönük: “O gece ceketi üstünde değildi. Ben giydirdim. Karanlıkta, önce kollarını sokamadım.” Dönmeden devam ediyor. “Hamit’e sorma. Hamit fener tuttu, başka bir şey yapmadı.” Çayı koyuyor, iki bardak."
  },
  "sir": {
   "q": "Kâzım neden yıkanmadan, gece gömüldü?",
   "right": "Kıymet, Hediye’nin evinde öldüğü duyulmasın diye",
   "wrong": [
    "Hamit, kardeşinin tarlasına konmak için acele etti",
    "Hamza Hoca, parası ödenmeyince yıkamayı reddetti"
   ]
  },
  "sahne": "Gece kapıyı aralayıp arkasında bekliyorsun. Kıymet içeride, lamba kısık, iki bardak çay soğuyor. Her geceki saatte avlu kapısı açılıyor. Yerde ayak sürüyen bir ses. Eşikte duruyor, ceketin önü ilikli, düğmelerden biri yok. Kapıya üç kere vuruyor. Kıymet kalkıyor, sen bileğini tutuyorsun. Bilek buz gibi, sıcak olan senin elin.",
  "kovma": "Hamit saban demirini getiriyor, mezara sen çakıyorsun, toprak bir kere altından itiyor, sonra duruyor. Eşiğe tuzu Kıymet kendi döküyor, kapının bir ucundan öbürüne. Gece aynı saatte ayak sesi geliyor. Tuzun önünde kalıyor. Bir süre sonra geldiği yoldan dönüyor. Kıymet çayı dökmüyor.",
  "yanlis": "Eşiğe ne koyduysan ayak sesi üstünden geçiyor. Kıymet ayağa kalkıp ikinci bardağı uzatıyor. Sabah İsmet’i yatağında uyandıramıyorlar, nefes alıyor, o kadar. Eşikten sedire kadar kara toprak var. Kıymet süpürmüyor.",
  "cevap": {
   "tam": "Kara Defter sahibi,\n\nİsmet kalktı, okula gidiyor. Hoca mezarın başında eksik kalan duayı okudu.\n\nÇeşmede kadınların önünde söyledim: Kâzım Hediye’nin evinde öldü, ben kaldırdım, ben giydirdim. Artık bana selam vermiyorlar. Hediye’ye de vermiyorlar. Ona verilmemesine üzülmüyorum, bunu da yazayım.\n\nDüğmeyi sakladım, dikecek ceket kalmadı. Çayı hâlâ iki bardak koyuyorum. Bu sefer sebebi yok.",
   "eksik": "Kara Defter sahibi,\n\nİsmet kalktı. Köy, Kâzım’ı gece gömdüren Hamit’tir diye konuşuyor, tarlaya göz dikti diyorlar. Hamit yüzüme baktı, ağzını açmadı. Ben de açmadım.",
   "gec": "Hafize Nine o son gece kalkamadı; yıkadık, kefenledik, her şeyi usulünce yaptık."
  },
  "kenar": "Önce ölü yıkayana uğra. Kimi yıkamadığını o bilir, kefenleri de sayar."
 },
 "cadi": {
  "village": "Değirmendere",
  "chosen": {
   "kurban": "hayvan",
   "iz": "sut",
   "tanik": "kocakari",
   "zaman": "dolunay",
   "yer": "ahir",
   "sebep": "ovunmek"
  },
  "open": [
   "kurban",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Kara Defter’i tutan kimse, ona:\n\nAdım Kamile. Değirmendere’de dere yukarısındaki son ev benim. Yetmiş iki yaşındayım, bu yazıyı kendi elimle yazıyorum. Köyde benden başka okuyan üç kişi var, üçü de kapıma taş attı.\n\nKimin malına bir şey olsa bana yazılıyor. Çeşmeden su verilmiyor. Geçen ay çocuklar eteğimi kesti, analarına söyledim, analar güldü.\n\nÜç kış önce torunum Kerim öldü. Devletin buğdayı gelmişti, bana düşmedi, yazılı değilmişim. Nazire Ebe çocuğun ateşine baktı, çantasını kapattı, kapıda bir süre durdu.\n\nPerşembeye kadar vakit verdiler. Neden perşembe, gelince anlarsınız. Cuma sabahı bir zarar daha görülürse evim yakılacak.\n\nBana taktıkları adı buraya yazmam. Gelin, bakın, o adın bana uyup uymadığını siz söyleyin.",
   "sign": "Kamile"
  },
  "clues": {
   "kurban": "Hüsnü’nün ahırında on iki başlık yer var, üçünde hayvan duruyor. Ahırdaki hayvanların kalanı aylar içinde gitmiş, ineğin kaburgası sayılıyor, kalkarken dizi titriyor. Köşede üst üste boş çuvallar, üstlerinde Ofis damgası. Sayıyorsun, on bir tane. Bir haneye en çok üç çuval yazılırmış. Kapıda oynayan bir kız çocuğu arkandan “Kerim buğday istemeye buraya gelmişti” diyor, annesinin sesi duyulunca kaçıyor.",
   "zaman": "Muhtar Haydar zararları deftere yazıyor. Sayfa sayfa bakıyorsun, her zarar ayda bir, hep aynı sabaha düşüyor. Takvimin ay hanesiyle yan yana koyuyorsun: hepsi dolunayın ertesi sabahı. Bu perşembe yine ay dolu. Defterin arkasında üç kış öncesinin erzak listesi duruyor. “Kamile Kadın, üç çuval” satırının üstü çizilmiş. Yanına başka kalemle Hüsnü’nün adı yazılmış.",
   "yer": "Ahırları tek tek dolaşıyorsun. Zarar yalnız ahırın içinde kalmış, avludaki tavuğa, dışarıdaki koyuna bir şey olmamış. Kapılar sabah sürgülü bulunmuş. Zarar gören ahırların hepsi köyün tok evlerinin ahırı, tek inekli yoksul ahırlara uğranmamış. Kamile’nin ahırına bakıyorsun, boş. Tek ineğini köy geçen yıl “zararına karşılık” elinden alıp kesmiş, etini paylaşmış. Kapısında yedi taş çukuru var."
  },
  "closed": {
   "iz": "Hüsnü’nün karısı Hanife kovaları her sabah kendi eliyle dereye boşaltıp yıkıyor. Neyi döktüğünü sorunca kovayı arkasına alıyor.",
   "tanik": "Gördüğünü söyleyen yedi kişi var, yedisi de birbirinden dinlemiş. İlk söyleyen çocuğu babası yaylaya yollamış.",
   "sebep": "Hüsnü’ye Kamile’yle en son ne konuştuğunu soruyorsun, “Konuşmadım” diyor. Köy odasında herkes o gün onun ne dediğini biliyor, yabancıya söylemiyor."
  },
  "gidisat": [
   "Muhtarın ineği yemden kesildi. Haydar Muhtar, Kamile’nin kapısına bir yük odun yığdırdı, henüz yakmıyor.",
   "Hüsnü’nün üç başından biri daha gitti. Çocuklar Kamile’nin bacasına taş atıyor, içeriden ses çıkmıyor.",
   "Kapıdaki odun iki yük oldu, yanına bir teneke gaz kondu. Kamile akşam çıkıp odunun üstüne oturdu, örgüsünü ördü."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "Hüsnü’ye çuvalları sor",
   "text": "Hüsnü çuvalların üstüne oturuyor. “Ofisin çuvalı işte, her evde var.” Her evde yok. Sen bir şey demeden sürdürüyor: “Çocuk zaten cılızdı, kışı çıkaramazdı.” Ahırın kapısını kapatıyor, sürgüyü sertçe vuruyor. “Sen bana o kadını sor. Çuvalı bırak. On iki başımın hesabını kim verecek?”"
  },
  "sir": {
   "q": "Kamile’nin buğday payı nereye gitti?",
   "right": "Muhtar adını çizdi, payı Hüsnü’nün ambarına girdi",
   "wrong": [
    "Haydar adını çizdi, payı kendi ambarına kaldırdı",
    "Ofis listeyi eksik yolladı, adı hiç yazılmadı"
   ]
  },
  "sahne": "Perşembe gecesi Hüsnü’nün ahırındasın. Ay küçük pencereden samana düşüyor. Kalan inekler ayağa kalkmış, duvara sokuluyor. Kapı sürgülü. Yemliğin ucunda kara bir kedi oturuyor, oraya nereden geldiğini görmedin. Memeye gidiyor, durup sana bakıyor. Gözleri yaşlı bir kadının gözleri, kapıya gelen misafiri karşılar gibi sakin.",
  "kovma": "Hanife kazanı suyla dolduruyor, kurşunu sen döküyorsun. Cızırdıyor, çatlıyor, dibe iki büklüm bir şekil oturuyor, yanına çok küçük bir şekil daha. Hanife ona bakmıyor. Hüsnü süpürgeyi ahır kapısının arkasına ters dikiyor, eli iki kere kayıyor. Kedi kapıya gidiyor, süpürgeye bakıp dönüyor. Pencereden çıkıyor.",
  "yanlis": "Ahıra kurduğun düzen o gece kimseyi korumuyor. Ay doluyken Hüsnü’nün son ineği yere çöküyor. Sabah köy odunu tutuşturuyor, ev yanıyor, içinde kimse bulunmuyor. Kamile’yi bir daha gören olmuyor. Bir ay sonra komşu köyden bir mektup geliyor, ahırlarından söz ediyor.",
  "cevap": {
   "tam": "Kara Defter’i tutan kimse, ona:\n\nBuğday defterini jandarma götürdü, Haydar muhtarlıktan düştü. Kerim’in mezarına her sabah biri bir tas bulgur bırakıyor, kim olduğunu biliyorum. O evin ahırına uğramıyorum.\n\nBana taktıkları adın uyup uymadığını yazmadınız. Kurşunu görmüşsünüz, demek ki yazmanız gerekmiyor. O adı bana Kerim ölmeden önce taktılar, o vakit uymuyordu.\n\nSüpürge kapılarda duruyor. Ben sabırlıyım. Bir şey sormayı unutmuşum: sizin evde hayvan var mı?",
   "eksik": "Kara Defter’i tutan kimse, ona:\n\nHayvanlar düzeldi, evim yanmadı. Çocuğun ölümü benim hesabıma yazıldı, buğdayı soran olmadı. Haydar hâlâ muhtar. Hüsnü’nün ambarı dolu. Ben de yerimdeyim, ay da yerinde.",
   "gec": "Hüsnü’nün kalan başları da gitti; karısı geçen gün kapıma bir tas için geldi."
  },
  "kenar": "O çocuğun ateşine baktım, çantamı kapattım. Buğdayı sormak aklıma gelmedi."
 },
 "peri": {
  "village": "Sarıçiçek",
  "chosen": {
   "kurban": "delikanli",
   "iz": "halka",
   "tanik": "guzel",
   "zaman": "bahar",
   "yer": "su",
   "sebep": "izinsiz"
  },
  "open": [
   "kurban",
   "tanik",
   "yer"
  ],
  "letter": {
   "body": "Saygıdeğer Kara Defter sahibine,\n\nBen Kiraz, Sarıçiçek’ten. Köyde eğitmen kursuna giden tek kız benim, yazıyı o yüzden ben yazıyorum, babam bilmiyor.\n\nNişanlım İdris on gün önce bir sabah eve geldi, yüzüme baktı, “Sen kimin kızısın” dedi. Anasını tanıyor, öküzünü tanıyor, beni tanımıyor. Yemeğini yiyor, oturuyor, gülümsüyor. Geceleri kapıya yürüyor, iki kişi zor tutuyor.\n\nKöy Havva’yı suçluyor. Havva o gece evinden çıkmadı, ben bilirim. Nereden bildiğimi sormayın.\n\nDüğünümüz güzün olacaktı, çeyizim sandıkta. Kardeşim İlyas da son günlerde geç geliyor. Soruyorum, gülüyor. İdris’le aynı gülüş.\n\nİdris beni bir daha tanısın, başka bir şey istemiyorum.",
   "sign": "Kiraz"
  },
  "clues": {
   "kurban": "İdris avlunun duvarına yaslanmış, ağzının kenarında bir gülümseme öyle kalmış. Ne sorsan “Su” diyor. Anası parmağıyla sayıyor: “Çoban Halis geçen ay. Muhtarın yeğeni ondan önce. Hepsi evlenmemiş delikanlı. Evli adamlar aynı yerden geçiyor, kılına dokunulmuyor. Bekâr oğlu olan analar geceleri kapıyı kilitliyor.” Sonra ekliyor: “O gece çıkarken yüzünü yıkadı, gömleğini değiştirdi. Bir kız çağırmış gibi.”",
   "tanik": "Havva’yı babası eve kapatmış, kapıyı ancak sana açıyor. Yanağında sararmış bir morluk var. “Ben gördüm o kadını. Bir gün ezandan önce çamaşıra inmiştim. Karşı yakada oturuyordu. Yüzünü anlatamam, öyle güzeldi ki bakınca gözüm yaşardı, kız başımla bakakaldım.” Sonra alçak sesle: “Babam bir kâğıt gösterdi, adın yazıyor dedi, sonra dereye fırlattı. Elime aldığımda ters tutmuşum. Okumam yok ki.”",
   "yer": "Köyün altında dere bir dönemeç yapıyor, söğütler suya eğilmiş. Çakılların arasından ıslanıp kurumuş bir pusula çıkıyor, kursta dağıtılan çizgili kâğıttan. Okunuyor: “Dere başına gel, kimse duymasın. Havva.” Söğütlerin arkasında, adamların uğramadığı kuytuda küçük bir ayak izi var, kadın izi, uzun süre aynı yerde durmuş."
  },
  "closed": {
   "iz": "Havva’nın babası o sabah adamlarıyla dere boyuna inmiş, çimeni baştan başa çiğnemişler. Nasıl yattığına bakan olmamış.",
   "zaman": "Mektupta on gün yazan Kiraz şimdi dokuz diyor, sonra on bir. Erikler açtığından beri kimse gün saymamış.",
   "sebep": "İdris’e o gece ne yaptığını soruyorsun. Sana gülümsüyor, su istiyor."
  },
  "gidisat": [
   "İlyas gece kalkıp çıktı, sabah ıslak döndü. Kiraz adını sordu, biraz düşündükten sonra söyledi.",
   "Havva’nın babası kızı dağ köyüne vermek için haber saldı. Havva’nın penceresine tahta çakıldı.",
   "İdris gece iki kişinin elinden kurtuldu, dere yolunda yakalandı. İlyas gülümsüyor, annesi hangi yana dönse o gülüşle karşılaşıyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Kiraz’a pusulayı göster",
   "text": "Kiraz pusulaya dokunmuyor. “Islanmış, okunmaz” diyor. Okunuyor. Çeyiz sandığını açıyor, kapatıyor, içinden bir şey almıyor. “Bir insanı bir kere sınamak isteseniz. Yalnız bir gece. Gitmez diye.” Cümlesini orada bırakıyor. Sonra pencereye dönüp İlyas’ın nerede olduğunu soruyor, odada ona cevap verecek kimse yokken."
  },
  "sir": {
   "q": "İdris’i o gece dereye kim çağırdı?",
   "right": "Kiraz, Havva’nın adına pusula yazarak",
   "wrong": [
    "Havva, gizlice sözleşip dereye inerek",
    "İlyas, eniştesiyle alay etmek için"
   ]
  },
  "sahne": "Söğütlerin altında bekliyorsun. Suyun üstünden def sesi geliyor, türkünün tek kelimesini seçemiyorsun. Bir el çırpılıyor, sonra kalabalık bir el çırpması. Karşı yakaya bakıyorsun, kimse yok. Çimen kendiliğinden yatıyor, halka gibi. İdris’i iki kolundan tutuyorlar. İlyas gülerek suya giriyor, diz boyu.",
  "kovma": "Kiraz suyun önünde duruyor, “Destur” diyor, sesi iki kere kırılıyor, üçüncüde çıkıyor. Çeyizinden çözdüğü al kurdeleyi İlyas’ın bileğine sen bağlıyorsun, ikinci parçayı İdris’inkine. Def susuyor. İdris başını kaldırıyor, Kiraz’a uzun uzun bakıyor. “Kiraz” diyor, soran bir sesle.",
  "yanlis": "Yaptığın hiçbir şey def sesini aksatmıyor. İlyas suya girince el çırpma susuyor, sonra yeniden başlıyor, daha kalabalık. Sabah onu dere başında buluyorlar, oturuyor, gülümsüyor. Kiraz karşısına geçiyor, adını söylüyor. Bir daha söylüyor. Çeyiz sandığını o gün kilitliyor.",
  "cevap": {
   "tam": "Saygıdeğer Kara Defter sahibine,\n\nİdris adımı öğrendi, bazı sabahlar ikinci söyleyişte tutuyor. İlyas evde.\n\nHavva’nın babasına pusulayı ben yazdım dedim. Kızı dağ köyüne vermekten vazgeçti. Bana da helal etmedi.\n\nİdris’e her şeyi anlattım. Sınamak için çağırdığımı, geldiğini, söğütlerin arkasından baktığımı. Dinledi, elimi tuttu. Ertesi sabah unuttu. Yine anlattım.\n\nBugün yine söyledim. Yine affetti.",
   "eksik": "Saygıdeğer Kara Defter sahibine,\n\nİdris adımı öğrendi, İlyas evde. Düğün güzün. Havva’yı babası dağ köyüne verdi, düğünsüz, bir sabah katırla götürdüler. Havva’nın okumadığını kimse hatırlamadı. Ben hatırlatmadım.",
   "gec": "İlyas’ın bileğine kurdeleyi geç bağladık; anamızın adını artık söyleyemiyor."
  },
  "kenar": "Sabiha’nın saçına al kurdeleyi ben bağlardım. Bir yaz bağlamadım."
 },
 "bakirtirnak": {
  "village": "Aşağı Çiftlik",
  "chosen": {
   "kurban": "yolcu",
   "iz": "kan",
   "tanik": "guzel",
   "zaman": "aksam",
   "yer": "yol",
   "sebep": "yabanci"
  },
  "open": [
   "iz",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Aşağı Çiftlik İstasyonu. Şef İhsan’dan, Kara Defter sahibine.\n\nTelgraf kayda geçer. Mektup yazıyorum.\n\nÜç kişi öldü. Bir ayda. Üçü de bilet defterimden geçti. Tutanaklar jandarmada.\n\nİdare sorarsa istasyon sorumlu değildir. Bekleme salonu son katardan sonra kapanır. Talimat öyledir. Gaz tahsisatı az geliyor. İdareye yazdım.\n\nOğlum Kadri askerden dönüyor. Cuma katarında. Telgraf çekip gelme diyebilirim. Çekmedim. Sebebi bende kalsın.\n\nCumaya üç gün var. Gelirseniz peronda oyalanmayın. Doğrudan bana gelin. Makasçıyla konuşmayın. Cevabı istasyon adresine yazmayın.",
   "sign": "Şef İhsan"
  },
  "clues": {
   "iz": "Yol kenarındaki taşın dibinde kan kurumuş. Jandarma üstüne toprak atmış, çizmenle açıyorsun: kalın, kara, yola doğru sızmış. Biraz ileride yine kan, daha ileride yine. Üç ölü, üç leke. Çalıya takılı bir bavul kapağı buluyorsun, astarına bir bilet sıkışmış. Arkasına kurşun kalemle yazılmış: “Hanım, salon kilitli, sabahlayacak yer yok. Yürüyorum, sabaha evdeyim.” Evine varmamış.",
   "zaman": "Makasçı Hilmi katar cetvelini gösteriyor. “Son katar akşam ezanına doğru iner. Üçü de ondan indi, ortalık kararırken yola düştü. Sabah trenini bekleyene bir şey olmadı. Bekleyecek yer de vardı eskiden, salonda lamba sabaha kadar yanardı. Geçen güzden beri kilit. Şef Bey talimat diyor. Talimatı ben de okudum, öyle bir şey yazmıyor. Benden duydunuz demeyin.”",
   "yer": "İstasyondan köye iki saatlik ıssız yol. Bir ev yok, bir çeşme yok. Yarı yolda eski yol bekçisinin kulübesi duruyor, kapısında kilit yok. Köşeye dört gaz tenekesi dizilmiş, üstlerinde demiryolu damgası, ikisi hâlâ dolu. Yerde taze tekerlek izi. Kağnıcı İzzet’in köy bakkalına gaz taşıdığını herkes bilir. Gazın nereden geldiğini soran olmamış."
  },
  "closed": {
   "kurban": "Ölenlerin adlarını soruyorsun. Bilet defterinin o sayfaları idareye gönderilmiş, İhsan Efendi makbuzunu gösteremiyor.",
   "tanik": "Üçüncü ölüyü son gören çoban ifadesini verdikten sonra yaylaya yollanmış. Yol harçlığını İhsan Efendi cebinden vermiş, bunu bir sadaka gibi anlatıyor.",
   "sebep": "Ölenler yolda kimin yanına uğradı diye soruyorsun. Köyde artık kimse yabancı adını ağzına almıyor, kapılar erken sürülüyor."
  },
  "gidisat": [
   "Akşam katarından bir seyyar satıcı indi, salon kilitliydi, yola düştü. Sabah köye varmadı.",
   "Satıcının küfesini buldular. İğneler, boncuklar yola saçılmış, ortada kurumuş kan.",
   "Perşembe akşamı İhsan Efendi telgraf masasına oturdu, kalktı, oturdu. Tek harf çekmedi."
  ],
  "yuzlesme": {
   "after": "zaman",
   "ask": "İhsan Efendi’ye salonun kilidini sor",
   "text": "İhsan Efendi anahtarı cebinden çıkarıyor, masaya koyuyor, geri alıyor. “Talimat.” Hangi talimat diye soruyorsun. Çekmeceyi açıyor, kâğıt yok. “Müfettiş gelir, gaz sayılır. Lamba bütün gece yanarsa sayılır.” Duruyor. “Kadri’ye telgraf çeksem sebep hanesini ben dolduracağım. Ne yazayım?” Anahtarı yine cebine koyuyor."
  },
  "sir": {
   "q": "İhsan Efendi salonu neden kilitliyor?",
   "right": "İdarenin gazını gizlice satıyor, lamba yanmasın diye",
   "wrong": [
    "İdare yabancıların salonda kalmasını yasakladı diye",
    "Kadri’nin gönderdiği parayı orada saklıyor diye"
   ]
  },
  "sahne": "Cuma akşamı son katar gidiyor, sesi kesiliyor. Kadri “Anam bekler” deyip bavulunu alıyor, yola düşüyor, sen arkasındasın. Işık çekilirken yol kenarındaki taşın üstünde bir kadın oturuyor. Yüzüne bakınca nereye gittiğini unutuyorsun. “Yorgunsun” diyor Kadri’ye, “gel, dinlen.” Elleri yenlerinin içinde. Kadri duruyor, bavulu yere bırakıyor.",
  "kovma": "Ray çivisini Kadri’nin avucuna sen sıkıştırıyorsun. Arkadan İhsan Efendi koşarak geliyor, ilk kez peronu bırakmış, koltuğunda salonun duvarından söktüğü ayna. Titreyen elle kadına çeviriyor. Yenlerden uzun, yeşile çalan bir şey çıkıyor. Bağırışı yol boyunca gidip geliyor. Taşın üstünde bir avuç pas kalıyor.",
  "yanlis": "Seslendiğini Kadri duymuyor. Taşın yanına oturuyor, bavulunu dizine çekiyor. Sabah İhsan Efendi cebinde anahtarla yola çıkıyor, yürüyerek, ilk kez. Yol kenarında bir asker ceketi buluyor. Üstünde uzun, yeşil çizikler.",
  "cevap": {
   "tam": "Aşağı Çiftlik İstasyonu. Şef İhsan’dan.\n\nSalon açık. Lamba sabaha kadar yanar. Gaz kendi maaşımdan.\n\nÜç ölünün adı deftere geçti. Bavul kapağındaki bileti karısına postaladım. Cevap gelmedi.\n\nİstifa verdim. Kabul edilmedi. Yerime adam yokmuş.\n\nKadri geceleri salona gelir, oturur. Konuşmuyoruz.\n\nAnahtar hâlâ cebimde. Kapıyı kilitlemeyeli haftalar oldu. Atamıyorum.",
   "eksik": "Aşağı Çiftlik İstasyonu. Şef İhsan’dan.\n\nYol temiz. Kadri evde. Müfettiş geldi. Salon meselesi makasçı Hilmi’ye yazıldı. Hilmi’nin işine son verildi. Evrakı ben imzaladım. Salon yine kilitli.",
   "gec": "Kadri’nin göğsündeki çizik kapanmadı, gömleğini yeşile boyuyor."
  },
  "kenar": "Yol kenarında oturan kadının yüzünü sayma, ellerini say. Yen uzunsa yürü."
 },
 "agaciyesi": {
  "village": "Kocapınar",
  "chosen": {
   "kurban": "ciftci",
   "iz": "kuru",
   "tanik": "gorunmez",
   "zaman": "ogle",
   "yer": "agac",
   "sebep": "agac_kesmek"
  },
  "open": [
   "kurban",
   "tanik",
   "zaman"
  ],
  "letter": {
   "body": "Efendim,\n\nHurşit’im. Kocapınar’da kimin ne kadar toprağı olduğunu sorarsanız önce bana sorarlar. Size mektup yazmam için oğlum ısrar etti, benim inandığım bir şey yoktur.\n\nAdamlarımdan birkaçının kolu tutmaz olmuş, köylü bunu bana yüklüyor. Mülkümde yaptırdığım bir iş vardır, tapusu elimdedir, kimseye hesap vermem. Güzün kadastro heyeti geliyor, işlerimi ona göre düzene koyuyorum. Gerisi cahil sözüdür.\n\nYine de gelip bakmanızı isterim. Bakın ve yazın: Hurşit Ağa’nın bu işte kabahati yoktur. Mühürleyin. Bedelini söyleyin, öderim.\n\nOğlum Kemal’i konuşturmayın. Çocuk hâlâ hasta sayılır, ne dediğini bilmez.",
   "sign": "Hurşit"
  },
  "clues": {
   "kurban": "Halil sedirde oturuyor, ağzının sağ yanı aşağı inmiş, sağ kolu dizinin üstünde başkasının koluymuş gibi duruyor. Karısı Kezban sayıyor: “Biçerken Halil. Harmanda Hüseyin. Tarlada çapa yaparken Ağa’nın ırgatı. Tarlaya inen düşüyor, evde oturanın kılına zarar gelmedi.” Sesini alçaltıyor. “Bizim pay merayla sınır. Bahardan beri sınırın nereden geçtiğini kimse bilmiyor.”",
   "tanik": "Haşim, Halil’in bir adım ötesinde biçiyormuş. “Yanındaydım. Hiçbir şey yoktu, toz bile kalkmadı. Tırpan havada durdu, düştü, ağzı aynı anda kaydı. Kim vurdu diye döndüm, tarlada ikimizden başka kimse yok. Görünen bir şey olmadı, ama bir şey oldu.” Elini ağzına götürüp indiriyor. “Eskiden sınırı işaretten gösterirdik. O işareti tarif edebilecek son adam Halil’di.”",
   "zaman": "İsa Dede güneşe bakıyor, gölgesini gösteriyor, ayağının dibinde. “Üçü de öğle sıcağında oldu, güneş tepedeyken. Sabah çalışana, akşam çalışana bir şey olmuyor. Ortakçılar öğlen orağı bırakıyor, Ağa yevmiyeyi kesiyor.” Bastonunu yere vuruyor. “Kadastro memuru gelince meranın sınırı nereden geçer diye soracak. Babam bana gösterdi, ben oğluma gösterdim. Şimdi gösterecek bir şey kalmadı.”"
  },
  "closed": {
   "iz": "Halil’in ekinine bakmak istiyorsun. Ağa’nın adamları tarlayı bir gecede sürüp altüst etmiş, önceki halini gösterecek sap bırakmamış.",
   "yer": "Mera tarafındaki yamaca gitmek istiyorsun. Yolun başında Ağa’nın bekçisi duruyor, tüfeği omzunda, “Mülktür” diyor.",
   "sebep": "Kemal’le konuşmak istiyorsun, Ağa kapıyı kendi eliyle kapatıyor. Kapı kapanırken delikanlının avucunu görüyorsun, bir ağa oğluna yakışmayan yeni bir nasır."
  },
  "gidisat": [
   "Kezban kocasını kaldırmak istedi, Halil’in bacakları da tutmuyor. Ağa’nın kâhyası gelip payını kesti.",
   "Öğleyin bir ırgat daha düştü, bu sefer Ağa’nın kendi harmanında. Harmana inen kalmadı.",
   "Kemal öğlen tarlaya inip Halil’in işini görmeye kalktı. Sol kolu omzundan aşağı düştü. Hurşit Ağa kapıyı kilitleyip hekim aratıyor."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "Hurşit Ağa’ya sınırı sor",
   "text": "Hurşit Ağa tapuyu masaya seriyor, parmağını bir çizgide gezdiriyor. “İşte sınır.” Çizgi öbürlerinden yeni, mürekkebi koyu. “Tapu tapudur, köylünün lafı laftır.” Kemal’in odasının kapısına bakıyor, bakışını çekiyor. “Benim oğlum benim dediğimi yapar. Yaptı da.” Tütün sarmaya kalkıyor, kâğıt parmağında yırtılıyor."
  },
  "sir": {
   "q": "Hurşit Ağa, kadastrodan önce neyi sildirdi?",
   "right": "Mera sınırını, tapusunu köy payına uzatmak için",
   "wrong": [
    "Ortakçı defterini, payları eksik göstermek için",
    "Kemal’in adını, mirastan düşsün diye"
   ]
  },
  "sahne": "Öğle sıcağında kütüğün yanındasın. Kesik yeni, odunun yüzü hâlâ yaş, damla damla sızıyor. Hava durmuş, yamaçta tek bir otu oynatan yok. Başının üstünde yaprak sesi başlıyor, çok yaprak, uzun uzun. Bakıyorsun, gök var, dal yok. Ensene bir gölge iniyor, buz gibi. Hurşit Ağa gömleğinin yakasını iliklemeye kalkıyor, parmakları düğmeyi bulamıyor.",
  "kovma": "Somunu Ağa’nın ambarından sen getiriyorsun, yağ kâsesini Kezban tutuyor. Hurşit Ağa kütüğün yanına geliyor, ağır ağır diz çöküyor, “Destur” diyor, ağzından zor çıkıyor. “Bu ağaç benim değilmiş.” Testiyi dibine kendi döküyor. Yaprak sesi çekiliyor. Akşama Halil’in parmağı oynuyor, haberini Kezban getiriyor.",
  "yanlis": "Getirdiğini kütüğün yanına bırakıyorsun, gölge yine iniyor, yaprak sesi sürüyor. Hurşit Ağa “Sıcak” deyip hekim çağırtıyor. Hekim Halil’in kolunu tutup bırakıyor. Harman o yıl kalkmıyor. Kadastro heyeti sınırı Ağa’nın gösterdiği yerden çiziyor.",
  "cevap": {
   "tam": "Efendim,\n\nKemal yatağından kalktı. Halil ve öbürleri işe döndü. Bunun sizinle ilgisi yoktur, sıcak geçti.\n\nKadastro heyetine mera sınırını eski yerinden gösterdim. Kendi isteğimle. Kimse beni zorlamadı.\n\nCuma günleri yamaca bir somun gönderiyorum, adamlarımın ekmek parası olsun diye.\n\nKütük sürgün vermiş. Hayvan girmesin diye etrafına çit çektirdim. Malımdır.",
   "eksik": "Efendim,\n\nSıcak geçti, adamlar işe döndü. Kadastro sınırı tapuma göre yazdı. Halil’in kalan payı benim toprağımda kaldı, kiraya bağladım. Köylü sesini kesti. Yazdığım gibi, kabahatim yoktur.",
   "gec": "Kemal’in sol kolu açılmadı, çifti tek eliyle sürüyor."
  },
  "kenar": "Ulu ağacın dibinde sesini alçalt. Tapu memuru alçaltmaz, onu da gördüm."
 },
 "evyilani": {
  "village": "Salkımlı",
  "chosen": {
   "kurban": "hane",
   "iz": "deri",
   "tanik": "yilan",
   "zaman": "ogle",
   "yer": "ocak",
   "sebep": "kiymak"
  },
  "open": [
   "kurban",
   "iz",
   "tanik"
  ],
  "letter": {
   "body": "Sayın Defter Sahibi,\n\nBu kâğıdı okul defterimden yırttım, öğretmenim kızacak. Adım Kadriye. On yaşındayım. Salkımlı’da kuyunun yanındaki evdeyiz.\n\nBizim evde her şey eksiliyor. Ambar boşaldı. Ekmek kabarmıyor. Annemin bilezikleri de kayboldu, Hacer abla çaldı dediler. Hacer abla bizim beslememiz, on üç yaşında, cumartesi köyüne geri yollanacak. Köyünde kimsesi yok.\n\nHacer çalmadı. Ben biliyorum ama annem evin içi dışarı taşmaz dedi. Nazire Ebe beni doğurtmuş, annem anlatır, göbeğimi keserken hiç konuşmamış. Siz de konuşmazsınız diye size yazıyorum.\n\nBabam pazarları kasabaya gidiyor. Dönünce bana şeker getiriyor. Şekeri yemiyorum, yastığımın altına koyuyorum.\n\nCumartesiden önce gelin.",
   "sign": "Kadriye, üçüncü sınıf"
  },
  "clues": {
   "kurban": "Halime hamuru tekneye vuruyor, üç gündür aynı hamur, kabarmıyor. Büyük oğlan çiftten elini kolunu sallayarak dönmüş, ortağı payını vermemiş. Kadriye’nin ayakkabısı delik. Hacer’in tası yarım. Bütün ev halkının payına bir eksiklik düşmüş. Bakkal İbrahim defterini açıyor: “Hayri’nin on altı lira borcu vardı, geçen ay nakit kapattı.” Ambarı boş ev on altı lirayı nereden bulur, o da sormamış.",
   "iz": "Halime yüklüğün dibinden bir bohça çıkarıyor. İçinde kâğıt gibi hafif, pul pul yılan gömlekleri var, üst üste, on yıllık. “Rahmetli kaynanam saklardı, her yaz bir tane çıkar, atılmaz.” Bu yazınki yok. Bohçanın astarına bir kâğıt sıkışmış: kasabalı kuyumcunun pusulası. “İki burma bilezik alındı, otuz lira.” Üstünde ad yok. “Bu bohçaya evde kimse el sürmez” diyor Halime. “Kadriye korkar, Hacer’i yaklaştırmam.”",
   "tanik": "Hacer bohçasıyla kapı önünde oturuyor, gözü yerde. “Yılanı ben gördüm. Üç senedir görürüm. Ev halkı görmez, ben eşikte yattığım için bana görünür. Kara, parlak, yavaş geçer. Bana bakar, giderdi. Bu yaz görmedim.” Bohçasını düzeltiyor. “Bileziklere gelince, bir pazar sabahı yüklüğün önünde birini gördüm. Söylemedim, bir beslemeyi kim dinler.”"
  },
  "closed": {
   "zaman": "En son ne vakit görüldüğünü soruyorsun. Ev halkı o saatlerde tarlada olurmuş, ev boş kalırmış, saatini tutan yok.",
   "yer": "Ocağın önüne yeni taş döşenmiş, sıvası yaş. Hayri Efendi kaldırmana izin vermiyor.",
   "sebep": "Ocak duvarında bir küreğin sap izi var, kürek yok. Hayri Efendi sapını değiştireceğim diye kasabaya götürmüş, getirmemiş."
  },
  "gidisat": [
   "Halime teknedeki hamuru üçüncü kez döktü. Bakkal İbrahim bu sabah veresiye defterini kapattı.",
   "Büyük oğlanın öküzü yere yattı, kalkmadı. Hayri Efendi bu hafta kasabaya bir kez daha gitti.",
   "Cumartesi geldi. Hacer’i kağnıya koydular. Kadriye kağnının peşinden yolun başına kadar koştu, sonra durdu, bağırmadı."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Pusulayı ev halkına göster",
   "text": "Pusulayı sofranın üstüne koyuyorsun. Halime okuyamıyor, kocasına uzatıyor. Hayri Efendi kâğıdı ocağa atmak istiyor, ocak sönük. Katlayıp cebine koyuyor. “Hacer o bohçayı kurcalardı. Hırsızlık onda huydur.” Kapıda Kadriye duruyor, babasına bakıyor. Hayri Efendi cebinden şeker çıkarıp uzatıyor. Kadriye elini arkasına saklıyor. Adam şekeri geri koyuyor, eli cebinde kalıyor."
  },
  "sir": {
   "q": "Halime’nin bileziklerini kim aldı?",
   "right": "Hayri, borcunu kapatmak için gizlice satarak",
   "wrong": [
    "Hacer, bohçasına saklayıp götürmek için",
    "Büyük oğlan, ortağın açığını kapatmak için satarak"
   ]
  },
  "sahne": "Öğle sıcağı, ev halkı tarlada. Ocak taşının dibinde oturuyorsun, sıvanın üstünde bir çatlak var. Kadriye yanında, dizlerini karnına çekmiş, parmağını ağzına koyuyor. Çatlaktan önce kara, ince bir baş çıkıyor, sonra uzun uzun gövde. Başı duvara, küreğin durduğu yere dönüyor. Orada duruyor. Sen de duruyorsun.",
  "kovma": "Öğleye kadar ev halkı susuyor, adını kimse ağzına almıyor. Hayri Efendi bir şey söylemeye davranınca Halime ağzını eliyle kapatıyor. Kadriye saçındaki al kurdeleyi çözüp eşikten ocağa doğru seriyor. Yılan eşikte duruyor, başını kurdeleye koyuyor, üstünden geçiyor, ocak taşının altına giriyor. Teknede hamur kıpırdıyor. Kimse bunu söylemiyor.",
  "yanlis": "Eve sorup soruşturarak giriyorsun, adını anıyorsun. Öğle vakti çatlak kapanıyor, bir daha açılmıyor. O yaz ambar dolmuyor. Hayri Efendi tarlayı satıyor, Kadriye okulu bırakıyor. Bohça yüklükte duruyor, içine yeni gömlek girmiyor.",
  "cevap": {
   "tam": "Sayın Defter Sahibi,\n\nAmbar doldu, ekmek kabarıyor. Adını yazmıyorum, biliyorsunuz.\n\nBabam ocak taşını kazarken küreği neye vurduğunu anneme söyledi, bilezikleri de. Annem iki gün konuşmadı. Hacer ablayı almaya gittik. Köyünde kimsesi yok ya, oradan da gitmiş. Kimin yanına gittiğini bilen çıkmadı.\n\nÖğretmenimiz evde kaç kişi olduğunu yazdırdı. Beş yazdım. Dört kişiyiz ama silmedim.\n\nKadriye",
   "eksik": "Sayın Defter Sahibi,\n\nAmbar doldu, ekmek kabarıyor. Hacer abla gitti, bilezikleri o çaldı diyorlar. Babam bana şeker getirmeye devam ediyor. Yastığımın altı doldu, annem kokusunu sordu.\n\nKadriye",
   "gec": "Büyük abimin öküzü kalkmadı, abim artık başkasının tarlasında çalışıyor."
  },
  "kenar": "Bohçaya bakarım. Gömlek çoksa ev eskidir. Yenisi yoksa kim ne yaptı diye sormam, beklerim."
 },
 "abasi": {
  "village": "Yenice",
  "chosen": {
   "kurban": "yolcu",
   "iz": "kan",
   "tanik": "tek_goz",
   "zaman": "aysiz",
   "yer": "orman",
   "sebep": "yalniz_yol"
  },
  "open": [
   "kurban",
   "zaman",
   "sebep"
  ],
  "letter": {
   "body": "Muhterem Kara Defter sahibine,\n\nYenice hanından yazıyorum. Malım: yedi top pazen, iki heybe iğne iplik, bir katır. Çırağım Hıdır, on altı yaşında. Anasından aldım, teslim ederim dedim.\n\nHıdır burada yatağa düştü. Rengi balmumu, yediği yaramıyor, bir haftada iki yıl yaşlandı. Hancının karısı da dün yorgun kalktı. Hekim yok, Hakkı Usta paramı alıp susuyor.\n\nBir mesele daha var, onu yazmıyorum. Kesem yitmişti, bulundu, mesele yoktur.\n\nNazire Ebe’ye bir güz bu handa iğne sattım, üstünü almadı, sende kalsın lazım olur dedi. Nedense aklıma düştü.\n\nHıdır’ın anasına yazmam lazım. Ne yazacağımı siz söyleyin. Han ücreti gün başınadır, çabuk gelin.",
   "sign": "Tüccar Kasım"
  },
  "clues": {
   "kurban": "Hakkı Usta han defterini açıyor. Geçen ay gece yola düşenlerden postacı dönmemiş, kantarcı köyüne varıp yatağa düşmüş. Gündüz geçen kafilelerin bir tanesine bir şey olmamış. Gece yolcularının üçüncüsü Hıdır: içerideki yatakta, dört yorgan altında üşüyor, gözü kapıda. Yanına eğiliyorsun. Dudakları tek bir şey söylüyor, durup yine başlıyor: “Bulamadım usta.”",
   "zaman": "Hamide Kadın duvarın kirecine çentik atmış. “Üçü de ay doğmayan geceler. Zifiri karanlık, elini görmezsin. Ay olan gece aynı yoldan geçen sağ salim geldi.” Öksürüyor, elini ağzına kapatıyor. “O gece Kasım Efendi avluda kesem diye bağırıyordu. Ertesi sabah heybesinin astarını söktü, dikti, borcunu saydı. Kese bulunmuş. Nerede bulundu, söylemedi.”",
   "sebep": "Hakkı Usta sesini alçaltıyor: “Üç beş kişi, fenerle giden kafileye dokunulmadı. Gece yalnız yola çıkanı alır. Çırak o akşam ocağın başındaydı. Kasım Efendi ‘Yitirdiğin yerden kesemi bulmadan yüzüme bakma’ dedi, ay yokken tek başına yolladı. Katırı vermedi, fenerin gazına da kıyamadı. Ben engel olmadım, bana borcu vardı.”"
  },
  "closed": {
   "iz": "Hıdır’ın gömleğini sormak istiyorsun. Kasım Efendi “Bulaşır” diye o sabah ocakta yaktırmış, yastık kılıfını da.",
   "tanik": "Arkasından ne geldiğini Hıdır söyleyemiyor, soru gelince yorganı başına çekiyor. O yolu onunla yürüyen kimse yoktu.",
   "yer": "Hıdır’ın o gece nereye kadar gittiğini sormak istiyorsun. Kasım Efendi handan çıkmamış, Hıdır’ın gözü ise yalnız kapıyı görüyor."
  },
  "gidisat": [
   "Hamide Kadın ekmeği yarıda bıraktı, oturdu, kalkamadı. Öksürüğü ocağın başından duyuluyor.",
   "Hıdır “Bulamadım usta” demeyi bıraktı. Artık hiçbir şey demiyor.",
   "Hamide’nin kızı da yorgun kalktı. Kasım Efendi yükünü bağladı, çözdü, yeniden bağladı. Kapıdan çıkmıyor."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "Kasım Efendi’ye keseyi sor",
   "text": "Kasım Efendi heybeyi dizlerinin üstüne alıyor, elini astarın dikişinde tutuyor. “Kese bulundu, yazdım size.” Nerede bulundu diye soruyorsun. Hesap defterini açıp bir rakamı düzeltiyor. “Çocuk arada kaçardı zaten.” İçeride Hıdır sayıklıyor. Kasım Efendi kalemi bırakmıyor, kalem de yazmıyor."
  },
  "sir": {
   "q": "Hıdır o gece neden tek başına yola çıktı?",
   "right": "Kasım, heybesindeki keseyi yitti sanıp yolladı",
   "wrong": [
    "Hıdır, ustasından kaçıp anasına gidiyordu",
    "Hakkı Usta, borç için onu dışarı çıkardı"
   ]
  },
  "sahne": "Hıdır’ın başucundasın, ocak yanıyor, dışarısı zifiri karanlık. Bir ara kapının dışında tek bir ayağın sesi, bir, sonra sekme, bir. Ocağın ışığı eşiğe kadar gidiyor, orada bitiyor. Işığın bittiği yerde bir gölge duruyor, alnının ortasında tek göz, ateşe bakıyor. Odun azalıyor. Kasım Efendi kapıya değil, pazenlere bakıyor.",
  "kovma": "Odun sabaha yetmiyor. Kasım Efendi bir top pazeni ateşe kendi atıyor, sonra birini daha, yedincisine kadar. Hakkı Usta’yla hastanın başında ardıç yakıyorsunuz, oda dumandan görünmez oluyor, gözün yanıyor. Kapıdaki sekme geri çekiliyor, ormana doğru, yavaş. Hıdır sabaha karşı su istiyor.",
  "yanlis": "Odun bitiyor, ocak sabaha doğru kül oluyor, elindekiler ateşin yerini tutmuyor. Işığın sınırı eşikten içeri kayıyor. Sabah Hıdır’ın nefesi yastığı kıpırdatmıyor. Kasım Efendi anasına yazacak mektubu yazamıyor, han ücretini ödeyip yoluna gidiyor.",
  "cevap": {
   "tam": "Muhterem Kara Defter sahibine,\n\nHıdır kalktı, köyüne gitti. Çıraklığı bıraktı, ocak yanmadan uyumuyormuş.\n\nKesenin parasını anasına yolladım. İçinden hiçbir şey çıkarmadan. Para geri geldi, posta ücreti bana yazıldı.\n\nYedi top pazenin bedelini deftere geçirmedim, elim varmıyor. Heybemin astarını söküp söküp dikiyorum. Bir kalem daha var, onu hangi sütuna yazacağımı bilmiyorum.",
   "eksik": "Muhterem Kara Defter sahibine,\n\nHıdır kalktı. Köyde çırak kendi kaçtı, gece yola düştü deniyor. Anasına da öyle yazdım. Keseden bir miktar çıkarıp harçlık diye verdim. Aldı, teşekkür etti.",
   "gec": "Hamide Kadın bahara çıkamadı; Hakkı Usta hanın ocağını artık söndürmüyor."
  },
  "kenar": "Ardıç yoksa eski dal da olur. Ocağı birine bırakıp uyuma."
 },
 "ifrit": {
  "village": "Sazlıdere",
  "chosen": {
   "kurban": "defineci",
   "iz": "kul",
   "tanik": "alev",
   "zaman": "aysiz",
   "yer": "harabe",
   "sebep": "define"
  },
  "open": [
   "iz",
   "yer",
   "sebep"
  ],
  "letter": {
   "body": "Kara Defter’i tutana,\n\nAğabeyim İskender’i arıyorum. Kaçak tütüncü, saklayacak değilim, herkes bilir. Yirmi üç gün oldu, izi bitti. Karakol beni çağırdı, kardeşin dediler, bilmiyorum dedim.\n\nO gece hangi yoldan geçeceğini bir ben biliyordum, bir de kendisi. Buna rağmen yolun ağzında jandarma bekliyormuş. Kim söyledi bilmem. Bilen yok.\n\nAnam ölüsünü görmeden yas tutmuyor, sofraya İskender’in kaşığını koyuyor. Oğlu İlhan on altı yaşında, babamı ben bulacağım diyor, ambarda bir kazma bileyip duruyor. Odasına kilit vurdum, kilit iki gün dayanır.\n\nBulun demiyorum. Öldüğünü söyleyin. Anam kaşığı kaldırsın, çocuk da otursun.",
   "sign": "Harun"
  },
  "clues": {
   "iz": "Hisarın avlusunda bir çukur var. Çevresindeki taşlar is tutmuş, elini sürünce parmakların kararıyor. Dibinde ince kül, avuçlayınca uçuyor. Sapı kömür olmuş bir kazma, demiri yerinde. Yanında bir çizme teki, ucu yanık, İskender’in çizmesi. Bir adım ötede üç çuval kaçak tütün duruyor, ağzı bağlı, tek bir yanık izi yok. Yakan her neyse tütüne bakmamış.",
   "yer": "Köyün batısındaki yıkık hisar, kemerlerinin ikisi düşmüş, avluyu otlar basmış. Harabenin kilerine iniyorsun. Mum artıkları, ekmek kabukları, bir çul: biri burada günlerce saklanmış. Duvara kurşun kalemle çetele atılmış, altı gün. Altında tek satır, harf harf bastırılarak yazılmış: “Yolu bir kişiye söyledim.” Kalemin ucu orada kırılmış, yerde duruyor.",
   "sebep": "İshak Dede tütün tabakasını açıyor. “Hisarın altında bir şey var, babam söylerdi. Yerin altındakine el uzatan elini geri alamaz. İskender oraya yıllarca tütün sakladı, kilerin dibindeki taşa dokunmadı. Altı gün aç kalınca dokunmuş. Bir gece kapıma gelip ekmek istedi, ‘Küpü buldum, borcu kapatacağım’ dedi. Giderken ‘Kardeşime selam söyle’ dedi. Birkaç adım gitti, döndü, ‘Söyleme’ dedi.”"
  },
  "closed": {
   "kurban": "Ortağı Kenan’ı sormak istiyorsun. Karısı eşyalarını toplayıp gitmiş, kapıda kilit var, Kenan’ın kazması ambarda yok.",
   "tanik": "O gece hisara bakan tek kişi çoban Hıfzı. Çavuşun önünde yeminle hiçbir şey görmediğini söylemiş, şimdi yeminini bozmaya korkuyor.",
   "zaman": "Hangi gece olduğunu soruyorsun. Karakol defterinin o sayfası kopmuş, Çavuş Hulusi “Fare yedi” diyor, öteki sayfalar sapasağlam."
  },
  "gidisat": [
   "İlhan gece kilidi zorladı. Harun kapının önüne yatmaya başladı.",
   "Yaşlı kadın sabah sofraya bir kaşık fazla koydu. Kimin için olduğunu kimse sormadı.",
   "Kilit bu gece dayanmadı. İlhan’ın yatağı boş, ambardaki kazma yerinde yok."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Harun’a duvardaki satırı söyle",
   "text": "Harun cigarasını yakmaya çalışıyor, kibriti üçüncüde tutuyor. “Hangi bir kişi?” diyor. Kimse cevap vermiyor. Anası içeride kaşık diziyor, sesi duyuluyor. “O adamın bakacağı çocuk var. Hapiste yatan adam ölmez, bilir misin? Altı ay, bir yıl, çıkar.” Kibrit parmağına kadar yanıyor, bırakmıyor. “Bunu neden dedim, onu da bilmiyorum.”"
  },
  "sir": {
   "q": "Yolun ağzında jandarmayı kim bekletti?",
   "right": "Harun, ağabeyi hapiste sağ kalsın diye ihbar etti",
   "wrong": [
    "Ortağı Kenan, payına göz dikip ele verdi",
    "Çoban Hıfzı, ödül parası için haber verdi"
   ]
  },
  "sahne": "Hisarda bekliyorsun, gökte ay yok. Kilerin taşları arasından önce küçük bir alev çıkıyor, mum gibi, sonra duvar boyunca uzuyor. Duman yok. Alevden doğrulan gövdenin başı kemere değiyor. İlhan çukurun yanında, kazmayı indirmiş, babasının çizmesine bakıyor. Harun dişlerinin arasından bir şeyler söylüyor.",
  "kovma": "Harun önden giriyor, besmeleyi çekiyor, sonra duayı, sesi titreyerek, kesmeden. Alev ona gelmiyor, çevresinde dolaşıyor. Anasının çeyiz aynasını kaldırıp gövdeye tutuyorsun. Durup bakıyor, alnındaki alev donuyor. O arada İlhan’ı kolundan çekip avludan çıkarıyorsun. Arkanızda kilerin ağzı ağır ağır kararıyor.",
  "yanlis": "Alev çukurun kenarında doğruluyor, getirdiğine dönüp bakmıyor. İlhan babasının çizmesine uzanıyor. Sabah hisarda yeni bir kül yığını, yanında sapı kömür olmuş bir kazma. Harun ikinci kaşığı sofradan kendi kaldırıyor.",
  "cevap": {
   "tam": "Kara Defter’i tutana,\n\nİlhan evde, kazmayı dereye attı. Anam kaşığı kaldırdı, sandığa koydu.\n\nKarakola gittim, ihbarı benim yaptığımı söyledim. Çavuş Hulusi defteri kapattı, “Bunu duymadım” dedi. Yengem kapısını kapattı. Anam ekmeği önüme koyuyor. Biliyor mu, bilmiyorum.\n\nHapis yatsın istedim. Altı ay, bilemedin bir yıl. Hesap ettim: bu bahar çıkmış olacaktı.",
   "eksik": "Kara Defter’i tutana,\n\nİlhan evde. Anam kaşığı kaldırdı. Köy ihbarı çoban Hıfzı yaptı diye konuşuyor, ağılına taş atıyorlar. Karakolda bana hâlâ selam veriyorlar, çay söylüyorlar.",
   "gec": "İlhan’ın sağ avucu kömür gibi kaldı, bir daha kazma tutacak eli yok."
  },
  "kenar": "Harabeye aynayla gir, dua edebildiğin kadar. Kül bırakmışsa çizmeye bakma."
 },
 "karakopek": {
  "village": "Yaylacık",
  "chosen": {
   "kurban": "yolcu",
   "iz": "pence",
   "tanik": "hayvan",
   "zaman": "aysiz",
   "yer": "yol",
   "sebep": "haksiz_olum"
  },
  "open": [
   "iz",
   "tanik",
   "zaman"
  ],
  "letter": {
   "body": "Yaylacık gece bekçisi defterinden, Kara Defter sahibine.\n\nYirmi iki yıldır bekçiyim. Okumayı askerde öğrendim. Gördüğümü yazarım, görmediğimi yazmam.\n\nSalı. Saat on, köy başı, ses yok. Saat on bir, ambar önü, ses yok.\nÇarşamba. Köyden iki adam eksik. Biri sabah bulundu, gözleri açık, üstünde çizik yok. Öteki yok.\nPerşembe. Yazamadım.\n\nYaz sonu bir mahkeme işinde şahitlik ettim, defterde yazılıdır, o iş bitmiştir, karıştırmayın.\n\nMuhtarın oğlu Hamdi cumartesi kasabadan yürüyerek dönecek. Haber gönderdim, güldü.\n\nBen her gece aynı yerden geçerim, geçmek zorundayım. Bir süredir önümde bir şey gidiyor, durunca duruyor. Ne olduğunu defterime yazmadım.",
   "sign": "Bekçi Hayrullah"
  },
  "clues": {
   "iz": "Köyün dışında çamurda pençe izi var, dört parmak, önde tırnak oyukları, dizi halinde gidiyor. Hangi hayvanın olduğunu bilen çıkmıyor. Hemen üstünde bir adamın çizme izi. Eğilip bakıyorsun: çizme pençenin içine basıyor. Adam kaçmamış, izi izleyerek yürümüş. Aynı çamurda bir de bekçi çarığı var, üç gece üst üste gidip gelmiş. Defterine yazmamış.",
   "tanik": "Kevser on iki yaşında, kaybolan koyunu ararken görmüş. “Hayvandı. Dört ayaklıydı, öyle bir hayvan görmedim. Önümden yürüdü, durdum, durdu, baktı bana. Ağabeyim olsa anlardı.” Ağabeyi çoban İsmail, yaz sonu mahkemeye götürülmüş, dönmemiş. Bunu söylerken önüne bakıyor. “Bekçi amca her ay kapımıza para bırakır. Annem almıyor. Neden bıraktığını da söylemiyor.”",
   "zaman": "Hayrullah defterini açmana izin veriyor. Ay doğmayan gecelerin yanına tek kelime yazmış: “Karanlık.” İki adamın eksildiği gece de “Karanlık”. Bu cumartesi yine öyle, takvimde ay yok, zifiri. Sayfaları yaz sonuna çeviriyorsun. O gecenin satırı: “Ambar önü, ses yok.” Üstü çizilmiş, başka mürekkeple yazılmış: “İsmail’i gördüm.” Hayrullah sayfayı kapatıyor."
  },
  "closed": {
   "kurban": "Eksilen iki adamı soruyorsun. Evlerinin kapısı kapalı, Muhtar Hulki oralara gidilmesini yasaklamış, “Köy karışmasın” diyor.",
   "yer": "İki adamın nerede eksildiğini soruyorsun. Hayrullah “Görmediğimi yazmam” diyor, o sayfalar boş.",
   "sebep": "Mahkeme dosyası kasabada. Hulki Muhtar dilekçeni imzalamıyor, “Bitti” diyor, kapıyı örtüyor."
  },
  "gidisat": [
   "Hayrullah’ın kapısının önünde sabah pençe izi vardı, eşiğin dibinde bir şey oturmuş gibi. Karısına “Çakal” dedi.",
   "Aynı izi bu sabah Muhtar Hulki’nin kapısında buldular. Hamdi’ye ikinci kez haber gönderildi.",
   "Hulki Muhtar oğlunun cumartesi yola çıkmasını yasak ettiğini herkese söylüyor. Hamdi çıktı."
  ],
  "yuzlesme": {
   "after": "zaman",
   "ask": "Hayrullah’a çizili satırı sor",
   "text": "Hayrullah defteri sana döndürmüyor, üstüne elini koyuyor. “Yirmi iki sene bir satırım yanlış çıkmadı.” Gaz lambasının fitilini indiriyor, yüzü karanlıkta kalıyor. “Bekçiyi muhtar tutar, parasını muhtar verir. Evde hasta vardı.” Kimseye bakmadan devam ediyor. “Çoban kasabaya kadar yürüyemedi. Bunu bana kimse sormadı, sen de sorma.”"
  },
  "sir": {
   "q": "Hayrullah mahkemede neye yemin etti?",
   "right": "İsmail’i ambarda gördüğüne, görmediği hâlde",
   "wrong": [
    "Hamdi’yi ambarda gördüğüne, korkuya kapılarak",
    "O gece nöbette olmadığına, izinli yazdırarak"
   ]
  },
  "sahne": "Ay yok. Yolun ortasında Hayrullah’la yan yana duruyorsun, fener onun elinde. İleride bir şey yürüyor, sırık gibi zayıf, kaburgaları fenerde sayılıyor. Duruyor. Başını çeviriyor. Gözlerinin yerinde iki boşluk var, yine de sana bakıyor. İki adım arkasından Hamdi yürüyor, kimseyi görmeden.",
  "kovma": "Hayrullah yolun ortasına çalı ve tezek yığıyor, ateşi sen tutuşturuyorsun, Hamdi’yi kolundan çekip başına oturtuyorsun. Hayvan alevin kenarında oturup bekliyor. Hayrullah yüksek sesle defterden okuyor, çizili satırı, doğrusunu. Horoz ötünce yerinde yok. Hayrullah’ın ateşe uzattığı elinin tüyleri yanmış, çekmemiş.",
  "yanlis": "Fener sönüyor, sabaha kadar dayanacak bir düzen kurmamışsın. Hamdi iki adım ötede yürümeye devam ediyor. Sabah Hulki Muhtar oğlunu yolda oturur halde buluyor, gözleri açık. Üstünde çizik yok. Hayrullah o günkü sayfaya “Ses yok” yazıyor.",
  "cevap": {
   "tam": "Yaylacık gece bekçisi defterinden, Kara Defter sahibine.\n\nKasabaya gittim, yalan şahitlik ettim dedim, ambarı Hamdi’nin açtığını da dedim. Kâtip dosyanın kapandığını söyledi, ölünün davası açılmaz dedi.\n\nİsmail’in anasına gittim. Para bırakmadım. Kapıyı açtı, dinledi, kapattı.\n\nÇizili satırın üstüne doğrusunu yazdım, kâğıt delindi.\n\nGörmediğimi yazmam dedim size. Onu da yazmıştım.",
   "eksik": "Yaylacık gece bekçisi defterinden, Kara Defter sahibine.\n\nYol sakin. Hamdi evlendi. Çoban İsmail hâlâ hırsız, Kevser çeşmeye geceleri gidiyor. Defteri tutmaya devam ediyorum. Görmediğimi yazmam.",
   "gec": "Karım kapıdaki izin üçüncü sabahı kalkmadı; o parayı onun hastalığı için almıştım."
  },
  "kenar": "Ateşi suçu olana yaktır. Sabaha kadar tutabilirse bir şey öğrenmiştir."
 }
};
