import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import {Platform, StyleSheet, Text, View, TouchableOpacity, AsyncStorage,Alert} from 'react-native';
import firebase from 'react-native-firebase';
import Spinner from './src/Components/Spinner/index';
import Approot from './src/Approot';
import Orientation from 'react-native-orientation';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => {
      }).store
    }
  }

  async componentDidMount() {
		Orientation.lockToPortrait();
    this.checkPermission();  
    this.createNotificationListeners();
  }
  
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }
  
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
            firebase.messaging().subscribeToTopic(fcmToken);
        }
    }
  }
  
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }
    
  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        // this.showAlert(title, body);
    });
    
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        // const { title, body } = notificationOpen.notification;
        // this.showAlert(title, body);
      // alert(JSON.stringify(notificationOpen.notification));
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        // const { title, body } = notificationOpen.notification;
        // this.showAlert(title, body);
      // alert(JSON.stringify(notificationOpen.notification));
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      // alert(JSON.stringify(message));
    });
  }
  
  showAlert(title, body) {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  // update(fname='Anurodh',lname='Singh'){
  //   console.log("hello",firebase.database().ref());
  //   firebase.database().ref('Data').set({
  //       fname,
  //       lname
  //   }).then((data)=>{
  //       //success callback
  //       console.log('data ' , data)
  //   }).catch((error)=>{
  //       //error callback
  //       console.log('error ' , error)
  //   })
  // }

  // read() {
  //   firebase.database().ref('Data').once('value', function (snapshot) {
  //       console.log("here",snapshot.val())
  //   });
  // } 
  render() {
    return (
      <View style={styles.container}>
        <Provider store={this.state.store}>
          <View style={styles.container}>
            <Approot/>
            <Spinner/>
          </View>
        </Provider>
      </View>
    );
  }

  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
