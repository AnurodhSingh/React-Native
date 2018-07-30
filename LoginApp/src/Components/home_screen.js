import React, { Component } from 'react';
import {View,Text, StyleSheet,Image,ScrollView,} from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      first:'',
      last:'',
      password:'',
      email:'',
      gender:'male',
      imageSource:null,
      index:-1,
    }
  }
  componentWillMount()
  {
    let i=this.props.navigation.state.params.index;
    this.setState({index:i});
  }
  render() {
      const{index}=this.state;
      const{first,last,email,gender,imageSource}=this.props.data[index];
    return ( 
      <ScrollView style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>HOME SCREEN</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSource}/>
        </View>
        <View style={styles.formContainer}>
            <View style={styles.inputCell}>
            <Text
              style={styles.inputBox}
            >
                First Name : {first}
            </Text>
          </View>
          <View style={styles.inputCell}>
            <Text
              style={styles.inputBox}
            >
                Last Name : {last}
            </Text>
          </View>
          <View style={styles.inputCell}>
            <Text
              style={styles.inputBox}
            >
                Email :{email}
            </Text>
          </View>
          <View style={styles.inputCell}>
            <Text
              style={styles.inputBox}
            >
                Gender : {gender}
            </Text>
          </View>
          
          
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
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"rgb(0,230,170)", 
    shadowOffset:{  width: 0,  height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
    margin:15,
    width:250,
  },
});

function mapStateToProps(state) {
  const {registerReducer} = state;
  return{
      data:registerReducer.registered
  }
}

export default connect(mapStateToProps, null)(HomeScreen)