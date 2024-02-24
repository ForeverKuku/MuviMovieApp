import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen';
import GetStarted from './src/screen/GetStarted';
import WelcomeScreen from './src/screen/WelcomeScreen';
import SignInScreen from './src/screen/SignInScreen';
import CreateAccount from './src/screen/CreateAccount';
import HomeScreen from './src/screen/HomeScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;