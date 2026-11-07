// Bestiary batch B: devler, periler, yılanlar, hayvan kılıklılar, define bekçisi.
// Format and rules: CONTENT_GUIDE.md. Traits and tools are fixed in ./roster.js.
export default {
  tepegoz: {
    aka: ['Depegöz'],
    region: 'Oğuz yurdu; Dede Korkut’un Basat boyunda anlatılır',
    epithet: 'Alnında tek gözü olan dağ devi',
    lore: `Derler ki Tepegöz bir çobanla bir peri kızının birleşmesinden doğmuştur. Boyu iki adam boyu, gözü bir tanedir; o da alnının ortasında durur. Anası parmağına bir yüzük takmış, o günden beri bedenine ok işlemez, kılıç kesmez. Büyüyünce dağa çıkmış, bir mağarayı yurt tutmuştur. Otlağına izinsiz giren sürüyü de çobanı da kendi payı sayar; Oğuz ondan korkup ona her gün iki adamla beş yüz koyun vermiştir. Öğle sıcağında, güneş tepedeyken mağarasının ağzında uyuklar. Tek yumuşak yeri o gözdür. Basat bir şişi ateşte kızdırıp o göze saplamış, onu kör etmişti. Bu yüzden ona gidenler yanlarında ateş götürür, ucunu közde kızdırdıkları bir çuvaldızı gözüne saplamak için öğle uykusunu kollar.`,
    clues: {
      kurban: [
        { trait: 'coban', t: `Çoban {K} sürüyü öğlen yaylanın üst yamacına çıkarmıştı. Sürü akşam kendi başına döndü. {K:gen} cenazesini ertesi gün kayalıkların dibinden dört kişi taşıyıp indirdi.` },
        { trait: 'coban', t: `{K} kırk yıllık çobandı; kurdu da ayıyı da bilirdi. Kepeneği mağaraya çıkan patikada ikiye yırtık bulundu. Kendisini biraz yukarıda, gözleri açık bulduk.` },
        { trait: 'coban', t: `{K:gen} sürüsünden on iki koyun eksik. {K} dağdan inmedi; aradık, bulduk. Eli hâlâ sapanını sıkıyordu, taşı atamamıştı.` },
      ],
      iz: [
        { trait: 'buyuk_iz', t: `Yayla yolundaki çamurda bir ayak izi. İçine iki çarık yan yana sığıyor; topuğun bastığı yer bir karış çökmüş.` },
        { trait: 'buyuk_iz', t: `Ağılın taş duvarı bir yerden yıkılmış. Önündeki yumuşak toprakta, her biri bir kucak boyunda çıplak ayak izleri mağaraya doğru gidiyor.` },
        { trait: 'buyuk_iz', t: `Kayalığın tozunda kocaman izler var. Bir çoban ayağını birinin içine koydu; izin ancak yarısını doldurabildi.` },
        { trait: 'kan', t: `Mağaraya çıkan patikanın taşlarında kan damlaları. Öğle güneşinde kurumuş, kararmış; sinekler başından ayrılmıyor.` },
        { trait: 'kan', t: `Ağılın önünde çiğnenmiş otların üstü kan. Kurt böyle yapmaz, diyor çobanlar; kurt sürükler, bu taşımış.` },
        { trait: 'kan', t: `Kayanın düz yüzünde kanlı bir el izi, insan eli. Biraz ötede bir kuzunun yünü kana bulanıp taşa yapışmış.` },
      ],
      tanik: [
        { trait: 'dev', t: `{T}: “Sırtın ardından önce bir baş yükseldi, sonra omuzlar. İki adam boyu vardı. Koyunlar yerlerinde kaldı, kaçmayı bile akıl edemediler.”` },
        { trait: 'dev', t: `{T}: “Kayanın yanında durdu; kaya ancak beline geliyordu. Ben o kayaya elimi dayamadan çıkamam.”` },
        { trait: 'dev', t: `{T}: “Uzaktan bir adam sandım. Yaklaştıkça büyüdü, büyüdü. Yanındaki meşe çalısı dizine bile gelmiyordu.”` },
        { trait: 'tek_goz', t: `{T}: “Yüzünde iki göz yoktu. Bir tane vardı, alnının ortasında, bir tas büyüklüğünde. Kırpmadan bana baktı.”` },
        { trait: 'tek_goz', t: `{T}: “Mağaranın karanlığında tek bir göz parladı. Sağa döndü, sola döndü; hep tek bir göz.”` },
        { trait: 'tek_goz', t: `{T}: “Sırtını dönmüş uyuyordu. Başını çevirince alnının ortasında tek bir göz açıldı. O gözü her gece rüyamda görüyorum.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Güneş tam tepedeyken. Gölgeler ayağın altına çekilmiş, çobanlar kaya diplerinde uyukluyordu.` },
        { trait: 'ogle', t: `Öğle sıcağında. Ne kuş ötüyordu ne sinek vızıldıyordu; taşlardan buğu yükseliyordu.` },
        { trait: 'ogle', t: `Vakit öğleydi. Sürü sıcaktan sızmış, kayaların gölgesine yığılmıştı. O saatte dağda kimse gözünü açık tutamaz.` },
      ],
      yer: [
        { trait: 'dag', t: `{koy} yaylasının en üst sırtı. Kar yazın da tam erimiyor; çobanlar bu yıl sürüyü o sırta çıkarmıyor.` },
        { trait: 'dag', t: `Dağın belinde, yaylaya varmadan, kayaların bir duvar gibi dizildiği yer. Rüzgâr orada hiç dinmiyor.` },
        { trait: 'dag', t: `Yüksek yayla. Ağılın taşları dağılmış, çoban kulübesinin damı içeri çökmüş; ikisi de bir omuz darbesiyle yıkılmış gibi.` },
        { trait: 'magara', t: `Dağın yamacında, ağzı bir ev kapısından geniş bir mağara. Önü kemik dolu, içi ağıl gibi kokuyor.` },
        { trait: 'magara', t: `Mağaranın ağzını kapatacak büyüklükte bir taş kenara itilmiş. O taşı on adam yerinden oynatamaz.` },
        { trait: 'magara', t: `Kayalığın altındaki mağara. Ağzında kemikler yığılmış; en üsttekiler ötekilerden daha beyaz.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “O yayla onun otlağıdır. Dedelerimiz oraya sürü çıkarmazdı. Bu yıl biri çit çekip sürüsünü orada otlattı.”` },
        { trait: 'izinsiz', t: `{Y}: “Kayalıkların ardındaki çayır peri yurdudur derdi babam; onun anası da onlardandı. Oraya sormadan giren ona hesap verir.”` },
        { trait: 'izinsiz', t: `{Y}: “Payını alan rahat durur. Ama sınırı çiğnenirse koyunla yetinmez. Siz onun dağına izinsiz çıktınız.”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, mağaranın ağzını gören kayaların arkasında beklediniz.`,
        `Yer titredi. Mağaranın karanlığından iki adam boyunda biri çıktı, güneşte durdu, tek gözünü kırpıştırdı.`,
      ],
      success: [
        `Kaya gölgesinde uyukladığında közde kızdırdığınız çuvaldızı alnındaki göze sapladınız. Böğürmesi dağı inletti; meşaleleri sallayıp onu mağaranın dibine sürdünüz.`,
        `Ertesi gün yayla sessizdi. Sürü yeniden yamaca çıktı, bir çoban kaval çaldı.`,
      ],
      partial: [
        `Gözüne ulaşamadınız; ya ucunuz kızgın değildi ya elinizde sivri bir şey yoktu. Korkup mağaranın dibine çekildi.`,
        `{koy} bu yaz yaylaya çıkmayacak. O tek göz hâlâ karanlıkta açık.`,
      ],
    },
  },

  yelmoguz: {
    aka: ['Yalmavuz', 'Yalmauz'],
    region: 'Türk masallarında; Anadolu’dan Kazak bozkırına',
    epithet: 'Nine kılığında yol bekleyen yamyam kocakarı',
    lore: `Derler ki Yelmoğuz bir kocakarıdır ama kocakarı değildir. Akşam karanlığı orman yoluna çökerken yol kenarında iki büklüm oturur; yorgun yolcuyu, eve geç kalan çocuğu “gel yavrum, ocağım sıcak” diye kulübesine çağırır. Yüzü nine yüzüdür, dişleri demirdendir. Misafirini doyurur, yatırır, gece dişlerini biler. Yalnız yola çıkanı sever; kalabalığa görünmez. Ondan kaçan masal kahramanları ardlarına bir ayna atmış, ayna koca bir göl olmuş. Bir çuvaldız atmışlar, çuvaldız dikenli bir çalılık olmuş. Kocakarı gölü dolanırken, dikenlerde eteğini yırtarken kaçan kurtulmuş. Bu yüzden akşamüstü orman yoluna düşen, cebinde küçük bir ayna, yakasında bir çuvaldız taşır.`,
    clues: {
      kurban: [
        { trait: 'cocuk', t: `Küçük {K} akşam ezanından önce eve dönecekti. Orman yolunda bulduk; ayakkabısının biri yolun ortasında, kendisi çalıların arasında. Elinde yarım bir elma vardı.` },
        { trait: 'cocuk', t: `{K} yedi yaşındaydı, ninesine bir bohça götürüyordu. Bohça ormandaki yıkık bir kulübenin önünde bulundu. {K:gen} cenazesini ertesi gün kaldırdık.` },
        { trait: 'cocuk', t: `Küçük {K} gün batarken yol kenarındaki bir kadına el sallamış, arkadaşları görmüş. “Ninem beni bekliyor” deyip gitmiş. Onu sabah yolun kıyısında, uyur gibi yatarken bulduk.` },
        { trait: 'yolcu', t: `Kasabadan dönen {K} kestirme diye orman yolunu tutmuş. Atı sabah köye yalnız geldi, eyerinde kan. {K} akşama doğru bulundu.` },
        { trait: 'yolcu', t: `Yolcu {K} akşamüstü hanın önünden geçmiş, “karanlık basmadan ormanı aşarım” demiş. Aşamadı. Heybesi yolun ortasındaydı, içine el sürülmemişti; kendisini iki gün sonra bulduk.` },
        { trait: 'yolcu', t: `{K} başka köyden bir yolcuydu. Bizden su istedi; karanlık basmak üzereydi, kalmadı. Ertesi gün orman yolunda, boş bir kulübenin önünde ölü bulundu.` },
      ],
      iz: [
        { trait: 'kan', t: `Yolun toprağında kan lekeleri. Bir yerde çoğalmış, sonra çalıların arasına doğru incelip kaybolmuş.` },
        { trait: 'kan', t: `Ormandaki kulübenin taban tahtaları silinmiş, ama aralarına kan dolmuş. İçeride yeni yıkanmış bir tencere, bir de iki çift çarık.` },
        { trait: 'kan', t: `Yol kenarındaki çalıya bir kuşak takılmış; ucu kan içinde. Kimin olduğunu bilen yok.` },
      ],
      tanik: [
        { trait: 'kocakari', t: `{T}: “Yolun kenarında iki büklüm bir nine oturuyordu. ‘Gel yavrum, ocağım sıcak’ dedi. Gülünce dişlerini gördüm; bir ninenin ağzında o kadar diş olmaz.”` },
        { trait: 'kocakari', t: `{T}: “Sırtında çalı demeti taşıyan kambur bir kocakarı. Evine kadar elinden tutmamı istedi. Elini tuttum; buz gibiydi, bırakmadı. Zor kurtardım.”` },
        { trait: 'kocakari', t: `{T}: “Bastonuna dayanmış, iki büklüm bir kocakarı yolun ortasında duruyordu. Çocuğun adını sordu, söylemedim. Ardımdan uzun süre baktı, hiç kımıldamadan.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığında; gün batmış, kandiller daha yakılmamışken, her şeyin boza döndüğü o saatte.` },
        { trait: 'aksam', t: `Güneş ağaçların ardına indiğinde. Yolcular o saatte adımlarını sıklaştırır, çocuklar eve çağrılır.` },
        { trait: 'aksam', t: `Akşam ezanı okunmuştu. Yol daha seçiliyordu ama renkler gitmişti; ağaçlar karaya, yol griye dönmüştü.` },
      ],
      yer: [
        { trait: 'orman', t: `Ormanın içinde, kimsenin kesmediği eski bir koruluk. Ağaçların arasında yıkık, bacası tütmeyen bir kulübe.` },
        { trait: 'orman', t: `Gürgenlerin sıklaştığı yer. Güneş girmez, kuş ötmez; patika orada daralıp ikiye ayrılıyor.` },
        { trait: 'orman', t: `Köyle kasaba arasındaki orman. Odunculara sorduk; içeride oturan bir nine olduğunu hiçbiri bilmiyor.` },
        { trait: 'yol', t: `Köyle kasaba arasındaki ıssız yol. İki saatlik yürüyüşte ne bir ev var ne bir çeşme.` },
        { trait: 'yol', t: `Eski kervan yolu. Artık kimse kullanmıyor; yalnız kestirmeden gitmek isteyenler o yoldan geçiyor.` },
        { trait: 'yol', t: `Yolun döndüğü, iki yanında çalıların yükseldiği yer. Kenarda oturmak için düzlenmiş bir taş var, üstü cilalı gibi parlak.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Akşamüstü yola tek başına çıkılmaz. Yanında kimse olmayanı o bekler, yanında biri olana görünmez.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Yalnız yolcu onun rızkıdır, derdi anam. Karanlık basarken ormana tek başına giren ona misafir olur.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Bir kafileyle gitseydi bir şey olmazdı. Akşam yolunu tek başına yürüdü; tek yürüyene nine çıkar.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında orman yolunun döndüğü yerde, kenardaki düz taşın yakınında beklediniz.`,
        `Ağaçların arasından iki büklüm bir nine çıktı. “Üşümüşsün yavrum” dedi; gülünce ağzı diş doluydu.`,
      ],
      success: [
        `Peşinize düştüğünde aynayı ardınıza attınız; yol bir göl oldu. Gölü dolanınca çuvaldızı fırlattınız; ardınızda dikenli bir çalılık bitti.`,
        `Dikenlerin arasından çıkamadı. Sabah orman yolunda yırtık bir etek parçasından başka bir şey yoktu.`,
      ],
      partial: [
        `Attığınız şey önünü kesti ama yolunu kapatmadı. Arkanızdan söylendi, döndü, ağaçlara karıştı.`,
        `Köye sağ vardınız. Ama ormanın içinde bir kulübenin bacası bu akşam yine tütüyor.`,
      ],
    },
  },

  dev: {
    aka: ['Div'],
    region: 'Anadolu masallarında; Fars divlerinin akrabası',
    epithet: 'Dağdaki kuyunun suyunu tutan dev',
    lore: `Derler ki Dev dağların ardında, kimsenin su almadığı derin kuyuların başında oturur. Boyu iki adam boyu, adımı bir tarla boyudur; öğle sıcağında kuyunun ağzına gölge olur, uyuklar. O kuyu onundur. Suyuna izinsiz kova sarkıtan, dağına sormadan çıkan delikanlıyı yakalar, kuyunun dibindeki yurduna götürür; çoğu bir daha görülmez. Masallarda yiğit kuyunun başına varınca önce selam verir. Dev “Selamın olmasaydı seni bir lokmada yutardım” der; selamı alan dev selam verene dokunamaz. Bir de onunla tuz ekmek yiyenin hakkı vardır: dev tuzunu yediği adama kıyamaz, ona yolunu gösterir. Bu yüzden dağa çıkan delikanlının dilinde selam, heybesinde bir avuç tuz olur.`,
    clues: {
      kurban: [
        { trait: 'delikanli', t: `{K} yirmisinde, daha nişanlanmamış bir delikanlı. Kuyudan su getirmeye çıktı. Testisi kuyunun başında duruyor, kendisi yok.` },
        { trait: 'delikanli', t: `Bekâr {K} öğlen dağa çıkmış, bir daha inmedi. Çarığının biri kuyunun ağzında bulundu, öbürü hiçbir yerde yok.` },
        { trait: 'delikanli', t: `{K} köyün en güçlü delikanlısıydı, güreşte sırtı yere gelmemişti. Üç gün önce dağa çıktı. Giden izi var, dönen izi yok.` },
      ],
      iz: [
        { trait: 'buyuk_iz', t: `Kuyunun çevresindeki çamurda kocaman ayak izleri. Birinin içine bir çocuk boylu boyunca uzansa sığar.` },
        { trait: 'buyuk_iz', t: `Dağ yolunda bir iz var; bir adım ötede değil, beş adım ötede bir sonraki. Bu adımları bir insan atmaz.` },
        { trait: 'buyuk_iz', t: `Kuyunun taş bileziği bir yerden kırılmış. Yanındaki toprakta bir hamur teknesi büyüklüğünde, çıplak bir ayak çukuru.` },
      ],
      tanik: [
        { trait: 'dev', t: `{T}: “Kuyunun başında biri oturuyordu. Ayağa kalkınca güneşi kapattı. İki adam boyu vardı, belki daha fazla.”` },
        { trait: 'dev', t: `{T}: “Sırtında bir delikanlıyı çuval gibi taşıyordu. Koca adam onun kucağında çocuk gibi duruyordu.”` },
        { trait: 'dev', t: `{T}: “Dağdan iniyordu. Başı kayaların üstünden görünüyordu, gövdesi kayaların ardında yürüyordu.”` },
      ],
      zaman: [
        { trait: 'ogle', t: `Öğle vakti, güneş tam tepedeyken. Gölgenin insanın ayağının dibine çekildiği o saatte.` },
        { trait: 'ogle', t: `Öğle sıcağında. Taşlar elle tutulmayacak kadar ısınmıştı; o saatte kimse kuyuya çıkmaz.` },
        { trait: 'ogle', t: `Öğle ezanıyla ikindi arası. Köy uykudaydı, yollar bomboştu, cırcır böcekleri bile susmuştu.` },
      ],
      yer: [
        { trait: 'dag', t: `Dağın tepesine yakın, ağaç bitmeyen çıplak bir düzlük. Rüzgâr orada başka türlü uğulduyor.` },
        { trait: 'dag', t: `Yaylaya çıkan yolun en dik yeri. Kayalar, biri yuvarlamış gibi yolun ortasına saçılmış.` },
        { trait: 'dag', t: `{koy} dağı. Çobanlar bile oraya sürü çıkarmıyor; dağın bir sahibi var, diyorlar.` },
        { trait: 'kuyu', t: `Dağın başında, kimin kazdığını kimsenin bilmediği eski bir kuyu. Bileziğinin taşlarından birini dört adam kaldıramaz.` },
        { trait: 'kuyu', t: `Kuyu. İple sarkıtılan kova dibe varmıyor; ip bitiyor, kova boşlukta sallanıyor. Aşağıdan serin bir yel esiyor.` },
        { trait: 'kuyu', t: `Yayla yolundaki kuyu. Suyu buz gibi; içenler ömrümüzde böyle tatlı su içmedik diyor. Ama kimse ikinci kez içmeye gitmiyor.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “O kuyunun bir sahibi var. Kimse kovasını onun suyuna habersiz sarkıtmazdı. Bunlar sarkıttı, dolu testiyle dönmeye kalktılar.”` },
        { trait: 'izinsiz', t: `{Y}: “Dedelerimiz o dağın yarısına kadar çıkar, kuyunun yanına hiç yaklaşmazdı. Şimdiki gençler sınır tanımıyor.”` },
        { trait: 'izinsiz', t: `{Y}: “Dağın o yakası bizim değil. Sınır taşını geçen onun toprağına girmiş olur. Toprağına gireni o da kendi malı sayar.”` },
      ],
    },
    hunt: {
      intro: [
        `Öğle sıcağında, kuyunun başında, taşların gölgesinde beklediniz.`,
        `Yer sarsıldı. Dağın ardından iki adam boyunda biri yürüdü; kuyunun ağzına gölgesi düştü.`,
      ],
      success: [
        `Önünüze dikildiğinde selam verdiniz. “Selamın olmasaydı” diye homurdandı; uzattığınız tuzu avucuna alıp yaladı.`,
        `Tuzunu yediğine kıyamadı. Kuyunun dibinden {K:gen} sesi geldi; ipi kendi eliyle sarkıttı.`,
      ],
      partial: [
        `Bir yanınızı tanıdı, bir yanınızı tanımadı. Homurdandı, sizi kuyunun başından kovdu ama tutmadı.`,
        `{K} kuyunun dibinden sağ çıktı. Dev ise dağda, kuyusunun başında, bir sonraki kovayı bekliyor.`,
      ],
    },
  },

  devanasi: {
    aka: ['Dev karısı'],
    region: 'Anadolu masallarında',
    epithet: 'Mağara ağzında oğullarını bekleyen dev ana',
    lore: `Derler ki devlerin bir anası vardır. Mağaranın ağzında oturur, akşam karanlığında oğullarının dönüşünü bekler. Boyu iki adam boyudur ama yaşı öyle ağırdır ki iki büklüm durur; memelerini omzunun üstünden arkaya atar, ağzından kızgın bir buğu çıkar. Mağarasına çağrılmadan giren delikanlıyı, yolunu şaşırıp kapısına düşen yolcuyu kucaklar, içeri çeker, oğulları gelince onların sofrasına koyar. Masallarda akıllı yiğit önce selam verir, ona “ana” der, arkasından dolanıp memesini emer. Dev anası “Selamın olmasa, bana ana demesen seni yerdim; şimdi süt oğlum oldun” der ve onu oğullarından saklar. Mağaranın içi soğuk ve karanlıktır; dev anası yanan ateşe yaklaşamaz, elinde meşale olana el uzatamaz derler.`,
    clues: {
      kurban: [
        { trait: 'delikanli', t: `{K} on dokuzunda, bekâr bir delikanlı. Kaçan kuzunun peşinden kayalıklara tırmandı, akşam dönmedi. Kuzu sabah ağıla kendi geldi.` },
        { trait: 'delikanli', t: `Bekâr {K} kayalıktaki mağaranın içini hep merak ederdi. Bir akşam elinde bir çubukla gitti. Çubuk mağaranın ağzında bulundu.` },
        { trait: 'delikanli', t: `{K} nişanlıydı, düğününe bir ay vardı. Akşam kayalık yoldan dönerken kayboldu. Nişan yüzüğü mağaranın ağzında, bir taşın üstünde duruyordu.` },
        { trait: 'yolcu', t: `Yolcu {K} geceyi kayalıklardaki mağarada geçireceğini söylemişti hancıya. Atı köye döndü, kendisi dönmedi.` },
        { trait: 'yolcu', t: `{K} başka vilayetten gelen bir yolcuydu. Yolunu şaşırınca kayalıklara sapmış. Heybesi mağaraya çıkan patikada; kendisinden iz yok.` },
        { trait: 'yolcu', t: `Kervanın gerisinde kalan {K} akşam karanlığında yolunu kaybetti. Arkadaşları seslendi, seslendi; cevap mağaranın içinden yankı olarak geldi.` },
      ],
      iz: [
        { trait: 'buyuk_iz', t: `Mağaranın önündeki tozda kocaman, çıplak ayak izleri. Parmak yerleri birer çukur; her birine bir yumruk sığar.` },
        { trait: 'buyuk_iz', t: `Patikada iki çeşit iz var: bir insan izi, yanında onu üç kez içine alacak kadar büyük bir iz. İnsan izi mağaranın ağzında bitiyor.` },
        { trait: 'buyuk_iz', t: `Kayalığın yumuşak toprağında ağır, kocaman izler. Topuklar derin, burunlar sığ; sırtında yük taşıyan biri gibi yürümüş.` },
      ],
      tanik: [
        { trait: 'dev', t: `{T}: “Mağaranın ağzında oturuyordu. Ayağa kalkınca başı mağaranın tavanına değdi. İki adam boyu vardı.”` },
        { trait: 'dev', t: `{T}: “Ömrümde ondan büyüğünü görmedim. Oturduğu yerden kolunu uzatsa damımızın saçağına yetişirdi.”` },
        { trait: 'dev', t: `{T}: “Bir kaya sandım. Kaya kalktı, doğruldu; benim boyumun iki katıydı.”` },
        { trait: 'kocakari', t: `{T}: “Yaşlı bir kadındı, iki büklüm. Memeleri omuzlarının üstünden arkaya atılmıştı. ‘Gel oğul’ dedi.”` },
        { trait: 'kocakari', t: `{T}: “Kambur bir kocakarı, ak saçları keçe gibi. Bastonu bir ağaç gövdesiydi. Ağzından buğu çıkıyordu, hava hiç soğuk değilken.”` },
        { trait: 'kocakari', t: `{T}: “Uzaktan bir nine sandım; iki büklüm, mağaranın önünde dizlerini kucaklamış oturuyordu. Bana döndü, gülümsedi. Bir dişi bir karış vardı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığında, çobanların sürüyü ağıla soktuğu saatte. Kayalıklar o saatte morarır.` },
        { trait: 'aksam', t: `Gün battıktan hemen sonra. Kayalıkların gölgesi köyün evlerine kadar uzamış, hava birden serinlemişti.` },
        { trait: 'aksam', t: `Akşam, lambalar yakılırken. Mağaranın ağzı o saatte kapkara görünür, içinden ılık bir soluk gelir.` },
      ],
      yer: [
        { trait: 'magara', t: `Kayalıkların ortasında, ağzı bir samanlık kapısı kadar bir mağara. İçinden ılık, ekşi bir koku geliyor.` },
        { trait: 'magara', t: `Mağaranın içi derin. Taş duvarlarda, insan elinin yetişemeyeceği yükseklikte, sürtünmekten parlamış yerler var.` },
        { trait: 'magara', t: `Köyün üstündeki mağara. Ağzının önündeki taş dizlerle cilalanmış gibi dümdüz; biri her akşam orada oturuyor.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “O mağara devlerin evidir. Kimse çağrılmadan bir evin içine girmez. Girdiler.”` },
        { trait: 'izinsiz', t: `{Y}: “Mağaranın önüne dedelerimiz taşla bir çizgi çekmişti. Çizgiyi geçen onun misafiri değil, onun avıdır.”` },
        { trait: 'izinsiz', t: `{Y}: “Ev sahibine sormadan kapısından içeri girilir mi? Onun evi o mağaradır. Sormadan girene ana olmaz.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında, mağaranın ağzına bir taş atımı uzakta beklediniz.`,
        `Mağaranın içinden ağır bir soluk geldi. İki adam boyunda, iki büklüm bir ana dışarı çıktı, havayı kokladı.`,
      ],
      success: [
        `Elinizde meşaleyle ilerleyip selam verdiniz, ona “ana” dediniz. Alevden yüzünü çevirdi, “süt oğlum” diye mırıldandı.`,
        `{K} sabaha karşı mağaranın dibinden kendi ayağıyla çıktı. Dev anası onu bütün gece oğullarından saklamıştı.`,
      ],
      partial: [
        `Bir an duraksadı; sizi tanır gibi oldu ama bağrına basmadı. Homurdanarak mağaraya geri girdi.`,
        `{K} karanlıktan sürünerek size ulaştı. Mağaranın ağzında ise o hâlâ oturuyor, oğullarını bekliyor.`,
      ],
    },
  },

  peri: {
    aka: ['Peri', 'Periler'],
    region: 'Anadolu’nun hemen her yerinde; Fars ve Türk masallarında',
    epithet: 'Pınar başında oynayan, göreni çarpan',
    lore: `Derler ki periler pınar başlarında, ulu ağaçların altında, bahar gecelerinde toplanır; Hıdırellez’e doğru, gece yarısı düğün kurarlar. Göz alacak kadar güzeldirler. Uzaktan def sesi, türkü, el çırpma duyulur; yaklaşan kimseyi bulamaz. Oynadıkları yerin çimeni sabah bir halka gibi yatmış bulunur. O halkaya basan, onları gizlice seyreden, yurtlarına izinsiz giren çarpılır: genç kızın dili tutulur, delikanlının aklı gider, ağzı yana kayar. Buna peri çarpması denir. Gece pınara inen “destur” der, ağaç altına oturan selam verir; periler izin isteyene dokunmaz. Genç kızların başına al kurdele bağlanır, ağacın dalına al çaput asılır; peri alı görünce o insanı kendinden saymaz, oyununa çağırmaz.`,
    clues: {
      kurban: [
        { trait: 'genc_kiz', t: `{K} on altısında bir kız. Hıdırellez gecesi arkadaşlarıyla pınara dilek suyu almaya gitti. Döndüğünden beri dili tutuk, kimsenin yüzüne bakmıyor.` },
        { trait: 'genc_kiz', t: `Yeni gelin {K} gece ulu ağacın altından geçerken bir şey görmüş. O gün bugün ağzı yana kaymış, sağ eli titriyor.` },
        { trait: 'genc_kiz', t: `{K} nişanlı bir kız, çeyizi sandıkta hazır. Bir sabah pınar başında, dizlerini kucaklamış sallanırken bulundu. Ağzından bir türkünün tek dizesi çıkıyor, durmadan.` },
        { trait: 'delikanli', t: `Bekâr {K} gece pınar tarafından gelen def sesinin peşine düştü. Sabah onu ağacın dibinde bulduk; gözleri açık, kimseyi tanımıyor.` },
        { trait: 'delikanli', t: `{K} yirmisinde bir delikanlı. Bir gece ağacın arkasına saklanıp birilerini seyretmiş. Ertesi sabah ağzı yana kaymış, sol kolu tutmuyordu.` },
        { trait: 'delikanli', t: `Delikanlı {K} artık konuşmuyor. Arada bir gülümseyip havada bir şey tutar gibi elini uzatıyor. Anası “oğlum perilere karıştı” diyor.` },
      ],
      iz: [
        { trait: 'halka', t: `Pınarın yanındaki çimende kusursuz bir halka. İçindeki otlar dimdik, halkanın üstündekiler yere yatmış; biri bütün gece aynı daireyi dönmüş gibi.` },
        { trait: 'halka', t: `Ağacın çevresinde, çimenin içinde koyu yeşil bir halka. Halkanın üstüne dizi dizi mantar çıkmış; dün yoktular.` },
        { trait: 'halka', t: `Sabah çimen çiy içindeydi, yalnız bir daire kupkuruydu, sanki biri silip almış. Halkanın ortasına kimse basmamış.` },
      ],
      tanik: [
        { trait: 'guzel', t: `{T}: “Pınarın başında bir kız gördüm. Öyle güzeldi ki bakmaya utandım. Yüzü suya vuran aydan aydınlıktı.”` },
        { trait: 'guzel', t: `{T}: “Böyle güzel bir yüz görmedim, ne köyde ne kasabada. Bana gülümsedi; o an bütün bedenim uyuştu.”` },
        { trait: 'guzel', t: `{T}: “Ağacın dalına oturmuş bir kız. İnce, ak, göz kamaştırıcı. Ayakları yere değmiyordu. Gözümü kırptım, yoktu.”` },
        { trait: 'kalabalik', t: `{T}: “Pınar tarafından def, zurna, el çırpma sesi geliyordu. Köyde düğün yoktu. Yaklaştıkça ses uzaklaştı.”` },
        { trait: 'kalabalik', t: `{T}: “Ağacın altında kalabalık bir halay. Kızlar, gelinler, ama hiçbirini tanımadım. Türküyü biliyordum, sözleri başkaydı.”` },
        { trait: 'kalabalik', t: `{T}: “Gece bir düğün alayı geçti; gülüşmeler, şarkılar. Pencereden baktım, pınara inen patika bomboştu. Ses yine de geçiyordu.”` },
      ],
      zaman: [
        { trait: 'bahar', t: `Hıdırellez gecesi; dileklerin gül dibine gömüldüğü, kızların pınar başında mâni söylediği gece.` },
        { trait: 'bahar', t: `Bahar yeni girmişti. Ağaçlar çiçeğe durmuş, çimen bileğe çıkmış, geceler ılımaya başlamıştı.` },
        { trait: 'bahar', t: `Mayısın başında, erik çiçeklerinin döküldüğü günlerde. Pınarın suyu o günlerde en gür akar.` },
        { trait: 'gece_yarisi', t: `Gece yarısı. Köyde son ışık söndükten epey sonra, ev halkı ilk uykusundayken.` },
        { trait: 'gece_yarisi', t: `Gece yarısı. Köpekler bir anda sustu; köyün içine kulakları uğuldatan bir sessizlik çöktü.` },
        { trait: 'gece_yarisi', t: `Ay tepedeyken, gecenin tam ortasında. Akşamdan yatanlar bir uyku uyumuş, sabaha daha çok vardı.` },
      ],
      yer: [
        { trait: 'su', t: `Köyün aşağısındaki pınar. Suyu taş oluktan akıyor, başında iki yaşlı çınar var.` },
        { trait: 'su', t: `Dere kenarında, suyun küçük bir göl yaptığı düzlük. Çimeni köyün her yerinden daha yeşil.` },
        { trait: 'su', t: `Pınar başı. Oluğun önündeki taş ayak basılmaktan çukurlaşmış; ama köyden kimse geceleri buraya inmez.` },
        { trait: 'agac', t: `Köyün ortasındaki ulu çınar. Gövdesini beş kişi kol kola saramıyor; kimse dalını kırmaz, altında uyumaz.` },
        { trait: 'agac', t: `Yolun kenarında yüz yıllık bir dişbudak. Altındaki çimen her zaman serin, her zaman ezik.` },
        { trait: 'agac', t: `Tepedeki tek ağaç, yaşlı bir ceviz. Gölgesine oturan uyuyakalır, uyananın da aklı bir başka olur, derler.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “Orası onların yurdudur. Gece oraya çağrılmadan girilmez, oyunları gizlice seyredilmez. Seyreden çarpılır.”` },
        { trait: 'izinsiz', t: `{Y}: “Halkalarının ortasına basılmış. Orası onların harman yeridir; yabancı ayak istemezler.”` },
        { trait: 'izinsiz', t: `{Y}: “Ağacın altı da pınarın başı da gece onlarındır. Bizimkiler oraya kendi avlusu gibi oturup gece yarısına kadar kalmış.”` },
      ],
    },
    hunt: {
      intro: [
        `Bahar gecesi, pınarın başında, ulu ağacın gölgesinde beklediniz.`,
        `Gece yarısı uzaktan def sesi geldi. Çimende bir halka aydınlandı; içinde göz alıcı kızlar dönmeye başladı.`,
      ],
      success: [
        `Destur deyip selam verdiniz; başınızdaki al kurdeleyi görünce oyun durdu. İçlerinden biri gülümseyip başını eğdi.`,
        `Sabah çimendeki halka silinmişti. {K} o gün ilk kez kendi adını söyledi.`,
      ],
      partial: [
        `Bir yanınızı kabul ettiler, bir yanınızı etmediler. Oyun bir an durdu, sonra yeniden başladı; sizi görmez oldular.`,
        `{K:gen} hâli düzeliyor ama tam değil. Pınarın başında her bahar yeniden def çalınacak.`,
      ],
    },
  },

  sahmeran: {
    aka: ['Şahmaran', 'Şah-ı Mâran'],
    region: 'Tarsus, Adana ve Mardin yöresi; Güneydoğu Anadolu',
    epithet: 'Yerin altındaki yılanların kraliçesi',
    lore: `Derler ki yerin altında, bir mağaranın, bir kuyunun dibinde yılanların bir şahı vardır. Belinden yukarısı göz alıcı güzellikte bir kadın, belinden aşağısı yılandır; başında taç gibi bir pul halkası taşır. Dolunay gecesi kuyunun ağzı aydınlanır; bal toplarken ya da su çekerken eğilen delikanlıyı yerin altına çeker. Orada onu konuk eder, sırlarını ona açar, sonra salar; yeter ki gördüklerini kimseye anlatmayacağına söz versin. Söz tutulursa yılanlar o ocağa dokunmaz. Sırrı söyleyen ya da yılanlarından birini öldüren olursa Şahmeran öcünü alır: köyün delikanlıları birer birer kaybolur, kuyuların başında yılan gömlekleri bulunur. Bu yüzden onu görmüş olan susar, verdiği sözü bozmaz, sırrını mezara götürür.`,
    clues: {
      kurban: [
        { trait: 'delikanli', t: `{K} yirmi yaşında, bekâr bir delikanlı. Dolunay gecesi kuyudan su çekmeye çıktı. Kova kuyunun başında, ipi çözülmüş; {K} yok.` },
        { trait: 'delikanli', t: `Delikanlı {K} bal peteği bulmak için mağaraya girdi. Arkadaşları ağızda sabaha kadar bekledi. İçeriden yalnızca ince bir ıslık geldi.` },
        { trait: 'delikanli', t: `{K} köyün en yakışıklı delikanlısıydı, daha evlenmemişti. Bir sabah yatağı boş bulundu. Yastığının üstünde ince, kuru bir yılan gömleği vardı.` },
      ],
      iz: [
        { trait: 'deri', t: `Kuyunun taş bileziğine sarılmış, upuzun, bütün bir yılan gömleği. Baş kısmı kuyunun içine sarkıyor.` },
        { trait: 'deri', t: `Mağaranın ağzında üst üste yığılmış yılan gömlekleri. Kimi kâğıt gibi ince, kimi bir kol kalınlığında.` },
        { trait: 'deri', t: `{K:gen} çarığının içinden kuru, kıvrık bir yılan gömleği çıktı. Pulları lamba ışığında gümüş gibi parlıyor.` },
      ],
      tanik: [
        { trait: 'yilan', t: `{T}: “Kuyunun ağzından bir yılan başını çıkardı, kol kalınlığında. Başında taç gibi pullar vardı. Bana baktı, geri çekildi.”` },
        { trait: 'yilan', t: `{T}: “Mağaranın önü yılan doluydu; yüzlercesi, hepsi aynı yöne bakıyordu. Ortalarındaki en büyüğü yavaşça içeri süzüldü.”` },
        { trait: 'yilan', t: `{T}: “Önce bir ıslık, sonra otların arasında ışıl ışıl pullar. Bir yılan ayağımın üstünden geçti; soğuktu, hiç acele etmedi.”` },
        { trait: 'guzel', t: `{T}: “Kuyunun dibinde, suyun üstünde bir kadın yüzü. Ömrümde öyle güzelini görmedim. Bir eğilsem düşecektim.”` },
        { trait: 'guzel', t: `{T}: “Mağaranın içinde bir kadın oturuyordu, yüzü ayın ışığını alıyordu. Güzelliğinden gözümü ayıramadım. Belinden aşağısını göremedim; görmek de istemedim.”` },
        { trait: 'guzel', t: `{T}: “O yüzü anlatamam; ne gelinlerde gördüm ne resimlerde. Gülümsedi, ben de gülümsedim. Sonra kuyunun karanlığına çekildi.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Dolunay gecesi; ay kuyunun ağzına tam tepeden bakıyordu, suyun yüzünde bir gümüş tepsi gibi duruyordu.` },
        { trait: 'dolunay', t: `Ay on dördündeydi. Gece gündüz gibi aydınlıktı, her taşın gölgesi keskin ve kapkaraydı.` },
        { trait: 'dolunay', t: `Ayın en dolgun gecesi. Bir önceki dolunayda da bir delikanlı kuyunun başında fazla oyalanmıştı.` },
      ],
      yer: [
        { trait: 'magara', t: `Köyün dışındaki kayalığın altında bir mağara. Ağzı dar, içi derin; içinden gül gibi bir koku geliyor.` },
        { trait: 'magara', t: `Mağaranın içi aşağıya doğru iniyor; insan yürüyerek değil, kayarak iniyor. Dipte, karanlığın içinde, ince bir ıslık.` },
        { trait: 'magara', t: `Bağların arasındaki eski mağara. Duvarlarına yılan resimleri kazınmış; kimin kazdığını kimse bilmiyor.` },
        { trait: 'kuyu', t: `Köyün eski kuyusu. Yıllardır kimse suyunu içmiyor, ama ağzının taşları her sabah nemli.` },
        { trait: 'kuyu', t: `Bahçenin dibindeki eski kuyu. Taş atıyorsun, dibe vurduğunu duymuyorsun; yalnızca yukarı doğru serin bir hava çıkıyor.` },
        { trait: 'kuyu', t: `Kuyu. Bileziğinin taşlarında incecik, kıvrımlı çizgiler var; bir şey her gece aşağı yukarı sürünüyor gibi.` },
      ],
      sebep: [
        { trait: 'kiymak', t: `{Y}: “Geçen ay bağda bir yılan öldürüldü, başı taşla ezildi. O yılan sahipsiz değildi.”` },
        { trait: 'kiymak', t: `{Y}: “Yılan öldüren, eşinin öcünü bekler derler. Bu öç ondan da büyük; şahının öcü.”` },
        { trait: 'kiymak', t: `{Y}: “Ahırın dibindeki yılan yuvasına kaynar su döktüler, yavrularıyla birlikte. O gün söyledim: bu bedelsiz kalmaz.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi kuyunun başında, ayın kuyunun ağzına girdiği saati beklediniz.`,
        `Kuyudan bir ıslık yükseldi. Ay ışığında, belinden yukarısı kadın, belinden aşağısı yılan biri kuyunun ağzında belirdi.`,
      ],
      success: [
        `Gördüğünüz hiçbir şeyi kimseye anlatmayacağınıza söz verdiniz. Sorular sordu, siz sustunuz; gözlerinizin içine uzun uzun baktı ve başını eğdi.`,
        `Sabah {K} kuyunun başında uyur bulundu, avucunda bir yılan pulu. Gördüklerini hiç anlatmadı.`,
      ],
      partial: [
        `Ya sözünüz eksikti ya susuşunuz. Bir süre baktı, inanmadı; kuyunun dibine çekildi.`,
        `{K} sabaha karşı döndü. Ama kuyuların başında hâlâ yılan gömlekleri bulunuyor.`,
      ],
    },
  },

  evren: {
    aka: ['Ebren', 'Ejderha'],
    region: 'Anadolu ve Orta Asya Türk anlatılarında',
    epithet: 'Suyu tutan, fırtınayla gelen koca yılan',
    lore: `Derler ki bir yılan yüz yıl yaşar, kimseye görünmezse evren olur. Gövdesi bir çınar gövdesi kadar kalın, başı bir evin damı kadar yüksektir. Göllerin dibinde, suyu besleyen mağaraların içinde yatar; köyün suyu onun izniyle akar. Suyun hakkı unutulursa, her yıl verilen pay verilmezse uyanır; bir kez uyandı mı geç kalmış pay onu yatıştırmaz. Kara bulutlar onunla gelir, fırtına onun nefesidir. Ağıldaki çobanı, kıyıdaki evin halkını sürükler, sonra kıvrılıp yatar ve suyu keser. Ardında ev büyüklüğünde yılan gömlekleri kalır. Evrenin soğuk kanı ateşten korkar; meşalelerle çevrilen kıyıya çıkamaz. Tuz ona zehir gibi gelir, derler; göle ve mağaranın ağzına serpilen tuz onu dibe kovar.`,
    clues: {
      kurban: [
        { trait: 'coban', t: `Çoban {K} fırtına çıkınca sürüyü göl kıyısındaki ağıla sürdü. Ağılı da sürüyü de su aldı. {K:gen} cenazesi üç gün sonra kıyıya vurdu.` },
        { trait: 'coban', t: `{K} kırk yıllık çobandı, her havayı bilirdi. O akşam gök kararınca sürüsünü mağaraya soktu. Sabah mağaranın ağzında yalnız kepeneği vardı; kendisini kayaların dibinde bulduk.` },
        { trait: 'coban', t: `Çoban {K:gen} kavalı göl kıyısında bulundu, yanında sürünün yarısı. {K:gen} cenazesini ertesi sabah gölün sığ yerinden çıkardık.` },
        { trait: 'hane', t: `{K} ve bütün ev halkı kıyıdaki o evdeydi. Gece fırtına evin damını kaldırdı. Sabah o evden kimse sağ çıkmadı.` },
        { trait: 'hane', t: `{K:gen} evi suyun hemen kıyısındaydı. Fırtına gecesi kapı içeri doğru kırılmış, ocak sönmüş. Dört cenaze aynı gün kalktı.` },
        { trait: 'hane', t: `{K:gen} hanesinden yedi can. Yaşlısı da beşikteki de aynı gece gitti. Evin içi göl çamuruyla dolmuştu.` },
      ],
      iz: [
        { trait: 'deri', t: `Göl kıyısında bir yılan gömleği; boyu otuz adım, eni bir kapı genişliğinde. Rüzgârda kâğıt gibi hışırdıyor.` },
        { trait: 'deri', t: `Mağaranın ağzına takılmış, kurumuş, kocaman bir yılan gömleği. Her bir pulu bir avuç içi kadar.` },
        { trait: 'deri', t: `Fırtınadan sonra kayaların arasında eski bir yılan gömleği bulundu. İçine bir adam girip ayakta durabilir.` },
        { trait: 'buyuk_iz', t: `Kıyıdaki çamurda kocaman izler; her biri bir kağnı tekerleği büyüklüğünde. Aralarında bir şey sürünmüş gibi derin bir oluk var.` },
        { trait: 'buyuk_iz', t: `Mağaraya giden patikada kocaman, ağır izler. Toprak bastığı yerde bir karış çökmüş, çakıllar kenara püskürmüş.` },
        { trait: 'buyuk_iz', t: `Göl çekilince dipteki balçıkta dev bir ayak izi göründü. Çocuklar içine girip oynadı; büyükler gelip çocukları çekip aldı.` },
      ],
      tanik: [
        { trait: 'yilan', t: `{T}: “Suyun içinden bir yılan doğruldu. Başı bir kayıktan büyüktü; gövdesi suyun altında bitmek bilmiyordu.”` },
        { trait: 'yilan', t: `{T}: “Şimşek çaktığında gördüm: gölün üstünde kıvrılmış, pulları ıslak, koca bir yılan. Bir daha çaktığında yoktu.”` },
        { trait: 'yilan', t: `{T}: “Mağaranın ağzından yılan gibi bir şey çıktı; ama çıkması bitmedi. Gövdesi aktı, aktı, aktı.”` },
        { trait: 'dev', t: `{T}: “Gölün üstünde bir şey doğruldu, minarenin yarısı kadar. Başını görmek için başımı geriye atmam gerekti.”` },
        { trait: 'dev', t: `{T}: “Kayalıkların ardından bir baş yükseldi. İki adam boyu yukarıda, iki kazan büyüklüğünde göz.”` },
        { trait: 'dev', t: `{T}: “Ağılın yanında durduğunda ağılın damı ancak göğsüne geliyordu. Bir insanın iki katı, belki üç katı boyu vardı.”` },
      ],
      zaman: [
        { trait: 'firtina', t: `Fırtına gecesi. Gök gürledikçe göl kabardı, dalgalar kıyıdaki taşları dövdü; köpekler damların altına sindi.` },
        { trait: 'firtina', t: `Bütün gün hava ağırdı. İkindiye doğru kara bulutlar dağın ardından taştı; ilk şimşekle birlikte oldu.` },
        { trait: 'firtina', t: `Fırtınada. Rüzgâr damların kiremidini söktü, dolu yağdı; o gürültüde kimse bir şey duymadı.` },
      ],
      yer: [
        { trait: 'su', t: `Köyün su aldığı göl. Bu yaz kıyısı geri çekildi, dipteki taşlar göründü; kimse o taşlara basmıyor.` },
        { trait: 'su', t: `Gölün en derin yeri. Köylüler oraya kova sarkıtmaz, hayvanını o kıyıdan sulamaz.` },
        { trait: 'su', t: `Derenin göle döküldüğü yer. Bu yaz dere kurudu; çatlak yatağı göle doğru iniyor.` },
        { trait: 'magara', t: `Gölü besleyen kaynak bir mağaranın içinden çıkardı. Bu yaz kaynak kesildi. Mağaradan yalnızca soğuk bir soluk geliyor.` },
        { trait: 'magara', t: `Kayalıklardaki büyük mağara. Ağzı göle bakıyor; içeride taban kaygan, sanki koca bir şey yıllarca orada sürünmüş.` },
        { trait: 'magara', t: `Mağaranın içinde karanlık bir göl var. Taş atınca yankı uzun uzun dönüyor, sonra suyun altından bir kabarcık sesi geliyor.` },
      ],
      sebep: [
        { trait: 'adak_unutmak', t: `{Y}: “Her bahar suya bir koç kesilirdi. Bu yıl unuttunuz. Suyun hakkını vermeyene su da hakkını vermez.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Dedelerimiz harmandan önce göle bir avuç un, bir somun bırakırdı. Kimse bırakmadı. O şimdi kendi payını kendi alıyor.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Su bedava değildir. Payı unutulan su döner, payını kendi alır. Bu kez neyle yetinir, bilmiyorum.”` },
      ],
    },
    hunt: {
      intro: [
        `Fırtına gecesi, göl kıyısında, mağaranın ağzını gören taşların arkasında beklediniz.`,
        `Şimşek çaktı, göl ikiye yarıldı. Ev yüksekliğinde bir yılan başı sudan yükseldi.`,
      ],
      success: [
        `Kıyıya meşaleleri dizdiniz; alevlere yaklaşamadı. Avuç avuç tuzu suya ve mağaranın ağzına serptiniz; tısladı, dibe çöktü.`,
        `Sabah fırtına dinmişti. Mağaradaki kaynak yeniden aktı, göl kıyıya kadar doldu.`,
      ],
      partial: [
        `Geri çekildi ama dibe inmedi; suyun ortasında kıvrılıp uzun süre sizi seyretti.`,
        `Fırtına dindi, köyün suyu akıyor. Ama gölün dibinde hâlâ o yatıyor, payını bekliyor.`,
      ],
    },
  },

  kurtadam: {
    aka: ['Vurkolak'],
    region: 'Rumeli ve Balkan anlatılarında; Anadolu’da seyrek',
    epithet: 'Dolunayda kurda dönen adam',
    lore: `Derler ki kimi adamın içinde bir kurt uyur. Dolunay doğunca o adam evinden çıkar, dağa, ormana yürür; sabah ne yaptığını hatırlamaz. Ay ışığında iri, kıllı bir şeye döner: bir kurttan iri, bir insandan kambur. Gece yalnız yola çıkan yolcuyu, sürünün başında yalnız kalan çobanı kokusundan bulur. Ardında pençe izleri, kan bırakır. Köpekler onu görünce havlamaz, kuyruklarını kısıp ağıla siner. Kurt soyu ateşten korkar; dolunay gecesi yakılan büyük ateşin çevresine giremez. İçindeki kurdu dökmek için de kurşun dökülür: eritilen kurşun başının üstünde suya döküldüğünde cız eder, kurt başı biçiminde donar; o adam o gece insan kalır.`,
    clues: {
      kurban: [
        { trait: 'coban', t: `Çoban {K} dolunay gecesi ağılda yalnız kaldı; köpekleri bile ağılın dibine sinmiş. Sabah {K:gen} cenazesini ağılın önünde bulduk.` },
        { trait: 'coban', t: `{K} yaylada sürüyü bekliyordu. Sürüye dokunulmamış, tek koyun eksik değil. Ölen yalnız {K}.` },
        { trait: 'coban', t: `Çoban {K:gen} değneği ikiye kırık bulundu. Kendisini çalılığın dibinde, yüzükoyun yatarken bulduk; kepeneği sırtından yırtılmıştı.` },
        { trait: 'yolcu', t: `Yolcu {K} dolunayın ışığına güvenip gece yola düşmüş. Atı köye köpük içinde geldi. {K} ormanın girişinde, yolun kenarında yatıyordu.` },
        { trait: 'yolcu', t: `{K} kasabadan tek başına dönüyordu. Dağ yolunda ölü bulundu; elinde hâlâ fenerin sapı vardı, fener yoktu.` },
        { trait: 'yolcu', t: `Başka köyden bir yolcu, {K}. Hanın önünde “sabaha kalmam” demiş. Kalmadı; sabahı göremedi.` },
      ],
      iz: [
        { trait: 'pence', t: `Ağılın önündeki çamurda pençe izleri; bir köpeğinkinden iki kat büyük, dört parmaklı, önlerinde derin tırnak çukurları.` },
        { trait: 'pence', t: `Orman yolunun tozunda pençe izleri. İlk birkaç adım iki ayak gibi basılmış, sonra dört ayağa iniyor.` },
        { trait: 'pence', t: `Köyün son evinin bahçesinden ormana doğru pençe izleri gidiyor. Kurt dışarıdan gelir; bu izler içeriden çıkıyor.` },
        { trait: 'kan', t: `Yolun üstünde kan, damla damla ormana gidiyor. Ay ışığında kapkara görünüyordu; sabah kıpkırmızı çıktı.` },
        { trait: 'kan', t: `Ağılın taşlarında kan. Bir yerde birinin elini dayadığı, bir yerde bir şeyin sürtündüğü belli.` },
        { trait: 'kan', t: `Kayanın üstünde kurumuş kan, yanında yırtılmış bir kuşak parçası. Kuşak köyden kimsenin değil.` },
      ],
      tanik: [
        { trait: 'killi', t: `{T}: “Ay ışığında bir şey gördüm, kıllı ve iri. İki ayağının üstünde duruyordu, sonra dört ayağına çöktü.”` },
        { trait: 'killi', t: `{T}: “Kurt dedim, değildi. Kurttan çok iriydi, sırtı kambur, her yeri keçe gibi kıl. Omuzları bir adamın omzu.”` },
        { trait: 'killi', t: `{T}: “Ormanın kıyısında kıllı, iri bir şey durdu. Bana baktığında gözlerinde insan bakışı vardı.”` },
        { trait: 'hayvan', t: `{T}: “Bir kurt. Ama tek başına, sürüsüz. Köpekler havlamadı; ağıla sinip titrediler.”` },
        { trait: 'hayvan', t: `{T}: “Yolun ortasında bir kurt oturuyordu. Kaçmadı, kalkmadı. Ay ışığında bana uzun uzun baktı.”` },
        { trait: 'hayvan', t: `{T}: “Bir kurt dolunaya karşı uludu. Ulumanın sonu bir adamın inlemesine döndü.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Dolunay gecesi. Ay o kadar parlaktı ki yolda düşürdüğün bir düğmeyi bulurdun.` },
        { trait: 'dolunay', t: `Ay tam doğmuştu, kocaman ve sapsarı. Köpekler daha akşamdan ulumaya başlamıştı.` },
        { trait: 'dolunay', t: `Ayın on dördü. Geçen ay da tam bu gece bir cenaze kaldırmıştık.` },
      ],
      yer: [
        { trait: 'dag', t: `Yaylaya çıkan dağ yolu. Ağıllar orada, köyden yarım günlük yol uzakta.` },
        { trait: 'dag', t: `Dağın sırtı, ağaçların bittiği yerin üstü. Çıplak kayalar ve hiç dinmeyen rüzgâr.` },
        { trait: 'dag', t: `Yüksek yayla. En yakın ev bir saatlik yol; bağırsan sesin kayalarda kalır.` },
        { trait: 'orman', t: `Köyle yayla arasındaki çam ormanı. Yol ormanın içinden geçiyor, başka yol yok.` },
        { trait: 'orman', t: `Ormanın derinliği. Ay ışığı dallardan süzülüp yere lekeler halinde düşüyor; her leke bir şeye benziyor.` },
        { trait: 'orman', t: `Meşeliğin içinde, odunculardan başka kimsenin bilmediği bir açıklık. Kuşlar oradan uzak duruyor.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Dolunay gecesi kimse yola tek başına çıkmaz. İki kişiyi o rahat bırakır, bir kişiyi bırakmaz.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Yalnız yürüyenin kokusu ayrı olur, derdi dedem. Gece tek başına dağa çıkan kokusunu ona vermiş olur.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Ağıla gece yalnız gidilmez, yola gece yalnız düşülmez. Kim yalnız düştüyse onunla karşılaştı.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi ormanın kıyısında, yolun döndüğü yerde beklediniz.`,
        `Ay ağaçların üstüne çıktığında ormanın içinden bir uluma geldi; iki ayaklı bir şey dört ayağa indi.`,
      ],
      success: [
        `Yaktığınız büyük ateşin çevresine giremedi. Kurşunu eritip başının üstünde suya döktünüz; kurşun cız edip kurt başı biçiminde dondu.`,
        `Sabah ateşin yanında, üstü başı yırtık, çıplak ayaklı bir adam uyandı. Ne olduğunu hiç hatırlamadı.`,
      ],
      partial: [
        `Geri çekildi ama içindeki kurt dökülmedi; ormana daldı.`,
        `Bu gece kimse ölmedi. Ay yeniden dolduğunda {koy} yine kapılarını erkenden kapatacak.`,
      ],
    },
  },

  karakedi: {
    aka: ['Kedi kılığındaki cin'],
    region: 'Anadolu’nun hemen her yerinde',
    epithet: 'Ocak başında kedi kılığına giren cin',
    lore: `Derler ki gece ocak başında, kapı eşiğinde görülen kara kedi her zaman kedi değildir; cinler en çok kara kedi kılığına girer. Gece yarısı ev uyurken ocağın sıcak taşına kıvrılır, eşikte bekler, gözleri kömür gibi yanar. Ona vuran, üstüne kaynar su döken, kuyruğuna basan çarpılır: eli kolu tutmaz, ağzı yana kayar, dili bağlanır. Bazen yalnız vuran değil bütün ev halkı çarpılır, çünkü cinin de bir ev halkı vardır. Gece su dökerken, eşikten geçerken besmele çekilir, destur denir; söz söylenen yerde cin kılığından çıkar, yoluna gider. Kara kedisi bir türlü gitmeyen evde kapının arkasına ters bir süpürge dikilir; istenmeyen misafir nasıl kalkıp giderse o da öyle gider.`,
    clues: {
      kurban: [
        { trait: 'kadin', t: `{K} gece yarısı ocakta çamaşır suyu kaynatıyormuş. Ayağına dolanan kara kediyi kepçeyle itmiş. Sabahtan beri sağ eli tutmuyor, ağzı yana kaymış.` },
        { trait: 'kadin', t: `{K} gece hamur yoğuruyordu. Kedi tekneye atlayınca söylenip kaynar suyu eşiğe döktü. Ertesi sabah dili tutuldu; tek kelime edemiyor.` },
        { trait: 'kadin', t: `Gece yarısı yün eğiren {K}, eşikte oturan kara kediye iğiyle vurmuş. O andan beri iki eli de kaskatı; iği bırakamıyor.` },
        { trait: 'hane', t: `{K:gen} evinde bütün ev halkı aynı sabah yataktan kalkamadı. Kiminin ağzı kaymış, kiminin kolu tutmuyor. Bir gece önce evde bir kediye vurulmuş.` },
        { trait: 'hane', t: `{K} ve evindeki herkes; büyükanne, gelin, çocuklar. Sabah hepsi dilsiz uyandı. Öğlene doğru birer birer konuşabildiler, yalnız {K} hâlâ konuşamıyor.` },
        { trait: 'hane', t: `{K:gen} hanesi çarpıldı. Evin büyüğü yataktan kalkamıyor, çocuklar geceleri sayıklıyor; sağlam kalan yok.` },
      ],
      iz: [
        { trait: 'pence', t: `Akşam tahtaya serilen unun üstünde küçük pençe izleri. Ocaktan eşiğe yürümüş; eşikten öteye iz yok.` },
        { trait: 'pence', t: `Kapı eşiğinin tozunda bir kedi pençesinin izi, bir tane. Arkasından gelen adım yok; tek adım atıp kaybolmuş gibi.` },
        { trait: 'pence', t: `Ocağın önünden eşiğe kadar küçük pençe izleri. Kedi izine benziyor, ama her biri insan avucu kadar açık basılmış.` },
      ],
      tanik: [
        { trait: 'hayvan', t: `{T}: “Ocağın başında kapkara bir kedi oturuyordu. Bizim evde kedi yok. Gözleri kor gibiydi, bir kez bile kırpmadı.”` },
        { trait: 'hayvan', t: `{T}: “Eşikte bir kara kedi. Kovdum, gitmedi. Başını çevirdi ve bana bir insan gibi baktı.”` },
        { trait: 'hayvan', t: `{T}: “Kara bir kedi ocağın arkasına süzüldü. Ocağın arkası taş duvar; baktık, kedi yoktu.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı. Ocak kısılmış, ev halkı yatmıştı; yalnızca bir kişi işini bitirmek için uyanıktı.` },
        { trait: 'gece_yarisi', t: `Tam gece yarısı, evin en derin uykusunda. Dışarıda bir köpek bile havlamıyordu.` },
        { trait: 'gece_yarisi', t: `Gece yarısını az geçe. Ondan önce de sonra da her şey sakindi; yalnızca o an.` },
      ],
      yer: [
        { trait: 'ocak', t: `Ocak başı. Kazanın altındaki ateş sönmüş, kepçe yere düşmüş; taşların bir yeri kaynar sudan ağarmış.` },
        { trait: 'ocak', t: `Evin ocağı; taşları eski, sıvası dökük. Kedinin her gece oturduğu yer ocağın sağ yanındaki sıcak taş.` },
        { trait: 'ocak', t: `Ocağın başı, gece su ısıtılan yer. Evin kadınları o köşeye artık gece oturmuyor.` },
        { trait: 'esik', t: `Kapı eşiği. Eşik taşı ortadan çukurlaşmış; kaynar su oradan dökülmüş, taşın rengi hâlâ açık.` },
        { trait: 'esik', t: `Evin dış kapısıyla avlu arasındaki eşik. Gece oradan geçen orada durmaz, derler. Durulmuş.` },
        { trait: 'esik', t: `Kapının eşiği. Bir yanı ev, bir yanı gece; kara kedi her gece tam ortasına oturuyor.` },
      ],
      sebep: [
        { trait: 'kiymak', t: `{Y}: “Gece bir kediye vurdunuz. Kimin evine, kimin çocuğuna vurduğunuzu bilmeden.”` },
        { trait: 'kiymak', t: `{Y}: “Eşiğe kaynar su döküldü, altında ne olduğuna bakılmadan. Haşlanan onların bir yavrusuydu.”` },
        { trait: 'kiymak', t: `{Y}: “Kara kediye taş atılmaz, kuyruğuna basılmaz. Atıldı. Onların evi de şimdi yas tutuyor.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısı ocağın kısık ışığında, eşiğe dönük oturup beklediniz.`,
        `Kapı aralığından kapkara bir kedi girdi, ocağın yanına kıvrıldı; gözleri kor gibi yandı.`,
      ],
      success: [
        `Besmele çekip destur dediniz; sesiniz titremedi. Kapının arkasına dikili ters süpürgeye baktı, kalktı, eşikten çıktı.`,
        `Sabah {K:gen} eli yeniden tuttu. Eşikte ne pençe izi vardı ne kedi.`,
      ],
      partial: [
        `Kalktı ama gitmedi; eşikte bir süre oturup size baktı, sonra karanlığa karıştı.`,
        `{K} iyileşiyor. Ama bu evde artık kimse gece kaynar su dökmüyor.`,
      ],
    },
  },

  karakopek: {
    aka: ['Kara it'],
    region: 'Anadolu ve Rumeli; ölüm habercisi köpek inancı',
    epithet: 'Aysız gecelerin ölüm habercisi',
    lore: `Derler ki haksız yere öldürülen birinin hesabı sorulmazsa, kanının döküldüğü yerde bir kara köpek peyda olur. Sırık gibi zayıftır, kaburgaları sayılır; gözlerinin yerinde iki boşluk vardır ama yine görür. Ay olmayan zifiri gecelerde ıssız yollarda yolcunun önüne düşer, mezarlıkların duvarı dibinde oturur. Kimin evinin önünde ulursa o evden ölü çıkar. Yolcuyu peşinden yürütür, yolunu şaşırtır, sabaha sağ çıkarmaz. Yas evinin kapısına üç gece üst üste gelir, her gece bir can daha ister. Yalnız iki şeyden çekinir: ateşten, bir de sabahtan. Elinde ateş olana yaklaşamaz; horoz ötüp ezan okunduğunda nereye gittiği bilinmez. Onu görenin işi, şafak sökene kadar ateşin başında dayanmaktır.`,
    clues: {
      kurban: [
        { trait: 'yolcu', t: `Yolcu {K} ay olmayan bir gece köy yoluna düşmüş. Sabah mezarlık duvarının dibinde bulundu; gözleri açıktı, yüzü yola dönüktü.` },
        { trait: 'yolcu', t: `{K} kasabadan dönüyordu. Hancı onu uğurlarken yolun başında kara bir köpeğin beklediğini görmüş. {K} eve varamadı.` },
        { trait: 'yolcu', t: `Yolcu {K:gen} izleri yoldan sapıp mezarlığa gidiyor, yanında bir köpeğin izleri. {K} mezarlığın ortasında, ölü bulundu.` },
        { trait: 'yas_evi', t: `{D:gen} cenazesinin üçüncü günü karısı {K} de yatağa düştü. Üç gecedir evin önünde bir köpek uluyor. Bu sabah {K:gen} cenazesi de kalktı.` },
        { trait: 'yas_evi', t: `{D:gen} anası {K}, oğlunun mezarından döndüğü gece evin önünde kara bir köpek görmüş. Ertesi sabah sedirde, eli dizinde, ölü bulundu.` },
        { trait: 'yas_evi', t: `{D} haksız yere öldürüldü. Yası daha bitmeden evin kadınlarından {K} hastalandı; üçüncü gün can verdi.` },
      ],
      iz: [
        { trait: 'pence', t: `Yolun tozunda pençe izleri, bir köpeğinkinden ince ve uzun. Yolun ortasında başlıyor, mezarlığın duvarında bitiyor.` },
        { trait: 'pence', t: `Yas evine giden yolun tozunda üç gecedir pençe izleri. Her sabah siliyoruz, her sabah yeniden çıkıyor.` },
        { trait: 'pence', t: `Mezarlığın yumuşak toprağında köpek pençesi izleri. Bir mezardan öbürüne dolaşmış, birinin başında uzun süre durmuş.` },
      ],
      tanik: [
        { trait: 'hayvan', t: `{T}: “Kara bir köpek. O kadar zayıftı ki kaburgaları sayılıyordu. Yolun ortasında durdu; ben durunca o da durdu.”` },
        { trait: 'hayvan', t: `{T}: “Mezarlık duvarının dibinde kapkara bir köpek oturuyordu. Havlamadı, kımıldamadı. Gözlerinin olduğu yerde iki boşluk vardı.”` },
        { trait: 'hayvan', t: `{T}: “Önüm sıra bir köpek yürüdü, hep on adım önde. Durdum, durdu. Döndüm, onu arkamda buldum.”` },
      ],
      zaman: [
        { trait: 'aysiz', t: `Ay yoktu. Gece öyle karanlıktı ki insan elini yüzüne tutsa göremezdi.` },
        { trait: 'aysiz', t: `Ayın hiç doğmadığı gece. Yıldızlar bile bulutun ardındaydı; yol ancak ayağın altındaki taşlardan seçiliyordu.` },
        { trait: 'aysiz', t: `Zifiri karanlık, aysız bir gece. Köyün fenerleri bile ışığını yola vuramıyordu.` },
      ],
      yer: [
        { trait: 'yol', t: `Köye inen ıssız yol; bir yanı uçurum, öbür yanı mezarlık duvarı.` },
        { trait: 'yol', t: `Kasabaya giden eski yol. Yarı yolda bir taş yığını var; biri orada öldürülmüş, derler.` },
        { trait: 'yol', t: `Köyler arasındaki ıssız yol. Geceleri oradan ne kervan geçer ne çoban.` },
        { trait: 'mezarlik', t: `Köyün mezarlığı, yolun kenarında. Taş duvarın bir yeri yıkık; köpek oradan girip çıkıyor.` },
        { trait: 'mezarlik', t: `Mezarlığın en kenarında taşsız bir mezar. Kimin olduğunu kimse söylemek istemiyor.` },
        { trait: 'mezarlik', t: `Köyün mezarlığı. Selvilerin altında, taşların arasından geçen, üstünde hiç ot bitmeyen dar bir patika.` },
      ],
      sebep: [
        { trait: 'haksiz_olum', t: `{Y}: “Yıllar önce bu yolda bir garip öldürüldü, katili hiç bulunmadı. Kanı yerde kaldı. O köpek o kanın köpeğidir.”` },
        { trait: 'haksiz_olum', t: `{Y}: “Asılan adam suçsuzdu; herkes biliyordu, kimse sesini çıkarmadı. O günden beri ay olmayan gecelerde bu köpek dolaşıyor.”` },
        { trait: 'haksiz_olum', t: `{Y}: “Haksız yere bir can gitti. Hesabı sorulmayan can bir yoldan geri döner, kendi hesabını kendi sorar.”` },
      ],
    },
    hunt: {
      intro: [
        `Aysız bir gecede mezarlık duvarının dibinde, yolu gören bir taşın arkasında beklediniz.`,
        `Karanlığın içinden kapkara, sıska bir köpek çıktı. Yolun ortasına oturup size döndü.`,
      ],
      success: [
        `Meşaleleri yakıp çevrenize dizdiniz; ateşin halkasına bir adım bile atamadı. Sabaha kadar karşılıklı oturdunuz.`,
        `İlk horozla birlikte ezan okundu. Köpek kalktı, mezarlığa doğru yürüdü; duvarın dibinde artık yoktu.`,
      ],
      partial: [
        `Korumanız yarımdı. Köpek size yaklaşamadı ama gitmedi de; gün ağarmadan karanlığa yürüdü.`,
        `Bu gece kimse ölmedi. Ama ay olmayan gecelerde o yol hâlâ yürünmüyor.`,
      ],
    },
  },

  sirtlan: {
    aka: ['Kaftar'],
    region: 'Güney ve Doğu Anadolu’da, Toroslarda',
    epithet: 'Uyuyanı büyüleyip mağarasına götüren',
    lore: `Derler ki sırtlan uyuyan insanı uzaktan, kokusundan bulur. Ay olmayan gecelerde köyün kıyısına, yol kenarında uyuyakalan yolcunun yanına sokulur; kuyruğunu yüzüne sürer ya da çevresinde üç kez döner. Büyülenen kişi uyanır ama kendinde değildir. Sırtlanı anası sanır, “anam, anam” diye peşinden yürür, ta mağarasına kadar gider. Yolda başını bir taşa çarpıp kanatan kendine gelir, derler; yoksa o mağaradan dönen olmaz, ardında yalnız çarığı, kuşağı kalır. Sırtlan ateşten korkar; ocağı yanan eve, yolda meşale taşıyana yanaşmaz. Demirin soğuğu da büyüsünü bozar: yastığının altında bıçak olanı büyüleyemez, eline demir alan yolcu uyanır, yürüdüğü yolu görür.`,
    clues: {
      kurban: [
        { trait: 'uyuyan', t: `{K} yazın damda uyuyordu. Sabah yatağı boştu; yorgan merdivenin başına kadar sürüklenmiş.` },
        { trait: 'uyuyan', t: `{K} sıcaktan avluda, hasırın üstünde uyumuştu. Sabah hasır yerinde, {K} yok. Kapı içeriden sürgülüydü; avlunun duvarı alçak.` },
        { trait: 'uyuyan', t: `Komşular gece yarısı {K:gen} uykulu uykulu sokakta yürüdüğünü görmüş. Seslenmişler, dönmemiş. “Anam önümde” deyip köyün dışına gitmiş.` },
        { trait: 'yolcu', t: `Yolcu {K} yorulup yol kenarında bir kayanın dibinde uyuyakalmış. Arkadaşı uyandığında yanında yoktu. Çıkını da değneği de yerindeydi.` },
        { trait: 'yolcu', t: `{K} gece yolda tek başına yürüyordu. Çobanlar onu sabaha karşı mağaraya giden patikada gördü; gözleri açık, kendi kendine “anam” diyordu. Yetişemediler.` },
        { trait: 'yolcu', t: `Kervanla gelen {K} molada biraz uzağa uzanmıştı. Sabah kervan yola çıktı; {K} yoktu. Yattığı yerin yanında pençe izleri.` },
      ],
      iz: [
        { trait: 'pence', t: `Uyuyanın yattığı yerin çevresinde pençe izleri; bir şey onun etrafında üç kez dönmüş.` },
        { trait: 'pence', t: `Patikanın tozunda iki iz yan yana: bir insan ayağı, bir de köpeğinkine benzeyen ama ön ayakları arka ayaklarından iri pençeler.` },
        { trait: 'pence', t: `Mağaraya giden yolun çamurunda pençe izleri. Arka pençeler öndekilerden küçük; hayvan topallar gibi yürümüş.` },
      ],
      tanik: [
        { trait: 'hayvan', t: `{T}: “Köpek sandım, değildi. Sırtı arkaya doğru alçalıyordu, boynu kalın, her yeri benekli. Bana bakıp boğuk bir ses çıkardı.”` },
        { trait: 'hayvan', t: `{T}: “Yolun kenarında bir hayvan oturuyordu; başı iri, kulakları yuvarlak. Kaçmadı. Uyuyan arkadaşıma bakıyordu, bana değil.”` },
        { trait: 'hayvan', t: `{T}: “Uykumda biri yüzüme bir şey sürdü. Gözümü açtım; sırtı çarpık, kirli sarı bir hayvan uzaklaşıyordu. Bir an peşinden kalkmak istedim.”` },
      ],
      zaman: [
        { trait: 'aysiz', t: `Aysız bir gece. Göz gözü görmüyordu; yıldızlar vardı ama ışık vermiyordu.` },
        { trait: 'aysiz', t: `Ay olmayan gecelerin ikincisi. Köpekler sabaha kadar köyün dışına doğru havladı.` },
        { trait: 'aysiz', t: `Zifiri karanlıktı. Ay daha doğmamıştı, o gece doğmayacaktı da. Fener tutan bile ayağının ucunu göremiyordu.` },
      ],
      yer: [
        { trait: 'magara', t: `Köyün dışındaki kayalıkta bir mağara. Ağzında kırılmış, içi boşaltılmış kemikler; kimi hayvan kemiği, kimi değil.` },
        { trait: 'magara', t: `Mağaranın içinde keskin, sidik gibi bir koku. Yerde bir kuşak, bir çarık, bir de tespih.` },
        { trait: 'magara', t: `Taşların arasında alçak, ancak sürünerek girilen bir mağara. Ağzındaki toprak pençelerle düzlenmiş.` },
        { trait: 'yol', t: `Yolcuların mola verdiği yol kenarı, ulu bir kayanın gölgesi. Kayanın dibindeki toprak yatılmaktan dümdüz.` },
        { trait: 'yol', t: `İki köy arasındaki ıssız yol; yarı yolda, yolcuların gecelediği düz bir yer var.` },
        { trait: 'yol', t: `Kasabaya giden eski yol. Gece orada yatan yolcu sabaha eksik kalkar, derler.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Yalnız yolcu yolda uyumaz. Uyursa başında bekleyen olmaz; o bekler.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Gece tek başına yola çıkılmış, yorulunca yol kenarına uzanılmış. Yanında biri olsa uyandırırdı.”` },
        { trait: 'yalniz_yol', t: `{Y}: “O hayvan kalabalığa yanaşmaz. Gece yola tek düşeni kokusundan bilir, ardına takılır.”` },
      ],
    },
    hunt: {
      intro: [
        `Aysız bir gecede, mağaraya giden yolun kenarında uyuyor gibi uzanıp beklediniz.`,
        `Yakınınızda bir soluk, bir hırıltı. Sırtı çarpık bir hayvan çevrenizde dönmeye başladı.`,
      ],
      success: [
        `Ateşi bir anda harlattınız; yüzünü alevden kaçırdı. Elinizdeki demirin soğuğu büyüsünü tutturmadı; mağarasına kaçtı.`,
        `Sabah mağaranın ağzında {K} uyandı. Kendini evinde sanıyordu.`,
      ],
      partial: [
        `Büyüsünü sürdüremedi, ama kaçarken mağarasının yolunu da bırakmadı.`,
        `{K} eve döndü, sağ ama sersem. Köyün dışında geceleri bir hırıltı hâlâ dolaşıyor.`,
      ],
    },
  },

  denizkizi: {
    aka: ['Gorgona'],
    region: 'Karadeniz ve Ege kıyılarında, balıkçılar arasında',
    epithet: 'Fırtınada balıkçıları denize çağıran kız',
    lore: `Derler ki denizin bir kızı vardır. Belinden yukarısı göz alıcı güzellikte bir kız, aşağısı balıktır. Fırtına gecelerinde, bir de dolunayda dalgaların arasından görünür; kayıkçıyı adıyla çağırır, türkü söyler. Sesine dönen dümeni bırakır, kayığı kayaya bindirir ya da kendini denize atar. Ardından ağlara, kayığın küpeştesine yosun dolanır. Denize küfreden, “bu deniz bana vız gelir” diye övünen balıkçının adını unutmaz, ilk fırtınada onu çağırır. Eski balıkçılar kayığın burnuna al bir kurdele bağlar; deniz kızı alı görünce o kayığı kendinden sayar, dokunmaz. Bir de kayığa tuz serperler: tuz karanın, sofranın tuzudur; kayık karanın malı sayılır, deniz kızı karanın malına el uzatamaz.`,
    clues: {
      kurban: [
        { trait: 'denizci', t: `Balıkçı {K} fırtına çıkmadan denize açılmıştı. Kayığı sabah kıyıya ters vurdu; {K:gen} cenazesi iki gün sonra kumsalda bulundu.` },
        { trait: 'denizci', t: `{K} otuz yıllık kayıkçıydı. Arkadaşı anlatıyor: {K} dümeni bıraktı, ayağa kalktı, bir şeye gülümseyip suya yürüdü. Cenazesi ertesi gün çıktı.` },
        { trait: 'denizci', t: `Balıkçı {K:gen} kayığı dolunayın altında, açıkta boş bulundu. Kürekler yerinde, dümen bağlı. {K} sabah kendi ağına dolanmış çıktı.` },
      ],
      iz: [
        { trait: 'yosun', t: `Kayığın küpeştesine, dümene, küreklerin sapına deniz yosunu sarılmış; sanki biri yosunlu elleriyle kayığı tutmuş.` },
        { trait: 'yosun', t: `Ağlar çekildiğinde balık yerine bir tutam koyu yeşil yosun çıktı. Kokusu denizin en dibinden geliyordu.` },
        { trait: 'yosun', t: `İskelenin tahtalarında, denizden kayığa kadar uzanan yosun parçaları. Kaygan, taze, sanki az önce koparılmış.` },
      ],
      tanik: [
        { trait: 'guzel', t: `{T}: “Dalgaların arasında bir kız gördüm; yüzü ay gibiydi. O kadar güzeldi ki dümeni bıraktım. Arkadaşım omzumdan çekmese...”` },
        { trait: 'guzel', t: `{T}: “Kayanın üstüne oturmuştu. Ömrümde öyle güzel bir yüz görmedim. Fırtınanın ortasında yüzüne bir damla su değmiyordu.”` },
        { trait: 'guzel', t: `{T}: “Güzelliğine bakmak acıtıyordu. Bir an bana baktı; o günden beri karada ne yesem tatsız.”` },
        { trait: 'cagiran', t: `{T}: “Fırtınanın içinden biri {K:gen} adını söyledi, üç kez, tatlı tatlı. Rüzgâr ne kadar uğuldasa o ses kulağımın dibindeydi.”` },
        { trait: 'cagiran', t: `{T}: “Denizden bir türkü geliyordu. Sözlerinin arasında benim adım geçiyordu, anam beni nasıl çağırırsa öyle.”` },
        { trait: 'cagiran', t: `{T}: “‘Gel’ dedi biri, adımı söyleyip. Ses kayığın altından, sudan geliyordu. Kulaklarımı tıkadım, yine duydum.”` },
      ],
      zaman: [
        { trait: 'firtina', t: `Fırtına gecesi. Dalgalar iskelenin üstünden aşıyor, bağlı kayıklar birbirine çarpıyordu; rüzgâr insanın sesini ağzından alıp götürüyordu.` },
        { trait: 'firtina', t: `Poyraz bütün gün esti, akşama doğru fırtınaya döndü. Gök gürledikçe deniz kapkara oldu.` },
        { trait: 'firtina', t: `Fırtınanın en azgın saati. Şimşek her çaktığında deniz bir an bembeyaz kesiliyordu.` },
        { trait: 'dolunay', t: `Dolunay gecesi. Deniz durgundu; ayın ışığı suyun üstünde kıyıdan ufka bir yol gibi uzanıyordu.` },
        { trait: 'dolunay', t: `Ay on dördündeydi; kayıklar ay ışığında ağ çekiyordu, fenere gerek yoktu.` },
        { trait: 'dolunay', t: `Dolunay. Deniz gümüş gibi parlıyordu; o kadar aydınlıktı ki kıyıdan açıktaki kayıklar tek tek sayılırdı.` },
      ],
      yer: [
        { trait: 'deniz', t: `Limanın ağzındaki kayalıklar. Dalga orada hiç durulmaz, köpük kayaların dibinde hep kaynar.` },
        { trait: 'deniz', t: `Açık deniz, kıyıdan bir saatlik kürek. Dip orada birden derinleşiyor, su lacivertten kapkaraya dönüyor.` },
        { trait: 'deniz', t: `Burnun ardındaki koy. Fırtınada kayıklar oraya sığınır; bu kez sığınan kayıklardan biri dönmedi.` },
      ],
      sebep: [
        { trait: 'ovunmek', t: `{Y}: “Kahvede ‘bu deniz beni boğamaz’ diye övündü. Deniz duydu. Deniz böyle sözü unutmaz.”` },
        { trait: 'ovunmek', t: `{Y}: “Ağlarını boş çekince denize küfretti, fırtınanın ortasında. Ağzından çıkanı kızı duydu.”` },
        { trait: 'ovunmek', t: `{Y}: “Bizim balıkçılar denizin adını büyük anmaz. Bu sefer biri denizle alay etti, ‘ben senden büyüğüm’ dedi.”` },
      ],
    },
    hunt: {
      intro: [
        `Fırtına gecesi, kayığın içinde, limanın ağzındaki kayalıkların dibinde beklediniz.`,
        `Dalgaların arasından bir türkü yükseldi, adınızı söyledi. Kayanın üstünde göz alıcı bir kız belirdi.`,
      ],
      success: [
        `Kayığın burnundaki al kurdeleyi görünce türküsü kesildi. Küpeşteye tuz serptiniz; yosunlu eli tahtaya değmeden geri çekildi.`,
        `Sabah deniz çarşaf gibiydi. Balıkçılar ağlarını yeniden attı; ağlardan yosun değil balık çıktı.`,
      ],
      partial: [
        `Türküsünü bitirmeden dalgaların altına daldı ama gitmedi; sesi kayığın altında uzun süre dolaştı.`,
        `Bu fırtınayı kayıp vermeden atlattınız. Ama {koy} balıkçıları bir sonraki dolunayda denize açılmayacak.`,
      ],
    },
  },

  definebekcisi: {
    aka: ['Define cini'],
    region: 'Anadolu’nun eski yerleşim yerlerinde, höyüklerde',
    epithet: 'Gömülü hazinenin başında bekleyen cin',
    lore: `Derler ki yere gömülen her hazinenin bir bekçisi vardır. Eski hanların yıkıntılarında, terk edilmiş mezarlıklarda, küplerin başında bekler. Kimi kara bir gölge olarak görünür, kimi bir karış boyunda, ufacık bir ihtiyar olarak. Gece yarısı toprağı kazana önce taş atar, sonra fenerini söndürür, kazdığı çukura kül savurur. Yine de dönmeyeni çarpar: eli kazmanın sapında kaskatı kalır, dili tutulur, aklı gider. Çarpılanın başında kurşun dökülür; kurşun suya düşüp cızırdayınca cinin korkusu kurşuna geçer, adam kendine gelir. Kazılan yerin dört bir yanına da tuz serpilir; bekçi tuzlu toprağı geçemez, çukurun başından çekilir. Bu yüzden eskiler, toprağın altındakine el uzatanın cebinde bir avuç tuz olmalı der.`,
    clues: {
      kurban: [
        { trait: 'defineci', t: `{K} elinde bir harita olduğunu söyleyip gece yarısı yıkık hana gitti. Sabah kazdığı çukurun başında bulundu; eli kazmanın sapına yapışmış, açılmıyor.` },
        { trait: 'defineci', t: `Defineci {K} mezarlıktaki eski bir taşın altını kazıyordu. Arkadaşları kaçtı, {K} çukurun içinde kaldı. Çıkardığımızda tek kelime edemiyordu; hâlâ edemiyor.` },
        { trait: 'defineci', t: `{K} yıllardır define arardı. Bir gece kazmaya gitti; döndüğünde ağzı yana kaymıştı. Gözleri hep yerde, toprağın altını görüyormuş gibi.` },
      ],
      iz: [
        { trait: 'mezar', t: `Yıkık hanın avlusunda taze eşilmiş toprak. Çukur bir insan boyu derinlikte; dibinde bir küpün ağzı görünüyor.` },
        { trait: 'mezar', t: `Mezarlığın en eski köşesinde toprak eşilmiş, taşlar yana devrilmiş. Eşilen toprak sabah yarı yarıya geri doldurulmuştu.` },
        { trait: 'mezar', t: `Kazılan çukurun kenarlarına toprak geri yığılmış; sanki biri gece boyunca çukuru kapatmaya uğraşmış. Kazma izleri bir yerde bitiyor.` },
        { trait: 'kul', t: `Çukurun dibine ince, ak bir kül serpilmiş. Orada ateş yakılmadı; kül nereden geldi, kimse bilmiyor.` },
        { trait: 'kul', t: `Fenerin camı içeriden islenmiş, fitili kömür olmuş. Fenerin durduğu taş kapkara.` },
        { trait: 'kul', t: `Kazıcıların yaktığı ateşin yerinde yalnız kül kalmış; biri ateşi eliyle dağıtmış gibi. Kül çukura doğru savrulmuş.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Çukurun başında kara bir gölge durdu. Fenerin ışığı ona vurunca içinden geçti, arkasındaki duvar göründü.”` },
        { trait: 'golge', t: `{T}: “Harabenin duvarına bir gölge düştü. Önünde o gölgeyi düşürecek kimse yoktu.”` },
        { trait: 'golge', t: `{T}: “Kazarken birinin başımızda durduğunu hissettik. Döndük; kara bir gölge bir an durdu, sonra yerin içine çekildi.”` },
        { trait: 'ufak', t: `{T}: “Bir taşın üstünde ufacık bir ihtiyar oturuyordu, bir karış boyunda. Bize parmağıyla ‘gidin’ işareti yaptı.”` },
        { trait: 'ufak', t: `{T}: “Çukurun içinden çocuk boyu bile olmayan bir şey çıktı. Ufacıktı ama yürüyüşü yaşlı bir adamınki gibiydi.”` },
        { trait: 'ufak', t: `{T}: “Küpün ağzına küçücük bir el uzandı, bir parmak kalınlığında. Ardından ufacık, sakallı bir yüz göründü.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı. Defineciler hep o saati seçer, kimse görmesin diye; köyde tek bir ışık bile yanmıyordu.` },
        { trait: 'gece_yarisi', t: `Tam gece yarısı. Kazma ilk taşa vurduğunda köydeki bütün köpekler aynı anda havladı.` },
        { trait: 'gece_yarisi', t: `Gece yarısını az geçe. Fener tam o saatte, rüzgâr yokken, kendi kendine söndü.` },
      ],
      yer: [
        { trait: 'harabe', t: `Köyün üstündeki yıkık han. Duvarlarının ancak yarısı ayakta; avlusu çukur çukur.` },
        { trait: 'harabe', t: `Höyüğün üstünde eski bir yapının yıkıntısı. Kimin yaptığını kimse bilmiyor; taşları köy evlerine taşınmış.` },
        { trait: 'harabe', t: `Terk edilmiş eski köy. Evlerin damları çökmüş; en büyük evin taban taşları sökülmüş.` },
        { trait: 'mezarlik', t: `Artık kimsenin gömülmediği, eskilerden kalma bir mezarlık. Taşlarındaki yazıyı okuyabilen yok.` },
        { trait: 'mezarlik', t: `Eski mezarlığın dibindeki büyük taş sanduka. Kapağı bir parmak kadar kaydırılmış; aralıktan içeri bakmaya kimse cesaret edemiyor.` },
        { trait: 'mezarlik', t: `Köyün dışındaki eski mezarlık. Taşlar yamulmuş, yazıları silinmiş; aralarında yeni kazılmış çukurlar var.` },
      ],
      sebep: [
        { trait: 'define', t: `{Y}: “Toprağın altındaki para bizim paramız değil. Sahibi yoksa bekçisi vardır. El uzatan çarpılır.”` },
        { trait: 'define', t: `{Y}: “Kaç kere dedim: o hanın altında ne varsa orada kalsın. Dinlemediler, kazdılar.”` },
        { trait: 'define', t: `{Y}: “Ölünün yanına gömüleni almak ölüden almaktır. O küpe uzanan elin hesabı sorulur.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısı, yıkıntıların arasında, kazılan çukurun başında beklediniz.`,
        `Fenerin ışığı titredi. Çukurun dibinden bir avuç kül savruldu; duvarda kara bir gölge koyulaştı.`,
      ],
      success: [
        `Çukurun dört bir yanına tuz serptiniz; gölge tuzun çizgisinde durdu. Getirdiğiniz kurşunu {K:gen} başının üstünde suya döktünüz; kurşun cızırdayıp dondu.`,
        `Gölge çukura, çukur toprağa karıştı. Sabah {K:gen} eli kazmanın sapından ilk kez çözüldü.`,
      ],
      partial: [
        `Gölge bir an geriledi ama çukurun başından çekilmedi.`,
        `{K} kendine geliyor. Çukuru köylüler doldurdu; ama altındaki küpün bekçisi hâlâ orada.`,
      ],
    },
  },
};
