import React, { Component } from 'react';
import { Marker, Callout } from 'react-native-maps'
import ClusteredMapView from 'react-native-maps-super-cluster'
import { Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
export default class MapComponent extends Component {
  constructor(props) {
		super(props);
		this.state = {
      data:[],
    };
  }

  fillData(){
    this.setState({data:[
      { id: 279918, location: { longitude: -122.8075055, latitude: 49.0576116 } },
      { id: 271483, location: { longitude: -123.1098085, latitude: 49.2688241 } },
      { id: 262932, location: { longitude: -80.9711424, latitude: 42.7706533 } },
      { id: 273815, location: { longitude: -122.678473, latitude: 49.117791 } },
      { id: 271379, location: { longitude: -80.9711424, latitude: 42.7706533 } },
      { id: 260390, location: { longitude: -80.9711424, latitude: 42.7706533 } },
      { id: 272970, location: { longitude: -80.9711424, latitude: 42.7706533 } },
      { id: 252902, location: { longitude: -80.9711424, latitude: 42.7706533 } },
      { id: 260634, location: { longitude: -122.678473, latitude: 49.117791 } },
      { id: 262755, location: { longitude: -123.09713265419197, latitude: 49.317908079565115 } },
      { id: 270385, location: { longitude: -122.0151400860668, latitude: 47.180183957421434 } },
      { id: 270390, location: { longitude: -122.4643817, latitude: 49.0581579 } },
      { id: 272927, location: { longitude: -122.4643817, latitude: 49.0581579 } }
    ]});
  }
  componentWillMount(){
    setTimeout(()=>{this.fillData()},3000);
  }
 
  renderMarker = (data) => {
    return(
    <Marker key={data.id} coordinate={data.location} onPress={()=>{
      return(
        <Transition>
          <Text>
            Welcome to this fantastic app!
          </Text>
        </Transition>);
        }}
    > 
      <View style={{height:30,width:30,borderRadius:15,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20}}>
          {data.id}
        </Text>
      </View>
    </Marker>);
  }
  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount;
    const coordinate = cluster.coordinate;
    let clusterId = cluster.clusterId ;
    const clusteringEngine = this.map.getClusteringEngine();
    return (
      <Marker coordinate={coordinate} onPress={()=>{}}>
        <View style={{height:30,width:30,borderRadius:15,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20}}>
            {pointCount}
          </Text>
        </View>
      </Marker>
    );
  }
  render() {
    let {data} = this.state;
    return (
      <SafeAreaView style={{flex:1,alignSelf:'stretch'}}>
        <ClusteredMapView
          maxZoom={20}
          style={{flex: 1}}
          data={this.state.data}
          initialRegion={{longitude: -123.09713265419197, latitude: 49.317908079565115,latitudeDelta: 80,longitudeDelta: 42}}
          ref={(r) => { this.map = r }}
          renderMarker={this.renderMarker}
          renderCluster={this.renderCluster} 
        >
        </ClusteredMapView>
      </SafeAreaView>
    );
  }
}