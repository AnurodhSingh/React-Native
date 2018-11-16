import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,Keyboard} from 'react-native';
import style from './style';
import * as CONST from './../../../utils/Const';
import Validators from './../../../utils/Validator';
import showToast from './../../../utils/Toast/index';

export default class SignInComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      firstName:'Anurodh',
      lastName:'Singh',
      email:'anurodh123@gmail.com',
      password:'abc123!@#',
    };
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  signIn() {
    const { firstName, lastName, email, password } = this.state;
    if (Validators.isEmpty(firstName)) {
			showToast(CONST.NAME_VALIDATION);
		} else if (!Validators.validName(firstName)) {
      showToast(CONST.NAME_VALIDATION);
    } else if (Validators.isEmpty(lastName)) {
			showToast(CONST.NAME_VALIDATION);
		} else if (!Validators.validName(lastName)) {
			showToast(CONST.NAME_VALIDATION);
		} else if (Validators.isEmpty(email)) {
			showToast(CONST.EMAIL_VALIDATION);
		} else if (!Validators.validEmail(email)) {
			showToast(CONST.EMAIL_VALIDATION);
		} else if (Validators.isEmpty(password)) {
			showToast(CONST.PASSWORD_VALIDATION);
		} else {	
			Keyboard.dismiss;
			this.props.CommonAction.startSpin();
			this.props.userLogin(email, password, firstName, lastName);
		}
  }

  render() {
    console.log(this.state.data);
    let {data} = this.state;
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <View style={style.logoContainer}>
            <Image style={style.logoStyle} source={CONST.LOGO}/>
            <Text style={style.logoTextStyle}>CHAT APP</Text>
          </View>
          <View style={style.bottomContainer}>
            <TextInput
              underlineColorAndroid={'transparent'}
              returnKeyType='next'
              placeholder='First Name'
              placeholderTextColor='white'
              value={this.state.firstName}
              autoCapitalize={'none'}
              ref={component => this.firstName = component}
              onChangeText={(firstName) => this.setState({ firstName })}
              keyboardType={'email-address'}
              style={style.textInputStyle}
            />
            <TextInput
              underlineColorAndroid={'transparent'}
              returnKeyType='next'
              placeholder='Last Name'
              placeholderTextColor='white'
              value={this.state.lastName}
              autoCapitalize={'none'}
              ref={component => this.lastName = component}
              onChangeText={(lastName) => this.setState({ lastName })}
              keyboardType={'email-address'}
              style={style.textInputStyle}
            />
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
              onPress={()=>{this.signIn()}}
            >
              <Text style={style.buttonTextStyle}>
                {'Get Started'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}