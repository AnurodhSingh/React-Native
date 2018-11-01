import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';

export default class HomeComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
		};
  }
  // componentDidMount() {
  //   this.props.navigation.navigate('AnimationScreen');
  // }

  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

