/**
 * @author Systanto Technologies
 * Date August 2, 2018 
 * Description: Splash Screen.
 * 
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';
import * as CONST from '../../utils/Const';
import screen from '@utils/screen';
import { NavigationActions, StackActions } from 'react-navigation';
const splashLogo = require('@assets/splash/splashScreenLogo.png');
const splashBgImg = require('@assets/splash/splashScreenBg.png');

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount () {
		setTimeout (() => {
			const resetAction = StackActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'SigninScreen'})
				]
			});
			this.props.navigation.dispatch(resetAction);
		}, 3000); 
	}
	render() {
		return (
			<View style={styles.container}>
				<Image source={splashBgImg} style={styles.backgroundImage} />
				<View style={{flex:3, justifyContent: 'center', alignItems: 'center' }}>
					<Image source={splashLogo}/>
				</View>
				<View style={{flex:7}}/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: CONST.WHITE_COLOR,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', 
		width: screen.WIDTH, 
		height: screen.HEIGHT, 
		position: 'absolute', 
	},
	SplashImage: {
		flex: 1,
		width: null,
		height: null,
	}
});
