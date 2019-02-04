import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,AsyncStorage, ScrollView} from 'react-native';
import style from './style';
import Validators from '../../../utils/Validator';
import showToast from '../../../utils/Toast/index';
import * as CONST from './../../../utils/Const';
import * as firebase from 'react-native-firebase';
import { updateUserImageDetail } from './../../actions/firebaseAction';
import resetStack from './../../../utils/resetStack';
import scale from '../../../utils/scale';
import ImagePicker from 'react-native-image-crop-picker';
import Collapsible from 'react-native-collapsible';
import UserIcon from 'react-native-vector-icons/AntDesign';

let isCollapsed=false;
export default class SettingsComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      uid:'',
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      imageUrl:'',
      imageCollipsible:true,
      nameCollipsible:true,
    };
  }
  componentDidMount() {
    let {uid} = this.props.userDetail;
    firebase.database().ref('Data/Users/' + uid).once('value', (snapshot) => {
        let userObject = snapshot.val()
        this.setState({
          uid,
          email:userObject.email,
          password:userObject.password,
          firstName:userObject.firstName,
          lastName:userObject.lastName,
          imageUrl:userObject.imageUrl,
        });
    });
  }

  componentWillMount(){

  }

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  navigateToHome() {
    this.setState({
      email:'',
      password:'',
    });
    this.props.navigation.goBack();
  }

  openImagePicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({imageUrl: image.path});
    }).catch((error)=>{
      
    });
  }

  uploadImage(){
    let {imageUrl, uid} = this.state;
    if(!imageUrl || imageUrl==''){
      showToast('please select an image to upload.')
    }
    else {
      const {
        uid,
        email,
        password,
        firstName,
        lastName,
        imageUrl,
      } = this.state;
      const imageRef = firebase.storage().ref('images').child(this.state.email+'.jpg');
      let mime = 'image/jpg';
      imageRef.put(imageUrl, { contentType: mime }).then((snapshot)=>{
        this.setState({imageUrl : snapshot.downloadURL});
        showToast('Image uploaded successfully.')
        updateUserImageDetail(uid,snapshot.downloadURL);
        this.props.UserDetailAction.saveUserDetail({uid, email, password, firstName, lastName, imageUrl})
        return true;
      }).catch((error)=>{
        showToast('please select a proper image to upload.');
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <View style={style.mainHeaderStyle}>
            <TouchableOpacity style={style.backIconContainer}
              onPress={()=>{this.navigateToHome()}}
            >
              <Image style={style.backIconStyle} source={CONST.BACK_ICON}/>
            </TouchableOpacity>
            <Text style={style.headerTextStyle}>
              SETTINGS
            </Text>
            <View style={style.backIconStyle}>
            </View>
          </View>
          <ScrollView style={{flex:1}}>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({imageCollipsible: !this.state.imageCollipsible})}>
              <Text style={style.headerTextStyle}>
                Image
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.imageCollipsible}>
              <View style={style.bodyContainerStyle}>
                <TouchableOpacity style={style.imagePickerContainerStyle}
                  onPress={()=>this.openImagePicker()}
                >
                  {this.state.imageUrl ? 
                    <Image style={style.imageStyle} source={{uri:this.state.imageUrl}}/>
                    :
                    <UserIcon name="adduser" size={40} color={CONST.LOGIN_BG_COLOR}/> 
                  }
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:scale(10),paddingVertical:scale(10),paddingHorizontal:scale(10),backgroundColor:"#cccccc",borderColor:'grey',alignItems:'center',justifyContent:'center'}}
                  onPress={()=>this.uploadImage()}
                >
                  <Text>
                    Upload
                  </Text>
                </TouchableOpacity>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>
            <TouchableOpacity 
              style={style.headerStyle}
              onPress={() =>this.setState({nameCollipsible: !this.state.nameCollipsible})}>
              <Text style={style.headerTextStyle}>
                Name
              </Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.nameCollipsible}>
              <View style={{height:100,alignSelf:'stretch'}}>
                <Text>
                  ghghghjygjhghj
                </Text>
              </View>
            </Collapsible>

          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}