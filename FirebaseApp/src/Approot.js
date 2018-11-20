import React from 'react';
import SignUpContainer from './Components/SignUp/SignUpContainer';
import LoginContainer from './Components/Login/LoginContainer';
import HomeContainer from './Components/Home/HomeContainer';
import ChatScreenContainer from './Components/ChatScreen/ChatScreenContainer';
import { createStackNavigator} from 'react-navigation';

export default createStackNavigator({
	SignUpScreen: { screen: SignUpContainer, navigationOptions: { header: null } },
	LoginScreen: { screen: LoginContainer, navigationOptions: { header: null } },
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
	ChatScreen: { screen: ChatScreenContainer, navigationOptions: { header: null } },
});	
