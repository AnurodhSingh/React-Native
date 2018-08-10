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
import SettingsScreen from './DrawerScreen';

const Home=<MaterialCommunityIcons name='home-outline' size={25}/>
const Browse=<Entypo name='magnifying-glass' size={25}/>
const Library=<Feather name='headphones' size={25}/>
const Bonus=<FontAwesome name='gift' size={25}/>
const Settings=<Ionicons name='md-settings' size={25}/>

const image='https://placeimg.com/200/200/animals';
const i=[image,image,image];

class HomeScreen extends Component{
	constructor(props) {
		super(props);
		this.state={
			entry:['https://placeimg.com/200/200/animals','https://loremflickr.com/320/240','https://loremflickr.com/320/240/dog','https://loremflickr.com/320/240/brazil,rio'],
		}
	};
	_renderItem(item,index)
	{
		return(
			<View>
			  <Image 
				  style={{height:150,width:150}}
				  source={{uri:item}}
			  />
		  	</View>
	  	)
	}
	render(){
		return(
		<ScrollView style={localStyles.screenContainer}>
				<View style={localStyles.sliderContainer}>
					<Text style={localStyles.sliderHeader}>
						Continue Listening
					</Text>
					<View style={localStyles.CarouselContainer}>
						<Carousel
							firstItem={1}
							data={this.state.entry}
							renderItem={({item,index})=>this._renderItem(item,index)}
							sliderWidth={400}
							itemWidth={150}
							layout={'default'}
						/>
					</View>
				</View>
				<View style={localStyles.sliderContainer}>
					<Text style={localStyles.sliderHeader}>
						Recently Added
					</Text>
					<View style={localStyles.CarouselContainer}>
						<Carousel
							firstItem={1}
							data={this.state.entry}
							renderItem={({item,index})=>this._renderItem(item,index)}
							sliderWidth={400}
							itemWidth={150}
							layout={'default'}
						/>
					</View>
				</View>
				<View style={localStyles.sliderContainer}>
					<Text style={localStyles.sliderHeader}>
						Featured
					</Text>
					<View style={localStyles.CarouselContainer}>
						<Carousel
							firstItem={1}
							data={this.state.entry}
							renderItem={({item,index})=>this._renderItem(item,index)}
							sliderWidth={400}
							itemWidth={150}
							layout={'default'}
						/>
					</View>
				</View>
				<View style={localStyles.sliderContainer}>
					<Text style={localStyles.sliderHeader}>
						Popular
					</Text>
					<View style={localStyles.CarouselContainer}>
						<Carousel
							firstItem={1}
							data={this.state.entry}
							renderItem={({item,index})=>this._renderItem(item,index)}
							sliderWidth={400}
							itemWidth={150}
							layout={'default'}
						/>
					</View>
				</View>
		</ScrollView>
		);
	}
}
class BrowseScreen extends Component{
	constructor(props) {
		super(props);
		this.state={
			entry:['https://placeimg.com/200/200/animals','https://loremflickr.com/320/240','https://loremflickr.com/320/240/dog','https://loremflickr.com/320/240/brazil,rio'],
		}
	};
	_renderItem(item,index)
	{
		return(
			<View>
			  <Image 
				  style={{height:150,width:150}}
				  source={{uri:item}}
			  />
		  	</View>
	  	)
	}
	render(){
		return(
			<ScrollView style={localStyles.screenContainer}>
				<View style={localStyles.sliderContainer}>
					<Text style={localStyles.sliderHeader}>
						Continue Listening
					</Text>
					<View style={localStyles.CarouselContainer}>
						<Carousel
							firstItem={1}
							data={this.state.entry}
							renderItem={({item,index})=>this._renderItem(item,index)}
							sliderWidth={400}
							itemWidth={150}
							layout={'default'}
						/>
					</View>
				</View>
			</ScrollView>
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

export const Tab= createBottomTabNavigator({
		Home:{screen:HomeScreen},
		Browse:{screen:BrowseScreen},
		Library:{screen:LibraryScreen},
		Bonus:{screen:BonusScreen},
		Settings:{screen:SettingsScreen}
	},
	{
	navigationOptions: ({ navigation }) => (
		{title:'Hello'},
		{
			tabBarLabel:() => {
				const { routeName } = navigation.state;
				let title='';
				if (routeName === 'Home') {
					title = 'HOME';
				} else if (routeName === 'Browse') {
					title = 'BROWSE';
				}else if (routeName === 'Library') {
					title = 'BROWSE';
				}else if (routeName === 'Bonus') {
					title = 'BONUS';
				}else if (routeName === 'Settings') {
					title = 'SETTINGS';
				}
				return <Text>{title}</Text>;
			},
			tabBarIcon:() => {
				const { routeName } = navigation.state;
				switch(routeName)
				{
					case 'Home': {
						return <MaterialCommunityIcons name='home-outline' size={25}/>
					} 
					case 'Browse': {
						return <Entypo name='magnifying-glass' size={25}/>
					}
					case 'Library': {
						return <Feather name='headphones' size={25}/>
					}
					case 'Bonus': {
						return <FontAwesome name='gift' size={25}/>
					}
					case 'Settings': {
						return <Ionicons name='md-settings' size={25}/>
					}
				}
			},
		}),
	}
);
const localStyles=StyleSheet.create({
	screenContainer:{
	},
	sliderContainer:{
	},
	sliderHeader:{
		fontSize:20,
		fontWeight:'bold',
		padding:10,
	},
	CarouselContainer:{
		margin:10,
	},
});
