import * as firebase from 'firebase';
// import 'firebase/<PACKAGE>';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBHrS4fyqiE5PYvKuF5OULCSN3e8-su4xQ",
        authDomain: "timer-app-tdd.firebaseapp.com",
        databaseURL: "https://timer-app-tdd.firebaseio.com",
        projectId: "timer-app-tdd",
        storageBucket: "timer-app-tdd.appspot.com",
        messagingSenderId: "597717349647",
        appId: "1:597717349647:web:46d7c9b4015d23431bfa7a",
        measurementId: "G-WL23CZTDPH"
    });
}

export const permissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        //console.log('Token:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}



// export const permissionToReceiveNotifications = () => {

//     const messaging = firebase.messaging();

//     Notification.requestPermission().then(async (permission) => {

//         if (permission === 'granted') {

//             try {

//                 const token = await messaging.getToken();

//                 if (token) {

//                     console.log(token);
//                     return token;
//                 }

//                 else {
//                     console.log('No Instance ID token available. Request permission to generate one.');
//                 }
//             }

//             catch (error) {

//                 console.log('An error occurred while retrieving token. ', error);


//                 //BUT THE NEW TOKEN SUCCESSFULLY FETCHED
//                 const token = await messaging.getToken();

//                 if (token) {

//                     console.log(token);
//                     return token;
//                 }

//                 else {
//                     console.log('No Instance ID token available. Request permission to generate one.');
//                 }
//             }
//         }

//     })
//         .catch(error => console.log(error));
// }




// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();


// export function initNotification() {
//     Notification.requestPermission().then((permission) => {
//         console.log(permission)
//         if (permission === "granted") {
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN")
//                     console.log(currentToken);
//                 } else {
//                     console.log('No Instance ID token available. Request permission to generate one.');

//                 }
//             }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//             });
//         }
//     })
// }