import { View, Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from './components/pages/FirstPage'
import SecondPage from './components/pages/SecondPage'
import ThirdPage from './components/pages/ThirdPage'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='First'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight:'bold'
          }
        }}
      >
          <Stack.Screen 
            name='First' 
            component={FirstPage} 
            options={{title: 'FirstPage'}}
          />
          <Stack.Screen 
            name='Second' 
            component={SecondPage}
            options={{title: 'SecondPage'}}
          />
          <Stack.Screen 
            name='Third' 
            component={ThirdPage} 
            options={{title: 'ThirdPage'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
      }