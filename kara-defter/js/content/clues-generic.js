// Creature-agnostic clue texts, one list per trait. Every text must fit every roster creature that has the trait.
// Placeholders: {K} victim, {T} witness, {Y} elder, {D} a man who died recently, {koy} village; add :gen for genitive.
export default {
  kurban: {
    lohusa: [
      '{K} doğuralı dokuz gün oldu. Bebek kundakta, beşiği annesinin yatağına bitişik; ikisi de daha kapıdan dışarı adım atmadı.',
      'Doğum zor geçti. {K} hâlâ yataktan tam doğrulamıyor, ebe her sabah gelip hem ona hem kucağındaki bebeğe bakıyor.',
      'Evin en yeni annesi {K}, ilk çocuğunu iki hafta önce dünyaya getirdi. Dert de o günden beri hem anada hem kundaktaki bebekte.',
      '{K:gen} başucunda doğumdan kalma bezler, ılık su tası duruyor. Bebek ağlayınca {K} kalkamıyor; başını çevirip bakmakla yetiniyor.',
    ],
    cocuk: [
      '{K} daha yedi yaşında. Gündüz kuzuların peşinde koşan, hava kararınca annesinin eteğinden ayrılmayan bir çocuk.',
      '{K} sekiz yaşında, mahallenin en yaramazlarından. Cebinde hep çakıl taşı, dizinde hep yara kabuğu olur.',
      'Dert köyün çocuklarından {K:gen} başına geldi. Daha süt dişleri dökülüyor; okumayı da bilmez, korkmayı da.',
      '{K} beş yaşında. Büyüklerin lafına kulak kabartır, gördüğünü olduğu gibi anlatır; yalan söylemeyi daha öğrenmedi.',
    ],
    genc_kiz: [
      '{K} on yedisinde, bu yıl nişanlandı. Çeyizini kendi işliyor; köyde onun kadar ince iğne oyası yapan yok.',
      'Yeni gelin {K:gen} düğünü geçen ay oldu. Daha evin kapılarının sesini öğrenemedi; kayınvalidesinin yanından ayrılmıyor.',
      '{K} köyün genç kızlarından. Çeşmeye, bağa hep arkadaşlarıyla gider; gülüşü uzaktan duyulur, saçındaki boncuklar şıngırdar.',
    ],
    delikanli: [
      '{K} yirmi iki yaşında, bekâr. Askerden yeni döndü; köy güreşlerinde sırtı yere gelmemiş tek delikanlı o.',
      '{K} daha evlenmedi. Annesi her bayram bir kız beğeniyor, o her seferinde gülüp geçiyor. Gözü pek, sözü kısa bir genç.',
      'Bekâr {K}, köyün en çalışkan gençlerinden. Kızını ona vermekten çekinecek baba yok; ama o daha kimseye söz vermedi.',
      '{K} on dokuzunda. Bıyığı yeni terledi, sesi yeni kalınlaştı; kendini her işe yeter, her yola dayanır sanıyor.',
    ],
    uyuyan: [
      '{K} gündüz sapasağlamdı. Ne olduysa gözünü kapadıktan sonra oldu; yatağına sağ salim yattığını ev halkı görmüş.',
      'Dert {K} uyurken geldi. Akşam yemeğini yemiş, herkesten önce yatmış; ondan sonrasını kimse görmemiş.',
      '{K} yatmadan lambayı söndürdü, yorganı başına çekti. Başına gelen ne varsa uykuya daldıktan sonra geldi; uyanık bir insana yaklaşmamış.',
    ],
    yolcu: [
      '{K} pazardan dönüyordu. Yükünü geç bağladı, yola geç çıktı; iki köy arasındaki yolu karanlığa bıraktı.',
      '{K} gece yola düşmekten çekinmezdi. “Yol yolcusunu bilir” derdi; atı olmadığı için hep yaya giderdi.',
      'Kasabadan dönen {K}, gün battıktan sonra köyün yolunu tutmuş. Sırtında bir torba un, cebinde çocuklara aldığı leblebi varmış.',
      '{K} iki köy arası mektup, emanet taşır. O gece de heybesi omzunda, fenersiz yürüyormuş.',
    ],
    coban: [
      '{K} on iki yaşından beri köyün sürüsünü güder. Koyunların her birini sesinden tanır; köye haftada bir uğrar.',
      'Çoban {K:gen} kavalı ağıl duvarında asılı. Sürü o gün de otlağa çıkmış, köpekler başındaymış.',
      '{K} köyün çobanı. Kepeneği sırtında, değneği elinde, kışın da yazın da sürüyle birlikte açıkta yatar.',
    ],
    kadin: [
      '{K} gündüz tarla, akşam ev derken kendi işini geceye bırakır. Ev uyuduktan sonra tek lambanın ışığında yün eğirir, hamur yoğurur.',
      'Evin bütün yükü {K:gen} sırtında. Çamaşırı, hamuru, tezgâhı herkes yattıktan sonra görür; sabah da ilk o kalkar.',
      '{K}, kocası gurbette, üç çocukla kalmış bir kadın. Kendi işine ancak çocuklar uyuyunca oturabiliyor; geç saate kadar iş başında.',
    ],
    hane: [
      'Dert yalnız {K:gen} başında değil. Aynı çatının altında yatan herkes, ninesinden beşikteki bebeğe, aynı şeyi yaşıyor.',
      '{K:gen} evinde yedi can yaşıyor. Hangisine sorsanız aynı şeyi anlatıyor; biri susunca öbürü başlıyor.',
      'Bu iş bir kişiyi değil, bir evi seçmiş. {K} ve ev halkı, kapıyı kapadıkları anda kendi evlerinde misafir gibi oluyor.',
      '{K:gen} hanesinde büyük küçük herkesin yüzünde aynı korku var. Komşular artık o kapıdan içeri girmeye çekiniyor.',
    ],
    hayvan: [
      '{K} köyde en çok hayvanı olanlardan. Dert {K:gen} kendisine dokunmuyor; ahırdaki mallarına dokunuyor.',
      'İnek, at, koyun; {K:gen} bir ömürlük emeği. Şimdi her sabah ahırın kapısını eli titreyerek açıyor.',
      '{K} sapasağlam. Ama hayvanlarında bir hâl var: gece boyu tepiniyor, sahibini görünce bile duvara siniyorlar.',
    ],
    avci: [
      '{K} köyün en iyi avcısı. Tüfeği omzunda, dağın her patikasını bilir; avdan eli boş döndüğü görülmemiş.',
      '{K} avcıdır; keklik, tavşan, yaban keçisi vurur. Evinin duvarında boynuzlar, kapısının önünde postlar asılı.',
      'Avcı {K:gen} çarıkları hâlâ kapının önünde. Tüfeğini alıp köpeğini çağırdığı sabahtan beri yolu gözleniyor.',
    ],
    yas_evi: [
      '{D:gen} cenazesi daha geçen ay kalktı. {K} siyah örtüsünü hâlâ çıkarmadı; sofraya ölünün tabağını da koyuyor.',
      '{K}, {D:gen} ölümünden beri yas evinde. Komşular helva getiriyor, Kur’an okunuyor; ama o evde kimse rahat uyumuyor.',
      '{D} toprağa verileli günler oldu. Evin kadınlarından {K}, ölünün yatağını hâlâ toplamadı, kimseye de toplatmıyor.',
    ],
    ciftci: [
      '{K} toprağından geçinen biri. Gün doğmadan tarlada, gün batınca hâlâ harmanda; elleri nasırdan çatlak.',
      '{K:gen} bu yıl ekini her zamankinden gür, harmanı her zamankinden bereketli olacaktı. Bütün yıl bunun için çalıştı.',
      'Dert {K} işinin başındayken geldi. Orağı, azık bohçası, su testisi; hepsi bırakıldığı yerde duruyor.',
    ],
    denizci: [
      '{K} babasından kalma kayığıyla ağ atar. Rüzgârın nereden eseceğini bulutlardan okur; yaşlı balıkçılar bile ona danışır.',
      '{K:gen} ağları iskelede hâlâ kurumadı. Kayığı da yerinde değil; dalgalar bir sabah kıyıya boş getirdi.',
      'Balıkçı {K} ömrünün yarısını suyun üstünde geçirmiş. Yüzme bilmez; “deniz yüzeni de boğar” der, güler geçerdi.',
    ],
    defineci: [
      '{K} kazmayla, kürekle yaşar. Kuyu kazar, temel açar; köyde toprağın altını onun kadar bilen yok.',
      '{K:gen} küreği hâlâ çukurun başında, sapı toprağa saplı. Kazdığı yer bir adam boyu derin.',
      '{K} bir süredir sırtında kazmayla evden çıkıp eli boş dönüyordu. Nereyi kazdığını, ne aradığını kimseye söylemiyordu.',
    ],
  },

  iz: {
    islak: [
      'Kuru tahtanın üstünde çıplak ayak izleri; kenarlarından su sızmış, ortası hâlâ ıslak. O gece bir damla yağmur düşmedi.',
      'Sabah ıslak ayak izleri bulundu. Biri sudan yeni çıkmış gibi, her adımda bir avuç su bırakmış.',
      'İzler ıslak ama çamursuz; tertemiz, buz gibi su. İlerledikçe incelip kuruyor, sonra bütünüyle kayboluyor.',
    ],
    yosun: [
      'Yerde yeşil, kaygan yosun öbekleri ve çürümüş saz parçaları. Suyun dibinden sökülüp buraya taşınmış gibi; kokusu da ağır, bataklık kokusu.',
      'Saz yaprakları birbirine düğümlenmiş, yanında bir avuç sümüksü yosun. Kimin getirdiği belli değil.',
      'Eşyaların üstüne yeşil yosun lifleri yapışmış; elle çekince ip gibi uzuyor. Arasında kopmuş saz sapları.',
    ],
    sac: [
      'Yerde bir kulaçtan uzun saç telleri. Ne evde ne köyde saçı bu boyda kimse yok.',
      'Bir tutam saç, birbirine dolanmış. Açıp uzatınca boyu bir insan boyunu geçiyor.',
      'İplik sanıp çektiler: bir saç teli, ucu gelmek bilmedi. Topladıkça yenisi çıkıyor.',
    ],
    morluk: [
      '{K:gen} göğsünde, kollarında mor lekeler. Biri sıkıca bastırmış gibi; ama düşen, çarpan olmamış.',
      'Sabah tende parmak parmak morluklar çıktı. Ev halkı yemin ediyor: kimse el kaldırmadı.',
      'Bileklerin, boğazın çevresinde morluklar. Sararıp geçeceğine her sabah yeniden koyulaşıyor.',
    ],
    tirnak: [
      'Tahtada, taşta, ne bulduysa üstünde uzun çizikler. Beş parmak aralığında; ama hiçbir insan tırnağı bu kadar derin oymaz.',
      'Geride kalan hırkanın sırtı boydan boya yırtılmış. Kumaşı kesen bıçak değil; ince, uzun tırnaklar.',
      'Omuz hizasında yan yana dört uzun çizik, uçlara doğru inceliyor. Hayvan pençesi değil; insan eli gibi dizilmiş, ama tırnaklar bir karış.',
    ],
    pence: [
      'Yumuşak toprakta pençe izleri: yuvarlak bir taban, önünde tırnak delikleri. Dört ayakla gelmiş, dört ayakla gitmiş.',
      'Yerde hayvan ayağı izleri, tırnakları toprağa gömülmüş. Köyün hayvanlarından hiçbiri bu izi bırakmaz.',
      'Pençe izleri bir noktanın çevresinde dönüp duruyor. Bir şey orada uzun süre beklemiş, sonra tek sıra hâlinde uzaklaşmış.',
    ],
    buyuk_iz: [
      'Toprağa bir karış gömülmüş ayak izleri; her biri bir insan ayağının iki katı. İki adım arası, koşan adamın adımından uzun.',
      'Bir ayak izi gördük, içine iki kişi aynı anda basabilir. Ağırlığından küçük taşlar toprağa gömülmüş.',
      'Kocaman, yassı bir iz; parmakları ayrı ayrı belli. Yanına kendi ayağımızı koyduk, yarısını bile doldurmadı.',
    ],
    kil: [
      'Bir avuç keçeleşmiş kıl, kalın ve kaba; ne koyununkine benziyor ne keçininkine. Ekşi, ıslak bir hayvan kokusu var.',
      'Dikenlere, köşelere takılmış kara kıl tutamları. Elde ezince yağlı yağlı birbirine yapışıyor, çözülmüyor.',
      'Yerde bir tutam kıl, keçe gibi sıkışmış; arasına kuru yaprak, diken karışmış. Ne insan kılı ne bildiğimiz bir hayvanınki.',
    ],
    mezar: [
      'Toprak eşilmiş; kürekle değil, elle kazılmış gibi. Islak, kara; mezarlık toprağı gibi kokuyor.',
      'Yerde bir yığın taze toprak, dağıldığı yerde parmak izleri. Bu toprak buranın değil; mezarlıktan taşınmış.',
      'Sabah bir çukur bulundu. Toprağın kenarları dışarı doğru devrilmiş; sanki bir şey içeriden çıkmış.',
    ],
    kul: [
      'Ateş yakılmamış bir yerde avuç avuç kül. Elle dokununca hâlâ ılık.',
      'Taşın, tahtanın üstünde kapkara bir el izi; is gibi. Silmeye kalkınca parmağa yapışıyor, yağlı ve kokulu.',
      'Yanık kokusu bütün gece çekilmemiş. Eşyaların kenarları kavrulmuş, ama hiçbir şey alev almamış.',
    ],
    yele: [
      'Atın yelesi sabah sık sık örülmüş bulundu; çözmek saatler sürdü. Hayvan ter içinde, bütün gece koşturulmuş gibi.',
      'Atların yeleleri ince ince örülmüş, düğümleri insan parmağının çıkaramayacağı kadar küçük. Ahır kapısı içeriden sürgülüymüş.',
      'Örgüleri açtılar, ertesi sabah yine örülmüş buldular. Yele düğüm düğüm, kuyrukta da aynı örgü.',
    ],
    ters: [
      'Ayak izleri ters: topuklar önde, parmaklar arkada. İzlere bakan, gelinen yeri gidilen yer sanır.',
      'İzler dışarı çıkıyor gibi görünüyor, ama biri içeri girmiş. Topuk önde, parmak arkada basılmış.',
      'İzleri takip edenler köyün dışına çıktı, kimseyi bulamadı. Sonra anladılar: izler ters basılmış, gelen tam öbür yönden gelmiş.',
    ],
    dagin: [
      'Sabah ne varsa yerinden oynamıştı. Kaplar devrik, çuvallar açık, ne varsa saçılmış; ama hiçbir şey eksik değil.',
      'Ne bağlıysa çözülmüş, ne diziliyse devrilmiş, ne kapalıysa açılmış. Bir gece içinde; sabah kimse nasıl olduğunu bilmiyordu.',
      'Akşam toplanan her şey sabah darmadağın bulundu. Yeniden topladılar; ertesi sabah yine aynı.',
    ],
    kan: [
      'Yerde kararmış kan damlaları. Bir yerden başlıyor, birkaç adım gidiyor, sonra birden kesiliyor.',
      'Taşın üstünde, otun yaprağında kurumuş kan. Kimin kanı olduğunu kimse söyleyemiyor.',
      'Kan izi; sürünmüş değil, damlamış. Damlaların arası açıldıkça açılıyor, sanki taşıyan hızlanmış.',
    ],
    sut: [
      'Sabah sağılan süt kovada kesilmiş, ekşimiş. Komşudan alınan süt de bu eve girer girmez aynı hâle geliyor.',
      'İneklerin memesi boş, sağan el kuru dönüyor. Çıkan bir iki damla da pembe ve kesik.',
      'Yayıktaki süt yağ vermiyor; ayran olmadan pıhtılaşıp ekşiyor. Mayalanan yoğurt sabah su gibi.',
    ],
    deri: [
      'Kuru, yarı saydam, pulları tek tek belli bir yılan gömleği. İçinden daha yeni çıkılmış; keskin, taze bir koku taşıyor.',
      'Taşların arasına sıkışmış bir yılan gömleği, baştan kuyruğa bütün. Gözlerin yeri bile belli.',
      'Yılan gömleği bulundu, katlanıp bırakılmış gibi. Ama etrafta ne yılan var ne yuvası.',
    ],
    halka: [
      'Çimenin üstünde kusursuz bir halka. Otlar yatmış; sanki birileri el ele tutuşup bütün gece dönmüş.',
      'Sabah çayırda yuvarlak bir iz: kenarı ezilmiş, ortası el değmemiş gibi yemyeşil. Hep kenarında dönülmüş.',
      'Otların içinde halka halka mantar bitmiş, bir gecede. Hayvanlar o çemberin içine girmiyor, kenarından dolanıyor.',
    ],
    kuru: [
      'Dün yemyeşil olan yapraklar bir gecede kurumuş. Elle sıkınca toz gibi dağılıyor.',
      'Bir şerit ot sararmış, kenarı bıçakla kesilmiş gibi düz. Bir yanı yeşil, öbür yanı saman.',
      'Sabaha karşı yeşillik soldu. Ne don vurdu ne sıcak çarptı; kökü sağlam, ama sapı kupkuru.',
    ],
  },

  tanik: {
    uzun_sacli: [
      '{T}: “Bir kadın gördüm, sırtı bana dönük. Saçları topuklarını geçmiş, yerde sürünüyordu.”',
      '{T}: “Saçını tarıyordu. Tarağı her indirişinde saç biraz daha uzadı, ayaklarının dibinde birikti.”',
      '{T}: “Yüzünü göremedim, saçı yüzünü örtüyordu. Örtü sandım; değildi, saçtı, dizlerini geçiyordu.”',
    ],
    kocakari: [
      '{T}: “İki büklüm bir kocakarı. Beli öyle eğik ki çenesi dizine değecek. Ama yürüyüşü genç birininki kadar hızlıydı.”',
      '{T}: “Yaşlı bir kadın, başı örtülü, eli değneğe dayalı. Köyün bütün yaşlılarını tanırım; bu onlardan değildi.”',
      '{T}: “Kambur bir nine. Gülünce ağzında tek diş kalmadığını gördüm. Bana ‘evladım’ dedi.”',
    ],
    golge: [
      '{T}: “Kara bir gölge. Fenerin ışığına girdi, ama ışık onu aydınlatmadı.”',
      '{T}: “Yerde bir gölge uzanıyordu, upuzun. Önünde onu düşürecek kimse yoktu.”',
      '{T}: “İnsan biçiminde bir karaltı. Kıpırdamadan durdu, sonra koyu bir su gibi akıp gitti.”',
    ],
    killi: [
      '{T}: “Kıllı, iri bir şeydi. Ayı sandım; ama ayı iki ayağının üstünde öyle dimdik durmaz.”',
      '{T}: “Baştan aşağı kıl. Yüzü bile kıllıydı, gözleri o kılların arasından parlıyordu.”',
      '{T}: “Omuzları iki adam genişliğinde. Üstü keçe gibi kalın kılla kaplıydı; rüzgâr kıllarını oynatıyordu.”',
    ],
    dev: [
      '{T}: “İnsan boyunun iki katı. Ben ancak beline geliyordum.”',
      '{T}: “Uzaktan bir ağaç sandım. Sonra ağaç yürüdü. Bir adımı benim beş adımım kadardı.”',
      '{T}: “Öyle uzundu ki yüzünü görmek için başımı arkaya atmam gerekti. Boynum ağrıdı, yine de yüzünü seçemedim.”',
    ],
    olu: [
      '{T}: “Yemin ederim, rahmetli {D} idi. Cenazesinde tabutunu ben taşıdım; o yüzü yanlış tanımam.”',
      '{T}: “Yüzünü gördüm, tanıdım. Öleli çok olmadı. Üstünde kendi giysileri vardı, ama yüzü balmumu gibiydi.”',
      '{T}: “Yürüyüşünden tanıdım, öksürüğünden tanıdım. Mezarına kendi elimle toprak attığım adam yanımdan geçti, bana bakmadı.”',
    ],
    kalabalik: [
      '{T}: “Davul zurna sesi, zılgıt, el çırpmalar. Kalktım baktım; ortada ne düğün var ne kimse.”',
      '{T}: “Bir kalabalık sesi; yüzlerce kişi aynı anda konuşuyor, gülüyor. Kapıyı açtım, ses bıçakla kesilmiş gibi durdu.”',
      '{T}: “Halay çekiliyordu sanki. Ayak sesleri, türküler, bardak şıngırtıları. Tek bir yüz görmedim.”',
    ],
    hayvan: [
      '{T}: “Bir hayvandı, dört ayaklı. Ama bana bakışı hayvan bakışı değildi; insan gibi baktı.”',
      '{T}: “Hayvan kılığında bir şey. Taşla kovaladım, kaçmadı; durdu, döndü, bekledi.”',
      '{T}: “Köyün hayvanlarından değildi, bunu bilirim. Gözleri karanlıkta iki kor gibi yandı, sonra birden yok oldu.”',
    ],
    yilan: [
      '{T}: “Bir yılan, kıvrıla kıvrıla geçti. Başını kaldırdı, bana uzun uzun baktı.”',
      '{T}: “Yerde bir yılan gördüm; ne kaçtı ne saldırdı. Dili çıkıp çıkıp giriyordu, konuşacakmış gibi.”',
      '{T}: “Yılandı, yemin ederim. Böylesini görmedim; pulları yağ sürülmüş gibi parlıyordu.”',
    ],
    cagiran: [
      '{T}: “Biri adımı söyledi. Kardeşimin sesiydi; oysa kardeşim o an yanı başımdaydı, ağzını bile açmamıştı.”',
      '{T}: “Adımla çağırdı, üç kez. Sesi tanıdık, yumuşacıktı; insanı peşinden sürükleyen bir ses.”',
      '{T}: “Biri {K:gen} adını seslendi, tatlı tatlı, bir yakını gibi. Sesin geldiği yerde kimse yoktu.”',
    ],
    tek_goz: [
      '{T}: “Yüzünün ortasında tek bir göz vardı. Kırpmadan baktı bana.”',
      '{T}: “Bir göz. Tek. Öbürünün olması gereken yer dümdüz deriydi.”',
      '{T}: “Başka bir şey hatırlamıyorum, yalnızca o göz. Tek bir göz, bir tabak kadar iri.”',
    ],
    guzel: [
      '{T}: “Öyle güzel bir kadın ki gözümü ayıramadım. Sonra yüzünü düşünmeye çalıştım, hatırlayamadım.”',
      '{T}: “Bir kadın gördüm, ay parçası gibi. Gülümsedi; o gülüşe kim olsa peşinden giderdi.”',
      '{T}: “Köyün kızlarının hiçbirine benzemiyordu. Teni ışık gibi, yürüyüşü su gibi. Böyle güzellik insanda olmaz.”',
    ],
    alev: [
      '{T}: “İnsan boyunda bir ateş. Yandı, yandı; ama yanında hiçbir şey tutuşmadı.”',
      '{T}: “Karanlıkta kızıl bir ışık kıpırdıyordu. Yaklaştıkça büyüdü; içinde bir biçim vardı.”',
      '{T}: “Alev gibi bir şey, ama sıcaklığı yoktu. Burnumun dibinden geçti, yüzüm bile ısınmadı.”',
    ],
    gorunmez: [
      '{T}: “Hiçbir şey görmedim. Ama orada biri vardı, bunu nefesimden bilirim.”',
      '{T}: “Yanımdan biri geçti; omzuma sürtündü, rüzgârı yüzüme vurdu. Döndüm baktım: kimse.”',
      '{T}: “Gören olmadı. Yalnızca hayvanlar huysuzlandı, köpekler hep aynı boş yere havladı.”',
    ],
    at: [
      '{T}: “Bir at gördüm, eğersiz, yularsız. Köyde öyle bir at yok; sırtı yeni yıkanmış gibi parlıyordu.”',
      '{T}: “Güzel bir at. Yanıma geldi, başını omzuma koydu. Binmek istedim; içimden bir şey durdurdu.”',
      '{T}: “Bir at durmadan etrafımızda dolandı. Kimin atı diye sorduk; sahibi çıkmadı.”',
    ],
    kahkaha: [
      '{T}: “Bir kahkaha. Önce uzaktan, sonra kulağımın dibinden. Gülmeye benzemiyordu, ağlamaya da.”',
      '{T}: “Biri gülüyordu, boğuk boğuk. Kesildi; bir daha başlamasını bekledim, başlamadı.”',
      '{T}: “Kahkahayı duydum, sonra yine, bu sefer daha yakından. Tanıdığım hiç kimse öyle gülmez.”',
    ],
    ufak: [
      '{T}: “Ufacık bir şey, karış boyunda. Çocuk değil; yüzü yaşlı adam yüzü.”',
      '{T}: “Dizimden aşağı bir boyu vardı. Köşeye kaçtı, bir delikten içeri girdi.”',
      '{T}: “Bir avuç kadardı, ama eli kolu vardı. Kıpır kıpır, bir oraya bir buraya.”',
    ],
  },

  zaman: {
    gece_yarisi: [
      'Gece yarısı; köyde son lamba söndükten epey sonra, uykunun en derin olduğu saatte.',
      'Saat on ikiyi geçmişti. Gecenin tam ortası; ne akşamdan kalan bir ses vardı ne sabahtan gelen.',
      'Hep gece yarısı oluyor. Ondan önce de sonra da bir şey olmuyor; ev o saati bekler oldu.',
    ],
    safak: [
      'Şafaktan hemen önce; gök ağarmaya yüz tutmuş, yıldızlar silinmeye başlamıştı.',
      'Gece bitti bitecekken. Karanlık incelmiş, soğuk en keskin hâlindeydi; gün daha doğmamıştı.',
      'Sabaha karşı, gün ışımadan az önce. Dağların sırtı yeni yeni seçiliyordu.',
    ],
    aksam: [
      'Akşam karanlığında; güneş batmış, lambalar daha yakılmamış, her şeyin rengi griye dönmüştü.',
      'İkindi geçti, akşam çöktü; tam o arada. Hayvanlar dönüyor, bacalardan ilk dumanlar yükseliyordu.',
      'Gün batarken başlıyor. Gece ilerledikçe değil, akşamın o ilk karanlığında.',
    ],
    ogle: [
      'Öğle sıcağında. Güneş tepedeyken, gölgeler ayak altına çekilmişken.',
      'Gün ortasıydı; herkes sıcaktan bir gölgeye çekilmiş, ortalıkta kimse kalmamıştı.',
      'Gece değil, öğlen. Gökte bir bulut yok, toprak kızgın, ağustos böceklerinden başka ses yok.',
    ],
    kirk: [
      'Daha kırk gün dolmadı. Kırkı çıkmamış bir evde kapı bile dikkatle açılır.',
      'Kırk gün tamamlanmadan oldu. Ev halkı duvara çentik atıyor; o çentikler daha kırka varmadı.',
      'Kırkı çıkmadan. Büyükler, kırk gün dolana kadar bu tür işlere kapının açık durduğunu söylüyor.',
    ],
    zemheri: [
      'Zemheride, kışın en kara günlerinde. Kar dizi aşmış, köyden köye yol kapalı.',
      'Kışın göbeğinde, ayaz kemiğe işlerken. Testideki su bile sabaha buz tutuyor.',
      'Zemheri ayı; geceler upuzun, gün bir göz kırpımı. Pencereler içeriden buz bağlamış.',
    ],
    carsamba: [
      'Çarşambayı perşembeye bağlayan gece. Köyde o akşam tezgâhların çoğu erkenden örtülmüştü.',
      'Hep çarşamba gecesi. Haftanın öbür gecelerinde bir şey olmuyor.',
      'Salı akşamı herkes biliyordu, ertesi gece çarşamba gecesiydi. Olan o gece oldu.',
    ],
    dolunay: [
      'Dolunay gecesi. Ay öyle parlaktı ki lamba yakmaya gerek yoktu.',
      'Ayın tamamlandığı gece. Bir önceki dolunayda da bir şey olmuş, ama kimse üstünde durmamış.',
      'Ay yusyuvarlak, yüzü apaçıktı. Her şeyin gölgesi yere keskin düşüyordu.',
    ],
    aysiz: [
      'Aysız bir gece; gök kapkara, el eli görmüyordu.',
      'Ayın hiç doğmadığı gece. Yıldızlar da bulutun altındaydı; köyün ışıklarından başka ışık yoktu.',
      'Zifiri karanlık. Ay ya batmış ya hiç çıkmamış; insan kendi ayağını göremiyordu.',
    ],
    firtina: [
      'Fırtına koptuğu gün. Gök gürlüyor, yağmur yatay yağıyor, rüzgâr insanı yerinden oynatıyordu.',
      'Şimşekler çakarken. Bir gürlemeyle öbürünün arası kısaldıkça kısaldı.',
      'Fırtına dinmeden. Hava sakinleşince her şey de durdu.',
    ],
    harman: [
      'Harman vakti; ekin biçilmiş, döven harman yerinde dönüyordu.',
      'Yaz sonu, harmanın ortası. Herkes harman yerinde, köyde ihtiyarlarla çocuklardan başka kimse kalmamış.',
      'Buğday savrulurken; harman yerinde toz duman, saman çöpü havada uçuşuyordu.',
    ],
    bahar: [
      'Baharın ilk günlerinde, Hıdırellez’e yakın. Ağaçlar çiçeğe durmuş, gençler dilek tutuyordu.',
      'Hıdırellez gecesi ya da ona bitişik bir gece. Köy kırlara çıkmış, akşama kadar dönmemişti.',
      'Bahar; karlar erimiş, toprak ısınmış, otlar diz boyu.',
    ],
    ayni_saat: [
      'Her gece aynı saatte. Lambanın yağı aynı yere indiğinde, bir dakika şaşmadan.',
      'Saati şaşmıyor. Dün gece de önceki gece de tam aynı vakitte.',
      'Ev halkı saymış: dokuz gecedir, hep aynı saat. Onuncu gece kimse yatmadı, saati bekledi.',
    ],
  },

  yer: {
    su: [
      'Dere kıyısında, suyun yavaşladığı, kıyının çamurlaştığı yerde. Suyun sesi kulağı dolduruyor.',
      'Göl kıyısında. Kıyıdan üç adım içeride su kararıyor, dibi görünmüyor.',
      'Derenin kenarında, kadınların çamaşır taşlarının orada. Taşlar sabah ıslak bulundu.',
    ],
    deniz: [
      'Denizde, kıyıdan bir kürek mesafesi açıkta. Su orada birden derinleşiyor.',
      'İskelenin ucunda, dalgaların taşlara vurduğu yerde. Tuz kokusu, yosun kokusu.',
      'Açık denizde; kıyının ışıkları görünmez olunca.',
    ],
    kuyu: [
      'Köyün eski kuyusunun başında. Ağzı dar, dibi zifiri; taş atınca sesi geç geliyor.',
      'Kuyunun bileziğinde, kovanın asılı durduğu yerde. Aşağıdan soğuk bir nefes yükseliyor.',
      'Kuyunun başında. O kuyudan artık kimse su çekmiyor, ipini de çoktan kestiler.',
    ],
    mezarlik: [
      'Mezarlıkta, eski taşların arasında; adı okunmaz olmuş mezarların orada.',
      'Köyün mezarlığında, servilerin arasında; en eski taşların orada.',
      'Mezarlık duvarının dibinde; ne içeride ne dışarıda.',
    ],
    harabe: [
      'Köyün dışındaki yıkık handa. Damı çökmüş, avlusunu ot basmış.',
      'Eski bir harabede, yarısı toprağa gömülmüş duvarların arasında.',
      'Kimsenin oturmadığı yıkık evlerin orada. Kapıların yerinde boşluk, pencerelerin yerinde kara delikler.',
    ],
    ahir: [
      'Ahırda, hayvanların arasında; saman ve gübre kokusunun en ağır olduğu köşede.',
      'Ahırın kapısı içeriden sürgülüydü. Olan ne varsa o dört duvarın içinde oldu.',
      'Ahırda, yemliğin önünde. Hayvanların tepindiği yer toprakta derin çukurlar açmış.',
    ],
    hamam: [
      'Köyün eski hamamında, göbek taşının başında. Taşlar hâlâ ılık.',
      'Hamamda, kurnaların arasında; buharın en yoğun olduğu yerde.',
      'Hamamın en iç halvetinde, ışığın hiç girmediği yerde. Damlayan suyun sesi kubbede yankılanıyor.',
    ],
    degirmen: [
      'Su değirmeninde, taşların döndüğü yerde. Un tozu her şeyin üstüne ince bir örtü gibi çökmüş.',
      'Derenin aşağısındaki değirmende. Çark gece de dönüyordu, içeride kimse yokken.',
      'Değirmenin un kokan karanlığında, çuvalların arasında.',
    ],
    orman: [
      'Ormanın içinde, patikanın ağaçların arasında kaybolduğu yerde.',
      'Ormanda, gün ışığının yere inmediği sık ağaçların arasında. Yerde çürümüş yaprak, nem kokusu.',
      'Orman kıyısından içeri bir taş atımı. Daha ötesine köylü girmez.',
    ],
    dag: [
      'Dağda, yaylaya çıkan yolun üstünde. Aşağıda köy, avuç içi kadar.',
      'Yaylada, ağılların bittiği, kayaların başladığı yerde.',
      'Dağın yüksek bir sırtında; sesin yankılanıp geri döndüğü, rüzgârın hiç dinmediği yerde.',
    ],
    yol: [
      'Köye inen ıssız yolda, iki köyün tam ortasında.',
      'Yolun dönemecinde; ne bu köyün ışığı görünür ne öbürünün.',
      'Kimsenin gece geçmediği eski yolda, yol taşının yanında.',
    ],
    oda: [
      'Kapısı kapalı bir odada. Pencere içeriden mandallı, kapı sürgülüydü.',
      'Evin en iç odasında; dışarıdan kimsenin giremeyeceği, sesin dışarı çıkmadığı yerde.',
      'Yatak odasında. Kapı bütün gece kapalı kaldı, kimse girip çıkmadı.',
    ],
    ocak: [
      'Ocak başında, külün hâlâ sıcak olduğu yerde.',
      'Ocağın önünde; tencerenin, sacın durduğu, evin her akşam toplandığı yerde.',
      'Evin yüreği olan ocak başında. Ne olduysa ateşin önünde oldu.',
    ],
    tarla: [
      'Tarlada, ekinin tam ortasında. Dört yanı açık, saklanacak yer yok.',
      'Köyün aşağı tarlalarında, sınır taşlarından uzakta.',
      'Sürülmüş tarlanın içinde, karık boyunca.',
    ],
    agac: [
      'Köyün ulu ağacının altında. Gövdesini beş kişi el ele kucaklayamaz.',
      'Yüz yıllık ağacın dibinde, dalları yere kadar sarkan.',
      'Ulu ağacın gölgesinde, köklerin topraktan dışarı çıktığı yerde.',
    ],
    magara: [
      'Mağaranın ağzında; içeriden soğuk, nemli bir hava esiyor.',
      'Dağın böğrüne açılmış mağarada, ışığın bittiği yerde.',
      'Mağarada. Ağzı dar, içi genişliyor; seslenince ses uzun uzun geri dönüyor.',
    ],
    esik: [
      'Kapı eşiğinde. İçeri adım atılmamış; her şey eşiğin üstünde olmuş.',
      'Evin kapısının önünde, eşik taşının başında.',
      'Tam eşikte; ne içeride ne dışarıda. Kapı aralık kalmış.',
    ],
  },

  sebep: {
    sozsuz: [
      '{Y}: “O ev besmelesiz yatıyor, besmelesiz kalkıyor. Ağzı kapalı evin kapısı açıktır.”',
      '{Y}: “Destur denmeden iş görüldü. Bizim zamanımızda büyükler bir şeye el sürmeden önce ağzını açardı.”',
      '{Y}: “Gençler artık destur demeyi ayıp sanıyor. Söylenmeyen söz eksik kalır; o eksiği başka bir şey doldurur.”',
    ],
    yalniz: [
      '{Y}: “Yalnız bırakılmaz o. Bir an bile. Biriniz kalkıp gitti, değil mi?”',
      '{Y}: “Başında kimse yoktu. Yalnız kalanı bekleyen şey sabırlıdır; bir kapının kapanması yeter.”',
      '{Y}: “Evdekiler işe dağıldı, onu yalnız koydu. Bizim zamanımızda böyle anlarda yanına mutlaka biri otururdu.”',
    ],
    cevap: [
      '{Y}: “Gece kapı çalınınca, adınız söylenince cevap verilmez. Biri verdi.”',
      '{Y}: “Bir ses seslendi, içeriden biri ‘kim o’ diye karşılık verdi. O tek kelime yeter.”',
      '{Y}: “Geceleyin çağırana ‘efendim’ dedi. Karanlıktan gelen çağrıya ses verildi mi, kapı açılmış sayılır.”',
    ],
    usulsuz_gomu: [
      '{Y}: “O ölü usulünce yıkanmadı, kefenlenmedi. Toprak usulsüz gömüleni tutmaz.”',
      '{Y}: “Cenaze aceleye geldi. Mezarı yarım kazıldı, üstüne bir avuç toprak atan çıkmadı.”',
      '{Y}: “Ölüyü gece gömdünüz, yüzünü kıbleye çevirmeden. Öyle yatan rahat yatmaz.”',
    ],
    yasak_is: [
      '{Y}: “Yasak gecede iş tutuldu. O gece tezgâha oturulmaz, hamur açılmaz, çamaşır yıkanmaz.”',
      '{Y}: “Bilmeyen yok; o gece el işe sürülmez. Biri sürdü.”',
      '{Y}: “Bazı gecelerin işi insana değil. O gece yün eğiren, ekmek pişiren, başkasının işine karışmış olur.”',
    ],
    ovunmek: [
      '{Y}: “Ağızdan büyük laf çıktı. ‘Bana bir şey olmaz’ diyen, olacak şeyi kendi çağırır.”',
      '{Y}: “Övündü, hem de yüksek sesle. Bu yerin kulağı vardır; övüneni de söveni de duyar.”',
      '{Y}: “Ağza alınmayacak bir söz edildi. Sonra da üstüne gülündü.”',
    ],
    izinsiz: [
      '{Y}: “Sahibi olan bir yere izinsiz girildi. Oranın bir sahibi vardır, kapısı olmasa da.”',
      '{Y}: “Oraya girilmez; girilecekse sorulur. Kimse sormadı.”',
      '{Y}: “Kimin yeri olduğunu bilmeden adım attınız. Misafir kapıyı çalar; çalmadan giren hırsızdır.”',
    ],
    agac_kesmek: [
      '{Y}: “O ağaca balta vurulmazdı. Biri vurdu.”',
      '{Y}: “Dokunulmaz bir ağaç kesildi. Dedelerimiz onun dalını kırmaz, yere düşen çırpısını bile toplamazdı.”',
      '{Y}: “Odun için o ağacı mı buldunuz? O ağacın kimin olduğunu bilmeyen kalmadı mı bu köyde?”',
    ],
    yabanci: [
      '{Y}: “Tanımadığınız birini eve aldınız. Kim olduğunu, nereden geldiğini sormadan.”',
      '{Y}: “Yabancı kapıya geldi, siz de ‘buyur’ dediniz. Misafir başımızın tacıdır; ama her kapı çalan misafir değildir.”',
      '{Y}: “Nereden geldiği bilinmeyen biri kabul edildi. Yabancı içeri alınmadan önce yüzüne iyi bakılır.”',
    ],
    kirlilik: [
      '{Y}: “Ev kirli bırakıldı. Bulaşık sabaha kaldı, kırıntı yerde, kir köşede birikti.”',
      '{Y}: “Pis evde oturan kim olursa olsun küser. Evin bir sahibi vardır; o sahip pislikten kaçar.”',
      '{Y}: “Bu evde akşam ortalık toplanmıyor, yemek artığı ortada bırakılıyor. Evin asıl sahibi buna dayanamaz.”',
    ],
    adak_unutmak: [
      '{Y}: “Her yıl verilen pay bu yıl verilmedi. Hakkını alamayan hakkını kendi alır.”',
      '{Y}: “Adak adandı, yerine getirilmedi. Unutulan adak unutulmaz; yalnızca adayan unutur.”',
      '{Y}: “Bizim zamanımızda ilk ürün oraya ayrılırdı. Bu yıl kimse ayırmadı, kimse aklına bile getirmedi.”',
    ],
    ates: [
      '{Y}: “Ateşe su döküldü, ocağa tükürüldü. Ateşin de bir sahibi vardır.”',
      '{Y}: “Ocağın külü ayakla dağıtıldı, ateşe çöp atıldı. Ateş, kendisine yapılanı unutmaz.”',
      '{Y}: “Ateş saygı ister. Biri ocağa sırtını döndü, ateşi tekmeyle söndürdü.”',
    ],
    kiymak: [
      '{Y}: “Bir hayvana kıyıldı. Zararsız bir canı, eli değmişken öldürdünüz.”',
      '{Y}: “Taşla, sopayla bir hayvan öldürüldü. Her canın arkasında başka bir göz vardır.”',
      '{Y}: “O hayvan dokunulmazdı. Size bir zararı yoktu; siz yine de canını aldınız.”',
    ],
    fazla_av: [
      '{Y}: “Gereğinden fazla av vuruldu. Bir avcının payı bir avdır; o üç vurdu, dördüncüye nişan aldı.”',
      '{Y}: “Yavrulu hayvana tüfek doğrultuldu. Dağın sürüsü sayılıdır; fazlasını alan hesabını verir.”',
      '{Y}: “Av yetmedi, tamah girdi. Vurduğunu taşıyamayacak kadar vurdu; yarısı dağda çürüdü.”',
    ],
    haksiz_olum: [
      '{Y}: “Bu köyde haksız yere bir can gitti. Hakkı verilmeden ölen rahat etmez.”',
      '{Y}: “Suçsuz biri öldü, katili de aramızda gezdi. Bunu herkes biliyor, kimse söylemiyor.”',
      '{Y}: “Vaktinden önce, zulümle ölen birinin hesabı kapanmadı. Kapanmayan hesap kendini hatırlatır.”',
    ],
    define: [
      '{Y}: “Yerin altında olana el uzatıldı. Gömülü olan sahipsiz gömülmez.”',
      '{Y}: “Define peşine düştünüz. Altın aradınız; altının bir bekçisi olduğunu bilmeden.”',
      '{Y}: “Toprağın altına saklanan, saklı kalsın diye saklanmıştır. Onu çıkarmaya kalkan bedelini öder.”',
    ],
    olu_unutmak: [
      '{Y}: “Ölüler anılmadı. Bayramda mezarlarına gidilmedi, adları evde ağza alınmaz oldu.”',
      '{Y}: “Bu ev kendi ölülerini unuttu. Kimse dedesinin adını bilmiyor, kimse mezarını bulamıyor.”',
      '{Y}: “Ölünün hakkı anılmaktır. Bu evde yıllardır kimse ölüsünü anmadı.”',
    ],
    yalniz_yol: [
      '{Y}: “Gece yola tek başına çıkılmaz. Yanına bir yoldaş almadan çıktı.”',
      '{Y}: “Karanlıkta yalnız yürüyen, yolda yalnız olmadığını geç anlar.”',
      '{Y}: “‘Yol kısa, ben giderim’ dedi, kimseyi beklemedi. Gece yolu tek başına yürünmez.”',
    ],
  },

  letters: {
    opening: [
      'Size bu mektubu köyün ihtiyarlarıyla bir odaya kapanıp birlikte yazıyorum.',
      'Adınızı bize komşu köyün imamı verdi; derdi olanın size yazdığını söyledi.',
      'Sizi tanımayız, ama sizden başka kapı da bilmiyoruz.',
      'Bu kâğıdı yazmadan önce çok düşündük; köyün içinde konuşulanı dışarı taşımak kolay değil.',
      'Elimden geldiğince düz yazacağım; okumuşluğum azdır, kusuruma bakmayın.',
      'Size yazacağımız hiç aklımıza gelmezdi; o defteri masal sanırdık.',
      'Hoca da geldi, hekim de; ikisi de omuz silkip gitti. Şimdi size yazıyoruz.',
    ],
    dert: {
      erime: [
        '{K} günden güne eriyor. Yediği içtiği yaramıyor, yüzünün rengi her sabah biraz daha soluk.',
        '{K:gen} bir ay önceki giysileri şimdi üstünde bol duruyor. Ateşi yok, öksürüğü yok; yalnızca sönüyor.',
        '{K} yataktan kalkamaz oldu. Hekim baktı, bir şey bulamadı; ama her gün bir öncekinden zayıf.',
        '{K:gen} gözlerinin feri gitti. Konuşuyor, ama her gün biraz daha az; sesi kısıldıkça kısılıyor.',
        '{K} mum gibi eriyor. Bir hafta önce kapıya kadar yürüyebiliyordu, şimdi başını yastıktan kaldıramıyor.',
      ],
      kayip: [
        '{K} kayboldu. Üç gündür köyün her yanını aradık; ne kendisi var ne bir haberi.',
        '{K} bir gece eve dönmedi. Aradık, seslendik, komşu köylere haber saldık; bir haber çıkmadı.',
        '{K:gen} yeri boş. Gidişini gören olmamış; sanki bir şey alıp götürmüş.',
        '{K} kayıp. Kendi ayağıyla mı gitti, biri mi götürdü, bilemiyoruz.',
        'Bir haftadır {K:gen} sesini duyan olmadı. Gittiği yer belli değil, döneceği gün belli değil.',
      ],
      carpilma: [
        '{K} bir sabah öyle bulundu: eli ayağı tutmuyor, ağzı yamulmuş. Konuşmak istiyor, sesi çıkmıyor.',
        '{K:gen} aklı gitti. Kimseyi tanımıyor; boş bir yere bakıp gülüyor.',
        '{K} çarpıldı. Bir yanı tutmaz oldu, dili ağırlaştı.',
        '{K:gen} ağzından tek kelime çıkmıyor. Gözleri açık, bakıyor; ama gördüğü bizi değil.',
        '{K:gen} başına ne geldiyse bir anda geldi. Bir gün önce sapasağlamdı; bugün kaşığı tutamıyor.',
      ],
      olum: [
        'Bir ölümümüz var. Hastalık yoktu, yaşlılık yoktu; bir gecede oldu. {K:gen} adı geçince köyde herkes susuyor.',
        '{koy} bu ay bir mezar daha kazdı. Ölüm {K:gen} kapısına geldi; kimse bunun ecel olduğuna inanmıyor.',
        '{K:gen} başına gelen iş ölümle bitti. Nasıl olduğunu kimse açıkça söyleyemiyor.',
        'Köyde bir can gitti; sağlam, dinç bir can. {K:gen} evinde o günden beri kimse sesini yükseltmiyor.',
      ],
      mal: [
        '{K:gen} evinin bereketi kaçtı. Ne varsa eksiliyor, ne yapılsa ters gidiyor.',
        '{K:gen} malına bir şey dadandı. Kimsenin canı yanmadı; ama zarar her gün büyüyor.',
        '{K} “bu ev batıyor” diyor. Geçen yıl bolluk içindeydiler; bu yıl elde ne varsa bir bir gidiyor.',
        '{K} her sabah kalkıp neyin eksildiğini sayıyor. Bir ömürde biriken, birkaç haftada eriyip gidiyor.',
      ],
      korku: [
        'Geceleri {K:gen} evine bir şey geliyor. Kimseye bir şey olmadı, ama ev halkı sabaha kadar gözünü kırpmıyor.',
        '{K} gece gece aynı şeyle uyanıyor: kapıda biri var. Açınca kimse yok.',
        'Kimsenin canı yanmadı, şimdilik. Ama {K} ve ev halkı geceleri lamba söndürmez oldu.',
        'Köyde akşam olunca kapılar sürgüleniyor. {K:gen} evine geleni duyan, bir daha karanlıkta sokağa çıkmıyor.',
        '{K} korkudan uyuyamıyor. Her gece geliyor; bir şey almadan, bir şey yapmadan gidiyor.',
      ],
    },
    closing: [
      'Bir bilen gelsin, ne olduğunu söylesin. Yol paranızı köy olarak öderiz.',
      'Defterinizde bunun adı yazılıysa, ne olur gelin.',
      'Başka kimseye yazamadık. Cevabınızı bekliyoruz; çabuk olsun.',
      'Gelirseniz kalacak yeriniz, yiyecek ekmeğiniz hazır. Yeter ki gelin.',
      'Ne isterseniz yaparız. Yalnız bizi bu dertle baş başa bırakmayın.',
      'Bu mektubu okuduğunuz gün yola çıkın. Biz burada bekliyoruz.',
    ],
  },
};
