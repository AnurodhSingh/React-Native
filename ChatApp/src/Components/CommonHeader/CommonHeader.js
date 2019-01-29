import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import * as CONST from './../../../utils/Const';
import scale from './../../../utils/scale';
import resetRoute from './../../../utils/resetRoute';
import * as authenticationAction from './../../actions/authenticationAction';
import Entypo from 'react-native-vector-icons/Entypo';

class CommonHeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        openDrawer:false,
    };
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        <View style={styles.headerContainerStyle}> 
            <TouchableOpacity style={styles.menuIconContainer}
                onPress={()=>{ this.props.openDrawer(); }}
            >
                <Entypo name='menu' size={40}/>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image style={styles.logoStyle} source={CONST.LOGO}/>
            </View>
            <View style={styles.menuIconContainer}>
                <Entypo name='menu' size={40} color={CONST.LOGIN_BG_COLOR}/>
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
        height: scale(30),
        width: scale(50)
    }
});

function mapStateToProps(state) {
    const { } = state;
      return {
      };
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
        authenticationAction: bindActionCreators(authenticationAction,dispatch),
    }
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommonHeaderComponent);