import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


function Feed(){
  return (
    <View style={{flex :1,justifyContent : 'center' , alignItems : 'center'}}>
      <Text>Feed</Text>
    </View>
  )
}
function Profile(){
  return (
    <View style={{flex :1,justifyContent : 'center' , alignItems : 'center'}}>
      <Text>Profile</Text>
    </View>
  )
}
function Notification(){
  return (
    <View style={{flex :1,justifyContent : 'center' , alignItems : 'center'}}>
      <Text>Notification</Text>
    </View>
  )
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      initialRouteName='Feed'
      activeColor='#e91e63'
      labelStyle= {{fontSize:12}}
      style = {{backgroundColor: 'tomato'}}
    >

      <Tab.Screen
       name = 'Feed'
       component= {Feed}
       options={{
        tabBarLabel:'Home',
        tabBarIcon : ({color})=>(
          <MaterialCommunityIcons name='home' color={color} size={26}/>

        )
       }}
      />

<Tab.Screen
       name = 'Notification'
       component= {Notification}
       options={{
        tabBarLabel:'Updates',
        tabBarIcon : ({color})=>(
          <MaterialCommunityIcons name='bell' color={color} size={26}/>

        )
       }}
      />

<Tab.Screen
       name = 'Profile'
       component= {Profile}
       options={{
        tabBarLabel:'Profile',
        tabBarIcon : ({color})=>(
          <MaterialCommunityIcons name='account' color={color} size={26}/>
        )
       }}
      />

    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <View>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </View>
  )
}

export default App