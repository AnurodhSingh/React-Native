import * as firebase from 'react-native-firebase';

export function updateMessageStatus(messageId){
    console.log("hello",firebase.database().ref());
    firebase.database().ref('Data/Chat/'+messageId).update({
        messageStatus:true,
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

export function updateIsTyping(senderId,recieverId,isTyping){
    console.log("hello",firebase.database().ref());
    firebase.database().ref('Data/ChatedUser/'+recieverId+'/'+senderId).update({
        isTyping,
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

export function updateUserOnlineStatus(uid,isOnline){
    console.log("hello",firebase.database().ref());
    firebase.database().ref('Data/Users/'+uid).update({
        isOnline,
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}