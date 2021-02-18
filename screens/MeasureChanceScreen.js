import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import { AdMobBanner, AdMobRewarded } from "expo-ads-admob";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";

import AsyncStorage from "@react-native-community/async-storage";
import TextRegular from "../components/textBold";
export function MeasureChanceScreen({ navigation, route }) {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const [loaded] = useFonts({
    EuclidCircularA_Light: require("../assets/fonts/EuclidCircularA-Light.ttf"),
    EuclidCircularA_Regular: require("../assets/fonts/EuclidCircularA-Regular.ttf"),
    EuclidCircularA_Medium: require("../assets/fonts/EuclidCircularA-Medium.ttf"),
    EuclidCircularA_Bold: require("../assets/fonts/EuclidCircularA-Bold.ttf"),
  });

  const { categoryId, horoscopeId, horoscopeName } = route.params;
  const horoscopeNameEng = route.params.horoscopeName;
  const [categoryPoint, setCategoryPoint] = useState(0);
  const value = "kova";
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [horoscope, setHoroscope] = useState(0);
  const [chanceStatus, setChanceStatus] = useState(0);
  const [ownChance, setOwnChance] = useState(1);
  const [ownChanceYes, setOwnChanceYes] = useState("#FFFFFF");
  const [ownChanceNo, setOwnChanceNo] = useState("#FFFFFF");
  const [chanceDataWidth, setchanceDataWidth] = useState(208);
  const [coin, setCoin] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [horoscopesData, setHoroscopesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [chance, setChance] = useState([]);
  const [gif, setGif] = useState([]);
  const [chancePointDaily, setChancePointDaily] = useState(0);

  var d = new Date();
  var n = d.getDay();
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds();

  function chancePointDailyFunc() {
    categories.length > 0
      ? setChancePointDaily(
          Math.ceil(
            categories[categoryId].horoscope[horoscopeId] *
              (Math.floor(Math.random() * 10) / 20 + 2.5) *
              days[n].horoscope[horoscopeId] *
              months[month].horoscope[horoscopeId] *
              ownChance
          )
        )
      : null;
  }
  const [coinStore, setCoinStore] = useState("");
  const category = {
    category: [
      {
        id: "1",
        name: "Günlük",
        img: require("../assets/category/day-and-night.png"),
      },
      {
        id: "2",
        name: "İş",
        img: require("../assets/category/suitcase.png"),
      },
      {
        id: "3",
        name: "Yatırım",
        img: require("../assets/category/investment.png"),
      },
      {
        id: "4",
        name: "Şans Oyunu",
        img: require("../assets/category/casino.png"),
      },
      {
        id: "5",
        name: "Aşk",
        img: require("../assets/category/love.png"),
      },
      {
        id: "6",
        name: "Yarışma",
        img: require("../assets/category/winner.png"),
      },
      {
        id: "7",
        name: "Oyun",
        img: require("../assets/category/game-console.png"),
      },
      {
        id: "8",
        name: "Sınav",
        img: require("../assets/category/exam.png"),
      },
      {
        id: "9",
        name: "Bitcoin",
        img: require("../assets/category/bitcoin.png"),
      },
    ],
  };
  const horoscopes = {
    horoscopes: [
      {
        id: "0",
        name: "Burcunuzu",
        date: "Seçiniz",
        desc: "",
        img: "../assets/horoscopes/love.png",
      },
      {
        id: "1",
        name: "Oğlak",
        date: "(22 Aralık- 21 Ocak)",
        desc:
          "22 Aralık ve 21 Ocak aralığı Oğlak burcu tarihi olarak kabul edilir ve bu tarihler arasında toprak grubunun kararlı yapısıyla dikkat çeken burcu olarak karşımıza çıkar. Direniş doğal olarak yapısında bulunan oğlak burcu tarihi yeni burç tarihlerine göre 20 Ocak- 15 Şubat aralığını kapsıyor ve tam olarak 27 gün döngüsünde sayılıyor. Yükseklere ulaşmak ve zirvede kalmayı hedefleyen Oğlak burcu kişilerinin çok fazla meraklı olması çoğu zaman sevilmez. Ancak kararlı yapısı ve önlem almadan duramıyor olması çoğu zaman risklerden kolayca kurtulmasını sağlayabilir. Satürn yönetici yıldızı etkisinde ilerleyen bu burca sahip kişilerin çok güçlü değer yargıları vardır. Sabırlı yapıları ve sorumluluk duygusu yüksek kişiler olması nedeniyle de olaylar ve kişiler karşısında soğukkanlı bir şekilde kalabilirler. İş hayatlarına fazla düşkün olan Oğlaklar eğer dengeyi iyi kuramazsa özel hayatlarını ihmal edebilirler. Rahatlığa fazlasıyla önem verdikleri için hayatlarının her alanında keyifli olmaya özen gösterirler. Genellikle koyu saç rengine sahip olan Oğlak burcu kişilerinin özellikle de çene hatları oldukça keskin olur. İlerleyen yaşlarda da bu durumun giderek oturmaya başlaması özellikle erkek Oğlaklara karizmatik bir hava katabilir.",
        img: require("../assets/horoscopes/oglak.png"),
      },
      {
        id: "2",
        name: "Kova",
        date: "(22 Ocak- 19 Şubat)",
        desc:
          "Yeni burç tarihleri 2021 yılına göre Kova 25 günlük döngüsünü 16 Şubat- 12 Mart aralığında alır fakat geçerli kabul edilen 12 burca göre 22 Ocak ve 19 Şubat aralığını kabul ediyoruz. Hava grubuna dahil olan Kovaların en bilinen özelliği sağduyulu olması. İnsancıl yapıları ve her koşulda iradeli kalabilmeleri sayesinde ilerlemek için yeni fırsatlar yaratabilen kişiler genellikle bu burç tarihleri arasında doğmuş olarak karşımıza çıkar. Yardımsever yapıları nedeniyle karşılarına çıkan zor durumda bulunan kişilere anında koşmaya çalışırlar. Paraya değer vermek asla onlara göre değildir ki bu nedenle bazen cömertliğin ucunu kaçırabilirler. En kötü özellik olarak ihmalciliği gösterebiliriz. Yapıları daha rahat ve değişken olduğu için sorumluluk duyguları diğer burçlara oranla daha azdır demek yanlış olmaz. Kavga ve gürültüden mümkün olduğunca kaçan Kovalar, barışın önemli olduğunu bilen ve uygulamaya çalışan kişilerdir. Bağımsızlık duygusuna kendilerini fazlasıyla kaptırdıkları için ister iş hayatı ister özel hayat olsun, kapana kısılmış gibi hissetmekten hiç hoşlanmazlar. Bir Kova ile yakın ilişkiler kurmak istiyorsanız ilk bilmeniz gereken şey ona her saniye hesap sormamak olduğudur.",
        img: require("../assets/horoscopes/kova.png"),
      },
      {
        id: "3",
        name: "Balık",
        date: "(20 Şubat- 20 Mart)",
        desc:
          "Aşırı duygusal olmaları ile tanınan Balıkların en güzel özelliği çok iyi empati yapabiliyor olmalarıdır. Karşılarındaki kişileri hemen anlayabilen, aşırı derecede anlayışlı davranan hatta çoğu zaman iyi niyeti suiistimal edilen bu burca sahip kişilerin bir diğer iyi özelliği de hislerinin çok güçlü olmasıdır. Sezgileri ve insancıl yaklaşımlarıyla her ortamda kendini belli edebilen Balıkların sanata olan ilgileri de oldukça fazla. Hayatları boyunca huzurdan başka hiçbir şeye değer vermezler ve huzurlu hissettikleri kişi/olay karşısında her şeyden vazgeçebilirler. Sevdiklerine karşı ilgi ve alakası yüksek olan bu kişiler hayatlarında naif ve sevgiden anlayan kişilerin bulunmasını arzular. Su grubunda yer alan Balık burcu canlı ve daima neşeli haliyle de ilgi görür fakat bu durum anlıktır. Beş dakika önce ağlayan bir Balık bir süre sonra kahkahalar atabilir. Duygularına göre durumlar karşısında şekillenen bu kişiler için her ne kadar hayalci denilse de aslında gerçek hayata bakışları da bir o kadar gerçekçidir. Sadece hayal kurmadan yaşamaları imkânsız olan bu burca sahip kişiler çoğu zaman gözyaşlarına hâkim olamazlar ve tozpembe hayallerinden vazgeçmek istemezler. En kötü özelliği kendini küçümsemek olan Balıklar her koşulda verici olmayı tercih ettikleri için bazen hayal kırıklığı yaşayabilirler. Son olarak da yeni burç tarihleri 2018 sıralamasına göre 13 Mart- 18 Nisan aralığında doğanlar Balık kabul ediliyor.",
        img: require("../assets/horoscopes/balik.png"),
      },
      {
        id: "4",
        name: "Koç",
        date: "(21 Mart- 20 Nisan)",
        desc:
          " Hayatında hareket, canlılık ve kıpır kıpırlığın eksik olmadığı Koç’lar için macera olmayan bir hayat kesinlikle çekilmez. Bu burcun genel özelliklerine bakacak olursak; cesaretli ve atılgan yapıları nedeniyle yeni girişimlere korkusuzca daldıklarını söyleyebiliriz. Herhangi bir konuda öncü olmak, karşılarındaki kişilere yol göstermekten hoşlanmaları da şüphesiz liderlik özelliğini taşıyor olmaktan geliyor. Her koşulda başarı ve zafer kazanmayı kendilerine amaç edinen Koç burcu kişilerinin en sevilmeyen özelliği maalesef sabırsız olmalarına dayanıyor. İçi içine sığmayan, durumların içine hemen dalabilme özelliklerini sabırsız yapıları tetikliyor. Bazen bu sabırsız yapılarından dolayı hatalara düşseler de burç tarihleri bakımından yönetici gezegenleri Mars olduğu için savaşçı yapıları kaybetmelerine izin vermez. Tüm özellikleri düşünülerek özel hayatları hakkında yorum yapmak gerekirse; heyecanlı, tutkulu ve cinselliğin çok ön planda ilerlediği bir hayat onlar için olmazsa olmazlar arasında gösterilebilir.",
        img: require("../assets/horoscopes/koc.png"),
      },
      {
        id: "5",
        name: "Boğa",
        date: "(21 Nisan- 21 Mayıs)",
        desc:
          "Toprak grubunda yer alan Boğa burcu her zaman ne istediğini bilen burçlar arasında yer alıyor. Hayata dair istediklerini çok net belirleyebilen, amaçlarını sıralamada sıkıntı yaşamayan ve sürekliliğe önem veren Boğa burcu için çoğu astrolog “Zenginlik burcu; boğadır.” İfadesini kullanıyor. Bildiğiniz gibi burçların tarihleri kişilerin özelliklerini yöneterek ilerliyor. Bu sebeple Boğa burcunu incelediğimiz zaman karşımıza ilk çıkan şey; yönetici yıldız olarak Venüs’e sahip olması oluyor. Venüs ise güzellik, sevgi ve sanatı temsil eder. Yani Boğa burcu olan kişilerin ilgi alanları ve istekleri bu doğrultuda gelişir. Arkadaşlık ve dostluk onlar için fazlasıyla önemli iken koruyucu özellikleri sebebiyle bazen karşı tarafı fazlasıyla baskı altına alabilirler. Sıcakkanlı olmaları sebebiyle çok kolay arkadaşlık kurabilen Boğaların dostlukları genellikle çok uzun yıllar sürer. Sevdikleri için her türlü şeyi göze alabilme özelliklerinin yanında kırılgan ve alıngan bir yapıları da bulunur. Hassas bir ruha sahip oldukları için çoğu zaman gereksiz alınganlık yapabilirler. Ancak gelecek için herhangi bir Boğa kadını ya da erkeği ile hayatınızı birleştirmek istiyorsanız burç tarihleri ve özellikleri arasında evlilik için Boğalar ile çok doğru bir karar verdiğinizi bilmelisiniz.",
        img: require("../assets/horoscopes/boga.png"),
      },
      {
        id: "6",
        name: "İkizler",
        date: "(22 Mayıs- 22 Haziran)",
        desc:
          "Burç tarihleri 22 Mayıs ile 22 Haziran aralığını gösterdiğinde karşımıza çıkan burç hava grubundan olan İkizler oluyor. Pozitif yapısı ve keskin zekâsı ile kendinden söz ettiren bu burca sahip olan kişilerin en belirgin özelliği yönetici gezegeni Merkür’ün ona sunduğu canlılık ve zekâsı oluyor. İkizler, ün yapmaktan büyük keyif alan burçlar arasında yer alır. Gazetecilik veya çok ünlü bir yazar olmak hem yeni bir şeyler üretmek hem de kendi isimlerini herkese duyurmak hayatta amaçladıkları şeyler arasında yer alır. Zekasını yeteneklerine göre kullanabilen pek çok İkizler burcunun yenmesi gereken tek şey sürekli konuşması olarak kabul edilebilir. İçerisinde bulunan enerji ve neşeyi etrafına konuşarak yayabilen İkizler’in bazen çok konuşuyor olması çevresine rahatsızlık verebilir. İletişimi çok iyi olan bu kişilerin geleceğe dair yatırımları iletişimi yüksek işlere yapmasında fayda var. İkili özel ilişkilerinde de oldukça hareketli olan ikizlerin hayat temposuna yetişmek pasif kişiler için oldukça zor bir seçim olabilir.",
        img: require("../assets/horoscopes/ikizler.png"),
      },
      {
        id: "7",
        name: "Yengeç",
        date: "(23 Haziran- 22 Temmuz)",
        desc:
          "Burçlar ve tarihleri açısından 23 Haziran ile 22 Temmuz tarihleri arasında dünyaya gelen Yengeç burcuna sahip kişiler merhametli, iyi niyetli ve yumuşak başlı özellikleriyle dikkat çekiyor. Oldukça sabırlı ve koruyucu özelliği bulunan Yengeç burcundan bir tanıdığa sahip olmak gerçekten dünyanın en güzel hediyelerinden biri sayılabilir. Duyguları çok hızlı değişen bir burç olmasına rağmen hayatlarında yer edinen kişilere karşı hep iyi yaklaşımlar sergilerler. Tek olumsuz özellik olarak aşırı dikkatsiz olmalarını söyleyebiliriz. Fiziksel açıdan genellikle orta boylu ve beyaz tenli olan Yengeçler ilerleyen günlerde beslenmelerine dikkat etmek zorunda kalabilirler. Genellikle Oğlak burcu ile çok iyi anlaşamazlar. Güven ve saygı onlar için çok önemlidir ve aile hayatında bu iki kavramın yer almasına özen gösterirler.",
        img: require("../assets/horoscopes/yengec.png"),
      },
      {
        id: "8",
        name: "Aslan",
        date: "(23 Temmuz- 22 Ağustos)",
        desc:
          "Her ne kadar da yeni burç tarihleri sıralamasında 11 Ağustos- 16 Eylül aralığı Aslan burcu kabul ediliyor olsa da normal sıralaması 23 Temmuz- 22 Ağustos olarak kabul edilir. Bu sebeple biz yeni tarihler değil, normal kabul gören tarihlere göre Aslan burcunu yorumlayacak olursak; yönetici yıldızı güneş olarak ateş grubunun güçlü burçlarından biridir diyebiliriz. Plan kurmak, herhangi bir olayı organize etmek tam da Aslan burcuna sahip kişilere özel bir yetenek. Yaratıcılıklarını aşırı detaycı olmalarıyla birleştiren bu kişilerin gözünden kaçabilecek en ufak bir detay bile bulunmuyor. Oldukça cömert olan bu kişiler hayat emeli olarak hep yüksekleri hedefler. Her ne iş yapıyorlarsa yapsınlar en iyisi olmak, yüksekleri arzulamak tam da onlara göre bir durum. Bu durum çoğu zaman kendilerini aşırı beğenme olarak geri dönerek etrafındakileri rahatsız etse de pozitiflikleri ile her koşulda kendilerini kabul ettirmeyi başarırlar.",
        img: require("../assets/horoscopes/aslan.png"),
      },
      {
        id: "9",
        name: "Başak",
        date: "(23 Ağustos- 22 Eylül)",
        desc:
          "Toprak grubunun zekâsı ve titizliği ile dikkat çeken Başak burcu disiplinli yapısıyla da her ortamda kendini belli edebilir. Aşırıya kaçarsa fazlasıyla takıntılı olabilecek Başaklar genellikle titizlikleriyle gurur duyar. Etrafındaki her şeyle ilgili olan bu burcun beğenilmek ve takdir görmek hayatlarında en değer verdiği şeylerden biri olarak karşımıza çıkar. Başarıya ve yükselmeye önem verirler ve asla aynı noktada saymak onlara göre değildir. Her ne kadar bazen çekingenlikleri ağır basıyor olsa da çoğu yolu başarma inancıyla azimle aşarlar. Zekâsı ve olayları bakış açısıyla hep ilerleme hedefleyen bu kişileri kısıtlamaya çalışmak yapılabilecek en büyük hata olur. İçine kapanık bir duruş sergilemiş olsalar da en yakınlarına karşı oldukça cana yakın bir bakış açısı sergilerler. Temizlik, aşırı çalışkanlık ve hep düzenli olmaktan yana olan Başaklar asla dağınık insanlarla yan yana olmak istemez. Genellikle tutumlu davranışlar sergileyen bazı Başaklar için pinti olduğu söylenir fakat bu durum kesinlikle doğru değildir. Sadece kime ne derece önem verecek ne derece harcamalarını değiştirecek bunun kararını kendileri verirler. Mükemmellik onlar için çok önemli olduğu için hayatlarının her alanında ince noktalara takılarak ilerler ve hayatlarında öncelik sırası her zaman iş hayatı olur.",
        img: require("../assets/horoscopes/basak.png"),
      },
      {
        id: "10",
        name: "Terazi",
        date: "(23 Eylül- 22 Ekim)",
        desc:
          "Güzellik ve lüksten hoşlandığı bilinen Terazilerin aslında en önemli özelliği dengeli olmaları. Hayatlarında ve ilişkilerinde dengeye fazlasıyla önem veren bir teraziyi kıskaca almaya çalışmak yapılabilecek en hatalı davranışlar arasında gösterilebilir. Çok seviyeli bir arkadaşlık kurabilen Teraziler her ortamda kendini belli edebilen ve aranan kişiler arasında yer alır. Özellikle erkekleri için fazlaca çapkın olduğunu söyleyebiliriz fakat bir kez severlerse tam anlamıyla sevdiklerini de belirtelim. Dış görünüşlerine önem veren ve karşı taraftan da aynı inceliği arayan bu burcun kişileri gösterişli şeylerden çok fazla hoşlanır. Hava grubunda yer alan Terazilerin hayatından sevgi eksik olmamalı ve çoğu zamanını sevgiye dayalı işlerde harcaması gerekir. Sanat ile araları iyi olan bu kişilerin saygılı ve zarif duruşları etraflarındaki kişileri etkilemede kullandıkları bir silah. Fiziksel anlamda hem Terazi kadınları hem de erkekleri oldukça çekici bir görünüme sahiptir. Temizlik ve bakımlı olmaya özen gösteren ve aynı şeyi karşı taraftan da bekleyen Teraziler genellikle uzun boylu ve beyaz tenli olurlar.",
        img: require("../assets/horoscopes/terazi.png"),
      },
      {
        id: "11",
        name: "Akrep",
        date: "(23 Ekim- 21 Kasım)",
        desc:
          "Akrep burcu tarihi 23 Ekim- 21 Kasım aralığı olarak kabul ediliyor fakat yeni burç tarihleri açısından sadece 6 günlük dilim Akreplere ayrılıyor. Bu tarihlere göre 24 Kasım- 29 Kasım aralığı yeni Akrep burcu tarihi kabul ediliyor. Su grubunun en acımasız ve korkulan burcu sayılan Akrepler kararlılığı, inatçılığı ve intikam alma duygusunu yüksek oranda taşıyor olmasıyla da göz korkutan burçlar arasında gösterilebilir. Mars ve Plüton yönetici yıldızına sahip bu burcun sezgileri fazlasıyla güçlü olup, olayları inceleme şekli de fazlasıyla detaycı denilebilir. Tutkulu, şehvet seven ve savaşa savaş taktiğini kullanan Akrepler için yenilgiyi kabullenmek oldukça zor bir durum. Çekici, cazibeli ve yeni şartlara kolay uyum sağlama özelliği ile ortamlarda dikkati üstüne çekebilen Akrepler birini umursamıyor ise ihmal etme, erteleme ve umursamama düzeyleri yükselebilir. Korkusuz ve acımasız olmaları ise en olumsuz özellikleri arasında gösterilebilir. Tuttuğunu kopartabilen Akrepler eğer içlerinde yanan ateşi dizginlemeyi öğrenemezlerse kendilerine zarar vermeye başlarlar. Koç burcundan olanlar ile araları çok iyi değildir.",
        img: require("../assets/horoscopes/akrep.png"),
      },
      {
        id: "12",
        name: "Yay",
        date: "(22 Kasım- 21 Aralık)",
        desc:
          "Çoğu durumda “Kendini beğenmiş” olarak mimlenen Yaylar çoğu zaman karşı taraftaki kişileri küçümser. Bu sebeple bir Yay erkek veya kadının gerçekten tanımıyorsanız kesinlikle elektrik alamayabilirsiniz. Tanıdıkça aslında kendini beğenmişlik durumunun kendilerine hissettikleri güvenden olduğunu anlayabilirsiniz. Bazı kişilerde narsistik düzeyine ulaşan kendini beğenme durumu, bazı kişilerde daha dengeli ve iyimser boyutta kabul edilebilir. Araştırmacı kişilikleri nedeniyle yeni şeyler öğrenmek, yeni yerler gezmek ve keşifler yapmak tam olarak da ateş grubunun güçlü burçlarından Yay’a göredir. Yaptıkları işlerde, arkadaş ortamlarında ve hayatın genel olarak her alanında ünlü olmayı seven bu burç kişileri aynı zamanda oldukça girişken bir yapıya sahiptirler. Kendilerine olan aşırı güveniyle asla her olaya anında atılan yayların ellerinden bir uçan bir kaçan kurtulabilir. Öncü olmak ve olayları yönetmeye bayılan Yay burcu kişileri kendisi gibi olan insanlarla kolay kolay anlaşamaz ve genellikle İkizler burcundan kişilerle arkadaşlık kurmaları çok zor olur. Bu nedenle çevrelerinde genellikle yönetilebilecek kişiler bulunur. Giyim konusunda da standart tarzlardan hoşlanmayan ve kendilerine has kıyafetleri taşımaktan hoşlandıklarını söyleyebiliriz.",
        img: require("../assets/horoscopes/yay.png"),
      },
    ],
  };
  /*

  useEffect(() => {
    AsyncStorage.getItem("coinStore").then((value) => setCoinStore(value));
    AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
    AdMobRewarded.requestAdAsync();

    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
      console.log("kazandı");
      setCoin(coin + 1);
      AsyncStorage.setItem("coinStore", coin);
    });
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      console.log("erken çıktın");
    });
  });
*/
  useEffect(() => {
    fetch("https://www.creatooll.com/category.json")
      .then((response) => response.json())
      .then((json) => {
        setHoroscopesData(json.horoscopesData), setCategories(json.categories);
        setMonths(json.months),
          setDays(json.days),
          setChance(json.chance),
          setGif(json.gif);
      })

      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading == true) {
    if (!loaded) {
      return (
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/gifs/loading.gif")}
          />
        </View>
      );
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        opacity={1}
        style={{
          width: windowWidth,
          height: 50.1,
          marginTop: 24,

          flexDirection: "row",

          justifyContent: "center",
          zIndex: 99,
          paddingTop: 3,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#FFFFFF",
            elevation: 5,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons/go-to-work.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            elevation: 10,
            borderRadius: 15,

            justifyContent: "center",
            alignItems: "center",
            width: 178,
            height: 50,

            marginLeft: 15,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={category.category[categoryId - 1].img}
          />
          <View style={{ marginLeft: 5 }}>
            <TextRegular fontSize={16}>
              {category.category[categoryId - 1].name}
            </TextRegular>
          </View>
        </View>

        <View
          style={{
            width: 80,
            height: 50,
            backgroundColor: "#FFFFFF",
            elevation: 5,
            borderRadius: 15,
            marginLeft: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons/wallet.png")}
          />
          <View style={{ marginLeft: 8, marginTop: 8 }}>
            <TextRegular fontSize={26}>3</TextRegular>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,

          position: "relative",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              width: 338,
              height: 50,
              borderRadius: 15,
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
          >
            <Text
              style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
            >
              Şansını ölçemeye hazır mısın?😊
            </Text>
          </View>
          {horoscopeId == 0 ? (
            <View
              style={{
                width: 338,
                height: 50,
                borderRadius: 15,
                backgroundColor: "#F63536",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 14,
                marginTop: 15,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "EuclidCircularA_Medium",
                  fontSize: 12,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Bir önceki sayfadan burcunu seçersen sana daha doğru sonuçlar
                gösterebiliriz😊
              </Text>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <View
              style={{
                width: 208,
                height: 50,
                borderRadius: 15,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 14,
                elevation: 5,
              }}
            >
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Bugün kendini bu konuda şanslı hissediyor musun ? 😊
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: ownChanceYes,
                elevation: 5,
                borderRadius: 15,
                marginLeft: 14,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setOwnChance(1.234);
                setOwnChanceYes("#48F6A2");
                setOwnChanceNo("#FFFFFF");
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotateZ: "30deg" }],
                }}
                source={require("../assets/icons/positive-vote.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: ownChanceNo,
                elevation: 5,
                borderRadius: 15,
                marginLeft: 14,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setOwnChance(1);
                setOwnChanceNo("#F63536");
                setOwnChanceYes("#FFFFFF");
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotateZ: "-150deg" }],
                }}
                source={require("../assets/icons/positive-vote.png")}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            {chanceStatus == 0 ? (
              <View
                style={{
                  width: 208,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 14,
                  elevation: 5,
                }}
              >
                <Text
                  style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
                >
                  Şansını ölçmek için basılı tut. En iyi hissettiğin anda bırak.
                </Text>
              </View>
            ) : chanceStatus == 1 ? (
              <View
                style={{
                  width: chanceDataWidth,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "white",

                  elevation: 5,
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  style={{
                    width: chanceDataWidth,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 14,
                  }}
                  source={require("../assets/gifs/color.gif")}
                >
                  <Text
                    style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
                  >
                    Şansın ölçülüyor ...
                  </Text>
                </ImageBackground>
              </View>
            ) : (
              <View
                style={{
                  width: chanceDataWidth,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 14,
                  elevation: 5,
                }}
              >
                <Text
                  style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
                >
                  Şansın % {chancePointDaily > 0 ? chancePointDaily : null}
                </Text>
              </View>
            )}
            {chanceStatus == 0 ||
            (chanceStatus == 1 && categories.length > 0) ? (
              <TouchableWithoutFeedback
                onPressIn={() => {
                  setChanceStatus(1);
                  chancePointDailyFunc();
                }}
                onPressOut={() => {
                  setChanceStatus(2);
                  setchanceDataWidth(338);
                }}
              >
                <View
                  style={{
                    width: 115,
                    height: 50,
                    backgroundColor: "#FFFFFF",
                    elevation: 5,
                    borderRadius: 15,
                    marginLeft: 14,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={require("../assets/icons/fast.png")}
                  />
                </View>
              </TouchableWithoutFeedback>
            ) : null}
          </View>
          {chanceStatus == 2 ? (
            <View>
              <View
                style={{
                  width: 338,
                  height: 210,
                  borderRadius: 15,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 14,
                  marginTop: 15,
                  elevation: 5,
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{ width: 338, height: 210 }}
                  source={{
                    uri:
                      "https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif",
                  }}
                />
              </View>
              <View
                style={{
                  width: 338,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 14,
                  marginTop: 15,
                  elevation: 5,
                }}
              >
                <Text
                  style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
                >
                  Sende biliyorsun ki bu ölçüm kesinlik ifade etmiyor eğlenmene
                  bak mutlu kal 😊
                </Text>
              </View>
            </View>
          ) : null}
          <View
            style={{
              width: 338,
              height: 120,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontFamily: "EuclidCircularA_Medium",
                fontSize: 12,
                marginBottom: 15,
              }}
            >
              Seni reklamlar ile sıkmak istemiyoruz ama bu reklamın ilgline
              çekebileceğini düşünüyoruz 😊
            </Text>
            <AdMobBanner
              style={{ backgroundColor: "white" }}
              bannerSize="banner"
              adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
