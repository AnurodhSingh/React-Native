'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput,Image} from 'react-native';
import {StackActions,NavigationActions} from 'react-navigation'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as SecondAction from '../Actions/second'; //Import your actions

class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      first:'',
      last:'',
      address:'',
      toggle:false,
      index:-1,
    }
  }

  componentWillMount(){
    let state=this.props.navigation.state;
    console.log('Screen second componentWillMount');
    if(state.params){
      const data=this.props.data;
      const index=state.params.index;
      this.setState({first:data[index].first,last:data[index].last,address:data[index].address,toggle:true,index:index});
    }
    else{
      console.log('No',state);
    }
  }

  render() {  
    let buttonName='Add';
    if(this.state.toggle){
      buttonName='Update';
    }    
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={require('../Image/react-logo-1000-transparent-300x300.png')}
          />
        </View>
        <View>
          <TextInput
                value = {this.state.first}
                style = {styles.input} 
                autoCapitalize="none" 
                onChangeText={(text) => this.setState({first:text})} 
                autoCorrect={false}
                placeholder='Type first name here!' 
                placeholderTextColor='#2674f2'/>

          <TextInput
                value = {this.state.last}
                style = {styles.input}   
                autoCapitalize="none" 
                onChangeText={(text)=> this.setState({last:text})}
                autoCorrect={false} 
                placeholder='Type last name here!' 
                placeholderTextColor='#2674f2'/>

          <TextInput
                value = {this.state.address}
                style = {styles.input}   
                autoCapitalize="none" 
                onChangeText={(text)=> this.setState({address:text})}
                autoCorrect={false} 
                placeholder='Type address here!' 
                placeholderTextColor='#2674f2'/>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={()=>this.validate(buttonName)}>
              <Text style={styles.buttonText}>
                {buttonName}
              </Text>
            </TouchableOpacity>  
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={()=>{this.props.navigation.navigate('ThirdScreen')}}>
              <Text style={styles.buttonText}>
                Show
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  validate(buttonName){
    if(this.state.first===''){
      alert('Enter First Name.');
    }
    else if(this.state.last===''){
      alert('Enter Last Name.');
    }
    else if(this.state.address===''){
      alert('Enter Address.');
    }
    else{
      if(buttonName==='Add'){
        alert("Record Added.")
        let newArray = this.props.data
        newArray.push({first:this.state.first,
                      last:this.state.last,
                      address:this.state.address});
        this.setState({
          first:'',
          last:'',
          address:'',
        })
        this.props.addRecord(newArray);
      }
      else{
        alert("Record Updated.")
        let newArray = this.props.data
        newArray[this.state.index]=({first:this.state.first,
                      last:this.state.last,
                      address:this.state.address});
        this.setState({
          first:'',
          last:'',
          address:'',
        })
        this.props.updateRecord(newArray);
        const resetAction = StackActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName : 'SecondScreen' }),
            NavigationActions.navigate({ routeName : 'ThirdScreen' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }
    }
  }
}

const styles = StyleSheet.create({
  img:{
    height:60,
    width:60,
  },
  imageContainer:{
    color: '#fff',
    alignItems:'center',
    height:50,
    justifyContent: 'center',
    marginBottom:100,
  },
  input:{
    height: 50,
    borderRadius: 10,
    backgroundColor: '#e1e4ea',
    marginBottom: 10,
    padding: 10,
    color: '#000'
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      borderRadius: 10,
      paddingVertical: 15,
      margin:20
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  const {second} = state;
  return{
      data:second.entry
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SecondAction, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Second)