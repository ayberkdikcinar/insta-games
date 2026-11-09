// Hand-written cases, batch 1. Rules: HIKAYE_REHBERI.md; chosen/open come from tools/story-plan.json.
export default {
 "karabasan": {
  "village": "Karaağaç",
  "chosen": {
   "kurban": "uyuyan",
   "iz": "morluk",
   "tanik": "golge",
   "zaman": "ayni_saat",
   "yer": "oda",
   "sebep": "sozsuz"
  },
  "open": [
   "iz",
   "tanik",
   "yer"
  ],
  "letter": {
   "body": "Tanımadığım kişiye,\n\nYirmi iki yıldır hekimim. Cin çarpması diye bana getirilen her hastada sıtma, kansızlık ya da dayak buldum. Bunu övünmek için yazmıyorum.\n\nKaraağaç’ta dokuz yaşında Aziz adında bir çocuk var. Üç haftadır eriyor. Ateşi yok, ciğeri temiz. Dün tarttım, bu hafta bir okka daha gitmiş. Üzerindeki bulguları raporuma yazdım, raporum üzerine babası Bayram on iki gündür karakolda yatıyor.\n\nÇocuk iyileşmedi. Bayram’ın sağ elindeki dikişleri ben atmıştım, onları da ben alacaktım. Kalsın.\n\nGelirseniz annesine raporun tarihini sormayın. Bir hekimin böyle bir deftere mektup yazması, bildiği her şeyi geri alması demektir. Bu cümleyi iki kere çizdim, sonra yeniden yazdım.",
   "sign": "Dr. Cemal, Hükûmet Tabibi"
  },
  "clues": {
   "iz": "Asiye çocuğun gömleğini usulca açıyor. Göğsünün ortasında avuç kadar bir morluk, iki bileğinde dört parmak gibi duran morluklar. Kimi sarıya dönmüş, kimi dünden kalma, koyu mor. Baba on iki gündür karakolda. Hekimin raporu sedirin üstünde: “Sağ elle sıkılarak meydana gelmiştir.” Asiye okuma bilmiyor, parmağını satırın üstünde gezdiriyor. “Buraya ne yazdı?” diyor.",
   "tanik": "Asiye sesini alçaltıyor: “Bir gece başında oturdum, uyumadım. Lamba yanıyordu. Çocuğun üstünde kara bir gölge vardı, odada gölgesi düşecek kimse yokken. Aziz’in gözleri açıktı, bana bakıyordu, parmağı kıpırdamadı. Bağıramadı. Kocamın sağ eli hızarda kesildi, kapanmıyor, kaşığı solla tutuyordu. Çocuğu o elle nasıl sıksın. Hekim bey kendi dikti. Söyledim ona, ‘Biliyorum’ dedi.”",
   "yer": "Evin arka odası. Penceresi yok, tek kapısı var, sürgüsü içeriden. Asiye geceleri çocuğu buraya alıp kapıyı sürüyor, kapalı odada hava ağır, gaz kokuyor. Duvar sıvalı, tavan tahtası bütün, girecek delik yok. Raftaki reçetede hekimin yazısı: “Bayram, sağ el, sekiz dikiş, ayın 3’ü. On beşine kadar kasabada hızarda kalacak.” Asiye “İlk kötü sabah ayın altısıydı” diyor."
  },
  "closed": {
   "kurban": "Köyde bu durumda başka kim var diye soruyorsun. Bayram’ın başına gelenden sonra kimse gömleğini hekime açmıyor, hastası olan kapıyı örtüyor.",
   "zaman": "Evin tek saati Bayram’ın cep saatiydi. Jandarma üstünden aldı, kâğıda sarıp kasaya koydu.",
   "sebep": "Çocuğu her gece yatıran Bayram’dı. Başucunda ne yaptığını Asiye bilmiyor, kapı kapalı olurmuş; bilen adam da karakolda."
  },
  "gidisat": [
   "Aziz sabah kaşığı tutamadı. Asiye çorbayı parmağıyla içirdi.",
   "Asiye karakola yürüdü, dört saatlik yol. Ekmeği aldılar, kocasını göstermediler.",
   "Aziz bu sabah gözünü açtı, annesine “Amca” dedi. Öğlene kadar kimseyi tanımadı."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Hekime raporundaki “sağ el”i sor",
   "text": "Cemal Hekim gözlüğünü çıkarıp siliyor, camlar temiz. “Gördüğümü yazdım. Bir çocuğun bileğinde dört parmak gördüm, ben parmağı olan bir şey bilirim, o kadar.” Gözlüğü takmıyor, elinde kalıyor. “Birileri yapmış olmalıydı. Anlıyor musunuz? Yapmış olmak zorundaydı.” Çantasını kapatıyor, sana bakmadan: “Bayram’ın dikişlerini almaya gitmedim.”"
  },
  "sir": {
   "q": "Bayram’ı karakola kim gönderdi?",
   "right": "Cemal Hekim, elinin dikişli olduğunu bile bile",
   "wrong": [
    "Asiye, kocasından kurtulmak için şikâyet ederek",
    "Komşular, çocuğun bağırdığını duyduk diyerek"
   ]
  },
  "sahne": "Arka odada, Aziz’in başucundasın. Hekim köşede oturuyor, kendi köstekli saati dizinin üstünde. Üçe on var. Sürgü içeriden. Lamba düz yanıyor. Üçü on geçe Aziz’in soluğu kesiliyor, çocuk gözlerini açıp sana bakıyor, parmağı kıpırdamıyor. Hekim “Yok” diyor, sesi boğazında. “Burada bir şey yok.” Yorganın ortası yavaşça iniyor.",
  "kovma": "Hekimin çantasından makası alıp yastığın altına sürüyorsun. Demirin soğuğu çocuğun ensesine değince yorgan doğruluyor. Bayram’ın okuduğunu Asiye hatırlamıyor, hekim yirmi yıldır ağzına almamış. Yine de başlıyor, eğri büğrü, kelimeleri karıştırıp baştan alarak. Soluk geri geliyor. Hekim sabaha kadar susmuyor.",
  "yanlis": "Arka odada kurduğun düzen Aziz’in soluğunu açmıyor. Ertesi gün göğsünde yeni bir morluk var. Hekim raporuna ek yazıyor: “Bulgular sürmektedir.” Savcı eki okumadan dosyaya koyuyor, Bayram içeride kalıyor. Üç gece sonra arka odanın sürgüsü sabah olduğu hâlde açılmıyor. Kapıyı komşular kırıyor.",
  "cevap": {
   "tam": "Tanımadığım kişiye,\n\nAziz iki okka aldı. Raporumu kendi elimle geri çektim, yerine yazdığımı savcı okudu, “Bu ne hekim” dedi. Görevden alındım. Bayram çıktı. Beni yolda görünce selam verdi, sol eliyle. Sağı kapanmıyor.\n\nHer gece üçü on geçe uyanıyorum. Odamda kimse yok. Yine de kapıyı sürüp yüksek sesle okuyorum. Bunu rapor etmeyeceğim.\n\nCemal",
   "eksik": "Tanımadığım kişiye,\n\nAziz toparlandı, bulgular kesildi. Mahkeme bunu babanın karakolda oluşuna bağladı, raporum delil sayıldı. Bayram iki yıl aldı. Bana “Hekim bey sayesinde” diyorlar. Düzeltmedim.\n\nCemal",
   "gec": "Aziz ayağa kalktı, ama yanında biri konuşmadıkça gözünü kapatamıyor; Asiye sabaha kadar konuşuyor, sesi kısıldı."
  },
  "kenar": "Morluk gören önce evdeki erkeğe bakar, çoğu kez haklıdır. Yine de elini sor."
 },
 "carsamba": {
  "village": "Kızılöz",
  "chosen": {
   "kurban": "kadin",
   "iz": "dagin",
   "tanik": "kocakari",
   "zaman": "carsamba",
   "yer": "ocak",
   "sebep": "yasak_is"
  },
  "open": [
   "iz",
   "yer"
  ],
  "letter": {
   "body": "Efendim,\n\nAdım Cennet, on yedi yaşındayım, Kızılöz’de dokuma yaparım. Eğitmen okuma öğretti. Yazım eğriyse solak olduğumdandır, kalemi de mekiği de hep öyle çekerim.\n\nAblam Dilber kırk gündür çeyiz kilimini dokuyordu. Perşembe pazarına Cevat’ın annesi gelip kilimi görecekti, sonra düğün. Ablam gidince bu tezgâhta bir tek ben kalacağım. O gece tezgâhın başındaydım. Ablam sonra geldi, yanıma oturdu.\n\nSabah ağzı bir yana kaymıştı, sol kolu yanında duruyordu. Konuşamıyor. Annem kilimi ben bitireyim diye tutturuyor, bu hafta yine o geceye oturtacak.\n\nOturmalı mıyım, bunu söyleyin. Kilim kırk gündür niye bitmedi diye sormayın, kilimler bazen bitmez.",
   "sign": "Cennet"
  },
  "clues": {
   "iz": "Tezgâhın çevresi darmadağın. Yumaklar çözülmüş, iğler birbirine dolanmış, yün kazanı devrilmiş, yastıklar sedirin altına savrulmuş. Kilime yaklaşıyorsun. Üstteki üç karışın hiçbir yeri yırtılmamış. Atkılar birer birer, sağdan sola çekilmiş, çıkarılan ipler kendi içinde sarılmış. Bu üç karışa sabırla çalışılmış. Çekiş yönü solak bir ele gider. Etrafındaki dağınıklıkla aynı gecenin işi gibi durmuyor.",
   "yer": "Ne olduysa ocak başında olmuş. Ocağın taşları arasına bir iğ sokulmuş, küller tezgâha doğru savrulmuş, Dilber’in yemenisi ocak taşında kalmış. Külü karıştırıyorsun. Altından yarısı yanmış bir top ip çıkıyor, kilimin ipi, sıkı sarılmış. Daha altta eskileri var, kül olmuş. Bu ocağa haftalardır ip atılıyormuş. Annesi “Ocağı sabahları Cennet yakar” diyor, bunu över gibi söylüyor."
  },
  "closed": {
   "kurban": "Başka kadınların başına gelmiş mi diye soruyorsun. Kızılöz’de kadınlar o bahsi açmıyor, “Bizim evde öyle gece oturulmaz” deyip kapıyı çekiyorlar.",
   "tanik": "O gece ocak tarafına bakan tek kişi Dilber’miş, Cennet gözünü ipten ayırmamış. Dilber’in söylediği anlaşılmıyor, yazı da bilmez, Cennet de başından ayrılmıyor.",
   "zaman": "Hangi gece olduğunu sorunca annesi yatmış olduğunu söylüyor. Cennet gün yerine kilimin sırasını sayıyor.",
   "sebep": "Annesi sorunun sonunu dinlemeden tezgâhın üstüne bir örtü atıp dışarı çıkıyor. Köyde tezgâhın ne zaman kalktığı konuşulmaz, herkes bilir sayılır."
  },
  "gidisat": [
   "Annesi yeni ip getirdi. Cennet’e “Bu hafta biter” dedi.",
   "Cevat’ın annesi haber yolladı: Kız böyleyken düğün konuşulmaz.",
   "Cennet’i tezgâhın başına oturttular. Mekik elinde durdu, gün ağarıncaya kadar bir sıra atmadı, gözü ocağın yanındaki boş minderde."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Cennet’e sökülmüş üç karışı göster",
   "text": "Cennet kilime bakmıyor, kendi sol eline bakıyor. “Ablam o gece yukarıdan indi. Sökülmüş yeri gördü. Ağzını açmadı. Mekiği elimden aldı, oturdu, baştan dokumaya başladı.” Bir ipi parmağına dolayıp sıkıyor. “Bana dönüp güldü. O zaman ağzı daha düzgündü.”"
  },
  "sir": {
   "q": "Dilber’in kilimini geceleri kim söküyordu?",
   "right": "Cennet, ablası evden gidip onu bırakmasın diye",
   "wrong": [
    "Anneleri, oğlan evi az başlık verdi diye",
    "Dilber, istemediği düğün gecikip bozulsun diye"
   ]
  },
  "sahne": "Ocak başında bekliyorsun, lamba kısık. Tezgâh örtülü. Cennet örtüyü kaldırıp oturuyor, mekiği atıyor, bir sıra, iki sıra. Kapı açılmıyor, sedirin ocak tarafı yine de çöküyor. İki büklüm bir kocakarı orada oturuyor, ak saçı önüne düşmüş, elini yumağa uzatmış. Cennet başını kaldırmıyor. Yumak kucağında yavaş yavaş çözülüyor.",
  "kovma": "Dilber’in çeyiz aynasını kapıya dönük asıyorsun. Tuzu eşiğe ve ocak başına annesi serpiyor, avucundan dökülerek. Kocakarı aynaya bakıyor, elini yüzüne götürüyor. Kalkıyor, tuzun önünde ayağını geri çekiyor, geldiği yere doğru eğik gidiyor. Yumak yerde kalıyor. Cennet sökülen ipi eline alıyor, ne yapacağını bilmiyor.",
  "yanlis": "O gece tezgâh yine kuruluyor, ocak başına koyduğun şeylerin yanından yumak çözülüp gidiyor. Sabah Cennet’in de ağzı yana kaymış bulunuyor, solak eli yanında duruyor. Annesi iki kızının arasında oturuyor, ikisine de aynı kaşıkla çorba veriyor.",
  "cevap": {
   "tam": "Efendim,\n\nAblam geçen hafta “Su” dedi, anlaşıldı. Sağ eli tutuyor, sol kolu hâlâ durur.\n\nCevat başkasını aldı. Üç karışı söktüğümü anneme söyledim. Bana vurmadı, tezgâha da bir daha yanaşmadı.\n\nKilimi bitirdim. Hiçbir geceye bırakmadım. Ablamın üstüne serdim. Sağ elini o üç karışın üstünde gezdiriyor, parmağı orada duruyor. Yeri biliyor.\n\nCennet",
   "eksik": "Efendim,\n\nAblamın ağzı düzeliyor, kolu biraz kalkıyor. Düğün bozuldu. Köy, kilimi Cevat’ın annesi nazar değdirdi diye sökülmüş biliyor. Ablam bana bakıyor. Ben kilime bakıyorum.\n\nCennet",
   "gec": "Dilber’in sol ayağı da tutmadı, artık yatağından ocağa kadar kucakta taşınıyor."
  },
  "kenar": "Bir işin bitmesini kim istemez, ona bak. Sabiha’nın kilimi de yarımdır, o kıştan."
 },
 "dev": {
  "village": "Kuşluca",
  "chosen": {
   "kurban": "delikanli",
   "iz": "buyuk_iz",
   "tanik": "dev",
   "zaman": "ogle",
   "yer": "dag",
   "sebep": "izinsiz"
  },
  "open": [
   "iz",
   "tanik",
   "zaman"
  ],
  "letter": {
   "body": "NAFIA İŞLERİ, KUŞLUCA KÖY YOLU ŞANTİYESİ\nÇavuş Raporu, No: 41\n\nMevcut: 38 amele.\nEksik: 2 amele.\nEksik olanlar: 14 numara, 9 numara. Ayrılma izinleri yoktur. Yevmiyeleri kesilmiştir.\n\nAmelenin adı, yaşı, medeni hâli tarafımızdan tutulmaz. Numara yeterlidir.\n\nSu: Şantiyeye su, masrafı defterde gösterilen katırla sağlanmaktadır. Bu hususta soru sormaya lüzum yoktur.\n\nDurum: Amele arasında söylenti yayılmakta, yol durmaktadır. Müteahhit durmuş her gün için bir haftalık yevmiye kesmektedir.\n\nTalep: Söylentiyi bitirecek yetkili kişi gelsin, amele işbaşı yapsın. 23 numara ile 30 numara yarın su nöbetindedir.\n\nBilgilerinize sunulur.",
   "sign": "Çavuş Durmuş"
  },
  "clues": {
   "iz": "Patikada kocaman bir ayak izi duruyor. Üstüne uzansan sığarsın. Sert toprağa basılmış, topuk bir karış gömülmüş. Bir sonrakini on dakika yürüyüp buluyorsun. Durmuş Çavuş arkandan “Manda” diyor. Patikada başka iz arıyorsun. Amelenin çıplak ayakları her gün gidip gelmiş. İki aydır su getirdiği yazılan katırın bu toprakta tek nalı yok.",
   "tanik": "22 numara adının Bahattin olduğunu söylüyor, kimse sormamış. “Su almaya çıkmıştım. Biri oturuyordu, adam sandım. Kalktı. Bir adamın üstüne bir adam daha koy, o boyda, insan boyunun iki katı. Bana bakmadı. Yine de dizlerim gitti. Çavuş’a söyledim, adımı değil numaramı yazdı. Katır mı? Geleli katır görmedim. ‘Su yukarıda, alın gelin’ dedi.”",
   "zaman": "Yoklama defterini açtırıyorsun. Her eksik, paydostan sonraki yoklamada eksik. 14 numara öğle sıcağında, güneş tam tepedeyken çıkmış, 9 numara altı gün sonra aynı saatte. Çavuş o saatte ameleyi gölgeye almıyor, su nöbetine yolluyor, iş saati kaybolmasın diye. Defterin kenarında bir hesap: “Katır kirası, ayda on iki lira, iki ay.” Katırın bu yola çıktığına dair tek kayıt bu kenar."
  },
  "closed": {
   "kurban": "Kaybolan iki kişinin kim olduğunu soruyorsun. Defterde yalnızca numara var. Yaşlarını, evli olup olmadıklarını bilen yok, koğuşta birbirlerine lakapla seslenirlermiş.",
   "yer": "Yukarısını gösterecek kroki Çavuş’un çantasında, çanta kilitli, anahtar boynunda. “Keşif evrakıdır” diyor.",
   "sebep": "Köyün yaşlıları bu şantiyeyle konuşmuyor. Çavuş ilk gün muhtarı azarlamış, şimdi yukarısını sorana “Çavuşunuza sorun” diyorlar."
  },
  "gidisat": [
   "23 numara su nöbetinden yarım tenekeyle, ağzını açmadan döndü. Ertesi gün yukarı çıkmayı reddetti, Çavuş yevmiyesini kesti.",
   "Amele paydosta şantiyeden çıkmak istedi. Çavuş yola kazmalı iki adam dikti.",
   "Suyun son tenekesi bitti. Amele kazmaları bırakıp sıcakta toprağa yattı, kimse yukarı çıkmıyor."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Çavuşa katırı sor",
   "text": "Durmuş Çavuş defteri kapatıyor, üstüne elini koyuyor. “Katır vardı.” Çantayı sağ tarafından sol tarafına alıyor. “Müteahhit günde dört teneke su için adam verir mi sanıyorsun? Yol yapılacak.” Bir an yukarıya bakıyor, hemen indiriyor. “Yazdığım rapor doğrudur. Biri sorarsa sen de okudun.”"
  },
  "sir": {
   "q": "Amele suyu neden yukarıdan taşıyordu?",
   "right": "Çavuş, katır parasını cebine indirdiği için",
   "wrong": [
    "Müteahhit, katırın kirasını ödemediği için",
    "Amele, nöbet parası almak istediği için"
   ]
  },
  "sahne": "Öğle sıcağında yukarı çıkıyorsun, Durmuş Çavuş önde, iki teneke elinde. Kuyunun ağzına gölge düşmüş, gökte bulut yok. Gölgenin içinde bir şey oturuyor, dizleri tepe gibi, başı önünde uyukluyor. Soluk aldıkça otlar yatıyor. Dipten bir kova sesi geliyor. Çavuş tenekeleri yere bırakıyor, kalemini çıkarıyor, sonra cebine geri koyuyor.",
  "kovma": "Çavuş’u öne itiyorsun. Durmuş şapkasını çıkarıp selam veriyor, sesi çatlıyor. Kalın bir ses “Selamın olmasaydı” deyip susuyor. Aşçının çuvalından aldığın tuzu ekmeğe basıp taşın üstüne koyuyorsun. Koca el ekmeği alıyor. Sonra kuyuya uzanıp bir ip çekiyor. Ucunda 9 numara var.",
  "yanlis": "Kuyunun başında elindekini çıkarıyorsun, gölge dönüp bakmıyor. Çavuş’un tenekesi kuyuya inince kıpırdıyor. Çavuş’u göremiyorsun artık. Aşağı ikiniz iniyorsunuz. Ertesi günkü raporu başka bir kalem yazıyor: “Eksik: 4, Çavuş dahil. Gelen yetkili kişi neticeyi bildirmemiştir.”",
  "cevap": {
   "tam": "NAFIA İŞLERİ, KUŞLUCA KÖY YOLU ŞANTİYESİ\nÇavuş Raporu, No: 44\n\nGüzergâh değiştirilmiştir, yol yukarı kesimden geçmeyecektir. Katır alınmıştır, masrafı cebimden ödenmiştir.\n\n9 numara dönmüştür. Konuşmuyor.\n\n14 numara dönmemiştir. Adı Cafer’dir. On sekiz yaşındaydı, bekârdı, annesi Çorum tarafındadır. Bunu 22 numaradan sordum.\n\nDefteri baştan yazıyorum, numara yerine ad. Adını sorduğum adam önce numarasını söylüyor.\n\nÇavuş Durmuş",
   "eksik": "NAFIA İŞLERİ, KUŞLUCA KÖY YOLU ŞANTİYESİ\nÇavuş Raporu, No: 44\n\nSu işi halledilmiştir. Amele işbaşı yapmıştır. Eksikler hakkında müteahhide “Amele kaçtı” yazılmıştır, yevmiyeleri evlerine gönderilmemiştir. Katır kalemi defterde durmaktadır.",
   "gec": "30 numara o hafta su nöbetine çıkmış, dönmemiştir. Adını bilen bulunamamıştır."
  },
  "kenar": "Eksik diye yazılanın adını sor. Bazı defterlerde ad yeri boştur, benimkinde de var."
 },
 "bicura": {
  "village": "Dereiçi",
  "chosen": {
   "kurban": "hane",
   "iz": "dagin",
   "tanik": "ufak",
   "zaman": "gece_yarisi",
   "yer": "ocak",
   "sebep": "izinsiz"
  },
  "open": [
   "kurban",
   "iz",
   "yer"
  ],
  "letter": {
   "body": "Evladım,\n\nMillet Mektebi’nde öğrendim, yazım iridir. Gençlere okutmuyorum, lambayı kısıp gizli yazıyorum.\n\nBir yıldır Dereiçi’nde görümcem Bedia’nın evinde oturuyoruz. Ev oğlum Adem’e kaldı, kâğıdı temizdir, Adem öyle diyor. Bedia geçen kış ahırda yattı, kendi isteğiyle. Öldü, Allah rahmet etsin.\n\nOğlum da gelinim de bana gülüyor. “Anne, fare” diyorlar. Fare değil, gördüm. Neyi gördüğümü söyleyince kalkıp gidiyorlar. Geçen gece en küçük torunum beşiğinde yoktu, başka odada bulduk. Adem “Sen koydun” dedi. Beni aklı gitti diye kızımın yanına gönderecek, pazartesi kağnı geliyor.\n\nBen gidersem bu eve kim bakacak, onu söyleyin. Bedia’nın ahırdaki yatağını kaldırmadım, bunu kimseye söylemeyin.",
   "sign": "Behiye"
  },
  "clues": {
   "kurban": "Evin bütün halkı aynı yorgunlukta. Adem, karısı Cemile, üç çocuk, Behiye Nine: gözleri çukura kaçmış, küçükler sofrada uyuyor, Adem öğlene kadar kalkamıyor. “Fare” diyor, başka söz bilmiyor. Cemile sesini alçaltıyor: “Bedia Hala kışın ahırda yatarken ona çorba götürürdüm. Bir gün ‘Burası da benimdi’ dedi. Adem’e söyledim, ağzıma vurdu.”",
   "iz": "Bütün oda altüst. Tencereler ters çevrilmiş, un döşemeye dökülmüş, yorganlar çekilip sedirin arkasına tıkılmış, eşya darmadağın. Cemile sabah toplamış, gece yine aynı. Devrilen sandığın dibinden bir kâğıt çıkıyor: Bedia’nın evi Adem’e verdiğine dair senet, altta bir parmak izi. Mürekkep fazla, parmak yana kaymış, bir el başka bir elin üstünden bastırmış. Tarihi, Bedia’nın ahıra indiği kış.",
   "yer": "Olan hep ocak başında başlıyor. Un ilk burada dökülüyor, tencereler buradan yuvarlanıyor. Ocağın arka taşında yumruk kadar bir boşluk var. Cemile duvarı gösteriyor: “Ahır bu duvarın öbür yüzü. Bedia Hala son kışında sırtını oraya verirdi, ocağın sıcağı geçer diye.” Behiye Nine “Kırk yıl bu ocağın başı onundu” diyor. “Nazire Ebe ölü doğan çocuğunu burada aldı, çıkarken ayakkabısını uzun uzun bağladı.”"
  },
  "closed": {
   "tanik": "Gece bir şey gören büyük torun Aydın. Adem “Çocuğun aklını bozmayın” deyip onu akşamdan dayısına yollamış.",
   "zaman": "Evde saat yok. Adem “Uyuduktan sonra” diyor, Cemile “Karanlıkken”. Behiye Nine söylemek için ağzını açınca oğlu “Bırak anne” diyor.",
   "sebep": "Eve ilk girdikleri günü kimse anlatmıyor. Adem “Evimize girdik, ne olacak” diyor, Behiye Nine çay koymaya kalkıyor."
  },
  "gidisat": [
   "Ambardaki un yarıya indi. Ambarın kapısı kilitliydi.",
   "Cemile çocukları alıp anasının evine gitmek için çıkın yaptı. Adem çıkını ocağa attı.",
   "Kağnı kapıda. Behiye Nine avluda oturmuş, binmiyor. Adem elini kaldırdı, indirdi."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Adem’e senedi göster",
   "text": "Adem senede bakıyor, okumuyor. Sen bir şey sormadan başlıyor. “Bedia yaşlıydı, ev başına yıkılırdı. Ben olmasam kim bakardı?” Sesini yükseltiyor, sonra kapıya bakıp kısıyor. “Ahıra kendi gitti. Annem de oradaydı, ona sor.” Senedi katlayıp koynuna sokuyor. Arkandan Behiye Nine’nin değneği yere vuruyor, bir kere."
  },
  "sir": {
   "q": "Bedia son kışını neden ahırda geçirdi?",
   "right": "Adem parmağını zorla bastırtıp evi elinden aldı",
   "wrong": [
    "Hayvanlarından ayrılmak istemeyip kendisi gitti",
    "Behiye eski bir kavga yüzünden içeri almadı"
   ]
  },
  "sahne": "Ocak başında oturuyorsun, lamba sönmüş, közler kızıl. Gece yarısını geçiyor. Döşemenin altında bir tıkırtı, sonra tencerelerden biri kendi kendine kayıyor. Bir karış boyunda bir şey ocağın arkasından çıkıyor, başında kendinden büyük bir yemeni, eteği unu süpürüyor. Seni görmüyor. Behiye Nine’nin yatağına gidiyor, yorganı ucundan tutup çekiyor. Behiye Nine uyanık, yorganı bırakıyor.",
  "kovma": "Süpürgeyi kapının arkasına ters dikiyorsun, Bedia’nın eski süpürgesini, ahırdan getirdiler. Tuzu ocak başına Behiye Nine serpiyor, eşiğe Cemile. Yemeni duruyor. Küçük, kuru bir ses ocağın arkasında bir şey söyleyip susuyor. Yemeni kapıya doğru süzülüp çıkıyor, eşikteki tuzun üstünden geri dönemiyor. Sabah un yerinde.",
  "yanlis": "Gece yarısı tencereler yine iniyor, yaptıkların ocak başında tutmuyor. Kağnı ertesi sabah geliyor, Behiye Nine’yi aklı gitti diye götürüyorlar. O gidince ev bir gece susuyor. Sonra ambarın kapısı içeriden sökülüyor, torunlar sabah sofraya oturmuyor.",
  "cevap": {
   "tam": "Evladım,\n\nUn yerinde duruyor, çocuklar uyuyor. Adem senedi yakmak istedi, izin vermedim. Komşulara kendim söyledim. Kapılarını kapatmadılar, yalnız selamları kısaldı.\n\nBedia’nın yatağını ahırdan aldım, ocak başına serdim. Üstüne yatmıyoruz. Her akşam yastığını düzeltiyorum. Adem yanından geçerken duvara yakın yürüyor.\n\nBehiye",
   "eksik": "Evladım,\n\nEv düzeldi, un yerinde, gençler hâlâ gülüyor. Köy Bedia’yı ahıra inadına gitti diye biliyor, “Huysuz kadındı” diyorlar. Yanımda diyorlar. Ben de başımı sallıyorum.\n\nBehiye",
   "gec": "En küçük torunumun sol elinde ocak yanığı duruyor, parmakları bir daha açılmadı."
  },
  "kenar": "Ev alınca ilk gece ocağa tuz at. Eski sahibi sağsa onu da aklına getir."
 },
 "hamamiyesi": {
  "village": "Karatepe",
  "chosen": {
   "kurban": "kadin",
   "iz": "islak",
   "tanik": "golge",
   "zaman": "gece_yarisi",
   "yer": "hamam",
   "sebep": "yalniz"
  },
  "open": [
   "tanik",
   "zaman",
   "sebep"
  ],
  "letter": {
   "body": "Ben Karatepe’de Cevriye, otuz bir yıldır kese atarım. Bu köyde hangi kadının neresinde ne olduğunu kocasından iyi bilirim. Kimin karnı büyüdü, kimin kaburgası kırık, hepsi elimden geçer. Söylemem.\n\nArif’in karısı Bedriye on gündür yatıyor. Ağzı yana kaymış, dili tutulmuş, sağ eli kalkmıyor. Yirmi iki yaşında. Kocası perşembe günü onu babasının evine yollayacak, yarım kadını ne yapsın diyorlar.\n\nKonuşmasını istiyorum. İstiyorum diye yazdım, bir daha okumayacağım, okursam yırtarım.\n\nO gece niye orada olduğunu bilmiyorum. Bu yazdığımı Dudu Hanım’a göstermeyin. Ona bir borcum yok, aramızda bir şey yok, bana para gelmedi.",
   "sign": "Cevriye"
  },
  "clues": {
   "tanik": "Odun taşıyan Çetin gözünü senden kaçırıyor. “Baca tıkandı, dama çıktım, bakma niyetim yoktu. Damdaki delikten aşağı baktım. İçerisi puslu, lamba zor seçiliyordu. Kara bir gölge vardı, Bedriye’nin iki yanında dolaşıyordu, içeride kimse yokken. Bedriye tası yere koydu, ‘Cevriye Abla?’ dedi. Cevap gelmedi. Cevriye Abla’yı az önce köprüden yukarı giderken görmüştüm, elinde fener, Dudu Hanım’ın sokağına doğru.”",
   "zaman": "Bekçi Alaattin çay bardağını ısınmak için tutuyor. “Köprüye her gece aynı vakit varırım, gece yarısı. O gece de köprüdeydim, tam gece yarısı, Çetin’in bağırdığını duydum. Sonra Cevriye’yi gördüm, nefes nefese iniyordu, fener elinde. Dudu Hanım’ın evinde lamba vardı. O evde gece yarısı kim uyanık oturur, ben onu da düşündüm.”",
   "sebep": "Dudu Hanım’ın kızı Ayten, yengesi Bedriye’nin yatağını düzeltirken konuşuyor: “Kimse sırtını görmesin diye geceleri gelirdi. Cevriye Abla kapıda beklerdi, ayrılmazdı. O gece onu içeride yapayalnız bırakıp çıkmış. Annem Cevriye’ye para verirmiş, gelinin karnı büyüyor mu diye. Büyümezse Arif’e başkasını alacaktı.” Yorganı çekiyor. Bedriye’nin sırtında eski kayış izleri var."
  },
  "closed": {
   "kurban": "Geceleri başka kim gelir diye soruyorsun. Cevriye gelen kadınların adını söylemiyor. “Ben sır tutarım” diyor, gözünü senden ayırmadan.",
   "iz": "O sabah taşlara bakan olmadı. Bedriye’yi yerden kaldıran dört kadın, üstünde ne varsa yürüyüp geçmiş.",
   "yer": "Muhtar kapıya mühür vurdurmuş, anahtarı kasabaya göndermiş. Cevriye her sabah mührün önüne gelip bakıyor, geri gidiyor."
  },
  "gidisat": [
   "Bedriye çorbayı ağzının yanından akıttı. Arif sofradan kalktı.",
   "Dudu Hanım kasabadan görücü çağırttı.",
   "Perşembe. Arif kağnıyı avluya çekti. Bedriye’yi yorganıyla taşıdılar, başı yana düşüyor."
  ],
  "yuzlesme": {
   "after": "sebep",
   "ask": "Cevriye’ye o gece nereye gittiğini sor",
   "text": "Cevriye keseyi suya daldırıp sıkıyor, su akmıyor artık, yine sıkıyor. “Otuz bir yıldır bu köyün kadınlarını ben yıkadım. Kapımdan çıkanın adını kimse duymadı.” Bir süre elindeki keseye bakıyor. “Bir dil tutulacaktıysa benimki tutulmalıydı.” Keseyi çiviye asıyor. Yine alıp elinde tutuyor."
  },
  "sir": {
   "q": "Cevriye o gece Bedriye’yi neden yalnız bıraktı?",
   "right": "Gelinin karnını Dudu Hanım’a satmaya gitti",
   "wrong": [
    "Çetin’le konuşacak acele bir işi çıktığı için",
    "Ateş söndü, odun almaya gitmek zorunda kaldı"
   ]
  },
  "sahne": "Mührü söktürüp kilidi kırdırdın. Gece yarısı göbek taşının başında oturuyorsun, külhanı Çetin yakmış, taş sıcak. Cevriye kapıda, bu sefer ayrılmıyor. Kurnadan su dökülüyor, tas kimsenin elinde görünmüyor. Kuru taşın üstünde ıslak bir ayak izi beliriyor, bir tane daha, sana doğru. Buharın içinde kara bir gölge duruyor. Cevriye ağzını açıyor, sesi çıkmıyor.",
  "kovma": "Cevriye eşikten adımını atıp otuz bir yıl sonra ilk kez söylüyor: “Destur, sahibi. Kusur bizde.” Çetin kucağındaki ardıç dallarını külhana sürüyor, duman taşlara yürüyor. Bedriye’yi getiriyorlar, başında ardıç yakıyorsun. Gölge buharla beraber kubbeye çekiliyor. Bedriye ilk sesini çıkarıyor, tek kelime: “Cevriye.”",
  "yanlis": "Buharın içinde kimse sana cevap vermiyor. Çıkarken Cevriye kapıda yere yığılıyor, ağzı yana kaymış. Perşembe Bedriye kağnıyla gidiyor. Karatepe’de kadınların sırtını ovan el kalmıyor.",
  "cevap": {
   "tam": "Ben Cevriye.\n\nBedriye konuşuyor, çok değil. Babasının evine gitti, kendi isteğiyle. Dudu Hanım’a parayı sayıp geri verdim, almadı, yere koydum.\n\nKadınlara söyledim. Hepsine tek tek, keseyi elime alırken. Çoğu geri durdu.\n\nBedriye gitmeden bir kere daha geldi, gündüz. Yıkamama izin vermedi. Kapıda oturdum. Çıkarken “Burada kal” dedi. Kaldım.",
   "eksik": "Ben Cevriye.\n\nBedriye’nin dili açıldı. O gece kazan sönmüş, odun almaya gitmişim, köy öyle biliyor. Dudu Hanım’ın kapısında selam alıyorum. Kimse bana bir şey sormuyor artık.",
   "gec": "Bedriye’nin sağ eli bir daha kalkmadı; sol eliyle örtünüyor."
  },
  "kenar": "Bir köyde parası en az ebe ile natırda olur, sır en çok. Ben de bir kere para aldım."
 },
 "evren": {
  "village": "Kayabaşı",
  "chosen": {
   "kurban": "coban",
   "iz": "buyuk_iz",
   "tanik": "yilan",
   "zaman": "firtina",
   "yer": "su",
   "sebep": "adak_unutmak"
  },
  "open": [
   "kurban",
   "iz",
   "zaman"
  ],
  "letter": {
   "body": "Kayabaşı köy yolu, ölçü defteri, arka yaprak.\n\nSayın Defter Sahibi,\n\nYol ölçerim, rakam yazarım, rakamın dışında bir şey yazmayı sevmem. Kısa keseceğim.\n\nOn bir gün önce köyün üst kesiminde çaktığım altı ölçü kazığı yerinden çıkmıştır. Kazıklar insan eliyle çıkmaz derinlikteydi. İki kişi o gece kaybolmuştur. Üçüncü kişi, Cumali, geri döndü ve bana bir mesafe söyledi. Söylediği mesafe ile benim ölçtüğüm mesafe arasında iki yüz yetmiş iki adım fark vardır. Bu farkı kimseye bildirmedim.\n\nKöyün çeşmesi dün iki parmak inceldi. Muhtar “Yaz sıcağıdır” diyor. Çeşme kırk yıldır yaz kış aynı akarmış.\n\nHaritayı bu ay teslim etmem gerekiyor. O kesime ne yazacağımı siz söyleyin.",
   "sign": "Harita Memuru Celal"
  },
  "clues": {
   "kurban": "Yukarı ağılda üç çoban yatarmış. Ağıl dağılmış, taşları yamaca savrulmuş. Çoban Davut yok. On üç yaşındaki çırağı Ahmet yok. Üçüncü çoban, Davut’un kardeşi Cumali, üstü başı çamur içinde köye inmiş, bir daha evden çıkmamış. Davut’un karısı Berrin ağılın yanından kırık bir değnek buluyor, getirip sana uzatıyor. “Cumali’ye sor” diyor, “kardeşini nerede bıraktı.”",
   "iz": "Çamurda kocaman bir ayak izi var. Zincirle ölçüyorsun: boyu bir kulaç. Topuğu belli, parmak yeri silik. Ardında ikincisi yok, tek bir ayak basıp kalkmış. Celal Bey ölçüyü yazıyor, kalemi duruyor. Yamaçta bir de çarık izi gidiyor, insan ölçüsü, adımları açık, koşan bir adamın. Ağıldan çıkıp köye doğru. Cumali “Üç yüz kırk adım öbür yana, Davut’a koştum” diyor. İz öbür yana gitmiyor. Altı yüz on iki adım, köyün yoluna.",
   "zaman": "Herkes aynı geceyi anlatıyor: akşamdan kara bulut geldi, fırtına üç saat sürdü, yalnızca bu köyün üstünde, komşu köye bir damla düşmedi. Cumali’nin karısı Binnaz sen sormadan söylüyor, gözü yerde: “Fırtına başlayalı yarım saat olmamıştı, kapıyı çalıyordu. Öbür yana gidip kardeşine varacak, sonra buraya dönecek vakti yoktu. Ben hesap bilmem. O da bana baktı, ben kapıyı kapattım.”"
  },
  "closed": {
   "tanik": "Olanı gören tek kişi Cumali. Ne gördüğünü sorunca duvara dönüyor, elini kolunun üstünde uzun uzun sürüyor. Karısı “Yeter” deyip seni kapıya kadar geçiriyor.",
   "yer": "Memurun krokisinde o kesim boş: kazıklar söküldüğü için ölçü alınamadı. Köylüler oraya “Yol yok” diyor, kimse götürmüyor.",
   "sebep": "Bu köyde her yıl bir şey yapılırmış. Sorunca ihtiyarlar “Yapıldı” deyip birbirine bakıyor. Muhtarın defterinde o yılın yaprağı kesilmiş."
  },
  "gidisat": [
   "Çeşme bu sabah ip gibi akıyor. Kadınlar testiyle akşama kadar sırada bekledi.",
   "Gök bütün gün kurşuni durdu, yalnız köyün üstünde. Berrin, Cumali’nin kapısına kırık değneği dayayıp gitti.",
   "Çeşme kesildi. Kara bulut köyün üstüne indi, hayvanlar bağlarını koparıyor."
  ],
  "yuzlesme": {
   "after": "iz",
   "ask": "Cumali’ye çarık izini göster",
   "text": "Cumali parmağıyla yere bir çizgi çekiyor, köye doğru, sonra siliyor. “Davut beni omzumdan itti, ‘Kaç’ dedi.” Ağzı kuruyor. “Ahmet bağırdı, on üç yaşındaydı, ben adını biliyorum.” Sana bakmadan: “Yok, itmedi. Bunu kendim ekledim. On bir gündür her gün biraz daha ekliyorum.”"
  },
  "sir": {
   "q": "Cumali o gece ne yaptı?",
   "right": "Kardeşini ve çırağı bırakıp köye kaçtı",
   "wrong": [
    "Öbür yana koşup Davut’u kurtarmaya çalıştı",
    "Çırağın peşine düşüp yolunu kaybetti"
   ]
  },
  "sahne": "Fırtınayla beraber göl kıyısındasın. Celal Bey elinde ölçü zinciriyle duruyor, Cumali elinde meşaleyle üç adım geride. Suyun yüzü kabarıyor, dalga ortadan geliyor. Bir çınar kalınlığında bir gövde suyu ikiye ayırıyor, başı evin damından yüksek. Kıyıya dayandığı yerde çamur çöküyor, ağıldaki tek izin biçiminde. Soluduğu yağmur sıcak. Cumali’nin meşalesi titriyor, geri adım atıyor, sonra atmıyor.",
  "kovma": "Köyün bütün meşaleleri kıyıya diziliyor, Cumali en öne geçiyor. Evlerden toplanan tuz çuvallarını Celal Bey’le birlikte göle döküyorsun. Ateşin önünde gövde duruyor, tuza değince kıvranıyor, ağır ağır dibe iniyor. Sabah çeşme önce damlıyor, sonra akıyor.",
  "yanlis": "Kıyıya dizdiklerin ilk dalgada dağılıyor. Fırtına yine geliyor, bu kez ağılla kalmıyor, ilk üç evi alıyor. Çeşmenin ağzından haftalarca çamur akıyor, içilecek su kalmıyor. Celal Bey haritayı göndermiyor, ölçülecek köy kalmadı diye.",
  "cevap": {
   "tam": "Sayın Defter Sahibi,\n\nHarita teslim edilmiştir. O kesime göl çizdim, derinlik yazmadım.\n\nFark meselesini Cumali’ye bıraktım. Kendi söyledi. Berrin kapıyı açtı, dinledi, ekmeğini eline verdi, bir daha yüzüne bakmadı. Yevmiyesini Berrin’in kapısına bırakıyor.\n\nHer sabah ağıldan köye o yolu yürüyor. Altı yüz on iki adım. Geri dönerken sayıyor.\n\nCelal",
   "eksik": "Sayın Defter Sahibi,\n\nHarita teslim edilmiştir. Çeşme akıyor. Köy, Cumali’yi kardeşini aramaya koşan yiğit biliyor. Davut’un mevlidi okutuldu, onu baş köşeye oturttular. Fark defterimde durur.\n\nCelal",
   "gec": "Çeşmenin kesildiği hafta Ahmet’in annesi su getirmeye dere yatağına indi, dönmedi."
  },
  "kenar": "Kaçıp gelenlere çok rastladım. Ekmeklerini verdim, yüzlerine bakmadım. Bunu da kendime yazıyorum."
 },
 "kayberen": {
  "village": "Çalıköy",
  "chosen": {
   "kurban": "avci",
   "iz": "kan",
   "tanik": "hayvan",
   "zaman": "safak",
   "yer": "dag",
   "sebep": "fazla_av"
  },
  "open": [
   "iz",
   "tanik",
   "yer"
  ],
  "letter": {
   "body": "Bu mektubu kendim yazıyorum, bir daha yazmam.\n\nKocam Bilal altı gün önce evden çıktı, tüfeği askıda yok. Çalıköy’de herkes “Döner” diyor. Ben dönüp dönmeyeceğini bilmek istiyorum. Dönecekse hazırlık yapmam gerekir, dönmeyecekse başka hazırlık.\n\nKızım Çiçek on üç yaşında. Çelebi Ağa’nın adamı bu hafta bir daha gelecek, borcun kalanı için. Kız onun evine besleme gidecek. Bilal söz vermişti, eli kalem tutmaz, parmağını basmıştı.\n\nÇıkmadan önce ona bir şey söyledim, onu yazmayacağım. Heybesini ben hazırladım.\n\nArayacak adam bulamadım, bulmak için de uğraşmadım. Gelirseniz kapıyı ben açarım. Ne getirdiğinizi önce bana söyleyin, Çiçek duymasın.",
   "sign": "Ayşe"
  },
  "clues": {
   "iz": "Yukarı çıkan patikanın başında taşların üstünde kan var, kurumuş, damla damla. Önce bir hayvan vurulmuş sanıyorsun. Kan yukarı doğru gidiyor, gittikçe sıklaşıyor, bir kayanın önünde avuç kadar birikmiş, sonra bitiyor. Çoban Bekir kayanın yanında Bilal’in heybesini buluyor. Açıyorsun: bir somun ekmek, bir soğan. Dağda günlerce kalacak avcının heybesi bu kadar hafif olmaz.",
   "tanik": "Çoban Bekir tütününü yakamıyor, kibrit üç kere sönüyor. “Bembeyaz bir hayvan gördüm, kayalığın üstünde. Hayvan dedim, ama gözünü benden ayırmadı, hayvan öyle bakmaz. Bilal bunun peşine düştü. Üç yıldır buralarda dolaşırım, ilk kez o gün gördüm. ‘Kayalıkta ak bir şey var, Ağa’nın adamı postuna borcu silermiş’ diye Bilal’e Ayşe söylemiş. Ayşe oraları ne zaman gördü, kimse bilmez.”",
   "yer": "Çalıköy’ün üstündeki dağa çıkıyorsun. Yayla bitiyor, sarp kayalık başlıyor. İki saat tırmanıyorsun, sonra yol yok. Rüzgârın içinde biri “Su” diyor, kesik kesik. Bir adamın ancak ayakta durabileceği bir taşın üstünde bir şey kıpırdıyor. Ayşe seninle gelmedi. “Evde işim var” dedi, kapıyı kapatırken gözü dağa hiç gitmedi."
  },
  "closed": {
   "kurban": "Dağa başka kimlerin çıktığını soruyorsun. Tüfekler ruhsatsız, köyde kimse orada ne yaptığını söylemez. “Odun için” derler, hepsi.",
   "zaman": "Bilal’in hangi saatte çıktığını soruyorsun. Ayşe sabah, komşu gece diyor. Ayşe o sabah kapısını kimseye açmamış.",
   "sebep": "Bilal’in bu kış ne kadar getirdiğini ambar söylerdi. Ayşe etleri satmış, postları ocakta yakmış, ambarı süpürmüş."
  },
  "gidisat": [
   "Kayalıktaki ses dün akşamdan beri yalnız Çiçek’in adını söylüyor.",
   "Çelebi Ağa’nın adamı geldi, Çiçek’in bohçasını sordu, “Bir haftaya” dedi. Ayşe kapıda durdu, ses etmedi.",
   "Kayalıktaki ses gündüz duyulmaz oldu. Ayşe o akşam Bilal’in yatağını topladı."
  ],
  "yuzlesme": {
   "after": "tanik",
   "ask": "Ayşe’ye Bilal’e ne söylediğini sor",
   "text": "Ayşe hamur yoğuruyor, elini çıkarmıyor. “Ben kim oluyorum da adamı dağa süreyim. O kendi gider.” Çiçek kapıdan girince sesini kesiyor, gülümsüyor. Kız çıkınca: “Bir somun ekmek iki gün yeter, dediler bana. Kimin dediğini unuttum.” Hamuru yumruklamaya başlıyor. Sen çıkana kadar durmuyor."
  },
  "sir": {
   "q": "Bilal’i kayalığa kim yolladı?",
   "right": "Ayşe, kızı gitmesin diye ak hayvanı söyleyerek",
   "wrong": [
    "Çoban Bekir, postu kendisi satmak isteyerek",
    "Çelebi Ağa’nın adamı, borcu tahsil etmek için"
   ]
  },
  "sahne": "Şafaktan az önce kayalığın dibindesin, karanlık en koyu yerinde. Tepede bir ak keçi duruyor, gözünü ayırmıyor. Bilal’in sesi artık fısıltı, yine de ayağını uzatıyor, bir adım daha, keçiye doğru. Ayak taşın ucunda. Ayşe yanında, elini kaldırmıyor, bağırmıyor. Keçi başını usulca yana eğiyor.",
  "kovma": "Ayşe’nin satamadığı son çömlek yağı kayanın önüne ilk pay diye bırakıyorsun. “Şafağa kadar kıpırdama” diye sesleniyorsun, Bilal’in dizleri titriyor, duruyor. Bir süre sonra Ayşe de sesleniyor: “Kıpırdama Bilal.” Beklemekten başka yapacak iş yok. Şafak sökünce ak keçi ortada yok. Kayanın yanından bir yol görünüyor, hep oradaymış.",
  "yanlis": "Kayanın önünde yaptıkların Bilal’in ayağını durdurmuyor. Şafak sökerken ak keçi bir adım daha atıyor. Bilal de. Sabah kayanın altına kimse bakmıyor. Ayşe eve dönüp kapıyı kapatıyor. Çiçek “Babam?” diyor. Ayşe bir somun ekmek kesiyor, ikiye bölüyor, birini ona veriyor.",
  "cevap": {
   "tam": "Döndü.\n\nKolu kırık, tüfek tutmuyor. Çelebi Ağa’nın adamı geldi, Çiçek’i sordu. Bilal tarlayı verdi, parmağını geri aldı. Çiçek evde.\n\nBilal ne olduğunu kimseye anlatmadı. Bana da. Geceleri uyumuyor, yatağın içinde gözünü bana dikiyor.\n\nHeybeyi yıkadım, yerine astım. Sabah kalkınca içine bir somun ekmek konmuş oluyor. Her sabah. Ben koymuyorum.",
   "eksik": "Döndü. Köy, onu dağa Çoban Bekir’in saldığını söylüyor, posta ortak olacaktı diye. Bekir’in ahırına taş attılar. Çiçek Ağa’nın evine gitmedi. Bekir’in kızı ekmek istemeye benim kapıma geliyor.",
   "gec": "Bilal’in sağ ayağının üç parmağı kayalıkta kaldı, yürürken duvara tutunuyor."
  },
  "kenar": "Kocası dönmeyen kadına önce bak, hazırlık yapmış mı. Yaptıysa sen de sus."
 },
 "almasti": {
  "village": "Yazılı",
  "chosen": {
   "kurban": "hayvan",
   "iz": "kil",
   "tanik": "killi",
   "zaman": "aksam",
   "yer": "orman",
   "sebep": "izinsiz"
  },
  "open": [
   "iz",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Selamünaleyküm,\n\nNalbant Cavit. Yazım iri oluyor, lambam kötü, kusura bakmayın.\n\nÜç haftadır dükkâna gelen nal sayısı ikiye katlandı. Hiçbir hayvan bu kadar nal eskitmez, otuz yıldır bilirim. Sahipleri “Bütün gün bağlı duruyor” diyor. Nal başka söylüyor.\n\nMuhtar Bekir’in oğlu Asım on gün önce kasabaya giderken attan düştü, öldü. Köy bunu da o şeyin üstüne yazıyor. Yazsın. Atın sol ön nalını düşmeden dört gün önce ben çakmıştım, işimde kusur olmaz.\n\nMuhtar perşembe küçük oğlunu aynı atla yollayacak.\n\nNazire Ebe geçen güz kısrağını bu ocakta nallattı, parasını verdi, atı bırakıp yürüyerek gitti. Kısrak hâlâ bende, o da zayıflıyor.",
   "sign": "Nalbant Cavit"
  },
  "clues": {
   "iz": "Kısrağın yelesi sıkı sıkı örülmüş, çözülmüyor. Örgünün içinden keçeleşmiş bir tutam kıl çıkıyor, kızıl kahverengi, sert, birbirine yapışmış. At kılına benzemiyor. Cavit “Göster bakayım” diyor, tutamı gözüne bir karış yaklaştırıyor, sonra yanındaki çırağa uzatıyor: “Sen bak.” Çırak Bahri kılı alıyor, ustasının elini örsün kenarına götürüyor, çok alışılmış bir hareketle.",
   "zaman": "Çırak Bahri körüğü bırakıyor, sesini alçaltıyor: “Olan hep akşam karanlığında oluyor. Lamba yanmadan, ortalık seçilmezken nal sesleri yola iniyor. Usta bu saatte iş tutmaz, üç aydır akşam işini bana bırakır, çiviyi eline ben veririm. Asım’ın atını o gün akşam karanlığında tek başına nalladı, ben kasabadaydım. Bunu kimseye söylemedim.” Arkada çekiç havada duruyor, sonra iniyor.",
   "yer": "Yazılı’nın üstündeki orman yola kadar iniyor. Asım’ın düştüğü yer ağaçların başladığı dönemeç. At yola dizüstü gelmiş, toprakta sürüklenme izi var. Ormanın dibinde, çalıların arasında bir nal buluyorsun, sol ön. Çivilerden dördü eğri girmiş, biri nalın dışından boşa geçmiş. Elinde çeviriyorsun. Bu çiviyi böyle çakan, çivinin yerini görmeden çakmış."
  },
  "closed": {
   "kurban": "Başka hayvan sahiplerini soruyorsun. Güz satışı yakın, kimse malına kusur buldurmuyor, “Benimki iyidir” deyip kapıyı gösteriyor.",
   "tanik": "Geceleri hayvanların yanında yatan seyis Dilaver üç gündür ortada yok. Karısı “Askerlik işi” diyor, Dilaver’in askerliğini iki yıl önce bitirdiğini komşular biliyor.",
   "sebep": "Koruya kimin ne zaman girdiğini sorunca muhtar defteri kapatıyor. Üç aile o toprak için mahkemelik, tanıklık edecek kimse yok."
  },
  "gidisat": [
   "Nazire Ebe’nin kısrağı sabah köpük içinde bulundu. Bağı çözülmemişti.",
   "Muhtar küçük oğlu için atı dükkâna yolladı. Cavit nalı eline aldı, Bahri’den önce davrandı.",
   "Bahri dükkândan ayrıldı, çekici ocağın başına bırakıp gitti. Cavit bütün gece çivi sayıyor, elinden düşürüyor."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Cavit’in önüne eğri çivili nalı koy",
   "text": "Cavit nalı eline alıyor, baş parmağını deliklerde gezdiriyor, bakmıyor. “Temiz iş” diyor. Parmağı boş delikte duruyor. “Otuz yıl. Bu ocakta otuz yıl çivi kaçmadı.” Çekici kaldırıp örse indiriyor, örsün kenarına geliyor. Sana dönüyor, gözleri senin biraz yanına bakıyor. “Bahri’yle mi konuştun?”"
  },
  "sir": {
   "q": "Asım’ın atı neden tökezledi?",
   "right": "Cavit, gözünün görmediğini gizleyip nalı eğri çaktı",
   "wrong": [
    "Bahri, ustasına kızıp çivileri gevşek bıraktı",
    "Muhtar, hasta atı bile bile yola koşturdu"
   ]
  },
  "sahne": "Akşam karanlığında ahırdasın. Cavit bir taburede, önünde Ebe’nin kısrağı, elinde çuvaldız. Kapı aralanmadan içeri orman kokusu doluyor. Kısrak kulaklarını yatırıyor, beli iniyor, üstüne biri binmiş gibi. Karanlıkta kızıl kıllı, upuzun bir kol yelenin içinde sabırla örüyor. Cavit görmüyor, koklayarak başını çeviriyor.",
  "kovma": "Muhtarın karısı Aliye’nin kalburunu ahır kapısına asıyorsun. Kıllı gövde dönüp delikleri saymaya başlıyor. Yaklaşıp Cavit’in çuvaldızını eteğine batırıyorsun, kıpırdamıyor. Cavit eliyle yoklayarak eteği buluyor, ona alçak sesle bir şey söylüyor, duyamıyorsun. Çuvaldızı çekiyor. Gövde ormana yürüyor, kalburun önünden bir daha geçmiyor.",
  "yanlis": "Ahır kapısında denediğin şey tutmuyor. Ertesi akşam kısrağın yelesi yine sıkı sıkı örülü. Muhtarın küçük oğlu perşembe yola çıkıyor, aynı at, aynı dönemeç. Akşam karanlığında Cavit, atın yalnız döndüğünü nal sesinden anlıyor.",
  "cevap": {
   "tam": "Selamünaleyküm,\n\nÇekicimi Bahri’ye verdim. Muhtarın kapısına gittim, nalı önüne koydum, gözlerimi de söyledim. Bekir kalktı, beni elimden tutup oturttu. Vurmasını bekledim.\n\nYazım büyüyor, bundan sonra Bahri yazar.\n\nKısrak duruyor, yemi yerinde. Nazire Ebe bir gün gelir de sorar diye satmadım. Gelse de artık göremem.\n\nCavit",
   "eksik": "Selamünaleyküm,\n\nAtlar dinlendi. Bahri dükkândan kovuldu, köy Asım’ın atını onun nalladığını biliyor. Yolda bana selam veriyor. Dükkândan çekiç sesi geliyor, çiviyi artık elle buluyorum.\n\nCavit",
   "gec": "Muhtarın küçük oğlu yola çıktı, dönemeçte attan düştü; yürüyor, dizini bükemiyor."
  },
  "kenar": "Yaşlı ustaya gözünü sormak ayıptır. Ben de sormadım. Kısrağı niye bıraktığımı da kimse sormadı."
 },
 "kuyuanasi": {
  "village": "Elmacık",
  "chosen": {
   "kurban": "cocuk",
   "iz": "yosun",
   "tanik": "cagiran",
   "zaman": "ogle",
   "yer": "kuyu",
   "sebep": "yalniz"
  },
  "open": [
   "kurban",
   "tanik"
  ],
  "letter": {
   "body": "ELMACIK KÖYÜ HEYETİ KARARI\nKarar No: 3\n\n1. Köyümüzde kayıp sayısı ikidir.\n(Kenarda, başka kalemle: Üçtür. Dursun)\n(Üstü çizilmiş. Altında: Karara aykırıdır. Ahmet)\n\n2. Kayıplar, Muhtar Ahmet’in torunu Ayten ile Aza Cevdet’in yeğeni Akif’tir.\n\n3. Haneler her akşam sayılmaktadır.\n\n4. Durdane adlı kadının Heyet’e verdiği dilekçe işleme konmamıştır. Kendisinin Heyet’in kapısına gelmemesi tebliğ edilmiştir.\n\n5. Bahar adlı kız bugün eve yarım saat geç gelmiştir. Sebebini söylememektedir. Bu yazının gereği için üç gün beklenecektir.\n\nHeyet adına: Muhtar Ahmet, Aza Cevdet.\nAza Dursun: İmzalıyorum, birinci maddeye şerhim vardır.",
   "sign": "Muhtar Ahmet, Aza Cevdet, Aza Dursun"
  },
  "clues": {
   "kurban": "Evden eve geziyorsun. Elmacık’ta çocuklar her akşam sayılıyor. Ayten yedi yaşında, Akif sekiz, ikisinin de yatağı yapılmış duruyor. Köyün altında bir kapıyı Durdane açıyor, dul, tek oda. “Cahit dokuz yaşındaydı, kırk gün önce, Ayten’den önce. Nazire Ebe bu odada doğurttu, parasını da almadı. Muhtar ‘Dayısının yanına gitti’ yazdı. Dayısı yok. Kiramı veremedim, Ahmet Ağa benimle konuşmuyor.” Duvarda çocuğun boyu kalemle çizili.",
   "tanik": "Bahar, dokuz yaşında, ablasının eteğine tutunuyor: “Annemin sesiydi. ‘Bahar, Bahar, gel kızım’ dedi, adımla. Annem tarladaydı, biliyordum. Yine de başımı çevirdim. Akif de duymuş, ‘Beni de çağırdı’ demişti, annesinin sesiyle. Cahit en önce duymuştu, bana söyledi. Sonra Cahit gitti. Muhtar Dede ‘O dayısına gitti’ diyor. Annem adımı bu kadar güzel söylemez.”"
  },
  "closed": {
   "iz": "Sonuncunun durduğu yeri Heyet kireçletmiş, “Salgın olmasın” diye. Kirecin altında ne kaldıysa orada.",
   "zaman": "Heyetin kayıt defterinde saat sütunu var, iki kayıtta da boş. Muhtar “Belli değil” diyor, sütunu kendi eliyle çizmiş.",
   "yer": "Heyet kararıyla o yerin üstü tahtayla kapatılmış, tahta mühürlü. Mührü kaldırmak için üç imza gerekiyor, ikisi vermiyor.",
   "sebep": "Yanlarında kim vardı diye soruyorsun. Heyetin üç üyesi üç ayrı ad söylüyor, üçü de o sırada tarladaymış."
  },
  "gidisat": [
   "Bahar bu sabah kapıyı kendi açıp avluya çıktı. Annesi kolundan tutup içeri çekti. “Çağırdın” dedi.",
   "Heyet sokağa çıkmayı yasakladı. Bahar pencereden sarkarken yakalandı.",
   "Durdane her gün o mühürlü tahtanın yanına oturuyor. Bugün tahtaya kulak vermiş bulundu, gülüyordu."
  ],
  "yuzlesme": {
   "after": "kurban",
   "ask": "Muhtar Ahmet’e Cahit’in kaydını sor",
   "text": "Muhtar Ahmet kararı önüne çekiyor, mührünü üstüne koyuyor. “Dul kadının çocuğu dayısına gitmiştir. Kayıt böyledir.” Sen susunca sandalyesini geri itiyor. “Üç kayıp olursa kasabadan müfettiş gelir, köyün üstüne yük olur. İki kayıp bir talihsizliktir.” Mührü kaldırıyor, altı ıslak. “Ayten’i de ben kaybettim, sen ne bilirsin.”"
  },
  "sir": {
   "q": "Cahit neden kayıp sayılmadı?",
   "right": "Muhtar, kira borçlusu dulun oğlunu dayısına gitti yazdı",
   "wrong": [
    "Durdane, Heyet’ten yardım almak için çocuğunu sakladı",
    "Heyet, çocuğun dayısına gittiğine gerçekten inandı"
   ]
  },
  "sahne": "Mühürlü tahtayı kaldırttın. Öğle sıcağında kuyunun başındasın, güneş dibe iniyor. Su çok aşağıda, yüzünde saç kadar ince, yeşil bir şey kıpırdıyor. Yanında Durdane oturuyor. Aşağıdan çok tatlı bir ses yükseliyor. Önce “Durdane” diyor, sonra “Anne”. Cahit’in sesi. Durdane gülümsüyor, bileğini taşın kenarına uzatıyor.",
  "kovma": "Muhtarın ambarından gelen kalburu kuyunun ağzına kapatıyorsun. Ses deliklerde dağılıyor, kelimeler parça parça geliyor, sonra hiç gelmiyor. Tuzu taş bileziğe Durdane serpiyor, çuvalı Muhtar taşıyor, belini doğrultmadan. Yeşil saç bilezikten aşağı çekiliyor. Durdane’nin eli havada kalıyor.",
  "yanlis": "Kuyunun ağzına koyduğun şey sesi kesmiyor. Tahtanın yanına oturup bekliyorsun. Öğle sıcağında bir ses, bir ad: Bahar. Akşam sayımında bir çocuk eksik çıkıyor. Heyet yeni bir karar yazıyor: “Kayıp çocuk sayısı üçtür.” Durdane kararı okutuyor. Bu üçün içinde Cahit yok.",
  "cevap": {
   "tam": "ELMACIK KÖYÜ HEYETİ KARARI\nKarar No: 4\n\n1. Kayıp çocuk sayısı üçtür: Cahit, Ayten, Akif.\n2. Cahit’in kaydı düzeltilmiştir. Kira borcu silinmiştir.\n3. Muhtar Ahmet görevinden çekilmiştir. Mühür Aza Dursun’dadır.\n4. Üzerine kalbur kapatılan yer için Heyet karar almamıştır.\n5. Durdane her öğle kalburun yanına oturur. Kaldırılması için kimseye görev verilmemiştir.\n\nDursun, Cevdet.\n(Ahmet geldi, okudu, gitti.)",
   "eksik": "ELMACIK KÖYÜ HEYETİ KARARI\nKarar No: 4\n\n1. Olay sona ermiştir.\n2. Kayıp çocuk sayısı ikidir.\n3. Durdane’nin dilekçesi kendisine iade edilmiştir.\n\nMuhtar Ahmet, Aza Cevdet.\nAza Dursun’un imzası yoktur.",
   "gec": "Bahar kurtulmuştur. Annesi adını seslenince başını çevirmemektedir."
  },
  "kenar": "Kayıp sayısını muhtardan sorma. Mezarlıktaki küçük taşları say, sonra ekle."
 },
 "sirtlan": {
  "village": "Kumluca",
  "chosen": {
   "kurban": "uyuyan",
   "iz": "pence",
   "tanik": "hayvan",
   "zaman": "aysiz",
   "yer": "yol",
   "sebep": "yalniz_yol"
  },
  "open": [
   "tanik",
   "zaman",
   "yer"
  ],
  "letter": {
   "body": "Hürmetli,\n\nBen Azime, Kumluca’da kırk yıldır ölü yıkarım. Sağlarla pek işim olmaz, bu yüzden böyle yazıyorum.\n\nBu yıl dört evden çağrıldım, dördünde de ölü yoktu. Bir çarık getirdiler, bir kuşak, bir çarık daha, sonra bir çift. Yıkadım, kefene sardım, gömdüler. Su döküyorum, başında dua var, altında deri var.\n\nKırk yıl bu işi yapınca neyin nereden geldiğini bilirsin. Son çiftin sahibi Dündar’dı, karısı Canan getirdi. Topuğunda bir şey gördüm. Görmedim sayın.\n\nTakvime bakıyorum, bir sonrakini söyleyebilirim. Üç gün var. Beşinci kez çarık yıkamak istemiyorum.",
   "sign": "Azime"
  },
  "clues": {
   "tanik": "Kağnıcı Durdu tekerleğin yanına çömelmiş, başka tarafa bakarak anlatıyor: “Arabanın altında uyuyakalmıştım. Bir koku uyandırdı, ekşi, leş gibi. Bir hayvan dolanıyordu yanımda, başı yere yakın, adını söyleyemem, karanlıktı. Üç kere döndü. Ayağa kalkmak geldi içimden, nereye, bilmiyorum. Öküz böğürdü, hayvan çekildi. Bir daha kağnının altında yatmam.” Sesini kısıyor: “Ayın on dördünde de kasaba yolundaydım. Biri beni görünce hendeğe yattı. Öksürüğünü tanıdım. Ölmüş adamın adını ağzıma almam.”",
   "zaman": "Bekçi Burhan duvara çentik atar. “Hepsi aysız gece. Zifiri, elini göremezsin. Besim, Abdi, Cemil, üçü de öyle. Ay doğdu mu bu yol rahattır. Dündar’ın çarıkları bulunduğu gece ise ay tepsi gibiydi, ayın on dördü. Kendim yürüdüm o yolu, hiçbir şey görmedim.” Parmağını iki çentiğin arasında tutuyor, sonra sayıyor. “Üç gün.”",
   "yer": "Kumluca’yı kasabaya bağlayan yol, tek ev, tek ağaç yok. Issız, saatlerce yürüsen kimseyi görmezsin. Bulunan yerleri gösteriyorlar. Besim’in çarığı hendekte, bir eşi yok. Abdi’nin kuşağı dikende. Cemil’in çarığı taşa takılmış. Dündar’ın çarıkları yolun ortasında, iki eşi yan yana, burunları köye dönük durmuş. Azime sana bakmıyor: “Yeni çarıktı. Topuğu aşınmamıştı. Köyde borçlu olmadığı ev yoktu.”"
  },
  "closed": {
   "kurban": "O gece ne yapıyorlardı diye soruyorsun. Aileler çarığı gömdü, bir daha sorulmasın diye. Kapıyı “Allah rahmet eylesin” diyerek kapatıyorlar.",
   "iz": "Çarıkların bulunduğu yerlere Muhtar toprak serdirmiş, yol onarılsın diye. Yeni toprağın üstünde kağnı tekerinden başka bir şey yok.",
   "sebep": "Yola neden çıktıklarını ailelere soruyorsun. Her biri ölüsü için güzel bir sebep söylüyor, hasta görmek, borç ödemek. Sebepler birbirine çok benziyor."
  },
  "gidisat": [
   "Azime ocağa büyük kazanı koydu. “Belki yine getirirler” dedi.",
   "Kağnıcı Durdu hanın önünde uyuyakaldı. Sabah tek çarığıyla, üç yüz adım ötede uyandı, nasıl gittiğini bilmiyor.",
   "Bu gece ay yok. Üç ev çocuklarını erkenden yatırdı, ocaklarını söndürdü."
  ],
  "yuzlesme": {
   "after": "yer",
   "ask": "Canan’a yeni çarıkları sor",
   "text": "Canan çarığın yıkandığını söylüyor, kurutulduğunu, gömüldüğünü. Bunları sıraya koyarak söylüyor, ders verir gibi. Dündar’ın adı geçince eli önlüğünün ucunu buluyor, bırakıyor. “Bana dul diyorlar. İçinde oturulan bir kelime.” Duvara bakıyor. “Azime Bacı seninle ne konuştu?” Bunu sorarken sesi hiç değişmiyor."
  },
  "sir": {
   "q": "Dündar’ın çarıkları yola nasıl geldi?",
   "right": "Dündar, borcundan kaçarken kendi eliyle koydu",
   "wrong": [
    "Haramiler soyup çarıklarını yolda bıraktı",
    "Canan, dul kalmak için kocasınınkini koydu"
   ]
  },
  "sahne": "Aysız gece. Yolun kenarında, çalı dibindesin. İlerde bir yolcu taşa başını koymuş uyuyor. Önce koku geliyor. Sonra karanlığın içinde eğri bir şey yürüyor, uyuyanın çevresinde dönüyor, bir kere, iki kere. Üçüncüde yolcu doğruluyor, gözleri açık. “Anam” diyor, çocuk sesiyle. Kalkıyor, yalınayak, karanlığa yürüyor.",
  "kovma": "Azime’nin kefen makasını yolcunun eline tutuşturuyorsun. Demir parmağına değince durup kendi ayaklarına bakıyor. Meşaleyi sen yakıyorsun, Bekçi Burhan ikincisini getiriyor. Hayvan ışığın kenarından öteye geçmiyor, geri geri çekiliyor. Yolcu “Burası neresi” diyor. Azime çarığını getirip ayağına geçiriyor, bağlıyor.",
  "yanlis": "Yolcunun önüne geçiyorsun, elindeki onu durdurmuyor. Karanlığa yürüyor, sesleniyorsun, ardından yetişemiyorsun. Sabah yolun kenarında bir çarık buluyorlar. Azime kazanı ocağa koyuyor, suyu ısıtıyor, çarığı alıyor, kefeni hazırlıyor, başını kaldırmıyor. Beşinci kez.",
  "cevap": {
   "tam": "Hürmetli,\n\nYol rahat. Takvime bakmayı bıraktım.\n\nCanan’a topuğu söyledim. Gözünü kapadı, açtı, “Biliyorum” dedi. “Borçlunun karısına köy kapı açmaz. Duluna açar.” Çarığı bana yıkatmaya kendi gelmişti. Başımı eğdim.\n\nKasabadan haber geldi, birini görmüşler, ayağında yeni ayakkabı. Canan o mezara her cuma su döküyor, kimse görmezken de.\n\nAzime",
   "eksik": "Hürmetli,\n\nYol rahat. Dündar’ın adı dualarda anılıyor, köy ölüsünü hayırla söylüyor. Çarığını ben yıkadım. Canan’a başsağlığı hâlâ geliyor. Ağzımı açmadım, kırk yıldır açmam.\n\nAzime",
   "gec": "Beşincisini de yıkadım, Durdu’nun çarığıydı."
  },
  "kenar": "Ölü getirmezlerse çarığı yıkarlar. Ben o kış boş bir beşiği yıkadım."
 }
};
