import React, { Component } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import * as firebase from 'react-native-firebase';
import style from './style';
import * as CONST from './../../../utils/Const';
import { GiftedChat } from 'react-native-gifted-chat'
import ChatHeaderComponent from './../ChatHeader/ChatHeader'

export default class ChatScreenComponent extends Component {
    constructor(props) {
        messagesRef = null,
            super(props);
        this.state = {
            senderUid: this.props.userDetail.uid,
            recieverUid: this.props.navigation.state.params.item.uid,
            chatNode: '',
            firstMessage: true,
            fetching: true,
            messageArray: [],
        };
    }
    componentWillMount() {

    }
    componentDidMount() {
        // alert(this.props.navigation.state.params.uid);
        // alert(this.props.userDetail.uid);

        // let senderUid=this.props.userDetail.uid;
        // let recieverUid=this.props.navigation.state.params.uid;

        let { senderUid, recieverUid } = this.state;
        let chatNode = '';
        if (senderUid > recieverUid) {
            chatNode = senderUid + recieverUid;
        }
        else {
            chatNode = recieverUid + senderUid;
        }
        this.setState({ chatNode });
        this.loadMessage(chatNode);

        this.messagesRef = firebase.database().ref('Data/Chat/' + chatNode);
        this.messagesRef.limitToLast(1).on('child_added', () => { this.loadMessage(chatNode) });
    }
    loadMessage(chatNode) {
        firebase.database().ref('Data/Chat/' + chatNode).once('value', (snapshot) => {
            let messageObject = snapshot.val();
            if (messageObject) {
                let messageArray = [];
                this.setState({ firstMessage: false });
                for (let obj in messageObject) {
                    // console.log('$$$$',new Date(messageObject[obj]));
                    // messageObject[obj] = Date.parse(messageObject[obj]);
                    messageArray = [messageObject[obj], ...messageArray];
                }
                this.setState({ messageArray });
            }
            this.setState({ fetching: false});
        });
    }

    onSend(messages = []) {
          let createdAt = '' + messages[0].createdAt;
        this.setState(previousState => ({
            messageArray: GiftedChat.append(previousState.messageArray, messages),
        }))

        let { firstMessage, chatNode, senderUid, recieverUid } = this.state;

        firebase.database().ref('Data/Chat/' + chatNode + '/' + new Date().getTime()).set({
            _id: messages[0]._id,
            text: messages[0].text,
            createdAt: createdAt,
            user: {
                _id: recieverUid,
                name: 'React Native',
            },
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
        let senderFirstName=this.props.userDetail.firstName;
        let senderLastName=this.props.userDetail.lastName;
        let recieverFirstName= this.props.navigation.state.params.item.firstName;
        let recieverLastName= this.props.navigation.state.params.item.lastName;
        if (firstMessage) {
            firebase.database().ref('Data/ChatedUser/' + senderUid + '/' + recieverUid).set({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:recieverFirstName,
                lastName:recieverLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });

            firebase.database().ref('Data/ChatedUser/' + recieverUid + '/' + senderUid).set({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:senderFirstName,
                lastName:senderLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });
        }
        else{ 
            firebase.database().ref('Data/ChatedUser/' + senderUid + '/' + recieverUid).set({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:recieverFirstName,
                lastName:recieverLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });

            firebase.database().ref('Data/ChatedUser/' + recieverUid + '/' + senderUid).set({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:senderFirstName,
                lastName:senderLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            }); 
        }
    }

    render() {
        let { recieverUid , fetching } = this.state;
        return (
            <SafeAreaView style={style.safeAreaView}>
                <View style={style.containerStyle}>
                    <ChatHeaderComponent {...this.props} />
                    {fetching ?
                        <View style={{flex:1,justifyContent:'center'}}>
                            <ActivityIndicator size="large" color={CONST.LOGIN_BG_COLOR} />
                        </View>
                        :
                        <GiftedChat
                            messages={this.state.messageArray}
                            onSend={messages => this.onSend(messages)}
                            user={{
                                _id: recieverUid,
                            }}
                        />
                        }
                </View>
            </SafeAreaView>
        );
    }
    componentWillUnmount() {
        this.messagesRef.off();
    }
}