import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import New from './components/New'

const App = () => {
  return (
    <View style={styles.container}>
        <FlatList_HeaderFooter/>
        <New/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,   
    justifyContent:'left',    
    alignItems:'left'   
 }
})