import React from 'react';
import LandingPage1 from './Components/Landing Page/LandingPage1';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage2 from './Components/Landing Page/LandingPage2';
import LandingPage3 from './Components/Landing Page/LandingPage3';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './Components/Dashboard/HomePage';
import LetYouIn from './Components/Login/LetYouIn';
import LetSignIn from './Components/Login/LetSignIn';
import SignUp from './Components/Login/SignUp';
import FillYourProfile from './Components/Login/FillYourProfile';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <LetSignIn/>
    // <SignUp/>
    // <LetYouIn/>
    <FillYourProfile />
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="LandingPage1" component={LandingPage1} />
    //     <Stack.Screen name="LandingPage2" component={LandingPage2} />
    //     <Stack.Screen name="LandingPage3" component={LandingPage3} />
    //     <Stack.Screen name="Home Page" component={HomePage} />
    //     <Stack.Screen name="Let U In" component={LetYouIn} />
    //     <Stack.Screen name="Let Sign In" component={LetSignIn} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="SignIn" component={LetSignIn} />
    //     <Stack.Screen name="Fill Your Profile" component={FillYourProfile} />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
