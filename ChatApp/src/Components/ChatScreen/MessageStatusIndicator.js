import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

export class MessageStatusIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    let {messageStatus} = this.props;
    if(!messageStatus){
        return( 
          <Text/>
        );
    }
    return (
      <Text style={{color:'rgb(0,135,241)'}}>
        ✔
      </Text>
    );
  }
}

const styles= StyleSheet.create({
	
});