import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';

type Props = {};
export default class AnimationComponent extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
          <TouchableOpacity style={styles.buttonBtnStyle}
            onPress={() =>{alert('here')}}
          >
            <Text 
              style={{alignSelf:'stretch',height:50}}>{'Click'}
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

