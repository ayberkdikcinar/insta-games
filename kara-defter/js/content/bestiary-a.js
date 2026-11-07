// Bestiary batch A: the original eight creatures plus Obur, Cadı, Umacı, Ümmüsıbyan.
// Format and rules: CONTENT_GUIDE.md. Traits and tools are fixed in ./roster.js.

export default {
  albasti: {
    aka: ['Alkarısı', 'Albız', 'Al ana'],
    region: 'Anadolu’nun hemen her yerinde; Orta Asya’dan Balkanlara',
    epithet: 'Lohusaya ve yeni doğana musallat olan',
    lore: `Derler ki Albastı lohusa kadına ve yeni doğmuş bebeğe musallat olur; doğumdan sonraki kırk gün en tehlikeli zamandır. Uzun boylu, sarı saçları topuklarına kadar inen bir kadın kılığında görünür. Gece yarısı, lohusa odada yalnız kaldığı bir anda başucuna gelir, göğsüne çöker, ciğerini söküp suya götürür; ciğer suya değmeden yetişilirse kadın kurtulur. Dere, çeşme kenarındaki evlerde daha çok görülmesi bundandır. Ardında ıslak izler, yastıkta upuzun sarı saç telleri kalır. Lohusa kırk gün bir an bile yalnız bırakılmaz. Yastığının altına makas, bıçak ya da bir parça demir konur, çünkü Albastı demirin soğuğundan kaçar. Lohusanın başına, bebeğin beşiğine al kurdele bağlanır; al rengi gören oranın korunduğunu bilir ve yolundan döner.`,
    clues: {
      kurban: [
        { trait: 'lohusa', t: `{K} doğuralı dokuz gün oldu. Ateşi düşmüyor; gözünü tavana dikip “başımda biri duruyor” diye sayıklıyor.` },
        { trait: 'lohusa', t: `{K} bebeğini emziremez oldu. Yüzü balmumu gibi sarardı, dudakları çatladı; gece “içim yanıyor” deyip yorganı üstünden atıyor.` },
        { trait: 'lohusa', t: `Lohusa {K} her sabah biraz daha solgun. Bebek göğsüne yaklaştırılınca başını çeviriyor, sanki anasının kokusu değişmiş.` },
      ],
      iz: [
        { trait: 'islak', t: `Yatağın ayak ucunda ıslak, çıplak ayak izleri. Kapıdan gelmiş, kapıya dönmüş; döşemenin tahtası sabah hâlâ nemli.` },
        { trait: 'islak', t: `Yorganın ucu sırılsıklam, dere suyu gibi buz. Odada ne testi var ne leğen; kimse su dökmemiş.` },
        { trait: 'islak', t: `Eşikten yatağa kadar ıslak izler; her birinin dibinde dere kumu. İzler yatağın başında bitiyor, sonra aynı yoldan geri dönüyor.` },
        { trait: 'sac', t: `Yastığın üstünde upuzun, sarı saç telleri. Evde kimsenin saçı o renk değil, o boyda hiç değil.` },
        { trait: 'sac', t: `Beşiğin parmaklığına bir tel saç dolanmış. Çözüp uzattılar; bir kulaçtan uzun çıktı, ucu hâlâ yerde sürünüyordu.` },
        { trait: 'sac', t: `Sabah yorganın kenarında bir tutam sarı saç bulundu. Evde sarışın kimse yok; ana da bebek de kara saçlı.` },
      ],
      tanik: [
        { trait: 'uzun_sacli', t: `{T}: “Kapı aralığından gördüm. Uzun boylu bir kadındı, saçı topuklarına kadar iniyordu. Sırtı bana dönüktü, yüzünü göremedim.”` },
        { trait: 'uzun_sacli', t: `{T}: “Yatağın başına bir kadın eğilmişti. Saçları yorganın üstüne dökülmüş, yere kadar sarkıyordu. Lambayı kaldırdım, kimse yoktu.”` },
        { trait: 'uzun_sacli', t: `{T}: “Sarı saçlı bir kadın. Saçı o kadar uzundu ki yürürken ardından sürünüyordu. Ses etmeden odaya girdi.”` },
      ],
      zaman: [
        { trait: 'kirk', t: `Doğumun üzerinden daha kırk gün geçmedi. Bu ev o kırk gün dolmadan bir an bile boş kalmamalıydı.` },
        { trait: 'kirk', t: `Dert doğumun yedinci gününde başladı. Kırk çıkmadan ne ana ne bebek kapı dışına çıkarıldı; yine de geldi.` },
        { trait: 'kirk', t: `Ebe kırkın dolmasına on iki gün var diyor. Her geçen gün biraz daha kötü; ev halkı günleri tek tek sayıyor.` },
        { trait: 'gece_yarisi', t: `Hep gece yarısı oluyor. Köyde son lamba sönmüş, köpekler bile susmuşken odadan bir inilti yükseliyor.` },
        { trait: 'gece_yarisi', t: `Gecenin tam yarısında oldu. Ev öyle sessizdi ki lambanın fitilinin cızırtısı duyuluyordu.` },
        { trait: 'gece_yarisi', t: `Gece yarısını az geçe, herkesin en derin uykusundayken. Çığlığı ilk duyan, yan odada yatan oldu.` },
      ],
      yer: [
        { trait: 'oda', t: `Lohusa odası evin en içinde; tek penceresi kalın bir perdeyle örtülü. Kapısı kapalıydı, sürgüsü yerindeydi.` },
        { trait: 'oda', t: `Küçük, sıcak, havasız bir oda. Beşik yatağın dibinde; içeri girince süt ve terle karışık ağır bir koku vuruyor.` },
        { trait: 'oda', t: `Olay lohusanın yattığı odada oldu. Kapı kapalıydı, pencere açılmamıştı; içeride ana ile bebekten başkası yoktu.` },
        { trait: 'su', t: `Ev derenin hemen kenarında; gece pencereden suyun sesi duyuluyor. Dere tarafındaki çalılar ezilmiş.` },
        { trait: 'su', t: `Evin arkası dere. Kıyıdaki söğüdün dibinde otlar yatmış, sanki biri sudan çıkıp orada uzun uzun oturmuş.` },
        { trait: 'su', t: `Sabah izleri dereye kadar sürdüler. İzler kıyıda, suyun tam kenarında bitiyor; karşı kıyıda devam etmiyor.` },
      ],
      sebep: [
        { trait: 'yalniz', t: `{Y}: “Lohusa kırk gün yalnız bırakılmaz. Siz o gece odada kimseyi bırakmadınız mı?”` },
        { trait: 'yalniz', t: `{Y}: “Ev halkı düğüne gitmiş, lohusa bebeğiyle bir saat yalnız kalmış. O bir saat ona yeter.”` },
        { trait: 'yalniz', t: `{Y}: “Kapıyı çekip tarlaya gitmişsiniz. Lohusanın yanında bir çocuk bile olsaydı yaklaşamazdı.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece, lohusanın odasında, kısık lambanın ışığında beklediniz.`,
        `Gece yarısı dere tarafından ıslak bir ayak sesi geldi; kapı kendiliğinden aralandı.`,
      ],
      success: [
        `Yastığın altındaki demiri, başa ve beşiğe bağlı al kurdeleyi gördü. Eşikte durdu, saçlarını toplayıp geri çekildi.`,
        `Sabah {K} ilk kez kendi ayağıyla kalktı, bebeğini emzirdi.`,
      ],
      partial: [
        `Bir an duraksadı; ama korunmanız yarımdı. Yatağa uzanan el son anda geri çekildi.`,
        `Dereye doğru kaçtı. {K} kurtuldu; ama kırk gün dolana kadar o oda bir an bile boş kalmayacak.`,
      ],
    },
  },

  karabasan: {
    aka: ['Basırık', 'Kâbus'],
    region: 'Anadolu ve Rumeli',
    epithet: 'Uyuyanın göğsüne çöken',
    lore: `Derler ki Karabasan uykunun en derin yerinde gelir, uyuyanın göğsüne çöker. Kurbanı gözleri açık uyanır ama ne parmağını kıpırdatabilir ne bağırabilir; nefesi daralır, başucunda kara bir gölge görür. Sabah göğsünde, bileklerinde morluklarla kalkar. Bir eve alıştı mı her gece aynı saatte gelir; kurbanı gün gün erir, uykudan yorgun kalkar. Kapısı kapalı, karanlık odaları sever. Besmelesiz, ağzına bir dua almadan yatana kolay musallat olur. Yatmadan dua okuyan, yorganı besmeleyle örtünen rahat uyur; okunan sözün olduğu yatağa yanaşamaz. Yastığının altına bıçak, makas ya da bir parça demir koyanın göğsüne de inemez, çünkü demirin soğuğu onu uzak tutar.`,
    clues: {
      kurban: [
        { trait: 'uyuyan', t: `{K} gece gözlerini açmış ama ne parmağını kıpırdatabilmiş ne sesini çıkarabilmiş. Göğsüne bir değirmen taşı oturmuş gibiymiş.` },
        { trait: 'uyuyan', t: `{K} bir haftadır uykudan yorgun kalkıyor, sanki gece boyu taş taşımış. Akşam olunca yatağa bakmaya korkuyor.` },
        { trait: 'uyuyan', t: `{K} uykusunda boğulur gibi hırıldıyor. Uyandırınca bir süre kimseyi tanımıyor, sonra sabaha kadar gözünü yummuyor.` },
      ],
      iz: [
        { trait: 'morluk', t: `Sabah {K:gen} göğsünde, köprücük kemiğinin hemen altında mosmor iki leke. Parmak ucu kadar, yan yana.` },
        { trait: 'morluk', t: `{K:gen} iki bileğinde de morluk var; sanki biri gece boyu bastırıp tutmuş. Kendisi hiçbir şey hatırlamıyor.` },
        { trait: 'morluk', t: `Kaburgaların üstünde avuç büyüklüğünde bir morluk. Her sabah biraz daha koyulaşıyor, kenarları sararıyor.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Odaya baktığımda yatağın başında kara bir gölge gördüm. Lambayı yaktım, yoktu.”` },
        { trait: 'golge', t: `{T}: “Yanında yatıyordum. Uyandım, üstüne bir karaltı eğilmişti; ne yüzü vardı ne eli. Kıpırdayamadım, sabaha kadar baktım.”` },
        { trait: 'golge', t: `{T}: “Duvarda bir gölge vardı, ama önünde onu düşürecek kimse yoktu. Yavaş yavaş yatağa doğru kaydı.”` },
      ],
      zaman: [
        { trait: 'ayni_saat', t: `Aynı şey dört gecedir tekrarlanıyor, hep aynı saatte. Ev halkı o saat gelmeden uyanıp bekliyor.` },
        { trait: 'ayni_saat', t: `İlk gece yatsıdan üç saat sonraydı; ertesi gece de, ondan sonraki gece de. Saati bir dakika şaşmıyor.` },
        { trait: 'ayni_saat', t: `Mum her gece aynı yere kadar eriyor, tam o vakit hırıltı başlıyor. Ev halkı artık mumun boyuna bakıp bekliyor.` },
      ],
      yer: [
        { trait: 'oda', t: `Kapısı sürgülü, penceresi kapalı bir yatak odası. İçeri kimsenin girmediğine ev halkı yemin ediyor.` },
        { trait: 'oda', t: `Evin en iç odası; güneş görmeyen, havası ağır. Duvarlardan rutubet kokusu geliyor, ses dışarı çıkmıyor.` },
        { trait: 'oda', t: `Küçük, alçak tavanlı bir oda. Kapı kapanınca içerisi kapkaranlık oluyor; insan kendi elini göremiyor.` },
      ],
      sebep: [
        { trait: 'sozsuz', t: `{Y}: “Yatmadan duanızı okumadınız mı? Besmelesiz yatılan yatak sahipsiz sayılır; sahipsiz yatağa da o sahip çıkar.”` },
        { trait: 'sozsuz', t: `{Y}: “Sofradan kalkarken kimse besmele çekmemiş, lambayı söndüren de bir şey dememiş. Ağzı kapalı evin kapısı açıktır.”` },
        { trait: 'sozsuz', t: `{Y}: “Yatağına söylenerek, ağzına bir dua almadan girmiş. Adı anılmadan serilen döşeğe o gelir oturur.”` },
      ],
    },
    hunt: {
      intro: [
        `{K:gen} odasında, karanlıkta, nefesinizi tutup beklediniz.`,
        `Her gece geldiği saat yaklaşınca oda ağırlaştı; yatağın başında bir gölge koyulaştı.`,
      ],
      success: [
        `Yastığın altındaki bıçağın soğuğuna, yüksek sesle okunan duaya çarptı. Gölge göğse inemedi, duvara karışıp silindi.`,
        `{K} o sabah haftalardır ilk kez dinlenmiş uyandı.`,
      ],
      partial: [
        `Gölge bir an çekindi, sonra yine çöktü; ama bu kez {K} bağırabildi.`,
        `Karabasan bu evden çıktı. Başka bir evde, başka bir uykuda saatini bekliyor.`,
      ],
    },
  },

  karakoncolos: {
    aka: ['Karakoncolo', 'Koncolos', 'Kalikancaros'],
    region: 'Doğu Karadeniz ve Rumeli',
    epithet: 'Zemheride kapı kapı dolaşan',
    lore: `Derler ki Karakoncolos zemheride, kışın en soğuk kırk gününde ortaya çıkar. İri, kıllı, uzun tırnaklı bir şeydir; karda bıraktığı izler insan ayağının iki katıdır. Gece kapıları dolaşır, evdekileri tanıdık birinin, çoğu zaman ölmüş bir yakının sesiyle adlarıyla çağırır, kapının dışından sorular sorar. Çağrıya cevap verip kapıyı açan ya da sesin peşine düşen kaybolur; kimi sabah karda yarı donmuş bulunur, kimi hiç bulunmaz. Gece yolda kalanı da yanına katar. Eşikten kendiliğinden giremez. Ocağı gece boyu harıl harıl yanan eve yanaşamaz, çünkü ateşin ışığından ve sıcağından kaçar. Kapıya asılan kalburu görünce deliklerini saymaya dalar; sayar, şaşırır, baştan başlar, o kapıya bir türlü sıra gelmez.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinden iki kişi kayboldu. Biri sabah evden yüz adım ötede, karın içinde yarı donmuş bulundu; öbürü hâlâ yok.` },
        { trait: 'hane', t: `{K:gen} evinde sırayla herkes adıyla çağrıldı: önce dede, sonra gelin, sonra çocuklar. Bir gece {K} yataktan kalkıp çıkmış; izleri bahçenin ucunda bitiyor.` },
        { trait: 'hane', t: `{K:gen} evinde bir haftadır kimse yatağa girmiyor; hepsi sırt sırta oturup gözünü kapıdan ayırmıyor. Kapının dışından her gece birinin adı söyleniyor.` },
        { trait: 'yolcu', t: `{K} gece pazardan dönüyormuş. Arkasından anasının sesiyle adı çağrılmış, dönüp cevap vermiş. Üç gün sonra karın içinde bulundu, hâlâ konuşmuyor.` },
        { trait: 'yolcu', t: `{K} gece yola çıkmış, sabah varacağı köye varmamış. Karda ayak izleri yarı yolda ikiye ayrılıyor; biri insan izi, öbürü değil.` },
        { trait: 'yolcu', t: `{K} gece yolculuğundan dönerken adının çağrıldığını duymuş, yolundan sapmış. Sabah buldukları yerde kar dizine kadardı, eli ayağı buz kesmişti.` },
      ],
      iz: [
        { trait: 'tirnak', t: `Kapı tahtasında, insan boyundan yüksekte, uzun tırnak çizikleri. Kazınan yerden tahtanın açık rengi görünüyor.` },
        { trait: 'tirnak', t: `Kapının kanadında dört çizik yan yana, yukarıdan aşağıya. Tırnaklar tahtayı öyle derin oymuş ki talaşı kapının dibine dökülmüş.` },
        { trait: 'tirnak', t: `Pencerenin buzlu camında uzun tırnak çizikleri; içeriden değil, dışarıdan çizilmiş. Buz, çiziklerin kenarında yeniden donmuş.` },
        { trait: 'buyuk_iz', t: `Karda kocaman, çıplak ayak izleri; bir adımı insanın iki adımı. İzler kapının önünde durmuş, oradan geri dönmüş.` },
        { trait: 'buyuk_iz', t: `Avlunun karında bir iz var. Muhtar çizmesini içine koydu; çizme izin yarısını ancak doldurdu.` },
        { trait: 'buyuk_iz', t: `İzler o kadar iri ve ağır ki kar dibine kadar buz tutmuş. Kapıdan kapıya gitmiş, her kapının önünde ayaklar yan yana durmuş.` },
      ],
      tanik: [
        { trait: 'killi', t: `{T}: “Kıllı, iri bir şeydi. Avlunun dibinde iki büklüm duruyordu; kıllarına kar tutmuştu, silkinmiyordu.”` },
        { trait: 'killi', t: `{T}: “Pencereden baktım. Ayı değildi ama ayı kadar iriydi; baştan aşağı kara kıl, kolları dizlerine iniyordu.”` },
        { trait: 'killi', t: `{T}: “Kapının altından kıllı bir el uzandı, tahtayı yokladı. Sonra çekildi; dışarıdan ıslak köpek kokusu geldi.”` },
        { trait: 'cagiran', t: `{T}: “Kapının dışından rahmetli anamın sesiyle adımı söyledi. Anam on yıl önce öldü. Cevap vermedim.”` },
        { trait: 'cagiran', t: `{T}: “Önce adımı sordu, sonra evde kaç kişi olduğumuzu. Ses komşunun sesiydi ama komşu o gece köyde değildi.”` },
        { trait: 'cagiran', t: `{T}: “Biri adımı üç kez söyledi, tatlı tatlı, kapının hemen dibinden. Üçüncüsünde az kalsın ‘geliyorum’ diyecektim.”` },
      ],
      zaman: [
        { trait: 'zemheri', t: `Zemheri girdi gireli, ayazın en sert gecelerinde. Saçaklardan kol kalınlığında buz sarkıyor.` },
        { trait: 'zemheri', t: `Kışın kara kırkında başladı. Kar diz boyu; ayaz öyle sert ki ağaçlar gece çatırdıyor.` },
        { trait: 'zemheri', t: `Zemherinin ilk gecesi kapı çalındı, ondan sonra hiç durmadı. Kar kalkmadan bu işin bitmeyeceğini söylüyorlar.` },
      ],
      yer: [
        { trait: 'esik', t: `Her şey kapının eşiğinde oldu. Kapı çalındı, açan karanlıktan başka bir şey görmedi; eşiğin önündeki kar ezilmişti.` },
        { trait: 'esik', t: `Eşik taşının önünde kar tepelenmiş, sanki biri saatlerce orada çömelip beklemiş. Taşın kendisine tek iz değmemiş.` },
        { trait: 'esik', t: `Ses kapının hemen dibinden geldi. Eşiğe kadar gelmiş, ama tahtanın öbür yanına bir adım bile atmamış.` },
      ],
      sebep: [
        { trait: 'cevap', t: `{Y}: “Adınla çağırana gece cevap verilmez. Bir kez ‘efendim’ diyen, kapıyı kendi eliyle açmış sayılır.”` },
        { trait: 'cevap', t: `{Y}: “Dışarıdan gelen soruya biriniz cevap vermiş. Kaç kişi olduğunuzu söylediniz mi? Saydığını almaya gelir.”` },
        { trait: 'cevap', t: `{Y}: “Zemheride kapıyı kim çalarsa çalsın, ses kimin sesi olursa olsun, ağız açılmaz. Biriniz açmış, o da duymuş.”` },
      ],
    },
    hunt: {
      intro: [
        `Ateşin başında, kapıya dönük oturup beklediniz.`,
        `Gece yarısını geçe kapı çalındı. Dışarıdan tanıdık bir ses adınızı söyledi.`,
      ],
      success: [
        `Ocak harıl harıl yandı, ışığı kapının aralığından dışarı vurdu; ses bir adım geri çekildi. Kapıdaki kalburu gördü, deliklerini saymaya daldı; şaşırdı, baştan başladı, bir daha başladı.`,
        `Sabah kapının önünde yalnızca geri dönen iri izler vardı.`,
      ],
      partial: [
        `Bir yanınız hazırdı, bir yanınız değil. Ses bir süre daha çağırdı, sonra karın içinde uzaklaştı.`,
        `Bu kapıdan vazgeçti; ama zemheri bitene kadar başka kapıları çalacak.`,
      ],
    },
  },

  gulyabani: {
    aka: ['Gul', 'Gulyabanı'],
    region: 'Anadolu; Arap ve Fars anlatılarındaki gulün akrabası',
    epithet: 'Harabelerin ve mezarlıkların gecesi',
    lore: `Derler ki Gulyabani ıssız yerlerde, harabelerde, yıkık hanlarda, eski mezarlıklarda yaşar. İnsan boyunun iki katı uzunluğunda, baştan aşağı keçe gibi kıllı, kirli uzun tırnaklı bir şeydir. Ayın doğmadığı zifiri gecelerde ortaya çıkar. Gece yalnız yola düşen yolcuyu, sürüsünün başında tek kalan çobanı yolundan saptırır, peşine takıp ıssız yerlere götürür; kimi ayak sesini arkasında duyar, kimi bir yoldaşın yanına katıldığını sanır. Sabah ezanı okunup horozlar öttüğünde durduğu yerde kalamaz; gün ağarana dek dayanan kurtulur. Yakasına bir çuvaldız ya da kalın bir iğne batırmayı başaran olursa uysallaşır; iğne yakasında durdukça o kişiye kul olur, iğneyi çıkarana kadar kaçamaz.`,
    clues: {
      kurban: [
        { trait: 'yolcu', t: `Pazardan dönen {K} yolunu şaşırıp yıkık handa sabahlamış. O günden beri karanlık çökünce dışarı adım atmıyor.` },
        { trait: 'yolcu', t: `{K} gece komşu köyden dönüyormuş; yol iki saatlikmiş. Sabah bulduklarında yolun tam ters yönündeymiş, dizleri yarılmış, çarıkları yokmuş.` },
        { trait: 'yolcu', t: `Yolcu {K} yolda yanına uzun boylu bir yoldaşın katıldığını anlatıyor. Ne kadar yürüdüklerini bilmiyor; ayıldığında mezar taşlarının arasındaymış.` },
        { trait: 'coban', t: `Çoban {K} gece sürüyü bırakıp eski mezarlığa kadar yürümüş. Sabah dizleri yara bere içinde bulundu; oraya nasıl gittiğini bilmiyor.` },
        { trait: 'coban', t: `Çoban {K:gen} köpekleri sabah ağıla yalnız döndü. {K} iki gün sonra yıkık hanın avlusunda bulundu; sürüsünü sorunca boş boş bakıyor.` },
        { trait: 'coban', t: `{K} kuzuları gece tek başına ağıla getirirken bir şeyin peşine takılmış. Sürü sabah dağılmış bulundu, çobanın kendisi hâlâ kayıp.` },
      ],
      iz: [
        { trait: 'tirnak', t: `Harabenin kapı kemerinde, insan boyunun çok üstünde, dört uzun tırnak çiziği. Taşın tozu yeni kazınmış.` },
        { trait: 'tirnak', t: `{K:gen} sırtında, gömleği yırtarak inen uzun tırnak çizikleri var. Tırnak deriyi sıyırıp geçmiş, dört çizgi yan yana.` },
        { trait: 'tirnak', t: `Mezar taşlarının üstünde, eski yazıların arasında taze çizikler. Uzun, kirli tırnaklar taşı boydan boya kazımış.` },
        { trait: 'kil', t: `Harabenin duvarına takılmış, keçeleşmiş kapkara kıl tutamları. Kokusu ıslak keçi postu gibi.` },
        { trait: 'kil', t: `{K:gen} yakasına yapışmış, keçe gibi sert, kıvırcık kara kıllar. Hiçbir hayvanın kılına benzemiyor.` },
        { trait: 'kil', t: `Yıkık hanın kırık kapısında bir tutam kıl. Çekip uzattılar; bir karıştan uzun, düğüm düğüm keçeleşmiş.` },
      ],
      tanik: [
        { trait: 'killi', t: `{T}: “Baştan aşağı kıllıydı, kılları keçe gibi birbirine yapışmıştı. Yanımdan geçerken ağıl gibi koktu.”` },
        { trait: 'killi', t: `{T}: “Yolun kenarına çömelmiş bir şey gördüm, sırtı kıl yığını. Ayı sandım; doğruldu, ayı değildi.”` },
        { trait: 'killi', t: `{T}: “Elinin sırtına kadar kıl bürümüştü, yüzü kıldan seçilmiyordu. Bana yaklaştıkça kuru keçe gibi bir hışırtı geldi.”` },
        { trait: 'dev', t: `{T}: “Upuzun bir şeydi. Yıkık hanın duvarının üstünden başı görünüyordu; o duvar iki adam boyu.”` },
        { trait: 'dev', t: `{T}: “Yanıma yürüdü; başım ancak beline geliyordu. O kadar uzundu ki yürürken eğilip yola bakıyordu.”` },
        { trait: 'dev', t: `{T}: “Karanlıkta önce bir ağaç sandım, sonra ağaç yürüdü. İnsan boyunun iki katıydı, kolları dizlerinden aşağı sarkıyordu.”` },
      ],
      zaman: [
        { trait: 'aysiz', t: `Ay doğmamıştı; yolun taşları seçilmiyordu, insan kendi elini göremiyordu. Her şey o zifiri gecede oldu.` },
        { trait: 'aysiz', t: `Ayın yüzünü göstermediği gecelerde oluyor. Ay doğdu mu yollar sakin; ay kayboldu mu başlıyor.` },
        { trait: 'aysiz', t: `Bulutlu, aysız bir geceydi. Yıldız bile yoktu; fenerin ışığı iki adım ötesini göstermiyordu.` },
      ],
      yer: [
        { trait: 'harabe', t: `Köyün dışındaki yıkık han. Damı çökmüş, avlusunda ısırgan bitmiş; içeri girince ayak sesin duvarlardan geri dönüyor.` },
        { trait: 'harabe', t: `Eski kervan yolunun kenarındaki yarı yıkık han. Kapısı yok, pencereleri kör; içeride güvercin tüyü ve kemik kırıntısı.` },
        { trait: 'harabe', t: `Terk edilmiş eski köyün yıkıntıları; yarım duvarlar, çökmüş damlar. Gündüz bile oradan geçen adımlarını sıklaştırıyor.` },
        { trait: 'mezarlik', t: `Köyün dışındaki eski mezarlık; taşları yan yatmış, yazıları okunmuyor. Olay yolun mezarlığa dayandığı yerde oldu.` },
        { trait: 'mezarlik', t: `Kimsenin artık ölü gömmediği eski kabristan. Selvilerin altında ot diz boyu, taşların arası ezilmiş.` },
        { trait: 'mezarlik', t: `Mezarlığın duvarı bir yerden yıkılmış. Eski taşların arasındaki otlar yatmış, sanki iri bir şey her gece oradan girip çıkıyor.` },
      ],
      sebep: [
        { trait: 'yalniz_yol', t: `{Y}: “Gece yalnız yola çıkılmaz. Yanına bir yoldaş almayanı o kendine yoldaş eder.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Ay batmışken tek başına yola düşmüş. Issız yolda yalnız yürüyenin ayak sesine bir ayak sesi daha karışır.”` },
        { trait: 'yalniz_yol', t: `{Y}: “Akşam ‘yalnız giderim’ demiş, kimseyi beklememiş. Gece yolu tek başına yürünmez; tek yürüyeni o bulur.”` },
      ],
    },
    hunt: {
      intro: [
        `Yıkık hanın gölgesinde, yolu gören bir taşın arkasında beklediniz.`,
        `Ay hiç doğmadı. Mezarlık tarafından upuzun, kıllı bir karaltı yola eğildi.`,
      ],
      success: [
        `Çuvaldız yakasına saplanınca olduğu yerde kaskatı kesildi; çırpındı, ama iğneyi bırakmadınız. Doğudan ilk ışık, köyden sabah ezanı geldi.`,
        `Durduğu yerde kalamadı; bu yolda bir daha görülmedi.`,
      ],
      partial: [
        `Yarım bir hazırlıkla ona yaklaştınız; sıyrılıp harabelere çekildi.`,
        `Yol şimdilik güvenli. Ama yıkık hanın içinde hâlâ bir şey bekliyor.`,
      ],
    },
  },

  hortlak: {
    aka: ['Hortlayan ölü'],
    region: 'Anadolu ve Balkanlar',
    epithet: 'Mezarından dönen ölü',
    lore: `Derler ki usulünce yıkanıp gömülmeyen, cenaze gecesi üstünden kedi atlayan ölü hortlar. Mezarının toprağını içeriden iter, kefeniyle kalkar; geceleri evine döner. Eşikte durur, kapıya vurur; içeri alınırsa karısının, anasının başucuna oturur. Uğradığı evde insanlar gün gün erir, sararır, uykudan yorgun kalkar. En çok kırkı çıkmadan görülür ve her gece aynı saatte gelir. Sabah eşikte kara mezar toprağı bulunur. Bu yüzden ölünün karnına bir bıçak ya da makas konur; demir ölüyü yerinde tutar. Hortlayan ölünün mezarına bir demir şiş çakılır. Mezarın üstüne ve yas evinin eşiğine tuz serpilir; hortlak tuzu geçemez, döner mezarına gider.`,
    clues: {
      kurban: [
        { trait: 'yas_evi', t: `{D:gen} karısı {K} her gece başucunda kocasını gördüğünü söylüyor. Gün gün eriyor; yemeği eline alıyor, ağzına götüremiyor.` },
        { trait: 'yas_evi', t: `{K}, kardeşi {D:gen} cenazesinden beri karasını çıkarmadı. Yüzü sapsarı, elleri titriyor; geceleri kapının dibinde oturup bekliyor.` },
        { trait: 'yas_evi', t: `{D:gen} anası {K}, oğlunu toprağa verdi vereli sararıp soluyor. “Her gece geliyor, gitmiyor” diyor; kime dediği anlaşılmıyor.` },
      ],
      iz: [
        { trait: 'mezar', t: `{D:gen} mezar toprağı kabarmış, sanki içeriden itilmiş. Baş taşı yana yatmış, toprakta parmak izleri var.` },
        { trait: 'mezar', t: `Sabah eşikte kara, soğuk mezar toprağı. Bir avuç kadar, eşiğin önüne dökülmüş; içeri tek tane girmemiş.` },
        { trait: 'mezar', t: `Mezarlıktan eve kadar topak topak toprak düşmüş. Her topakta kök parçaları, birinde kefen bezinden bir iplik.` },
      ],
      tanik: [
        { trait: 'olu', t: `{T}: “Kefenliydi, baş bağı çözülmüştü. Lambayı kaldırdım; karşımdaki {D} idi, toprağa verdiğimiz gibi.”` },
        { trait: 'olu', t: `{T}: “Avlunun ortasında durmuş eve bakıyordu. Yürüyüşünden tanıdım; {D} sol ayağını hep sürürdü.”` },
        { trait: 'olu', t: `{T}: “Pencereye yüzünü dayadı. {D:gen} yüzüydü; dudakları cenazede gördüğümüz gibi çivit, gözleri açık ama bakmıyor.”` },
      ],
      zaman: [
        { trait: 'kirk', t: `Cenazeden üç gün sonra başladı, daha kırkı çıkmadı. Ev halkı kırk günü parmakla sayıyor.` },
        { trait: 'kirk', t: `{D} toprağa verileli yirmi iki gün oldu; kırk mevlidi daha okunmadı. Dert cenazenin ertesi gecesi başladı.` },
        { trait: 'kirk', t: `Kırk gün dolmadan, ölünün evi daha yas tutarken. Yedisi okunduğu gece kapıya ilk kez vuruldu.` },
        { trait: 'ayni_saat', t: `Her gece aynı saatte kapıya üç kez vuruluyor. Ne bir dakika önce ne bir dakika sonra.` },
        { trait: 'ayni_saat', t: `{D} hangi saatte öldüyse o saatte geliyor. Ev halkı her gece o saat gelmeden uyanıp oturuyor.` },
        { trait: 'ayni_saat', t: `Dördüncü gecedir aynı saat: köpekler önce uluyor, sonra susuyor, sonra kapıya üç kez vuruluyor.` },
      ],
      yer: [
        { trait: 'mezarlik', t: `Mezarlık köyün içinde, evlerin hemen arkasında. {D:gen} mezarı yolun dibinde, toprağı daha çökmemiş.` },
        { trait: 'mezarlik', t: `Selvilerin altındaki yeni mezar. Çevresinde kimse oyalanmıyor; mezarcı bile işini gündüz bitirip kaçıyor.` },
        { trait: 'mezarlik', t: `Mezarlığın alçak duvarı, {D:gen} yattığı köşe. Duvarın üstündeki taşlar içeriden dışarı, yola düşmüş.` },
        { trait: 'esik', t: `Her şey yas evinin kapısında oluyor. Eşik taşı ölü gibi soğuk; sabah çıplak ayakla basan irkiliyor.` },
        { trait: 'esik', t: `İçeri girmiyor, eşikte duruyor. Kapının önündeki taş, tam ayak basılacak yerden kararmış, nem tutmuş.` },
        { trait: 'esik', t: `Kapının dibinde, eşiğin hemen önünde. Ev halkı geceleri kapıdan uzak, odanın en arka köşesinde yatıyor.` },
      ],
      sebep: [
        { trait: 'usulsuz_gomu', t: `{Y}: “Ölü yıkanırken suyu tam dökülmedi, kefeni aceleyle bağlandı. Usulünce gömülmeyen rahat yatmaz.”` },
        { trait: 'usulsuz_gomu', t: `{Y}: “Cenaze gecesi ölünün üstünden kedi atlamış, kimse kovmamış. Öyle ölü toprağa girse de yerinde durmaz.”` },
        { trait: 'usulsuz_gomu', t: `{Y}: “Mezarı kısa kazdınız, ölüyü kıbleye döndürmeden toprağı attınız. Yanlış yatırılan ölü kalkar, evine yürür.”` },
      ],
    },
    hunt: {
      intro: [
        `Yas evinin kapısında, eşiğe dönük oturup beklediniz.`,
        `Her gece geldiği saatte mezarlık tarafından kefenli bir karaltı yürüdü; kapıya üç kez vurdu.`,
      ],
      success: [
        `Eşiğe serilen tuzun önünde durdu, bir adım atamadı. Mezarına döndüğünde kabarmış toprağına bir demir şiş çakıldı.`,
        `{K} o sabah {D:gen} rüyasını ilk kez huzurlu gördü.`,
      ],
      partial: [
        `Kapıdan döndü ama mezarına tam bağlanamadı.`,
        `Yas evi bu gece rahat. Kırkı çıkana kadar kapı sürgülü kalacak.`,
      ],
    },
  },

  ecinni: {
    aka: ['Cin taifesi', 'İyi saatte olsunlar'],
    region: 'Anadolu’nun ve Rumeli’nin her yerinde',
    epithet: 'Hamamların, ocak başlarının halkı',
    lore: `Derler ki cin taifesi karanlıkta, hamamlarda, ocak başlarında, suyun döküldüğü giderlerde toplanır; düğünlerini gece yarısı ıssız hamamlarda kurar, def çalar, halay çeker. Kapalı kapılardan geçer, ev sessizleşince ocağın başında tası tarağı tıkırdatır, atların yelesini ince ince örer. Ayakları keçi ayağına benzer; geçtikleri yerde izler ters basılmış gibidir. Gece destur demeden sıcak su döken onlardan birini haşlar, besmelesiz ocağa yanaşan çocuklarının üstüne basar; karşılığında çarpılır: ağzı yana kayar, eli kolu tutmaz. Besmeleyle, destur diyerek iş görülen eve dokunmazlar; ağızdan çıkan güzel söz onları uzak tutar. Sabah ezanı okunup horozlar ötünce de dağılırlar; o vakte dek dayanan kurtulur.`,
    clues: {
      kurban: [
        { trait: 'hane', t: `{K:gen} evinde kimse rahat değil. Biri gece kalkıp konuşuyor, biri uykusunda gülüyor; en küçüğün ağzı sabah yana kaymış.` },
        { trait: 'hane', t: `{K} ve ev halkı birer birer çarpılıyor. Önce dedenin eli tutmaz oldu, sonra gelin dilini çeviremez oldu; şimdi sıra kimde diye bekliyorlar.` },
        { trait: 'hane', t: `{K:gen} evinde bir hafta içinde üç kişi çarpıldı. Hepsi gece ocak başında bir ses duyup düştü; hiçbiri ne duyduğunu söyleyemiyor.` },
        { trait: 'kadin', t: `{K} gece yarısı sıcak su dökerken çarpıldı. Ağzı yana kaydı, sol kolu tutmuyor.` },
        { trait: 'kadin', t: `{K} herkes yattıktan sonra ocağın başında hamur yoğuruyormuş. Sabah teknenin başında yere yığılmış bulundu; parmakları kaskatı, hamura yapışık.` },
        { trait: 'kadin', t: `{K} gece yarısı hamamda çamaşır yıkıyormuş. Kurnanın başında bayılmış; ayıldığında bir gözü kapanmıyor, dili dolaşıyor.` },
      ],
      iz: [
        { trait: 'yele', t: `Kır atın yelesi sabah sıkı sıkı örülmüş bulundu, küçük küçük, sayısız örgü. Hayvan köpük içinde, sanki bütün gece koşturulmuş.` },
        { trait: 'yele', t: `Atın yelesindeki örgüleri çözmeye çalıştılar; her biri bir parmak inceliğinde, uçları düğümlenmiş. İnsan eli böyle örmez.` },
        { trait: 'yele', t: `Sabah atların yelesi de kuyruğu da örülmüştü. Bir at hâlâ titriyor, yemine dokunmuyor.` },
        { trait: 'ters', t: `Sabah dökülen unun üstünde küçük ayak izleri. Topukları önde, parmakları arkada; sanki biri yüzü ileri dönük, geri geri yürümüş.` },
        { trait: 'ters', t: `Kapıdan ocağa giden izler var, ama izlerin ucu kapıya bakıyor. Gelen girmiş mi çıkmış mı, kimse çıkaramıyor.` },
        { trait: 'ters', t: `Hamamın tozlu soyunmalığında çatal, ters basılmış izler. Keçi ayağına benziyor ama keçi iki ayağının üstünde, geri geri yürümez.` },
      ],
      tanik: [
        { trait: 'kalabalik', t: `{T}: “Hamamdan davul zurna sesi geliyordu, kalabalık bir düğün gibi. Kapıyı açtım, bomboş; kurnalar akıyordu.”` },
        { trait: 'kalabalik', t: `{T}: “Ocak başından fısıltılar geldi; on kişi, yirmi kişi, bir ağızdan. Konuştular, tas çaldılar. Lambayı yakınca hepsi sustu.”` },
        { trait: 'kalabalik', t: `{T}: “Evin içi düğün evi gibiydi: ayak sesleri, def, el çırpma. Kalktım, baktım; herkes yatağındaydı.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı, herkes yattıktan sonra. Ev sessizleşir sessizleşmez ocak başından ilk tıkırtı geldi.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında oldu; yatsının üstünden saatler geçmişti, sabaha daha çok vardı.` },
        { trait: 'gece_yarisi', t: `Gece yarısıydı. Köyün köpekleri bir ağızdan havlamaya başladı, sonra hepsi aynı anda sustu.` },
      ],
      yer: [
        { trait: 'hamam', t: `Köyün eski hamamı. Gece kimse girmez oraya; kurnalar sabaha kadar kendi kendine akmış, göbek taşı hâlâ ılık.` },
        { trait: 'hamam', t: `Hamamın külhanı soğuk olduğu hâlde içerisi buğu içindeydi. Kubbenin camlarından damlalar düşüyordu.` },
        { trait: 'hamam', t: `Olay hamamda, halvetin kapısında oldu. Gece orada su dökülmez derler; o gece dökülmüş.` },
        { trait: 'ocak', t: `Gece su ısıtılan ocak başı; kazan da tas da hâlâ yerinde. Ocağın taşı bir yerinden çatlamış.` },
        { trait: 'ocak', t: `Olay ocağın başında oldu, kazandan sıcak su alınırken. Ocağın hemen dibindeki taş gider o suyu yutuyor.` },
        { trait: 'ocak', t: `Evin ocak başı; sıcak suyun döküldüğü taş yalak hemen yanında. Ev halkı geceleri oraya yaklaşmıyor.` },
      ],
      sebep: [
        { trait: 'sozsuz', t: `{Y}: “Sıcak suyu dökmeden destur dediniz mi? Demediniz. Onların çocuğu haşlandı; bunun karşılığı çarpılmaktır.”` },
        { trait: 'sozsuz', t: `{Y}: “Besmelesiz iş görülen evde onlar da iş görür. O gece kimse ağzına bir besmele almamış.”` },
        { trait: 'sozsuz', t: `{Y}: “Hamama girerken selam vermemişsiniz. Boş görünen yer boş değildir; selamsız girilmez.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısı, eski hamamın soğuk taşlarının arasında beklediniz.`,
        `Kurnalardan su kendiliğinden akmaya başladı; karanlıkta def sesleri, ince sesler kalabalıklaştı.`,
      ],
      success: [
        `Her adımda destur dediniz, besmele dilinizden düşmedi; sesler birer birer çekildi. Sonra köyden ezan okundu, horozlar öttü.`,
        `Sabah hamamda sizden başka kimse kalmamıştı; kurnalar kurumuştu.`,
      ],
      partial: [
        `Bir yanınız sağlamdı, bir yanınız açık. Kalabalık dağıldı ama gitmedi.`,
        `{K} iyileşiyor. Hamamın kapısı ise artık geceleri kilitli.`,
      ],
    },
  },

  suanasi: {
    aka: ['Su iyesi', 'Su ana'],
    region: 'Türk dünyasının su iyesi inancı; Anadolu’da Su Anası',
    epithet: 'Derin suların iyesi',
    lore: `Derler ki her suyun bir iyesi vardır. Su Anası derin göllerde, derenin döndüğü göllenmelerde, köprü altlarında oturur. Akşam karanlığı suya çökerken kıyıya çıkar, yerlere inen saçlarını tarar. Destursuz suya girilen, suyu destursuz bulandırılan köye gücenir; o köyün çocuklarını tatlı bir sesle, adlarıyla suya çağırır. Sesi duyan çocuk peşinden yürür, bir daha görülmez; ardında kıyıda biten ıslak izler kalır. Bir kez gücendi mi destur da yetmez artık. Gönlünü almak için suya ekmek, süt, yağ adanır, çünkü su karşılıksız bir şey bırakmaz. Akşam sudan bir ses adınızı çağırırsa susulur: cevap verilmez, dönüp bakılmaz, çocuğun adı kıyıda yüksek sesle anılmaz. Cevabı alamayan ses kimseyi suya çekemez.`,
    clues: {
      kurban: [
        { trait: 'cocuk', t: `Küçük {K} akşam kıyıda oynarken gözden kayboldu. Bir pabucu suyun kenarında bulundu, burnu suya dönük.` },
        { trait: 'cocuk', t: `{K} daha yedi yaşında. Akşam “anam çağırıyor” deyip dereye koşmuş; anası o sırada evde, hamur başındaymış.` },
        { trait: 'cocuk', t: `Küçük {K} bir akşam eve sırılsıklam döndü. Ne olduğunu anlatamıyor; geceleri uykusunda kalkıp dereye doğru yürümeye çalışıyor.` },
      ],
      iz: [
        { trait: 'islak', t: `Kıyıdaki çamurda ıslak, çıplak ayak izleri. Sudan çıkmış, suya dönmüş; arada yalnızca on adım.` },
        { trait: 'islak', t: `Kıyının düz taşlarında ıslak ayak izleri; bir büyük, bir küçük, yan yana. İkisi de suyun içine girip kayboluyor.` },
        { trait: 'islak', t: `Gün batmış, kum soğumuştu, ama kıyıdaki izler hâlâ yaştı. Her birinin içine su dolmuştu, sanki az önce basılmış.` },
        { trait: 'sac', t: `Kıyıdaki düz taşın üstünde bir tarak; dişlerine upuzun, kara saç telleri dolanmış.` },
        { trait: 'sac', t: `Köprünün ayağına upuzun saç telleri takılmış, akıntıda dalgalanıyor. Biri çekip çıkarmaya uğraştı; ucu bir türlü gelmedi.` },
        { trait: 'sac', t: `Çocuğun bileğine bir saç teli dolanmış, sımsıkı, deriye gömülmüş. Kestiler; tel buz gibiydi, evde kimsenin saçı o boyda değil.` },
      ],
      tanik: [
        { trait: 'uzun_sacli', t: `{T}: “Suyun ortasında saçlarını tarayan bir kadın gördüm. Saçı suyun üstüne yayılmıştı. Bana bakınca suya gömüldü.”` },
        { trait: 'uzun_sacli', t: `{T}: “Kıyıda, taşın üstünde oturuyordu. Saçları sırtından inip suya karışıyordu; saç nerede bitiyor, su nerede başlıyor, seçilmiyordu.”` },
        { trait: 'uzun_sacli', t: `{T}: “Bir kadın, saçları yerlere kadar, ıslak ıslak. Çocuğun elinden tutmuş, suya doğru yürüyordu. Seslendim, dönüp bakmadı.”` },
        { trait: 'cagiran', t: `{T}: “Sudan tatlı bir ses çocuğun adını söyledi, üç kez. Anasının sesine benziyordu ama anası yanımdaydı.”` },
        { trait: 'cagiran', t: `{T}: “Akşam dere tarafından adımı çağırdılar. Ses öyle tatlıydı ki ayaklarım kendiliğinden kıyıya yürüdü; biri kolumdan çekti.”` },
        { trait: 'cagiran', t: `{T}: “Köprünün altından bir ses ‘gel, gel’ diye fısıldıyordu. Sonra köyün çocuklarının adlarını tek tek saydı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığı suya çökerken. Gün batmış, kandiller daha yakılmamıştı; suyun yüzü gökten daha aydınlıktı.` },
        { trait: 'aksam', t: `Güneş tepelerin ardına indiğinde; kuşlar susmuş, sudan serinlik yükselmeye başlamıştı. Çocuklar kıyıdan daha dönmemişti.` },
        { trait: 'aksam', t: `Akşam, sürünün köye döndüğü, çocukların eve çağrıldığı saatte. Kapılardan adlar seslenildi; biri gelmedi.` },
      ],
      yer: [
        { trait: 'su', t: `Köprü altı, suyun en sessiz, en derin aktığı yer. Dibi görünmüyor; atılan taş ses vermeden batıyor.` },
        { trait: 'su', t: `Derenin döndüğü yerdeki göllenme. Su orada yeşile çalıyor, yazın bile buz gibi.` },
        { trait: 'su', t: `Köyün aşağısındaki gölün kıyısı; düz taşlar, eğri bir söğüt, söğüdün dalları suya değiyor.` },
      ],
      sebep: [
        { trait: 'sozsuz', t: `{Y}: “Destursuz suya girilmez. Çocuklar o gün bağıra çağıra suya atlamışlar; bir tanesi bile destur dememiş.”` },
        { trait: 'sozsuz', t: `{Y}: “Kadınlar dereye çamaşıra inmiş, besmelesiz tokaç vurmuşlar. Suyun sahibi var; sahibine selam verilmeden kapısı çalınmaz.”` },
        { trait: 'sozsuz', t: `{Y}: “Akşam dereden su doldurmuşsunuz, ağzınızı açıp bir destur dememişsiniz. Su da sizden bir şey aldı.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam, köprünün altında, suyun en sessiz yerinde beklediniz.`,
        `Gün batınca sudan tatlı bir ses yükseldi, adlarınızı tek tek çağırdı; kıyıda bir kadın saçlarını taramaya başladı.`,
      ],
      success: [
        `Ses ne kadar çağırdıysa hiçbiriniz cevap vermediniz, başınızı bile çevirmediniz. Ekmeği, sütü, yağı suya bıraktınız; tarak elinden düştü, saçları suya çekildi.`,
        `Su durgunlaştı. Ertesi gün {koy} çocukları yeniden kıyıda oynadı.`,
      ],
      partial: [
        `Adağınız ya da susmanız eksikti. Ses kesildi ama su bulanık kaldı.`,
        `{K} kurtuldu. Yine de bu yaz {koy} çocukları dereye yalnız inmeyecek.`,
      ],
    },
  },

  carsamba: {
    aka: ['Çarşamba Kadını'],
    region: 'Anadolu’nun çeşitli yörelerinde',
    epithet: 'Çarşamba gecesi iş tutanı cezalandıran',
    lore: `Derler ki Çarşamba Karısı çarşambayı perşembeye bağlayan gece dolaşır ve o gece iş tutan kadını cezalandırır. Ak saçlı, iki büklüm, kambur bir kocakarı kılığında gelir. Ocak başında yün eğiren, çamaşır yıkayan, hamur yoğuran kadının yanına oturur; iği dolaştırır, yumağı çözer, kazanı devirir, ortalığı darmadağın eder. İşini bırakmayanı çarpar; eli kolu tutmaz olur, ağzı yana kayar. Bu yüzden o gece iğ, kirmen, tezgâh bir kenara kaldırılır. Kapıya dönük asılan aynada kendi yüzünü görünce kaçtığı söylenir; ne kadar yaşlı ve çirkin olduğunu görüp utanırmış. Eşiğe ve ocak başına serpilen tuzun üstüne de basamaz; tuz ayağını yakar, geri döner.`,
    clues: {
      kurban: [
        { trait: 'kadin', t: `{K} gece yarısına kadar ocak başında yün eğirmiş. Sabah iki elinin parmakları kaskatı, açılmıyor.` },
        { trait: 'kadin', t: `{K} gece çamaşır yıkarken bayılmış. Kendine geldiğinde sol kolu tutmuyordu, ağzı bir yana çekilmişti.` },
        { trait: 'kadin', t: `{K} herkes yattıktan sonra çorap örmeye oturmuş. Sabah şişler elinde, gözü açık bulundu; kimseyi tanımıyor, dili dönmüyor.` },
      ],
      iz: [
        { trait: 'dagin', t: `Sabah ocak başı darmadağın: yün yumakları odaya saçılmış, iğ kırılmış, kirmen kapının dibine fırlatılmış.` },
        { trait: 'dagin', t: `Kazan devrilmiş, tokaç ikiye ayrılmış, leğenler üst üste yığılmış. Gece kimse bir ses duymamış.` },
        { trait: 'dagin', t: `Örülen çorabın ilmekleri sökülüp odaya dağıtılmış; iplik sedirin ayağına, kapı koluna, yüklüğün kapağına dolanmış.` },
      ],
      tanik: [
        { trait: 'kocakari', t: `{T}: “Ak saçlı, iki büklüm bir kocakarı. Ocağın öbür yanına oturdu, ellerini ısıttı, bir şey demeden bana baktı.”` },
        { trait: 'kocakari', t: `{T}: “Kambur bir kocakarı, başında yamalı bir yemeni. Yüzü ceviz kabuğu gibi buruşuktu; köyde öyle bir nine yok.”` },
        { trait: 'kocakari', t: `{T}: “Kapı açılmadan içeri bir kocakarı girdi, değneğine dayana dayana. Yanımdaki kirmeni aldı, ters yöne çevirmeye başladı.”` },
      ],
      zaman: [
        { trait: 'carsamba', t: `Pazartesi sakin, salı sakin. Dert hep çarşambayı perşembeye bağlayan gece, ev uykuya dalınca başlıyor.` },
        { trait: 'carsamba', t: `Çarşamba gecesiydi; perşembe sabahı ev halkı kalktığında her şey olmuştu. Geçen çarşamba da komşu evde aynısı yaşanmış.` },
        { trait: 'carsamba', t: `Haftanın ortasındaki o gece. Ev halkı artık çarşamba günü akşam olmadan işini bitirip yatıyor.` },
      ],
      yer: [
        { trait: 'ocak', t: `Ocak başı; çamaşır kazanı, tokaç, leğen. Ocağın taşları gece hiç ısınmamış gibi soğuk.` },
        { trait: 'ocak', t: `Olay ocağın hemen başında oldu, kadınların gece yün eğirdiği yerde. Ocaklığın yanındaki minder hâlâ çökük.` },
        { trait: 'ocak', t: `Evin ocak başı; sacayağı, hamur teknesi, un çuvalı. Kadınlar gece işini hep burada, ateşin ışığında görür.` },
      ],
      sebep: [
        { trait: 'yasak_is', t: `{Y}: “Çarşambayı perşembeye bağlayan gece kadın kısmı iş tutmaz. İş ne kadar acele olursa olsun bekler; tutan çarpılır.”` },
        { trait: 'yasak_is', t: `{Y}: “O gece iğ ele alınmaz, çamaşır yıkanmaz, hamur yoğrulmaz. Siz çeyiz yetişsin diye hepsini yapmışsınız.”` },
        { trait: 'yasak_is', t: `{Y}: “Yasak gecede iş tutulmaz; bunu bilmeyen yok. Bilip de o gece yün eğiren, kapısını kendi eliyle açmıştır.”` },
      ],
    },
    hunt: {
      intro: [
        `Çarşambayı perşembeye bağlayan gece, ocak başında, iş tutuyormuş gibi elinize bir yumak alıp beklediniz.`,
        `Kapı açılmadan içeriye bir soğuk doldu; ocağın öbür yanında iki büklüm bir kocakarı belirdi.`,
      ],
      success: [
        `Gözü kapıya dönük asılan aynaya takıldı; kendi yüzünü görünce elleriyle yüzünü kapattı. Kaçmak istedi, eşiğe serilen tuzun önünde durdu, sonra kapı aralığından sızıp gitti.`,
        `Ertesi çarşamba gecesi ocak başında yalnızca közün çıtırtısı vardı.`,
      ],
      partial: [
        `Bir an duraksadı ama yolunu buldu; yumakları dağıtıp çıktı.`,
        `{K} iyileşiyor. Çarşamba geceleri ise bu evde artık iş tutulmuyor.`,
      ],
    },
  },

  obur: {
    aka: ['Ubır'],
    region: 'Rumeli’de; Gagauzlar, Kırım ve Kazan Tatarları arasında',
    epithet: 'Mezarından kalkıp kileri, ahırı yiyen ölü',
    lore: `Derler ki Obur usulünce gömülmeyen bir ölüdür; kimi zaman da yaşayan birinin rahat bulmayan ruhu uykusunda bedeninden çıkıp obur olur. Dolunay gecelerinde mezarından kalkar, eski giysisiyle köye iner. Önce kilere girer: unu, yağı, peyniri yer, küpleri dibine kadar boşaltır. Sonra ahıra geçer; ineklerin sütünü içer, hayvanların kanını emer. Uğradığı ahırda hayvanlar günden güne erir, sonra birer birer ölür. Sabah mezarının toprağı eşilmiş, ağzının kenarında kan bulunur. Obur mezarına bağlanmadıkça durmaz. Mezarına, gece yakalanırsa yakasına bir çuvaldız çakılır; çuvaldız onu toprağa iğneler, bir daha kalkamaz. Mezarın üstüne, ahırın kapısına ve kilerin önüne tuz serpilir; tuzlu toprağı geçemez, geldiği yere döner.`,
    clues: {
      kurban: [
        { trait: 'hayvan', t: `{K:gen} ahırındaki üç inek bir haftada eridi. Sağmaya gidince memeleri boş, gözleri fersiz; dördüncüsü bugün yere yattı.` },
        { trait: 'hayvan', t: `{K:gen} koyunları sabah ağılda birbirine sokulmuş, titriyor. Her gece biri eksiliyor; ölüsü kansız, bembeyaz bulunuyor.` },
        { trait: 'hayvan', t: `{K:gen} tek öküzü bir ayda kemiğe döndü. Yemini yiyor, suyunu içiyor ama her sabah daha zayıf kalkıyor.` },
        { trait: 'hane', t: `{K:gen} evinde kiler bir haftada boşaldı. Küpteki yağ dibine kadar inmiş, un çuvalı yırtılmış; ev halkı yarı aç yatıyor.` },
        { trait: 'hane', t: `{K} ve ev halkı her sabah yorgun, sararmış kalkıyor. Ekmek tekneden, peynir küpten eksiliyor; kimse yemediğine yemin ediyor.` },
        { trait: 'hane', t: `{K:gen} evinde ne ekmek kalıyor ne yağ. Kapılar sürgülü, kilerin kilidi yerinde; ama sabah tekne sıyrılmış gibi boş.` },
      ],
      iz: [
        { trait: 'mezar', t: `{D:gen} mezarının toprağı eşilmiş; bir yanında el sığacak kadar bir delik açılmış. Delikten soğuk, ekşi bir koku yükseliyor.` },
        { trait: 'mezar', t: `Ahırın kapısına kadar topak topak mezar toprağı dökülmüş. Toprak yaş, içinde çürük kök parçaları.` },
        { trait: 'mezar', t: `Yeni mezarın toprağı her sabah kabarık. Ev halkı akşam kürekle düzeltiyor, sabah yine eşilmiş, yine kabarmış buluyor.` },
        { trait: 'kan', t: `İneğin boynunda iki küçük delik, kenarlarında kurumuş kan. Hayvan sabah ayağa kalkamadı.` },
        { trait: 'kan', t: `Yemliğin kenarında kurumuş kan damlaları; ahırın kapısına kadar, sonra kapıdan dışarı, mezarlık yönüne.` },
        { trait: 'kan', t: `{D:gen} mezarını açtıklarında yüzü dipdiri, ağzının kenarında taze kan varmış. Kefeninin yakası kızıla boyanmış.` },
      ],
      tanik: [
        { trait: 'olu', t: `{T}: “Ahırın kapısında {D} duruyordu, ölmeden önce giydiği yelekle. Elinde süt kabı vardı; bana baktı, içmeye devam etti.”` },
        { trait: 'olu', t: `{T}: “Kilerin önünde biri çömelmiş, küpten avuç avuç yiyordu. Döndü; {D:gen} yüzüydü, gömdüğümüzden daha dolgun.”` },
        { trait: 'olu', t: `{T}: “Mezarlıktan biri indi. Yürüyüşünden tanıdım; {D} sağ ayağını böyle sürürdü. Ahıra girdi, hayvanlar bağırmaya başladı.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Ay dolunca başladı. Ay küçüldükçe ahır rahatladı; şimdi ay yine doluyor, hayvanlar akşamdan huysuzlanıyor.` },
        { trait: 'dolunay', t: `Dolunay gecesiydi; ay öyle aydınlıktı ki ahırın içi gölgesiz görünüyordu. Mezarlığın taşları bile tek tek seçiliyordu.` },
        { trait: 'dolunay', t: `Her ay dolunayda üç gece sürüyor. Ay tepedeyken köpekler mezarlığa dönüp uluyor.` },
      ],
      yer: [
        { trait: 'mezarlik', t: `Köyün mezarlığı, {D:gen} yattığı köşe. Mezarın çevresinde otlar yolunmuş, baş taşı devrilmiş.` },
        { trait: 'mezarlik', t: `Mezarlığın eski tarafı; taşların arasında yeni bir mezar. Toprağın üstünde sığır kılı ve saman çöpleri.` },
        { trait: 'mezarlik', t: `Mezarlık köyün tepesinde, ahırlara bakıyor. Mezarlıktan aşağıya, otların arasından yalnızca bir kişinin yürüdüğü ince bir iz iniyor.` },
        { trait: 'ahir', t: `Ahırın içi; yemlikler yalanmış, suluk boş, hayvanlar duvara yapışmış duruyor. Saman bir köşede ezilmiş, biri orada yatmış gibi.` },
        { trait: 'ahir', t: `Ahırla kiler duvar duvara. Aradaki kapının sürgüsü içeriden açılmış; ahırın samanı kilere kadar taşınmış.` },
        { trait: 'ahir', t: `Olay ahırda oldu, en son bölmede. Orada bağlı inek sabah yarı yarıya erimiş, gözü kapıya dikili bulundu.` },
      ],
      sebep: [
        { trait: 'usulsuz_gomu', t: `{Y}: “{D} usulünce gömülmedi. Yıkayan aceleye getirdi, mezar kısa kazıldı, başında bir dua bile okunmadan dönüldü.”` },
        { trait: 'usulsuz_gomu', t: `{Y}: “Ölünün ağzı bağlanmadan, gözleri yumulmadan toprağa verildi. Öyle gömülen aç kalkar, aç gezer.”` },
        { trait: 'usulsuz_gomu', t: `{Y}: “Cenaze günü yağmur bastırdı, mezar yarım doldurulup bırakıldı. Toprağı tam örtülmeyen ölü yerinde durmaz, açlığı kalkar.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi, ahırın samanlığında, mezarlığa bakan aralıktan beklediniz.`,
        `Ay tepeye çıkınca mezarlıktan {D} indi; ölmeden önce giydiği yelekle, ağır ağır ahırın kapısına yürüdü.`,
      ],
      success: [
        `Kapıya serilen tuzun önünde durdu, öteye geçemedi. Geri dönerken yakasına çuvaldızı batırdınız; sendeledi, mezarına kadar sürüklendi, toprağına iğnelendi.`,
        `Sabah ahırda hiçbir hayvan eksik değildi; {K} ilk kez dolu bir kova sütle eve döndü.`,
      ],
      partial: [
        `Tek bir korumayla karşıladınız onu; kaçtı, mezarına girdi ama bağlanmadı.`,
        `Ahır bu ay rahat. Ay yeniden dolduğunda köy, mezarlığın yolunu yine gözleyecek.`,
      ],
    },
  },

  cadi: {
    aka: ['Cadı karı'],
    region: 'Anadolu ve Balkanlar',
    epithet: 'Kıskançlıkla sütü kurutan kocakarı',
    lore: `Derler ki Cadı köyün içinde yaşar; gündüz kimsenin dikkat etmediği, kendi hâlinde bir kocakarıdır. Gözü başkasının malındadır. Biri ineğini, yeni doğmuş bebeğini “maşallah” demeden över, ya da bolluğuyla övünürse kıskançlığı uyanır. Dolunay gecelerinde kılık değiştirir; çoğu zaman bir kara kedi, kimi zaman bir tavşan olup ahıra girer. İneklerin memesini kurutur, kovadaki sütü keser, lohusanın sütünü çeker; bebek aç kalır, hayvan erir. Onun dokunduğu evde kurşun dökülür: eritilen kurşun soğuk suda cızırdar, çatlar, kötülüğün şeklini alır; kıskanç göz kurşunla birlikte suya akar. Kapının arkasına ters dikilen süpürge de cadıyı savar; istenmeyen misafiri evden süpüren süpürge onu da kapıdan geri çevirir.`,
    clues: {
      kurban: [
        { trait: 'hayvan', t: `{K:gen} ineği dün akşama kadar kovayı taşırıyordu. Bu sabah memesi taş gibi, damla süt yok; hayvan sağılmaya yanaşmıyor.` },
        { trait: 'hayvan', t: `{K:gen} keçileri bir haftadır süt vermiyor. Oğlaklar aç bağırıyor; keçiler ahırın köşesine sinmiş, kapıya bakmıyor.` },
        { trait: 'hayvan', t: `{K:gen} yeni doğurmuş ineği ayağa kalkamıyor, buzağısı da memeye yanaşmıyor. Köyün en verimli hayvanıydı; herkes öyle derdi.` },
        { trait: 'lohusa', t: `{K} doğuralı on gün oldu; sütü bir gecede kesildi. Bebek memeyi bırakıp bağırıyor, komşulardan süt anası aranıyor.` },
        { trait: 'lohusa', t: `{K:gen} göğsü taş gibi sertleşti, sütü gelmiyor. Bebeği gün gün zayıflıyor; ağlamaya bile gücü kalmadı.` },
        { trait: 'lohusa', t: `{K} lohusa yatağında. Bebeği gürbüz doğdu, görenler hayran kaldı; üçüncü gün ananın sütü kesildi, bebek gece gündüz inliyor.` },
      ],
      iz: [
        { trait: 'sut', t: `Akşam sağılan süt sabah kovada kesilmiş; yeşilimsi bir suyun üstünde topak topak yüzüyor. Kova temizdi, süt tazeydi.` },
        { trait: 'sut', t: `Yayık bütün gün döndü, yağ gelmedi. Süt kesildi, ekşidi; kokusu ahıra kadar yayıldı.` },
        { trait: 'sut', t: `Sabah sağılan süt eve varmadan kovada kesildi. Kaba döküldüğünde peynir suyu gibi sulu, ekşi ve pis kokuluydu.` },
      ],
      tanik: [
        { trait: 'kocakari', t: `{T}: “Ahırın kapısında iki büklüm bir kocakarı vardı. Elleriyle havayı sıvazlıyordu, inek sağar gibi.”` },
        { trait: 'kocakari', t: `{T}: “Ayın ışığında bir nine gördüm, değneksiz ama iki büklüm. Ahırdan çıktı, kendi kendine söylene söylene evlerin arasında kayboldu.”` },
        { trait: 'kocakari', t: `{T}: “Köyün yaşlı kadınlarından biriydi sanki; sırtı kambur, başörtüsü yüzüne inmiş. Kapının önünde durmuş, dudaklarını kıpırdatıyordu.”` },
        { trait: 'hayvan', t: `{T}: “Ahırdan kara bir kedi çıktı, ağzı süt içindeydi. Kovaladım; ahırın duvarından insan gibi tutunarak atladı.”` },
        { trait: 'hayvan', t: `{T}: “İneğin memesinin dibinde bir tavşan gördüm, sütünü emiyordu. Taş attım, topallayarak kaçtı. Ertesi gün komşu nine topallıyordu.”` },
        { trait: 'hayvan', t: `{T}: “Ahırın penceresinde bir kedi oturuyordu; gözleri insan gözü gibiydi. Bana baktı, hiç ürkmedi, sabaha kadar oradan kalkmadı.”` },
      ],
      zaman: [
        { trait: 'dolunay', t: `Dolunay gecesi. Ay öyle aydınlıktı ki ahırın gölgesi avluya keskin, kapkara düşüyordu.` },
        { trait: 'dolunay', t: `Ay dolunca başlıyor; her ay aynı. Ay küçülürken süt geri geliyor, ay büyüdükçe yine azalıyor.` },
        { trait: 'dolunay', t: `Ayın on dördüydü, gökte tepsi gibi bir ay. Ertesi sabah kovalar boş kaldı.` },
      ],
      yer: [
        { trait: 'ahir', t: `Ahırın içi. Yemlik dolu ama dokunulmamış, hayvanlar ipini gerip arka duvara çekilmiş; hava ekşi süt kokuyor.` },
        { trait: 'ahir', t: `Ahırın en arka bölmesi, köyün en çok süt veren ineğinin yeri. Sabah ineğin ipi düğüm düğüm olmuş, hayvan ter içindeydi.` },
        { trait: 'ahir', t: `Evin altındaki ahır; kışın hayvanların sıcağı tahtadan yukarı vurur. Dert de oradan, döşemenin altından yukarı çıkıyor.` },
      ],
      sebep: [
        { trait: 'ovunmek', t: `{Y}: “Pazarda ‘köyde böylesi yok’ diye övünmüşsünüz. Maşallah demeden övülene göz değer; göz de sahibini bulur.”` },
        { trait: 'ovunmek', t: `{Y}: “Bu evde bolluk vardı, siz de dilinizden düşürmediniz. Maşallah demeden övülen şeye kıskanç bir göz değer.”` },
        { trait: 'ovunmek', t: `{Y}: “Düğünde ‘bizim ev süt gölü’ diye övünmüşsünüz. Köyde gözü dar kim varsa o gece sizi düşündü.”` },
      ],
    },
    hunt: {
      intro: [
        `Dolunay gecesi, ahırda, samanın arkasına çömelip beklediniz.`,
        `Ay tepeye çıkınca kapının altından kara bir kedi süzüldü, hayvanların arasına yürüdü.`,
      ],
      success: [
        `Kapının arkasında ters dikili süpürgeyi görünce tüyleri kabardı, geldiği yoldan çıkamadı. Eritilen kurşun soğuk suya döküldüğünde cızırdadı, çatladı; kedi bir kocakarı sesiyle bağırıp pencereden kaçtı.`,
        `Sabah kovalar köpüklü, ılık sütle doldu.`,
      ],
      partial: [
        `Yarım bir korumayla karşıladınız; kedi bir köşeye sindi, sonra kapının aralığından kaçtı.`,
        `Bu gece süt kesilmedi. Ama köyün içinde bir kocakarı, ay yeniden dolsun diye bekliyor.`,
      ],
    },
  },

  umaci: {
    aka: ['Öcü'],
    region: 'Anadolu’nun her yerinde; çocuklara anlatılır',
    epithet: 'Akşam kapıda çocuk bekleyen',
    lore: `Derler ki Umacı akşam karanlığında köye iner, çocuk kollar. Ne yüzü vardır ne biçimi; kapının önünde koyu, kocaman bir gölge olarak durur, kapı aralığından içeri bakar. Yürüdüğü yerde toprağa gömülen izleri bir adamın ayağından iki kat büyüktür. Gün battıktan sonra dışarıda kalan, kapının önünde yalnız bırakılan çocuğu alıp götürür; giden çocuk bir daha bulunmaz. Analar çocuklarını bu yüzden güneş inmeden içeri çağırır. Umacı ışıktan kaçar: kapının önünde lamba, eşikte bir fener ya da ocaktan alınmış bir köz yanarken o kapıya yanaşamaz. Kapının arkasına ters dikilen süpürge de onu savar; süpürge evden istenmeyeni süpürür, Umacı kapıya gelir, eşiği geçemeden döner gider.`,
    clues: {
      kurban: [
        { trait: 'cocuk', t: `Küçük {K} akşam kapının önünde oynuyordu; anası ekmeği almaya içeri girdi. Çıktığında kapının önünde yalnızca bir topaç dönüyordu.` },
        { trait: 'cocuk', t: `{K} beş yaşında. Akşamüstü avluda kayboldu; köyün bütün erkekleri gece boyu aradı, sabah yalnızca bir pabucu bulundu.` },
        { trait: 'cocuk', t: `Küçük {K} akşam eve gelmedi. Arkadaşları onu son kez kapının önünde, karanlığa bakarken görmüşler; “biri bekliyor” demiş.` },
      ],
      iz: [
        { trait: 'buyuk_iz', t: `Kapının önündeki çamurda kocaman ayak izleri; bir izin boyu bir adamın kolu kadar. İzler gelip kapının önünde durmuş.` },
        { trait: 'buyuk_iz', t: `Avlunun tozunda iri, yayvan izler; ne parmak yeri var ne topuk yeri. Muhtar adım adım saydı; dört adımda avluyu geçmiş.` },
        { trait: 'buyuk_iz', t: `Kapının önünde iki kocaman iz yan yana, derin derin. Bir şey orada durmuş, ağırlığıyla toprağı ezmiş; çocuğun küçük izleri o iki izin arasında bitiyor.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Kapının önünde kapkara bir gölge vardı, kapı kadar büyük. Biçimi yoktu; ne başı ne kolu. Gözümü kırptım, yoktu.”` },
        { trait: 'golge', t: `{T}: “Kapının aralığından bir karaltı içeri bakıyordu. Yüzü yoktu ama baktığını biliyordum. Kapıyı kapadım; tahtanın arkasında bir süre durdu.”` },
        { trait: 'golge', t: `{T}: “Avlu kapısının önünde koyu bir şey durdu. Gölge gibiydi ama arkasındaki duvarı göstermiyordu; karanlıktan daha karanlıktı.”` },
      ],
      zaman: [
        { trait: 'aksam', t: `Akşam karanlığında; gün batmış, lambalar daha yakılmamıştı. Çocuklar o saatte hâlâ dışarıdaydı.` },
        { trait: 'aksam', t: `Güneş tepenin ardına iner inmez. Sürü köye girmiş, kaldırdığı toz daha yere çökmemişti.` },
        { trait: 'aksam', t: `Akşamüstü, gök mora dönerken. Anaların kapılardan çocuklarını adlarıyla çağırdığı, avluların boşaldığı saat.` },
      ],
      yer: [
        { trait: 'esik', t: `Her şey evin kapısında, eşiğin önünde oldu. Çocuk eşiği geçmemiş; içeriye bir adım uzaklıktaymış.` },
        { trait: 'esik', t: `Kapı eşiği. Taşın üstünde çocuğun bezden bebeği hâlâ duruyor; kimse dokunmaya cesaret edemiyor.` },
        { trait: 'esik', t: `Kapının hemen önü; eşik taşı, iki basamak, sonra karanlık avlu. Ev halkı artık akşamları o eşiğe oturmuyor.` },
      ],
      sebep: [
        { trait: 'yalniz', t: `{Y}: “Çocuk akşam karanlığında kapı önünde yalnız bırakılır mı? Başında bir göz olsaydı yaklaşmazdı.”` },
        { trait: 'yalniz', t: `{Y}: “Herkes tarladaymış, çocuğu kapıda tek başına bırakmışlar. Akşam çöktü, ev boştu; o da boş kapıları gözler.”` },
        { trait: 'yalniz', t: `{Y}: “Ana içeri girdi, baba daha dönmedi, çocuk eşikte kaldı. Bir an yeter; yalnız kalan çocuğu o görür.”` },
      ],
    },
    hunt: {
      intro: [
        `Akşam karanlığında, kapının iç yanında, eşiğe bakarak beklediniz.`,
        `Avlu karardığında kapının önünde biçimsiz, kocaman bir gölge koyulaştı; toprak ağırlığı altında çöktü.`,
      ],
      success: [
        `Eşikte yanan lambanın ışığına değince geri çekildi. Kapının arkasında ters dikili süpürgeyi gördü; bir adım attı, bir adım döndü, sonra karanlığa karışıp gitti.`,
        `Sabah kapının önünde yalnızca geri dönen iri izler vardı. Ertesi akşam {koy} çocukları güneş batmadan oyunlarını bitirdi.`,
      ],
      partial: [
        `Bir korumanız tamdı, öbürü değil; gölge eşikte uzun uzun bekledi, sonra çekildi.`,
        `{K} kurtuldu. Ama {koy} köyünde akşamları kapılar hâlâ erkenden kapanıyor.`,
      ],
    },
  },

  ummusibyan: {
    aka: ['Ümmüssıbyan', 'Ümmü Sıbyan'],
    region: 'Osmanlı dua ve muska kitaplarında; Anadolu’da',
    epithet: 'Beşikteki bebeği havaleye düşüren',
    lore: `Derler ki Ümmüsıbyan küçük çocukların düşmanıdır; adı “çocukların anası” demektir ama ana değildir. Gece yarısı, kapısı kapalı odada ana ile bebek yalnız kaldığında gelir. Kimi onu beşiğin üstüne eğilen kara bir gölge olarak görür, kimi beşiğin dibinde dolaşan bir kedi, bir köpek, bir kara kuş kılığında. Dokunduğu bebek havaleye düşer: gözleri kayar, eli ayağı kasılır, dudakları morarır. Sabah çocuğun kollarında, sırtında parmak izi gibi morluklar bulunur. Bazen lohusanın kendisine de çöker, onu da sayıklatır, eli kolu tutmaz eder. Beşiğe al bir kurdele bağlanır; al renk onun gözünü alır, beşiği göremez olur. Havaleye düşen çocuğun başı üstünde kurşun dökülür; kurşun soğuk suda cızırdayıp çatlarken onun gücü de çatlar, çocuktan ayrılır.`,
    clues: {
      kurban: [
        { trait: 'cocuk', t: `{K} daha iki yaşına girmedi. Gece uykusunda havaleye düştü; gözleri yukarı kaydı, elleri yumruk olup kasıldı.` },
        { trait: 'cocuk', t: `Küçük {K} üç gecedir uyurken kasılıp kalıyor. Sabah dudakları mor, yüzü kireç gibi; ağlamıyor bile, yalnızca bakıyor.` },
        { trait: 'cocuk', t: `{K:gen} beşiği gece kendi kendine sallanıyor. Çocuk sallanırken uyanmıyor; beşik durunca havaleye düşmüş bulunuyor.` },
        { trait: 'lohusa', t: `{K} doğuralı on beş gün oldu. Gece bebeğini emzirirken ikisi birden kasıldı; ana bayıldı, bebeğin gözleri kaydı.` },
        { trait: 'lohusa', t: `{K} her gece “beşiğe bir şey eğiliyor” diye uyanıyor, bağırarak bebeğini göğsüne bastırıyor. Bebek iki kez havaleye düştü.` },
        { trait: 'lohusa', t: `{K} lohusa yatağından kalkamıyor; dili dolaşıyor, bir eli tutmuyor. Bebeği de geceleri kasılıp morarıyor.` },
      ],
      iz: [
        { trait: 'morluk', t: `Çocuğun kolunda, dirseğin üstünde dört küçük morluk yan yana. Parmak izine benziyor, ama hiçbir insan parmağı o kadar ince değil.` },
        { trait: 'morluk', t: `Çocuğun sırtında, kürek kemiklerinin arasında avuç büyüklüğünde mor bir leke. Akşam yıkanırken yoktu.` },
        { trait: 'morluk', t: `Sabah beşikteki çocuğun bileklerinde ince mor halkalar; sanki biri iki eliyle tutup sıkmış.` },
      ],
      tanik: [
        { trait: 'golge', t: `{T}: “Beşiğin üstüne kara bir gölge eğilmişti, tavana kadar uzanıyordu. Fitili açtım; gölge beşiğin içine çekildi sanki, sonra yoktu.”` },
        { trait: 'golge', t: `{T}: “Odada lamba yanıyordu ama beşiğin üstü karanlıktı. Bir gölge orada çömelmiş duruyordu, kıpırdamadan.”` },
        { trait: 'golge', t: `{T}: “Duvardan bir karaltı ayrıldı, yere değmeden beşiğe kaydı. Nefesim kesildi, kımıldayamadım.”` },
        { trait: 'hayvan', t: `{T}: “Beşiğin dibinde bir kedi dolaşıyordu. Bizim evde kedi yok. Kovaladım; kapı kapalıydı, gidecek yeri yoktu, ama gitti.”` },
        { trait: 'hayvan', t: `{T}: “Pencerenin pervazında kara bir kuş oturuyordu. Gözünü beşikten ayırmadı; ses edince bile kanat açmadı.”` },
        { trait: 'hayvan', t: `{T}: “Odanın köşesinde bir köpek yatıyordu, çakal gibi zayıf. Gözleri lambanın ışığında yeşil parladı; bir anda yok oldu.”` },
      ],
      zaman: [
        { trait: 'gece_yarisi', t: `Gece yarısı; ev halkının hepsi uyumuş, odada yalnızca ana ile çocuk varmış.` },
        { trait: 'gece_yarisi', t: `Gecenin tam ortasında oldu; ne yatsının ardı ne sabaha karşı, tam ortası. Köyde tek bir ışık yoktu.` },
        { trait: 'gece_yarisi', t: `Gece yarısını az geçe; yorganların altında herkesin nefesi ağırlaşmıştı. İlk çığlık o sessizliğin içinden geldi.` },
      ],
      yer: [
        { trait: 'oda', t: `Evin arka odası; ana ile çocuk orada yatıyor. Kapısı kapalıydı, tek penceresinin kepengi içeriden örtülüydü.` },
        { trait: 'oda', t: `Kapalı, sıcak bir oda; sesi dışarı çıkmıyor. Beşik yatağın ayak ucunda, iple tavana bağlı.` },
        { trait: 'oda', t: `Odanın kapısı sabah da kapalıydı, sürgüsü yerindeydi. İçeride beşikten, yataktan ve bir sandıktan başka bir şey yok.` },
      ],
      sebep: [
        { trait: 'yalniz', t: `{Y}: “Ana ile çocuk gece bir odada yalnız bırakılmaz. Siz bırakmışsınız; kapıyı da üstlerine kapatmışsınız.”` },
        { trait: 'yalniz', t: `{Y}: “Evin erkeği pazara gitmiş, kaynana komşuda kalmış; o gece evde ana ile bebekten başka kimse yokmuş. Yalnız bulduğu beşiğe eğilir.”` },
        { trait: 'yalniz', t: `{Y}: “Çocuğun başında bir kişi daha kalsaydı yaklaşamazdı. O, yalnız kalanı sayar; kalabalık odaya girmez.”` },
      ],
    },
    hunt: {
      intro: [
        `Gece, kapısı kapalı odada, beşiğin yanında, lambanın kısık ışığında beklediniz.`,
        `Gece yarısı duvardan bir gölge ayrıldı; beşiğin dibinde bir kedi kılığına girdi.`,
      ],
      success: [
        `Beşiğe bağlı al kurdeleyi görünce durdu, gözü kamaştı, beşiği bulamadı. Erittiğiniz kurşunu çocuğun başının üstünde soğuk suya döktünüz; kurşun cızırdayıp çatladı, gölge duvara geri çekildi.`,
        `Sabah çocuk ilk kez kasılmadan uyandı; anası yüzüne gülerek baktı.`,
      ],
      partial: [
        `Bir yanınız tamdı, bir yanınız eksik; gölge beşiğe uzandı, sonra geri çekildi.`,
        `{K} bu gece rahat uyudu. Ama o odada bundan sonra hiçbir gece ana ile çocuk yalnız yatmayacak.`,
      ],
    },
  },
};
