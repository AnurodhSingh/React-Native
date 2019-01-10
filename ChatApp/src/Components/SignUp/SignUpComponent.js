import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,Keyboard,AsyncStorage, ScrollView} from 'react-native';
import style from './style';
import * as CONST from '../../../utils/Const';
import Validators from '../../../utils/Validator';
import showToast from '../../../utils/Toast/index';
import resetRoute from './../../../utils/resetRoute';
import * as firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-crop-picker';
import UserIcon from 'react-native-vector-icons/AntDesign';

let fcmToken=null;

export default class SignUpComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      imageUrl:null,
    };
  }
  componentWillMount(){
    //resetRoute('LoginScreen',this.props.navigation);
  }
  componentDidMount() {
    this.getFCMToken()
  }
  async getFCMToken() {
    fcmToken = await AsyncStorage.getItem('fcmToken');
  }
  createNewUser(uid) {
    const { firstName, lastName, email, password } = this.state;
    firebase.database().ref('Data/Users/'+uid).set({
      firstName,
      lastName,
      email,
      password,
      fcmToken
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
        this.props.UserDetailAction.saveUserDetail({
          firstName,
          lastName,
          email,
          password,
          uid,
          fcmToken,
        });
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
    this.props.CommonAction.stopSpinner();
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
    })
  }
  authenticateUser() {
    let{
      email,
      password,
      firstName,
      lastName
    } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((response)=>{
      showToast('Account created successfully');
      this.props.navigation.navigate('LoginScreen');
      this.createNewUser(response.user.uid);

      response.user.updateProfile({
          displayName: firstName+' '+lastName
      });
      this.setState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
      });
      this.props.CommonAction.stopSpinner();
    }).catch((error)=>{
      showToast('Email id already in use');
      console.log('error',error)
      this.props.CommonAction.stopSpinner();
    });
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
      this.props.CommonAction.startSpinner();
			Keyboard.dismiss;
      this.authenticateUser();
		}
  }
  navigateToLogin() {
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
    });
    this.props.navigation.navigate('LoginScreen');
  }

  openImagePicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      alert(JSON.stringify(image));
    });
  }

  render() {
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <View style={style.logoContainer}>
            <Image style={style.logoStyle} source={CONST.LOGO}/>
            <Text style={style.logoTextStyle}>C H A T  A P P</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:"#cccccc",height:100,width:100,borderRadius:50,borderColor:'grey',borderWidth:1,alignItems:'center',justifyContent:'center'}}
              onPress={()=>this.openImagePicker()}
            >
              {this.state.imageUrl ? 
                <Image src={imageUrl}/>
                :
                <UserIcon name="adduser" size={40} color={CONST.LOGIN_BG_COLOR}/> 
              }
            </TouchableOpacity>
          </View>
          <View style={style.bottomContainer}>
            <ScrollView>
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
              <TouchableOpacity
                style={style.buttonStyle}
                onPress={()=>{this.navigateToLogin()}}
              >
                <Text style={style.buttonTextStyle}>
                  {'Already a Member'}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}