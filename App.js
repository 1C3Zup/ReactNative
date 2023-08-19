import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'


const App = () => {
  return (
    <View style={styles.container}>
        <FlatList_HeaderFooter/>
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