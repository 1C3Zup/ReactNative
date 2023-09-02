import { View, Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './components/DeatilsScreen'

const App = () => {
  return (
    <View>
      <New/>
      <ProductScreen/>
    </View>
  )
}