'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ThirdAction from '../Actions/third'; //Import your actions
class Third extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  showList(item,index){
    return (
      <View style={styles.cell}>
        <View style={{flex:2}}>
          <View style={{marginBottom:5,flexDirection:'row'}}>
            <View style={{flex:2}}>
              <Text>Name     : </Text> 
            </View>
            <View style={{flex:4}}>
              <Text>{item.first} {item.last}</Text> 
            </View>
          </View>
          <View style={{marginBottom:5,flexDirection:'row'}}>
            <View style={{flex:2}}>
              <Text>Address : </Text> 
            </View>
            <View style={{flex:4}}>
              <Text>{item.address}</Text> 
            </View>
          </View>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <TouchableOpacity
                onPress={()=>this.goToScreen(index)}>
                <Image
                  style={styles.img}
                  source={require('../Image/edit.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity 
                onPress={()=>this.delete(index)}>
                <Image
                  style={styles.img}
                  source={require('../Image/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> 
    )
  }
  goToScreen(index) {
    this.props.navigation.push('SecondScreen',{index:index})
  }
  render() {
    let data=this.props.data;
    if(data.length==0){
      return (
        <View style={styles.empty}>
          <Text>No Records</Text>   
        </View>
      )
    }
    else{
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.data}
            renderItem={({item,index}) => this.showList(item,index)}
            keyExtractor={item => item.first}
          />    
        </View>
      )
    }
  }
  delete(index)
  {
    let newArray=JSON.parse(JSON.stringify(this.props.data));
    newArray.splice(index, 1);
    this.props.deleteRecord(newArray);
  }
};
const styles = StyleSheet.create({
  FlatList:{
    flex:1
  },
  img:{
    marginLeft:10,
    height:20,
    width:20,
  },
  field:{
    marginTop: 5,
    alignItems: 'center',
  },
  container: {
    flex: 1,
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
  cell:{
    flexDirection:'row',
    alignSelf:'stretch',
    margin:10,
    padding:20,
    backgroundColor:'#ffffe2'
  },
  empty:{
    alignSelf:'stretch',
    alignItems:'center',
    margin:10,
    padding:20,
    backgroundColor:'#ffffe2'
  },
});

function mapStateToProps(state) {
  const {second} = state;
  return{
      data:second.entry,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ThirdAction, dispatch)
  

}


export default connect(mapStateToProps, mapDispatchToProps)(Third)