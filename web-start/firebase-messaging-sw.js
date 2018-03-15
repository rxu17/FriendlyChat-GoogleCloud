
//gives the service wroker access to firebase messaging
importScripts('/__/firebase/4.1.3/firebase-app.js');
importScripts('/__/firebase/4.1.3/firebase-messaging.js');
importScripts('/__/firebase/init.js');

//importScripts('/__/firebase/4.1.3/firebase-messaging.js');
//importScripts("/__/firebase/4.1.3/firebase.js")
//importScripts("/__/firebase/init.js");

//firebase.messaging();

// Initialize Firebase
/*
var config = {
    apiKey: "<APIKEY>",
    authDomain: "<PROJECTID>.firebaseapp.com",
    databaseURL: "https://<DATABASE NAME>.firebaseio.com",
    projectId: "<PROJECT ID>",
    storageBucket: "<PROJECT ID>.appspot.com",
    messagingSenderId: "<SENDER ID>"
};
*/
//firebase.initializeApp(config);

// retrieves an instance of firebase messaging to handle background messages
const messaging = firebase.messaging();

console.log("Background messaging is working", messaging);

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
