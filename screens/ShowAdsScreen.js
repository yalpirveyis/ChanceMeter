import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from "expo-ads-admob";
export function ShowAdsScreen({ navigation }) {
  useEffect(() => {
    AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id

    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
      console.log("kazandı");
    });
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {});
    AdMobRewarded.requestAdAsync({ servePersonalizedAds: true }).then(
      AdMobRewarded.showAdAsync()
    );
  });

  return <View style={{ flex: 1, padding: 24 }}></View>;
}
