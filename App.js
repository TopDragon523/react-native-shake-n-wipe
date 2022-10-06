/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigator from './App/navigators/MainNavigator';
import { AuthProvider } from './App/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  )
};

export default App;
