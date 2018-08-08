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
	Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Orientation from 'react-native-orientation';
import showToast from '../../utils/Toast';
import Validators from '../../utils/Validator';
import scale from '../../utils/scale';

export default class HomeComponent extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
		
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
							Home Page
				</Text>
			</View>
		);
	}
}


HomeComponent.propTypes = {
	navigation: PropTypes.object,
	token: PropTypes.string,
};