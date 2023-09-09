import { View, Text, Button } from "react-native";
import React from "react";

const IndexScreen = ({ navigation, route }) => {
  //Post updated, do something with 'route.params.post'
  //For example, sent the post to the server
  React.useEffect(() => {
    if (route.params?.post) {

    }
  }, [route.parms?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate({
            name: 'CreatePost'
          })
        }}
      />
      <Text>Post: {route.params?.post}</Text>
    </View>
  );
};

export default IndexScreen;