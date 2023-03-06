import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './android/app/src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#E5E6E6" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
