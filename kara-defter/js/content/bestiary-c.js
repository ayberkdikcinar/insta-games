// Bestiary C: the wider Turkic world (Tatar, Başkurt, Kazak, Kırgız, Yakut, Altay).
// The defter tells them as told in the villages; `region` says where the belief comes from.
export default {
  surale: {
    aka: ['Şüräle', 'Arsuri'],
    region: 'Kazan Tatarları ve Başkurtlar arasında; Çuvaşlarda Arsuri',
    epithet: 'Ormanda gıdıklayarak öldüren',
    lore: `Derler ki Şürale ormanın derininde yaşar. Boyu insan kadardır, bütün gövdesi kıl içindedir; alnında tek bir boynuz, ellerinde upuzun, ince parmaklar vardır. Akşam karanlığında ormana yalnız giren yolcunun, odun kesen ya da ot biçen köylünün karşısına çıkar, gülerek “gel oynaşalım” der. Oyunu gıdıklamaktır; kahkahası ormanı doldurur, kurbanı gülmekten nefessiz kalıp ölür. En çok, dokunulmaz ağaçlar kesildiği yıl azar. Tatarlar ondan kurtulan oduncuyu şöyle anlatır: oduncu kütüğü demir baltayla yarar, yarığa kama çakar, Şürale’ye “parmaklarını buraya sok” der, sonra kamayı çeker. Parmaklar kütükte sıkışır. Şürale adını sorunca oduncu gerçek adını söylemez, “Adım Geçen Yıl” der. Şürale bütün gece “Geçen Yıl sıkıştırdı” diye bağırır; ormandakiler güler, geçen yılın derdi bugün mü bağırılır diye. Adını vermeyene, yanında demir taşıyana eli varmaz.`,
    clues: {
      kurban: [
        { trait: 'yolcu', t: `{K} akşamüstü kestirmeden, orman yolundan dönmek istemiş. Sabah patikada sırtüstü bulundu; ağzı kulaklarına kadar açık, yüzü gülmekten kasılıp kalmış.` },
        { trait: 'yolcu', t: `Pazardan dönen {K} gün batarken ormanın içine girmiş. Atı gece köye tek başına geldi, heybesi hâlâ terkisindeydi; {K} sabah bir kayın dibinde, nefesi kesilmiş bulundu.` },
        { trait: 'yolcu', t: `Yolcu {K} ormanın öbür yanındaki köye gidecekti. Bulduklarında ölüydü ama gözlerinden yaş akmış, gülmekten yaşaran bir adam gibi; köyde kimse o yüze ikinci kez bakamadı.` },
        { trait: 'ciftci', t: `{K} orman içindeki çayırda ot biçmeye kalmıştı. Akşam o taraftan bir kahkaha duyulmuş; sabah {K} tırpanının başında, kollarını kendi göğsüne sarmış hâlde ölü bulundu.` },
        { trait: 'ciftci', t: `Tarlası ormana bitişik olan {K} son demetleri bağlamak için geç kaldı. Sabah orak ekinin içindeydi; {K} ise ağaçların altında, sanki biri onu koltuk altlarından sürüklemiş.` },
        { trait: 'ciftci', t: `Harmandan sonra kışlık odun için ormana giden {K} dönmedi. Arabası orman kıyısında duruyordu; öküzler boyunduruktaydı, bütün gece öyle beklemişler.` },
      ],
      iz: [
        { trait: 'kil', t: `Yarılmış bir kütüğün çatlağında bir tutam kıl sıkışmış: kaba, keçe gibi, kirli yeşil. Ne ayıya benziyor ne domuza.` },
        { trait: 'kil', t: `Ölünün yakasına, düğmelerinin arasına keçeleşmiş kıllar takılmış. Kokusu çürük yaprak ve reçine.` },
        { trait: 'kil', t: `Patikanın dikenlerinde, insan boyunda, uzun kıl tutamları asılı. Elle çekince kopmuyor; birbirine keçe gibi dolanmış.` },
      ],
      tanik: [
        { trait: 'killi', t: `{T}: “Ağaçların arasından çıktı. Boyu benim kadar, her yeri kıl. Alnında bir boynuz vardı, parmakları dizlerine iniyordu.”` },
        { trait: 'killi', t: `{T}: “Devrilmiş bir kütük sandım, kalktı. Kıllı bir şeydi; parmaklarını birbirine sürtüyordu, kuru dal gibi çıtırdadılar.”` },
        { trait: 'killi', t: `{T}: “Yüzü de kıl içindeydi ama ağzı gülümsüyordu, yemin ederim. Upuzun parmaklarını bana doğru oynattı, gel der gibi.”` },
        { trait: 'kahkaha', t: `{T}: “Ormandan iki kahkaha geliyordu. Biri bir adamındı, sonra boğuldu, kesildi. Öbürü susmadı.”` },
        { trait: 'kahkaha', t: `{T}: “Orman kıyısından biri katıla katıla gülüyordu. İnsan o kadar uzun gülemez; nefesi yetmez.”` },
        { trait: 'kahkaha', t: `{T}: “Arkamdan biri güldü, kulağımın dibinde. Döndüm, kimse yok. Ben köye kadar koştum, o hâlâ gülüyordu.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Güneş ağaçların arkasına yeni inmişti. Köyde ilk lambalar yanarken ormanda iş çoktan bitmişti.` },
        { trait: 'aksam', t: `Akşam ezanıyla yatsı arasında; davarların köye döndüğü, ormanın ilk karardığı saat.` },
        { trait: 'aksam', t: `Alaca karanlıkta, gün tam batarken. Gece iyice çöktüğünde ormanda ses kalmamıştı.` },
      ],
      yer: [
        { trait: 'orman', t: `Köyün üstündeki kayın ormanı; ağaçların sık, yolun dar olduğu yer. Bir açıklıkta yarılmış kütükler yığılı.` },
        { trait: 'orman', t: `Orman içindeki eski oduncu patikası. Dallar öyle sık ki öğlen bile alaca karanlık; yaprak ayak sesini yutuyor.` },
        { trait: 'orman', t: `Ormanın ortasında, yeni kesilmiş ağaçların bıraktığı açıklık. Kütüklerin kesik yüzü hâlâ ıslak, reçine kokuyor.` },
      ],
      sebep: [
        { trait: 'agac_kesmek', t: `{Y}: “O ormanda yaşlı bir ıhlamur vardı; kimse dokunmazdı. Bu bahar kestiniz. Ormanın sahibi var, ağacının hesabını insandan sorar.”` },
        { trait: 'agac_kesmek', t: `{Y}: “Ağaç kesilir, ama ormanın göbeğindeki ağaca balta vurulmaz. Vurdunuz. O kütüğün başında oturan bir şey var artık.”` },
        { trait: 'agac_kesmek', t: `{Y}: “Bu yıl ormandan gereğinden çok odun indirdiniz, büyük kayını da devirdiniz. Akşam gülen o sesi ilk kez o hafta duydum.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Akşamüstü ormana yalnız girilmez, yalnız çıkılmaz. Biz gençken iki kişi olmadan oduna bile gitmezdik.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Yanında kimse olmadan, karanlığa kalarak o yola girmiş. Yalnız yürüyen, ormandakine oyun arkadaşı olur.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Kalabalığa yanaşmaz o. Tek başına yürüyeni bekler, yanına sokulur, yoldaşın olayım der.”` },
      ],
    },
    hunt: {
      intro: [
        `Gün batarken, ormanın kıyısında, yarılmış bir kütüğün yanında beklediniz.`,
        `Ağaçların arasından bir kahkaha yaklaştı; upuzun parmaklar dalları aralayıp göründü.`,
      ],
      success: [
        `Adınızı sorduğunda “Geçen Yıl” dediniz. Oynaşalım deyince parmaklarını demir baltayla yarılmış kütüğün yarığına soktu; kama çekildi, parmaklar sıkıştı.`,
        `Bütün gece ormandan “Geçen Yıl sıkıştırdı” diye bir bağırış geldi. Sabah kütük boştu, ama o yoldan bir daha kahkaha duyulmadı.`,
      ],
      partial: [
        `Bir yanınız hazırdı, bir yanınız değil; parmaklar son anda yarıktan sıyrıldı.`,
        `Şürale ormanın derinine kaçtı. {koy} yolu şimdilik sessiz, ama ağaçların arasında hâlâ biri gülüyor.`,
      ],
    },
  },

  bicura: {
    aka: ['Bičura'],
    region: 'Kazan Tatarları ve Başkurtlar arasında',
    epithet: 'Döşeme altında oturan ufacık kadın',
    lore: `Derler ki Biçura ufacık bir kadındır; boyu bir karışı ancak geçer, başına kendinden büyük bir yemeni bağlar, eteği yerde sürünür. Evin döşemesinin altında, ocağın arkasında ya da ahırın samanlığında oturur. O yerin eski sahibidir; ev kurulmadan önce de oradaydı. Yeni ev kuran, boş eve taşınan aile ondan izin istemezse gece yarısı evi altüst eder: tencereleri devirir, unu döker, yorganları çeker, ahırda hayvanları birbirine katar. Ambarın bereketi kaçar, ev halkı uyuyamaz. Kendisine danışılan evde sesini çıkarmadan yaşar. Ama bir kez hırçınlaştı mı, eskiler onu kapının arkasına ters dikilmiş süpürgeyle evden uğurlar; eşiğe ve ocak başına serpilen tuzun üstünden geri dönemez, derler.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `Yeni taşındıkları evde {K} ve ev halkı bir haftadır uyumuyor. Her gece aynı gürültü; sabah her şey yerinden oynamış, kiler yarı yarıya boşalmış.` },
        { trait: 'hane', t: `{K:gen} evinde kimse gözünü kırpamıyor. Çocuklar yatağa girmek istemiyor, büyükler sabaha kadar lambayı yakık tutuyor. Ambardaki buğday bir ayda yarıya indi.` },
        { trait: 'hane', t: `{K} ve ailesi göçmen evine yerleşeli bir ay oldu. O günden beri ne hamurları kabarıyor ne inekleri süt veriyor; geceleri döşemenin altından tıkırtı geliyor.` },
      ],
      iz: [
        { trait: 'dagin', t: `Sabah mutfakta tencereler ters dönmüş, un çuvalı yere boşaltılmış. Unun üstünde ufacık, çıplak ayak izleri; ocağın arkasına doğru gidiyor.` },
        { trait: 'dagin', t: `Yorganlar yere çekilmiş, sandığın içindekiler odaya saçılmış. Ev halkı gece kimsenin yataktan kalkmadığına yemin ediyor.` },
        { trait: 'dagin', t: `Ahırda yemlik devrilmiş, koşum takımları birbirine dolanmış, saman tavana kadar savrulmuş. Hayvanlar bir köşeye toplanmış, titriyor.` },
      ],
      tanik: [
        { trait: 'ufak', t: `{T}: “Ocağın arkasından bir kadın çıktı, boyu ancak dizime geliyordu. Başında kocaman bir yemeni vardı; yüzünü göremedim.”` },
        { trait: 'ufak', t: `{T}: “Döşeme tahtalarının arasından ufacık bir şey süzüldü. Kedi değildi; eteği vardı, eteğinin ucu yerde sürünüyordu.”` },
        { trait: 'ufak', t: `{T}: “Ahırın kapısında oturmuş, ufacık elleriyle samanı didikliyordu. Lambayı tutunca başını kaldırdı: ihtiyar bir kadın yüzü, çocuk boyu.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı, horozdan çok önce. Ev halkı yatmış, ocak küllenmişken gürültü başlıyor.` },
        { trait: 'gece_yarisi', t: `Gece yarısı olunca döşemenin altından bir tıkırtı yükseliyor; önce hafif, sonra bütün ev sarsılıyor.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında, herkes ilk uykusundayken. Duvar saati on ikiyi vurdu, ardından ilk tencere yere düştü.` },
      ],
      yer: [
        { trait: 'ocak', t: `Ocak başı. Küller sabah yere saçılmış, sacayağı yan yatmış; ocağın arkasındaki taş yerinden oynamış.` },
        { trait: 'ocak', t: `Mutfağın ocak başı. Ocağın dibindeki döşeme tahtası gevşek; altında el sığacak kadar bir boşluk var.` },
        { trait: 'ocak', t: `Her şey ocağın çevresinde oluyor: tencere, sahan, kepçe hep orada dağılmış bulunuyor. Ocak taşının kenarında ufacık bir oturma yeri parlamış.` },
        { trait: 'ahir', t: `Evle duvar duvara ahır. Samanlık tarafından tıkırtı geliyor; inekler o köşeye bakıp böğürüyor.` },
        { trait: 'ahir', t: `Evden önce yapılmış eski ahır. Aile taşınınca onu da onarıp hayvanlarını içine doldurmuş.` },
        { trait: 'ahir', t: `Ahırın samanlık köşesi. Samanın içinde kuş yuvası gibi ufacık bir oyuk; içi sıcak, kenarına bir parça yemeni saçağı takılmış.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “Boş ev boş değildir. O eve girmeden kapıda durup izin istediniz mi? Biz eşiği öper, ‘bu evin eski sahibi, bizi kabul et’ derdik.”` },
        { trait: 'izinsiz', t: `{Y}: “Evi kuran usta da sormamış, taşınan da. Yerin eski sahibi kızgın; kimse ona bir kez ‘izninle’ demedi.”` },
        { trait: 'izinsiz', t: `{Y}: “O ev yıllarca boş durdu. Boş evde biri yerleşir. Siz kapıyı açıp içeri doldunuz, kimseye sormadan.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısına doğru, küllenmiş ocağın ışığında, döşemenin gevşek tahtasına bakarak beklediniz.`,
        `Saat on ikiyi vurunca tahtanın altından bir tıkırtı yükseldi; raftaki sahanlar titremeye başladı.`,
      ],
      success: [
        `Kapının arkasındaki ters süpürgeyi görünce durdu; eşiğe serilen tuzun önünde ufacık ayakları geri geri gitti.`,
        `Sabah un çuvalı dimdik duruyordu. O evde bir daha tencere devrilmedi.`,
      ],
      partial: [
        `Bir yol kapalıydı, öbürü açık; ufacık gölge ahırın samanlığına süzüldü.`,
        `Ev şimdilik sessiz. Ama samanlığın dibinde biri hâlâ sorulmayı bekliyor.`,
      ],
    },
  },

  yuha: {
    aka: ['Yuxa'],
    region: 'Tatar ve Başkurt masallarında, destanlarında',
    epithet: 'Yüz yaşında kadına dönen yılan',
    lore: `Derler ki yüz yıl yaşayan yılan Yuha olur. Gömleğini son kez ormanda bırakır, göz alan güzellikte bir kadına döner. Kimsesi, soyu sopu bilinmeyen bir kız olarak köye gelir; bir delikanlıyı kendine bağlar, evine yerleşir. Dolunay gecelerinde ormana iner, eski gömleğinin yanında yılan olup kıvrılır; o gecelerde delikanlı soluk, uykulu, kuru yaprak gibi hafif kalır. Her ay biraz daha erir, sonunda yatağında ölü bulunur; Yuha onun canını emerek yaşar. Gerçek yüzü aynada görünür; aynaya bakarken gözbebekleri incelir, dili çatallanır. Ardıç dalı yakılıp ev tütsülendiğinde dumana dayanamaz, tıslar, ormandaki eski derisine kaçar. Bu yüzden eskiler, nereden geldiği bilinmeyen kızı eve almadan önce aynanın karşısına oturtur, sonra ardıçla tütsülerdi.`,
    clues: {
      kurban: [
        { trait: 'delikanli', t: `Delikanlı {K} bir ay önce ormandan bir kızla döndü, “onunla evleneceğim” dedi. O günden beri eriyordu; dün sabah yatağında soğuk bulundu, teni kâğıt gibi kurumuş.` },
        { trait: 'delikanli', t: `{K} yirmi yaşındaydı, harmanda iki adamın işini görürdü. Ormandan getirdiği kızla düğün günü konuşulurken öldü; ondan önce üç ay gözümüzün önünde kurudu.` },
        { trait: 'delikanli', t: `Delikanlı {K} sabah ormanın kıyısında, bir kayanın dibinde bulundu. Bir aydır geceleri evden çıkıp ormana gidiyormuş; nedenini kimseye söylememiş.` },
      ],
      iz: [
        { trait: 'deri', t: `Ölünün yatağının altında bir yılan gömleği: upuzun, kol kalınlığında, yeni değiştirilmiş gibi kuru ve ince.` },
        { trait: 'deri', t: `Kızın bohçasında, temiz çamaşırların arasında katlanmış bir yılan gömleği. Pul pul, insan boyundan uzun.` },
        { trait: 'deri', t: `Ormandaki kayanın dibinde kocaman bir yılan gömleği; ağzı açık, sanki biri içinden doğrulup ayağa kalkmış.` },
      ],
      tanik: [
        { trait: 'guzel', t: `{T}: “Öyle güzeldi ki bakan bir daha bakardı. Ama hiç gülmedi, gözlerini de bir kez olsun kırpmadı.”` },
        { trait: 'guzel', t: `{T}: “Köyde öyle güzel kız yok, olmadı da. Sofrada yanıma oturdu; elleri buz gibiydi, yemekten bir lokma almadı.”` },
        { trait: 'guzel', t: `{T}: “İnsan gözünü ondan alamıyordu. Yalnız bir kez, kimse bakmıyor sanınca, ince dilini dudaklarının arasından çıkardı.”` },
        { trait: 'yilan', t: `{T}: “Dolunayda pencereden baktım. Yatağın üstünde kocaman bir yılan kıvrılmıştı, uyuyanın göğsünün tam üstünde.”` },
        { trait: 'yilan', t: `{T}: “Ormanın kıyısında ağaç gövdesi kalınlığında bir yılan gördüm. Başını kaldırdı, bana bir insan gibi baktı.”` },
        { trait: 'yilan', t: `{T}: “Kızın odasından tıslama geliyordu. Kapıyı araladım: yatakta kimse yoktu, yerdeki bir yılan yorganın altına kaydı.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Dolunay gecesi. Ay ormanın üstünde koca bir tepsi gibi duruyordu; köpekler sabaha kadar ormana doğru havladı.` },
        { trait: 'dolunay', t: `Hep ay dolunca. Ayın on dördünde {K:gen} benzi bir kat daha atıyor, ay incelince biraz yerine geliyor.` },
        { trait: 'dolunay', t: `Üç aydır, ay her dolduğunda. Ay küçülünce evde bir rahatlama oluyor; dolmaya başlayınca yine başlıyor.` },
      ],
      yer: [
        { trait: 'orman', t: `Köyün arkasındaki meşe ormanı; derinde, yosun tutmuş büyük bir kayanın çevresi. Otlar ezilmiş, sanki bir şey kıvrılıp yatmış.` },
        { trait: 'orman', t: `Kızın ilk görüldüğü yer: ormanın en sık yerindeki kayalık. Taşların arasındaki oyuktan hâlâ ılık bir koku geliyor.` },
        { trait: 'orman', t: `Ormanın içinden geçen eski yol. İzler yolun başına kadar insan izi; ağaçların arasına girince kıvrım kıvrım bir sürünme izine dönüyor.` },
      ],
      sebep: [
        { trait: 'yabanci', t: `{Y}: “Kim bu kız, kimin kızı? Anası yok, babası yok, köyü yok. Soyunu bilmediğiniz birini eve aldınız.”` },
        { trait: 'yabanci', t: `{Y}: “Ormandan gelin gelmez. Kapınızı tanımadığınız birine açtınız, sofranıza oturttunuz.”` },
        { trait: 'yabanci', t: `{Y}: “Yüzüne bakıp aldınız, kim olduğunu sormadınız. Eskiden bilinmeyen bir kız eve girmeden önce kırk soru sorulurdu.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi, kızın odasının karşısında, lambayı kısıp beklediniz.`,
        `Gece ilerleyince odadan ince bir tıslama geldi; kapının altından soğuk bir sürünme sesi geçti.`,
      ],
      success: [
        `Kapıya dönük aynada güzel bir yüz değil, pullu bir baş göründü; ardıç dumanı odayı doldurunca tıslayarak pencereden kaydı.`,
        `Sabah ormandaki kayanın dibinde boş bir yılan gömleği bulundu. Kız bir daha görülmedi.`,
      ],
      partial: [
        `Gerçek yüzü bir an göründü, ama onu tutacak ikinci bir şey yoktu; ormana süzüldü.`,
        `Bu evden gitti. Bir başka köyde, bir başka kapıda soyu bilinmeyen bir kız olarak yine belirecek.`,
      ],
    },
  },

  bakirtirnak: {
    aka: ['Jeztırnak'],
    region: 'Kazak bozkırlarında',
    epithet: 'Irmak başında bekleyen bakır tırnaklı güzel',
    lore: `Derler ki Bakırtırnak akşam karanlığında ırmak kıyısında ya da ıssız bir yolun kenarında, göz alan güzellikte bir kadın olarak oturur. Yolcuyu, eve dönen delikanlıyı tatlı sözle durdurur; yorgunsun, gel dinlen, der. Ellerini hep yenlerinin içinde saklar, çünkü tırnakları bakırdandır, uzun ve keskindir. Onu yanına alan, evine buyur eden sabaha çıkmaz. Irmak kıyısında bulunan ölülerin boynunda, göğsünde bakır pası gibi yeşile çalan uzun çizikler olur; yerde kan kalır. Bakırın düşmanı demirdir: cebinde bıçak, eyerinde nal taşıyana tırnağını geçiremez. Güzel yüzü bir örtüdür; aynaya bakan, kadının yerinde bakır pençeli, kuru bir cadı görür. Aynada yüzünü gördüğünü anlayınca Bakırtırnak bağırarak kaçar.`,
    clues: {
      kurban: [
        { trait: 'yolcu', t: `Yolcu {K} akşamüstü köprünün başında birine yol sormuş; sonra ırmak tarafına saptığı görülmüş. Sabah sazlıkta bulundu, boynunda dört ince çizik.` },
        { trait: 'yolcu', t: `Kasabadan dönen {K} gece köye varamadı. Atı yolun kenarında otluyordu; {K} birkaç adım ötede yatıyordu, yüzü hâlâ birini dinler gibi.` },
        { trait: 'yolcu', t: `{K} yolcuydu, bir gece köyde konakladı. Sabah misafir odasında değil, ırmak kıyısında bulundu; elinde yabancı bir kadın yemenisi.` },
        { trait: 'delikanli', t: `Delikanlı {K} akşam atları sulamaya inmiş. Arkadaşları onu kıyıda güzel bir kızla konuşurken görmüş; sabah aynı yerde ölü buldular.` },
        { trait: 'delikanli', t: `{K} on dokuz yaşındaydı. İki haftadır akşamları ırmak yoluna çıkıyor, sabaha karşı dönüyordu. Dün dönmedi.` },
        { trait: 'delikanli', t: `Askerden yeni dönen {K} sevdiği kızı kimseye göstermedi. Cenazesini yıkayanlar göğsündeki çiziklere bakıp sustular.` },
      ],
      iz: [
        { trait: 'tirnak', t: `Ölünün göğsünde, köprücük kemiğinden aşağı inen dört uzun çizik. Kenarları yeşile çalmış, bakır pası gibi.` },
        { trait: 'tirnak', t: `Köprünün tahta korkuluğunda tırnak çizikleri, derin ve yan yana. Çiziklerin içinde yeşilimsi bir pas.` },
        { trait: 'tirnak', t: `Misafir odasının kapısında, iç yüzünde, insan eli yüksekliğinde uzun tırnak izleri. Biri çıkmamak için tutunmuş, biri çekmiş.` },
        { trait: 'kan', t: `Irmak kıyısındaki taşlarda kan damlaları; suyun kenarına kadar iniyor, orada kesiliyor.` },
        { trait: 'kan', t: `Misafir döşeğinde birkaç damla kan. Damlalar kapıya, kapıdan yola kadar gidiyor.` },
        { trait: 'kan', t: `Yol kenarındaki otlarda kurumuş kan. Bir tutam ot kızıl ve yeşil lekeli; biri tırnaklarını silmiş gibi.` },
      ],
      tanik: [
        { trait: 'guzel', t: `{T}: “Köprünün başında oturuyordu. Öyle güzeldi ki ay ışığında yüzü parlıyordu. Ellerini bir kez olsun yenlerinden çıkarmadı.”` },
        { trait: 'guzel', t: `{T}: “Bana da gülümsedi, yanına çağırdı; gidecektim. Sonra elini kaldırdı, tırnakları akşam güneşinde bakır gibi yandı.”` },
        { trait: 'guzel', t: `{T}: “Ömrümde öyle bir yüz görmedim. Ama konuşurken bir tıkırtı geliyordu: yenlerinin içinde tırnaklarını birbirine vuruyordu.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam, güneş batıp da yol kararmaya başladığında. Sürüler köye dönmüştü, yolcular hâlâ yoldaydı.` },
        { trait: 'aksam', t: `Gün batımından hemen sonra; ırmağın üstüne sis inerken. O saatte kıyıda kimse oyalanmaz, sesler sudan büyük gelir.` },
        { trait: 'aksam', t: `Akşam ezanı okunurken. Kahvede lambalar yeni yakılmıştı; yolun ucu artık seçilmiyordu.` },
      ],
      yer: [
        { trait: 'su', t: `Irmağın köprü altında genişlediği yer; sazların arasında, ezilmiş otlardan bir oturak.` },
        { trait: 'su', t: `Irmak kıyısındaki çakıllık; atların sulandığı yer. Islak taşların arasında, suya dönük, ezilmiş bir oturak.` },
        { trait: 'su', t: `Köyün altındaki ırmak boyu. Suyun sesi öyle gür ki orada bağırılsa köyden duyulmaz.` },
        { trait: 'yol', t: `Köyden kasabaya giden ıssız yol; iki tepenin arasında hiç ev olmayan uzun bir düzlük.` },
        { trait: 'yol', t: `Eski kervan yolunun köprüye inen kıvrımı. Yolun kenarında, kimsenin koymadığı düz bir taş oturak.` },
        { trait: 'yol', t: `Akşamları kimsenin geçmediği tozlu yol. Ayak izleri yolun ortasında yan yana yürüyor, sonra biri bitiyor.` },
      ],
      sebep: [
        { trait: 'yabanci', t: `{Y}: “Akşam yolda karşınıza çıkan kadını evinize aldınız, sofraya oturttunuz. Kimdi, nereliydi, soran oldu mu?”` },
        { trait: 'yabanci', t: `{Y}: “Misafir başımızın tacıdır, ama yolda bulunan güzel misafir başka. Kimin nesi olduğunu bilmeden kapınızı açtınız.”` },
        { trait: 'yabanci', t: `{Y}: “O kadın köyün hiçbir evinden değildi. Siz ona kapıyı, yatağı açtınız; o da size tırnağını.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam, köprünün başında, yolun ırmağa indiği yerde beklediniz.`,
        `Irmak tarafından ince bir türkü geldi; az önce boş olan taşın üstünde güzel bir kadın oturuyordu.`,
      ],
      success: [
        `Eyerde asılı aynada bakır pençeli, kuru bir yüz göründü; tırnaklarını uzattığında karşısında demir bıçağı buldu.`,
        `Bakır tırnaklardan biri köprünün tahtasında kırık kaldı. O yolda akşamları kimse bir daha durdurulmadı.`,
      ],
      partial: [
        `Gerçek yüzünü bir an gördünüz, ama elinizde onu durduracak ikinci bir şey yoktu.`,
        `Sazların arasına çekildi. Köy kurtuldu; ırmak boyunda ise bir başka akşam bir başka yolcu bekleniyor.`,
      ],
    },
  },

  eviyesi: {
    aka: ['Öy iyäse', 'Ev sahibi'],
    region: 'Türk dünyasının hemen her yerinde; Tatarlarda Öy iyäse',
    epithet: 'Evin görünmeyen asıl sahibi',
    lore: `Derler ki her evin bir iyesi vardır. Ufacık, sakallı bir ihtiyar ya da kedi kadar bir şey olarak görünür; kimi zaman evin büyüğünün kılığına girer, ama boyu bir karıştır. Ocağın arkasında, döşemenin altında, kapısı kapalı tutulan odalarda oturur. Temiz tutulan, ocağı akşamları süpürülen evi korur, malını bereketlendirir. Ev kirli kalır, bulaşık sabaha bırakılırsa küser: her gece aynı saatte kapları, sandıkları karıştırır, yüksüğü, anahtarı saklar, ambarın bereketini çeker. Gönlü, ocak başına bırakılan bir tas süt ya da bir dilim ekmekle alınır; payını alan iye evi yeniden toplar. Ama iyesi iyice hırçınlaşmış bir evde eskiler kapının arkasına ters bir süpürge diker, huysuzluğu evden uğurlardı.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde bir aydır bereket kalmadı. Hamur mayalanmıyor, yağ küpü dibini gösterdi, ev halkı birbirine tahammül edemiyor.` },
        { trait: 'hane', t: `{K} ve ev halkı kaybolan şeyleri aramaktan yoruldu. Anahtar, yüksük, para kesesi kayboluyor; üç gün sonra en olmadık yerde çıkıyor.` },
        { trait: 'hane', t: `{K:gen} hanesi köyün en bolluklu evlerindendi. Bu kış ambar yarıya indi, inekler kısırlaştı, ev halkı birbirine düştü.` },
      ],
      iz: [
        { trait: 'dagin', t: `Sabah kilerdeki kavanozların hepsi yer değiştirmiş, kapakları açılmış. Hiçbiri kırılmamış; biri tek tek indirip yeniden dizmiş gibi.` },
        { trait: 'dagin', t: `Sandığın içi karıştırılmış, yün çileleri çözülmüş, çorap tekleri odanın dört bir yanına dağılmış. Kapı içeriden kilitliydi.` },
        { trait: 'dagin', t: `Ocak başındaki kap kacak her sabah başka bir düzende: kaşıklar kepçenin içinde, tencere ters, sahanlar kat kat yere dizilmiş.` },
      ],
      tanik: [
        { trait: 'ufak', t: `{T}: “Ocağın dibinde ufacık bir ihtiyar oturuyordu, sakalı dizine kadar. Bana baktı, başını salladı, küllerin arkasında kayboldu.”` },
        { trait: 'ufak', t: `{T}: “Kapalı odadan tıpırtı geldi. Kapıyı araladım; ufacık bir şey sandığın arkasına kaçtı. Kediden küçüktü, iki ayağı üstünde koşuyordu.”` },
        { trait: 'ufak', t: `{T}: “Gece su içmeye kalktım. Sedirde dedemin kılığında biri oturuyordu, aynı takke, aynı hırka. Ama boyu bir karıştı.”` },
      ],
      zaman: [
        { trait: 'ayni_saat', t: `Her gece aynı saatte: duvar saati üçü vurunca kilerden ilk ses geliyor.` },
        { trait: 'ayni_saat', t: `Bir haftadır, saat şaşmadan. Yatsıdan iki saat sonra tıkırtı başlıyor, bir saat sürüp kesiliyor.` },
        { trait: 'ayni_saat', t: `Hep aynı saatte. Ev halkı artık o saati biliyor; saat gelince kimse yerinden kıpırdamıyor, hepsi tavana bakıp bekliyor.` },
      ],
      yer: [
        { trait: 'ocak', t: `Ocak başı. Küllerin üstünde ufacık bir oturma izi, sanki biri gece orada ısınmış.` },
        { trait: 'ocak', t: `Ocağın arkasındaki duvar dibi. Sıvası dökülmüş, arkasında bir oyuk var; oyuktan ılık bir hava geliyor.` },
        { trait: 'ocak', t: `Ocaklık; sacayağının altı süpürülmemiş, kül günlerdir yığılmış. Gürültü hep oradan başlıyor.` },
        { trait: 'oda', t: `Evin arka odası; yıllardır kapısı kapalı tutulan, yalnız misafir gelince açılan oda.` },
        { trait: 'oda', t: `Kilerle yan yana, penceresiz küçük oda. Kapısı sürgülü olduğu hâlde içerideki her şey yer değiştiriyor.` },
        { trait: 'oda', t: `Yukarı kattaki kapalı oda. Kapıyı açınca içerisi evin geri kalanından daha sıcak, sanki biri az önce kalkmış.` },
      ],
      sebep: [
        { trait: 'kirlilik', t: `{Y}: “Ocağınız ne zamandır süpürülmüyor? Kirli bulaşığı sabaha kalan evde iye durmaz, dursa da küser.”` },
        { trait: 'kirlilik', t: `{Y}: “Evinize girdim, kokusunu kapıdan aldım. Kırıntı yerde, kül ocakta, yataklar toplanmamış. Evin sahibi bundan hoşlanmaz.”` },
        { trait: 'kirlilik', t: `{Y}: “Eski evlerde akşam olunca ocak süpürülür, kap kacak yıkanıp kaldırılırdı. Siz unuttunuz; evin iyesi unutmadı.”` },
      ],
    },
    hunt: {
      intro: [
        `Ev baştan sona temizlendi; gece, kapalı odanın karşısında, saatin tıkırtısını sayarak beklediniz.`,
        `Saat vurunca odanın içinden ufacık adımlar geldi, ardından bir sandık kapağı gıcırdadı.`,
      ],
      success: [
        `Ocak başına bırakılan süt ile ekmek sabaha kadar eksildi; kapının arkasında ters dikili süpürgeyi gören huysuzluk evden çıkıp gitti.`,
        `Sabah anahtar, yüksük, kese hepsi sandığın üstünde dizili duruyordu. Ev o günden sonra sustu.`,
      ],
      partial: [
        `Gönlü yarı alındı, yarı alınmadı; adımlar bir süre durdu, sonra yeniden başladı.`,
        `Ev şimdilik sakin. Ama ocak bir akşam süpürülmeden kalırsa saat yine aynı yerde vuracak.`,
      ],
    },
  },

  ahiriyesi: {
    aka: ['Abzar iyäse', 'Ahır sahibi'],
    region: 'Kazan Tatarları ve Başkurtlar arasında',
    epithet: 'Sevdiği atın yelesini ören',
    lore: `Derler ki her ahırın bir iyesi vardır. Ufacık, sakallı bir ihtiyara benzer, ama çoğu zaman hiç görünmez; yalnızca işi görünür. Sevdiği hayvanın yelesini gece yarısı tel tel örer, tımar eder, yemini önüne çeker; o hayvan semirir, parlar. Sevmediğini sabaha kadar koşturur, yemliğinden uzak tutar; hayvan terler, zayıflar, sonunda ölür. En çok, ahıra ona sorulmadan getirilen yabancı hayvana kızar; renginden, kokusundan hoşlanmazsa yaşatmaz. Bu yüzden eskiler yeni hayvanı ahıra sokmadan önce iyeye bir dilim ekmek, bir kaşık yağ bırakır, adak eder, hayvanı ona emanet ederdi. Kızgın iye için ahır kapısına bir kalbur asılır; iye deliklerini saymaya dalar, sayarken gece biter, hayvana dokunamaz.`,
    clues: {
      kurban: [
        { trait: 'hayvan', t: `{K:gen} yeni aldığı doru kısrak bir haftada iskelete döndü. Her sabah ter içinde, sanki bütün gece koşmuş; yemine dokunmuyor.` },
        { trait: 'hayvan', t: `{K:gen} ahırında üç ineğin ikisi gürbüz, biri eriyor. Eriyen, geçen ay pazardan alınan alaca inek.` },
        { trait: 'hayvan', t: `{K:gen} atları sabahları birbirine düşman bulunuyor. Eski atın yelesi örülmüş, parlıyor; yeni gelen köşeye sinmiş, titriyor.` },
      ],
      iz: [
        { trait: 'yele', t: `Kır atın yelesi sabah ince ince örülmüş; örgüler öyle sıkı ki parmakla çözülmüyor. Yanındaki yeni atın yelesi ise yolunmuş.` },
        { trait: 'yele', t: `Ahırdaki yaşlı atın yelesi her sabah tımarlı, örgülü, parlak. Bir haftadır ona kimse el sürmedi.` },
        { trait: 'yele', t: `Yemliğin kenarına at kılından örülmüş ince bir örgü bırakılmış. İnsan parmağı bu kadar ince öremez.` },
      ],
      tanik: [
        { trait: 'ufak', t: `{T}: “Gece yarısı ahıra baktım. Kır atın sırtında ufacık biri oturmuş, yelesini örüyordu. Lambayı kaldırınca saman gibi dağıldı.”` },
        { trait: 'ufak', t: `{T}: “Yemliğin üstünde ufacık bir ihtiyar vardı, sakalı samana karışmıştı. Yeni ineğe doğru eğilmiş, bir şey fısıldıyordu.”` },
        { trait: 'ufak', t: `{T}: “Sıçan sandım, değildi. Bir karış boyunda bir şey iki ayağı üstünde ahırın kirişinde yürüyordu.”` },
        { trait: 'gorunmez', t: `{T}: “Ahırda kimse yoktu, emin olun. Ama atın yelesi gözümün önünde, kendi kendine örülüyordu.”` },
        { trait: 'gorunmez', t: `{T}: “Kapıyı açtım, içerisi bomboş. Yine de alaca inek ahırın bir ucundan öbür ucuna itildi; biri sağrısından iteliyor gibi.”` },
        { trait: 'gorunmez', t: `{T}: “Hiçbir şey görmedim. Yalnız hayvanların hepsi aynı köşeye bakıyordu, kulakları dikilmiş, gözlerini kırpmadan.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı. Köpekler havlamadan önce ahırdaki hayvanlar birden huysuzlanmaya başlıyor.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında; ahırdan gelen kişneme bütün ev halkını yataktan kaldırdı.` },
        { trait: 'gece_yarisi', t: `Gece yarısını biraz geçe, ilk horozdan çok önce. O saatte ahıra kimse girmez.` },
      ],
      yer: [
        { trait: 'ahir', t: `Evin altındaki eski ahır; tavanı alçak, kirişleri eğri, samanlık köşesi karanlık.` },
        { trait: 'ahir', t: `Ahırın en dipteki bölmesi; yeni hayvanın bağlandığı yer. Zincir sabah çözülmüş bulunuyor, bölmenin tahtaları içeri eğilmiş.` },
        { trait: 'ahir', t: `Ahır kapısının hemen içi, yemliklerin dizildiği sıra. Yemliklerden biri ağzına kadar dolu, öbürü silinip süpürülmüş.` },
      ],
      sebep: [
        { trait: 'yabanci', t: `{Y}: “Pazardan aldığınız hayvanı ahıra soktunuz, sahibine göstermediniz. Ahırın da sahibi vardır; sormadan gelen yabancıyı kabul etmez.”` },
        { trait: 'yabanci', t: `{Y}: “Yeni hayvanı eşikte bekletmediniz mi? Biz yularını tutup ahırın dört köşesinde gezdirir, ‘bu da senin’ derdik.”` },
        { trait: 'yabanci', t: `{Y}: “O inek uzak bir köyden geldi; rengini, kokusunu ahırdaki bilmiyor. Bilmediğini sevmez, sevmediğini yaşatmaz.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısına doğru, ahırın samanlığında, yeni hayvanın bölmesine bakarak beklediniz.`,
        `Hayvanlar birden huysuzlandı; yeni hayvanın yelesi kimse dokunmadan dalgalanmaya başladı.`,
      ],
      success: [
        `Yemliğin başına bırakılan ekmek ile yağ sessizce eksildi; kapıdaki kalburun deliklerini sayan bir fısıltı sabaha kadar sürdü.`,
        `Sabah yeni hayvanın yelesi de ötekiler gibi örülmüştü. Ahır onu kabul etmişti.`,
      ],
      partial: [
        `Bir eliniz doluydu, bir eliniz boş; fısıltı bir süre durdu, sonra yeniden yeni hayvanın bölmesine döndü.`,
        `Hayvan kurtuldu ama ahıra yerleşemedi. {K} onu bir başka köye satmayı düşünüyor.`,
      ],
    },
  },

  hamamiyesi: {
    aka: ['Munça iyäse', 'Hamam cini'],
    region: 'Kazan Tatarlarında; Anadolu’da hamam cinleri inancıyla karışır',
    epithet: 'Gece yarısından sonra hamamın sahibi',
    lore: `Derler ki her hamamın bir iyesi vardır; ıslak taşların, kazanın, buharın sahibi odur. Gündüz hamam insanındır, gece yarısından sonra iyenindir. O saatte hamama yalnız giren kadına, tek başına yıkanan delikanlıya buharın içinde kara bir gölge olarak görünür. Kimse girmediği hâlde kurnadan su dökülür, kuru taşın üstünde ıslak ayak izleri belirir. İyenin vaktinde yıkanan çarpılır: ağzı yana kayar, dili tutulur, eli kolu kalkmaz, kimi zaman aklı gider. Hamama girerken selam verilir, izin istenir, çıkarken hamamın sahibine teşekkür edilir; iyeyle söz konuşan rahat yıkanır. Çarpılanın başında ardıç yakılır, hamam ardıç dumanıyla tütsülenir; iye o kokudan çekinir, buharın içinden çekilir.`,
    clues: {
      kurban: [
        { trait: 'kadin', t: `{K} gece yarısı, ev halkı uyurken çamaşırını hamamda yıkamaya gitmiş. Sabah kurnanın başında bulundu; ağzı yana kaymış, sağ eli tutmuyor.` },
        { trait: 'kadin', t: `{K} çeyiz yünlerini yetiştirmek için geceleri hamamda yıkıyordu, yanında kimse yoktu. Şimdi dili dolanıyor; ne gördüğünü anlatamıyor.` },
        { trait: 'kadin', t: `Gelin hamamından sonra temizliği {K} üstlenmiş, herkes gidince tek başına kalmış. Gece yarısı bir çığlık duyuldu; {K} o günden beri yüzünün bir yanını kıpırdatamıyor.` },
        { trait: 'delikanli', t: `Delikanlı {K} tarladan geç döndü, gece yarısı hamama tek başına girdi. Sabah soyunmalıkta bulundu; gözleri açık, kimseyi tanımıyor.` },
        { trait: 'delikanli', t: `{K} arkadaşlarıyla iddiaya girip gece yarısı boş hamamda yıkanmış. Çıktığında bir kolu kalkmıyordu, ağzı yana kaymıştı.` },
        { trait: 'delikanli', t: `Düğününe bir hafta kalan {K} gece yarısı hamama gitti, yanına kimseyi almadı. Şimdi konuşurken kelimeleri yutuyor, sağ eli titriyor.` },
      ],
      iz: [
        { trait: 'islak', t: `Hamamın kapısı sabah kilitli bulundu. İçeride, kupkuru taşların üstünde ıslak, çıplak ayak izleri; kurnanın başında başlayıp duvarın dibinde bitiyor.` },
        { trait: 'islak', t: `Soyunmalıktaki tahta sedirde ıslak ayak izleri. Hamam soğumuş, kazan boş; izler ise hâlâ yeni, hâlâ ılık.` },
        { trait: 'islak', t: `Çarpılanın yanından ıslak ayak izleri uzaklaşıyor. Birkaç adım sonra, duvarın önünde, birden kesiliyor.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Buharın içinde kara bir gölge vardı, kurnanın başına eğilmişti. Buhar dağıldıkça o kaldı; kimin gölgesi olduğunu göremedim.”` },
        { trait: 'golge', t: `{T}: “Kubbenin camlarından ay giriyordu. Duvarda iki gölge gördüm. İçeride bir kişi vardı.”` },
        { trait: 'golge', t: `{T}: “Göbek taşının üstünde biri oturuyordu, kapkara, yüzü yok. Lambayı uzatınca buhara karıştı.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısını geçe. Hamamın külhanı çoktan soğumuştu ama kubbe hâlâ buğuluydu.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında. Hamamcı akşam kapıyı kilitleyip gitmiş, anahtar cebindeymiş.` },
        { trait: 'gece_yarisi', t: `Yatsıdan çok sonra, gece yarısına doğru. Köyde ışık kalmamıştı; yalnız hamamın penceresinde buğu vardı.` },
      ],
      yer: [
        { trait: 'hamam', t: `Köyün eski, tek kubbeli hamamı. Soyunmalık soğuk, sıcaklık kısmı karanlık; kurnalardan biri çatlak.` },
        { trait: 'hamam', t: `Hamamın en dipteki halvet bölmesi. Kapısı ağır, içerisi taş kokuyor; oraya yalnız girilmez denirdi.` },
        { trait: 'hamam', t: `Hamamın göbek taşı. Taşın ortasında hâlâ kurumayan bir ıslaklık var, biri az önce kalkmış gibi.` },
      ],
      sebep: [
        { trait: 'yalniz', t: `{Y}: “Hamama gece yalnız girilmez. Gündüz bizim, gece onundur; yalnız kalanın yanında başka biri belirir.”` },
        { trait: 'yalniz', t: `{Y}: “Yanına bir kişi alsaydı bu olmazdı. Yalnız yıkananı kimse duymaz, kimse kollamaz.”` },
        { trait: 'yalniz', t: `{Y}: “Bırakıp gittiniz, değil mi? Herkes çıktı, biri içeride yalnız kaldı. Hamamın sahibi yalnız kalanı sever.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısı, hamamın soyunmalığında, kapıyı aralık bırakıp beklediniz.`,
        `Soğumuş kurnalardan biri kendiliğinden akmaya başladı; buharın içinde kara bir gölge koyulaştı.`,
      ],
      success: [
        `İçeri adım atarken selam verip izin istediniz; ardıç dumanı kubbeye yükselince gölge taşların arasına çekildi.`,
        `Sabah hamamcı kapıyı açtığında içerisi ardıç kokuyordu. {K} o gün ilk kez adını düzgün söyledi.`,
      ],
      partial: [
        `Bir korumanız tamdı, öbürü eksik; gölge dağıldı ama buharın içinde bir süre daha bekledi.`,
        `Hamam bu gece kurtuldu. Gece yarısından sonra kapısı artık kilitli tutulacak.`,
      ],
    },
  },

  degirmeniyesi: {
    aka: ['Tegirmen iyäse'],
    region: 'Kazan Tatarları arasında; su iyesi inancının bir kolu',
    epithet: 'Payı unutulan değirmenin ortağı',
    lore: `Derler ki her değirmenin görünmeyen bir ortağı vardır. Çarkın altında, bendin dibinde, yosunlu taşların arasında oturur. Suyu döndüren, taşı çeviren odur; karşılığında payını ister. Eski değirmenciler her harmandan sonra ilk unun bir avucunu suya serperdi. Payı unutulan iye bir kez öfkelendi mi artık payla yatışmaz. Gece yarısı değirmende kara bir gölge dolaşır, çarkın sesine ıslak bir kahkaha karışır; sonra un öğütmeye gelen çiftçilerden biri arkta boğulmuş bulunur, saçında yosun, ayağında saz. Değirmenciler çarkın mili altına demir çakar, kapının üstüne demir bir nal asar; iye demirin dokunduğu yere elini uzatamaz. Değirmen ardıç dumanıyla tütsülenirse sudan çıkıp çarka yaklaşamaz, derler.`,
    clues: {
      kurban: [
        { trait: 'ciftci', t: `{K} buğdayını öğütmek için akşam değirmene geldi, sıra sabaha kalınca orada yattı. Sabah arkın kapağında bulundu; saçlarına yosun dolanmış.` },
        { trait: 'ciftci', t: `Harmanı kaldıran {K} unu almak için gece değirmende bekliyordu. Değirmenci bir ara uyuyakalmış; uyandığında çark durmuştu, {K} yerinde yoktu.` },
        { trait: 'ciftci', t: `{K} değirmene un çuvalı yüklemeye gitmişti. Eşeği sabaha karşı tek başına köye döndü, semeri ıslak; {K} bendin dibinde bulundu.` },
      ],
      iz: [
        { trait: 'islak', t: `Değirmenin tahta zemininde ıslak ayak izleri; arktan çıkıp taşın başına kadar gelmiş, sonra yine suya dönmüş.` },
        { trait: 'islak', t: `Un çuvallarının üstünde ıslak, çıplak ayak izleri. Unu hamur gibi yapıştırmışlar.` },
        { trait: 'islak', t: `Değirmenin eşiğinde gece bırakılmış ıslak izler. Sabahın soğuğunda bile kurumamışlar.` },
        { trait: 'yosun', t: `Ölünün avuçlarında bir tutam yeşil yosun; parmakları onu bırakmayacak kadar sıkı kapanmış.` },
        { trait: 'yosun', t: `Değirmen taşının üstüne ıslak bir yığın saz ve yosun bırakılmış. Taş sabah unla değil, çamurla kaplıydı.` },
        { trait: 'yosun', t: `Çarkın kanatlarına upuzun, kara bir saz dolanmış. Değirmenci kırk yıldır o dereden böyle saz çıktığını görmemiş.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Çarkın yanında kara bir gölge vardı, suyun üstüne eğilmişti. Orada kimse yoktu, yalnız gölge.”` },
        { trait: 'golge', t: `{T}: “Değirmenin penceresinden baktım. Taşın başında kapkara, şekilsiz biri duruyordu. Kapıyı açınca gölge arka tarafa, suya kaydı.”` },
        { trait: 'golge', t: `{T}: “Ay vurunca bendin üstünde bir gölge belirdi. Ne ağaçtı ne insan; su akıyordu, o kıpırdamıyordu.”` },
        { trait: 'kahkaha', t: `{T}: “Gece yarısı çarkın sesine bir kahkaha karıştı. Islak, gurultulu; sanki suyun içinden gülüyordu.”` },
        { trait: 'kahkaha', t: `{T}: “Köprüden geçerken değirmenden biri güldü. Değirmen boştu, değirmenci evindeydi.”` },
        { trait: 'kahkaha', t: `{T}: “Önce çark durdu. Sessizlikte biri güldü, uzun uzun. Sonra çark yeniden döndü, kahkaha suyun sesine karıştı.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı; köyde bütün ışıklar sönmüş, değirmen taşının yalnızca kendi sesini duyduğu saatte.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında. Çarkın sesi bir an kesildi; o sessizlik köyden bile duyuldu.` },
        { trait: 'gece_yarisi', t: `Gece yarısına doğru, değirmenci çuvalların arasında uyuklarken. Kandil titredi, çarkın sesi bir anlığına ağırlaştı.` },
      ],
      yer: [
        { trait: 'degirmen', t: `Köyün aşağısındaki su değirmeni. Çarkı yosun tutmuş, arkı derin ve hızlı.` },
        { trait: 'degirmen', t: `Değirmenin bendi; suyun çarka döküldüğü yer. Gürültüsünden insan kendi sesini duymuyor.` },
        { trait: 'degirmen', t: `Değirmenin taş odası; tavanı unlu, zemini nemli, köşesinde yıllardır kimsenin dokunmadığı kırık bir taş.` },
      ],
      sebep: [
        { trait: 'adak_unutmak', t: `{Y}: “Bu harman değirmenin payını verdiniz mi? Rahmetli değirmenci ilk unun bir avucunu suya serperdi; yenisi serpmiyor.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Değirmen kendi kendine dönmez. Dönen taşın, akan suyun bir sahibi var; onun hakkı yenmez.”` },
        { trait: 'adak_unutmak', t: `{Y}: “Eskiden yeni değirmen taşı konunca suya ekmek, bal bırakılırdı. Bu taşı koyarken kimse bir şey bırakmadı.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısına doğru, değirmenin un kokan karanlığında, çarkın sesini dinleyerek beklediniz.`,
        `Çark birden ağırlaştı; arktan çıkan ıslak adımlar taş odaya yürüdü, ardından ıslak bir kahkaha geldi.`,
      ],
      success: [
        `Kapının üstündeki demir nalın altından geçemedi; ardıç dumanı taş odayı doldurunca gölge geri geri suya kaydı.`,
        `Sabah çark tıkırında dönüyordu. Değirmenci o gün ilk unun bir avucunu, kimse söylemeden, suya serpti.`,
      ],
      partial: [
        `Gölge bir yolu kapalı buldu ama öbür yol açıktı; suyun altına çekildi, gitmedi.`,
        `Değirmen bu gece kimseyi almadı. Ama un öğütmeye gelenler artık gün batmadan dönüyor.`,
      ],
    },
  },

  almasti: {
    aka: ['Almas', 'Almasty'],
    region: 'Kazak ve Kırgız bozkırlarında; Kafkasya’da Almasty',
    epithet: 'Gece at süren kıllı yaban kadın',
    lore: `Derler ki Almastı ormanın ve dağ eteğinin yaban kadınıdır. İnsana benzer ama her yeri sık, kızıl kahverengi kıllarla örtülüdür; saçı topuklarına iner, uzun göğüslerini omuzlarının üstünden arkaya atar. Akşam karanlığı çökünce ormandan çıkar, ahırlara girer, atları eyersiz sürer; sabah hayvanlar köpük içinde, yeleleri sıkı sıkı örülmüş bulunur. Sürdüğü at gün gün zayıflar, ahırın bereketi kaçar. Kendi toprağına, oturduğu koruya izinsiz giren köyün ahırına dadanır. Yakasına ya da eteğine bir çuvaldız, bir iğne batıran olursa yerinden kıpırdayamaz; iğne çekilene dek o evin hizmetçisi olur. Ahır kapısına asılan kalburun deliklerini saymaya dalar, sayarken gün doğar, atlara dokunamaz.`,
    clues: {
      kurban: [
        { trait: 'hayvan', t: `{K:gen} kır atı üç gecedir sabahları köpük içinde bulunuyor. Ahırdan çıkmadığı hâlde dizleri çamurlu, karnı dikenle çizilmiş.` },
        { trait: 'hayvan', t: `{K:gen} ahırındaki atlar bir ayda zayıfladı, kaburgaları sayılıyor. Yemlik dolu, suluk dolu; hayvanlar geceleri dinlenmiyor.` },
        { trait: 'hayvan', t: `{K:gen} en iyi kısrağı sabah yere yığılmış bulundu, nefes nefese. Kapı gece sürgülüydü; kısrağın sırtında ter, ayaklarında orman çamuru.` },
      ],
      iz: [
        { trait: 'yele', t: `Atların yeleleri sabah ince ince, sımsıkı örülmüş. Örgülerin arasına kuru yaprak, ot çöpü karışmış.` },
        { trait: 'yele', t: `Kısrağın yelesi örgü örgü, uçları düğümlü. Düğümler öyle sıkı ki kesip atmaktan başka çare yok.` },
        { trait: 'yele', t: `Ahırdaki üç atın yelesi de aynı elden çıkmış gibi örülmüş; örgülerin ucuna kızıl, kaba bir kıl dolanmış.` },
        { trait: 'kil', t: `Ahır kapısının çivisine kızıl kahverengi, uzun, keçeleşmiş bir kıl tutamı takılmış.` },
        { trait: 'kil', t: `Atın sırtında, eyer yerinde, insan saçına benzemeyen kaba kıllar. Kokusu ıslak toprak ve ter.` },
        { trait: 'kil', t: `Orman yolundaki çalılara keçe gibi kıl yumakları takılmış; atın sırtı yüksekliğinde, kızıla çalan.` },
      ],
      tanik: [
        { trait: 'killi', t: `{T}: “Ahırdan çıkarken gördüm: kıllı bir şey, insan gibi iki ayağı üstünde. Saçı topuğuna kadardı, sırtı baştan aşağı kıldı.”` },
        { trait: 'killi', t: `{T}: “Akşam orman kıyısında bir kadın sandım. Yaklaşınca kıl içinde olduğunu gördüm; göğüslerini omzunun üstünden geri atmıştı.”` },
        { trait: 'killi', t: `{T}: “Atın üstünde biri vardı, iri, kıllı. Eyersiz sürüyordu; atın yelesini dizgin gibi avucuna dolamıştı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığı çökerken; hayvanlar ahıra yeni bağlanmış, kapılar daha sürgülenmemişken başlıyor.` },
        { trait: 'aksam', t: `Gün batar batmaz. Akşam yemeği daha yenmeden ahırdan kişneme yükseliyor.` },
        { trait: 'aksam', t: `Alaca karanlıkta, ormanın gölgesi köyün üstüne uzandığında. Atlar o saatte yemlerini bırakıp kapıya bakıyor.` },
      ],
      yer: [
        { trait: 'ahir', t: `Köyün orman tarafındaki son ahır; kapısı doğrudan ağaçlara bakıyor, eşiğinde kuru yapraklar birikmiş.` },
        { trait: 'ahir', t: `Ahırın at bölmesi. Parmaklık kırılmamış, kapı sürgülü; yine de hayvanlar sabah dışarıda gezmiş gibi.` },
        { trait: 'ahir', t: `Eski ahır. Samanlığın dibindeki köşede kuru yapraklardan yapılmış bir yatak; içi hâlâ ılık.` },
        { trait: 'orman', t: `Köyün üstündeki karaçam ormanı. Atların izleri ağaçların arasına girip çıkıyor, sanki bütün gece orada dolaşmışlar.` },
        { trait: 'orman', t: `Ormanın içindeki açıklık; yerde ezilmiş otlar, kırık dallar, at tersi.` },
        { trait: 'orman', t: `Ormanın derinindeki kayalık; köylülerin bu yaz ilk kez hayvan otlattığı yer.` },
      ],
      sebep: [
        { trait: 'izinsiz', t: `{Y}: “Ormanın o yakası onundur. Siz oraya at otlattınız, çadır kurdunuz, kimseye sormadınız.”` },
        { trait: 'izinsiz', t: `{Y}: “Geçen ay ormanın derinindeki çayıra izinsiz girdiniz, ot biçtiniz. Orası kimsesiz değildir.”` },
        { trait: 'izinsiz', t: `{Y}: “Babam o koruya girmezdi, dedem girmezdi. Siz girdiniz; o da şimdi sizin ahırınıza giriyor.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında, ahırın samanlığına gömülüp at bölmesini gözlediniz.`,
        `Orman tarafından çıplak ayak sesleri geldi; kıllı bir karaltı kapıdan süzülüp kır atın sırtına sıçradı.`,
      ],
      success: [
        `Kapıdaki kalburun önünde durup deliklerini saymaya daldı; o sayarken çuvaldız eteğine saplandı, olduğu yerde kaldı.`,
        `Sabah atlar sakindi. İğne çekilince Almastı ormana döndü ve bir daha köyün ahırlarına inmedi.`,
      ],
      partial: [
        `Bir tuzağınız tuttu, öbürü tutmadı; kıllı karaltı attan atlayıp ormana kaçtı.`,
        `Atlar bu gece dinlendi. Ama orman kıyısında, akşam olunca, biri hâlâ ahırları kolluyor.`,
      ],
    },
  },

  kayberen: {
    aka: ['Kaıberen', 'Sur Eçki'],
    region: 'Kırgız ve Kazak dağlarında',
    epithet: 'Dağ keçilerinin ve geyiklerin sahibi',
    lore: `Derler ki dağdaki yaban keçisinin, geyiğin, arkarın bir sahibi vardır; adı Kayberen’dir. Avcı hakkı kadar avlarsa ses çıkarmaz. Ama sürüyü kırıp geçiren, yavrulu dişiyi vuran, taşıyamadığı eti kurtlara bırakan avcıyı cezalandırır. Bembeyaz bir dağ keçisi ya da ak bir geyik olarak görünür; avcı onu vurmak ister, peşine düşer. Ak keçi onu şafaktan önce en sarp kayalığa çeker; avcı inemeyeceği bir yerde kalır, ya da hiç dönmez. Kırgızların Kocacaş destanında avcı böyle bir kayalıkta kalır. Kayberen’in gönlünü almak isteyen avının ilk payını, yağını dağa adak olarak bırakır; adağını alan sahip öfkesini yatıştırır. Kayalıkta kalan kıpırdamadan şafağı beklerse kurtulabilir; gün ışıyınca ak keçinin büyüsü dağılır, yol görünür.`,
    clues: {
      kurban: [
        { trait: 'avci', t: `Avcı {K} üç gün önce dağa çıktı. İkinci gün sırtında iki keçiyle indi, üçüncü gün yine çıktı. Ondan sonra dönmedi.` },
        { trait: 'avci', t: `{K} köyün en iyi avcısıydı; bu kış tek başına on iki dağ keçisi vurdu. Dün sabah tüfeği bir kayanın dibinde bulundu, kendisi yok.` },
        { trait: 'avci', t: `{K} bembeyaz bir keçinin peşine düşüp sarp kayalıklara tırmanmış. Arkadaşları aşağıdan seslenmiş, cevap gelmiş; sonra o ses de kesilmiş.` },
      ],
      iz: [
        { trait: 'kan', t: `Kayalığa çıkan patikada kan damlaları. Ama kanayan hayvan değil: keçi izleri temiz, kanlı olan çarık izi.` },
        { trait: 'kan', t: `Avcının köyde bıraktığı heybenin dibi kanla katılaşmış; içinde yavrulu bir dişi keçinin derisi.` },
        { trait: 'kan', t: `Sarp kayanın yüzünde, insan elinin tutunduğu yerlerde kan izleri. Hepsi yukarı doğru çıkıyor; aşağı inen yok.` },
      ],
      tanik: [
        { trait: 'hayvan', t: `{T}: “Kayalıkta bembeyaz bir keçi duruyordu, tek başına. Sürüsü yoktu. Bana döndü, bir insan gibi uzun uzun baktı.”` },
        { trait: 'hayvan', t: `{T}: “Ak bir geyik gördüm, boynuzları dal dal. Avcının önünde hep bir taş atımı uzakta yürüyordu; ne yaklaşıyordu ne kaçıyordu.”` },
        { trait: 'hayvan', t: `{T}: “Vurdum, eminim vurdum. Ak keçi kayadan kayaya atladı; bembeyaz tüyüne bir leke bile değmedi.”` },
      ],
      zaman: [
        { trait: 'safak', t: `Şafaktan hemen önce; gök kararmıyor ama aydınlanmıyor da, dağların sırtı yeni seçiliyor.` },
        { trait: 'safak', t: `Gün ağarmadan, karanlığın en koyu olduğu son saatte. Kayalıklardan bir taş yuvarlandı, sonra bir tane daha.` },
        { trait: 'safak', t: `Sabaha karşı, ilk horozdan bile önce. Avcılar dağa hep o saatte çıkar; o da o saatte görünür.` },
      ],
      yer: [
        { trait: 'dag', t: `Köyün üstündeki sarp dağ; yaban keçilerinin kayadan kayaya geçtiği, insanın tutunacak yer bulamadığı yamaç.` },
        { trait: 'dag', t: `Yaylanın üstündeki kayalık. Aşağısı uçurum, yukarısı çıplak taş; rüzgâr orada insanın sesini alıp götürüyor.` },
        { trait: 'dag', t: `Dağın kuzey yüzü; karı yazın da erimez, keçi yolundan başka yolu yoktur.` },
      ],
      sebep: [
        { trait: 'fazla_av', t: `{Y}: “Dağ ne kadar verirse o kadar alınır. Bu kış vurulanların hesabını tuttunuz mu? Ben tuttum: yirmi iki.”` },
        { trait: 'fazla_av', t: `{Y}: “Yavrulu dişiyi vurdunuz. Eti taşıyamadığınız için yarısını dağda kurtlara bıraktınız. Dağın sahibi saydı.”` },
        { trait: 'fazla_av', t: `{Y}: “Bir avcı bir sürüyü bitirmez. Siz bitirdiniz. Keçilerin çobanı yok mu sandınız?”` },
      ],
    },
    hunt: {
      intro: [
        `Şafaktan önce, kayalığın dibinde, avcının son görüldüğü taşın yanında beklediniz.`,
        `Yukarıda, karanlığın içinde ak bir keçi belirdi; size bakıp sarp yamaca doğru bir adım attı.`,
      ],
      success: [
        `Peşine düşmediniz; taşın üstüne bıraktığınız adağı kokladı, başını eğdi. Şafak söküp ilk ışık kayaya vurunca ak keçi dağılıp gitti.`,
        `Işıkla birlikte kayalıkta bir yol göründü; {K} bitkin ama sağ, o yoldan aşağı indi.`,
      ],
      partial: [
        `Bir eliniz uzandı, bir eliniz boş kaldı; ak keçi geri çekildi ama dağı bırakmadı.`,
        `{K} kurtarıldı. Köyün avcıları bu kış dağa çıkmayacak.`,
      ],
    },
  },

  uor: {
    aka: ['Uor'],
    region: 'Yakutlar (Sahalar) arasında',
    epithet: 'Haksız ölenin yola düşen ruhu',
    lore: `Derler ki haksız yere öldürülen, vakitsiz ve kötü bir ölümle giden kişinin ruhu yerine varamaz; Üör olur. Öldüğü yolda dolaşır, her gece aynı saatte, ölümünün saatinde, eski evinin kapısına gelir. Eşikte durur; ev halkını, en çok da yasını tutanları adlarıyla çağırır. Sesi tanıdıktır; bakan onu son görüldüğü gibi, sağ hâliyle görür. İçeri giremediği gecelerde evin eşyasını yerinden oynatır, sandıkları açar, kapları devirir. Ev halkı ne hasta olur ne ölür, ama bir daha rahat uyuyamaz. Bunu bilenler evi ve yolu ardıç dumanıyla tütsüler; eşiğe ve öldüğü yere tuz serperler ki tuzun ötesine geçemesin. Ruhun öfkesi, ölümünün hakkı aranana dek tam dinmez, derler.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde kimse uyuyamıyor. Bir aydır geceleri kapı vuruluyor, sandıklar açılıyor; ev halkı sabahları birbirinin yüzüne bakamıyor.` },
        { trait: 'hane', t: `{K} ve ev halkı gece lambayı söndüremez oldu. Çocuklar bir sesin onları çağırdığını söylüyor; büyükler duymazdan geliyor.` },
        { trait: 'hane', t: `{K:gen} hanesi {D:gen} ölümünden beri rahat yüzü görmedi. Kimse hasta değil; ama herkes her gece aynı saatte yatağında doğrulup bekliyor.` },
        { trait: 'yas_evi', t: `{D:gen} anası {K}, oğlunun cenazesinden beri sedirden kalkmıyor. Her gece kapıda oğlunun sesini duyuyor: “Ana, kapıyı aç.”` },
        { trait: 'yas_evi', t: `{K}, {D:gen} kız kardeşi. Ağabeyi pazar dönüşü yolda öldürüldü, katili bulunamadı. O günden beri {K} geceleri gözünü kapıdan ayıramıyor.` },
        { trait: 'yas_evi', t: `{D:gen} dul karısı {K} yas evinde yalnız kalamaz oldu. Bir gece kocası eşikte durmuş, onu adıyla çağırmış; öldüğü günkü gömleği üstündeymiş.` },
      ],
      iz: [
        { trait: 'dagin', t: `Sabah evde sandıklar açık; {D:gen} giysileri yere serilmiş, ayakkabıları kapıya dönük duruyor.` },
        { trait: 'dagin', t: `Raflardaki kaplar indirilmiş, yer sofrası serilmiş, tek kişilik. Ev halkı gece kimsenin kalkmadığına yemin ediyor.` },
        { trait: 'dagin', t: `Kapı önündeki eşyalar dağılmış: çarıklar karışmış, kazma kürek devrilmiş, yük yere yıkılmış. Sanki biri içeri girmek için yol açmaya çalışmış.` },
      ],
      tanik: [
        { trait: 'olu', t: `{T}: “Kapının önünde {D} duruyordu. Yolda bulunduğu gün giydiği ceket üstündeydi. Yüzü solgun değildi, sağ gibiydi; o daha kötüydü.”` },
        { trait: 'olu', t: `{T}: “Yolun dönemecinde rahmetli {D} yürüyordu. Beni görünce durdu, bir şey söyleyecek gibi oldu; sonra evine doğru baktı.”` },
        { trait: 'olu', t: `{T}: “Eşikte {D} oturuyordu, başı önünde. Ağlamıyordu, bekliyordu. Kimi beklediğini sormaya dilim varmadı.”` },
        { trait: 'cagiran', t: `{T}: “Gece yolun tarafından adımı çağırdı, üç kez. {D:gen} sesiydi. Öldüğünü bile bile neredeyse kalkıyordum.”` },
        { trait: 'cagiran', t: `{T}: “Kapının dışından ev halkını tek tek, adlarıyla saydı. Bir ad eksikti: kendi adı.”` },
        { trait: 'cagiran', t: `{T}: “Sesi duyunca anam yerinden fırladı. Dışarıdan ‘ana’ diyordu, ‘aç’ diyordu. Babam anamı belinden tuttu, bırakmadı.”` },
      ],
      zaman: [
        { trait: 'ayni_saat', t: `Her gece aynı saatte. O saat, {D:gen} öldüğü saat; ev halkı bunu sonradan fark etti.` },
        { trait: 'ayni_saat', t: `Her gece, saat şaşmadan, yatsıdan tam iki saat sonra. Bir dakika erken ya da geç geldiği olmadı.` },
        { trait: 'ayni_saat', t: `Hep aynı saat. Duvar saatini durdurdular; ev halkı o saati yine yataklarında, uyanarak buluyor.` },
      ],
      yer: [
        { trait: 'yol', t: `Köyün kasabaya inen yolu; {D:gen} bulunduğu dönemeç. Orada bir taş yığını var, kimse önünden geçerken başını kaldırmıyor.` },
        { trait: 'yol', t: `Ev ile bağlar arasındaki ıssız patika. Gece o yoldan gelen ayak sesi hep eve kadar gelip kesiliyor.` },
        { trait: 'yol', t: `Yayla yolunun ağaçsız kısmı; {D:gen} son görüldüğü yer. Yolun toprağı orada hâlâ ezik.` },
        { trait: 'esik', t: `Evin kapısı. Her şey eşikte oluyor; ses kapının dışından geliyor, içeri girmiyor.` },
        { trait: 'esik', t: `Avlu kapısının eşiği. Sabah eşik taşı buz gibi; bütün evin en soğuk yeri orası.` },
        { trait: 'esik', t: `Cenazenin çıkarıldığı kapının eşiği. Ses hep orada duruyor, bir adım öteye geçmiyor.` },
      ],
      sebep: [
        { trait: 'haksiz_olum', t: `{Y}: “{D} yolda öldürüldü, katili hâlâ aramızda geziyor. Hakkı alınmayan ölü yerine varmaz.”` },
        { trait: 'haksiz_olum', t: `{Y}: “O ölüm eceliyle olmadı. Vakitsiz, haksız gideni toprak tutmaz; ruhu yolda kalır, eve döner.”` },
        { trait: 'haksiz_olum', t: `{Y}: “Ölümüne kaza dediniz, üstünü örttünüz. Siz örttünüz, ama o örtmedi.”` },
      ],
    },
    hunt: {
      intro: [
        `Her gece gelinen saatte, eşiğin içinde, kapıya dönük oturup beklediniz.`,
        `Yolun tarafından ayak sesleri geldi; kapının önünde durdu ve {D:gen} sesi ev halkını birer birer adlarıyla çağırdı.`,
      ],
      success: [
        `Eşiğe serilen tuzun ötesine geçemedi; ardıç dumanı kapı aralığından yola taştıkça ses uzaklaştı.`,
        `Sabah yol sessizdi. {D:gen} adı o günden sonra evde korkuyla değil, anılarak söylendi.`,
      ],
      partial: [
        `Bir tarafı kapalı buldu, bir tarafı açık; ses bir süre eşikte dolaşıp yola döndü.`,
        `Ev bu gece uyudu. Ama {D:gen} hakkı aranana dek, o saat gelince biri yolda yürümeye devam edecek.`,
      ],
    },
  },

  abasi: {
    aka: ['Abaası', 'Abaahı'],
    region: 'Yakutların (Sahaların) inançlarında ve olonho destanlarında',
    epithet: 'Alt dünyadan çıkan tek gözlü',
    lore: `Derler ki Abası alt dünyanın halkındandır. Tek gözü alnının ortasındadır; tek kolu, tek bacağı vardır, sekerek yürür. Zemheri gecelerinde, ayın hiç görünmediği karanlıkta yer üstüne çıkar; ormanın içinden yalnız geçen yolcunun ardına bir gölge gibi takılır, onunla eve kadar gelir. Dokunduğu kişinin canını yer: kurban gün gün erir, öksürdüğünde kan gelir, rengi balmumu gibi solar; sonra hastalık ev halkının öbürlerine geçer. Ateşin ışığına giremez; bu yüzden zemheride ocak gece boyu söndürülmez, yolcu yanında ateş taşır, ocağın iyesi evi korur. Hastanın başında ardıç yakılır, ev ardıç dumanıyla tütsülenir; Abası o kokudan kaçar, ormana, oradan da yerin altına döner.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde önce en küçük çocuk hastalandı, sonra büyükler, sonra {K}. Ateş yok, yara yok; hepsi gün gün eriyor.` },
        { trait: 'hane', t: `{K} ve ev halkı bu kış birer birer yatağa düştü. Yemek yiyorlar ama etleri eriyor, gözlerinin feri sönmüş.` },
        { trait: 'hane', t: `{K:gen} hanesinde bu kış üç kişi yatıyor. Hekim bir şey bulamadı; hastalar yalnızca soğuktan ve karanlıktan şikâyet ediyor.` },
        { trait: 'yolcu', t: `Yolcu {K} ormanın içinden tek başına geçip köye vardı. O gece bizde yattı; sabahtan beri sessiz, ateşsiz bir hastalıkla eriyor.` },
        { trait: 'yolcu', t: `{K} kasabadan karanlıkta, kestirmeden, ormanın içinden döndü. Bir haftadır yatakta; her öksürüğünde mendiline kan geliyor.` },
        { trait: 'yolcu', t: `{K} katırıyla yola çıkmış, ormanda geceye kalmış. Döndüğünden beri konuşmuyor, yemek yemiyor; yüzü her gün biraz daha çekiliyor.` },
      ],
      iz: [
        { trait: 'kan', t: `Hastanın yastığında sabah birkaç damla kan; uyurken ağzından, burnundan gelmiş.` },
        { trait: 'kan', t: `Karın üstünde damla damla kan; ormanın kıyısından eve kadar gelip kapının önünde bitiyor.` },
        { trait: 'kan', t: `Hastanın yüzünü sildikleri bez her sabah kan lekeli. Yara yok, bere yok; kan içeriden geliyor.` },
      ],
      tanik: [
        { trait: 'tek_goz', t: `{T}: “Ormanın kıyısında bir göz parladı, tek bir göz, alnın tam ortasında. Altında yüz yoktu sanki.”` },
        { trait: 'tek_goz', t: `{T}: “Pencereye eğildi: tek gözlü bir yüz, tek bir kol camı sıvazlıyordu. Giderken sekiyordu; ayağı bir taneydi.”` },
        { trait: 'tek_goz', t: `{T}: “Ocağın ışığına girmedi, karanlıkta durdu. Ama gözünü gördüm: bir tane, kocaman, hiç kırpmıyordu.”` },
        { trait: 'golge', t: `{T}: “Yolcunun arkasından bir gölge geliyordu; yolcu durdukça duruyordu. Ay yoktu; gölge düşmesi için hiçbir şey yoktu.”` },
        { trait: 'golge', t: `{T}: “Hastanın yatağının başında kara bir gölge çömelmişti, bir yanına yığılmış gibi. Lambayı yakınca duvara çekildi.”` },
        { trait: 'golge', t: `{T}: “Karın üstünde kara bir şey sekiyordu, gölge gibi yassı. Ormana girince ağaçların karanlığına karıştı.”` },
      ],
      zaman: [
        { trait: 'zemheri', t: `Zemheri; kışın en uzun, en soğuk geceleri. Ayazdan ağaçlar çatlıyor.` },
        { trait: 'zemheri', t: `Zemheri girdi gireli. Ayaz öyle ki gece ormandan ağaç gövdelerinin çatırtısı geliyor.` },
        { trait: 'zemheri', t: `Karakışın ortası, zemherinin en kara haftası. Köyde köpekler bile havlamaz oldu, kar her sesi yuttu.` },
        { trait: 'aysiz', t: `Ayın hiç doğmadığı bir gece; yıldızlar da bulutun arkasındaydı. İnsan elini gözünün önüne getirse göremezdi.` },
        { trait: 'aysiz', t: `Aysız, zifiri bir gece. Ormanın yolu ancak elle yoklanarak bulunuyordu.` },
        { trait: 'aysiz', t: `Ay karanlığı; eskisi batıp yenisinin daha doğmadığı gecelerde. Köyde o gecelerin adı bile anılmaz.` },
      ],
      yer: [
        { trait: 'orman', t: `Köyle kasaba arasındaki çam ormanı; yol ağaçların içinden geçiyor, kışın kimse oradan tek başına geçmek istemiyor.` },
        { trait: 'orman', t: `Ormanın derininde, devrilmiş ağaçların altındaki kovuk; çevresindeki kar hiç erimiyor.` },
        { trait: 'orman', t: `Orman kıyısındaki son ev; arka penceresi doğrudan ağaçlara açılıyor, camın buğusunda tek bir el izi.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Kış gecesi o ormandan yalnız geçilmez. Yanında yoldaşı olmayanın ardına başka bir yoldaş takılır.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Karanlıkta tek başına yola çıkılmış, kimseye haber verilmeden. Yalnız yolcu ormandakinin payıdır.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Bizim zamanımızda kışın kimse ormana yalnız girmezdi; ya iki kişi giderdik ya hiç gitmezdik.”` },
      ],
    },
    hunt: {
      intro: [
        `Aysız bir zemheri gecesi, hastanın odasında, kapıyı gözleyerek beklediniz.`,
        `Ormanın tarafından seken bir ses yaklaştı; pencerede tek, kırpmayan bir göz belirdi.`,
      ],
      success: [
        `Ocak harıl harıl yanıyordu; ışığın içine adım atamadı. Ardıç dumanı odayı doldurunca tek bacağı üstünde geri döndü, ormana sekti.`,
        `Sabah karın üstünde yalnızca giden izler vardı. {K} ilk kez bir tas çorbayı sonuna kadar içti.`,
      ],
      partial: [
        `Bir yanı kapalıydı, bir yanı açık; göz bir süre pencerede kaldı, sonra karanlığa çekildi.`,
        `Ev bu kış kurtuldu. Ama zemheri bitene dek orman yolu kimseye güvenli değil.`,
      ],
    },
  },

  sulmus: {
    aka: ['Şulbus'],
    region: 'Altay ve Tatar halk inançlarında',
    epithet: 'Yol ayrımında yolcuyu çarpan',
    lore: `Derler ki Şulmus yolların ve yıkıntıların kötü ruhudur. Akşam karanlığı çökerken yol ayrımlarında, yıkık hanların, terk edilmiş köy yerlerinin çevresinde dolaşır. Yalnız yola çıkan yolcunun önüne bir gölge gibi düşer, onu yolundan saptırır; yolcu bildiği yolu tanıyamaz olur, aynı kavşağa üç kez döner. Sonunda Şulmus onu çarpar: yolcu yüzü yana kaymış, dili tutulmuş, aklı karışmış bulunur. Geçtiği yerde avuç avuç kül, yanık ot kokusu kalır. Çarpılanın korkusu kurşunla dökülür: erimiş kurşun başının üstünde bir kap suya dökülür, kurşun cızırdayıp Şulmus’un biçimini alır, çarpıntı açılır. Hastanın çevresinde ve yol ayrımında ardıç yakılır; Şulmus dumanın girdiği yere bir daha uğramaz.`,
    clues: {
      kurban: [
        { trait: 'yolcu', t: `{K} akşamüstü komşu köyden dönerken yol ayrımında şaşırmış. Sabah yıkık hanın önünde bulundu; ağzı yana kaymış, kendi adını hatırlamıyor.` },
        { trait: 'yolcu', t: `Yolcu {K} köye karanlıkta vardı, ama yolunu yarım gece aradığını söylüyor. O günden beri bir yanı tutmuyor, gözleri bir noktaya takılı.` },
        { trait: 'yolcu', t: `{K} pazardan atıyla dönüyordu. At kendi başına geldi; {K} yol ayrımında, çalıların içinde bulundu, dili dolanmış, bir yanı kaskatı.` },
      ],
      iz: [
        { trait: 'kul', t: `Yol ayrımında, toprağın üstünde avuç avuç kül. Yakında ne ocak var ne ateş izi; kül sanki gökten serpilmiş.` },
        { trait: 'kul', t: `Çarpılanın elbisesi isli, saçında kül, ceplerinden bile kül dökülüyor. Bütün gün ateşe yaklaşmadığına yemin ediyor.` },
        { trait: 'kul', t: `Yıkık hanın kapısında kara bir is lekesi; içeride yanık ot kokusu. Hanın içinde yıllardır kimse ateş yakmadı.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Yol ayrımında kara bir gölge vardı; yolcunun önüne düşüyordu, hep bir adım önde. Yolcu da onun ardından gidiyordu.”` },
        { trait: 'golge', t: `{T}: “Güneş batmıştı, artık gölge düşmez. Ama yıkık hanın duvarında bir gölge yürüdü; kimsenin değildi.”` },
        { trait: 'golge', t: `{T}: “Arkamda kara bir şey vardı. Döndükçe döndü, durdukça durdu. Köyün ışıklarını görünce yere çöktü, toz gibi dağıldı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığı; güneşin battığı, yolların renk değiştirdiği saat. Kuşlar susmuş, yarasalar daha çıkmamıştı.` },
        { trait: 'aksam', t: `Akşam ezanından az sonra; yolcuların köye varmak için adımlarını sıklaştırdığı saat.` },
        { trait: 'aksam', t: `Gün kızıllığını yitirirken; yol ile tarla birbirinden ayırt edilemez olunca.` },
      ],
      yer: [
        { trait: 'yol', t: `Köyün dışındaki yol ayrımı. Üç yol birleşir; karanlıkta üçü de aynı tepeye çıkıyormuş gibi görünür.` },
        { trait: 'yol', t: `Eski kervan yolu; taş döşemesi yer yer sökülmüş, kenarında devrik bir yol taşı.` },
        { trait: 'yol', t: `İki köy arasındaki ıssız yol. Dönemeçleri birbirine öyle benziyor ki karanlıkta insan nerede olduğunu şaşırıyor.` },
        { trait: 'harabe', t: `Yol ayrımındaki yıkık han; damı çökmüş, duvarları kararmış. Kapısının önünde üç yol birden başlıyor.` },
        { trait: 'harabe', t: `Terk edilmiş eski köy yeri. Ev temelleri otların arasında; duvarların yalnızca diz boyu kalmış.` },
        { trait: 'harabe', t: `Yolun yanındaki yıkıntı. Eskiden bekçi kulübesiymiş; şimdi dört duvar ve içi kül dolu bir köşe.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Akşam inerken yola yalnız çıkılmaz. Yalnız yolcuya yol ayrımında biri yol gösterir; o yol hiçbir yere çıkmaz.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Yanına bir yoldaş alsaydı, iki kişiyi birden şaşırtamazdı. Tek başına yürüyeni kavşakta bekler.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Hava kararırken kimseye söylemeden yola düşmüş. Eskiler akşamüstü yola çıkanı yalnız salmazdı.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında, yol ayrımında, yıkık hanın duvarına sırtınızı verip beklediniz.`,
        `Güneş battıktan sonra yolun üstüne bir gölge düştü; havaya yanık ot kokusu yayıldı.`,
      ],
      success: [
        `Ardıç dumanı yol ayrımını sarınca gölge kavşağa giremedi. Çarpılanın başında kurşun döküldüğünde su cızırdadı, kurşun bir gölge biçiminde katılaşıp çatladı.`,
        `Sabah {K} kendi adını kekelemeden söyledi; yol ayrımında külden başka bir şey kalmamıştı.`,
      ],
      partial: [
        `Bir yanınız sağlamdı, bir yanınız açık; gölge bir süre kavşakta dolaşıp harabeye çekildi.`,
        `{K} iyileşiyor. Ama akşamları o yol ayrımından kimse yalnız geçmiyor.`,
      ],
    },
  },
};
