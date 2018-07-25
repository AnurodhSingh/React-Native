'use strict';

import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import Second from './second';
import Third from './third';

const AppNavigator = StackNavigator({
  SecondScreen: { screen: Second ,navigationOptions:{header:null}},
  ThirdScreen: { screen: Third },
});

export default class Main extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}