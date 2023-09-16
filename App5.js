import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#008b8b'
        },
        headerTintColor:'#ffff',
        headerBackTitleStyle:{
          fontWeight:'bold',
        }
      }}
    >
        <Stack.Screen 
        name='FirstPage' 
        component={FirstPage}
        options={{title:'First Page'}}
        />

    </Stack.Navigator>
  )
}

function SecondScreenStack() {
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#008b8b'
      },
      headerTintColor:'#ffff',
      headerBackTitleStyle:{
        fontWeight:'bold',
      }
    }}
    >
        <Stack.Screen 
        name='SecondPage' 
        component={SecondPage}
        options={{title:'Second Page'}}
        
        />
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        }
      }}>
      <Drawer.Screen 
        name='FirstDrawer' 
        component={FirstScreenStack}
        options={{drawerLabel:'First Page Option'}}
        />
        
      <Drawer.Screen 
        name='SecondDrawer' 
        component={SecondScreenStack}
        options={{drawerLabel:'Second Page Option'}}
      />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App