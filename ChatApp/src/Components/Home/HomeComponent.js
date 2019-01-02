import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import AllUsersContainer from './../AllUsers/AllUsersContainer';
import MyChatsContainer from './../MyChats/MyChatsContainer';
import CommonHeader from './../CommonHeader/CommonHeader';
import * as CONST from './../../../utils/Const';

const HomeTab = createMaterialTopTabNavigator({
  AllUsers: {screen : AllUsersContainer, navigationOptions: { title: 'All Users' }},
  MyChats : {screen : MyChatsContainer, navigationOptions: { title: 'My Chats' }},
}, {
  tabBarOptions: {
    scrollEnabled: false,
    labelStyle: {
      fontSize: 22,
    },
    tabStyle: {
      width: Dimensions.get('window').width / 2,
    },
    style: {
      backgroundColor: CONST.LOGIN_BG_COLOR,
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  },
});
export default class HomeComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'white'}}>
          <CommonHeader screenProps={{ rootNavigation: this.props.navigation }} />
          <HomeTab screenProps={{ rootNavigation: this.props.navigation }} />
        </View>
      </SafeAreaView>
    );
  }
}