import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Accept,
  ForgotPass,
  LoginScreen,
  OnBoardingScreen,
  SignUpScreen,
} from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Accept" component={Accept} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
