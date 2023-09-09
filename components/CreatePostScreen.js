import { View, Text, Button, TextInput } from "react-native";
import React from "react";

const CreatePostScreen = ({ navigation }) => {
  const [postText, setPostText] = React.useState("");

  return (
    <View>
      <TextInput
        multiline
        placeholder = "Please say someting about React Native"
        style = {{ height: 200, padding: 10, backgroundColor: "white" }}
        value = {postText}
        onChangeText = {setPostText}
      />
      <Button
        title="Done"
        //Pass and merge params back to index screen
        onPress = {() => {
          navigation.navigate({
            name: "Index",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
};

export default CreatePostScreen;