import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.sendNotification = functions.database.ref('Data/ChatedUser')
    .onWrite(event => {
        console.log('here');
        // const message = event.data.current.val();
        // const senderUid = message.from;
        // const receiverUid = message.to;
        // const promises = [];

        // if (senderUid == receiverUid) {
        //     //if sender is receiver, don't send notification
        //     promises.push(event.data.current.ref.remove());
        //     return Promise.all(promises);
        // }

        // const getInstanceIdPromise = admin.database().ref(`/users/${receiverUid}/instanceId`).once('value');
        // const getReceiverUidPromise = admin.auth().getUser(receiverUid);

        // return Promise.all([getInstanceIdPromise, getReceiverUidPromise]).then(results => {
        //     const instanceId = results[0].val();
        //     const receiver = results[1];
        //     console.log('notifying ' + receiverUid + ' about ' + message.body + ' from ' + senderUid);

        //     const payload = {
        //         notification: {
        //             title: receiver.displayName,
        //             body: message.body,
        //             icon: receiver.photoURL
        //         }
        //     };

        //     admin.messaging().sendToDevice(instanceId, payload)
        //         .then(function (response) {
        //             console.log("Successfully sent message:", response);
        //         })
        //         .catch(function (error) {
        //             console.log("Error sending message:", error);
        //         });
        // });
    });