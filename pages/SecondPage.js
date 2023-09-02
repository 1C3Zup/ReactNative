import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>This is Second Page of the app</Text>
      <Text>{'\n'}</Text>
      <Button 
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Go to Second page... again'
        onPress={() => navigation.push('Second')}
      />
      <Button 
        title='Go to First page'
        onPress={() => navigation.navigate('First')}
      />
      <Button 
        title='Go to Third page'
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
            flex: 1,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
    textStyle: {
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16
        }
})