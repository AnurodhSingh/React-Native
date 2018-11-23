import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import * as CONST from './../../../utils/Const';
import scale from './../../../utils/scale';
import resetRoute from './../../../utils/resetRoute'
export default class ChatHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:this.props.navigation.state.params.item.firstName,
        lastName:this.props.navigation.state.params.item.lastName,
    };
  }
  render() {
      let { firstName, lastName } = this.state;
    return (
        <View style={styles.headerStyle}>
            <View style={styles.headerContainerStyle}>
                <TouchableOpacity style={styles.logoContainer}
                    onPress={()=>{
                        resetRoute('HomeScreen',this.props.navigation);
                    }}
                >
                    <Image style={styles.logoStyle} source={CONST.BACK_ICON}/>
                
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <View style={styles.imageContainer}>
                    </View>
                    <Text>
                        {firstName} {lastName}
                    </Text>
                </View>
                <View style={styles.logoContainer}>
                
                </View>
            </View>
        </View>
    );
  }
}

const styles= StyleSheet.create({
	headerStyle: {
        height:scale(60),
		backgroundColor:CONST.LOGIN_BG_COLOR,
    },
    headerContainerStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    menuIconContainer: {
        paddingHorizontal:scale(20),
    },
    logoContainer: {
        height: scale(50),
        width: scale(50),
        alignItems:'center',
        justifyContent:'center',
    },
    logoStyle: {
        marginLeft: scale(10)
    },
    imageContainer: {
        height:scale(40),
        width:scale(40),
        borderRadius:scale(20),
        backgroundColor:'grey'
    },
});