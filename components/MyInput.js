import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const MyInput = () => {

    const [text, setText] = useState('')
  return (
    <View style={styles.container}>
        <TextInput
            placeholder = 'Enter Text'
            style = {styles.textInputStyle}
            value = {text}
            onChangeText={(value) => {setText(value)}}
        />
        <Text>{'\n\n'}You typed: {text}</Text>
        <Text>{'\n\n'}</Text>
        <Button
            title='RESET'
            onPress={() => setText('Hello')}
        />
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
})