import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function TextRegular(props) {
  const [loaded] = useFonts({
    EuclidCircularA: require("../assets/fonts/EuclidCircularA-Bold.ttf"),
    EuclidCircularA_Light: require("../assets/fonts/EuclidCircularA-Light.ttf"),
    EuclidCircularA_Regular: require("../assets/fonts/EuclidCircularA-Regular.ttf"),
    EuclidCircularA_Medium: require("../assets/fonts/EuclidCircularA-Medium.ttf"),
    EuclidCircularA_Bold: require("../assets/fonts/EuclidCircularA-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "EuclidCircularA",
        color: props.color,
        fontSize: props.fontSize,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
}
