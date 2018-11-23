import React from 'react';
import HomeContainer from './Home/HomeContainer';
import AnimationContainer from './Animation/AnimationContainer';
import MapContainer from './Map/MapContainer';
import { createStackNavigator} from 'react-navigation';

export default createStackNavigator({
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
	AnimationScreen: { screen: AnimationContainer, navigationOptions: { header: null } },
	MapScreen: { screen: MapContainer, navigationOptions: { header: null } },
});	
