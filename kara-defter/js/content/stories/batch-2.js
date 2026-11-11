// Hand-written cases. Rules: HIKAYE_REHBERI.md; chosen/open come from tools/story-plan.json.
export default {
 "gulyabani": {
  "village": "Akpınar",
  "chosen": { "kurban": "yolcu", "iz": "tirnak", "tanik": "killi", "zaman": "aysiz", "yer": "harabe", "sebep": "yalniz_yol" },
  "open": ["kurban", "tanik", "sebep"],
  "letter": {
   "body": "YOL RAPORU\nŞoför: Ferit. Araç: Bedford, açık kasa. Güzergâh: Kasaba–Akpınar.\nMuavin: İsmail, on yedi yaşında. Durum: yok.\n\nAyın 23’ü gecesi Km 41’de, eski dönemeçte durdum. Neden durduğumu sonra yazarım. Far tek çalışıyor. Farın dışında hiçbir şey görünmüyordu, gök dahil.\n\nAkpınar’a tek vardım. İsmail sabaha gelmedi. Yirmi yedi gündür gelmedi. Jandarma “kaçmıştır” yazdı. Anası her sabah kahvenin önünde durup kasaya bakıyor.\n\nCuma gecesi aynı yoldan tek gideceğim. Yük var, muavin bulamadım, kimse binmiyor.\n\nBu rapor kötü yazıldıysa kusur elimdedir. Kalem durmuyor.",
   "sign": "Şoför Ferit, Akpınar kahvesinden"
  },
  "clues": {
   "kurban": "Kahvenin önünde İsmail’in anası Fadime kamyonun kasasına bakıp sana dönüyor: “Gece yola düşene olur bu. İki yıl önce seyyar Emrullah, geçen kış postacı, ikisi de Km 41’le köy arasında, karanlıkta yürürken kayboldu. Oğlum kamyondaydı.” Başörtüsünün ucunu sıkıyor. “Kamyondaki adam nasıl kaybolur, ben bunu soruyorum. Ferit Usta bir aya yakındır yüzüme bakmıyor.”",
   "tanik": "Yol işçisi Enis taş kırdığı yerde oturuyor: “Çadırdaydım. Yolun kenarından biri geçti, boyu çadırı aşıyordu. Feneri tuttum. Baştan aşağı kıl, yağlı, kapkara, omuzları kapı gibi iri. Arkasından bir oğlan yürüyordu, yetişmeye çalışıyordu. ‘Usta, bekle’ diyordu.” Enis çekici bırakıyor. “Oğlan onu ustası sanmış. Kamyondan inen adam ustasının peşine neden düşer, onu da düşünüyorum.”",
   "sebep": "İdris Dede tütününü sarıyor: “Bu yol gece tek başına çıkana dokunur. İki kişi yürüyene bugüne dek dokunmadı, postacıya da yoldaşı hastalanınca oldu. Galip’in kahvesine sor: Ferit o akşam yanında oğlanla çay içti, ikisi bindi. Jandarma noktası Km 44’tedir. Kasada fazla adam, fazla yük, ceza demek. Km 41’de duran kamyon neden durur, sen hesap et. Ben hesabı yaptım, kimseye söylemedim.”"
  },
  "closed": {
   "iz": "Ferit kasanın sağ tahtalarını rendeletip boyatmış. Boya hâlâ kokuyor, altında ne vardı söylemiyor.",
   "zaman": "Jandarma tutanağında gece için “karanlık” yazıyor, o kadar. Kabindeki takvimin o yaprağını Ferit koparmış.",
   "yer": "Dönemeçten yukarısını gösterebilecek tek kişi İsmail. Jandarma patikanın başından dönmüş, yukarı çıkmamış."
  },
  "gidisat": [
   "Fadime bu sabah kahvenin önüne gelmedi. Akşam onu yola doğru yürürken çevirmişler.",
   "Ferit yükü aldı. Kabine İsmail’in çantasını koymuş, soran olunca yüzünü dönüyor.",
   "Cuma geldi. Ferit motoru çalıştırdı, yanındaki koltuğa bir kilim serdi."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "Ferit Usta’ya Km 44’ü sor",
   "text": "Ferit kontağı kapatıyor. Elini direksiyondan çekince titremeye başlıyor, geri koyuyor. “Noktadaki çavuş geçen ay iki lira yazdı. O iki lira benim bir haftam.” Uzun süre ön cama bakıyor. “Üç kilometre nedir, dedim. Çocuk iyi yürürdü.” Sonra sesini alçaltıyor. “Kaç dakika beklediğimi sorma.”"
  },
  "sir": {
   "q": "İsmail o gece yola nasıl düştü?",
   "right": "Ferit, jandarma noktasını geçmek için indirdi",
   "wrong": ["İsmail, ustasıyla kavga edip kendi indi", "Kahveci Galip kestirmeyi tarif edip yolladı"]
  },
  "sahne": "Cuma gecesi kamyon Km 41’de. Gökte ay yok, tek far yol kenarındaki taşları zor seçiyor. Ferit motoru susturuyor. Bir süre sonra kasa ağır bir şeyin altında iniyor. Tırnak tahtada yürüyor, uzun uzun, acele etmeden. Arka camdan İsmail’in sesine pek benzeyen bir ses: “Usta, in, ben süreyim.” Ferit kapı koluna uzanıyor.",
  "kovma": "Ferit’in kolunu tutuyorsun. İsmail’in çantasından branda çuvaldızını alıp camı indiriyorsun, kılın içinden yakaya saplıyorsun. Kasa ağır ağır doğruluyor. Ferit’le sabaha kadar kabinde oturuyorsunuz, kimse kapıyı açmıyor. Horoz öttüğünde eski hanın patikasından İsmail iniyor, yalın ayak, kimseyi tanımadan.",
  "yanlis": "Dönemeçte elindekinin hükmü yok. Far sönüyor, o ses artık kabinin içinde. Sabah kamyon Km 41’de bulunuyor, kapısı açık, kontak yerinde. Ferit’in kalemi koltukta. Akpınar’da o yoldan yük götürecek adam kalmıyor, Fadime kahvenin önünde durmaya devam ediyor.",
  "cevap": {
   "tam": "YOL RAPORU\n\nMuavin: İsmail. Durum: var. Ayakları iyileşti. Konuşuyor, o geceyi sormuyoruz.\n\nFadime’ye Km 44’ü anlattım. Dinledi, çayımı doldurdu, bir daha yüzüme bakmadı.\n\nKamyonu İsmail sürüyor artık, benim elim tutmuyor. Noktaya yaklaşınca yavaşlıyor, bana bakıyor. Ben kapıyı tutuyorum.\n\nFerit",
   "eksik": "YOL RAPORU\n\nİsmail bulundu, kendine geldi. Köy, oğlanın ustasıyla kavga edip kamyondan indiğini söylüyor. İsmail hatırlamıyor. Düzeltmedim. Anası bana selam veriyor. Yükü aldım, yola devam ediyorum.\n\nFerit",
   "gec": "Yol işçisi Enis’in çadırı o cuma sabahı açık bulundu, aramaya çıkan olmadı."
  },
  "kenar": "Çuvaldız yakaya, göz sabaha. Gerisi beklemektir. Benim sabrım bir yere kadar yetti."
 },
 "obur": {
  "village": "Taşoluk",
  "chosen": { "kurban": "hayvan", "iz": "mezar", "tanik": "olu", "zaman": "dolunay", "yer": "mezarlik", "sebep": "usulsuz_gomu" },
  "open": ["tanik", "yer", "sebep"],
  "letter": {
   "body": "Muhterem kardeşim,\n\nBunu yatsıdan sonra, lambayı kısarak yazıyorum. Sabah namazında safta kim var, kim gözünü kaçırıyor, ben bilirim.\n\nTaşoluk’ta bir aydır kilerler boşalıyor. Feride’nin yağ küpü, Gani’nin unu, muhtarın peyniri. Kilit kırılmıyor. Cemaat bana soruyor, ben dua ediyorum, cemaat eve dönüp kilerine bakıyor.\n\nGeçen bahar bir cenazemiz oldu, Eşref kardeşimiz. O gün ben ateşler içinde yatıyordum. Cemaat öyle bilir, siz de öyle bilin.\n\nTakvimde bir günü yuvarlak içine aldım, üç gün var. Gelirseniz beni cami avlusunda tanıyormuş gibi durmayın.",
   "sign": "İmam İbrahim, Taşoluk"
  },
  "clues": {
   "tanik": "Feride kapının eşiğinde çocuğunu emzirirken konuşuyor: “Kocam Eşref bahardan beri toprakta. Bir gece kilerin kapısını açtı, ben gördüm. Eski hırkası, kasketi, sol omzunun düşüklüğü. Küpün başına çömeldi, avuç avuç yedi. Sekiz yıl bir sofrada oturduk, hiç böyle yemezdi.” Sesini alçaltıyor. “İmam Efendi cenaze günü hasta değildi. Bahçesindeydi. Beni görünce içeri girdi.”",
   "yer": "Mezarlık köyün üstünde, taş duvarlı. Başlar sıra sıra, hepsi aynı yöne dönük. Duvarın dışında, sınıra sürtünen bir kabartı var: taşsız, yanlamasına, üstünde ot bitmemiş. Kabartıdan köye inen patika yeni basılmış gibi sertleşmiş. Yanına gelen bekçi başını sallıyor: “İçeri alınmaz, diye haber geldi. Hasta yatağından. Adam kendi ipini kendi bağladı ya.”",
   "sebep": "Elmas Hala yün eğiriyor, elini durdurmuyor: “Eşref ahırın direğine ipi bağladığında borcu vardı, kimse sormadı. Yıkanmadı. Bir çuval, gece kazılmış bir çukur. Namazı kılınmadı. Böyle gönderileni toprak tutmaz, büyüklerimiz öyle bilirdi. O sabah ezanı İmam Efendi kendi okudu. Ateşler içinde yatan adamın sesini ben duvarın öbür yanından duydum.”"
  },
  "closed": {
   "kurban": "Ahır kapıları sürgülü, göz değer diye kimseyi sokmuyorlar. Akşamları köyden kireç kokusu geliyor.",
   "iz": "İmam İbrahim her sabah namazdan önce duvar dibine gidip toprağı eliyle düzeltiyor. Bakacak bir şey bırakmıyor.",
   "zaman": "Kim hangi gece ne gördü, kimse gün vermiyor. Takvim imamın odasında, o yaprağı kimseye göstermiyor."
  },
  "gidisat": [
   "Gani’nin ambarında son çuvalın ağzı açık bulundu. Bağlamaya giden olmadı.",
   "Bir komşu Feride’nin çocuklarına bir tas un getirdi, kapıyı çalmadan bırakıp gitti.",
   "Sabah namazında saf ikiye indi. Yaşlılar evde kılıyormuş."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "İmam İbrahim’e o sabahı sor",
   "text": "İmam İbrahim abdest havlusunu katlıyor, açıyor, yine katlıyor. “İmamın hesabı olur mu, kardeşim? Olurmuş.” Bir süre susuyor. “Hesabım doğru çıktı. Cemaat yerinde duruyor.” Havluyu askıya koyuyor, ters asmış, düzeltmiyor. “O gün kendi cenazemi hiç düşünmedim, kardeşim.”"
  },
  "sir": {
   "q": "Eşref neden yıkanmadan, namazsız gömüldü?",
   "right": "İmam İbrahim, cemaatin sözünden korkup kılmadı",
   "wrong": ["Karısı Feride, kocasından utanıp istemedi", "Muhtar, köyün adı çıkmasın diye engel oldu"]
  },
  "sahne": "Ay tepede, mezarlık duvarının dibi süt gibi aydınlık. İmam İbrahim yanında oturuyor, tespih elinde durmuş. Kabartının toprağı bir kere kabarıp iniyor, bir kere daha. Sonra duvarın üstünden eski bir kasket görünüyor. Köye doğru gidiyor, acele etmeden, kiler yolunu bilen bir adam gibi. Ağzını kolunun yeniyle siliyor.",
  "kovma": "İmam İbrahim tuzu kendi avucundan kilerin eşiğine, sonra kabartının çevresine döküyor. Feride’nin sandığından çıkan çuvaldızı sen yakaya batırıyorsun. Eski hırka kımıldamadan ağırlaşıyor, kabartıya çöküyor, toprak kapanıyor. Sabaha karşı İmam İbrahim namaza duruyor. Arkasında Feride’yle sen varsınız.",
  "yanlis": "Eski hırka elindekine bakmadan önünden geçiyor. Kiler kapıları o gece içeriden açılıyor. Ay dönmeden Taşoluk’ta küplerin tamamı, ahırların yarısı boşalıyor. İmam İbrahim cuma günü bereketten söz ediyor. Feride çocuklarını alıp köyü bırakıyor, giderken mezarlık yoluna bakmıyor.",
  "cevap": {
   "tam": "Muhterem kardeşim,\n\nEşref kardeşimizi duvarın içine aldık. Cenazesini yedi ay geç kıldırdım. Cuma günü minberde o sabahı anlattım, ateşim yoktu, bahçedeydim dedim.\n\nFeride’nin kilerine her ay bir ölçek un bırakıyorum. Geri getiriyor, yine götürüyorum.\n\nArkamda on bir kişi kılıyor. Saydım. Eskiden saymazdım.\n\nİmam İbrahim",
   "eksik": "Muhterem kardeşim,\n\nKilerler doldu. Cemaat, Eşref’in yıkanmamasını karısına veriyor, kocasından utandı diyor. Cuma günü sabır üzerine konuştum. Feride çocuklarıyla caminin önünden geçmiyor artık. Saf tamam.\n\nİmam İbrahim",
   "gec": "Feride’nin ineği ay dönmeden öldü, çocuklar o kışı komşu sütüyle geçirdi."
  },
  "kenar": "Hastaydım diyenin önce o gün ne içtiğini sor. Ateşli olan hatırlar."
 },
 "devanasi": {
  "village": "Bozkuyu",
  "chosen": { "kurban": "yolcu", "iz": "buyuk_iz", "tanik": "kocakari", "zaman": "aksam", "yer": "magara", "sebep": "izinsiz" },
  "open": ["kurban", "tanik", "zaman"],
  "letter": {
   "body": "Beni buraya yazıyorum: Bozkuyu’dan Enver. On bir gün oldu.\n\nKasaba pazarından üç kişi çıktık, İlyas, Gürbüz, ben. Yolu kestirmeden aldık. Üçümüz girdik. Soğuk bir yer, taş, bir yerden su damlıyor, koku süt gibi.\n\nBen çıktım. Nasıl çıktığımı sormayın.\n\nAğzımın içinde bir tat var, gitmiyor. İlyas’ın kesesini karısı Fidan’a verdim, bana sarıldı, ellerimi öptü, ben çektim.\n\nİlyas’ın oğlu İsa on altı yaşında. Yarın babasını aramaya çıkacak, yolu bana sordu, ben söylemedim, başkası söyleyecek.\n\nÇocuk gitmesin. Bunu yazıyorum, öbürünü yazamıyorum.",
   "sign": "Enver"
  },
  "clues": {
   "kurban": "Fidan İlyas’ın yatağını hâlâ seriyor. “Gece yolda kalanı alıyor bu yol. Geçen güz bir kalaycı, ondan evvelki yıl iki çerçi, karanlığa kalıp yürüyenler dönmedi.” Keseyi çıkarıp gösteriyor, para tam. “Enver getirdi, sayıp teslim etti. Adam can verirken kesesini arkadaşına verir mi? Vermiştir demek.” Bir an bakıyor keseye. “Ya da almıştır, ben onu hiç düşünmedim.”",
   "tanik": "Çoban Feyzi sopasına yaslanmış konuşuyor: “Kayanın önünde çok yaşlı bir kadın oturuyordu, başı dizlerinde, beli doğrulmuyor. Ağzından buğu çıkıyordu, hava soğuk değilken. Enver önünde diz çökmüştü, başını ona uzatmış, o da okşuyordu. İçeriden İlyas’ın sesi geliyordu, Enver’in adını söylüyordu. Enver bana hiç sormadı, ne gördün diye. Sen sor bakalım, ağzı niye ekşi süt kokuyor.”",
   "zaman": "Bekçi Fikri çubuğunu yere vuruyor: “Hepsi gün batarken oldu, ortalık kararırken. Kalaycı son gördüğü ocakçıya ‘lamba yakılmadan varırım’ demiş. İlyas’ların köye varacağı vakit de oydu. Ertesi gün tam o vakitte, kapılar kapanırken, Enver köye tek başına girdi, üstü kuru, soluğu düzgün. İçeriden kaçan adam koşar. Enver yürüyordu.”"
  },
  "closed": {
   "iz": "Enver dönüş yolunu çalıyla süpürmüş, karısı süpürgeyi dereye atarken görmüş. Yolda bakacak bir şey kalmamış.",
   "yer": "Enver’e iki kere sordun, iki ayrı dere gösterdi. Gürbüz’ü soracak kimse yok.",
   "sebep": "Bu yolun eski hikâyesini Güllü Nine bilirdi. Enver’in döndüğü gün kapısını kapamış, kimseye açmıyor."
  },
  "gidisat": [
   "İsa babasının kamasını biledi. Fidan sabah onu kapıdan geri oturttu.",
   "Enver köyde yürürken ağzını siliyor. Kimseyle sofraya oturmuyor.",
   "İsa gün kararırken köyden çıktı. Fidan’a yatağında olduğunu söylemişler."
  ],
  "yuzlesme": {
   "after": "tanik",
   "ask": "Enver’e ağzındaki tadı sor",
   "text": "Enver yutkunuyor, tükürmek için kapıya gidiyor, tükürmüyor. “Feyzi beni gördü mü dedi sana?” Sen susuyorsun. “İçerisi soğuktu. Bir şey söylemek gerekti. Sen olsan ne söylerdin bilmiyorum.” Eline bakıyor. “Gürbüz ‘Kaç’ dedi, o an kaçtı. İlyas sırtımdan tutuyordu. Sonra artık tutmuyordu.”"
  },
  "sir": {
   "q": "Enver oradan nasıl çıktı?",
   "right": "Diz çöküp İlyas’ı kendi yerine vererek",
   "wrong": ["Taştaki bir yarıktan tek başına sürünerek", "İlyas onu kendi eliyle dışarı iterek"]
  },
  "sahne": "Akşam karanlığında taşın ağzındasın. Enver yanında, meşaleyi sen tutuyorsun. İçeriden sıcak bir buğu geliyor, koku süt. Girişte iki büklüm oturan şey başını kaldırmıyor, memeleri omzunun üstüne atılı. Ağır bir ses: “Oğullarım daha gelmedi. Sen kimin nesisin?” Enver dizlerinin üstüne düşüyor, ağzını açıyor, ses çıkmıyor.",
  "kovma": "Meşaleyi öne uzatıyorsun, el bir karış kala geri çekiliyor. Enver selam veriyor, sesi çatlıyor. “Ana,” diyor, “seni emdim. Sözümü geri alıyorum.” Buğu ateşe değip içeri kaçıyor. Taşın üzerinden bir erkek kuşağı sürüklenip önünüze düşüyor. Başka bir şey gelmiyor. Yolu geri yürüyorsunuz, Enver önde.",
  "yanlis": "Taşın ağzında bildiğin hiçbir şey sökmüyor. Buğu elini yakıyor, geri çekiliyorsun. Karanlık inince Enver taşın ağzından içeri yürüyor, kimse itmiyor. Dışarıda yalnız meşalen kalıyor. Ertesi gün Fidan İlyas’ın yatağını yine seriyor, Enver’in karısı da ona bakıp kendininkini.",
  "cevap": {
   "tam": "Bu kâğıdı önce Fidan’a okudum, sonra size yazıyorum.\n\nİlyas’ı ben bıraktım. Gürbüz çoktan gitmişti. Önüne diz çöktüm, “Bunu al” dedim, kendi ağzımla.\n\nFidan dinledi. Keseyi aldı, önüme koydu.\n\nGünler kısaldı. Karanlık çökerken kapıya çıkıyorum, uzaktan biri “oğlum” diyor. Eve dönmem gerektiğini biliyorum. Ayağım öbür yana gidiyor.\n\nEnver",
   "eksik": "O yol yine işliyor. Köy, İlyas’ın beni kurtarmak için kendini feda ettiğini biliyor. Fidan bana teşekkür etti. Yüzüne bakamıyorum. Keseyi ona ben vermiştim, o da ellerimi öptü.\n\nEnver",
   "gec": "İsa’nın kaması taşın ağzında duruyordu. Kimse almadı."
  },
  "kenar": "Selam veren kurtulur derler. Kime karşılık kurtulduğunu sormazlar. Sabiha sorardı."
 },
 "yuha": {
  "village": "Yukarı Kavak",
  "chosen": { "kurban": "delikanli", "iz": "deri", "tanik": "guzel", "zaman": "dolunay", "yer": "orman", "sebep": "yabanci" },
  "open": ["kurban", "iz", "zaman"],
  "letter": {
   "body": "Kara Defter’in sahibine,\n\nAllah’a şükür oğlum İzzet’i evlendirdim. Gelinim Gülbahar’ı gören bir daha döner bakar. Amcası geldi, nikâhını kendi verdi, her şey usulünce oldu. Bunu neden yazıyorum, kimse sormadı.\n\nOğlum bu altı ayda yarıya indi. Sırtından tutup kaldırıyorum, elime ağırlık gelmiyor. Gelinim başucundan ayrılmıyor, ayrıldığı gün de ben kapıya çıkmıyorum.\n\nBir ayağı kısa oğluma yirmi yedi yaşına kadar kimse kız vermedi, bunu da bilin.\n\nCumadan önce gelin. Cuma gecesini bu hâlde çıkaramaz. Geldiğinizde gelinime soyunu sormayın, ben söylerim.",
   "sign": "İzzet’in anası Edibe"
  },
  "clues": {
   "kurban": "İkbal Kadın oğlunun yatağını kaldırmamış. “Ekrem yirmi üçündeydi, bekârdı, bir gün hasta olmadı. O kız köye gelince önce bizim kapıya geldi, geçen yaz. Ekrem kuru yaprak gibi hafifledi, ağustosta yatağında buldum. Sonra çeşmedeki bekâr oğlanların hepsine su verdi, en son İzzet’e.” Sana yakından bakıyor. “Edibe’nin kapısına gidip sor, oğlum neye benzedi öldüğünde. Bana sormadı.”",
   "iz": "Edibe çeşmeye inince yüklüğü yokluyorsun. Yorganların arkasında bir kese. İçinde katlanmış ince, saydam kabuk parçaları: altı tane, pulları hâlâ belli, biri bir kol boyu, baş yerinde iki göz deliği. Kese Edibe’nin. Gelinin eteğinden alıp alıp buraya koymuş. Parçaların arasında bir kâğıt: “Fethi’ye on beş lira, nikâh günü.” Altında Edibe’nin parmak basması var. Kâğıdı yerine koyuyorsun. Parmağında bir pul kalıyor.",
   "zaman": "İnci Nine parmaklarını sayıyor: “Ay dolduğu gece gelin yatağında olmaz. Sabah eteği toprak, oğlan kalkamaz. Altı ayda altı kere, saydım. Nazire Ebe geçen güz bu odada gelinin elini tuttu, kokladı, çayını içmeden kalktı. Edibe ardından kapıyı örttü. O gün kapıda duran seyyar Fethi’yi de gördü Nazire. Amca dediğin adama nasıl da benzer, dedi, sözü orada kesti.”"
  },
  "closed": {
   "tanik": "Gülbahar’ı soruyorsun, herkes yalnızca yüzünü anlatıyor, başka bir şey hatırlayan çıkmıyor. Kendisi odayı kapıdan gösterip örtüyor.",
   "yer": "Edibe köye “koruya çıkmayın” diye tembih etmiş, çocukları bile göndermiyor. Gidecek biri bulamıyorsun.",
   "sebep": "Köyün en yaşlısı kızın nereden geldiğini sorduğu için bu evden çıkarılmış. Şimdi sorana yüzünü duvara dönüyor."
  },
  "gidisat": [
   "İzzet bu sabah kaşığı tutamadı. Gülbahar yedirdi, ağzını iki kere sildi.",
   "Edibe bir tas helva yaptırıp İkbal Kadın’a gönderdi. Tas dolu geri geldi.",
   "İzzet bugün anasına “Gülbahar nerede” diye sordu. Gülbahar yanında oturuyordu."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Edibe’ye keseyi göster",
   "text": "Edibe keseyi alıyor, avcunda tartıyor, yüklüğe geri koyuyor. “Kapımda yirmi yedi yaşında bir oğlan vardı, bir ayağı kısa. Kimse vermedi. Bu kız geldi.” Bardağı tabağın içinde çeviriyor. “Soyunu bilmiyordum, dedim herkese. Ne kadar bilmediğimi bir ben biliyordum.” Kapıya bakıyor. Oradan kimse gelmiyor."
  },
  "sir": {
   "q": "Nikâhı veren amca kimdi?",
   "right": "Edibe’nin para verdiği seyyar satıcı",
   "wrong": ["Gelinin uzaktan gelmiş gerçek amcası", "İzzet’in ikna ettiği bir yol arkadaşı"]
  },
  "sahne": "Ay tepede. Gülbahar kapıdan çıkarken sana başıyla selam veriyor, bakışı sende durmuyor. Sen İzzet’in yanında kalıyorsun, soluğu pek ince. Gece ilerliyor. Sabaha karşı koru tarafından, karın üstünde sürüklenen bir şey duyuyorsun. Kapı açılıyor. Gülbahar eşikte durup dilini ıslatıyor, gülümsüyor: “Annem uyumuyor mu?”",
  "kovma": "Edibe çeyiz aynasını kucağında getirip gelininin önüne kendi eliyle tutuyor. Gülbahar bakıyor, gözbebekleri bir çizgiye iniyor, dili ikiye ayrılıyor. İnci Nine’nin getirdiği ardıç dallarını ocağa sen atıyorsun. Duman odayı doldurunca bir tıslama duvar dibinden kapıya sürünüyor. Karın üstünde koruya giden ince bir iz kalıyor.",
  "yanlis": "Gülbahar getirdiğin şeye bakıp gülümsüyor, sana çay koyuyor. Ay iki kere dönüyor. İzzet yatağında bulunuyor, üstündeki yorgandan hafif. Cenazede en çok Gülbahar ağlıyor. Edibe ona sarılıyor, başka kimsesi kalmamış.",
  "cevap": {
   "tam": "Kara Defter’in sahibine,\n\nİzzet kalktı, kısa ayağıyla yine yürüyor. İkbal Kadın’a gittim, her şeyi söyledim, Fethi’nin on beş lirasını da. Dinledi, kapıyı açık bıraktı, ben de çıktım.\n\nOğlum geceleri koruya bakıyor. Ay dolunca kapıyı ben kilitliyorum, anahtarı göğsümde uyuyorum.\n\nGeçen gün “Anne, o bana hiç topal demedi” dedi.\n\nEdibe",
   "eksik": "Kara Defter’in sahibine,\n\nOğlum iyileşti, gelin gitti. Köy, kızı amcası gelip götürdü diyor. Kapımız yine temiz sayılıyor. Ekrem’in anasıyla yine selamlaşmıyoruz. Allah razı olsun.\n\nEdibe",
   "gec": "İzzet’in saçı yirmi yedisinde ağardı, bir daha karaya dönmedi."
  },
  "kenar": "Aynaya önce gelin oturtulur. Kaynana oturmak istemezse sebebini ayrıca yaz."
 },
 "degirmeniyesi": {
  "village": "Ilıca",
  "chosen": { "kurban": "ciftci", "iz": "islak", "tanik": "golge", "zaman": "gece_yarisi", "yer": "degirmen", "sebep": "adak_unutmak" },
  "open": ["iz", "tanik", "zaman"],
  "letter": {
   "body": "Hürmetli Efendim,\n\nIlıca’da kırk yıldır taş döndürürüm. Ölçeğim doğrudur, sorulursa.\n\nBu hafta arkta bir adam çıkardık, Feyzullah. Saçına yosun dolanmış, ayağında saz. Köy borcundan kendini attı diyor. Feyzullah benim ölçeğimi de ölçmüştü, bunu yazıyorum ki sonra yazmadı demeyin.\n\nBabam her harman sonu bir şey yapardı. Ben bıraktım, kimseyi ilgilendirmez.\n\nÇark geceleri başka dönüyor. Bunu yazmayacaktım. Yarın gece sıra İhsan’ın babasında, çuvalını getirip başında bekleyecek. Kalma diyemiyorum, sırası sırasıdır, ekmek parası.\n\nGelecekseniz yarın gelin.",
   "sign": "Fehmi Usta, ark başından"
  },
  "clues": {
   "iz": "İçerideki tahta döşeme hâlâ kurumamış. Biri çıplak ayakla basmış, arktan gelip un çuvallarına kadar uzanıyor, çuvalların önünde durup dönüyor. Basılan yerde un hamur olmuş. İzlerin biri rafın dibinde bitiyor. Raftaki ölçeği kaldırıyorsun: köylüye geri verilen unu ölçen kap bu. Dibine sonradan ince bir tahta çakılmış, çivisi yeni, iki parmak yer kapıyor. Çırak İhsan omzunun üstünden bakıyor, sonra gözünü kaçırıyor.",
   "tanik": "Çırak İhsan fısıldıyor: “Duvarda bir karartı gördüm, tavana kadar, eni yok. Lamba kıpırdamıyordu, o yürüyordu. Kimin diye baktım, karşısında kimse yoktu. Feyzullah o gece kendi kantarıyla gelmişti, kapıda Usta’ya ‘Üç yıldır saydım’ diyordu. Karartı Feyzullah’ın arkasına geçti. Usta beni ‘Git yat’ diye içeri yolladı. Köye bir şey söyleme dedi, ağzıma bir lira koydu.”",
   "zaman": "Bekçi Ferhat köprünün taşına oturuyor: “Günün döndüğü saatti, horozlara daha çok vardı. Her gece o vakit bu köprüden geçerim, şaşmam. Karısı Gülsüm erken çıktı diyor, demek kapıda oyalanmış. Ben Feyzullah’ı ark kıyısında gördüm, kantarı elinde. Çark durdu. Kırk yıldır o saatte durmaz bu çark. Sonra Fehmi Usta’nın lambası söndü. Biri suda çırpınırken lamba söndüren adam ne yapıyordur, sen söyle.”"
  },
  "closed": {
   "kurban": "Gülsüm kocasının üstünü kendi elleriyle yıkamış, giysilerini yakmış. Ne ile uğraştığını gösterecek bir parça kalmamış.",
   "yer": "Fehmi Usta o sabah ark başını kürekle açtırmış, kapağı yeniden çaktırmış. Su akıyor, bakılacak çamur yok.",
   "sebep": "Eski usulü Fehmi’nin babası bilirdi. Otuz yıl önce öldü, oğlu mezarına gitmiyor, o yana bakmıyor."
  },
  "gidisat": [
   "Bu sabah çuvalların ağzında yosun vardı. Fehmi Usta çıkarıp suya attı, attığı yerde durdu.",
   "Gülsüm çocuklarını komşuya bıraktı. Akşamdan beri ark kıyısında oturuyor.",
   "İhsan’ın babası çuvalını sırtladı, sırasını bırakmıyor. Lambanın önünden bir şey geçti, alev kıpırdamadı."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Fehmi Usta’ya ölçeğin dibini sor",
   "text": "Fehmi Usta ölçeği avucuna alıyor, çiviye baş parmağını sürüyor. “Üç yıl önce kapağı sel aldı. Yenisi için borç ettim.” Bir süre çarka bakıyor. “İki parmak. Kimse iki parmak için ölmez, dedim.” Ölçeği yerine koymuyor, tezgâha bırakıyor. “Kantarını arktan ben çıkardım. Gülsüm’e götürmedim, daha duruyor.”"
  },
  "sir": {
   "q": "Feyzullah o gece neden geldi?",
   "right": "Fehmi’nin ölçeğindeki hileyi yüzüne vurmaya",
   "wrong": ["Borcunu ödeyemeyip suya atlamaya", "Borcuna karşılık Usta’dan veresiye un istemeye"]
  },
  "sahne": "Gece yarısı değirmendesin. Lamba kısık, Fehmi Usta ayakta, ölçek elinde. Taş dönüyor. Sonra çarkın sesine başka bir şey karışıyor, ıslak, boğazdan, gülmeye yakın. Duvarda kara bir gölge çuvallara uzanıyor. Alev kıpırdamıyor. Kapağın altından su sızıyor, döşemede yayılıyor, ayakkabına kadar geliyor.",
  "kovma": "Fehmi Usta ölçeğin demir kasnağını söküyor, sen milin altına çakıyorsun, kapının üstüne eski nalı asıyorsun. İhsan’ın dağdan getirdiği ardıç taşın üstünde tütüyor. Su geri çekiliyor, çark bir an duruyor, sonra kendiliğinden dönmeye başlıyor. Sabah Fehmi Usta ilk unu bir avuç alıp arka atıyor. Eli titriyor.",
  "yanlis": "Su elindekine aldırmadan döşemeye yayılıyor. Gece yarısı çark yine duruyor. İhsan’ın babasını sabah arkta buluyorlar, saçında yosun, çuvalı sırtında. Fehmi Usta ölçeği yerine koyuyor. Çırak İhsan o gün çekip gidiyor, eşiğe bir lira bırakıyor.",
  "cevap": {
   "tam": "Hürmetli Efendim,\n\nHesap ettim, iki parmak üç yılda otuz bir çuval eder. Köy meydanında söyledim. Her ay birine bir çuval götürüyorum, iki buçuk yıl sürer.\n\nGülsüm’ün çuvalını tarttı, yarısını geri verdi. “Feyzullah’ın hesabı senden doğruydu” dedi. Kantarını arktan ben çıkarmıştım, onu da götürdüm. Kapıda aldı, kolunu eteğiyle sildi, içeri girdi.\n\nİlk avucu artık suya atıyorum, babam nasıl attıysa.\n\nFehmi",
   "eksik": "Hürmetli Efendim,\n\nÇark temiz dönüyor. Köy, Feyzullah borcundan kendini attı diyor, Gülsüm’e de öyle bakıyorlar. Gülsüm’ün çuvalını yine ben ölçtüm, sesini çıkarmadı. Ölçeğim yerindedir.\n\nFehmi",
   "gec": "İhsan’ın babası o gece arktan çıkarıldı. Sırtındaki çuval kurumuştu."
  },
  "kenar": "Un ölçerken dibine de bakacaktım. Kırk ölçek geçti elimden, hiç bakmadım."
 },
 "sahmeran": {
  "village": "Hacıbey",
  "chosen": { "kurban": "delikanli", "iz": "deri", "tanik": "yilan", "zaman": "dolunay", "yer": "magara", "sebep": "kiymak" },
  "open": ["iz", "tanik", "sebep"],
  "letter": {
   "body": "Beyim,\n\nOğlum Emin yirmi iki gündür yok. Kuyucudur. Emin’im, terliğini kapının yanına koydum, ayağın üşümesin.\n\nKusura bakmayın, onunla konuşuyorum.\n\nBir kere kayboldu, üç gün sonra döndü, bakışı başka. Sordum, “Sorma ana” dedi. Bir gece kalktı, ay aydınlığında kuyunun ağzına oturdu. Sonra gitti.\n\nAğabeyi İskender kazmasını hâlâ yıkıyor. Emin ondan iyi su bulurdu, bunu söylemek bana düşmez.\n\nKomşunun oğlu Erol dün kuyu başında uzun uzun durmuş. Annesi çekip getirmiş. Yarın kim çekecek bilmiyorum.\n\nEmin’im, su soğuksa dön.",
   "sign": "Emin’in anası Esma"
  },
  "clues": {
   "iz": "Kuyunun ağzındaki taşta, ipin geçtiği yerde bir kol boyu ince bir kabuk asılı. Saydam, kuru, pulları birer birer belli, içinden çıkan onu çorap gibi tersyüz bırakmış. Çekip bakıyorsun, aşağıda bir tane daha var. Üçüncüsünü İskender’in kapısının dibinde buluyorsun, uçları birbirine düğümlenmiş, bir el değmiş. İskender kazmasıyla geçiyor, üstüne basmamak için adımını uzatıyor. Sormadığın hâlde “Rüzgâr getirir” diyor.",
   "tanik": "Erol anasının yanında gözünü yerden kaldırmıyor: “Emin’le kuyu başındaydık. Taşın altından bir yılan çıktı, kolum kadar kalın. Sonra bir tane daha, sonra çok. Hepsi aynı yana bakıyordu, Emin’e. Emin eğildi, bir şey söyledi, yılanlar gitti. Ne dedin diye sordum. ‘Sen sormadın say’ dedi. İskender Ağabey uzaktan bakıyordu, kazması omzunda, ağzı kapalı, yüzü bembeyaz.”",
   "sebep": "Feyyaz Dede başını sallıyor: “İş üç ay önce başladı. Bu köyde kuyu başındaki yılana el kalkmaz. Birini ikiye bölüp başını taşın üstüne koymuşlar, Emin’in bulduğu suyun başında. Ağa o suyun parasını Emin’e saydı, ağabeyine saymadı. Kazmanın ağzına bak derim, ama yıkanmış olur. Üç aydır yıkanıyor.”"
  },
  "closed": {
   "kurban": "Erol’un yaşıtlarını soruyorsun, gurbete gitti diyorlar. Anaları ağzını açmıyor, kapılarında birer çift ayakkabı duruyor.",
   "zaman": "Emin’in gittiği geceyi soran yok. Esma günü karıştırıyor, sayarken parmağıyla gökyüzünü gösteriyor.",
   "yer": "Emin’in kazdığı kuyunun dibinde yana açılan oyuğu İskender taşla örmüş. “Göçmesin” diyor, inmeni istemiyor."
  },
  "gidisat": [
   "Erol sabah kuyunun başında uyandı. Nasıl geldiğini bilmiyor.",
   "Esma’nın kapısında bir gömlek bulundu. İçeri aldı, terliğin yanına koydu.",
   "Erol dün gece yatağında yoktu. Kuyu başında bir terlik duruyor."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "İskender’e kazmayı sor",
   "text": "İskender bezi kazmanın ağzında gezdirmeyi bırakmıyor. “Ağa suyun parasını Emin’e verdi. Üç yıl ben kazdım, suyu o buldu. Köyde kazma tutan bir ben miyim?” Bezi sıkıyor, su akmıyor, yine sıkıyor. “Gömleği kapıma kim bıraktı, sen söyle.” Sesi kısılıyor. “Anam oğluna yemek koyarken bana da koyuyor. Bunu da sor.”"
  },
  "sir": {
   "q": "Kuyu başındaki yılanı kim öldürdü?",
   "right": "Ağabeyi İskender, suyu kardeşine çok görüp",
   "wrong": ["Emin, kazarken görmeden kazmayla", "Komşunun oğlu Erol, korkusundan"]
  },
  "sahne": "Ay dolu, kuyunun başındasın. Ağız kendiliğinden aydınlanıyor, su altından ışık veriyor. İskender yanında soluğunu tutmuş. Aşağıdan tatlı, ağır bir kadın sesi yükseliyor: “Onu bana bıraktın. Seni de isterim.” Taşların arasından yılanlar çıkıyor, ayağının üstünden geçiyor. Suyun içinde taç gibi bir halka dönüyor.",
  "kovma": "İskender kazmayı kuyuya bırakıp ağzını açmadan diz çöküyor, Esma avucunu oğlunun ağzına kapatıyor. Sen kuyuya eğilip “Destur” diyorsun, sonra sözünü veriyorsun: gördüğün kimseye anlatılmayacak. Yılanlar taşların altına çekiliyor, ışık sönüyor. Sabaha karşı ipe bir el asılıyor. Emin çıkıyor, sesi yok.",
  "yanlis": "Kuyunun başında bir söz fazla söyleniyor. Sabah orada iki gömlek buluyorlar, İskender’in yatağı boş. Esma kapının yanına ikinci terliği koyuyor, ikisini yan yana düzeltiyor. Ay bir daha dolduğunda Hacıbey’de evlenecek oğlan kalmıyor.",
  "cevap": {
   "tam": "Beyim,\n\nEmin döndü, terliğini giydi. Üç aydır sormuyorum, sormamaya söz verdik.\n\nİskender kazmasını kırdı, ağanın parasını kardeşinin önüne koydu. Emin bakmadı. Sofrada ikisinin arasına kaşık koyuyorum, ikisi de uzanmıyor.\n\nÇeşme başında yılanlar Emin’in ayağının üstünden geçiyor, dokunmuyor. Geceleri elini ağzına kapatıp uyuyor, kendi eliyle.\n\nEsma",
   "eksik": "Beyim,\n\nEmin döndü. Köy yılanı onun öldürdüğünü söylüyor, İskender de susuyor. Emin’in ağzından çıkamaz, söz vermiş. Köyde yüzüne tüküren oldu, bana bakıp sustu. Sofrada ikisine de kaşık koyuyorum.\n\nEsma",
   "gec": "Erol’un terliği kuyunun başından alınmadı. Anası her sabah gidip düzeltiyor."
  },
  "kenar": "Susacaksan hepten sus. Yarım sustum bir kere, o kış. Bedelini başkası ödedi."
 },
 "uor": {
  "village": "Tepecik",
  "chosen": { "kurban": "hane", "iz": "dagin", "tanik": "olu", "zaman": "ayni_saat", "yer": "yol", "sebep": "haksiz_olum" },
  "open": ["kurban", "tanik", "zaman"],
  "letter": {
   "body": "Bana mektup yazmak düşmez. Mezarcıyım, toprak açarım, ölçüsünü bilirim.\n\nFevzi’yi bu güz ben koydum. Boyu bir yetmiş, derinlik bir altmış, yeri düzgün, taşı dik. Toprağımda kabahat yok, bunu önce yazıyorum.\n\nFevzi’nin evinde üç aydır kimse uyumuyor. Karısı İffet, anası, iki kızı. Hasta değiller, ben baktım, ölü bakmaktan anlarım.\n\nAt sonra bulundu. Nerede bulunduğu beni ilgilendirmez, ben ölü işine bakarım.\n\nKüçük kız bu gece yatağını kapının dibine istemiş. Gelin. O yaşta çocuğa mezar kazdım, ölçüsünü bilirim, bir daha bilmek istemem.",
   "sign": "Mezarcı Eyüp, Tepecik"
  },
  "clues": {
   "kurban": "Fevzi’nin evinde dört yatak bir odaya yanaşık serilmiş. İffet, kayınvalidesi, iki kız: yüzleri aynı renk. Ateşleri yok, iştahları yerinde, ama üç aydır hiçbiri sabaha kadar gözünü kapatmamış. Küçük kız ayakta uyuyor. Komşulara bir şey olmuyor, yalnız bu çatının altındakilere. İffet köşedeki çuvalı gösteriyor: “Gani Ağa’nın adamı getirdi. Ağa o atı alacaklısına verecekti, kocama ‘çaldı’ dediler. Hırsız evine un neden gelir, ben de bilmiyorum.”",
   "tanik": "Büyük kız Filiz sesini alçaltmıyor: “Babam her gece kapıya geliyor. Sağ gibi, şapkası başında, yüzü temiz, hiç ezik yeri yok. Önce beni çağırıyor, sonra kardeşimi, sonra anneme ‘İffet’ diyor. Kapıyı açmıyoruz. ‘At ağılda’ diyor. Hangi ağıl diye sordum bir gece. Gani Ağa’nın arka ağılını tarif etti, kapısındaki kırık tahtaya kadar.” İffet kızının ağzını eliyle kapatıyor.",
   "zaman": "Eyüp bir köstekli saat çıkarıyor, camı kırık: “Fevzi’yi yıkarken cebinden aldım. Üçü yirmi geçe durmuş. O da üçü yirmi geçe geliyor, bir gece şaşmadı. Nazire Ebe bu saati bir gece eline aldı, kulağına götürdü, ‘Duruyor’ dedi, geri verdi. Jandarmaya göstermedim. Adamlar atı aramaya kaçta çıktı, kim biliyor. Benim işim toprak.” Saati cebine koyarken eli camı buluyor."
  },
  "closed": {
   "iz": "İffet her sabah gün doğmadan odayı toplayıp sandıkları kapatıyor. Köy zaten konuşuyor, görünsün istemiyor.",
   "yer": "Fevzi’nin düştüğü yeri Gani Ağa taş döktürüp genişletmiş. Yol yenilendi diyorlar, bakacak toprak kalmamış.",
   "sebep": "Köyün en yaşlısı Gani Ağa’nın babası. Yalnızca oğlu yanındayken konuşuyor."
  },
  "gidisat": [
   "Küçük kız yatağını kapının dibine çekti. İffet geri çekti, sabah yine oradaydı.",
   "Gani Ağa’nın adamı bir çuval un daha getirdi. Eşikte bıraktı, içeri bakmadı.",
   "Üçü yirmi geçe küçük kız kapıyı bir parmak araladı. İffet son anda yetişti."
  ],
  "yuzlesme": {
   "after": "tanik",
   "ask": "Gani Ağa’ya arka ağılı sor",
   "text": "Gani Ağa tespihini çekiyor. “At kendi döndü. Hayvandır, yularını koparır, gelir.” Yeni dökülen taşlara bakıyor. “O adamlara git arayın dedim, taş atın demedim.” Tespih bir yerde takılıyor, başa dönüyor. “Alacaklım o hafta kapımdan boş gitti, bunu bütün köy bilir. Başka ne bilir, bilmiyorum.”"
  },
  "sir": {
   "q": "Fevzi’nin çaldığı söylenen atı kim sakladı?",
   "right": "Gani Ağa, borcunu ödememek için",
   "wrong": ["İffet, yoksulluktan, kocasına söylemeden", "Mezarcı Eyüp, adamların peşini kesmek için"]
  },
  "sahne": "Üçü yirmi geçe İffet’in evindesin. Dört kişi yataklarında kıpırdamıyor. Kapı çalınmıyor. Dışarıdan yorgun, pek tanıdık bir ses: “Filiz. Kızım. İffet.” Aralıktan bakıyorsun. Şapkalı bir adam, yüzü temiz, eşiğin taşına basmıyor. Arkanda raftan bir kap kendi kendine iniyor, yere konuyor, sonra bir tane daha.",
  "kovma": "Eyüp küreğiyle tuzu eşiğe, sonra yolun Fevzi’nin düştüğü yerine seriyor. İffet ardıç dalını sacda yakıp dumanı odaya, çocuklarının saçına veriyor. Ses eşiğin önünde bir süre daha adları sayıyor, sonra kesiliyor. Küçük kız o sabah öğlene kadar uyuyor. Kimse uyandırmıyor.",
  "yanlis": "Eşiğe koyduğun şey sesi kesmiyor. Üçü yirmi geçe sandıklar yere devriliyor, kapı menteşesinden iniyor. Sabah İffet çocukları toplayıp gidiyor. Fevzi’nin anası evde kalıyor. Kapının önünde oturuyor, adını söyleyen sese artık usulca cevap veriyor.",
  "cevap": {
   "tam": "Bana mektup yazmak düşmez.\n\nJandarmaya gittim, yıkarken ne gördüğümü söyledim, taş yaralarını da saydım. Gani Ağa üç ay yattı, çıktı, at yine ahırında. Hakkın ne kadarı alındı, onu ölçemem.\n\nİffet uyuyor. Küçük kız üçü yirmi geçe kalkıp kapıya oturuyor. Babası çağırmıyor diye ağlıyor.\n\nEyüp",
   "eksik": "Bana mektup yazmak düşmez.\n\nEv uyuyor. Fevzi köyde hâlâ at hırsızı, kızlarına da öyle diyorlar. Gani Ağa mezarına taş yaptırdı, parasını verdi. Helal olmadığını biliyorum. Aldım.\n\nEyüp",
   "gec": "Küçük kız bir gece kapıyı açtı. Artık kimseyi adıyla çağırmıyor."
  },
  "kenar": "Tuzu eşiğe döktüm, çocuk uyudu. Anasına cevap yazacaktım. O mektup hâlâ burada."
 },
 "sulmus": {
  "village": "Meşeli",
  "chosen": { "kurban": "yolcu", "iz": "kul", "tanik": "golge", "zaman": "aksam", "yer": "yol", "sebep": "yalniz_yol" },
  "open": ["kurban", "zaman", "sebep"],
  "letter": {
   "body": "Beyim\n\nBen Elif. On bir yaşındayım. Eğitmen Efendi okumayı öğretti. Yazı yeni. Yavaş yazıyorum.\n\nAmcam Ethem çarpıldı. Yüzü yana gitti. Konuşamıyor. Ağzı açık duruyor. Yengem İnci ağlıyor.\n\nBabam öldü annem öldü ben amcamda otururum. Amcam kasabaya kâğıt yaptırmaya gitti. Bana kâğıdı göstermedi. Sen okursun dedi güldü.\n\nAmcam iyi adam. Bana ekmek verir.\n\nYengem yarın ilaç için kasabaya gidecek. Tek gidecek. Yol kötü.\n\nBen bir şey gördüm ama onu yazmayı daha bilmiyorum.\n\nÇabuk gelin.",
   "sign": "Elif"
  },
  "clues": {
   "kurban": "Ethem minderde oturuyor. Yanağı kulağa doğru çekilmiş, dili dönmüyor, gözü sana bakarken öbür yana kayıyor. İnci “Bu yolda gece yürüyene olur” diyor. “Geçen yıl bir at satıcısı, kasabadan gece dönen bir tahsildar, ikisi de böyle bulundu.” Ethem’in ceketinin iç cebi dikili. Söküyorsun: mühürlü bir kâğıt. Elif’in merhum babasının adı, “tarla” kelimesi, altı boş imza yeri. Elif kapıdan bakıyor.",
   "zaman": "Elif parmağıyla pencereyi gösteriyor: “Ortalık kararırken çıktı. Gün bitmişti, lamba daha yanmamıştı. Yengem bu vakit gidilmez dedi. Amcam sabah memura yetişeceğim dedi. Sonra köyün önünden üç kere geçti. Ben saydım. Üç kere aynı taşın yanından, hep aynı yöne. Bizi görmedi. Elinde kâğıt vardı, sıkıyordu. Ben kâğıdı gördüm. Adımı gördüm sandım. Daha iyi okuyamıyorum.”",
   "sebep": "Fikriye Nine kaşlarını çatıyor: “O yola gün bittikten sonra girilmez. Gireceksen yoldaş alacaksın. Ethem’e söyledim. ‘Bu işe yoldaş alınmaz’ dedi. Ne işin varmış ki yanına kimseyi alamıyorsun? O kızın babası ölünce tarlası kimde kaldı, köyde kimse konuşmaz. Kız büyüyor. Okuyor da.”"
  },
  "closed": {
   "iz": "İnci ceketin dışını üç kere yıkamış, kokusu gitmeyince şalvarı ocağa atmış. Bakacak bir şey bırakmamış.",
   "tanik": "O yolda ne gördüyse Ethem gördü. Söyleyecek ağız yana kaymış duruyor.",
   "yer": "Ethem’in bulunduğu yeri sordun. Onu getiren satıcı köye uğramadan geçip gitmiş."
  },
  "gidisat": [
   "Ethem bugün suyu tutamadı, ağzının kenarından aktı. Elif sildi.",
   "İnci çarığını yağladı, ilaç parasını mendile bağladı.",
   "İnci gün kararırken yola çıktı. Elif arkasından bir süre yürüdü, geri yolladı."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "İnci’ye kâğıdı göster",
   "text": "İnci kâğıdı alıyor, okuyamıyor, ters çeviriyor. Elif’e bakıyor, Elif yün sarıyor. “Bu çocuk bunu okuyabilir mi?” diye soruyor, sesi duyulmasın diye. Kâğıdı koynuna sokuyor. “Üç yıldır o tarlanın arpasını yiyoruz. Çocuk da yiyor.” Kapıya gidip dönüyor. “Sen bunu kendine sakla. Okumayı yeni öğrendi.”"
  },
  "sir": {
   "q": "Ethem o akşam neden yola çıktı?",
   "right": "Elif’in tarlasını kendi adına geçirmeye",
   "wrong": ["Hasta karısına kasabadan ilaç almaya", "Elif’i kasabadaki okula yazdırmaya"]
  },
  "sahne": "Akşam çöküyor, yol ayrımındasın. Elif’in verdiği fener elinde. Yol dümdüz uzanıyor, sonra tanımadığın bir yol oluyor. Üçüncü kez aynı taşın yanından geçiyorsun. Önüne kara bir gölge düşüyor, arkanda kimse yok. Yanık ot kokusu ağzına doluyor. Çömelip bakıyorsun: avuç avuç kül, daha sıcak.",
  "kovma": "Eğitmen Efendi’den alınan kurşunu sacda eritiyorsun, Elif kabı Ethem’in başının üstünde tutuyor. Kurşun cızırdayıp suyun dibinde eğri bir parça olarak donuyor. Çene yerine oturuyor. Yol ayrımında ardıç dallarını sen yakıyorsun, Elif dumanı üfleyerek yola veriyor. Eve döndüğünüzde Ethem’in ilk sözü kısa: “Kâğıt.”",
  "yanlis": "Ethem’in yüzü yerine gelmiyor, sol gözü kapanmaz oluyor. İnci gün kararırken yola çıkıyor, sabah onu da aynı taşın yanında buluyorlar. Elif iki kaşıkla iki ağzı besliyor. Tarla kimde kaldı, soran yok.",
  "cevap": {
   "tam": "Beyim\n\nAmcam iyileşti. Kâğıdı ocağa attı. Atma dedim. Tarla senin dedi ağladı. Ben ocağa baktım. Yengem elimi tuttu.\n\nHarflerin hepsini öğrendim. O gün ne gördüğümü şimdi yazabilirim. Yazmıyorum.\n\nKâğıdın kenarı yanmadan önce adımı okudum. Kendi adımı ilk orada okudum.\n\nElif",
   "eksik": "Beyim\n\nAmcam iyileşti. Köy karısına ilaca gitti diyor. Amcam bana sarılıyor. Tarlayı sordum, çocuğun işi değil dediler. Yengem gözümün içine bakmıyor. Okumaya devam ediyorum. Kâğıdı arıyorum.\n\nElif",
   "gec": "Yengem yoldan dili tutulmuş döndü. Yemeğini ben yediriyorum."
  },
  "kenar": "Çarpılanın önce cebine bak, sonra yüzüne. Kurşun ne gördüğünü söyler, nereye gittiğini söylemez."
 },
 "ekiniyesi": {
  "village": "Gökçeli",
  "chosen": { "kurban": "ciftci", "iz": "kuru", "tanik": "kocakari", "zaman": "harman", "yer": "tarla", "sebep": "adak_unutmak" },
  "open": ["kurban", "iz", "sebep"],
  "letter": {
   "body": "Efendim,\n\nBunu sol elimle yazıyorum, sağ tutmuyor, kusura bakmayın.\n\nGökçeli’de buğday gitti. Yığdık, altın gibiydi, kalktık bir sabah, hamur tutmuyor. Gazi Ağa’nın da gitti, benim de gitti. Kilerde elimizle ovduğumuz tane toz oluyor.\n\nGazi Ağa kocam ölünce beni tarladan çıkardı, ırgatlığa düştüm. Bunu köy unuttu, ben unutmadım.\n\nSon kalan yerden en son ben çıktım o gün, bunun önemi yok.\n\nHaftaya tohumu toprağa atacaklar. O da giderse üç çocuğumun bu kış boğazından bir şey geçmez. Kimse bana bir şey sormasın diye size yazıyorum.",
   "sign": "Fatma, Gökçeli harmanından"
  },
  "clues": {
   "kurban": "Irgatlar duvarın dibinde oturuyor, altı kişi. Ateşleri yok, ama orak tutan elleri açılmıyor, derileri kök gibi çatlamış. Irgatbaşı Güngör “Evde oturanın eli sağlam” diyor. “Kimin eli ekine değdiyse onun. Biçen, bağlayan, döven süren. Çocuklar bile, sap taşıyan çocuklar.” Sana doğru eğiliyor. “Fatma’ya bak. O solak, oraktaki el sol. Sağ eliyle sap tutar. Tutan el kurudu.”",
   "iz": "Harman yerinin çevresindeki yonca dün yemyeşilmiş, bugün sarı saman. Parmağınla sıkıyorsun, toz oluyor. Tek gecede olmuş. Yan bahçede fasulye sırıklarda kurumuş, kabaklar yatmış. Gazi Ağa’nın tarlası da, dul Ganime’nin bir karışlık bahçesi de. Hiç ayırmamış. Fatma bahçenin başında duruyor, Ganime geçince başını çevirip kuru sırıkları sayıyor.",
   "sebep": "Fevziye Nine kuru bir sapı parmağında döndürüyor: “Son demet ayakta bırakılır, örülür, onun payıdır. Bu yıl tarlanın ortasında demet yok, kökünden biçilmiş. Unutmuşuz diyorlar. Ben unutulduğunu sanmıyorum. Bu sap oradan, ağzı sağa yatmış, sağlak biçse sola yatar. Bu köyde iki solak var, biri sekiz yaşında. Nazire Ebe her harman bir başak çiğneyip tükürür, giderdi. Bu yıl gelmedi.”"
  },
  "closed": {
   "tanik": "Akşam tarlada kim gördü, soruyorsun. Bir çocuk bir kadına selam verdiğini söylüyor, anası çocuğun ağzını kapatıyor.",
   "zaman": "Ne zaman başladı diye soruyorsun, hesap Gazi Ağa’nın kâtibinde. Kâtip kasabaya inmiş.",
   "yer": "Gazi Ağa sabahtan tarlayı sürdürmüş, ortadaki yer alt üst olmuş. Bakılacak yer bırakmamış."
  },
  "gidisat": [
   "Tohumluk çuvalı açıldı, ekşi kokuyordu. Gazi Ağa ambara kilit vurdu.",
   "Fatma’nın küçük oğlu sabah sofrada ekmek sordu. Kimse cevap vermedi.",
   "Tohumu bu sabah attılar. Öğlen toprak açıktı, tohum üstte duruyordu."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "Fatma’ya sol elini sor",
   "text": "Fatma orağı dizine koyuyor, bileği taşını sürmeye başlıyor. “Kocam öldüğünde Gazi Ağa tarla benim dedi. Üç gün içinde evi boşalttık. Yedi yıl oldu, onun ırgatlığına gittim.” Taşı bırakıyor. “Hakkı alınanın neyi gittiğini ben bilirim. Ganime’nin bahçesi neden gitti, onu bilmiyorum. Onu sen söyle.”"
  },
  "sir": {
   "q": "Son demete orağı kim vurdu?",
   "right": "Fatma, Gazi Ağa’dan öcünü almak için",
   "wrong": ["Gazi Ağa’nın ırgatı, usulü bilmeden", "Gazi Ağa’nın oğlu, eski usulle alay ederek"]
  },
  "sahne": "Kurumuş tarlanın kıyısındasın. Fatma yanında, sağ eli koynunda. Uzaktan bir şey geliyor, iki büklüm, samandan, yürüdükçe hışırdıyor. Harman yerinin kenarına gelip ağır ağır çömeliyor. Yığındaki demetler kendi kendine çözülüyor. Başını çeviriyor, yüzünün olacağı yerde örgü var. Fatma sol elini arkasına saklıyor.",
  "kovma": "Fatma ambarın dibinden çıkan son demeti tarlanın ortasına dikiyor, sol eliyle örüyor, “Payın” diyor, sesi çıkmıyor, bir daha diyor. Al kurdeleyi Fatma’nın kızının saçından çözüp demetin ucuna sen bağlıyorsun. Hışırtı duruyor. Sabah kurdele yerinde. Altındaki toprakta bir parmak yeşil var.",
  "yanlis": "Gökçeli’nin toprağı elindekini tanımıyor. Tohum çimlenmiyor. Bahar geldiğinde tarlalar açık kalıyor. Fatma çocuklarını ayrı ayrı akrabaya veriyor, Gazi Ağa malını satıp kasabaya iniyor. Fatma hâlâ orada, sol eliyle kuru ot kesiyor.",
  "cevap": {
   "tam": "Efendim,\n\nTarla tuttu. Son demeti bu yıl ben bıraktım, ucunda kızımın kurdelesi.\n\nGazi Ağa’nın önüne gidip söyledim, ben biçtim dedim. Bana bir dönüm geri verdi, yüzüme bakmadan. Ganime’ye bahçesinin hakkını götürdüm, almadı.\n\nSağ elim açılmadı. Kızım Ganime’nin kapısına her cuma bir yük odun götürüyor. Bana açılmayan kapı ona açılıyor.\n\nFatma",
   "eksik": "Efendim,\n\nTarla tuttu. Köy, Gazi Ağa’nın ırgatı bilmeden biçti diyor. Adamı işten çıkardılar, dört çocuğu var. Karısı geçen hafta kapıma geldi, bir tas un istedi. Verdim. Ben susuyorum.\n\nFatma",
   "gec": "Ganime’nin en küçüğü ilk karı görmedi."
  },
  "kenar": "Son demeti kim biçti diye sor, kim yedi diye değil. Bir güz ben de biçtim. Sabiha aç kalmadı."
 },
 "denizkizi": {
  "village": "Demirciler",
  "chosen": { "kurban": "denizci", "iz": "yosun", "tanik": "guzel", "zaman": "dolunay", "yer": "deniz", "sebep": "ovunmek" },
  "open": ["tanik", "zaman"],
  "letter": {
   "body": "FENER DEFTERİNDEN, Demirciler Fener Bekçiliği\n\n3 Eylül. Poyraz. Işık yandı.\n4 Eylül.\n5 Eylül. Lodos. Işık yandı. Faik dönmedi, sabah kayalarda tahta topladılar.\n1 Ekim. Poyraz. Işık yandı.\n\nEfendim, üç ayda üç adam verdik. Boş satırlara bakmayın, kalemin bittiği günlerdir.\n\nFaik’in kahvede ettiği söz bu kıyıya yakışmaz, buraya yazmam.\n\nKardeşi Ercan iki gün sonra tek çıkacak, Faik’in borcu üstünde kaldı. Işığı ben yakarım, bundan kuşkunuz olmasın.\n\nGaz kayıtlarımı sormayın. Geldiğinizde yukarı çıkmayın, merdiven çürük. Beni aşağıda, kıyıdaki taşların orada bulursunuz.",
   "sign": "Bekçi İlhan"
  },
  "clues": {
   "tanik": "Ercan ağını onarırken bakmıyor: “Faik’in kayığının yüz kulaç gerisindeydim. Kayanın yanında bir kadın gördüm. Bakınca annenin adını unutursun, elindeki küreği unutursun. Faik yüzünü çeviremedi. Ben küreğe asıldım. Asılırken fark ettim, üstümüzde fener karanlıktı. Fener hep yanar. O gece yanmıyordu, başımı kaldırdım, gördüm.”",
   "zaman": "Kayıkçı Gürsel tenekeleri kıyıya diziyor: “Ay dolduğu gece oldu, üçü de. O gecelerde su ışıl ışıldır, kayığı çıkarırsın. Ama kaya yine kayadır, fener gerekir. Bekçinin gazını ben getiririm. Ay küçülmeye başlayınca tenekeler hep biraz fazla dolu çıkıyor. Yakan adamın gazı artmaz. İlhan’ın karısı Firdevs Kadın suya gideli dört yıl oldu. O gecelerde aşağı iner, taşların orada dikilir. Bunu sana ben söylemedim.”"
  },
  "closed": {
   "kurban": "Üç adamın kayıklarını aileleri parçalayıp odun etmiş. Köyde onlardan söz edilmiyor.",
   "iz": "Kayalardan toplanan küpeşteleri İlhan sabahtan kazımış. “Çürümesin” diyor, tahta tertemiz.",
   "yer": "Geceleri nereye baktığını soruyorsun. İlhan dürbünü rafa kaldırmış, geçen yıl kırıldı diyor.",
   "sebep": "Faik’in kahvede ne dediğini soruyorsun, kahveci masayı siliyor. O gün orada olanlar birbirine bakıyor."
  },
  "gidisat": [
   "Ercan ağını bitirdi. Kayığın burnunu yeni boyadı.",
   "İlhan’ın defteri masada açık. Bu sabah bir satır daha boş.",
   "Ercan kayığı suya itti. Kıyıdan seslenen oldu, dönmedi."
  ],
  "yuzlesme": {
   "after": "zaman",
   "ask": "İlhan’a gaz kayıtlarını sor",
   "text": "İlhan tenekeye parmağıyla vuruyor, dolu ses veriyor. “Firdevs dört yıl önce buradan düştü. Ben yukarıdaydım, lambayı siliyordum, sesini duymadım.” Cama bakıyor, camda bir tuz lekesi var, sadece bir yerde. “Işık varken göremiyorsun” diyor. Neyi göremediğini sormanı bekliyor. Sormuyorsun."
  },
  "sir": {
   "q": "Ay dolunca feneri kim söndürüyor?",
   "right": "İlhan, ölen karısını görebilmek için",
   "wrong": ["Kayıkçı Gürsel, kaçak mal indirmek için", "Ercan, ağabeyinin borcunu silmek için"]
  },
  "sahne": "Ay dolu. Feneri sen yakıyorsun, İlhan yanında oturuyor, elini fitilden çekmiyor. Su dümdüz, bembeyaz. Kıyıdan uzakta Ercan’ın kayığı sallanıyor. Bir türkü başlıyor, kız sesi, sözleri çıkmıyor. Ercan kürekleri bırakıyor. İlhan pencereye gidiyor, “Firdevs” diyor. Sudan bir yüz ona doğru kalkıyor, gözlerini alamıyorsun. Firdevs’in yüzü değil.",
  "kovma": "İlhan fitili kendi eliyle sonuna kadar açıyor. Sen kıyıdan kürekle yetişip Firdevs’in al başörtüsünü kayığın burnuna bağlıyorsun. Fener sandığının tuzunu küpeşteye, Ercan’ın avuçlarına döküyorsun. Türkü kesiliyor. Yüz aşağı iniyor. Kayık kıyıya yanaşıyor, burnundaki al bez ıslak, küpeştede bir tutam yosun.",
  "yanlis": "Türkü elindekine aldırmıyor, sabaha kadar sürüyor. Ercan’ın kayığı kayalarda bulunuyor, küpeştesine yosun dolanmış. İlhan defterine “Işık yandı” yazıyor, kalemi bırakıyor, bir daha almıyor. Demirciler’de ay dolduğunda artık kayık çıkmıyor.",
  "cevap": {
   "tam": "FENER DEFTERİNDEN\n\n1 Aralık. Işık yandı.\n2 Aralık. Işık yandı.\n3 Aralık. Işık yandı.\n\nDefterde boş satır yok artık. O yüz Firdevs’in değildi, biliyorum. Ay dolunca perdeyi kendim çekiyorum.\n\nÜç aileye gidip söyledim. İkisi kapıyı kapadı. Faik’in anası oturmamı istedi, çay verdi. Kalkamadım.\n\nİlhan",
   "eksik": "FENER DEFTERİNDEN\n\nIşık yandı. Köy, o gece gaz bittiği için söndü diyor, Gürsel’e bakıyorlar. Gazı o getirirdi. Gürsel artık kahveye hiç gelmiyor. Düzeltme yazmadım.\n\nİlhan",
   "gec": "Gürsel’in yeğeni o gece çıkmıştı. Kayığı ikinci gün kayalardan toplandı."
  },
  "kenar": "Işığı söndüreni bulursan önce kimi beklediğini sor. Benim beklediğim gelmedi, mektubu da."
 },
};
