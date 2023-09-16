import { View, Text, Button } from 'react-native'
import React from 'react'

const FirstPage = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>This is the First Page the app</Text>
          <Text>{'\n'}</Text>
          <Button
            title="Go to Second Page"
            onPress={() => navigation.navigate('Second')}
          />
        </View>
      )
}


export default FirstPage