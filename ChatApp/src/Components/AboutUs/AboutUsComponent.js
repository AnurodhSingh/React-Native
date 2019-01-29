import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,AsyncStorage, ScrollView} from 'react-native';
import style from './style';
import Collapsible from 'react-native-collapsible';
import AntDesign from 'react-native-vector-icons/AntDesign';
class CollapsibleView extends Component {
  constructor(props) {
		super(props);
		this.state = {
      isCollapsed: this.props.isCollapsed || true,
      keyName: this.props.keyName || 'data',
      valueName: this.props.valueName || 'null'
    };
  }
  UNSAFE_componentWillReceiveProps(){
    this.setState({isCollapsed:true});
  }
  show(data) {
    if(typeof data === 'object'){
      dataKeys = Object.keys(data)
      lastIndexValue = dataKeys.length-1;
      return(
        dataKeys.map((object,index)=>{
          let lastIndex = false;
          if(lastIndexValue == index){
            lastIndex = true;
          }
          let keyName = Object.keys(data)[index];
          let valueName = data[keyName];
          return(
            <View style={{marginLeft: 25, borderLeftWidth:lastIndex ? 0 : 1, }} >    
              <View style={{position:'absolute',height:15,borderLeftWidth:lastIndex ? 1 : 0}}>
              </View>
              <CollapsibleView keyName = {keyName} valueName = {valueName} isCollapsed = {true} lastIndex = {lastIndex}/>
            </View>
          );
        })
      );
    }
    else {
      return(
        <View style={{marginLeft: 35, marginBottom:5}} >
          <Text style={{color:'white'}}>
            {data}
          </Text>
        </View>
      );
    }
  }
  render(){
    // alert(JSON.stringify(this.state.isCollapsed))
    return(
      <View>
        <View style={style.headerStyle}>
          {this.state.isCollapsed ?
            <AntDesign name='plus' size={16}/>
            :
            <AntDesign name='minus' size={16}/>
          }
          <TouchableOpacity
            onPress={()=> {this.setState({isCollapsed:!this.state.isCollapsed})}}
          >
            <Text style={style.headerTextStyle}>
              {this.state.keyName}
            </Text>
          </TouchableOpacity>
        </View>
        <Collapsible collapsed={this.state.isCollapsed}>
          {this.show(this.state.valueName)}
        </Collapsible>
      </View>
    );
  }
}

export default class AboutUsComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  componentDidMount() {

  }

  componentWillMount(){
  }

  render() {
    let data = {
      hey:{"id":"1010","name":"Anurodh","password":"anurodh11","__v":0},
      hello:{"id":"1036","name":"Mansi","password":"mansi36","__v":0,bye:{"id":"1036","name":"Mansi","password":"mansi36","__v":0}},
    }
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <ScrollView style={style.bodyContainerStyle}>
            <View style={{marginHorizontal: 10}} >    
              <CollapsibleView keyName = {'data'} valueName = {data} isCollapsed={true}/>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}