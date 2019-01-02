import React from 'react';
import SignUpContainer from './Components/SignUp/SignUpContainer';
import LoginContainer from './Components/Login/LoginContainer';
import HomeContainer from './Components/Home/HomeContainer';
import ChatScreenContainer from './Components/ChatScreen/ChatScreenContainer';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import { createStackNavigator} from 'react-navigation';

export default createStackNavigator({
	SplashScreen: { screen: SplashScreen, navigationOptions: { header: null } },
	SignUpScreen: { screen: SignUpContainer, navigationOptions: { header: null } },
	LoginScreen: { screen: LoginContainer, navigationOptions: { header: null } },
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
	ChatScreen: { screen: ChatScreenContainer, navigationOptions: { header: null } },
});	
