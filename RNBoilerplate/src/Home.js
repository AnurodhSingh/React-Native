/**
 * @author Tushar K Sarkar
 * Jan 18, 2018
 * Root Navigator For App
 * 
 */

import {createStackNavigator} from 'react-navigation';
import SplashScreen from './components/SplashScreen';
import SigninContainer from './components/Signin/SigninContainer';
import HomeContainer from './components/Home/HomeContainer';
import LogInSuccess from './components/Home/LogInSuccess'
import {Tab} from './components/Signin/TabScreen'

const navigationOptions = {
	headerStyle: {
		backgroundColor: '#f4511e',
		height: 50,
		justifyContent: 'center',
		elevation: 0,
		
	},
	headerTitleStyle: {
		justifyContent: 'flex-end',
		fontWeight: 'bold',
	},
	headerTintColor: '#FFFFFF',
};

export default  Home = createStackNavigator({
	
	// SplashScreen: {screen: SplashScreen, navigationOptions: { header: null }},
	SigninScreen: {screen:SigninContainer, navigationOptions:{header:null}},
	HomeScreen: { screen: HomeContainer}, 
	LogInSuccess : {screen : LogInSuccess},
	Tab: { screen : Tab , navigationOptions: ({ navigation }) =>{
			let focusedRouteName = navigation.state.routes[navigation.state.index].routeName;	
			return {title:`${focusedRouteName} Page`}
		}
	}
});	