import React, { Component } from 'react';
import {	
	View,
	TextInput,
	ScrollView,
	Keyboard,
	Alert,
	NetInfo,
	Platform,
	NativeModules,
	SafeAreaView,
	TouchableOpacity,
	Text,
	Image,
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Orientation from 'react-native-orientation';
import showToast from '../../utils/Toast';
import Validators from '../../utils/Validator';
import scale from '../../utils/scale';
import {createBottomTabNavigator} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';

const Home=<MaterialCommunityIcons name='home-outline' size={25}/>
const Browse=<Entypo name='magnifying-glass' size={25}/>
const Library=<Feather name='headphones' size={25}/>
const Bonus=<FontAwesome name='gift' size={25}/>
const Settings=<Ionicons name='md-settings' size={25}/>

const image='@assets/splash/splashScreenBg.png';
const i=[image,image,image];

class HomeScreen extends Component{
	constructor(props) {
		super(props);
	};


	render(){
		return(
		<View style={localStyles.screenContainer}>
						<Image 
							style={{height:100,width:100,}}
							source={image}
						/>
			<Text>
				Home
			</Text>
			<Carousel
              ref={(c) => { this._carousel = c; }}
              data={i}
              renderItem={(item)=>{
				  console.log("",item);
				  return(
					  <View style={{height:100,width:100, backgroundColor:'blue'}}>
						<Image 
							source={require(image)}
						/>
					</View>
				  )
			 	 }
			  }
              sliderWidth={100}
              itemWidth={100}
            />
		</View>
		);
	}
}
class BrowseScreen extends Component{
	constructor(props) {
		super(props);
	};
	render(){
		return(
		<View style={localStyles.screenContainer}>
			<Text>
				Browse
			</Text>
		</View>
		);
	}
}
class LibraryScreen extends Component{
	constructor(props) {
		super(props);
	};
	render(){
		return(
		<View style={localStyles.screenContainer}>
			<Text>
				Library
			</Text>
		</View>
		);
	}
}
class BonusScreen extends Component{
	constructor(props) {
		super(props);
	};
	render(){
		return(
		<View style={localStyles.screenContainer}>
			<Text>
				Bonus
			</Text>
		</View>
		);
	}
}
class SettingsScreen extends Component{
	constructor(props) {
		super(props);
	};
	render(){
		return(
		<View style={localStyles.screenContainer}>
			<Text>
				Settings
			</Text>
		</View>
		);
	}
}



export const Tab= createBottomTabNavigator({
	Home:{screen:HomeScreen, navigationOptions: {
        tabBarLabel: 'HOME',
		tabBarIcon: Home
		}
	},
	Browse:{screen:BrowseScreen , navigationOptions: {
        tabBarLabel: 'BROWSE',
		tabBarIcon: Browse
		}
	},
	Library:{screen:LibraryScreen , navigationOptions: {
        tabBarLabel: 'LIBRARY',
		tabBarIcon: Library
		}
	},
	Bonus:{screen:BonusScreen , navigationOptions: {
        tabBarLabel: 'BONUS',
		tabBarIcon: Bonus
		}
	},
	Settings:{screen:SettingsScreen , navigationOptions: {
        tabBarLabel: 'SETTINGS',
		tabBarIcon: Settings
		}
	}
});

const localStyles=StyleSheet.create({
	screenContainer:{
		flex:.8,
		justifyContent:'center',
		alignItems:'center',
	},
	bottomNavigatorContainer:{
		position:'absolute',
		bottom: 0,
		flex:.2,
		width:400,
		flexDirection:'row',
		alignSelf:'stretch',
		marginBottom:10,
		backgroundColor:'white',
	},
	contentContainer: {
		borderWidth: 2,
		borderColor: '#CCC',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
});
