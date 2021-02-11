import * as React from "react";
import { View, Text, Button, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-community/async-storage";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screenssss</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Coin kazan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 20,
          width: 120,
          height: 110,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/icons/love.png")}
        />

        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -20,
            marginBottom: 5,
          }}
        >
          Aşk
        </Text>
      </TouchableOpacity>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}
