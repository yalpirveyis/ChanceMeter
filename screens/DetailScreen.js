
import * as React from "react";
import { View, Text,Button } from "react-native";

export function DetailScreen({ navigation })  {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}