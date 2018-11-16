import React, {Component} from 'react';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import Approot from './src/Approot'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => {
        console.log('Store persisted !');
      }).store
    }
  }
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAUbQNvB31cy_qYR4zv5Znmsrh4rtzNIhU",
      authDomain: "fir-app-371e2.firebaseapp.com",
      databaseURL: "https://fir-app-371e2.firebaseio.com",
      storageBucket: "fir-app-371e2.appspot.com",
    };
    console.log(firebase.apps);
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

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
          <Approot/>
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
