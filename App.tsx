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
import LoginPin from './screens/LoginPin';
import Home from './screens/Home';
import LoadingScreen from './screens/Loading';
import CrearCuento from './screens/CrearCuento';
import RegistroUsuario from './screens/RegistroUsuario';

function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator
          screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="LoginPin" component={LoginPin} /> 
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} 
                options={{ title: 'Registrarse', headerShown: true,
                headerStyle: { backgroundColor: '#6EE7B7' },
                headerTintColor: '#000',
                headerTitleStyle: { fontSize: 24, fontFamily: 'Baloo2-Bold' }
               }}/>       
        <Stack.Screen 
               name="CrearCuento" 
               component={CrearCuento} 
               options={{ title: 'Crear Cuento', headerShown: true,
                headerStyle: { backgroundColor: '#6EE7B7' },
                headerTintColor: '#000',
                headerTitleStyle: { fontSize: 24, fontFamily: 'Baloo2-Bold' }
               }}
               />    
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
