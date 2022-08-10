import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Splash,Onboarding,Login} from './src/screens'
import Splash from './src/screens/Splash';
import Home from './Home';
// import Home from '../Home';


const Stack = createNativeStackNavigator();



const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} /> */}
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App