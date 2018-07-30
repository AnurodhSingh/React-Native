import React, { Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image,TextInput,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
  }
  showSignUpPage()
  {
    this.setState({email:'',password:''});
    this.props.navigation.navigate('SignUpScreen');
  }
  validateUser()
  {
    const{email,password}=this.state;
    if(email===''){
      alert('email field is empty.');
    }
    else if(password===''){
      alert('password field is empty.');
    }
    else
    {
      let localData=JSON.parse(JSON.stringify(this.props.data));
      let notFound=true;
      let index=-1;
      for(let i=0;i<localData.length;i++)
      {
        let user=localData[i];
        if((user.email===email) && (user.password===password))
        {
          notFound=false;
          index=i;
          break;
        }
      }
      if(notFound)
      {
        alert('Invalid email or password.');
      }
      else
      {
        this.setState({email:'',password:''});
        this.props.navigation.navigate('HomeScreen',{index});
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>LOGIN SCREEN</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={[styles.imageCircle]}>
          </View>
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
          <View style={styles.loginButtonContainer}>
            <LinearGradient colors={['#00c8b4', '#00f5b9']} style={styles.loginButton}>
              <TouchableOpacity
              onPress={()=>this.validateUser()}>
                <Text style={{fontSize:20,padding:5,color:'white'}}>LOGIN</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TouchableOpacity 
            onPress={()=>{this.showSignUpPage()}}
            style={{marginTop:40}}
            >
            <Text>CREATE NEW ACCOUNT</Text>
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
    marginTop:20,
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
    borderWidth: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"rgb(0,230,170)", 
    shadowOffset:{  width: 0,  height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  formContainer:{
    flex:6,
    marginTop:30,
    padding:10,
    alignItems:'center',
  },
  inputCell:{
    flexDirection:'row',
    margin:15,
    width:250,
  },
  icons:{
    marginRight:10,
  },
  inputBox:{
    width:200,
    height:25,
    fontSize:15,
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  loginButtonContainer:{
    margin:15,
    width:250,
  },
  loginButton:{
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
    flex:1,
  },
});

function mapStateToProps(state) {
  const {registerReducer} = state;
  return{
      data:registerReducer.registered
  }
}


export default connect(mapStateToProps, null)(LoginScreen)