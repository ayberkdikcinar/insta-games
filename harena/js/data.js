// Static game data: origins, quirks, injuries, nicknames, armaments, stances, daily decrees.

export const ORIGINS = [
  {
    id: 'trakya', label: 'Trakyalı', from: "Trakya'dan", dat: 'Trakyalıya', gen: 'Trakyalının',
    skin: ['#C98E5E', '#B97F52', '#D4A070'], hair: ['#231A14', '#3B2A1E', '#5A3E28'], eyes: ['#3A2616', '#2A1C12'],
    hairStyles: ['crop', 'curly', 'long', 'receding'], beards: ['short', 'full', 'stubble', 'none'],
    names: ['Bithus', 'Seuthes', 'Dizas', 'Mucapor', 'Tarsas', 'Zipas', 'Teres', 'Durazis', 'Sitalkes', 'Kotys', 'Rhaskos', 'Dolês'],
  },
  {
    id: 'galya', label: 'Galyalı', from: "Galya'dan", dat: 'Galyalıya', gen: 'Galyalının',
    skin: ['#E2B48E', '#D9A57C', '#E8BE9C'], hair: ['#9A5A2C', '#C29A55', '#5A3E28', '#7A4A26'], eyes: ['#5A6B6E', '#3A2616', '#6B5B3A'],
    hairStyles: ['long', 'crop', 'curly', 'receding'], beards: ['mustache', 'mustache', 'short', 'none'],
    names: ['Vercassius', 'Brennus', 'Orgetorix', 'Dumnorix', 'Cativolcus', 'Litavicus', 'Segovax', 'Eporedorix', 'Lucterius', 'Andecamulos', 'Cingetorix', 'Togirix'],
  },
  {
    id: 'nubya', label: 'Nubyalı', from: "Nubya'dan", dat: 'Nubyalıya', gen: 'Nubyalının',
    skin: ['#5C3B26', '#4A2E1E', '#6B4630'], hair: ['#14100D', '#1E1712'], eyes: ['#1E140E', '#2A1C12'],
    hairStyles: ['shaved', 'bald', 'curly', 'crop'], beards: ['none', 'stubble', 'short'],
    names: ['Arkamani', 'Akinidad', 'Natakamani', 'Taharqo', 'Aspelta', 'Harsiotef', 'Amanikhare', 'Teritiqas', 'Sherkarer', 'Adikhalamani'],
  },
  {
    id: 'germen', label: 'Germen', from: "Germania'dan", dat: 'Germene', gen: 'Germenin',
    skin: ['#E8C3A2', '#E0B592', '#EBC9AA'], hair: ['#C9A65E', '#9C5B2E', '#B08A4A', '#6B4A2B'], eyes: ['#56707A', '#4E6250', '#3A2616'],
    hairStyles: ['knot', 'long', 'crop', 'receding'], beards: ['full', 'short', 'none', 'mustache'],
    names: ['Segimer', 'Inguiomer', 'Gannascus', 'Chariovalda', 'Boiorix', 'Catumer', 'Segestes', 'Actumerus', 'Sesithacus', 'Ucromerus'],
  },
  {
    id: 'yunan', label: 'Yunanlı', from: "Hellas'tan", dat: 'Yunanlıya', gen: 'Yunanlının',
    skin: ['#C99266', '#BE8659', '#D29C70'], hair: ['#231A14', '#3B2A1E', '#4A3424'], eyes: ['#3A2616', '#2A1C12'],
    hairStyles: ['curly', 'crop', 'receding', 'bald'], beards: ['full', 'short', 'none'],
    names: ['Kallias', 'Nikandros', 'Demetrios', 'Philon', 'Hermias', 'Thrasyllos', 'Eumenes', 'Androkles', 'Kleon', 'Zenon', 'Lykos', 'Agathon'],
  },
  {
    id: 'suriye', label: 'Suriyeli', from: "Suriye'den", dat: 'Suriyeliye', gen: 'Suriyelinin',
    skin: ['#A9744C', '#9C6A44', '#B57E55'], hair: ['#16110E', '#231A14'], eyes: ['#1E140E', '#2A1C12'],
    hairStyles: ['curly', 'crop', 'receding', 'shaved'], beards: ['full', 'short', 'stubble'],
    names: ['Zabdas', 'Malchus', 'Iarhai', 'Barates', 'Abgar', 'Maqqai', 'Yedibel', 'Shalman', 'Zabdibol', 'Moqimu'],
  },
  {
    id: 'iberya', label: 'İberyalı', from: "Hispania'dan", dat: 'İberyalıya', gen: 'İberyalının',
    skin: ['#C48A5C', '#B98052', '#CF9668'], hair: ['#231A14', '#3B2A1E', '#2B2018'], eyes: ['#3A2616', '#2A1C12'],
    hairStyles: ['crop', 'long', 'curly', 'shaved'], beards: ['short', 'stubble', 'none', 'mustache'],
    names: ['Indibilis', 'Mandonius', 'Allucius', 'Audax', 'Ditalco', 'Minurus', 'Corocotta', 'Caros', 'Istolatios', 'Tautalus'],
  },
];

export const QUIRKS = [
  { id: 'coskun', label: 'Kalabalık bağırınca coşar', desc: 'Kalabalık 60’ın üstündeyken daha sert vurur.' },
  { id: 'kan', label: 'Kan görünce duraksar', desc: 'Rakibini kanattıktan sonra bazen bir an donar.' },
  { id: 'solak', label: 'Sol eliyle dövüşür', desc: 'İlk üç hamlede rakibini şaşırtır, isabeti artar.' },
  { id: 'kibirli', label: 'Kibirli', desc: 'Kalabalığı çabuk kazanır ama öndeyken gardını düşürür.' },
  { id: 'sabirli', label: 'Sabırlı', desc: 'Dövüş uzadıkça vuruşları ağırlaşır.' },
  { id: 'lejyoner', label: 'Eski lejyoner', desc: 'Darbeleri daha iyi karşılar.' },
  { id: 'adak', label: "Nemesis'e adak adamış", desc: 'Dövüş başına bir kez ölümcül darbeden ayakta kalır.' },
  { id: 'sarhos', label: 'İçkiye düşkün', desc: 'Vuruşları kâh çok sert kâh boşa gider.' },
  { id: 'nefes', label: 'Nefesi kısa', desc: 'Altıncı hamleden sonra gücü düşer.' },
  { id: 'sessiz', label: 'Kalabalığı sevmez', desc: 'Alkışı zor kazanır ama darbe yediğinde soğukkanlıdır.' },
  { id: 'kemik', label: 'Ağır kemikli', desc: 'Kalıcı yara alma ihtimali yarıya iner.' },
  { id: 'kinci', label: 'Kinci', desc: 'Ağır darbe yedikten sonraki vuruşu çok sert olur.' },
];

// part: accusative noun phrase used in epitaphs ("Kulağını bir Galyalıya, canını ... verdi.")
export const INJURIES = [
  { id: 'goz', label: 'Kör göz', nick: 'Tek Göz', mod: { cev: -2 }, hit: 'gözünü kaybetti', part: 'Gözünü', partLow: 'gözünü' },
  { id: 'kulak', label: 'Kesik kulak', nick: 'Tek Kulak', mod: { day: -1, sov: 1 }, hit: 'kulağını kaybetti', part: 'Kulağını', partLow: 'kulağını' },
  { id: 'burun', label: 'Kırık burun', nick: 'Yamuk Burun', mod: { day: -1 }, hit: 'burnu kırıldı', part: 'Burnunu', partLow: 'burnunu' },
  { id: 'yanak', label: 'Yanak yarası', nick: 'Kesik Yüz', mod: { sov: 1 }, hit: 'yüzü yarıldı', part: 'Yüzünün yarısını', partLow: 'yüzünün yarısını' },
  { id: 'dis', label: 'Kırık dişler', nick: 'Dişsiz', mod: { sov: -1 }, hit: 'dişlerini kaybetti', part: 'Dişlerini', partLow: 'dişlerini' },
  { id: 'bacak', label: 'Topallık', nick: 'Topal', mod: { cev: -2 }, hit: 'dizinden yaralandı', part: 'Bacağını', partLow: 'bacağını' },
  { id: 'parmak', label: 'Kayıp parmaklar', nick: 'Sekiz Parmak', mod: { guc: -1 }, hit: 'iki parmağını kaybetti', part: 'Parmaklarını', partLow: 'parmaklarını' },
];

export const FEATS = {
  devdeviren: { nick: 'Dev Deviren', pri: 3 },
  bagislanan: { nick: 'Bağışlanan', pri: 2 },
  olmeyen: { nick: 'Ölmeyen', pri: 4 },
  kasap: { nick: 'Kasap', pri: 3 },
  firtina: { nick: 'Kum Fırtınası', pri: 4 },
  aslan: { nick: 'Arenanın Aslanı', pri: 5 },
};

// Fixed order: indexes are baked into share codes.
export const NICKS = [...INJURIES.map((i) => i.nick), ...Object.values(FEATS).map((f) => f.nick)];

export const ARMS = [
  { id: 'murmillo', label: 'Murmillo', gear: 'Kalkan ve gladius', beats: 'dimachaerus' },
  { id: 'retiarius', label: 'Retiarius', gear: 'Ağ ve trident', beats: 'murmillo' },
  { id: 'dimachaerus', label: 'Dimachaerus', gear: 'Çift kılıç', beats: 'retiarius' },
];

export const STANCES = [
  { id: 'kalabalik', label: 'Kalabalığa oyna', desc: 'Daha çok alkış ve ödül, daha çok yara.', crowd: 1.6, taken: 1.2, dealt: 1.05, pay: 1.5, boredom: 0 },
  { id: 'dengeli', label: 'Dengeli', desc: 'Ne fazla gösteriş ne fazla temkin.', crowd: 1, taken: 1, dealt: 1, pay: 1, boredom: 0 },
  { id: 'hayatta', label: 'Hayatta kal', desc: 'Daha az yara. Ama sıkılan kalabalık zor affeder.', crowd: 0.5, taken: 0.75, dealt: 0.85, pay: 0.75, boredom: 1.5 },
];

export const FERMAN_RULES = [
  { id: 'ag', text: 'Bugün iki taraf da ağ ve tridentle çıkar.', forceArm: 'retiarius', oppArm: 'retiarius' },
  { id: 'kan', text: 'Kalabalık bugün kana susamış: alkış iki kat.', crowdMul: 2 },
  { id: 'cift', text: 'Çift kılıç günü: iki taraf da iki kılıçla çıkar.', forceArm: 'dimachaerus', oppArm: 'dimachaerus' },
  { id: 'kalkan', text: 'Kalkan yasak.', banArm: 'murmillo' },
  { id: 'merhamet', text: 'Oyunları veren senatör bugün cimri: bağışlanma şansı yarıya iner.', spareMul: 0.5 },
  { id: 'vali', text: 'Oyunları bugün vali veriyor: ödül üç kat.', payMul: 3 },
  { id: 'ruzgar', text: 'Rüzgâr kumu kaldırıyor: herkesin isabeti düşük.', hitAdd: -0.12 },
];

export const LUDUS_NAMES = ['Kızıl Kum Ludusu', 'Demir Kapı Ludusu', 'Yaralı Aslan Ludusu', 'Üç Mızrak Ludusu', 'Kara Zeytin Ludusu', 'Tunç Kalkan Ludusu'];

export const STAT_LABELS = { guc: 'Güç', cev: 'Çeviklik', day: 'Dayanıklılık', sov: 'Şov' };
export const STAT_KEYS = ['guc', 'cev', 'day', 'sov'];

export const armById = (id) => ARMS.find((a) => a.id === id) || ARMS[0];
export const stanceById = (id) => STANCES.find((s) => s.id === id) || STANCES[1];
export const injuryById = (id) => INJURIES.find((i) => i.id === id);
export const quirkOf = (g) => (g.quirk >= 0 ? QUIRKS[g.quirk] : null);
