import {StyleSheet,Text,View,Image,TouchableOpacity,SafeAreaView} from "react-native";
import React from "react";
  
  const TouchablePractice = () => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.FacebookStyle}>
            <Image
              style={styles.ImageIconStyle}
              source={require("../assets/facebook.png")}
            />
            <View style={styles.IconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.GooglePlusStyle}>
            <Image
              style={styles.buttonImageIconStyle}
              source={require("../assets/google-plus.png")}
            />
            <View style={styles.IconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default TouchablePractice;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 30,
      padding: 30,
    },
    GooglePlusStyle: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#dc4e41",
      borderWidth: 0.5,
      borderColor: "#fff",
      height: 40,
      width: '100%',
      borderRadius: 5,
      margin: 5,
  
    },
    FacebookStyle: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#485a96",
      borderWidth: 0.5,
      borderColor: "#fff",
      height: 40,
      width: '100%',
      borderRadius: 5,
      margin: 5,
    },
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: "stretch",
    },
    buttonTextStyle: {
      color: "#fff",
      marginBottom: 4,
      marginLeft: 10,
    },
    IconSeparatorStyle: {
      backgroundColor: "#fff",
      width: 1,
      height: 40,
    },
  });