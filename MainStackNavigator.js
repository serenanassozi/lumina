import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Register from "../screens/Register"
import Home from '../screens/Homes'
import survey from '../screens/survey'
import Learningaid from '../screens/Learningaid'
import support from '../screens/support'


const Stack = createStackNavigator()
function MainStackNavigator() {
    return (
   
        <Stack.Navigator  initialRouteName='Login'>
        <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Login', headerLeft:null, headerShown: false}}
          />
            <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home', headerShown: false, gestureEnabled: false  }}
          /> 
             <Stack.Screen
            name='survey'
            component={survey}
            options={{ title: 'survey', headerShown: true, gestureEnabled: false  }}
          /> 
           <Stack.Screen
            name='Learning aid'
            component={Learningaid}
            options={{ title: 'Learning aid', headerShown: true, gestureEnabled: false  }}
          /> 
           <Stack.Screen
            name='Support lines'
            component={support}
            options={{ title: 'Support lines', headerShown: true, gestureEnabled: false  }}
          /> 
           
            
        </Stack.Navigator>
     
    )
  }
  
  export default MainStackNavigator