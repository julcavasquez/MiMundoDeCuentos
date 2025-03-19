/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';


function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login Pagina" component={Login} />        
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer> 
      <MyStack/>
    </NavigationContainer>
  );
}


export default App;
