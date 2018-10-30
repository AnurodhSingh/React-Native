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
import StatusBarBackgroundIOS from '../StatusBar';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Mail from 'react-native-vector-icons/Entypo';
import Logo from 'react-native-vector-icons/FontAwesome';

import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk'

const splashLogo = require('@assets/splash/splashScreenLogo.png');

export default class SigninComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			email: 'hanuman@systango.com',
			password: '12345',
			isSelected: false
		};
	}

	_onFocus(value) {
		this.setState({
			isSelected: value
		});
	}

	_onSubmit() {
		const { email, password } = this.state;
		if (Validators.isEmpty(email)) {
			showToast('Please enter a valid email address.');
			this.email.focus();
		} else if (!Validators.validEmail(email)) {
			showToast('Please enter a valid email address.');
			this.email.focus();
		} else if (Validators.isEmpty(password)) {
			showToast('Please enter a valid password.');
			this.password.focus();
		} else {
			Keyboard.dismiss;
			this.props.onSigninClicked(email, password);
		}
	}
	
	componentWillMount()
	{
		// getCurrentUser = async () => {
		// 	try {
		// 	  const user = await GoogleSignin.currentUserAsync();
		// 	  this.setState({ user });
		// 	} catch (error) {
		// 	  console.error(error);
		// 	}
		//   };
	}

	loginWithGoogle()
	{
		GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
			alert('available');
		})
		.catch((err) => {
		  console.log("Play services error", err.code, err.message);
		})

		GoogleSignin.configure({
			iosClientId:'707982056829-ite21ih67cld03ke5ankofjr2eo79no2.apps.googleusercontent.com'
		  }).then(() => {
			GoogleSignin.signIn().then((user)=>{
				console.log("$$$$$$$",user);
				alert('Login Successfull');
				this.setState({ user });
				this.props.navigation.navigate('HomeScreen');
			}).catch(()=>{
				alert('Login Fail');
			})
		  });
	}
	signOutFromGoogle(){
		GoogleSignin.signOut()
		.then(() => {
			  alert('Successfully Logout');
		})
		.catch((err) => {
			alert('Logout Failed');
		});
	}
	loginWithFacebook(){
		LoginManager.logInWithReadPermissions(['public_profile']).then(
			function(result) {
			  if (result.isCancelled) {
				alert('Login cancelled');
			  } else {
				alert('Login success with permissions: '
				  +result.grantedPermissions.toString());
				  this.props.navigation.navigate('HomeScreen');
			  }
			},
			function(error) {
			  alert('Login fail with error: ' + error);
			}
		);
	}
	render() {
		return (
			<View style={localStyles.container}>
				<View style={localStyles.imageContainer}>
					<Image source={splashLogo}/>
				</View>
				<View style={localStyles.bodyContainer}>
					<View style={localStyles.headingContainer}>
						<Text style={localStyles.heading}>Create an Account</Text>
					</View>
					<View style={localStyles.emailBoxContainer}>
						<View style={[localStyles.icon,{borderColor:'grey',borderWidth:1}]}>
							<Mail name="mail" size={30} color="grey"/>
						</View>
						<View style={{borderColor:'grey',borderWidth:1}}>
							<TextInput
							style={{paddingLeft:20}}
								height={55}
								width={320}
								placeholder={'Email'}
							/>
						</View>
						<TouchableOpacity style={[localStyles.icon,{position:'absolute',right:0}]}>
							<Mail name="circle-with-cross" size={30} color="#000000"/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={[localStyles.textBoxContainer,{backgroundColor:'black'}]}
						onPress={null}
						>
						<Text style={localStyles.subscriptionText}>
							{`CONTINUE FOR SUBSCRIPTION`}
						</Text>
					</TouchableOpacity>
					<View style={localStyles.textBoxContainer}>
						<TouchableOpacity 
							onPress={null}
						>
							<Text style={[localStyles.loginButton]}>
								{'Already have an RV Account? Login as RV User.'}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={[localStyles.textBoxContainer]}>
						<TouchableOpacity
							onPress={()=>this.loginWithGoogle()}
							style={localStyles.googleLoginButton}>
							<GoogleSigninButton
								size={GoogleSigninButton.Size.Icon}
								color={GoogleSigninButton.Color.Dark}/>
							<Logo name="google-plus" size={30} color="white" style={{position:'absolute',left:20}}/>
							<Text style={localStyles.subscriptionButton}>
								{'LOGIN WITH GOOGLE'}
								</Text>
						</TouchableOpacity>
					</View>
					<View style={[localStyles.textBoxContainer]}>
						<TouchableOpacity
							onPress={()=>this.loginWithFacebook()}
							style={localStyles.facebookLoginButton}>
							<Logo name="facebook-official" size={40} color="white" style={{position:'absolute',left:20}}/>
							<Text style={localStyles.subscriptionButton}>
								{'LOGIN WITH GOOGLE'}
								</Text>
						</TouchableOpacity>
					</View>
					<View style={localStyles.textBoxContainer}>
						<TouchableOpacity style={localStyles.skip}
							onPress={()=>this.signOutFromGoogle()}
						>
							<Text>
								{'skip'}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}
const localStyles=StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    backgroundColor: '#ffffff',
  },
  imageContainer:{
	  flex:4,
	  justifyContent:'center',
	  alignItems:'center',
  },
  image:{
		resizeMode:'contain',
  },
  bodyContainer:{
		flex:7,
  },
  headingContainer:{
	  paddingBottom:10,
	  alignItems:'center',
	  flex:1,
  },
  heading:{
	  fontSize:30,
  },
  emailBoxContainer:{
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row',
  },
  textBoxContainer:{
		flex:1,
		marginTop:30,
		alignItems:'center',
		justifyContent:'center',
  },
  subscriptionText:{
		color:'white',
		fontSize:20,
		fontWeight:'bold',
  },
	loginButton:{
		color:'black',
		fontSize:13,
		fontWeight:'bold',
  },
  googleLoginButton:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		height:55,
		width:370,
		backgroundColor:'rgb(249,67,66)',
	},
	facebookLoginButton:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		height:55,
		width:370,
		backgroundColor:'blue',
	},
  icon:{
		height:56,
		width:56,
		justifyContent:'center',
		alignItems:'center'
  },
  skip:{
		textDecorationLine: 'underline',
  }
})

SigninComponent.propTypes = {
	navigation: PropTypes.object,
	onSigninClicked: PropTypes.func,
	message: PropTypes.string,
	token: PropTypes.string,
};