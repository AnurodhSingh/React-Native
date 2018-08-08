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
import Video from 'react-native-video-controls';

const video = require('@assets/local.mp4');
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
							New Video Page
				</Text>
				<Video source={require('@assets/local.mp4')}   // Can be a URL or a local file.
					ref={(ref) => {
						this.player = ref
					}}                                      // Store reference
					onBuffer={this.onBuffer}                // Callback when remote video is buffering
					onEnd={this.onEnd}                      // Callback when playback finishes
					onError={this.videoError}               // Callback when video cannot be loaded
					style={styles.backgroundVideo} 
				/>
				<TouchableOpacity
					onPress={null}
				>
					<Text>
						{`Stop`}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


HomeComponent.propTypes = {
	navigation: PropTypes.object,
	token: PropTypes.string,
};