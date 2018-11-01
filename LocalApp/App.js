import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Approot from './src/Approot';
import HomeContainer from './src/Home/HomeContainer';

type Props = {};
export default class App extends Component<Props> {
  
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={styles.container}>
        <HomeContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
