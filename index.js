
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';


import Rotas from './src/components/rotas';

export default class App extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app6', () => App);