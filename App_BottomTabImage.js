import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Home</Text>
    
    </View>
  )
}

function SettingsScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Setting</Text>
    </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator 
      screenOptions= {({route}) => ({
        tabBarIcon : ({focused,color,size}) => {
          let iconName;
          if(route.name=='Home'){
            iconName= focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline'
          }else if(route.name=='Settings'){
            iconName= focused
            ? 'list-outline'
            : 'ios-list'
          }
          //You can return any component that you like here
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor : 'tomato',
        tabBarInactiveTintColor : 'gray'
      }
      )}
    
    >
      <Tab.Screen name = 'Home' component={HomeScreen}/>
      <Tab.Screen name = 'Settings' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App