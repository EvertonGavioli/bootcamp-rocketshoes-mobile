import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import color from './styles/colors';
import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={color.dark_primary}
      />
      <Routes />
    </Provider>
  );
}
