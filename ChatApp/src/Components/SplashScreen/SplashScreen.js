import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity, ScrollView, AnimatedView,Animated,Easing} from 'react-native';
import { connect } from 'react-redux';
import resetRoute from './../../../utils/resetRoute';
import * as CONST from './../../../utils/Const';
import scale from './../../../utils/scale';

class SplashScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.animatedValue = new Animated.Value(0);
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start();
  }
  componentDidMount() {
      this.animate();
    setTimeout(() => {
        if(this.props.userDetail){
          resetRoute('HomeScreen',this.props.navigation);
        }
        else{
          resetRoute('SignUpScreen',this.props.navigation);
        }
    }, 3000);
  }

  showAnimatedCharacter(character) {
    character=character.split('');
    const marginBottom = this.animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 100, 0 ,0 , 0]
    });
    const rotate = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '360deg', '360deg']
    })
    const opacity = this.animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 0, 0, 0.5, 1]
    })
    return(
        <TouchableOpacity
            style={{justifyContent:'center',alignItems:'center'}}
            onPress={()=>alert('ARE YOU MAD!')}
        >
            <Animated.Image style={{opacity, height: scale(60),width: scale(100),}} source={CONST.LOGO}>
                
            </Animated.Image>
            <View style={{flexDirection:'row'}}>
                {character.map((object,index)=>{
                    return(
                    <Animated.View style={{marginBottom}}>
                        <Animated.Text style={{transform: [{rotate}], fontSize:20, fontWeight: 'bold',color: CONST.WHITE_COLOR,}}>
                            {object}
                        </Animated.Text>
                    </Animated.View>
                    );
                })}
            </View>
        </TouchableOpacity>
    )
  }
  showText(text){
      for(let i=0;i<text.length;i++){
        this.showAnimatedCharacter(text.charAt(i));
      }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.showAnimatedCharacter('C H A T   A P P')}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:CONST.LOGIN_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
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

function mapStateToProps(state) {
	const { UserDetailReducer } = state;
	return {
        userDetail:UserDetailReducer.userDetail
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
  }
};

export default connect(mapStateToProps,null)(SplashScreen);