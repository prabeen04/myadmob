/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Container from './src/components/Layouts/Contanier';
import MainStackNavigator from './src/Navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={{background: '#eee', color: '#fff'}}>
        <MainStackNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
