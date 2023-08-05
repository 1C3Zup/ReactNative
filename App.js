import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Example_useEffect from './components/Example_useEffect'
import UseEffectFlatList from './components/UseEffectFlatList'

const App = () => {
  return (
    <View style={styles.container}>
        <UseEffectFlatList/>
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