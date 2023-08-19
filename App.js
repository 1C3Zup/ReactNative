import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RandomUsersScreen from './components/RandomUsersScreen'


const App = () => {
  return (
    <View style={styles.container}>
        <RandomUsersScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,   
    justifyContent:'center',    
    alignItems:'center'   
 }
})