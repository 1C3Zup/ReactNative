import { StyleSheet, Text, View ,TextInput, Button} from 'react-native'
import React, { useState } from 'react'

const Form = () => {

    const [age,setAge] = useState(42);
    const [text,setText] = useState('Taylor');


  return (
    <View style ={styles.container}>
       <TextInput
        placeholder='Enter Text'
        style = {styles.textInputStyle}
        value = {text}
        onChangeText={(value)=>{setText(value)}}
        />
        <Text>{'\n\n'}</Text>
        <Button  
        title='Increment age'
        onPress={() => {setAge(age+3)}}
        />
        <Text>{'\n\n'}</Text>
        <Text>Hello,{text} You are {age}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }

})