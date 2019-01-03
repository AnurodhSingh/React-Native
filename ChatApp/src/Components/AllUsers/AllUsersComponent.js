import React, { Component } from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList,ActivityIndicator} from 'react-native';
import * as firebase from 'react-native-firebase';
import style from './style';
import scale from '../../../utils/scale';
import * as CONST from '../../../utils/Const';

export default class AllUsersComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      users:[],
      isfetching:true,
    };
  }
  componentDidMount() {
    firebase.database().ref('Data/Users').once('value',(snapshot)=>{
      let temp = snapshot.val();
      let users = [];
      for (key in temp){
        users.push({...temp[key],uid:key})
      }
      this.setState({users,isfetching:false});
    }).catch((error)=>{
      console.log('yoyo',error);
    });
  }
  chatScreen(item){
    this.props.screenProps.rootNavigation.navigate('ChatScreen',{item})
  }
  _renderItems(item) {
    let { firstName, lastName } = item;
    let initials=firstName.charAt(0)+lastName.charAt(0);
    let {uid} = this.props.userDetail;
    if(uid!=item.uid){
      return(
        <TouchableOpacity style={style.rowStyle}
          onPress={()=>{this.chatScreen(item)}}
        >
          <View style={{flexDirection:'row',alignSelf:'stretch',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignSelf:'stretch'}}>
              <View style={style.imageContainer}>
                {item.image ? 
                  <Image/>
                  :
                  <Text>
                      {initials}
                  </Text>
                }
              </View>
              <View style={{paddingLeft:scale(10),width:scale(220),justifyContent:'center'}}>
                <Text numberOfLines={1} style={style.nameStyle}>
                  {firstName} {lastName}
                </Text>
              </View>
            </View>
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
    let {isfetching}=this.state;
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
}