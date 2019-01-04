import React, { Component } from 'react';
import { Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, FlatList, ActivityIndicator, Keyboard ,NativeModules} from 'react-native';
import * as firebase from 'react-native-firebase';
import style from './style';
import * as CONST from './../../../utils/Const';
import { GiftedChat,Bubble} from 'react-native-gifted-chat';
import ChatHeaderComponent from './../ChatHeader/ChatHeader';
import { MessageStatusIndicator} from './MessageStatusIndicator';
import { updateMessageStatus, updateIsTyping} from './../../actions/firebaseAction';
let recieverFcmToken=null;

export default class ChatScreenComponent extends Component {
    constructor(props) {
        messagesRef = null,
        isTypingRef = null,
        super(props);
        this.state = {
            senderUid: this.props.userDetail.uid,
            recieverUid: this.props.navigation.state.params.item.uid,
            chatNode: '',
            firstMessage: true,
            fetching: true,
            messageArray: [],
            isTyping:false,
        };
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>this._keyboardDidShow());
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>this._keyboardDidHide());
    }

    getRecieverFcmToken() {
        let { recieverUid } = this.state;
        firebase.database().ref('Data/Users/' + recieverUid).once('value', (snapshot) => {
            let userObject = snapshot.val()
            recieverFcmToken = userObject.fcmToken;
        });
    }
    componentDidMount() {
        this.getRecieverFcmToken();
        let { senderUid, recieverUid } = this.state;
        let chatNode = '';
        if (senderUid > recieverUid) {
            chatNode = senderUid + recieverUid;
        }
        else {
            chatNode = recieverUid + senderUid;
        }
        this.setState({ chatNode});
        this.loadMessage(chatNode);

        this.messagesRef = firebase.database().ref('Data/Chat/' + chatNode);
        this.messagesRef.limitToLast(10).on('child_changed', () => { this.loadMessage(chatNode) });
    
        this.isTypingRef = firebase.database().ref('Data/ChatedUser/'+senderUid + '/' +recieverUid );
        this.isTypingRef.limitToLast(10).on('child_changed', () => { this.updateIsTyping() });
        this.updateIsTyping();
    }
    loadMessage(chatNode) { 
        let fullName=this.props.userDetail.firstName+' '+this.props.userDetail.lastName;

        firebase.database().ref('Data/Chat/' + chatNode).orderByKey().once('value', (snapshot) => {
            let messageObject = snapshot.val();
            if (messageObject) {
                let messageArray = [];
                this.setState({ firstMessage: false });
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    if(messageObject[key].user.name != fullName){
                        messageObject[key].messageStatus = true;
                        updateMessageStatus(chatNode+'/'+key);
                    }
                    messageArray = [messageObject[key], ...messageArray];
                });
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
        let senderFirstName=this.props.userDetail.firstName;
        let senderLastName=this.props.userDetail.lastName;
        let recieverFirstName= this.props.navigation.state.params.item.firstName;
        let recieverLastName= this.props.navigation.state.params.item.lastName;

        firebase.database().ref('Data/Chat/' + chatNode + '/' + new Date().getTime()).set({
            _id: messages[0]._id,
            text: messages[0].text,
            createdAt: createdAt,
            user: {
                _id: recieverUid,
                name: senderFirstName +' '+senderLastName,
            },
            messageStatus:false,
        }).then((data) => {
            //success callback
            this.sendPushNotification(messages[0].text);
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        });
        if (firstMessage) {
            firebase.database().ref('Data/ChatedUser/' + senderUid + '/' + recieverUid).update({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:recieverFirstName,
                isTyping:false,
                lastName:recieverLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });

            firebase.database().ref('Data/ChatedUser/' + recieverUid + '/' + senderUid).update({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:senderFirstName,
                isTyping:false,
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
            firebase.database().ref('Data/ChatedUser/' + senderUid + '/' + recieverUid).update({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:recieverFirstName,
                isTyping:false,
                lastName:recieverLastName,
                createdAt
            }).then((data) => {
                //success callback
                console.log('data ', data)
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            });

            firebase.database().ref('Data/ChatedUser/' + recieverUid + '/' + senderUid).update({
                chatRef: chatNode,
                lastMessage: messages[0].text,
                firstName:senderFirstName,
                isTyping:false,
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
    sendPushNotification(text){
        let senderFirstName = this.props.userDetail.firstName;
        let senderLastName = this.props.userDetail.lastName;
        let recieverFirstName = this.props.navigation.state.params.item.firstName;
        let recieverLastName = this.props.navigation.state.params.item.lastName;

        let payload = {
            "message" : text,
            "token" : recieverFcmToken,
            "sender" : senderFirstName + ' ' + senderLastName,
            "reciever" : recieverFirstName + ' ' + recieverLastName
        }
        firebase.database().ref('Data/Notification/').set({
            ...payload
        }).then((data) => {
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        });
    }

    updateIsTyping() {
        this.isTypingRef.once('value', (snapshot) => {
            this.setState({isTyping:snapshot.val().isTyping});
        });
    }
    _renderBubble(props){
        let fullName=this.props.userDetail.firstName+' '+this.props.userDetail.lastName;
        let messageStatus=false;
        if(fullName != props.currentMessage.user.name){
            messageStatus=false;
        }
        else{
            messageStatus = props.currentMessage.messageStatus;
        }
        return(
            <View style={{paddingRight: 12}}>
                <View style={{position: 'absolute', right: -1, bottom: 0}}>
                    <MessageStatusIndicator  messageStatus={messageStatus}/>
                </View>
                <Bubble {...props} />
            </View>
        )
    }

    render() {
        let { recieverUid , fetching } = this.state;
        return (
            <SafeAreaView style={style.safeAreaView}>
                <View style={style.containerStyle}>
                    <ChatHeaderComponent {...this.props} isTyping={this.state.isTyping}/>
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
                            renderBubble={(props)=>this._renderBubble(props)}
                        />
                    }
                </View>
            </SafeAreaView>
        );
    }
    _keyboardDidShow () {
        let senderUid = this.props.userDetail.uid;
        let recieverUid = this.props.navigation.state.params.item.uid;
        updateIsTyping(senderUid, recieverUid,true);
    }
    
    _keyboardDidHide () {
        let senderUid = this.props.userDetail.uid;
        let recieverUid = this.props.navigation.state.params.item.uid;
        updateIsTyping(senderUid, recieverUid,false);
    }
    componentWillUnmount() {
        this._keyboardDidHide();
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.messagesRef.off();
        this.isTypingRef.off();
    }
}