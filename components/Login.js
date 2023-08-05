import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () => {

        //Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        else if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        //Checked Successfully
        else {
            alert('Success');
        }
    }

    return (
        <View style={styles.container}>
        <TextInput
            placeholder = 'Enter Name'
            style = {styles.textInputStyle}
            value = {textInputName}
            onChangeText = {(value) => {setTextInputName(value)}}
        />
        
        <TextInput
            placeholder = 'Enter Email'
            style = {styles.textInputStyle}
            value = {textInputEmail}
            onChangeText = {(value) => {setTextInputEmail(value)}}
        />
        <Text>{'\n'}</Text>
        <Button
            title='SUBMIT'
            onPress={() => {
                checkTextInput();
            }}
        />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '300px',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
})