import { View, Text, Button } from "react-native";
import React from "react";

const DetilsScreen = ({ route, navigation }) => {
  // 2. Get the param
  const { itemId, otherParam } = route.params;
  return (
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Detail Screen</Text>
    <Text>{"\n"}</Text>
    <Text>itemId : {JSON.stringify(itemId)}</Text>
    <Text>otherParam : {JSON.stringify(otherParam)}</Text>
    <Text>{"\n\n"}</Text>
    <Button
      title="Go to Details...again"
      onPress={() => navigation.push("Details")}
    />
    <Text>{"\n"}</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate("Home")}
    />
    <Text>{"\n"}</Text>
    <Button
      title="Go Back"
      onPress={() => navigation.goBack()}
      onPress={() =>
        navigation.push("Details", {
          itemId: Math.floor(Math.random() * 100),
          otherParam: "anything you want here",
        })
      }
    />
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
  );
  };