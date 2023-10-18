/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer navigator
import PrimaryScreen from './src/screens/primary/PrimaryScreen';
import { Platform, StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import BoardingScreen from './src/screens/boarding/createAccont/BoardingScreen';
import LoadingScreen from './src/screens/loading/LoadingScreen';
import LoginBoardingScreen from './src/screens/boarding/loginBoarding/LoginBoardingScreen';
import UsernameLoginScreen from './src/screens/login/UsernameLoginScreen';
import PasswordLoginScreen from './src/screens/login/PasswordLoginScreen';
import Dashboard from './src/screens/dashboard/Dashboard';
import SelectLanguage from './src/screens/createAccount/SelectLanguage';
import CreateAccount from './src/screens/createAccount/CreateAccount';
import AccountSignup from './src/screens/createAccount/AccountSignup';
import Colors from './src/constants/colors';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Boarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Boarding" component={BoardingScreen} />
      <Stack.Screen name="LoginBoarding" component={LoginBoardingScreen} />
      <Stack.Screen name="Primary" component={PrimaryScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

export default function App(){
  
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor}/>
      <NavigationContainer onReady={() => {
        setTimeout(() => {
          RNBootSplash.hide({ fade: true });
        }, 500);
      }}>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Boarding" component={BoardingScreen} />
          <Stack.Screen name="LoginBoarding" component={LoginBoardingScreen} />
          <Stack.Screen name="Primary" component={PrimaryScreen} />
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="UsernameLogin" component={UsernameLoginScreen} />
          <Stack.Screen name="PasswordLogin" component={PasswordLoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name='Signup' component={AccountSignup} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


