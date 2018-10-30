import {HomeScreen} from './Home/HomeContainer';

export default AppRoot = createStackNavigator({
	HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
});	
