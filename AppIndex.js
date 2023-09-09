import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./components/screens/IndexScreen";
import CreatePostScreen from "./components/screens/CreatePostScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="model"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008b8b",
          },

          headerTintColor: "#ffff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "MainPage" }}
        />

        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;