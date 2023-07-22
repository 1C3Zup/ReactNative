import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [inputname, setName] = useState('');
    const [inputemail,setEmail] = useState('');
    const checkTextInput = () => {

        if (!inputname.trim()){
          alert('Please Enter Name');
          return;
        }
        else if (!inputemail.trim()){
          alert('Please Enter Email');
          return;
        }
        else{
          alert('Success');
          return;
        }
    };
    
    return (
        <View style = {styles.container}>
          <TextInput
          placeholder = 'Enter Name'
          style = {styles.textInputStyle}
          value = {inputname}
          onChangeText={(value)=>{setName(value)}}
          />
          <Text>{'\n\n'}</Text>
        <TextInput
          placeholder = 'Enter Email'
          style = {styles.textInputStyle}
          value = {inputemail}
          onChangeText={(value)=>{setEmail(value)}}
        />
        <Text>{'\n\n'}</Text>
        <Button
            title='Submit'
            onPress={()=>{checkTextInput()}}
            />   
        </View>
      )
}


export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle: {
        width: 500,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    },
})
