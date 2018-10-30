import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Approot} from './src/Approot';
import * as firebase from 'firebase';

type Props = {};
export default class App extends Component<Props> {
  
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyB1Td5sVbpztc_WqccFHLi_4CgX2m3wbQc",
      authDomain: "<YOUR-AUTH-DOMAIN>",
      databaseURL: "<YOUR-DATABASE-URL>",
      storageBucket: "",
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <Approot/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
