// In MainStackNavigator.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Home from '../screens/Home';
import Admob from '../screens/Admob';
import AdSense from '../screens/AdSense';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admob" component={Admob} />
        <Stack.Screen name="Adsense" component={AdSense} />
      </Stack.Navigator>
    </>
  );
}

export default MainStackNavigator;
