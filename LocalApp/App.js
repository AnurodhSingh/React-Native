import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Approot from './src/Approot';
import HomeContainer from './src/Home/HomeContainer';
import AnimationContainer from './src/Animation/AnimationContainer';
import MapContainer from './src/Map/MapContainer';

type Props = {};

export default class App extends Component<Props> {
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
