import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import SortableList from 'react-native-sortable-list';
import Collapsible from 'react-native-collapsible';
import HomeScreen from './home';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
let BottomTabNavigator = createBottomTabNavigator(
	{
		HOME: {screen : HomeScreen},
		BROWSE: {screen : HomeScreen},
		MYLIBRARY: {screen : HomeScreen},
		BONUS: {screen : HomeScreen},
		SETTINGS: {screen : HomeScreen},
	},
	{
    
		tabBarOptions: {
			// activeTintColor: CONST.ACTIVE_TAB_COLOR, //'tomato',
			// inactiveTintColor: CONST.BLACK_COLOR, //'gray',
			labelStyle: {
				fontSize: 9,
				// fontFamily: CONST.fontFamily.Bold,
			},
			style: {
				backgroundColor: 'rgb(253, 249, 249)',
			},
			allowFontScaling: false,
		},
		animationEnabled: false,
		swipeEnabled: false,
	}
);
BottomTabNavigator = createAppContainer(BottomTabNavigator);
type Props = {};
export default class SortableListDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.dataForSortableList=['0', '1', '2', '3']
        this.state = {
           // dataForSortableList: ['0', '1', '2', '3'],
            dataForSortableListcollapse: [true, true, true, true],
        }
    }
    toggleCollapse(id) {
        this.dataForSortableList=this.dataForSortableList.splice(0,4);
        let dataForSortableListcollapse=this.state.dataForSortableListcollapse;
        dataForSortableListcollapse[id]=!this.state.dataForSortableListcollapse[id];
        this.setState({dataForSortableListcollapse});
    }
    render() {
        return (
            <View style={{flex:1}}>
            <View style={styles.safeAreaView}>
                <View style={styles.container}>
                    <SortableList
                        onScrollCalled={this.onScroll}
                        scrollEnabled={true}
                        style={styles.listViewAllData}
                        contentContainerStyle={styles.contentContainer}
                        data={this.dataForSortableList}
                        renderRow={(item) => this._renderRow(item)}
                        rowActivationTime={200}
                        // onActivateRow={(key) => { this.onActivateRowCalled(key) }}
                        //onReleaseRow={(key) => { this.onReleaseRowCalled(key) }}
                        onChangeOrder={(newOrder) => this.dataFromChangedList(newOrder)}
                    />
                <BottomTabNavigator/> 
                </View>  
            </View>
            {/* <SafeAreaView style={{backgroundColor:'orange'}}/> */}
            </View>
        );
    }
    _renderRow(item) {
        //console.log(item)
        switch(item){
            case '0':
            item.data='ABCD'
            break;
            case '1':
            item.data='EFGH'
            break;
            case '2':
            item.data='IJKL'
            break;
            case '3':
            item.data='MNOP'
            break;
        }
        console.log('Item',item)
        return (
            <View>
                <View style={{ height:30,flexDirection:'row'}}>
                    <Text style={{alignSelf:'stretch',heigt:20,fontSize:20}}>
                        Toggle{item.key}
                    </Text>
                    <TouchableOpacity onPress={() => { this.toggleCollapse(item.key) }}>
                        <Text>
                            v
                        </Text>
                    </TouchableOpacity>
                </View>
                { this.state.dataForSortableListcollapse[item.key]?
                <View style={{flex : 1}} >
                    <View style={{height:50,backgroundColor:'red'}}>
                        <Text>
                            {item.data}
                        </Text>
                    </View>
                </View>: <View /> }
            </View>
        )
    }
    dataFromChangedList(newOrder) {
        console.log('newOrder1', newOrder, this.dataForSortableList)
       this.dataForSortableList=newOrder;
       console.log('newOrder2', newOrder, this.dataForSortableList)
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor:'green'
    },
    container: {
        flex: 1,
        backgroundColor:'blue'
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
    listViewAllData: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    }
});
