import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
const data=["hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye","hi","ihavegirlfriend",null, null, "goodbye"];
export default class HomeContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
      data:[],
      itemsRendered:0
    };
    this.timer = null;
  }
  componentDidMount() {
    this.scheduleNextUpdate()
  }

  scheduleNextUpdate() {
    this.timer = setTimeout(()=>{this.updateRenderedThings()}, 500)
  }

  updateRenderedThings() {
    console.log("aaaaaa",this.state.itemsRendered);
    const itemsRendered = this.state.itemsRendered;
    const updatedState = {
      data: this.state.data.concat(data[this.state.itemsRendered]),
      itemsRendered: itemsRendered+1
    }
    this.setState(updatedState)
    if (updatedState.itemsRendered < data.length) {
      this.scheduleNextUpdate()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  show(data) {
    return (
      data.map((obj) => {
        return (
          <View style={{backgroundColor:'rgb(0,175,233)', padding:10, margin:5 ,borderRadius:5 }}>
            <Text style={{color:'black',fontSize:14}}>
                {obj}
            </Text>
          </View>
        );
      })
    );
  }
  shazam(){
    let {data} = this.state;
    data = data.filter(function(n) {
            return n
        });
        this.setState({data})
  }
  render() {
    console.log(this.state.data);
    let {data} = this.state;
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{ borderWidth:1, alignSelf:'stretch', margin:10, flexDirection:'row', flexWrap:'wrap',padding:10}}>
          {this.show(data)}
        </View>
        <View style={{justifyContent:'center',alignItems:'center',margin:30,padding:20}}>
          <TouchableOpacity style={{backgroundColor:'rgb(239,71,65)', borderRadius:10, paddingVertical:15,paddingHorizontal:30}}
            onPress={()=>this.shazam()}
          >
            <Text>Click Here</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}