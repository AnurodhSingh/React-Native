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