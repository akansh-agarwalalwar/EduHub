import React from 'react';
import LandingPage1 from './Components/Landing Page/LandingPage1';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage2 from './Components/Landing Page/LandingPage2';
import LandingPage3 from './Components/Landing Page/LandingPage3';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './Components/Dashboard/HomePage';
import LetYouIn from './Components/Login/LetYouIn';
import GettingStarted from './Components/Login/GettingStarted';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <LetYouIn/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage1" component={LandingPage1} />
        <Stack.Screen name="LandingPage2" component={LandingPage2} />
        <Stack.Screen name="LandingPage3" component={LandingPage3} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Getting Started" component={GettingStarted} />
        <Stack.Screen name="Let U In" component={LetYouIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
