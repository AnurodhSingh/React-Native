import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,TextInput,ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Plus from 'react-native-vector-icons/Entypo';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginAction from '../Actions/sign_up_screen'; 

class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      first:'',
      last:'',
      password:'',
      email:'',
      gender:'male',
      imageSource:null,
    }
  }
  show() {
    console.log("@@@@@@@@@@ select photo tapped");
    const options = {
        quality : 1.0,
        maxWidth : 500,
        maxHieght : 500,
        storageOptions : {
            skipBackup : true
        }
    };
    ImagePicker.showImagePicker(options, (response)=> {
        console.log('Response = '+response);
        if(response.didCancel) {
            console.log("User cancelled photo picker");
        }
        else if(response.error) {
            console.log('Image Picker error :',response.error);
        }
        else if(response.customButton) {
            console.log('User tapped custom button : '+response.customButton);
        }
        else {
            let source = { uri : response.uri };
            this.setState({
                imageSource: source
            });
        }
    });
  }
  onSelect(value){
    this.setState({
      gender:value
    })
  }
  showLoginPage(){
    this.setState({first:'',last:'',email:'',password:'',gender:'male',imageSource:null});
    this.props.navigation.navigate('LoginScreen');
  }
  registerUser(){
    const{first,last,email,password,gender,imageSource}=this.state;
    if(email===''){
      alert('Enter proper email.');
    }
    else if(first===''){
      alert('Enter proper First Name');
    }
    else if(last===''){
      alert('Enter proper Last Name.');
    }
    else if(password===''){
      alert('Enter proper password .');
    }
    else{
      let localData=JSON.parse(JSON.stringify(this.props.data));

      localData.push({first,last,email,password,gender,imageSource});
      this.setState({first:'',last:'',email:'',password:'',gender:'male',imageSource:null})

      this.props.sign_up(localData);
      alert("Successfully Registered");
      this.props.navigation.navigate('LoginScreen');
    }
  }
  render() {
    return (   
      <ScrollView style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>REGISTRATION SCREEN</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={[styles.imageCircle]}
            onPress={()=>this.show()}
          >
            {this.state.imageSource === null ? 
            <View style={{position:'absolute'}}>
              <Text>Select a Photo</Text>     
            </View> :
            <View style={{position:'absolute'}}>
              <Image style={styles.image} source={this.state.imageSource}/>
            </View>
            }
            <View style={{backgroundColor:'#00f5b9',height:30,width:30,top:45,left:45,borderRadius:15,postion:'absolute'}}>
              <Plus name='plus' size={30} color='white'/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputCell}>
            <Icon name="user-o" size={20} color="#000000" style={styles.icons}/>
            <TextInput
              value = {this.state.email}
              style={styles.inputBox}
              autoCapitalize="none" 
              onChangeText={(text) => this.setState({email:text})} 
              autoCorrect={false}
              placeholder="asingh@isystango.com" 
            />
          </View>
          <View style={styles.inputCell}>
            <Icons name="lock" size={20} color="#000000" style={styles.icons}/>
            <TextInput
              value = {this.state.password}
              secureTextEntry={true}
              style={styles.inputBox}
              autoCapitalize="none" 
              onChangeText={(text) => this.setState({password:text})} 
              autoCorrect={false}
              placeholder="**************" 
            />
          </View>
          <View style={styles.inputCell}>
            <Icon name="user-o" size={20} color="#000000" style={styles.icons}/>
            <TextInput
              value = {this.state.first}
              style={styles.inputBox}
              autoCapitalize="none" 
              onChangeText={(text) => this.setState({first:text})} 
              autoCorrect={false}
              placeholder="First Name" 
            />
          </View>
          <View style={styles.inputCell}>
            <Icon name="user-o" size={20} color="#000000" style={styles.icons}/>
            <TextInput
              value = {this.state.last}
              style={styles.inputBox}
              autoCapitalize="none" 
              onChangeText={(text) => this.setState({last:text})} 
              autoCorrect={false}
              placeholder="Last Name" 
            />
          </View>
          <View style={{flex:1}}>
          <RadioGroup
            selectedIndex={0}
            style={{flexDirection:'row',width:250,}}
            onSelect = {(value) => this.onSelect(value)}
            >
              <RadioButton value={'male'} 
              buttonSize={400}
              style={{alignSelf:'flex-start'}}
              >
                <Text>male</Text>
              </RadioButton>
      
              <RadioButton value={'female'}
              style={{marginLeft:80}}
              >
                <Text>female</Text>
              </RadioButton>
          </RadioGroup>
          </View>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity 
            onPress={()=>this.registerUser()}
            >
              <LinearGradient colors={['#00c8b4', '#00f5b9']} style={styles.createButton}> 
                  <Text style={{fontSize:20,padding:5,color:'white'}}>Create Account</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            onPress={()=>this.showLoginPage()}
            >
            <Text>Already have an account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filler}>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    backgroundColor: '#ffffff',
  },
  headingContainer: {
    flex:1,
    paddingTop:20,
    padding:10,
    alignItems:'center',
  },
  heading:{
    fontSize: 20,
  },
  imageContainer:{
    flex:2,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center'
  },
  imageCircle:{
    borderRadius: 70,
    width: 140,
    height: 140,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"rgb(0,230,170)", 
    shadowOffset:{  width: 0,  height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation:15,
  },
  image:{
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  formContainer:{
    flex:6,
    marginTop:30,
    padding:10,
    alignItems:'center',
  },
  inputCell:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:250,
  },
  icons:{
    marginRight:10,
  },
  inputBox:{
    padding:15,
    width:200,
    fontSize:15,
    borderBottomWidth:1,
    borderBottomColor:'#a8abaf'
  },
  createButtonContainer:{
    margin:15,
    width:250,
  },
  createButton:{
    marginTop:10,
    backgroundColor:'lightblue',
    alignItems:'center',
    shadowOffset:{  width: 0,  height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  filler:{
    height:30,
  },
});

function mapStateToProps(state) {
  const {registerReducer} = state;
  return{
      data:registerReducer.registered
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginAction, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)