import { Provider } from 'react-redux';
import store from './src/Store/store'; //Import the store
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';

import Login from './src/Components/login_screen';
import SignUp from './src/Components/sign_up_screen';
import Home from './src/Components/home_screen';

const AppNavigator = StackNavigator({
  SignUpScreen: { screen: SignUp ,navigationOptions:{header:null}},
  LoginScreen: { screen: Login ,navigationOptions:{header:null}},
  HomeScreen:{ screen: Home ,navigationOptions:{header:null}}
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}