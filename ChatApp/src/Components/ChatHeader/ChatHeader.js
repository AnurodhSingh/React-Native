import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import * as CONST from './../../../utils/Const';
import scale from './../../../utils/scale';
export default class ChatHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:this.props.navigation.state.params.item.firstName,
        lastName:this.props.navigation.state.params.item.lastName,
        image:'',
    };
  }
  render() {
    let { firstName, lastName } = this.state;
    let initials=firstName.charAt(0)+lastName.charAt(0);
    return (
        <View style={styles.headerStyle}>
            <View style={{alignItems:'center',flexDirection:'row'}}>
                <TouchableOpacity style={styles.backIconContainer}
                    onPress={()=>{
                        this.props.navigation.goBack();
                    }}
                >
                    <Image style={styles.backIconStyle} source={CONST.BACK_ICON}/>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    {this.state.image? 
                        <Image/>
                        :
                        <Text>
                            {initials}
                        </Text>
                    }
                </View>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameTextStyle}>
                    {firstName} {lastName}
                </Text>
                {
                    this.props.isTyping 
                    &&
                    <Text style={styles.nameTextStyle}>
                        {'is typing ...'}
                    </Text>
                }
            </View>
        </View>
    );
  }
}

const styles= StyleSheet.create({
	headerStyle: {
        height:scale(60),
		backgroundColor:CONST.LOGIN_BG_COLOR,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'stretch',
    },
    backIconContainer: {
        height: scale(50),
        width: scale(50),
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer: {
        height:scale(40),
        width:scale(40),
        borderRadius:scale(20),
        backgroundColor:'rgb(21,119,100)',
        justifyContent:'center',
        alignItems:'center',
    },
    backIconStyle: {

    },
    nameContainer: {
        padding:scale(20),
    },
    nameTextStyle: {
        fontSize:scale(16),
    }
});