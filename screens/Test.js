import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function Test({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [horoscopesData, setHoroscopesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([]);
  const [chance, setChance] = useState([]);
  const [gif, setGif] = useState([]);
  var d = new Date();
  var n = d.getDay();
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds();

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

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{horoscopesData[3].title}</Text>
          <Text>{categories[2].title}</Text>
          <Text>{months[month].title}</Text>
          <Text>{days[n].title}</Text>
          <Text>{chance[2].title}</Text>
          <Text>{gif[3].url}</Text>
          <Text>{2.25 * 3}</Text>
          <TouchableWithoutFeedback
            onPressIn={() => console.log("basılıyor")}
            onPressOut={() => console.log("çekildi")}
          >
            <Text>bassss</Text>
            <Text>{categories[2].oglak}</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}
