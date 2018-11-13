import React, {Component} from 'react';
import {Platform, Image, Text, View, SafeAreaView, TouchableOpacity, ScrollView, AnimatedView,Animated,Easing} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
export const src = require('./material-icon-2155448_960_720.png');
const data=["hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye"];

type Props = {};
export default class AnimationComponent extends Component<Props> {
  constructor(props) {
		super(props);
		this.state = {
      showIcon:true,
      currentDistance:0,
      difference:'negative',
    };
    this.animatedValue = new Animated.Value(0)
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 250,
        easing: Easing.linear
      }
    ).start();
  }
  show(data) {
    return (
      data.map((obj,index) => {
        return (
          <View key={index} style={{backgroundColor:'rgb(249,138,63)', padding:10, margin:10 ,borderRadius:5 }}>
            <Text style={{color:'black',fontSize:14}}>
                {obj}
            </Text>
          </View>
        );
      })
    );
  }
  showIconFromNoWhere(){
    let size=null;
    let pos=null;
    if(this.state.showIcon) {
      size= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 60]
      })
      pos= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 30]
      })
    }
    else {
      size= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 0]
      })
      pos= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 60]
      })
    }
    return(
      <TouchableOpacity
        onPress={()=>alert('ARE YOU MAD!')}
      >
        <Animated.View style={{right:pos,bottom:pos,height:size,width:size,alignItems:'center',justifyContent:'center',position:'absolute'}}>
          <Animated.Image style={{height:size,width:size}} source={src} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
  showIconFromBottom(){
    let bottom=null;
    if(this.state.showIcon) {
      bottom= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-60, 30]
      })
    }
    else {
      bottom= this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [30, -60]
      })
    }
   
    return(
      <TouchableOpacity
        onPress={()=>alert('ARE YOU MAD!')}
      >
        <Animated.View style={{right:30,bottom,height:60,width:60,alignItems:'center',justifyContent:'center',position:'absolute'}}>
          <Icon name={'pluscircle'} color={'rgb(0,119,176)'} size={60}/>
        </Animated.View>
      </TouchableOpacity>
    );
  }
  toggleIcon=(event)=> {
    const changedDistance = event.nativeEvent.contentOffset.y;
    const { currentDistance } = this.state;
    const difference = changedDistance-currentDistance;
    if(Math.abs(difference)>20) {
      if(difference>0 && this.state.difference!='positive') {
        this.setState({showIcon:true,difference:'positive'});
        this.animate();
      }
      if(difference<0 && this.state.difference!='negative') {
        this.setState({showIcon:false,difference:'negative'});
        this.animate();
      }
    }
    console.log(changedDistance);
    this.setState({currentDistance:changedDistance})
  }
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={{flex:1, alignSelf:'stretch'}}>
          <ScrollView style={{flex:1, alignSelf:'stretch', borderWidth:1}}
            bounces={false}
            onScroll={this.toggleIcon}
            scrollEventThrottle={16}
          >
            {this.show(data)}
          </ScrollView>
          {this.showIconFromBottom()}
          {/* {this.showIconFromNoWhere()} */}
        </View>
      </SafeAreaView>
    );
  }
}

