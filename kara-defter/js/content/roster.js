// The 50 creatures' skeleton: traits per dimension and the two tools that work on them.
// Columns: id | name | dert | kurban | iz | tanik | zaman | yer | sebep | tools   (comma = several values)
// Prose (lore, aka, clue variants, hunt scenes) lives in ./bestiary-*.js, keyed by id.
const TABLE = `
albasti       | Albastı          | erime    | lohusa              | islak,sac      | uzun_sacli          | kirk,gece_yarisi    | oda,su             | yalniz              | demir,kurdele
karabasan     | Karabasan        | erime    | uyuyan              | morluk         | golge               | ayni_saat           | oda                | sozsuz              | demir,soz
karakoncolos  | Karakoncolos     | kayip    | hane,yolcu          | tirnak,buyuk_iz| killi,cagiran       | zemheri             | esik               | cevap               | ates,kalbur
gulyabani     | Gulyabani        | kayip    | yolcu,coban         | tirnak,kil     | killi,dev           | aysiz               | harabe,mezarlik    | yalniz_yol          | igne,safak
hortlak       | Hortlak          | erime    | yas_evi             | mezar          | olu                 | kirk,ayni_saat      | mezarlik,esik      | usulsuz_gomu        | demir,tuz
ecinni        | Ecinni           | carpilma | hane,kadin          | yele,ters      | kalabalik           | gece_yarisi         | hamam,ocak         | sozsuz              | soz,safak
suanasi       | Su Anası         | kayip    | cocuk               | islak,sac      | uzun_sacli,cagiran  | aksam               | su                 | sozsuz              | adak,sessizlik
carsamba      | Çarşamba Karısı  | carpilma | kadin               | dagin          | kocakari            | carsamba            | ocak               | yasak_is            | ayna,tuz
obur          | Obur             | mal      | hayvan,hane         | mezar,kan      | olu                 | dolunay             | mezarlik,ahir      | usulsuz_gomu        | igne,tuz
cadi          | Cadı             | mal      | hayvan,lohusa       | sut            | kocakari,hayvan     | dolunay             | ahir               | ovunmek             | kursun,supurge
tepegoz       | Tepegöz          | olum     | coban               | buyuk_iz,kan   | dev,tek_goz         | ogle                | dag,magara         | izinsiz             | ates,igne
yelmoguz      | Yelmoğuz         | olum     | cocuk,yolcu         | kan            | kocakari            | aksam               | orman,yol          | yalniz_yol          | ayna,igne
dev           | Dev              | kayip    | delikanli           | buyuk_iz       | dev                 | ogle                | dag,kuyu           | izinsiz             | soz,tuz
devanasi      | Dev Anası        | kayip    | delikanli,yolcu     | buyuk_iz       | dev,kocakari        | aksam               | magara             | izinsiz             | soz,ates
peri          | Peri Kızı        | carpilma | genc_kiz,delikanli  | halka          | guzel,kalabalik     | bahar,gece_yarisi   | su,agac            | izinsiz             | soz,kurdele
umaci         | Umacı            | kayip    | cocuk               | buyuk_iz       | golge               | aksam               | esik               | yalniz              | ates,supurge
surale        | Şürale           | olum     | yolcu,ciftci        | kil            | killi,kahkaha       | aksam               | orman              | agac_kesmek,yalniz_yol | demir,sessizlik
bicura        | Biçura           | mal      | hane                | dagin          | ufak                | gece_yarisi         | ocak,ahir          | izinsiz             | supurge,tuz
yuha          | Yuha             | olum     | delikanli           | deri           | guzel,yilan         | dolunay             | orman              | yabanci             | ayna,ardic
bakirtirnak   | Bakırtırnak      | olum     | yolcu,delikanli     | tirnak,kan     | guzel               | aksam               | su,yol             | yabanci             | demir,ayna
eviyesi       | Ev İyesi         | mal      | hane                | dagin          | ufak                | ayni_saat           | ocak,oda           | kirlilik            | adak,supurge
ahiriyesi     | Ahır İyesi       | mal      | hayvan              | yele           | ufak,gorunmez       | gece_yarisi         | ahir               | yabanci             | adak,kalbur
hamamiyesi    | Hamam İyesi      | carpilma | kadin,delikanli     | islak          | golge               | gece_yarisi         | hamam              | yalniz              | soz,ardic
degirmeniyesi | Değirmen İyesi   | olum     | ciftci              | islak,yosun    | golge,kahkaha       | gece_yarisi         | degirmen           | adak_unutmak        | demir,ardic
agaciyesi     | Ağaç İyesi       | carpilma | ciftci              | kuru           | gorunmez            | ogle                | agac               | agac_kesmek         | adak,soz
odana         | Od Ana           | mal      | kadin,hane          | kul            | alev                | aksam               | ocak               | ates                | adak,ardic
yelana        | Yel Ana          | mal      | ciftci              | dagin          | gorunmez            | firtina             | tarla,yol          | ovunmek             | demir,adak
evren         | Evren            | olum     | coban,hane          | deri,buyuk_iz  | yilan,dev           | firtina             | su,magara          | adak_unutmak        | ates,tuz
sahmeran      | Şahmeran         | kayip    | delikanli           | deri           | yilan,guzel         | dolunay             | magara,kuyu        | kiymak              | sessizlik,soz
evyilani      | Ev Yılanı        | mal      | hane                | deri           | yilan               | ogle                | ocak,esik          | kiymak              | sessizlik,kurdele
kurtadam      | Kurtadam         | olum     | coban,yolcu         | pence,kan      | killi,hayvan        | dolunay             | dag,orman          | yalniz_yol          | ates,kursun
ummusibyan    | Ümmüsıbyan       | carpilma | cocuk,lohusa        | morluk         | golge,hayvan        | gece_yarisi         | oda                | yalniz              | kursun,kurdele
kayberen      | Kayberen         | kayip    | avci                | kan            | hayvan              | safak               | dag                | fazla_av            | adak,safak
uor           | Üör              | korku    | hane,yas_evi        | dagin          | olu,cagiran         | ayni_saat           | yol,esik           | haksiz_olum         | ardic,tuz
abasi         | Abası            | erime    | hane,yolcu          | kan            | tek_goz,golge       | zemheri,aysiz       | orman              | yalniz_yol          | ates,ardic
yeriyesi      | Yer İyesi        | carpilma | ciftci,defineci     | kuru           | gorunmez            | ogle                | tarla              | izinsiz             | adak,tuz
dagiyesi      | Dağ İyesi        | kayip    | coban,avci          | buyuk_iz       | gorunmez,dev        | firtina             | dag                | ovunmek             | ardic,kurdele
almasti       | Almastı          | mal      | hayvan              | yele,kil       | killi               | aksam               | ahir,orman         | izinsiz             | igne,kalbur
sulmus        | Şulmus           | carpilma | yolcu               | kul            | golge               | aksam               | yol,harabe         | yalniz_yol          | kursun,ardic
ifrit         | İfrit            | olum     | defineci            | kul            | alev,dev            | aysiz               | harabe             | define              | soz,ayna
karakedi      | Kara Kedi        | carpilma | kadin,hane          | pence          | hayvan              | gece_yarisi         | ocak,esik          | kiymak              | soz,supurge
suaygiri      | Su Aygırı        | kayip    | delikanli           | islak,yosun    | at                  | dolunay             | su                 | yabanci             | demir,kalbur
kuyuanasi     | Kuyu Anası       | kayip    | cocuk               | yosun          | cagiran,uzun_sacli  | ogle                | kuyu               | yalniz              | kalbur,tuz
ekiniyesi     | Ekin İyesi       | mal      | ciftci              | kuru           | kocakari,gorunmez   | harman              | tarla              | adak_unutmak        | adak,kurdele
karakopek     | Kara Köpek       | olum     | yolcu,yas_evi       | pence          | hayvan              | aysiz               | yol,mezarlik       | haksiz_olum         | ates,safak
kormos        | Körmös           | erime    | hane                | kul            | olu                 | ayni_saat           | ocak               | olu_unutmak         | adak,ates
kiremet       | Kiremet          | mal      | ciftci,hane         | kan,kuru       | gorunmez            | bahar               | agac,orman         | adak_unutmak        | kurdele,ates
sirtlan       | Sırtlan          | kayip    | uyuyan,yolcu        | pence          | hayvan              | aysiz               | magara,yol         | yalniz_yol          | ates,demir
denizkizi     | Deniz Kızı       | olum     | denizci             | yosun          | guzel,cagiran       | firtina,dolunay     | deniz              | ovunmek             | kurdele,tuz
definebekcisi | Define Bekçisi   | carpilma | defineci            | mezar,kul      | golge,ufak          | gece_yarisi         | harabe,mezarlik    | define              | kursun,tuz
`;

const DIM_ORDER = ['dert', 'kurban', 'iz', 'tanik', 'zaman', 'yer', 'sebep'];

export const ROSTER = TABLE.trim().split('\n').map((line) => {
  const cols = line.split('|').map((s) => s.trim());
  const [id, name] = cols;
  const traits = {};
  DIM_ORDER.forEach((dim, i) => { traits[dim] = cols[2 + i].split(',').map((s) => s.trim()); });
  return { id, name, traits, tools: cols[9].split(',').map((s) => s.trim()) };
});
