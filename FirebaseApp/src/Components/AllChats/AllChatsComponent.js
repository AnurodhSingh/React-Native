import React, { Component } from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
import style from './style';
import * as CONST from './../../../utils/Const';

export default class AllChatsComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      users:[],
    };
  }
  componentDidMount() {
    firebase.database().ref('Data/Users').once('value',(snapshot)=>{
      let temp = snapshot.val();
      let users = [];
      for (key in temp){
        users.push({...temp[key],uid:key})
      }
      this.setState({users});
    }).catch((error)=>{
      console.log('yoyo',error);
    });
  }
  chatScreen(uid){
    this.props.screenProps.rootNavigation.navigate('ChatScreen',{uid})
  }
  _renderItems(item) {
    let {uid} = this.props.userDetail;
    console.log(uid+'     '+item.uid,uid!=item.uid);
    if(uid!=item.uid){
      return(
        <TouchableOpacity style={style.rowStyle}
          onPress={()=>{this.chatScreen(item.uid)}}
        >
          <View style={{flexDirection:'row',alignSelf:'stretch',justifyContent:'space-between',alignItems:'center'}}>
            <View style={style.imageContainer}>
            </View>
            <Text>
              {item.firstName} {item.lastName}
            </Text>
            <Image
              style={style.cheveronStyle}
              source={CONST.BACK_ICON}
            />
          </View>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
        <View style={style.safeAreaView}>
          {(this.state.users.length!=0)?
          <FlatList
            data={this.state.users}
            keyExtractor={(item,index)=>''+index}
            renderItem={({item})=>this._renderItems(item)}
          />
          :
          <ActivityIndicator/>}
        </View>
    );
  }
}