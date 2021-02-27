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
import { useFonts } from "expo-font";

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

  const { categoryId, horoscopeId } = route.params;

  const [chanceStatus, setChanceStatus] = useState(0);
  const [ownChance, setOwnChance] = useState(1);
  const [ownChanceYes, setOwnChanceYes] = useState("#FFFFFF");
  const [ownChanceNo, setOwnChanceNo] = useState("#FFFFFF");
  const [chanceDataWidth, setchanceDataWidth] = useState(208);
  const [isLoading, setLoading] = useState(true);
  const [horoscopesData, setHoroscopesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [chance, setChance] = useState([]);
  const [gif, setGif] = useState([]);
  const [CurrentGif, setCurrentGif] = useState(
    "https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif"
  );
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
    let a = Math.ceil(
      categories[categoryId].horoscope[horoscopeId] *
        (Math.floor(Math.random() * 10) / 20 + 2.5) *
        days[n].horoscope[horoscopeId] *
        months[month].horoscope[horoscopeId] *
        ownChance
    );
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

    if (a >= 0 && a <= 20) {
      setCurrentGif(chance[0].url);
    } else if (a >= 21 && a <= 40) {
      setCurrentGif(chance[1].url);
    } else if (a >= 41 && a <= 60) {
      setCurrentGif(chance[2].url);
    } else if (a >= 61 && a <= 80) {
      setCurrentGif(chance[3].url);
    } else if (a >= 81 && a <= 90) {
      setCurrentGif(chance[4].url);
    } else if (a >= 91 && a <= 100) {
      setCurrentGif(chance[5].url);
    } else null;
  }

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
        name: "Güneş",
      },
      {
        id: "1",
        name: "Oğlak",
      },
      {
        id: "2",
        name: "Kova",
      },
      {
        id: "3",
        name: "Balık",
      },
      {
        id: "4",
        name: "Koç",
      },
      {
        id: "5",
        name: "Boğa",
      },
      {
        id: "6",
        name: "İkizler",
      },
      {
        id: "7",
        name: "Yengeç",
      },
      {
        id: "8",
        name: "Aslan",
      },
      {
        id: "9",
        name: "Başak",
      },
      {
        id: "10",
        name: "Terazi",
      },
      {
        id: "11",
        name: "Akrep",
      },
      {
        id: "12",
        name: "Yay",
      },
    ],
  };

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
    AdMobRewarded.setAdUnitID("ca-app-pub-2042926053262017/4120756372"); // Test ID, Replace with your-admob-unit-id

    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {});
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {});
    AdMobRewarded.requestAdAsync({ servePersonalizedAds: true }).then(
      AdMobRewarded.showAdAsync()
    );
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
          <Text
            style={{
              fontFamily: "EuclidCircularA_Medium",
              fontSize: 16,
              textAlign: "center",
              width: 300,
              marginTop: 20,
            }}
          >
            Sürpriz dolu bir güne hazır mısınız ? 😊
          </Text>
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
            <Text
              style={{
                color: "black",
                fontSize: 16,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Bold",
                textAlign: "center",
              }}
            >
              {category.category[categoryId - 1].name}
            </Text>
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
          <View style={{ marginLeft: 8, marginTop: 1 }}>
            <Text
              style={{
                color: "black",
                fontSize: 23,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Bold",
                textAlign: "center",
              }}
            >
              99
            </Text>
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
                setOwnChance(1.0001);
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
          {ownChance == 1 ? (
            <View
              style={{
                width: 330,
                padding: 12,
                elevation: 5,
                borderRadius: 15,
                backgroundColor: "#F63536",
                alignSelf: "center",
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontFamily: "EuclidCircularA_Medium",
                  textAlign: "center",
                }}
              >
                Eğer şanslı hissedip hissetmediğini işaretlersen daha doğru
                sonuçlar verebiliriz 😊
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
                    uri: CurrentGif,
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
                  {chancePointDaily > 0 && chancePointDaily <= 20
                    ? chance[0].horoscopeNames[horoscopeId]
                    : chancePointDaily >= 21 && chancePointDaily <= 40
                    ? chance[1].horoscopeNames[horoscopeId]
                    : chancePointDaily >= 41 && chancePointDaily <= 60
                    ? chance[2].horoscopeNames[horoscopeId]
                    : chancePointDaily >= 61 && chancePointDaily <= 80
                    ? chance[3].horoscopeNames[horoscopeId]
                    : chancePointDaily >= 81 && chancePointDaily <= 90
                    ? chance[4].horoscopeNames[horoscopeId]
                    : chancePointDaily >= 91 && chancePointDaily <= 100
                    ? chance[5].horoscopeNames[horoscopeId]
                    : null}
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
              adUnitID="ca-app-pub-2042926053262017/4475979592" // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
