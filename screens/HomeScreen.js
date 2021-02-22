import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";

import { AdMobBanner, AdMobRewarded } from "expo-ads-admob";
export function HomeScreen({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  var d = new Date();
  var n = d.getDay();
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds();
  const [loaded] = useFonts({
    EuclidCircularA_Light: require("../assets/fonts/EuclidCircularA-Light.ttf"),
    EuclidCircularA_Regular: require("../assets/fonts/EuclidCircularA-Regular.ttf"),
    EuclidCircularA_Medium: require("../assets/fonts/EuclidCircularA-Medium.ttf"),
    EuclidCircularA_Bold: require("../assets/fonts/EuclidCircularA-Bold.ttf"),
  });
  const [isLoading, setLoading] = useState(true);
  const [horoscopesData, setHoroscopesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [chance, setChance] = useState([]);
  const [gif, setGif] = useState([]);
  const [ageColor, setAgeColor] = useState("#FFFFFF");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [horoscope, setHoroscope] = useState(0);

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
        setHoroscopesData(json.horoscopesData),
          setCategories(json.categories),
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
          paddingTop: 3,

          flexDirection: "row",

          justifyContent: "center",
          zIndex: 99,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            elevation: 10,
            borderRadius: 15,

            justifyContent: "center",
            alignItems: "center",
            width: 150,
            height: 50,
          }}
        >
          <Image
            style={{ width: 150, height: 50, borderRadius: 15 }}
            source={require("../assets/icons/logo.png")}
          />
        </View>

        <View
          style={{
            width: 80,
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
        <TouchableOpacity
          style={{
            width: 80,
            height: 50,
            backgroundColor: "#FFFFFF",
            elevation: 5,
            borderRadius: 15,
            marginLeft: 14,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("GetCoin")}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/icons/money.png")}
          />
          <View style={{ marginLeft: 2 }}>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontFamily: "EuclidCircularA_Bold",
                textAlign: "center",
              }}
            >
              Coin
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginTop: -3,
                fontFamily: "EuclidCircularA_Bold",
                textAlign: "center",
              }}
            >
              Kazan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <TextInput
              placeholder="Doğum Yılı"
              placeholderTextColor={"#000000"}
              keyboardType={"phone-pad"}
              value={name.toString()}
              onChangeText={(name) => setName(name)}
              maxLength={4}
              style={{
                width: 100,
                height: 50,
                borderRadius: 15,
                padding: 10,
                backgroundColor: "white",
                fontFamily: "EuclidCircularA_Medium",
                elevation: 5,
              }}
            />
            <TextInput
              placeholder="Doğum Saati "
              value={age.toString()}
              onChangeText={(age) => setAge(age)}
              placeholderTextColor={"#000000"}
              keyboardType={"phone-pad"}
              maxLength={2}
              style={{
                width: 158,
                elevation: 5,
                height: 50,
                marginLeft: 15,
                borderRadius: 15,
                padding: 10,
                fontFamily: "EuclidCircularA_Medium",
                backgroundColor: "white",
              }}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: ageColor,
                elevation: 5,
                borderRadius: 15,
                marginLeft: 14,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setAgeColor("#48F6A2");
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/icons/positive-vote.png")}
              />
            </TouchableOpacity>
          </View>
          {(name > 2021 && name.length > 0) ||
          (name < 1900 && name.length > 0) ? (
            <View
              style={{
                width: 330,
                padding: 18,
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
                  fontSize: 14,
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                  textAlign: "center",
                }}
              >
                Lütfen 1900 ile 2021 arasında doğru bir yıl değeri giriniz !
              </Text>
            </View>
          ) : null}
          {age > 24 || name < 0 ? (
            <View
              style={{
                width: 330,
                padding: 18,
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
                  fontSize: 14,
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                  textAlign: "center",
                }}
              >
                Lütfen 0 ile 24 arasında doğru bir saat değeri giriniz !
              </Text>
            </View>
          ) : null}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              flex: 1,
              marginTop: 12,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 1 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(1)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[1].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[1].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 2 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(2)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[2].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[2].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 3 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(3)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[3].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[3].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 4 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(4)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[4].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[4].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 5 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(5)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[5].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[5].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 6 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(6)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[6].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[6].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 7 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(7)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[7].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[7].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 8 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(8)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[8].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[8].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 9 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(9)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[9].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[9].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 10 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(10)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[10].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[10].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 11 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
              }}
              onPress={() => setHoroscope(11)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[11].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[11].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: horoscope == 12 ? "#89E6D2" : "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                elevation: 5,
                marginBottom: 15,
                marginVertical: 3,
                marginRight: 15,
              }}
              onPress={() => setHoroscope(12)}
            >
              {horoscopesData.length > 0 ? (
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75,
                  }}
                  source={{ uri: horoscopesData[12].uri }}
                />
              ) : null}

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Medium",
                }}
              >
                {horoscopesData.length > 0
                  ? horoscopesData[12].title
                  : "data bekleniyor"}
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <View
            style={{
              width: 330,
              padding: 18,
              elevation: 5,
              borderRadius: 15,
              backgroundColor: "#FFFFFF",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 18,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Bold",
              }}
            >
              {horoscopesData.length > 0 ? (
                horoscopesData[horoscope].title + " Burcu"
              ) : (
                <Text>data bekleniyor</Text>
              )}
            </Text>

            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Light",
              }}
            >
              {horoscopesData.length > 0 ? (
                horoscopesData[horoscope].description
              ) : (
                <Text>data bekleniyor</Text>
              )}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[0].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[0].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[0].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[1].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[1].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[1].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[2].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[2].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[2].name}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[3].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[3].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[3].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[4].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[4].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[4].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[5].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[5].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[5].name}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[6].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[6].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[6].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[7].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[7].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[7].name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                width: 100,
                height: 110,
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
                marginLeft: 15,
              }}
              onPress={() =>
                navigation.navigate("MeasureChance", {
                  categoryId: category.category[8].id,
                  horoscopeId: horoscope,
                  horoscopeName: horoscopesData[horoscope].name,
                })
              }
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={category.category[8].img}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 14,
                  textAlign: "center",
                  marginTop: 5,
                  fontFamily: "EuclidCircularA_Bold",
                }}
              >
                {category.category[8].name}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 336,
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
              adUnitID="ca-app-pub-2042926053262017/9919877960" // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds={true}
            />
          </View>
          <View
            style={{
              width: 330,
              padding: 18,
              elevation: 5,
              borderRadius: 15,
              backgroundColor: "#FFFFFF",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 18,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Bold",
              }}
            >
              {horoscopes.horoscopes[horoscope].name} Burcu Günlük Yorum
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                marginTop: 5,
                fontFamily: "EuclidCircularA_Light",
              }}
            >
              {horoscopesData.length > 0 ? (
                horoscopesData[horoscope].dailyComment
              ) : (
                <Text>data bekleniyor</Text>
              )}
            </Text>
          </View>

          <View style={{ flex: 1, height: 30 }}></View>
        </View>
      </ScrollView>
      {/*
      
       <View
        style={{
          width: 320,
          borderRadius: 20,
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <AdMobBanner
          style={{ borderRadius: 30 }}
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      </View>
      
      */}
    </View>
  );
}
