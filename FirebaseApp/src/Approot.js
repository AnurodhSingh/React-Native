import React from 'react';
import SignInContainer from './Components/SignIn/SignInContainer';
import LoginContainer from './Components/Login/LoginContainer';
import HomeContainer from './Components/Home/HomeContainer';
import { createStackNavigator} from 'react-navigation';

export default createStackNavigator({
	SignIncreen: { screen: SignInContainer, navigationOptions: { header: null } },
	LoginScreen: { screen: LoginContainer, navigationOptions: { header: null } },
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
});	
