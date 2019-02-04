import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import scale from '../../../utils/scale';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const unitId = 'ca-app-pub-7574165853782980/8321726817';
// const unitId = 'ca-app-pub-3940256099942544/6300978111';

export default class AdComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
            
      };
    }
  render() {
    return (
      <View style={{alignItems:'center',padding:10,backgroundColor:'white'}}>
        <Banner
          unitId={unitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            alert('Advert loaded');
          }}
        />
      </View>
    );
  }
}