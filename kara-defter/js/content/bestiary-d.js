// Bestiary batch D: tree, fire, wind, house, earth, mountain, fire-cin, water-horse, well, harvest, ancestor and grove spirits.
// Traits and tools are fixed in ./roster.js; this file only carries the prose.

export default {
  agaciyesi: {
    aka: ['Ağaç Ana'],
    region: 'Anadolu’da dilek ve yatır ağaçlarının çevresinde; Orta Asya’nın ağaç iyesi inancı',
    epithet: 'Kesilen ulu ağacın öcünü alan',
    lore: `Derler ki köy başındaki ulu ağaçların, dallarına çaput bağlanan dilek ağaçlarının bir iyesi vardır. Görünmez; yalnızca rüzgârsız havada yaprakların birden hışırdamasından, gölgenin bir anda buz kesmesinden bilinir. O ağaca balta vuranı, dalını kırıp ocağına atanı çarpar: ağzı yana kayar, kolu tutmaz, dili bağlanır. Çoğu zaman öğle sıcağında, gölgesine sığınan oduncuya, tarladan dönen çiftçiye dokunur. Çarptığı adamın ekini, bağı bir gecede kurur; sanki ağacın yarası ona geçmiştir. Bu yüzden ulu ağacın altına varan önce destur der, sahibinden izin ister; ağzından çıkan söz ağaca saygıdır. Kırılan dalın yerine adak bırakılır: bir somun ekmek, bir kâse yağ, dibine dökülen bir testi su. Ağaç hakkını alınca öfkesini bırakır, çarptığını da bağışlar.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} tarla kenarındaki ulu ağaçtan bir kol kesip saban için sap yonttu. O akşam ağzı yana kaydı; sağ eli hâlâ yumruk olmuş, açılmıyor.` },
        { trait: 'ciftci', t: `Ekine gölge düşüyor diye {K} ulu ağacın alt dallarını budadı. Ertesi gün dili dolaştı; kendi adını bile söyleyemiyor.` },
        { trait: 'ciftci', t: `Tarladan dönen {K} ağacın altından geçerken yere yığıldı. Şimdi bir gözü kapanmıyor, bir kolu yanında kütük gibi duruyor.` },
      ],
      iz: [
        { trait: 'kuru', t: `{K:gen} tarlasındaki fasulyeler bir gecede kurumuş. Yapraklar kâğıt gibi hışırdıyor; komşu tarlada tek bir yaprak sararmamış.` },
        { trait: 'kuru', t: `Kesilen dalın düştüğü yerde çimen sabaha sapsarı olmuş. Sarılığın biçimi, dalın gölgesinin biçimi.` },
        { trait: 'kuru', t: `Akşam yemyeşil olan asma sabah kupkuru bulundu. Yapraklarına dokununca un gibi dağılıyorlar.` },
      ],
      tanik: [
        { trait: 'gorunmez', t: `{T}: “Rüzgâr yoktu, yemin ederim. Ağacın bütün yaprakları birden hışırdadı ve {K} yere düştü. Yanında kimse yoktu.”` },
        { trait: 'gorunmez', t: `{T}: “Gölgeye girdim, sırtıma buz gibi bir el kondu. Döndüm; ağaçtan, bir de benden başka kimse yoktu.”` },
        { trait: 'gorunmez', t: `{T}: “Baltanın sapı kendiliğinden elinden fırladı, yere saplandı. Kim tuttu, kim çekti, göremedim.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Öğle sıcağı tepedeyken, herkes gölgeye çekilmişken. Ağustos böcekleri bir anda sustu.` },
        { trait: 'ogle', t: `Güneş tam tepedeydi; gölgeler ayakların dibine çekilmişti. O saatte köyde kimse ağaç altından başka yerde durmaz.` },
        { trait: 'ogle', t: `Öğle vakti, sıcağın en ağır olduğu saatte. Taşlar ele değmeyecek kadar kızgındı.` },
      ],
      yer: [
        { trait: 'agac', t: `Köyün girişindeki yaşlı çınar. Dalları çaput dolu; gövdesini dört kişi kol kola ancak sarar.` },
        { trait: 'agac', t: `Tek başına duran ulu bir karaağaç. Dibinde mum yakılmış izler, dallarında solmuş bez parçaları.` },
        { trait: 'agac', t: `Yatır sayılan ağacın altı. Kesik kolun yeri, gövdede çiğ bir yara gibi açık duruyor.` },
      ],
      sebep: [
        { trait: 'agac_kesmek', t: `{Y}: “O ağaca dedelerimiz bile balta vurmadı. Dalına çaput bağlanır, dibine mum dikilir; ocağa odun olmaz.”` },
        { trait: 'agac_kesmek', t: `{Y}: “Kim kesti o kolu? O ağaç kendi kurusa bile dalı yerde çürür, kimse alıp götürmez.”` },
        { trait: 'agac_kesmek', t: `{Y}: “Ağacın canı vardır, sahibi vardır. Canını yakanın canını yakar.”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, kesik dalın gölgesinde beklediniz. Ortalıkta tek bir kuş sesi yoktu.`,
        `Rüzgâr yokken ulu ağacın bütün yaprakları birden titredi; gölgenin içi buz kesti.`,
      ],
      success: [
        `Destur deyip ağaca yaklaştınız, kesik dalın dibine ekmekle yağı bıraktınız. Yapraklar yavaş yavaş durdu.`,
        `Ertesi sabah {K} kolunu kaldırabildi. Ağacın sararan yaprakları bir hafta içinde yeniden yeşerdi.`,
      ],
      partial: [
        `Ağacın öfkesi dindi ama tam yatışmadı; bir yanınız eksikti, gölge soğuk kaldı.`,
        `{K} iyileşiyor. Ama o gölgeye öğle vakti artık kimse girmiyor.`,
      ],
    },
  },

  odana: {
    aka: ['Ot Ana', 'Od iyesi'],
    region: 'Türk dünyasının ocak ve ateş inancı; Anadolu’da ocak başı töreleri',
    epithet: 'Ocağın ateşinde oturan ana',
    lore: `Derler ki her ocağın ateşinde bir ana oturur. Od Ana evin bereketini tutar; ateşi saygıyla yanan evin ekmeği kabarır, kazanı boş kalmaz. Ateşe tükürene, öfkeyle üstüne su döküp söndürene, ateşi ayakla tepene küser. Küsünce akşam yakılan ateş tutuşmaz ya da birden harlanıp tencereyi kömüre çevirir; hamur ekşir, ambar küflenir, ocak başında kül, eşyada yanık izleri belirir. Bazen alevin içinde oturan bir kadın, bazen küllerden kalkıp odayı dolaşan kırmızı bir ışık olarak görünür. En çok akşam ocağı yakan kadına, sonra bütün ev halkına darılır. Gönlünü almak için ateşe adak olarak bir kaşık yağ atılır, ekmeğin ilk lokması ona verilir. Ocak başı ardıç tütsüsüyle tütsülenir; ardıcın keskin dumanı kötü sözü, kirli eli ateşin yanından uzaklaştırır.`,
    clues: {
      kurban: [
        { trait: 'kadin', t: `{K} akşam ocağı yakarken alev ona doğru savruldu, kaşlarını yaladı. O günden beri yaktığı ateş tutmuyor, yoğurduğu hamur kabarmıyor.` },
        { trait: 'kadin', t: `{K} gece geç saate kadar ocak başında bulgur kaynattı. Sabah kazanın dibi kapkara yanmış, çuvaldaki bulgur bile acı kokuyor.` },
        { trait: 'kadin', t: `{K:gen} tandırı üç akşamdır yanmıyor. Çırayı, tezeği değiştirdi; ateş her seferinde bir kez parlayıp sönüyor, {K} eli yüzü is içinde kalıyor.` },
        { trait: 'hane', t: `Bütün ev halkı bir aydır sofradan aç kalkıyor. Ekmek bir günde küfleniyor, yağ acıyor, tencere ne pişirse dibi tutuyor.` },
        { trait: 'hane', t: `{K:gen} evinin bereketi kaçtı: kesedeki para eriyor, ambardaki buğdayı böcek basmış, evde herkes bir şeyini kaybediyor.` },
        { trait: 'hane', t: `{K:gen} evinde akşam yemeği üç gecedir yanıyor. Ocak ya sönüyor ya harlanıp tencereyi kömüre çeviriyor; ev halkı kuru ekmekle yatıyor.` },
      ],
      iz: [
        { trait: 'kul', t: `Ocak taşının üstünde kül, sanki biri avuçla serpmiş. Ocağın kendisi ise o gün hiç yakılmamış.` },
        { trait: 'kul', t: `Yükte duran çeyiz sandığının kapağında avuç büyüklüğünde bir yanık izi. Sandığın yanında ateş yakılmadı.` },
        { trait: 'kul', t: `Duvarlarda, tavana kadar, parmak parmak is. Sanki ocaktan bir el uzanıp duvarı yoklamış.` },
      ],
      tanik: [
        { trait: 'alev', t: `{T}: “Ocağa baktım, alevin içinde bir kadın oturuyordu. Başını kaldırınca alev tavana kadar sıçradı.”` },
        { trait: 'alev', t: `{T}: “Ateş çoktan sönmüştü. Yine de küllerin içinden kırmızı bir ışık kalktı, odayı dolaştı, ocağa geri döndü.”` },
        { trait: 'alev', t: `{T}: “Alev bir anda kıpkırmızı bir dil gibi uzandı, ekmek teknesini yaladı, geri çekildi. Teknede bir lokma hamur kalmadı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığında; ocak yeni yakılmış, sofra kurulurken.` },
        { trait: 'aksam', t: `Güneş batıp lambalar yakıldığında. Gün ışığında ocak uslu duruyor.` },
        { trait: 'aksam', t: `Hep akşam, hava kararıp ateş ilk harlandığı anda. Gece ilerleyince ocak kendiliğinden yatışıyor.` },
      ],
      yer: [
        { trait: 'ocak', t: `Evin ocağı. Önündeki taş ortasından yarılmış; ocak başında kimse oturmak istemiyor.` },
        { trait: 'ocak', t: `Tandır evinin ocağı. Gömme tandırın ağzı akşamları, kimse yakmadan, kendiliğinden ısınıyor.` },
        { trait: 'ocak', t: `Ocak başı; sacayağı devrilmiş, maşa ateşin içinde unutulmuş, kızarmış.` },
      ],
      sebep: [
        { trait: 'ates', t: `{Y}: “Ateşe tükürülmez, kızgınlıkla üstüne su dökülmez. Bu evde biri ocağa sövüp söndürmüş.”` },
        { trait: 'ates', t: `{Y}: “Ocağın ateşi evin ana direğidir. Çocuklar ateşe çöp, saç, tırnak atmış; kimse durdurmamış.”` },
        { trait: 'ates', t: `{Y}: “Ateş ayakla söndürülmez. Biri öfkeyle ocağı tepmiş; o günden beri ateş bu eve küs.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında ocak başında, ateşi yeniden yakıp beklediniz.`,
        `Alev bir an kısıldı, sonra ortasında bir yüz belirdi; odayı sıcak bir is kokusu doldurdu.`,
      ],
      success: [
        `Ateşe bir kaşık yağ attınız; alev cızırdayıp yumuşadı. Ardıç dalını yaktınız, keskin dumanı ocağın çevresini üç kez dolaştı.`,
        `O akşam {K:gen} evinde ekmek kabardı. Ocak sabaha kadar uslu uslu yandı.`,
      ],
      partial: [
        `Ateş yatıştı ama gönlü tam alınmadı; alev bir süre daha huysuz, kıvılcımlı yandı.`,
        `Ev yine de doydu. Ama bu ocağın başında artık kimse sesini yükseltmiyor.`,
      ],
    },
  },

  yelana: {
    aka: ['Yel iyesi', 'Şeytan kuyruğu'],
    region: 'Anadolu’da hortum ve kasırga inançları; Türk dünyasının yel iyesi',
    epithet: 'Kendine söveni hortumla vuran',
    lore: `Derler ki yelin de bir anası vardır. Yel Ana görünmez; geldiği, durgun havada ovanın ortasından birden kalkan toz sütunundan, şeytan kuyruğu denen o dönen hortumdan bilinir. Kendisine söven, yeli lanetleyen, ‘bana yel mi vız gelir’ diye övünen çiftçiye kızar. Fırtınalı bir günde onun tarlasına iner; ekini yatırır, demetleri çözüp savurur, damdaki kiremidi, avludaki kazanı darmadağın eder, yolda gideni yere çalar. Tarlada ve yolda dolanır; evin içine girmez. Bu yüzden yaşlılar yele kötü söz söylemez. Hortum yaklaşınca içine bir bıçak fırlatılır; demir onu yaralar, dönüşünü bozar, bıçağın ucunda kan görüldüğü bile anlatılır. Öfkesi dinsin diye ardından yele bir avuç un serpilir; Yel Ana bu adağı alınca yolunu değiştirir.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} bütün yaz biçtiği ekini tarlada demet demet yığmıştı. Bir sabah kalkan yel demetleri üç tarla öteye savurdu; bir sap bile yerinde kalmadı.` },
        { trait: 'ciftci', t: `{K:gen} tarlası yerle bir. Başaklar hep aynı yöne yatmış, sanki üstünden loğ taşı geçmiş. Komşu tarlalar dimdik.` },
        { trait: 'ciftci', t: `Tarladan dönen {K:gen} sırtındaki tohum çuvalını yel söküp aldı. Tohum dört yana saçıldı, {K} yolun ortasına kapaklandı.` },
      ],
      iz: [
        { trait: 'dagin', t: `Damdaki kiremitler bahçeye, bahçedeki küpler yola savrulmuş. Avluda ne varsa yer değiştirmiş.` },
        { trait: 'dagin', t: `Tarladaki demetler çözülmüş, saplar ağaç dallarına takılmış. Orak, tırpan, yaba ne varsa yüz adım öteye fırlamış.` },
        { trait: 'dagin', t: `Avludaki çamaşırlar, çuvallar, kazan kapakları dağılmış. Bir kilim köyün öbür ucunda, bir damın saçağına asılı bulundu.` },
      ],
      tanik: [
        { trait: 'gorunmez', t: `{T}: “Toz bir sütun olup kalktı, döne döne tarlaya yürüdü. İçinde kimse yoktu ama ilerlerken ekini koparıyordu, sanki eli vardı.”` },
        { trait: 'gorunmez', t: `{T}: “Hava ölü gibi duruyordu. Birden yanımdan bir yel geçti, başımdakini aldı, çevremde üç kez döndü. Sonra yine durgunluk.”` },
        { trait: 'gorunmez', t: `{T}: “Kavaklar kıpırdamıyordu; yalnız {K:gen} tarlasında yel esiyordu. Tarlanın sınırında başlıyor, sınırında bitiyordu.”` },
      ],
      zaman: [
        { trait: 'firtina', t: `Kara bulutların ovaya çöktüğü gün. Önce toz kalktı, ardından yağmur yan yatıp vurdu.` },
        { trait: 'firtina', t: `Fırtınanın kopacağı belliydi; gök sarıya döndü, kırlangıçlar yere sürtünür gibi uçtu.` },
        { trait: 'firtina', t: `Üç gündür esen poyraz o gün kasırgaya döndü; köyde yerinde kalan çatı sayılı.` },
      ],
      yer: [
        { trait: 'tarla', t: `Köyün güneyindeki düz tarlalar; ortalarında tek bir ağaç bile yok, yel önüne ne katarsa götürüyor.` },
        { trait: 'tarla', t: `{K:gen} tarlası. Biçilmiş anızda dağılmış demetler, yarısına kadar toprağa saplanmış bir yaba.` },
        { trait: 'tarla', t: `Ovanın ortasındaki buğday tarlası. Ekin bir uçtan öbür uca, bir şerit hâlinde yatırılmış.` },
        { trait: 'yol', t: `Köye inen toprak yol. Kenarındaki taş duvar yıkılmış, taşlar yolun ortasına saçılmış.` },
        { trait: 'yol', t: `Kasabaya giden ıssız yol. Tozun içinde devrik bir araba tekerleği, yanında kimsenin almadığı bir heybe.` },
        { trait: 'yol', t: `Yol ayrımı. Her yaz burada toz döner; yolcular orada durup soluklanmaz.` },
      ],
      sebep: [
        { trait: 'ovunmek', t: `{Y}: “Yel ekinini savurunca biri yele sövmüş, ‘kuruyası yel’ demiş. Yelin de kulağı vardır.”` },
        { trait: 'ovunmek', t: `{Y}: “‘Benim demetimi hiçbir yel kımıldatamaz’ diye övünen olmuş. Sözü duyan duydu.”` },
        { trait: 'ovunmek', t: `{Y}: “Yele karşı tükürülmez, yele beddua edilmez. Biri edip durmuş; söz döndü, kendini buldu.”` },
      ],
    },
    hunt: {
      intro: [
        `Fırtınanın koptuğu gün, açık tarlanın ortasında, yüzünüzü yele dönüp beklediniz.`,
        `Ovanın ucunda toz bir sütun olup kalktı, döne döne size yürüdü.`,
      ],
      success: [
        `Bıçağı dönen tozun tam ortasına fırlattınız; hortum bir an bükülüp sendeledi. Bir avuç unu yele saçtınız, un savruldu, gitti.`,
        `Yel yön değiştirip dağa çekildi. Sabah {koy} köyünün tarlaları sakindi.`,
      ],
      partial: [
        `Hortum sarsıldı ama dağılmadı; yarı öfkeyle yoluna devam etti.`,
        `{K:gen} tarlasından uzaklaştı. Ama fırtınalı bir gün bu ovaya yine inecek.`,
      ],
    },
  },

  evyilani: {
    aka: ['Evin sahibi', 'Ev iyesi yılan'],
    region: 'Anadolu ve Balkan köy evlerinde; Türk ve Slav ev yılanı inancı',
    epithet: 'Eşiğin altında yaşayan evin koruyucusu',
    lore: `Derler ki eski evlerin eşiğinin ya da ocağının altında bir yılan yaşar; evin asıl sahibi odur, bereketi o tutar. Ev halkına dokunmaz, çoğu kimse onu hiç görmez. Yalnızca öğle sıcağında eşiğe uzanıp güneşlenir, ocak taşının dibinde gömleğini bırakır. Ona taş atan, kürekle vuran, yuvasını bozan olursa evden bereket çekilir: ambar boşalır, ekmek kabarmaz, para elde durmaz. Yılan görünmez olunca evin talihi de onunla gider. Bu yüzden ev yılanı görülünce susulur; adı anılmaz, kimseye söylenmez, çünkü sırrı dışarı taşan yılan evi terk eder. Gönlü kırılmışsa yoluna al bir kurdele serilir; üstünden geçip ocağının altına dönerse barıştığına, bereketi de geri getirdiğine inanılır.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde bir aydır ne tutulsa elde kalmıyor. Ambar boşaldı, un küflendi, sandıktaki bilezik kayboldu.` },
        { trait: 'hane', t: `Ev halkı birbirine düştü. Ekmek kabarmıyor, tencere taşıyor, evdekiler ardı ardına yatağa düşüyor.` },
        { trait: 'hane', t: `{K} anlatıyor: bu ev yetmiş yıldır bolluktan çıkmazdı. Şimdi kiler bomboş, borçlu kapıyı çalıyor.` },
      ],
      iz: [
        { trait: 'deri', t: `Eşiğin altındaki yarıktan bir yılan gömleği sarkıyor; ince, kâğıt gibi, upuzun.` },
        { trait: 'deri', t: `Ocak taşının dibinde kuru bir yılan gömleği bulundu. Biri onu ortasından ikiye bölmüş.` },
        { trait: 'deri', t: `Yüklükte, yorganların arasında yarım bir yılan gömleği. Kuyruk ucu kapıya dönük.` },
      ],
      tanik: [
        { trait: 'yilan', t: `{T}: “Öğle vakti eşikte bir yılan güneşleniyordu; koyu yeşil, kol kalınlığında. Beni görünce kımıldamadı, başını ocağa çevirdi.”` },
        { trait: 'yilan', t: `{T}: “Ocak taşının altından bir yılan başı uzandı. Ev halkına tek tek, uzun uzun baktı; sonra çekilip gitti.”` },
        { trait: 'yilan', t: `{T}: “Yılanı eşikte gördüm, başında bir yara vardı. Sürünerek bahçeye çıktı; ondan sonra kimse görmedi.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Öğle sıcağı; taşlar kızmış, avlu bomboş, kediler bile gölgeye çekilmiş.` },
        { trait: 'ogle', t: `Güneş tepedeyken. Yılan hep o saatte eşiğe çıkıp ısınırdı.` },
        { trait: 'ogle', t: `Öğlen, güneş avluyu yakarken; eşiğin taşı ele değmeyecek kadar sıcakken.` },
      ],
      yer: [
        { trait: 'ocak', t: `Evin eski ocağı. Taşların arasında bir el sığacak kadar karanlık bir oyuk var.` },
        { trait: 'ocak', t: `Ocak başı. Ocak taşının altından ince bir hışırtı geliyor; geceleri bile kesilmiyor.` },
        { trait: 'ocak', t: `Ocağın ardındaki duvar dibi; sıvası dökülmüş, aralıktan serin bir hava vuruyor.` },
        { trait: 'esik', t: `Evin taş eşiği. Ortası yüz yılın ayak sesleriyle çukurlaşmış; altında bir boşluk var.` },
        { trait: 'esik', t: `Kapı eşiği; bir köşesi kırılmış, altından ince ince toprak dökülüyor.` },
        { trait: 'esik', t: `Avludan eve girilen eşik. Evin yaşlıları oraya hiç basmaz, üstünden atlar.` },
      ],
      sebep: [
        { trait: 'kiymak', t: `{Y}: “Eşikteki yılana kim taş attı? O yılan bu evin sahibiydi; bu ev yapılmadan da oradaydı.”` },
        { trait: 'kiymak', t: `{Y}: “Yeni gelen damat yılanı görünce kürekle vurmuş. Evin bereketini kendi eliyle yaraladı.”` },
        { trait: 'kiymak', t: `{Y}: “Evin yılanına kıyılmaz. Kıyan evin yarısını öldürür; öbür yarısı da arkasından gider.”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, eşiğin yanında, kımıldamadan beklediniz.`,
        `Taşın altından ince bir hışırtı geldi; yaralı yılan başını güneşe uzattı.`,
      ],
      success: [
        `Ağzınızı açmadınız, adını anmadınız. Önüne serdiğiniz al kurdelenin üstünden ağır ağır geçti, ocağın altına girdi.`,
        `Akşam {K:gen} evinde ekmek yeniden kabardı. Kimse sebebini sormadı, kimse anlatmadı.`,
      ],
      partial: [
        `Yılan durdu, size uzun uzun baktı; yarım gönülle döndü.`,
        `Ev açlıktan kurtuldu. Ama yılan bir daha eşiğe çıkmadı.`,
      ],
    },
  },

  yeriyesi: {
    aka: ['Yer Ana', 'Yer-Sub'],
    region: 'Türk dünyasının yer-su inancı; Anadolu’da yerin sahibi inancı',
    epithet: 'Toprağı izinsiz yarana çarpan',
    lore: `Derler ki yerin de sahibi vardır. Yer İyesi görünmez; toprağın altında, en çok hiç sürülmemiş yerlerde oturur. Ondan izin almadan yeni bir tarla açan, sınır taşını söken, tarlanın ortasına ark ya da hendek kazan adamı çarpar: öğle sıcağında kazdığı çukurun başında yığılır kalır, ağzı yana kayar, eli kolu tutmaz. Kazmanın vurduğu yerde ot bir gecede kurur; o tarlaya ne ekilse bitmez. Bu yüzden yaşlılar yeni toprağı açmadan önce yere adak verir: bir somun ekmek, bir kâse yağ toprağa gömülür, yerin hakkı önce ona ödenir. Kazının dört köşesine de tuz serpilir; tuz, yerin sahibiyle ekmek tuz hakkı kurmanın yoludur. Tuzu yalayan iye artık o toprağı açana el kaldırmaz.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} dededen kalan çorak yamacı ilk kez sürüyordu. Üçüncü çizide saban bir taşa takıldı, {K} sabanın başında yere yığıldı.` },
        { trait: 'ciftci', t: `{K:gen} bir yanı tutmuyor. Tarlanın ortasındaki taş yığınını sökerken kolu kaskatı kesilmiş, dili dolanmış.` },
        { trait: 'ciftci', t: `Tarlada çapa yapan {K} öğlen birden yere düştü. Ağzı yana kaymış; konuşmaya çalıştıkça toprak tükürüyor.` },
        { trait: 'defineci', t: `{K} tarlanın kenarına ark kazıyordu. Kazma yere ikinci kez inince elinden fırladı; {K} o günden beri kazmayı tutan elini açamıyor.` },
        { trait: 'defineci', t: `{K} tarlanın ortasına yeni bir sınır hendeği açarken düştü kaldı. Yüzünün bir yanı aşağı sarkmış, dili ağır.` },
        { trait: 'defineci', t: `Kerpiç toprağı almak için tarlanın ucunu kazan {K}, çukurun dibinde baygın bulundu. Ayıldığında sol eli tutmuyordu.` },
      ],
      iz: [
        { trait: 'kuru', t: `Kazılan çukurun çevresinde, bir adım genişliğinde, otlar bir gecede kurumuş. Ötesi yemyeşil.` },
        { trait: 'kuru', t: `Dün toprağı delen buğday filizleri sabaha sararıp yatmış; sanki toprak altından kavrulmuş.` },
        { trait: 'kuru', t: `Sabanın geçtiği her çizide ekin bir gecede kurumuş. Çizilerin arası yeşil duruyor.` },
      ],
      tanik: [
        { trait: 'gorunmez', t: `{T}: “Yanında kimse yoktu. Kazmayı kaldırdı, indiremedi; sanki biri bileğinden tuttu.”` },
        { trait: 'gorunmez', t: `{T}: “Toprak titredi, ayaklarımın altından bir soğuk geçti. Başımı kaldırdım, {K} yerde yatıyordu.”` },
        { trait: 'gorunmez', t: `{T}: “Güneş tepedeydi, ortalıkta bir kuş bile yoktu. Kazılan çukurun toprağı kendiliğinden geri aktı, çukur doldu.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Öğle sıcağında; güneş tepedeyken, toprak tabana yapışırken.` },
        { trait: 'ogle', t: `Tam öğle vakti. Eskiler o saatte toprağa kazma vurulmaz derdi.` },
        { trait: 'ogle', t: `Gün ortası. Çeşmeye su almaya gidenler daha dönmeden olmuş.` },
      ],
      yer: [
        { trait: 'tarla', t: `Köyün dışındaki yeni açılmış tarla; taşları yeni toplanmış, toprağı ötekilerden daha kara.` },
        { trait: 'tarla', t: `Kimsenin sürmediği yamaç tarlası. Köşesindeki eski sınır taşı yerinden sökülmüş.` },
        { trait: 'tarla', t: `Düz bir buğday tarlası; ortasında kazılmış, yarım bırakılmış bir çukur.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “O toprak hiç sürülmemişti. Sahibine sorulmadan yarıldı. Yerin de bir sahibi vardır.”` },
        { trait: 'izinsiz', t: `{Y}: “Sınır taşı oraya boşuna konmaz. Taşı söküp öteye geçen, girmemesi gereken yere girdi.”` },
        { trait: 'izinsiz', t: `{Y}: “Biz yeni tarla açacaksak önce izin isteriz. Bunlar istemeden girdi, istemeden kazdı.”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, yarım kalan çukurun başında beklediniz.`,
        `Rüzgâr yokken ekin bir çizgi boyunca eğildi; ayağınızın altında toprak serinledi.`,
      ],
      success: [
        `Çukurun dibine ekmekle yağı gömdünüz, dört köşesine tuz serptiniz. Toprağın titremesi yavaş yavaş dindi.`,
        `Ertesi gün {K:gen} eli açıldı, dili çözüldü. Kuruyan yerde ince bir filiz belirdi.`,
      ],
      partial: [
        `Yer bir şey aldı ama tam razı olmadı; titreme dindi, soğuk kaldı.`,
        `{K} iyileşiyor. O tarlanın o köşesi ise yıllarca nadasa bırakılacak.`,
      ],
    },
  },

  dagiyesi: {
    aka: ['Dağ Ana', 'Tağ iyesi'],
    region: 'Altay ve Sibirya Türklerinin dağ iyesi inancı; Anadolu’nun yayla anlatıları',
    epithet: 'Kendine kafa tutanı yutan dağın sahibi',
    lore: `Derler ki her dağın bir iyesi vardır; dağ onun evi, otlayan sürüler ve av onun malıdır. Çoğu zaman görünmez; varlığı birden çöken sisten, yazın ortasında savrulan kardan, gök gürültüsünden bilinir. Bazen de bulutların arasında insan boyunun iki katı bir adam olup geçer. Dağa karşı övünen, ‘Bu dağı bir günde aşarım, dağ dediğin bir taş yığını’ diyen çobanı ve avcıyı fırtınayla karşılar; yolunu şaşırtır, sürüsünü dağıtır, kendisini bulunmamak üzere alır. Ardından karda, çamurda kocaman ayak izleri kalır. Bu yüzden yaylaya çıkan ardıç dalı yakıp kendini ve sürüsünü tütsüler; dağ ardıç dumanını sever, dumanla gelenin saygısını tanır. Geçitteki taş yığınına ya da yalnız ağaca al bir bez bağlanır; dağın iyesi bu payı görünce yolu açar.`,
    clues: {
      kurban: [
        { trait: 'coban', t: `Çoban {K} sürüyü yaylaya çıkardığı gün dönmedi. Koyunlar akşam ağıla kendi geldi; sopası yolda, kepeneği bir kayanın dibinde bulundu.` },
        { trait: 'coban', t: `Sürüyü otlatan {K} üç gün sonra yaylanın öbür yüzünde bulundu. Sürüden tek koyun kalmamış; kendisi hangi yöne yürüdüğünü hatırlamıyor.` },
        { trait: 'coban', t: `Sürünün başındaki {K} sis çökünce ıslıkla köpekleri çağırmış. Köpekler döndü; {K:gen} izi ise bir kayanın önünde bitiyor.` },
        { trait: 'avci', t: `{K} tüfeğini alıp dağa çıkarken “Bu dağ beni yoramaz” diye gülmüştü. Üç gündür dönmedi; tüfeği bir sırtta, namlusu eğilmiş bulundu.` },
        { trait: 'avci', t: `Avcı {K} izini sürdüğü dağ keçisinin ardından sise girdi. Arkadaşları adını bağırdı; dağ yalnızca kendi seslerini geri verdi.` },
        { trait: 'avci', t: `{K} avdan dört gün sonra döndü; dili tutulmuş, saçı bembeyaz. Yanında götürdüğü av köpeği hiç dönmedi.` },
      ],
      iz: [
        { trait: 'buyuk_iz', t: `Yaylanın üstündeki karda kocaman ayak izleri; her biri bir sofra büyüklüğünde, aralarında on adım var.` },
        { trait: 'buyuk_iz', t: `Çamura gömülmüş ayak izleri; insan ayağı biçiminde ama dizden derin. Sırta kadar çıkıyor, orada bulutun içinde kayboluyor.` },
        { trait: 'buyuk_iz', t: `Sürünün dağıldığı yamaçta, ezilmiş çalıların ortasında bir adam boyu uzunluğunda tek bir ayak izi. Öbürü hiçbir yerde yok.` },
      ],
      tanik: [
        { trait: 'gorunmez', t: `{T}: “Sis birden çöktü. İçinde bir şey yürüyordu; görmedim, ama her adımında yer sarsıldı, koyunlar dizlerinin üstüne çöktü.”` },
        { trait: 'gorunmez', t: `{T}: “Kayalar kendi kendine yuvarlandı, rüzgâr birden tersine döndü. Kimseyi görmedim. Ama {K} sanki biri kolundan çekiyormuş gibi yamaca yürüdü.”` },
        { trait: 'gorunmez', t: `{T}: “Arkamda biri nefes alıyordu; sıcak, iri bir nefes. Döndüm; dağdan, bir de sisten başka bir şey yoktu.”` },
        { trait: 'dev', t: `{T}: “Bulutun içinden bir adam doğruldu. Boyu iki adam boyu, belki daha fazla; sırtını dağa yaslamıştı.”` },
        { trait: 'dev', t: `{T}: “Karşı sırtta biri yürüyordu; ağaçlar dizine geliyordu. Bir adım attı, sırtın öbür yanına geçti.”` },
        { trait: 'dev', t: `{T}: “Kayanın başında oturuyordu, upuzun. Başı bulutta kalmıştı; ayağının dibindeki ardıçlar çalı gibi duruyordu.”` },
      ],
      zaman: [
        { trait: 'firtina', t: `Yayla yolunda fırtınaya yakalandılar; şimşek sırtları ağarttı, dolu taş gibi yağdı.` },
        { trait: 'firtina', t: `Gök birden karardı, yazın ortasında kar savurdu. Fırtına bir gün bir gece sürdü.` },
        { trait: 'firtina', t: `Dağın başına kara bulut oturdu, rüzgâr ağılın kapısını menteşesinden söktü. O gece kimse dışarı çıkamadı.` },
      ],
      yer: [
        { trait: 'dag', t: `Köyün üstündeki yayla; çobanların çadır kurduğu düzlük, ötesinde dimdik sırtlar.` },
        { trait: 'dag', t: `Doruğa yakın geçit. Bir taş yığını var; üstünde kurumuş koç boynuzları.` },
        { trait: 'dag', t: `Yaylanın en yüksek sırtı; kayaların arasında kar yaz boyu erimez.` },
      ],
      sebep: [
        { trait: 'ovunmek', t: `{Y}: “Dağa kafa tutulmaz. ‘Bu dağı yarın sabah aşarım’ demiş biri. Dağ da ona yol göstermiş; ama kendi yolunu.”` },
        { trait: 'ovunmek', t: `{Y}: “Yaylaya çıkarken ‘Bu dağ benden büyük değil’ diye övünen olmuş. Dağın kulağı vardır.”` },
        { trait: 'ovunmek', t: `{Y}: “Sofrada dağı küçümsemiş, ‘dağ dediğin bir taş yığını’ demiş. Dağın sahibi kendine söyleneni unutmaz.”` },
      ],
    },
    hunt: {
      intro: [
        `Fırtınalı gecede yaylanın en yüksek sırtında, kayaların dibinde beklediniz.`,
        `Sis çöktü; ayağınızın altında yer bir kez, sonra bir kez daha sarsıldı.`,
      ],
      success: [
        `Ardıç dalını yaktınız, keskin duman sise karıştı. Geçitteki taş yığınına al bezi bağladığınızda sarsıntı durdu.`,
        `Sabah sis kalktı. {K:gen} izi yamaçtan aşağı, köye doğru iniyordu.`,
      ],
      partial: [
        `Dağ bir şey aldı ama yolu tam açmadı; fırtına dinmeden sizi geri çevirdi.`,
        `{K} sağ bulundu. Ama o sırtın ötesine artık kimse sürü çıkarmayacak.`,
      ],
    },
  },

  ifrit: {
    aka: ['Afrit', 'Ifrît'],
    region: 'Arap ve Fars anlatılarından Anadolu’ya geçmiş; harabe ve define hikâyelerinde',
    epithet: 'Harabedeki gömüyü bekleyen ateş cini',
    lore: `Derler ki İfrit cinlerin en güçlüsüdür; dumansız ateşten yaratılmıştır. Yıkık hanlarda, eski kale ve manastır harabelerinde, yerin altındaki gömülerin başında bekler. Ayın hiç görünmediği zifiri gecelerde kazmaya girişen defineciye görünür: önce taşların arasından bir alev, sonra o alevden doğrulan, başı kemere değen bir gövde. Yerin altındakine el uzatanı yakar, öldürür; çukurun başında yalnız kül, is ve sapı kömür olmuş bir kazma kalır. Ondan kurtulan pek azdır. Harabeye girerken besmele çeken, ağzından duayı eksik etmeyen ona kolay yakalanmaz; söz, ateşini söndürmese de onu bağlar. Elinde ayna taşıyan da kurtulur derler: İfrit aynada kendi gerçek yüzünü görünce donakalır, o arada kaçana bakamaz.`,
    clues: {
      kurban: [
        { trait: 'defineci', t: `{K} haritasını kimseye göstermeden yıkık hana gitti. Sabah kazdığı çukurun başında yüzükoyun bulundu; elbiseleri kavrulmuş, kazmanın sapı kömür olmuştu.` },
        { trait: 'defineci', t: `{K} ile iki arkadaşı eski manastırın altını kazıyordu. Biri kaçıp kurtuldu, saçları yanık kokuyordu; {K} ile öteki dönmedi.` },
        { trait: 'defineci', t: `{K} bir gece küp dolusu altının yerini bildiğini söyleyip kazmasını aldı. Ertesi gün çukurdan sıcak bir duman tütüyordu; {K:gen} şapkası çukurun ağzındaydı.` },
      ],
      iz: [
        { trait: 'kul', t: `Çukurun dibinde bir avuç kül, hâlâ ılık. Etrafta ateş yakılmamış, tek bir çıra yok.` },
        { trait: 'kul', t: `Harabenin duvarında, kazının hemen üstünde, iki adam boyu yüksekliğe kadar kapkara is.` },
        { trait: 'kul', t: `Kazmanın ucu erimiş, çukurun ağzındaki toprak sırça gibi kararmış. Ortalık yanık kükürt kokuyor.` },
      ],
      tanik: [
        { trait: 'alev', t: `{T}: “Taşların arasından bir alev çıktı; ne odun vardı ne çıra, havada kendi kendine yanıyordu. Çukura doğru eğildi.”` },
        { trait: 'alev', t: `{T}: “Uzaktan baktım: harabenin içi bir an gün gibi aydınlandı, sonra karardı. Hiç ses gelmedi.”` },
        { trait: 'alev', t: `{T}: “Fenerimiz söndü ama ortalık kararmadı. Duvarların arasında ateşten bir el geziniyordu.”` },
        { trait: 'dev', t: `{T}: “Alevin içinden biri doğruldu. Başı yıkık kubbeye değiyordu; iki adam boyundan uzundu.”` },
        { trait: 'dev', t: `{T}: “Kapı kemerinin altından eğilerek geçti, o kadar uzundu. Gözlerinin yerinde iki kor vardı.”` },
        { trait: 'dev', t: `{T}: “Harabenin öbür ucunda, sütunların arasında biri dikiliyordu. Sütunlar ancak omzuna geliyordu.”` },
      ],
      zaman: [
        { trait: 'aysiz', t: `Ayın hiç doğmadığı gece. Elini uzatsan parmaklarını göremezdin.` },
        { trait: 'aysiz', t: `Ay karanlığı; gökte yalnızca yıldızlar, onlar da bulutun arkasında.` },
        { trait: 'aysiz', t: `Define arayanlar ayın görünmediği geceyi seçer, kimse görmesin diye. Onlar da öyle yapmış.` },
      ],
      yer: [
        { trait: 'harabe', t: `Köyün dışındaki yıkık kervansaray. Avlusunun ortasında yeni kazılmış bir çukur.` },
        { trait: 'harabe', t: `Tepedeki eski kale harabesi; burçları yıkık, mahzenine inen merdiven yarısına kadar toprağa gömülü.` },
        { trait: 'harabe', t: `Yıkık bir manastırın taşları; kemerin altında kazma izleri, yanında devrilmiş bir fener.` },
      ],
      sebep: [
        { trait: 'define', t: `{Y}: “Yerin altındaki mal sahipsiz değildir. Onu oraya koyan, başına bir de bekçi koymuştur.”` },
        { trait: 'define', t: `{Y}: “Define haritası kimseye hayır getirmedi. Altına el uzatan, elini geri alamaz.”` },
        { trait: 'define', t: `{Y}: “O harabede gömü olduğunu herkes bilir; kimse kazmaz. Bunlar kazdı.”` },
      ],
    },
    hunt: {
      intro: [
        `Aysız gecede yıkık hanın avlusunda, çukurun başında beklediniz.`,
        `Taşların arasından bir alev doğruldu, büyüdü; başı kemere değdi.`,
      ],
      success: [
        `Titremeden besmele çektiniz; alev bir an kısıldı. Aynayı ona çevirdiğinizde kendi yüzünü gördü ve donup kaldı.`,
        `Gün doğduğunda çukurun başında soğumuş külden başka bir şey yoktu. {koy} köyünde bir daha kazma sesi duyulmadı.`,
      ],
      partial: [
        `Alev bir an duraksadı, sonra harabenin derinliklerine çekildi; sizi bırakmadı, yalnızca bekledi.`,
        `Sağ çıktınız. Ama yerin altındaki hâlâ orada; bekçisi de.`,
      ],
    },
  },

  suaygiri: {
    aka: ['Su atı', 'Deniz aygırı'],
    region: 'Köroğlu anlatılarından Kafkasya’ya; göl kıyısı köylerinde',
    epithet: 'Gölden çıkıp kısraklara karışan aygır',
    lore: `Derler ki bazı derin göllerin dibinde bir aygır yaşar. Dolunay gecelerinde sudan çıkar; kapkara, yelesi hep ıslak, gözleri suyun rengindedir. Kıyıda otlayan kısraklara karışır; ondan doğan taylar rüzgâr gibi koşar, ama günün birinde göle dönüp kaybolur, kısrakları da peşine takar. Delikanlılara uysal görünür; sırtına binen bir daha inemez, at onu dörtnala göle taşır, sudan geriye yalnız yosun çıkar. En çok sahibi belirsiz bir atı ahırına alan köye dadanır; çünkü o yabancı at çoğu zaman kendisidir. Onu tutmanın yolu demirdir: ağzına demir gem vuran, toynağına nal çakan, aygırı karada bağlar. Ahırın kapısına da kalbur asılır; su kalburda durmaz, sudan gelen de kalburun altından geçemez.`,
    clues: {
      kurban: [
        { trait: 'delikanli', t: `{K} dolunayda kıyıda gördüğü kara atı yakalayıp sırtına atladı. Arkadaşları atın göle doğru dörtnala gittiğini gördü; sudan ne at çıktı ne {K}.` },
        { trait: 'delikanli', t: `Delikanlı {K} günlerdir göl kıyısında oturup suya bakıyor, “bana bir at gelecek” diyordu. Dün gece yatağı boş bulundu, kapı ardına kadar açık.` },
        { trait: 'delikanli', t: `{K} köyün en iyi binicisiydi. Kıyıda bulduğu sahipsiz aygırı evine getirdi; ertesi sabah ne aygır vardı ne {K}.` },
        { trait: 'delikanli', t: `{K} daha on sekizinde. Gece kısrakları sulamaya göle indi; sabah kıyıda yalnızca çarıkları vardı, yan yana, suya dönük.` },
      ],
      iz: [
        { trait: 'islak', t: `Ahırın taş zemininde ıslak toynak izleri. Kapıdan girip kısrağın yanında bitiyor; çıkış izi yok.` },
        { trait: 'islak', t: `Kıyıdan köye çıkan patikada iri, ıslak toynak izleri; içlerinde göl dibinin ince kumu.` },
        { trait: 'islak', t: `Ahırın önünden göle kadar ıslak izler. İçlerine su birikmiş; öğle güneşinde bile kurumamış.` },
        { trait: 'yosun', t: `Kısrağın yelesine, kuyruğuna yeşil göl yosunu dolanmış; tarakla bile çıkmıyor.` },
        { trait: 'yosun', t: `Ahırın yemliğinde saz ve su otu. Atlar arpayı bırakıp onları yemiş.` },
        { trait: 'yosun', t: `Kıyıda, {K:gen} son görüldüğü yerde, bir kucak yosun ve kökünden kopmuş saz; sudan yeni çıkmış gibi ıslak.` },
      ],
      tanik: [
        { trait: 'at', t: `{T}: “Kıyıda kapkara bir aygır duruyordu. Yelesinden su damlıyordu; ay ışığında gözleri gölün rengindeydi.”` },
        { trait: 'at', t: `{T}: “Sürüye bir at karışmıştı, hiçbirimizin değil. Akşam saydık, bir fazla çıktı; sabah saydık, iki eksik.”` },
        { trait: 'at', t: `{T}: “Atın sırtına biri binmişti. At ağır ağır suya yürüdü. Bağırdık; at dönüp bize baktı, sonra suya gömüldü.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Ay dolunaydı; göl gümüş gibi parlıyordu, kıyıda her şey gündüz gibi görünüyordu.` },
        { trait: 'dolunay', t: `Dolunay gecesi. Geçen ay da dolunayda iki kısrak kaçmıştı.` },
        { trait: 'dolunay', t: `Ayın on dördü. Dolunay tepeye yükselince ahırdan kişneme sesleri gelmeye başladı.` },
      ],
      yer: [
        { trait: 'su', t: `Köyün altındaki derin göl. Kıyısında atlar otlar; dibini gören olmamış.` },
        { trait: 'su', t: `Sazlığın bittiği yer; göl kıyısı burada birden derinleşir, su kapkara görünür.` },
        { trait: 'su', t: `Derenin göle döküldüğü kıyı; çamurda toynak izleri, sazlar ezilmiş.` },
      ],
      sebep: [
        { trait: 'yabanci', t: `{Y}: “Sahibi belli olmayan atı ahıra almışsınız. Gelen atın sahibi sorulmadan kapı açılmaz.”` },
        { trait: 'yabanci', t: `{Y}: “Bir ay önce köye eğersiz, yularsız bir kara at geldi. Kimse sahiplenmedi ama herkes besledi.”` },
        { trait: 'yabanci', t: `{Y}: “Ben çocukken de böyle olmuştu. Kıyıda bulunan bir atı içeri aldılar; sonra ahırlar boşaldı.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi göl kıyısında, ahırın kapısını gözleyerek beklediniz.`,
        `Su kabardı; içinden kapkara bir aygır çıktı, yelesinden yosun sarkıyordu.`,
      ],
      success: [
        `Ahırın kapısına kalburu astınız; aygır eşikte durup homurdandı. Ağzına demir gemi vurduğunuzda başını eğdi, kıpırdamadan kaldı.`,
        `Sabah gemi çözüp onu göle saldınız; bir daha çıkmadı. {koy} köyünün kısrakları ahırda eksiksizdi.`,
      ],
      partial: [
        `Aygır şaha kalktı, sizi savurup göle kaçtı; bağlanmadı, yalnızca uzaklaştı.`,
        `{K} kurtuldu. Ama gölün dibinde bir şey hâlâ kıyıya bakıyor.`,
      ],
    },
  },

  kuyuanasi: {
    aka: ['Kuyu iyesi'],
    region: 'Anadolu köylerinde, çocukları kuyudan uzak tutan anlatılarda',
    epithet: 'Kuyuya eğilen çocuğu dibe çeken',
    lore: `Derler ki her eski kuyunun dibinde bir ana oturur. Kuyu Anası öğle sıcağında, güneş kuyunun dibine kadar indiği saatte uyanır. Saçları upuzundur; suyun yüzüne yayılır, yosunla karışır. Kuyunun başında yalnız kalmış çocuğu tatlı bir sesle, adıyla çağırır; çocuk sesi anasının sesi sanıp eğilir, saçlar bileğine dolanır, bir daha görülmez. Kuyunun ağzında, çocuğun durduğu yerde yalnızca ıslak yosun kalır. Bu yüzden analar çocuğu kuyu başında yalnız bırakmaz. Kuyunun ağzına bir kalbur kapatılır; Kuyu Anası kalburun deliklerinden bakarken çocuğun yüzünü seçemez, sesi de deliklerde dağılır. Kuyunun taş bileziğine tuz serpilir; tuzu geçip yukarı uzanamaz, saçlarını dibe çeker.`,
    clues: {
      kurban: [
        { trait: 'cocuk', t: `Küçük {K} öğlen kuyu başında oynuyordu. Anası içeri girip çıkana kadar kuyunun başında yalnızca bir terlik kalmıştı.` },
        { trait: 'cocuk', t: `{K} yedi yaşında. Kuyunun bileziğine çıkmış, eğilip suya bakarken arkadan yakalandı; “biri beni çağırdı” deyip duruyor.` },
        { trait: 'cocuk', t: `Küçük {K} üç gündür yok. Kuyuya ip sarkıttılar; kova yalnızca yosun çıkardı.` },
      ],
      iz: [
        { trait: 'yosun', t: `Kuyunun ağız taşı yeşil yosunla kaplanmış; dün temizlenmişti. Yosun taşın üstünden avluya doğru uzanıyor.` },
        { trait: 'yosun', t: `Kuyudan çekilen kova yarısına kadar yosunla doldu. Su otları kovanın kulpuna sımsıkı sarılmış.` },
        { trait: 'yosun', t: `Çocuğun bıraktığı tahta oyuncak kuyunun başında. Üstü bir gecede yosun bağlamış, sanki yıllardır suyun dibindeymiş.` },
      ],
      tanik: [
        { trait: 'cagiran', t: `{T}: “Kuyunun dibinden bir ses {K:gen} adını söyledi; üç kez, tatlı tatlı. Anasının sesine benziyordu.”` },
        { trait: 'cagiran', t: `{T}: “Avluda kimse yokken kuyudan biri çocukları adlarıyla çağırıyordu. Sırayla, büyükten küçüğe.”` },
        { trait: 'cagiran', t: `{T}: “Ses kuyudan geliyordu ama yankısı yoktu; sanki biri kulağımın dibinde konuşuyordu. Adımı biliyordu.”` },
        { trait: 'uzun_sacli', t: `{T}: “Kuyuya eğildim. Suyun yüzünde bir kadın yüzü vardı; saçları suyun her yanına yayılmıştı.”` },
        { trait: 'uzun_sacli', t: `{T}: “Kuyunun bileziğinde bir kadın oturuyordu, sırtı bana dönük. Saçları kuyunun içine sarkıyordu; ucu görünmüyordu.”` },
        { trait: 'uzun_sacli', t: `{T}: “Kadının saçı ayak bileklerine kadar iniyordu; ıslak, yeşile çalan bir siyah. Çocuğun elinden tutmuştu.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Öğle sıcağında; avlu bomboş, herkes ya gölgede ya içeride.` },
        { trait: 'ogle', t: `Güneş tam tepedeyken; kuyunun dibine kadar ışığın düştüğü tek saat.` },
        { trait: 'ogle', t: `Öğlen, çeşmeler ılıklaşıp kuyu suyu buz gibi soğuduğunda.` },
      ],
      yer: [
        { trait: 'kuyu', t: `Avlunun köşesindeki eski kuyu; ağzı taş bilezikli, kovası paslı zincire bağlı.` },
        { trait: 'kuyu', t: `Köy meydanındaki ortak kuyu. Yanına kimse çocuk göndermez; o gün gönderilmiş.` },
        { trait: 'kuyu', t: `Bahçenin dibindeki, kurudu sanılan kuyu. Dibinden hâlâ su sesi geliyor.` },
      ],
      sebep: [
        { trait: 'yalniz', t: `{Y}: “Çocuk kuyu başında yalnız bırakılmaz. Bir göz bakarken o el uzatamaz.”` },
        { trait: 'yalniz', t: `{Y}: “Anası tandıra girmiş, çocuğu avluda tek başına bırakmış. Kuyu da bunu beklerdi.”` },
        { trait: 'yalniz', t: `{Y}: “Bütün ev işe gitmiş, çocuk avluda tek kalmış. Kuyunun kimi beklediğini bilmezler mi?”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, kuyunun yanında kımıldamadan beklediniz.`,
        `Kuyudan tatlı bir ses yükseldi, bir çocuğun adını söyledi; suyun yüzünde saçlar dalgalandı.`,
      ],
      success: [
        `Kuyunun ağzına kalburu kapattınız; ses deliklerden süzülürken çatallandı. Bileziğe serptiğiniz tuza değince saçlar suya çekildi.`,
        `Kuyu sustu. {K} o akşam avlunun dibinde, ıslak ama sağ bulundu.`,
      ],
      partial: [
        `Ses sustu ama kuyu tam kapanmadı; saçlar dibe çekilip orada bekledi.`,
        `{K} kurtuldu. O kuyudan bir daha su çekilmeyecek.`,
      ],
    },
  },

  ekiniyesi: {
    aka: ['Ekin Ana'],
    region: 'Anadolu’nun hasat töreleri; Türk ve Avrupa halklarının ekin iyesi inancı',
    epithet: 'Son demetin hakkını isteyen',
    lore: `Derler ki her tarlanın ekininde bir iye yaşar. Orak indikçe tarlanın ortasına çekilir, sonunda son kalan başakların içine sığınır. O son demete orak vurulmaz; bir avuç başak ayakta bırakılır, örülür, dede sakalı diye ona ayrılır. Hakkı verilmeyen Ekin İyesi kendini harman vaktinde gösterir: kimi zaman samandan örülmüş, iki büklüm bir kocakarı olarak tarlanın kıyısında belirir, kimi zaman hiç görünmez de demetler kendi kendine çözülür. Sonra tarlada ne kaldıysa bir gecede kurur; ambara giren buğdaydan ekmek çıkmaz, ertesi yılın tohumu çimlenmez. Gönlü, son demet ona adak olarak geri bırakılarak alınır. Demetin ucuna al bir kurdele bağlanır ki iyesi payının ayrıldığını görsün, kimse de bilmeden ona orak sallamasın.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} tarlasını son sapına kadar biçti, “bir avuç başağı kime bırakacağım” dedi. Ertesi sabah demetlerin hepsi sapsarı, içi boş.` },
        { trait: 'ciftci', t: `{K:gen} ambarına giren buğday bir haftada çürüdü. Değirmenden gelen un hamur tutmuyor, ekmek fırında dağılıyor.` },
        { trait: 'ciftci', t: `{K} bu yıl harmandan eli boş döndü. Dövülen sapın içinden başak değil, kara bir toz çıktı.` },
      ],
      iz: [
        { trait: 'kuru', t: `Biçilmeyi bekleyen son dönüm bir gecede kurumuş; başakların içi boş, dokununca dağılıyor.` },
        { trait: 'kuru', t: `Tarlanın kıyısındaki yeşil ot şeridi bile sapsarı. Kuruluk tarlanın ortasından dışarı doğru yayılmış.` },
        { trait: 'kuru', t: `Demetlerin altındaki toprak çatlamış, yeşil ne varsa kavrulmuş. Bir gün önce otların üstünde çiy vardı.` },
      ],
      tanik: [
        { trait: 'kocakari', t: `{T}: “Tarlanın kıyısında iki büklüm bir kocakarı oturuyordu. Üstü başı samandı, saçı kuru başaktı.”` },
        { trait: 'kocakari', t: `{T}: “Demetlerin arasında belinden iki kat olmuş yaşlı bir kadın gezindi. Her demeti tek tek yokladı; birini arıyordu sanki.”` },
        { trait: 'kocakari', t: `{T}: “Arkamdan bir kocakarı öksürdü. Döndüm; yüzü buruşuk, samandan bir bebek gibi küçücük, harman tozunun içinde kayboldu.”` },
        { trait: 'gorunmez', t: `{T}: “Yel yoktu, ama demetler birer birer çözülüp devrildi. Kimse dokunmadı.”` },
        { trait: 'gorunmez', t: `{T}: “Harman yerinde düvenin arkasından biri yürüyordu. Ayak sesini duydum; ne kendisi vardı ne gölgesi.”` },
        { trait: 'gorunmez', t: `{T}: “Ekinin içinde bir şey yürüyordu; başaklar önünde açılıp arkasında kapanıyordu. Başka bir şey görmedim.”` },
      ],
      zaman: [
        { trait: 'harman', t: `Harman vakti; sap dövülüyor, düvenler dönüyor, köyün yarısı harman yerinde.` },
        { trait: 'harman', t: `Biçim bitti, harman başladı başlayalı. Dövülmemiş demetler daha tarlada yığılı.` },
        { trait: 'harman', t: `Ekin kaldırılırken, tarlanın son dönümü biçilirken.` },
      ],
      yer: [
        { trait: 'tarla', t: `{K:gen} buğday tarlası. Biçilmiş, demetler sıra sıra dizilmiş; ortada tek bir avuç başak bile ayakta kalmamış.` },
        { trait: 'tarla', t: `Köyün en verimli tarlası; anız hâlâ sıcak, kenarında demetler yığılı.` },
        { trait: 'tarla', t: `Tarlanın tam ortası, son biçilen yer; orak izleri hâlâ belli.` },
      ],
      sebep: [
        { trait: 'adak_unutmak', t: `{Y}: “Son demet biçilmez; bir avuç başak ayakta bırakılır, örülür. Onun payıdır. Bu yıl kimse bırakmamış.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Tarlanın hakkı verilmedi. Toprak verdi verdi; siz bir avucunu bile geri vermediniz.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Dedeniz dede sakalını bırakmadan tarladan çıkmazdı. Bu yıl açgözlülük edildi.”` },
      ],
    },
    hunt: {
      intro: [
        `Harman gecesi, biçilmiş tarlanın ortasında, yığılı demetlerin yanında beklediniz.`,
        `Yel yokken bir demet devrildi; ardından samandan, iki büklüm bir gövde doğruldu.`,
      ],
      success: [
        `Ayakta bıraktığınız son başakları örüp ona adadınız, ucuna al kurdeleyi bağladınız. Kocakarı demetin dibine çöktü, saman gibi dağılıp toprağa karıştı.`,
        `Sabah kuruyan anızda yeşil bir şerit vardı. {K:gen} ambarına giren buğday yeniden ekmek oldu.`,
      ],
      partial: [
        `Payını aldı ama tam razı olmadı; tarladan çekildi, kuruluk orada durdu.`,
        `{K} kışı çıkaracak. Ama gelecek yıl o tarlada kimse son demete dokunmayacak.`,
      ],
    },
  },

  kormos: {
    aka: ['Kormos', 'Körmös ruhları'],
    region: 'Altay Türklerinin ata ve ölü ruhları inancı',
    epithet: 'Anılmayan ölünün aç dönen ruhu',
    lore: `Derler ki Altay’da ölen kişinin ruhu bir süre evinin çevresinde dolaşır. Yakınları onu anar, ocağa yemek atıp doyurursa yoluna gider; unutulursa körmös olur, eve döner. Hep aynı saatte, öldüğü saatte gelir; ocağın başına oturur, ev halkı onu tanıdık bir yüz olarak görür. Gelişini ocaktaki külden bilirler: sabahları kül odaya savrulmuş, ocak taşında taze is. Dadandığı evde insanlar gün gün erir; iştahları kesilir, düşlerinde ölüyü sofrada görürler. Çünkü aç olan odur; yediklerini o yer. Onu yatıştırmanın yolu adaktır: ateşe yağ, et, bir parça ekmek atılır, ölünün adı yüksek sesle söylenir. Ocak o gece söndürülmez; ateş adağı ölüye ulaştırır, sabaha kadar yanan ateşin yanında körmös uzun kalamaz.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde herkes gün gün eriyor. Sofradan aç kalkıyorlar ama tabaklar bitmiş; sanki yemeği başkası yemiş.` },
        { trait: 'hane', t: `Ev halkı bir aydır sararıp soluyor. Hepsi gece aynı saatte uyanıyor, hepsi aynı düşü anlatıyor.` },
        { trait: 'hane', t: `{K} anlatıyor: önce ninesi yatağa düştü, sonra kardeşleri, şimdi kendisi. Ateşleri yok, yaraları yok; yalnızca eriyorlar.` },
      ],
      iz: [
        { trait: 'kul', t: `Sabahları ocağın külü dağılmış, içinde parmakla çizilmiş gibi çizgiler. Gece ocak örtülüydü.` },
        { trait: 'kul', t: `Sofra bezinin üstünde ince bir kül tabakası; ekmeğin kenarları is tutmuş.` },
        { trait: 'kul', t: `Ocağın önündeki minderde kül; birinin bütün gece orada oturduğu belli.` },
      ],
      tanik: [
        { trait: 'olu', t: `{T}: “Ocak başında {D} oturuyordu, öldüğü günkü gömleğiyle. Ateşe bakıyordu ama ellerini ısıtmıyordu.”` },
        { trait: 'olu', t: `{T}: “Rahmetli {D} kapı aralığından içeri baktı. Yüzü kül gibiydi. Bir şey istedi; ne istediğini anlamadım.”` },
        { trait: 'olu', t: `{T}: “Sofraya oturduğumuzda karşımda {D} vardı. Ağzını açtı, bir lokma istedi.”` },
      ],
      zaman: [
        { trait: 'ayni_saat', t: `Her gece aynı saatte; tam {D:gen} öldüğü saatte.` },
        { trait: 'ayni_saat', t: `Yedi gecedir, saat şaşmadan. Ev halkı o saatte kendiliğinden uyanıyor.` },
        { trait: 'ayni_saat', t: `Gece hep aynı vakitte ocak bir kez çıtırdıyor; ardından derin bir sessizlik.` },
      ],
      yer: [
        { trait: 'ocak', t: `Evin ocağı. Rahmetlinin minderi hâlâ ocağın sağında; kimse oturmuyor.` },
        { trait: 'ocak', t: `Ocak başı; sacayağının yanında boş bir tabak. Kimin koyduğunu kimse bilmiyor.` },
        { trait: 'ocak', t: `Ocağın önü. Kül her sabah ocaktan dışarı, odanın ortasına doğru savrulmuş.` },
      ],
      sebep: [
        { trait: 'olu_unutmak', t: `{Y}: “{D:gen} kırkı çıktı, yılı geldi geçti. Kimse ocağa bir lokma atmadı, kimse adını anmadı.”` },
        { trait: 'olu_unutmak', t: `{Y}: “Ölü aç kalırsa evine döner. Bu evde ölüler için yağ yakılmaz oldu.”` },
        { trait: 'olu_unutmak', t: `{Y}: “Bayramda mezara gidilmedi, ölülerin payı ayrılmadı. Unutulan, unutanı unutmaz.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece, ocağın başında, {D:gen} öldüğü saati bekleyerek oturdunuz.`,
        `Saat geldi; ocak kendiliğinden çıtırdadı, kül kıpırdadı, ocağın sağındaki mindere biri oturdu.`,
      ],
      success: [
        `Ateşe yağ ve ekmek attınız, {D:gen} adını yüksek sesle söylediniz. Ateşi sabaha kadar söndürmediniz; yüz alevlere bakıp yavaşça soldu.`,
        `Ertesi gün evde herkes iştahla yedi. {K} ilk kez sabaha kadar uyudu.`,
      ],
      partial: [
        `Bir şey aldı ama yerinden tam kalkmadı; ateş bir ara titreyip kısıldı.`,
        `Ev biraz toparlandı. Ama her gece o saatte ocak hâlâ bir kez çıtırdıyor.`,
      ],
    },
  },

  kiremet: {
    aka: ['Keremet'],
    region: 'Çuvaşlar ve İdil boyu halkları arasında',
    epithet: 'Kutlu korunun adağını isteyen iyesi',
    lore: `Derler ki köyün dışındaki kutlu koruda, kimsenin dal kırmadığı ulu ağaçların altında Kiremet oturur. Görünmez; varlığı ağaçlar arasındaki ağır sessizlikten, kuşların o koruya konmamasından bilinir. Baharda, kar kalkıp toprak açılınca payını bekler. Ona adanan kurban getirilmezse önce koru, sonra tarla kurur; ekin bitmez, evlerde nereden geldiği bilinmeyen kan görülür. En çok tarladaki çiftçiye ve bütün haneye dokunur. Bu yüzden borcu geciken köy koruda büyük bir ateş yakar; Kiremet payını ateşten, göğe yükselen dumandan alır, sönmeyen ateşin başına gelenleri tanır. Ulu ağaçların dallarına al bezler bağlanır; al, borcun unutulmadığını, korunun hakkının tanındığını bildirir. Ateşi yakılan, dalına al bağlanan koru yatışır, tarlayı ve evi bırakır.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} bu bahar tarlaya ilk tohumu attı. Bir hafta geçti, tek bir filiz çıkmadı; komşunun tarlası yemyeşil.` },
        { trait: 'ciftci', t: `{K} tarlasını üç kez sürdü, üç kez ekti. Toprak tohumu yuttu, geri bir şey vermedi.` },
        { trait: 'ciftci', t: `{K:gen} tarlasında bu yıl ne ekildiyse ya kurudu ya çürüdü; ambarda tohumluk bile kalmadı.` },
        { trait: 'hane', t: `{K:gen} evinde bahardan beri ne tutulsa ters gidiyor. Ambar boşaldı, kilerdeki unu kurt bastı, evin en küçüğü sararıp soldu.` },
        { trait: 'hane', t: `Bütün ev halkı aynı düşü görüyor: korunun ortasında boş bir kazan, altında ateş yok. Sabah kalktıklarında ekmek teknesi de boş.` },
        { trait: 'hane', t: `{K} anlatıyor: hamur mayalanmıyor, kesedeki para eriyor, evde kimin eli neye değse kırılıyor.` },
      ],
      iz: [
        { trait: 'kan', t: `Korunun en büyük ağacının dibinde, köklerin arasında kurumuş kan. Orada kimse hayvan kesmedi.` },
        { trait: 'kan', t: `Ekmek teknesinin kenarında kan damlaları. Evde kimse yaralanmamış.` },
        { trait: 'kan', t: `Sabah tarlanın ortasındaki taşın üstünde taze kan; çevresinde ne bir iz var ne bir tüy.` },
        { trait: 'kuru', t: `Korunun kıyısındaki genç ağaçlar bir gecede kurumuş; yapraklar dalda, ama hepsi kahverengi.` },
        { trait: 'kuru', t: `Tarlanın koruya bakan yanında yeni çıkan filizler bir gecede sararmış; öbür yanı yemyeşil.` },
        { trait: 'kuru', t: `Bahçedeki elma ağacı daha çiçek açmadan kurudu; tomurcuklar dokununca toz oluyor.` },
      ],
      tanik: [
        { trait: 'gorunmez', t: `{T}: “Korudan geçerken arkamdan biri yürüdü. Durdum, durdu. Döndüm, kimse yok. Kuşlar da susmuştu.”` },
        { trait: 'gorunmez', t: `{T}: “Korunun içinde ağaçlar rüzgârsız eğildi; hepsi aynı yana, köye doğru. Kimseyi görmedim.”` },
        { trait: 'gorunmez', t: `{T}: “Korunun ağzında bir şey beni geri itti; ağır, sıcak, rüzgâra benzemeyen bir şey. Ne gördüm diye soruyorsunuz; hiçbir şey.”` },
      ],
      zaman: [
        { trait: 'bahar', t: `Bahar geldi geleli; karlar eriyip toprak açıldığından beri.` },
        { trait: 'bahar', t: `Hıdırellez yaklaşırken, ağaçlar yeni yapraklanırken.` },
        { trait: 'bahar', t: `İlk ekim zamanı; kırlangıçlar dönmüş, ağaçlar tomurcuklanırken.` },
      ],
      yer: [
        { trait: 'agac', t: `Korunun ortasındaki ulu meşe. Dibinde yassı bir taş; üstünde yıllar önce bırakılmış adakların kararmış izleri.` },
        { trait: 'agac', t: `Korunun ağzındaki yaşlı ıhlamur. Gövdesi kovuk, kovuğun içi kapkara.` },
        { trait: 'agac', t: `Ulu bir meşenin altı; kökleri toprağın üstünde, kalın parmaklar gibi kıvrılmış.` },
        { trait: 'orman', t: `Köyün dışındaki kutlu koru. Kimse dal kırmaz, odun toplamaz; çit içinde kalmış bir avuç orman.` },
        { trait: 'orman', t: `Ormanın içinde, yolun bittiği yer. Ağaçlar burada sık, ışık yere düşmüyor.` },
        { trait: 'orman', t: `Eski ormanın derinleri; kuş sesi gelmeyen, yaprakların yerde kat kat çürüdüğü yer.` },
      ],
      sebep: [
        { trait: 'adak_unutmak', t: `{Y}: “Geçen bahar koruya bir koç adandı. Koç getirilmedi, ağıla geri kondu.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Bu köy her bahar koruya giderdi. Bu yıl gidilmedi. Hakkını alamayan, hakkını kendi alır.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Adanan unutulmaz. Unutulursa o unutmaz; tarladan, ambardan, evden alır.”` },
      ],
    },
    hunt: {
      intro: [
        `Bahar gecesi kutlu korunun ağzında, ulu ağacın gölgesinde beklediniz.`,
        `Kuşlar sustu; rüzgâr yokken bütün ağaçlar aynı yana, köye doğru eğildi.`,
      ],
      success: [
        `Ulu ağacın dibinde büyük bir ateş yaktınız; dumanı dalların arasından göğe yükseldi. Dallara al bezleri bağladığınızda eğilen ağaçlar yavaşça doğruldu.`,
        `Sabah korudan kuş sesleri geldi. {K:gen} tarlasında ilk filizler toprağı yardı.`,
      ],
      partial: [
        `Koru bir süre yatıştı, ama ağır sessizlik dağılmadı; hakkı tam ödenmemişti.`,
        `Köy bu baharı kurtardı. Gelecek bahar koru yine hakkını soracak.`,
      ],
    },
  },
};
