import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import {Platform, StyleSheet, Text, View, TouchableOpacity, AsyncStorage,Alert} from 'react-native';
import firebase from 'react-native-firebase';
// import Spinner from './src/Components/Spinner/index'
import Approot from './src/Approot'
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
    alert(fcmToken);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
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

  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }
  
  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
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
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }
  // async componentDidMount() {
  //   const notificationOpen = await firebase.notifications().getInitialNotification();
  //   if (notificationOpen) {
  //       const action = notificationOpen.action;
  //       const notification= notificationOpen.notification;
  //       var seen = [];
  //       alert(JSON.stringify(notification.data, function(key, val) {
  //           if (val != null && typeof val == "object") {
  //               if (seen.indexOf(val) >= 0) {
  //                   return;
  //               }
  //               seen.push(val);
  //           }
  //           return val;
  //       }));
  //   } 
  //   const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max).setDescription('My apps test channel');
  // // Create the channel
  //   firebase.notifications().android.createChannel(channel);
  //   this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
  //       // Process your notification as required
  //       // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
  //   });
  //   this.notificationListener = firebase.notifications().onNotification((notification) => {
  //       // Process your notification as required
  //       notification
  //           .android.setChannelId('test-channel')
  //           .android.setSmallIcon('ic_launcher');
  //             firebase.notifications()
  //           .displayNotification(notification);
        
  //   });
  //   this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
  //       // Get the action triggered by the notification being opened
  //       const action = notificationOpen.action;
  //       // Get information about the notification that was opened
  //       const notification = notificationOpen.notification;
  //       var seen = [];
  //       alert(JSON.stringify(notification.data, function(key, val) {
  //         if (val != null && typeof val == "object") {
  //             if (seen.indexOf(val) >= 0) {
  //                 return;
  //             }
  //             seen.push(val);
  //         }
  //         return val;
  //       }));
  //       firebase.notifications().removeDeliveredNotification(notification.notificationId);
        
  //   });
  // }
  // componentWillUnmount() {
  //     this.notificationDisplayedListener();
  //     this.notificationListener();
  //     this.notificationOpenedListener();
  // }

  // componentDidMount(){
  //   firebaseConfig = {
  //     apiKey: "AIzaSyCeH_v47v6a8-XPkwOr8wp_Rxw1EmP4cJc",
  //     authDomain: "fir-app-371e2.firebaseapp.com",
  //     databaseURL: "https://fir-app-371e2.firebaseio.com",
  //     storageBucket: "fir-app-371e2.appspot.com",
  //   };
  //   if(!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  // }
  update(fname='Anurodh',lname='Singh'){
    console.log("hello",firebase.database().ref());
    firebase.database().ref('Data').set({
        fname,
        lname
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }

  read() {
    firebase.database().ref('Data').once('value', function (snapshot) {
        console.log("here",snapshot.val())
    });
  } 

  render() {
    return (
      <View style={styles.container}>
        <Provider store={this.state.store}>
          <View style={styles.container}>
            <Approot/>
            {/* <Spinner/> */}
          </View>
        </Provider>
      </View>
    );
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
