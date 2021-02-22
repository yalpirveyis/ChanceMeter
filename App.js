// In App.js in a new project

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./screens/HomeScreen";
import { GetCoinScreen } from "./screens/GetCoinScreen";
import { MeasureChanceScreen } from "./screens/MeasureChanceScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="GetCoin"
          component={GetCoinScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MeasureChance"
          component={MeasureChanceScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
