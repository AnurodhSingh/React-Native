import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,AsyncStorage} from 'react-native';
import style from './style';
import Validators from '../../../utils/Validator';
import showToast from '../../../utils/Toast/index';
import * as CONST from './../../../utils/Const';
import * as firebase from 'react-native-firebase';
import resetRoute from './../../../utils/resetRoute';
let fcmToken=null;
export default class LoginComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email:'',
      password:'',
    };
  }
  componentDidMount() {
    this.getFCMToken();
  }

  componentWillMount(){
   // resetRoute('SignUpScreen',this.props.navigation);
  }
  async getFCMToken() {
    fcmToken = await AsyncStorage.getItem('fcmToken');
  }
  login() {
    let{
      email,
      password
    }=this.state;
    if (!Validators.validEmail(email)) {
			showToast(CONST.EMAIL_VALIDATION);
		} else if (Validators.isEmpty(password)) {
			showToast(CONST.PASSWORD_VALIDATION);
		} else {
      this.props.CommonAction.startSpinner();
      firebase.auth().signInWithEmailAndPassword(email, password).then((response)=>{
        console.log('hello1',JSON.stringify(response));
        let {uid ,displayName} = response.user;
        let firstName=displayName.split(' ')[0];
        let lastName=displayName.split(' ')[1];
        resetRoute('HomeScreen',this.props.navigation);
        this.props.UserDetailAction.saveUserDetail({
          email,
          password,
          uid,
          firstName,
          lastName,
          fcmToken
        });
        this.props.CommonAction.stopSpinner();
      }).catch((response)=> {
        console.log('hello2',response)
        this.props.CommonAction.stopSpinner();
      });
    }
  }
  navigateToSignUp() {
    this.setState({
      email:'',
      password:'',
    });
    this.props.navigation.navigate('SignUpScreen');
  }
  render() {
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <View style={style.headerStyle}>
            <TouchableOpacity style={style.backIconContainer}
              onPress={()=>{this.navigateToSignUp()}}
            >
              <Image style={style.backIconStyle} source={CONST.BACK_ICON}/>
            </TouchableOpacity>
          </View>
          <View style={style.logoContainer}>
            <Image style={style.logoStyle} source={CONST.LOGO}/>
            <Text style={style.logoTextStyle}>CHAT APP</Text>
          </View>
          <View style={style.bottomContainer}>
              <TextInput
                underlineColorAndroid={'transparent'}
                returnKeyType='next'
                placeholder='Email'
                placeholderTextColor='white'
                value={this.state.email}
                autoCapitalize={'none'}
                ref={component => this.email = component}
                onChangeText={(email) => this.setState({ email })}
                keyboardType={'email-address'}
                style={style.textInputStyle}
              />
              <TextInput
                underlineColorAndroid={'transparent'}
                returnKeyType='next'
                placeholder='Password'
                placeholderTextColor='white'
                value={this.state.password}
                autoCapitalize={'none'}
                secureTextEntry={true}
                ref={component => this.password = component}
                onChangeText={(password) => this.setState({ password })}
                keyboardType={'email-address'}
                style={style.textInputStyle}
              />
              <TouchableOpacity
                style={style.buttonStyle}
                onPress={()=>{this.login()}}
              >
                <Text style={style.buttonTextStyle}>
                  {'Login'}
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}