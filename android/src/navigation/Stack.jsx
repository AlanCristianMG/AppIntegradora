import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

const MyStack = () => {
  return (

        <Stack.Navigator>
            <Stack.Screen name='Home' component={Dashboard}/>
        </Stack.Navigator>
  )
}

export default MyStack