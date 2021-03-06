import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,Image,TextInput,AsyncStorage, ScrollView} from 'react-native';
import style from './style';
import Collapsible from 'react-native-collapsible';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

class CollapsibleView extends Component {
  constructor(props) {
		super(props);
		this.state = {
      isCollapsed: this.props.isCollapsed || true,
      keyName: this.props.keyName || 'data',
      valueName: this.props.valueName || 'null'
    };
  }
  UNSAFE_componentWillReceiveProps(nextProp){
    this.setState({isCollapsed:true, valueName: nextProp.valueName, keyName: nextProp.keyName});
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
            <View style={{marginLeft: 40, borderLeftWidth:lastIndex ? 0 : .5 }} >    
              <View style={{position:'absolute',height:15,borderLeftWidth:lastIndex ? 0.5 : 0}}>
              </View>
              <CollapsibleView keyName = {keyName} valueName = {valueName} isCollapsed = {false} lastIndex = {lastIndex}/>
            </View>
          );
        })
      );
    }
    else {
      return(
        <View style={{marginLeft: 35, marginBottom:5, flexDirection: 'row', alignItems:'center'}}>
          <MaterialCommunityIcons color={'black'} style={{opacity: 0.5}} name='subdirectory-arrow-right' size={16}/>
          <Text style={{color:'orange', fontWeight: 'bold'}}>
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
            <AntDesign color={'green'} name='plus' size={16}/>
            :
            <AntDesign color={'red'} name='minus' size={16}/>
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
      data:null,
    };
  }
  componentDidMount() {
    fetch(`https://salty-plateau-94309.herokuapp.com/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res=>{
      console.log("res", res)
      let data = JSON.parse(res._bodyInit);
      this.setState({ data });
    }).catch(err=>{
      console.log("err", err)
    });
  }

  componentWillMount(){
  }

  render() {
    let { data } = this.state;
    return (
      <SafeAreaView style={style.safeAreaViewStyle}>
        <View style={style.mainContainerStyle}>
          <ScrollView  
            style={style.bodyContainerStyle}
            horizontal={true}
          >
            <ScrollView
              style={style.bodyContainerStyle}
            >
              <View style={{marginHorizontal: 10}}>    
                <CollapsibleView keyName = {'data'} valueName = {data} isCollapsed = {true}/>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}