import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    
    const [name, setName] = useState('Taylor')
    const [age, setAge] = useState(42)
    

    return (
        <View>
            <TextInput
                style={styles.textInputStyle}
                value = {name}
                onChangeText={(value) => {setName(value)}}
            />
            <Text>{'\n'}</Text>
            <Button
                title='INCREMENT AGE'
                onPress={ () => {
                    setAge(a => a + 1)
                }}
            />
             <Text>{'\n'}</Text>
            <Text>Hello,{name}. You are {age}.</Text>
        </View>
    )
}

export default Form

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