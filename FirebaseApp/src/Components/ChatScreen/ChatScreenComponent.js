import React, { Component } from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
import style from './style';
import * as CONST from './../../../utils/Const';
import { GiftedChat } from 'react-native-gifted-chat'

export default class ChatScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        senderUid:this.props.userDetail.uid,
        recieverUid:this.props.navigation.state.params.uid,
        chatNode:'',
        firstMessage:true,
        messageArray:[
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
            }
        ],
    };
  }
  componentDidMount(){
    // alert(this.props.navigation.state.params.uid);
    // alert(this.props.userDetail.uid);

    // let senderUid=this.props.userDetail.uid;
    // let recieverUid=this.props.navigation.state.params.uid;

    let { senderUid, recieverUid } = this.state;
    let chatNode = '';
    if(senderUid>recieverUid) {
        chatNode = senderUid+recieverUid;
    }
    else {
        chatNode = recieverUid+senderUid;
    }
    this.setState({chatNode});

    firebase.database().ref('Data/Chat/'+chatNode).once('value',(snapshot)=>{
        // console.log("here1111",snapshot.val())
        let messageObject=snapshot.val();
        if(messageObject){
            let messageArray = [];
            this.setState({firstMessage:false});
            for(let obj in messageObject){
                // console.log('$$$$',new Date(messageObject[obj]));
                // messageObject[obj] = Date.parse(messageObject[obj]);
                messageArray=[messageObject[obj],...messageArray];
               // console.log('@@@@',messageArray);
            }
            this.setState({messageArray});
        }
    });
  }

  onSend(messages = []) {
    //   console.log('!!!!!!',messages[0]);
    this.setState(previousState => ({
        messageArray: GiftedChat.append(previousState.messageArray, messages),
    }))

    let { chatNode, senderUid, recieverUid } = this.state;

    firebase.database().ref('Data/Chat/'+chatNode+'/'+new Date().getTime()).set({
        _id: messages[0]._id,
        text: messages[0].text,
        createdAt:''+(new Date()),
        user: {
            _id: recieverUid,
            name: 'React Native',
        },
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  render() {
    let { recieverUid } = this.state;
    return (
        <SafeAreaView style={style.safeAreaView}>
            <View style={style.containerStyle}>
            <GiftedChat
                messages={this.state.messageArray}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: recieverUid,
                }}
            />
            </View>
        </SafeAreaView>
    );
  }
}