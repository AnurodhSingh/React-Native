import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import AllUsersContainer from './../AllUsers/AllUsersContainer';
import MyChatsContainer from './../MyChats/MyChatsContainer';
import CommonHeader from './../CommonHeader/CommonHeader';
import * as CONST from './../../../utils/Const';
import { updateUserOnlineStatus } from './../../actions/firebaseAction';
import MyDrawerNavigator from './../../Components/MyDrawerNavigator/MyDrawerNavigatorComponent';
import Drawer from 'react-native-drawer';
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  }

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
  componentDidMount(){
    setTimeout(() => { 
      updateUserOnlineStatus(this.props.userDetail.uid,true);
    }, 1000);
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'white'}}>
          <Drawer
            type="overlay"
            ref={(ref) => this._drawer = ref}
            content={<MyDrawerNavigator  screenProps={{ rootNavigation: this.props.navigation }}/>}
            style={drawerStyles}
            tapToClose={true}
            openDrawerOffset={0.35} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
          >
            <CommonHeader screenProps={{ rootNavigation: this.props.navigation }}  openDrawer={()=>this.openControlPanel()}/>
            <HomeTab screenProps={{ rootNavigation: this.props.navigation }} />
          </Drawer>
        </View>
      </SafeAreaView>
    );
  }
  componentWillUnmount(){
    updateUserOnlineStatus(this.props.userDetail.uid,false);
  }
}