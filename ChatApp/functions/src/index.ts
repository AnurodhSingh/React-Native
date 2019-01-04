import * as functions from 'firebase-functions';
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

exports.sendNotification = functions.database.ref('Data/Notification').onUpdate(event => {
	
	//get the userId of the person receiving the notification because we need to get their token
	// const receiverId = event.params.userId;
	// console.log("receiverId: ", receiverId);
	
	//get the user id of the person who sent the message
	// const senderId = event.data.child('user_id').val();
	// console.log("senderId: ", senderId);
	
    //get the message
    console.log(event);
    const data = event.after['_data'];
	const message = data.message;
    
	const senderName = data.sender;
    
    const token = data.token;
    
	// //get the message id. We'll be sending this in the payload
	// // const messageId = event.params.messageId;
	// // console.log("messageId: ", messageId);

    const payload = {
        data: {
            data_type: "direct_message",
            title: "New Message from " + senderName,
            message: message,
            // message_id: messageId,
        }
    };
    return admin.messaging().sendToDevice(token, payload).then(function(response) {
        console.log("message:", data);
        console.log("Successfully sent message:", response);
    }).catch(function(error) {
        console.log("Error sending message:", error);
    });
});
