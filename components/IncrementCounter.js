import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web';

const IncrementCounter = () => {
  
    const [age,setAge] = useState(23);

    const increment = () => {
        setAge(a => a+1);
    }

    return (
    <View style={styles.container}>
        <Text style={{fontSize:24,fontStyle:'bold'}}>
            Your age: {age}
        </Text>
        <Text>{'\n\n'}</Text>
        <Button  
        title='+1'
        onPress={() => {increment()}}
        />
         <Text>{'\n\n'}</Text>
        <Button  style = {styles.buttonStyle}
        title='+3'
        onPress={() => {
            increment()
            increment()
            increment()
        }}
        />
    </View>
    )
}

export default IncrementCounter

const styles = StyleSheet.create({
    container:{
        padding:35
    },
    buttonStyle :{
        borderWidth:0.5,
        paddingHorizontal:5
    }
})