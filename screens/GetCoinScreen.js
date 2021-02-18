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

import { AdMobBanner, AdMobRewarded } from "expo-ads-admob";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";

import AsyncStorage from "@react-native-community/async-storage";
import TextRegular from "../components/textBold";
export function GetCoinScreen({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const [loaded] = useFonts({
    EuclidCircularA_Light: require("../assets/fonts/EuclidCircularA-Light.ttf"),
    EuclidCircularA_Regular: require("../assets/fonts/EuclidCircularA-Regular.ttf"),
    EuclidCircularA_Medium: require("../assets/fonts/EuclidCircularA-Medium.ttf"),
    EuclidCircularA_Bold: require("../assets/fonts/EuclidCircularA-Bold.ttf"),
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [horoscope, setHoroscope] = useState(0);

  const [coin, setCoin] = useState(0);

  const [coinStore, setCoinStore] = useState("");

  console.log(windowHeight);
  console.log(windowWidth);

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
            source={require("../assets/icons/money.png")}
          />
          <View style={{ marginLeft: 12 }}>
            <TextRegular fontSize={16}>Coin Kazan</TextRegular>
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
              Bu bölümde reklam izleyerek coin kazanabilr ve şansını ölçmeye
              devam edebilirsin 😊
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 338,
              height: 110,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
            onPress={() => navigation.navigate("ShowAds")}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/icons/tv.png")}
            />
            <View style={{ width: 211, marginLeft: 15 }}>
              <Text
                style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
              >
                Reklam İzle
              </Text>
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Bu bölümde reklam izleyerek coin kazanabilr ve şansını ölçmeye
                devam edebilirsin 😊
              </Text>
              <Text
                style={{
                  fontFamily: "EuclidCircularA_Bold",
                  fontSize: 12,
                  color: "red",
                }}
              >
                + 2 Coin
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: 338,
              height: 110,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/icons/ads.png")}
            />
            <View style={{ width: 211, marginLeft: 15 }}>
              <Text
                style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
              >
                Siteyi Ziyaret Et
              </Text>
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Siteyi ziyaret et. Bir göz at bizimde sana hediyemiz 2 coin😊
              </Text>

              <Text
                style={{
                  fontFamily: "EuclidCircularA_Bold",
                  fontSize: 12,
                  color: "red",
                }}
              >
                Çok yakında
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 338,
              height: 110,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/icons/youtube.png")}
            />
            <View style={{ width: 211, marginLeft: 15 }}>
              <Text
                style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
              >
                Youtube Videosunu İzle{" "}
              </Text>
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Bu videoyu izle ve kanala bir göz at. Bizimde sana hediyemiz 3
                coin😊
              </Text>
              <Text
                style={{
                  fontFamily: "EuclidCircularA_Bold",
                  fontSize: 12,
                  color: "red",
                }}
              >
                Çok yakında
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 338,
              height: 110,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/icons/playstore.png")}
            />
            <View style={{ width: 211, marginLeft: 15 }}>
              <Text
                style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
              >
                Pro Hesaba Geç
              </Text>
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Pro hesaba geçerek coin aramak zorunda kalmazsın 😊
              </Text>
              <Text
                style={{
                  fontFamily: "EuclidCircularA_Bold",
                  fontSize: 12,
                  color: "red",
                }}
              >
                Çok yakında
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 338,
              height: 110,
              borderRadius: 15,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 14,
              marginTop: 15,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/icons/debit-card.png")}
            />
            <View style={{ width: 211, marginLeft: 15 }}>
              <Text
                style={{ fontFamily: "EuclidCircularA_Bold", fontSize: 12 }}
              >
                Kredi Kartı
              </Text>
              <Text
                style={{ fontFamily: "EuclidCircularA_Medium", fontSize: 12 }}
              >
                Kredi kartın ile dilediğince coin alabilirsin😊
              </Text>
              <Text
                style={{
                  fontFamily: "EuclidCircularA_Bold",
                  fontSize: 12,
                  color: "red",
                }}
              >
                Çok yakında
              </Text>
            </View>
          </View>
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
