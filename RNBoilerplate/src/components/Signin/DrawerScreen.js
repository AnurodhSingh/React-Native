import React, { Component } from 'react';
import {	
	View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

export default class SettingsScreen extends Component
{
    render(){
        return(
            <View style={{flex:1}}>
                <Drawer/>
            </View>
        )
    }
}
class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('@assets/splash/splashScreenBg.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />
      );
    }
}
  
class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('@assets/splash/splashScreenBg.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go back home"
        />
      );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});

const Drawer = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });