import React, { Component } from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
import style from './style';
import * as CONST from './../../../utils/Const';
import scale from '../../../utils/scale';

import moment from 'moment';

export default class MyChatsComponent extends Component {
  constructor(props) {
    messagesRef = null,
		super(props);
		this.state = {
      users:[],
      isfetching:true,
    };
  }
  componentDidMount() {
    let {uid} = this.props.userDetail;
    this.messagesRef = firebase.database().ref('Data/ChatedUser/'+uid);
    this.loadMychats();
    this.messagesRef.limitToLast(10).on('child_added', () => { this.loadMychats()});
  }
  loadMychats() {
    let {uid} = this.props.userDetail;
    this.messagesRef.once('value',(snapshot)=>{
      let temp = snapshot.val();
      let users = [];
      for (key in temp){
        users.push({...temp[key],uid:key});
      }
      this.setState({users,isfetching:false});
    }).catch((error)=>{
      console.log('error',error);
    });
  }
  chatScreen(item){
    this.props.screenProps.rootNavigation.navigate('ChatScreen',{item})
  }
  _renderItems(item) {
    console.log();
    return(
      <TouchableOpacity style={style.rowStyle}
        onPress={()=>{this.chatScreen(item)}}
      >
        <View style={{flexDirection:'row',alignSelf:'stretch',justifyContent:'space-between',alignItems:'center'}}>
          <View style={{flexDirection:'row',alignSelf:'stretch'}}>
            <View style={style.imageContainer}>
            </View>
            <View style={{paddingLeft:scale(10)}}>
              <Text style={style.nameStyle}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={style.messageStyle}>
                {item.lastMessage} 
              </Text>
            </View>
          </View>
          <View style={style.timeContainerStyle}>
            <Text style={style.timeStyle}>
              {moment(item.createdAt).format('LT')} 
            </Text>
            <Image
              style={style.cheveronStyle}
              source={CONST.BACK_ICON}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    let {isfetching,users}=this.state;
    return (
      <View style={style.safeAreaView}>
          {isfetching?
          <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator size="large" color={CONST.LOGIN_BG_COLOR} />
          </View>
          :
          <FlatList
            data={this.state.users}
            keyExtractor={(item,index)=>''+index}
            renderItem={({item})=>this._renderItems(item)}
          />}
        </View>
    );
  }
  componentWillUnmount() {
    this.messagesRef.off();
  }
}