import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput} from 'react-native';
import style from './style';
import * as CONST from './../../../utils/Const';

export default class LoginComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email:'',
      password:'',
    };
  }
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  login() {
    
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
                  {'Get Started'}
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}