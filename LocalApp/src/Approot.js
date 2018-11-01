import React from 'react';
import HomeContainer from './Home/HomeContainer';
import AnimationContainer from './Animation/AnimationContainer';
import { createStackNavigator} from 'react-navigation';

export default AppRoot = createStackNavigator({
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
	AnimationScreen: { screen: AnimationContainer, navigationOptions: { header: null } },
});	
