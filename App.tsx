import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './android/src/navigation/Drawer'
import LoginScreen from './android/src/screens/Login'
import HomeScreen from './android/src/screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    return(
    
    <NavigationContainer>
        {loggedIn?(
          <HomeScreen setLoggedIn={setLoggedIn}/>
        ):(
          <LoginScreen setLoggedIn={setLoggedIn}/>
        )}
     </NavigationContainer>
    )
}

export default App