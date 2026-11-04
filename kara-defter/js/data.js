// Game content. Placeholders: {K} victim, {T} witness, {Y} village elder, {D} the deceased (hortlak cases),
// {koy} village. Add ":gen" for the genitive ({K:gen} → Zehra'nın).
// Every clue lists `fits`: the creatures whose defter page the clue points to. tools/check-cases.mjs
// proves that the six clues of any case together point to exactly one creature.

export const MAX_CANDLES = 6;

export const CATEGORIES = [
  { id: 'kurban', name: 'Kurban', action: 'Kurbanı gör' },
  { id: 'iz', name: 'İzler', action: 'İzlere bak' },
  { id: 'tanik', name: 'Tanık', action: 'Tanığı dinle' },
  { id: 'zaman', name: 'Zaman ve mevsim', action: 'Ne zaman olduğunu sor' },
  { id: 'yer', name: 'Olay yeri', action: 'Olay yerini gez' },
  { id: 'yasli', name: 'Köyün yaşlısı', action: 'Yaşlıya danış' },
];

export const TOOLS = [
  { id: 'demir', name: 'Demir', note: 'Makas, bıçak ya da nal. Yastık altına, eşiğe, ölünün üstüne.' },
  { id: 'kurdele', name: 'Al kurdele', note: 'Kırmızı bez. Başa bağlanır, beşiğe asılır.' },
  { id: 'soz', name: 'Söz', note: 'Destur, besmele, dua. Ağızdan çıkan koruma.' },
  { id: 'ates', name: 'Ocak ateşi', note: 'Gece boyu söndürülmez.' },
  { id: 'kalbur', name: 'Kalbur', note: 'Kapıya asılır. Delikleri sayılmakla bitmez.' },
  { id: 'igne', name: 'Çuvaldız', note: 'Kalın, uzun iğne. Yakaya batırmak için.' },
  { id: 'safak', name: 'Şafağı beklemek', note: 'Ezan okunana, horoz ötene kadar dayanmak.' },
  { id: 'tuz', name: 'Tuz', note: 'Eşiğe, mezara, ocak başına serpilir.' },
  { id: 'adak', name: 'Suya adak', note: 'Ekmek, süt. Suya bırakılır.' },
  { id: 'ayna', name: 'Ayna', note: 'Kapıya dönük asılır.' },
];

export const CREATURES = [
  {
    id: 'albasti',
    name: 'Albastı',
    aka: ['Alkarısı', 'Albız', 'Al ana'],
    region: 'Anadolu’nun hemen her yerinde; Orta Asya’dan Balkanlara',
    epithet: 'Lohusaya ve yeni doğana musallat olan',
    lore: `Derler ki Albastı lohusa kadına ve yeni doğmuş bebeğe musallat olur; doğumdan sonraki kırk gün en tehlikeli zamandır. Uzun boylu, sarı saçları yerlere kadar inen bir kadın kılığında görünür; ayaklarının ters olduğu söylenir. Gece lohusanın başucunda durur, göğsüne çöker, ciğerini söküp suya götürür; dere kenarındaki evleri sever. Ahırdaki atların yelesini örüp sabaha kadar koşturur. Bu yüzden lohusa kırk gün yalnız bırakılmaz, yastığının altına demir konur, başına al bağlanır.`,
    tools: ['demir', 'kurdele'],
    victim: 'f',
    intro: [
      `Gelinimiz {K} on gündür yatakta. Hekim geldi, gitti; ateşi düşmedi. Gece olunca ev halkı gözünü kırpmıyor. Bir bilen gelsin, ne olduğunu söylesin.`,
      `{K} kalkamaz oldu. Kocası yanından ayrılmıyor ama her sabah onu daha solgun buluyoruz. Ne olduğunu bilen yok.`,
    ],
    clues: {
      kurban: [
        { t: `{K} on gündür yatakta. Ateşi düşmüyor; gözünü tavana dikip “başımda biri duruyor” diye sayıklıyor.`, fits: ['albasti', 'karabasan'] },
        { t: `{K:gen} bebeği geceleri irkilip uyanıyor, sabaha kadar ağlıyor. {K} ise yataktan kalkamıyor; “içim yanıyor” diyor.`, fits: ['albasti', 'ecinni'] },
        { t: `{K} gece yarısı uyandığında göğsüne bir ağırlık çökmüş. Nefesi hâlâ daralıyor, içi yanıyor.`, fits: ['albasti', 'karabasan'] },
      ],
      iz: [
        { t: `Yatağın ayak ucunda ıslak, çamurlu izler var. Dere tarafından gelmiş, dere tarafına dönmüş.`, fits: ['albasti', 'suanasi'] },
        { t: `Ahırdaki kır atın yelesi sabah sıkı sıkı örülmüş bulundu. Hayvan köpük içinde, sanki bütün gece koşturulmuş.`, fits: ['albasti', 'ecinni'] },
        { t: `Yastığın üstünde upuzun, sarı saç telleri. Evde kimsenin saçı o renk değil.`, fits: ['albasti', 'suanasi'] },
      ],
      tanik: [
        { t: `{T}: “Kapı aralığından gördüm. Uzun boylu bir kadındı, saçı yerlere kadar. Sırtı bana dönüktü, yüzünü göremedim.”`, fits: ['albasti', 'suanasi'] },
        { t: `{T}: “Ayakları ters dönüktü, yemin ederim. Topukları öndeydi.”`, fits: ['albasti', 'ecinni'] },
        { t: `{T}: “Gece odadan bir kadın sesi geldi, bebeğe ninni söylüyordu. Girdim; içeride ikisinden başka kimse yoktu.”`, fits: ['albasti', 'ecinni'] },
      ],
      zaman: [
        { t: `Kırk gün daha dolmadı. O kırk gün içinde bu ev bir an bile boş kalmamalıydı.`, fits: ['albasti', 'hortlak'] },
        { t: `Hep gece yarısını biraz geçe, hastanın başında kimse kalmadığı bir anda.`, fits: ['albasti', 'karabasan'] },
      ],
      yer: [
        { t: `Ev derenin hemen kenarında; hastanın yattığı oda suya bakıyor.`, fits: ['albasti', 'suanasi'] },
        { t: `Hastanın odası ahırla duvar duvara. Geceleri atların huysuzlandığı duyuluyor.`, fits: ['albasti', 'ecinni'] },
      ],
      yasli: [
        { t: `{Y}: “Yastığın altına demir koymayı unuttunuz mu? Bu iş demirden çekinir.”`, fits: ['albasti', 'karabasan', 'hortlak'] },
        { t: `{Y}: “Sudan gelir, aldığını suya götürür. Gözünüzü dereden ayırmayın.”`, fits: ['albasti', 'suanasi'] },
        { t: `{Y}: “Bizim zamanımızda başa al bağlanırdı. Al görünce yolundan döner.”`, fits: ['albasti'] },
      ],
    },
    hunt: {
      intro: [
        `Gece, hastanın odasında, ocağın kısık ışığında beklediniz.`,
        `Dere tarafından ıslak bir ayak sesi geldi; kapı kendiliğinden aralandı.`,
      ],
      success: [
        `Yastığın altındaki demiri, başa bağlı al kurdeleyi gördü. Eşikte durdu, geri çekildi.`,
        `Sabah {K} ilk kez kendi ayağıyla kalktı.`,
      ],
      partial: [
        `Bir an duraksadı; ama korunmanız yarımdı. Yatağa uzanan el son anda geri çekildi.`,
        `Dereye doğru kaçtı. {K} kurtuldu; ama o hâlâ suyun dibinde bir yerde.`,
      ],
    },
  },
  {
    id: 'karabasan',
    name: 'Karabasan',
    aka: ['Basırık', 'Kâbus'],
    region: 'Anadolu ve Rumeli',
    epithet: 'Uyuyanın göğsüne çöken',
    lore: `Derler ki Karabasan uykunun en derin yerinde gelir, uyuyanın göğsüne çöker. Kurbanı gözleri açık uyanır ama ne kıpırdayabilir ne bağırabilir; nefesi daralır, başucunda kara bir gölge görür, sabah göğsünde morluklarla kalkar. Bir eve alıştı mı gece gece, hep aynı saatte gelir; kurbanı gün gün solar. Kapalı, karanlık odaları sever. Yatmadan dua okuyan, yastığının altına bıçak ya da makas koyan rahat uyur.`,
    tools: ['demir', 'soz'],
    victim: 'any',
    intro: [
      `{K} geceleri uyuyamaz oldu. Sabahları bir haftalık yol yürümüş gibi kalkıyor. Hoca okudu, geçmedi.`,
      `Evimizde bir dert başladı. {K} geceleri uyanıyor, bağırmak istiyor ama sesi çıkmıyormuş. Ne demek, anlamadık.`,
    ],
    clues: {
      kurban: [
        { t: `{K} gece gözlerini açtığında ne parmağını kıpırdatabilmiş ne sesini çıkarabilmiş. Göğsünde bir ağırlık varmış.`, fits: ['karabasan', 'albasti'] },
        { t: `{K} bir haftadır her sabah yorgun uyanıyor, gün geçtikçe soluyor. Geceleri boğulur gibi olduğunu söylüyor.`, fits: ['karabasan', 'hortlak'] },
      ],
      iz: [
        { t: `Sabah {K:gen} göğsünde, köprücük kemiğinin altında mosmor iki leke.`, fits: ['karabasan', 'albasti'] },
        { t: `Yorgan ayak ucuna kadar sıyrılmış, yastık yere düşmüş. Oda kapısı içeriden sürgülüymüş.`, fits: ['karabasan', 'ecinni'] },
      ],
      tanik: [
        { t: `Yanında yatan {T}: “Hırıldıyordu. Dürttüm, uyanmadı. Gözleri açıktı ama beni görmüyordu.”`, fits: ['karabasan', 'albasti'] },
        { t: `{T}: “Odaya baktığımda yatağın başında kara bir gölge gördüm. Lambayı yaktım, yoktu.”`, fits: ['karabasan', 'albasti', 'hortlak'] },
      ],
      zaman: [
        { t: `Hep gece yarısından sonra, ev en derin uykusundayken.`, fits: ['karabasan', 'albasti', 'ecinni'] },
        { t: `Aynı şey dört gecedir tekrarlanıyor, hep aynı saatte.`, fits: ['karabasan', 'hortlak'] },
      ],
      yer: [
        { t: `Kapısı sürgülü, penceresi kapalı bir yatak odası. İçeri kimse girmemiş.`, fits: ['karabasan', 'ecinni'] },
        { t: `Evin en iç odası; ocaktan uzak, kapkaranlık.`, fits: ['karabasan', 'ecinni'] },
      ],
      yasli: [
        { t: `{Y}: “Yatmadan duanızı okumadınız mı? Dua okunan yatağa yaklaşamaz.”`, fits: ['karabasan', 'ecinni'] },
        { t: `{Y}: “Yastığın altına bir bıçak koyun. Demirden çekinir.”`, fits: ['karabasan', 'albasti', 'hortlak'] },
      ],
    },
    hunt: {
      intro: [
        `{K:gen} odasında, karanlıkta, nefesinizi tutup beklediniz.`,
        `Gece yarısını geçe oda ağırlaştı; yatağın başında bir gölge koyulaştı.`,
      ],
      success: [
        `Yastığın altındaki bıçağın soğuğu, okunan duanın sesi. Gölge göğse inemedi.`,
        `{K} o sabah aylardır ilk kez dinlenmiş uyandı.`,
      ],
      partial: [
        `Gölge bir an çekindi, sonra yine çöktü; ama bu kez {K} bağırabildi.`,
        `Karabasan kaçtı. Başka bir evde, başka bir uykuda bekliyor.`,
      ],
    },
  },
  {
    id: 'karakoncolos',
    name: 'Karakoncolos',
    aka: ['Karakoncolo', 'Koncolos', 'Kalikancaros'],
    region: 'Doğu Karadeniz ve Rumeli',
    epithet: 'Zemheride kapı kapı dolaşan',
    lore: `Derler ki Karakoncolos zemheride, kışın en soğuk kırk gününde ortaya çıkar. İri, kıllı, uzun tırnaklı bir şeydir; gece kapıları dolaşır, insanları tanıdık birinin, çoğu zaman ölmüş bir yakının sesiyle adlarıyla çağırır, kapının dışından sorular sorar. Çağrıya cevap verip dışarı çıkan ya yolunu kaybeder ya sabah yarı donmuş bulunur. Eşikten içeri kendiliğinden giremez. Ocağı gece boyu yanan eve yanaşamaz; kapıya asılan kalburun deliklerini saymaya dalar, sayarken sabah olur.`,
    tools: ['ates', 'kalbur'],
    victim: 'any',
    intro: [
      `Köyümüzde geceleri kapılar çalınıyor. {K:gen} başına gelenden sonra kimse kapısını açmıyor.`,
      `Geceleri sokağa kimse çıkmıyor. {K} bir gece çıktı; döndüğünde başka biriydi.`,
    ],
    clues: {
      kurban: [
        { t: `{K} gece yarısı dışarı çıkmış; sabah köyün dışındaki yolda yarı baygın bulundu. Oraya nasıl gittiğini hatırlamıyor.`, fits: ['karakoncolos', 'gulyabani'] },
        { t: `{K}, bir gece rahmetli anasının sesiyle adının çağrıldığını anlatıyor. Kapıyı açmamış; ertesi gece komşusu açmış, hâlâ yatakta.`, fits: ['karakoncolos', 'hortlak'] },
      ],
      iz: [
        { t: `Karda iri, çıplak ayak izleri. Tırnaklar karı yarmış; izler kapının önünde durmuş.`, fits: ['karakoncolos', 'gulyabani'] },
        { t: `Kapı tahtasında, insan boyundan yüksekte, uzun tırnak çizikleri.`, fits: ['karakoncolos', 'gulyabani'] },
      ],
      tanik: [
        { t: `{T}: “Kıllı, iri bir şeydi. Avlunun dibinde iki büklüm duruyordu.”`, fits: ['karakoncolos', 'gulyabani'] },
        { t: `{T}: “Kapının dışından sorular sordu. Cevap verseydim çıkacaktım, biliyorum.”`, fits: ['karakoncolos', 'carsamba'] },
      ],
      zaman: [
        { t: `Zemheri girdi gireli; ayazın en sert gecelerinde.`, fits: ['karakoncolos'] },
        { t: `Hep gece yarısından sonra, ocaklar sönmeye yüz tutunca.`, fits: ['karakoncolos', 'gulyabani'] },
      ],
      yer: [
        { t: `Her şey evin kapısında oldu: kapı çalındı, açan kimseyi göremedi.`, fits: ['karakoncolos', 'hortlak'] },
        { t: `Ses avlunun içinden geldi. Eşiğe kadar gelmiş ama içeri girememiş.`, fits: ['karakoncolos', 'hortlak'] },
      ],
      yasli: [
        { t: `{Y}: “Adınla çağırana cevap verilmez, kapı açılmaz.”`, fits: ['karakoncolos', 'hortlak'] },
        { t: `{Y}: “Ocağı gece boyu söndürmeyin. Ateş yanan eve yanaşamaz.”`, fits: ['karakoncolos'] },
      ],
    },
    hunt: {
      intro: [
        `Ocağın başında, kapıya dönük oturup beklediniz.`,
        `Gece yarısını geçe kapı çalındı. Dışarıdan tanıdık bir ses adınızı söyledi.`,
      ],
      success: [
        `Cevap vermediniz. Ocak harıl harıl yanıyordu; kapıdaki kalburun deliklerini saymaya daldı.`,
        `Sayarken gün ağardı. Karda geri dönen izlerden başka bir şey kalmadı.`,
      ],
      partial: [
        `Bir yanınız hazırdı, bir yanınız değil. Ses bir süre daha çağırdı, sonra uzaklaştı.`,
        `Bu kapıdan vazgeçti. Zemheri bitene kadar başka kapıları çalacak.`,
      ],
    },
  },
  {
    id: 'gulyabani',
    name: 'Gulyabani',
    aka: ['Gul', 'Gulyabanı'],
    region: 'Anadolu; Arap ve Fars anlatılarındaki gulün akrabası',
    epithet: 'Harabelerin ve mezarlıkların gecesi',
    lore: `Derler ki Gulyabani ıssız yerlerde, harabelerde, yıkık hanlarda, eski mezarlıklarda yaşar. Upuzun boylu, keçe gibi kıllı, kirli tırnaklıdır; gece yolcularını yolundan saptırır, peşine takıp ıssız yerlere götürür. Mezarları eşip ölü eti yer. Sabah ezanı okunup horozlar öttüğünde durduğu yerde kalamaz. Yakasına bir çuvaldız ya da iğne batırmayı başaran olursa uysallaşır, o kişiye hizmet eder.`,
    tools: ['igne', 'safak'],
    victim: 'm',
    intro: [
      `Köy yolunda geceleri yürünmez oldu. {K:gen} başına geleni duyan çobanlar sürüyü erkenden ağıla çekiyor.`,
      `{K} bir gece eve dönmedi. Sabah bulduk ama anlattıklarına kimse inanmıyor.`,
    ],
    clues: {
      kurban: [
        { t: `Çoban {K} gece sürüyü bırakıp eski mezarlığa kadar yürümüş. Sabah dizleri kan içinde bulundu; oraya nasıl gittiğini bilmiyor.`, fits: ['gulyabani', 'karakoncolos'] },
        { t: `Pazardan dönen {K} yolunu şaşırıp yıkık handa sabahlamış. O günden beri karanlık çökünce dışarı adım atmıyor.`, fits: ['gulyabani', 'karakoncolos'] },
      ],
      iz: [
        { t: `Yeni gömülmüş bir mezar eşelenmiş. Toprağın üstünde uzun, kirli tırnak izleri.`, fits: ['gulyabani', 'hortlak'] },
        { t: `Harabenin duvarına takılmış, keçeleşmiş kapkara kıl tutamları.`, fits: ['gulyabani', 'karakoncolos'] },
      ],
      tanik: [
        { t: `{T}: “Upuzun bir şeydi. Yolun kenarına çömelmiş, bir şey yiyordu. Bana döndüğünde kaçtım.”`, fits: ['gulyabani', 'karakoncolos'] },
        { t: `{T}: “Horozlar ötünce bir anda yok oldu; yere çöktü sanki.”`, fits: ['gulyabani', 'ecinni'] },
      ],
      zaman: [
        { t: `Ay batmış, yollar zifiri karanlıkken. Sabah ezanından önce hep biter.`, fits: ['gulyabani', 'ecinni'] },
        { t: `Gece yarısından şafağa kadar. Gün ağarınca ortalık duruluyor.`, fits: ['gulyabani', 'ecinni'] },
      ],
      yer: [
        { t: `Köyün dışındaki eski mezarlıkla yıkık han arasındaki yol.`, fits: ['gulyabani', 'hortlak'] },
        { t: `Terk edilmiş değirmenin harabesi ve çevresindeki ıssız patika.`, fits: ['gulyabani', 'karakoncolos'] },
      ],
      yasli: [
        { t: `{Y}: “Sabah ezanını duyunca durduğu yerde duramaz.”`, fits: ['gulyabani', 'ecinni'] },
        { t: `{Y}: “Yakasına iğne batırabilen olursa ona hizmet eder, derler.”`, fits: ['gulyabani'] },
      ],
    },
    hunt: {
      intro: [
        `Yıkık hanın gölgesinde, yolu gören bir taşın arkasında beklediniz.`,
        `Ay battı. Mezarlık tarafından upuzun bir karaltı yola eğildi.`,
      ],
      success: [
        `Çuvaldız yakasına saplandığında haykırdı; tam o sırada ezan okundu.`,
        `Durduğu yerde kalamadı. Bu yolda bir daha görülmedi.`,
      ],
      partial: [
        `Yarım bir hazırlıkla ona yaklaştınız; sıyrılıp harabelere çekildi.`,
        `Yol şimdilik güvenli. Ama harabelerde hâlâ bir şey bekliyor.`,
      ],
    },
  },
  {
    id: 'hortlak',
    name: 'Hortlak',
    aka: ['Hortlayan ölü'],
    region: 'Anadolu ve Balkanlar',
    epithet: 'Mezarından dönen ölü',
    lore: `Derler ki usulüne göre gömülmeyen, cenaze evinde üstünden kedi atlayan ölü hortlar. Mezarından kefeniyle kalkar, geceleri evine döner; kapıya vurup yakınlarını adlarıyla çağırır, karısının, çocuklarının başucunda durur. Ziyaret ettiği evde insanlar gün gün solar, hayvanlar ölür. Mezar toprağı kabarır, eşiğe toprak taşır. En çok kırkı çıkmadan görülür. Ölünün karnına demir konur ki hortlamasın; mezarına tuz serpilir, şiş çakılır.`,
    tools: ['demir', 'tuz'],
    victim: 'f',
    intro: [
      `{D} rahmetli olalı bu ev rahat yüzü görmedi. {K} her sabah biraz daha solgun.`,
      `Geçen ay bir cenaze kaldırdık. O günden beri {D:gen} evinde geceleri ışık söndürülmüyor.`,
    ],
    clues: {
      kurban: [
        { t: `{D:gen} karısı {K} her gece başucunda kocasını gördüğünü söylüyor. Gün gün eriyor.`, fits: ['hortlak', 'karabasan'] },
        { t: `{D:gen} cenazesinden beri evdekiler solgun, uykusuz. Ahırdaki iki inek bir haftada öldü.`, fits: ['hortlak', 'karabasan'] },
      ],
      iz: [
        { t: `{D:gen} mezar toprağı kabarmış, sanki içeriden itilmiş. Baş taşı yana yatmış.`, fits: ['hortlak', 'gulyabani'] },
        { t: `Sabah eşikte ıslak, kara mezar toprağı. İçeri girmemiş, kapıda durmuş.`, fits: ['hortlak', 'gulyabani'] },
      ],
      tanik: [
        { t: `{T}: “Kefenliydi. Kapıya vurdu, adımı söyledi; {D:gen} sesiydi.”`, fits: ['hortlak', 'karakoncolos'] },
        { t: `{T}: “Cenaze evinde o gece bir kedi ölünün üstünden atladı. Kimse kovmadı.”`, fits: ['hortlak'] },
      ],
      zaman: [
        { t: `Cenazeden üç gün sonra başladı. Daha kırkı çıkmadı.`, fits: ['hortlak', 'albasti'] },
        { t: `Her gece aynı saatte, kapıya üç kez vuruluyor.`, fits: ['hortlak', 'karakoncolos'] },
      ],
      yer: [
        { t: `Mezarlık köyün içinde, evlerin hemen arkasında.`, fits: ['hortlak', 'gulyabani'] },
        { t: `Cenaze evinden mezarlığa inen kısa yol.`, fits: ['hortlak', 'gulyabani'] },
      ],
      yasli: [
        { t: `{Y}: “Ölünün karnına demir koymadınız mı? Biz koyarız, rahat yatsın diye.”`, fits: ['hortlak'] },
        { t: `{Y}: “Kırkı çıkmadan dönenler olur. Kırkı çıkınca ya durulur ya azar.”`, fits: ['hortlak', 'albasti'] },
      ],
    },
    hunt: {
      intro: [
        `Mezarlığa inen yolun başında, {D:gen} kapısının önünde beklediniz.`,
        `Gece yarısı mezarlık tarafından kefenli bir karaltı yürüdü; kapıya üç kez vurdu.`,
      ],
      success: [
        `Eşiğe serilen tuzu geçemedi. Mezarına dönerken toprağına demir şiş çakıldı.`,
        `{K} o sabah kocasını ilk kez rüyasında, huzurlu gördü.`,
      ],
      partial: [
        `Kapıdan döndü ama mezarına tam bağlanamadı.`,
        `{D:gen} evi bu gece rahat. Kırkı çıkana kadar kapılar sürgülü kalacak.`,
      ],
    },
  },
  {
    id: 'ecinni',
    name: 'Ecinni',
    aka: ['Cin taifesi', 'İyi saatte olsunlar'],
    region: 'Her yerde',
    epithet: 'Hamamların, eşiklerin halkı',
    lore: `Derler ki cin taifesi karanlıkta, hamamlarda, eşiklerde, suyun döküldüğü giderlerde toplanır; düğünlerini gece yarısı ıssız hamamlarda kurarlar. Kapalı kapılardan, sürgülü odalardan geçerler; ev sessizleşince tası tarağı tıkırdatır, atların yelesini örer, çocukları ürkütürler. Ayakları keçi ayağına benzer, ters basar gibi yürürler. Gece destur demeden sıcak su döken onlardan birini haşlar, karşılığında çarpılır: ağzı yana kayar, eli kolu tutmaz. Besmeleyle, destur diyerek iş görülen eve dokunmazlar; sabah ezanıyla dağılırlar.`,
    tools: ['soz', 'safak'],
    victim: 'any',
    intro: [
      `{K:gen} başına gelen bir haldir. Hekim “soğuk almış” dedi, inanmadık. Geceleri evde sesler var.`,
      `Gece kimse rahat değil. {K} bir sabah öyle bulundu; ne olduğunu söyleyemiyor.`,
    ],
    clues: {
      kurban: [
        { t: `{K} gece yarısı sıcak su dökerken çarpıldı. Ağzı yana kaydı, sol kolu tutmuyor.`, fits: ['ecinni', 'carsamba'] },
        { t: `{K:gen} bebeği bir gece eşikte bırakılmış. O geceden beri irkilip uyanıyor, memeyi almıyor.`, fits: ['ecinni', 'albasti'] },
      ],
      iz: [
        { t: `Ahırdaki atların yeleleri sabah örülmüş bulundu.`, fits: ['ecinni', 'albasti'] },
        { t: `Hamam taşında tuhaf ayak izleri; ne insan ayağına benziyor ne hayvanınkine, sanki ters basılmış.`, fits: ['ecinni', 'albasti'] },
      ],
      tanik: [
        { t: `{T}: “Hamamdan davul zurna sesi geliyordu, kalabalık bir düğün gibi. Kapıyı açtım, bomboş.”`, fits: ['ecinni'] },
        { t: `{T}: “Horoz ötünce sesler bir anda kesildi.”`, fits: ['ecinni', 'gulyabani'] },
        { t: `{T}: “Bütün gece tasların, tezgâhın tıkırtısı geldi. Sabah her şey yerli yerindeydi.”`, fits: ['ecinni', 'carsamba'] },
      ],
      zaman: [
        { t: `Gece yarısı, herkes yattıktan sonra. Sabah ezanıyla kesildi.`, fits: ['ecinni', 'gulyabani'] },
        { t: `Hep gece, ışıklar söndükten sonra. Gün ağarınca dağılıyorlar.`, fits: ['ecinni', 'gulyabani'] },
      ],
      yer: [
        { t: `Gece su ısıtılan ocak başı; kazan da tas da hâlâ yerinde.`, fits: ['ecinni', 'carsamba'] },
        { t: `Köyün eski hamamı. Gece kimse girmez oraya; kurnalar sabaha kadar kendi kendine akmış.`, fits: ['ecinni'] },
      ],
      yasli: [
        { t: `{Y}: “Sıcak suyu dökmeden destur dediniz mi?”`, fits: ['ecinni', 'suanasi'] },
        { t: `{Y}: “Besmelesiz iş görülen evde onlar da iş görür. Ezan okununca dağılırlar.”`, fits: ['ecinni'] },
      ],
    },
    hunt: {
      intro: [
        `Gece yarısı, eski hamamın soğuk taşlarının arasında beklediniz.`,
        `Kurnalardan su kendiliğinden akmaya başladı; karanlıkta ince sesler kalabalıklaştı.`,
      ],
      success: [
        `Her adımda destur dediniz, sesiniz titremedi. Sesler birer birer çekildi.`,
        `Sabah ezanı okunduğunda hamamda sizden başka kimse kalmamıştı.`,
      ],
      partial: [
        `Bir yanınız sağlamdı, bir yanınız açık. Kalabalık dağıldı ama gitmedi.`,
        `{K} iyileşiyor. Hamamın kapısı ise artık geceleri kilitli.`,
      ],
    },
  },
  {
    id: 'suanasi',
    name: 'Su Anası',
    aka: ['Su iyesi', 'Su ana'],
    region: 'Türk dünyasının su iyesi inancı; Anadolu’da Su Anası',
    epithet: 'Derin suların iyesi',
    lore: `Derler ki her suyun bir iyesi vardır. Su Anası derin göllerde, değirmen arklarında, köprü altlarında oturur; kıyıda uzun saçlarını tarar, unuttuğu tarağı taşın üstünde kalır. Tatlı bir sesle çocukları ve gençleri adlarıyla suya çağırır; destursuz suya gireni ayağından çeker. Sudan çıkar, suya döner; ıslak izleri kıyıda biter. Suya girmeden destur denir; ona ekmek, süt gibi adaklar bırakılır, çünkü su karşılıksız bir şey almaz.`,
    tools: ['adak', 'soz'],
    victim: 'child',
    intro: [
      `Köyün çocukları sudan uzak tutuluyor. {K:gen} başına gelenden sonra kimse dereye inmiyor.`,
      `Küçük {K} bir akşam eve geç döndü. Ne olduğunu anlatamıyor; anası korkudan yanından ayrılmıyor.`,
    ],
    clues: {
      kurban: [
        { t: `Küçük {K} sabah dere kenarında bulundu; sırılsıklam, dili tutulmuş, avucunda yosun.`, fits: ['suanasi', 'albasti'] },
        { t: `Küçük {K} gece yarısı dereye doğru yürürken yakalandı. “Beni adımla çağırdılar” diyor.`, fits: ['suanasi', 'karakoncolos'] },
      ],
      iz: [
        { t: `Kıyıdaki düz taşın üstünde bir tarak; dişlerine upuzun saç telleri dolanmış.`, fits: ['suanasi', 'albasti'] },
        { t: `Kıyıdaki çamurda ıslak, çıplak ayak izleri. Sudan çıkmış, suya dönmüş.`, fits: ['suanasi', 'albasti'] },
      ],
      tanik: [
        { t: `{T}: “Suyun ortasında saçlarını tarayan bir kadın gördüm. Bana bakınca suya gömüldü.”`, fits: ['suanasi', 'albasti'] },
        { t: `{T}: “Sudan tatlı bir ses çocuğun adını söyledi, üç kez.”`, fits: ['suanasi', 'karakoncolos'] },
      ],
      zaman: [
        { t: `Çocuklar o gün destur demeden suya girmişler; her şey o günden sonra başladı.`, fits: ['suanasi', 'ecinni'] },
        { t: `Akşam karanlığı suya çökerken; bir kez de gece yarısı.`, fits: ['suanasi', 'albasti'] },
      ],
      yer: [
        { t: `Değirmen arkının döküldüğü derin göl.`, fits: ['suanasi', 'albasti'] },
        { t: `Köprü altı, suyun en sessiz aktığı yer.`, fits: ['suanasi', 'albasti'] },
      ],
      yasli: [
        { t: `{Y}: “Destursuz suya girilmez, destursuz su dökülmez.”`, fits: ['suanasi', 'ecinni'] },
        { t: `{Y}: “Su karşılıksız bir şey almaz. Ne aldıysa karşılığını verin.”`, fits: ['suanasi'] },
      ],
    },
    hunt: {
      intro: [
        `Köprünün altında, suyun en sessiz yerinde beklediniz.`,
        `Ay suya düştüğünde sudan tatlı bir ses yükseldi; kıyıda bir kadın saçlarını taramaya başladı.`,
      ],
      success: [
        `Destur deyip yaklaştınız; ekmeği ve sütü suya bıraktınız. Tarak elinden düştü.`,
        `Su durgunlaştı. Köyün çocukları ertesi gün yeniden kıyıda oynadı.`,
      ],
      partial: [
        `Sözünüz ya da adağınız eksikti. Ses sustu ama su bulanık kaldı.`,
        `{K} kurtuldu. Yine de bu yaz çocuklar dereye yalnız inmeyecek.`,
      ],
    },
  },
  {
    id: 'carsamba',
    name: 'Çarşamba Karısı',
    aka: ['Çarşamba Kadını'],
    region: 'Anadolu’nun çeşitli yörelerinde',
    epithet: 'Çarşamba gecesi iş tutanı cezalandıran',
    lore: `Derler ki Çarşamba Karısı çarşambayı perşembeye bağlayan gece dolaşır ve o gece iş tutan kadını cezalandırır. Ak saçlı, iki büklüm yaşlı bir kadın kılığında gelir; kapıdan ne iş görüldüğünü sorar, tezgâhın başına oturur, iği dolaştırır, kazandaki suyu ateşsiz kaynatır. İşi yarıda bırakmayanı çarpar; eli kolu tutmaz olur. Kapıya dönük asılan aynada kendi yüzünü görünce kaçtığı, tuz serpilmiş eşiği geçemediği söylenir.`,
    tools: ['ayna', 'tuz'],
    victim: 'f',
    intro: [
      `{K} bir sabah işinin başında öyle bulundu; eli ayağı tutmuyor. Ev halkı bir şey söylemiyor, korkuyorlar.`,
      `Kadınlarımız geceleri tezgâha oturmaz oldu. {K:gen} başına gelenden sonra kimse sebebini söylemiyor.`,
    ],
    clues: {
      kurban: [
        { t: `{K} gece yarısına kadar yün eğirmiş. Sabah iki elinin parmakları kaskatı, açılmıyor.`, fits: ['carsamba', 'ecinni'] },
        { t: `{K} gece çamaşır yıkarken bayılmış. Kendine geldiğinde sol kolu tutmuyordu.`, fits: ['carsamba', 'ecinni'] },
      ],
      iz: [
        { t: `İğ ile yün yumağı sabah birbirine dolanmış, düğüm düğüm. Kimse dokunmamış.`, fits: ['carsamba', 'ecinni'] },
        { t: `Kazandaki su gece kendi kendine kaynamış; ocak sönük olduğu halde.`, fits: ['carsamba', 'ecinni'] },
      ],
      tanik: [
        { t: `{T}: “Ak saçlı, iki büklüm bir kadın. Kapıdan girmeden ne iş yaptığımızı sordu.”`, fits: ['carsamba', 'karakoncolos'] },
        { t: `{T}: “Gece yarısı tezgâhın tıkırtısı geldi. Evde o saatte tezgâha oturan yoktu.”`, fits: ['carsamba', 'ecinni'] },
      ],
      zaman: [
        { t: `Pazartesi sakin, salı sakin. Dert hep haftanın ortasındaki o gece.`, fits: ['carsamba'] },
        { t: `Gece yarısına doğru; ev halkı yatmış, iş daha bitmemişken.`, fits: ['carsamba', 'ecinni'] },
      ],
      yer: [
        { t: `Evin tezgâh odası; yarım kalmış bir kilim hâlâ tezgâhta.`, fits: ['carsamba', 'ecinni'] },
        { t: `Ocak başı; çamaşır kazanı, tokaç, leğen yerli yerinde.`, fits: ['carsamba', 'ecinni'] },
      ],
      yasli: [
        { t: `{Y}: “Haftanın o gecesinde kadın kısmı iş tutmaz. Tutarsa çarpılır.”`, fits: ['carsamba'] },
        { t: `{Y}: “Kapıya soru sorarak gelir. Cevap vermeyin, kapıyı açmayın.”`, fits: ['carsamba', 'karakoncolos'] },
      ],
    },
    hunt: {
      intro: [
        `Çarşambayı perşembeye bağlayan gece, tezgâh odasında beklediniz.`,
        `Gece yarısına doğru kapıdan ince bir ses sordu: “Ne iş görüyorsunuz?”`,
      ],
      success: [
        `Cevap vermediniz. Kapıya dönük asılı aynada kendi yüzünü gördü; tuz serpilmiş eşikte durdu.`,
        `Geri çekildi. Ertesi hafta tezgâh odasında yalnızca tezgâhın sesi vardı.`,
      ],
      partial: [
        `Bir an duraksadı ama eşiği geçmenin yolunu buldu; tezgâhı devirip çıktı.`,
        `{K} iyileşiyor. Çarşamba geceleri ise bu evde artık iş tutulmuyor.`,
      ],
    },
  },
];

export const BY_ID = Object.fromEntries(CREATURES.map((c) => [c.id, c]));
export const TOOL_BY_ID = Object.fromEntries(TOOLS.map((t) => [t.id, t]));

export const NAMES = {
  f: ['Zehra', 'Fadime', 'Emine', 'Hatice', 'Gülsüm', 'Şerife', 'Meryem', 'Sultan', 'Hacer', 'Nazlı', 'Döndü', 'Kevser', 'Esma', 'Saniye', 'Nuriye', 'Havva'],
  m: ['Hüseyin', 'Mehmet', 'Osman', 'Halil', 'İsmail', 'Mustafa', 'Yusuf', 'Rıza', 'Kâzım', 'Veli', 'Bekir', 'Durmuş', 'Hasan', 'Ramazan', 'Cemal', 'İbrahim'],
  child: ['Ahmet', 'Fatma', 'Hamza', 'Zeynep', 'Yakup', 'Ümmü', 'Selim', 'Rukiye', 'Kadir', 'Elif'],
};

export const ELDERS = ['Hacer Nine', 'Dursun Dede', 'Kör Osman', 'Ebe Hatun', 'Molla Rıza', 'Şerife Nine', 'Hafız Bekir', 'Gülizar Nine'];

export const VILLAGES = [
  'Akpınar', 'Karaağaç', 'Söğütlü', 'Kızılkaya', 'Dereköy', 'Yassıören', 'Çamlıbel', 'Kuyucak',
  'Taşoluk', 'Gökçeyurt', 'Değirmenli', 'Yeşilöz', 'Kavaklıdere', 'Sarıbük', 'Eskiköy', 'Bademli',
  'Pınarbaşı', 'Hacılar', 'Gümüşsu', 'Ilıca', 'Kocapınar', 'Ardıçlı', 'Yukarıçamlı', 'Karapınar',
];
