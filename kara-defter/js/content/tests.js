// Sınama: a tool left out for one night. `set` is what the player had done, `yes`/`no` what the morning shows.
// These must fit every creature, so they describe the tool, never the creature (no footprints, no shapes, no voices
// unless the tool itself is about voices). The reactions are game invention; see FOLKLORE_NOTES.md.
export const TESTS = {
  demir: {
    set: 'Eşiğin altına bir nal, yastıkların altına makas koydurdun.',
    yes: ['Sabah nal yerinden oynamış, üstü buğulanmıştı. Gelen oradan geçememiş.', 'Gece bir şey kapıya kadar geldi, ama makasın olduğu odaya giremedi.'],
    no: ['Sabah nal da makas da yerli yerindeydi; gelen ikisine de aldırmamış.', 'Demir bütün gece soğuk kaldı, olan yine oldu.'],
  },
  kurdele: {
    set: 'Kapılara ve ocak başına al kurdele bağlattın.',
    yes: ['O gece kurdele bağlı hiçbir yere dokunulmadı.', 'Gelen, al bezi görünce geri dönmüş; kurdele sabah rüzgârsız havada sallanıyordu.'],
    no: ['Kurdeleler sabah da bağlıydı, ama dert bağlı kapıdan içeri girmişti.', 'Al bez hiçbir işe yaramadı; gelen görmemiş gibi geçti.'],
  },
  soz: {
    set: 'Eve girip çıkan herkese destur dedirttin, gece boyu yüksek sesle dua okuttun.',
    yes: ['Okuma sürdükçe hiçbir şey yaklaşmadı. Ses kesilir kesilmez avluda bir kıpırtı başladı.', 'Destur diyenlere o gece hiçbir şey olmadı.'],
    no: ['Okunan duaya aldırış eden olmadı; dert yine geldi.', 'Sözün hükmü geçmedi. Sabah {koy} halkı yine aynı şeyi anlatıyordu.'],
  },
  ates: {
    set: 'Ocağı gece boyu söndürtmedin, kapıya da bir meşale diktirdin.',
    yes: ['Ateş yandıkça bir şey karanlıkta dolandı, ama ışığa giremedi.', 'Meşalenin aydınlattığı yere hiçbir şey gelmedi; alev iki kez sebepsiz titreyip doğruldu.'],
    no: ['Ocak bütün gece yandı; gelen ışığa aldırmadı.', 'Meşale sabaha kadar yandı, hiçbir işe yaramadı.'],
  },
  kalbur: {
    set: 'Kapıya bir kalbur astırdın.',
    yes: ['Sabah kalbur yere düşmüştü ama kapı açılmamıştı. Bir şey bütün gece deliklerle uğraşmış.', 'Kalburun asılı olduğu kapıdan o gece hiçbir şey geçmedi.'],
    no: ['Kalbur yerinde sallanıp durdu; gelen ona bakmadı bile.', 'Kalbur asılı kapıdan dert yine içeri girdi.'],
  },
  igne: {
    set: 'Evdekilerin yakasına birer çuvaldız iğnelettin.',
    yes: ['Çuvaldız takanların hiçbirine o gece dokunulmadı.', 'Bir komşu, yakasındaki çuvaldızın gece birden ısındığını, sonra her şeyin yatıştığını anlattı.'],
    no: ['Çuvaldızlar yakalarda kaldı, işe yaramadı.', 'Yakasında çuvaldız olanın başına da aynısı geldi.'],
  },
  safak: {
    set: 'Herkesi bir odada topladın, horoz ötene kadar kimseyi uyutmadın.',
    yes: ['Ezan okununca bütün ağırlık birden kalktı; gelen, şafağı göremeden çekilmişti.', 'Horoz ötmeden hemen önce dışarıdaki kıpırtı kesildi. Sabaha çıkan herkes sağ salimdi.'],
    no: ['Şafak söktü, ama gün ışığı da bir şeyi değiştirmedi.', 'Horoz öttü, dert kalkmadı.'],
  },
  tuz: {
    set: 'Eşiğe ve ocak başına tuz serptirdin.',
    yes: ['Sabah tuz kapkara olmuştu ve içeri hiçbir şey geçmemişti.', 'Tuz çizgisinin bu yanına o gece hiçbir şey geçmedi.'],
    no: ['Tuz sabah da bembeyazdı; gelen üstünden geçip gitmişti.', 'Serilen tuz olduğu gibi kaldı, olan yine oldu.'],
  },
  adak: {
    set: 'Ekmek, süt ve yağ hazırlatıp hakkı olana bıraktırdın.',
    yes: ['Sabah kap silinmiş gibi boştu; o gece kimseye dokunulmadı.', 'Bırakılan pay alındı. Köy o gece rahat uyudu.'],
    no: ['Bırakılan ekmek sabah da yerindeydi, dert sürdü.', 'Adağa dokunan olmadı.'],
  },
  ayna: {
    set: 'Kapıya dönük bir ayna astırdın.',
    yes: ['Sabah ayna çatlamıştı; o gece içeri giren olmadı.', 'Ayna yere inmişti, yüzü duvara dönük. Gelen oradan geri çekilmiş.'],
    no: ['Ayna bütün gece sapasağlam asılı kaldı, bir şey göstermedi.', 'Ayna yerinde durdu; dert yine geldi.'],
  },
  ardic: {
    set: 'Ardıç dalları yaktırıp evi baştan sona tütsülettin.',
    yes: ['Duman dolaştıkça evin ağırlığı dağıldı; o gece ses çıkmadı.', 'Tütsü kokan odalara o gece yaklaşılmadı.'],
    no: ['Ev sabaha kadar ardıç koktu, hiçbir şey değişmedi.', 'Duman hiçbir şeyi kaçırmadı.'],
  },
  kursun: {
    set: 'Köyün ebesine, başın üstünde suya kurşun döktürdün.',
    yes: ['Kurşun suda çatırdayıp dağıldı; o gece dert hafifledi.', 'Kurşun bir şekil aldı, yaşlılar başını salladı. O gece kimseye bir şey olmadı.'],
    no: ['Kurşun suda düz bir damla gibi dondu; bir şey çıkmadı.', 'Üç kez döküldü, üçünde de bir şey görünmedi.'],
  },
  sessizlik: {
    set: 'Herkese tembihledin: gece kim seslenirse seslensin cevap yok, ad anmak yok.',
    yes: ['Kimse ağzını açmadı; gelen de bir şey yapamadan döndü.', 'Sabaha kadar tek söz edilmedi. O gece kimseye dokunulmadı.'],
    no: ['Bütün köy sustu; ama susmak bir şeyi değiştirmedi.', 'Kimse bir söz etmedi, dert yine geldi.'],
  },
  supurge: {
    set: 'Kapının arkasına bir süpürge ters diktirdin.',
    yes: ['Sabah süpürge devrilmişti; gelen eşikten dönmüş.', 'Süpürge ters durdukça o kapıdan hiçbir şey geçmedi.'],
    no: ['Süpürge sabah da dimdik duruyordu, işe yaramadı.', 'Ters süpürge hiçbir şeyi değiştirmedi.'],
  },
};

// Why a clue source can't be used in today's case.
export const CLOSED = {
  kurban: ['Kurbanı köyden götürmüşler, göremezsin.', 'Ailesi kurbanı kimseye göstermiyor.'],
  iz: ['Gece yağmur yağdı, görülecek iz kalmadı.', 'Bütün köy oradan geçmiş, iz diye bir şey kalmamış.'],
  tanik: ['Tanık korkudan ağzını açmıyor.', 'Gören tek kişi köyü terk etmiş.'],
  zaman: ['Kimse saatini hatırlamıyor, herkes başka bir şey söylüyor.', 'O gün kimse vakti tutmamış.'],
  yer: ['Olay yerinin yolu kapandı, oraya varılamıyor.', 'Yerin sahibi kimseyi yaklaştırmıyor.'],
  sebep: ['Köyün yaşlısı yatağa düştü, konuşamıyor.', 'Yaşlılar bu işi konuşmak istemiyor.'],
};
