import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import styles from './style';
import * as CONST from '../../../utils/Const';
import * as firebase from 'react-native-firebase';
import UserIcon from 'react-native-vector-icons/AntDesign';

class MyDrawerNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:null,
            userName:''+this.props.userDetail.firstName.toUpperCase(),
        };
    }
    navigateToScreen(route){
        this.props.screenProps.rootNavigation.navigate(route);
    }
    componentDidMount() {
        let {imageUrl} = this.props.userDetail;
        this.setState({imageUrl});
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.userDetail!==nextProps.userDetail) {
            let {imageUrl} = nextProps.userDetail;
            this.setState({imageUrl});
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'white',borderWidth:1,borderColor:'grey'}}>
                <View style={styles.imagePickerContainerStyle}>
                    <View style={styles.imagePickerStyle}>
                        {this.state.imageUrl ? 
                            <Image style={styles.imageStyle}
                                source={{ uri:this.state.imageUrl}}
                            />
                            :
                            <UserIcon name="adduser" size={40} color={CONST.LOGIN_BG_COLOR}/> 
                        }
                        
                    </View>
                    <View style={styles.userNameContainerStyle}>
                        <Text style={styles.userNameStyle}>
                            {this.state.userName}
                        </Text>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <TouchableOpacity style={styles.navItemStyle} onPress={()=>this.navigateToScreen('SettingsScreen')}>
                            <Text>
                                Settings
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <TouchableOpacity style={styles.navItemStyle} onPress={()=>this.navigateToScreen('AboutUsScreen')}>
                            <Text>
                                About Us
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <TouchableOpacity style={styles.navItemStyle} onPress={()=>this.navigateToScreen('SignUpScreen')}>
                            <Text>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
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

export default connect(mapStateToProps,null)(MyDrawerNavigator);