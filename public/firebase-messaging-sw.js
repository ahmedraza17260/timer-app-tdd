/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyBHrS4fyqiE5PYvKuF5OULCSN3e8-su4xQ",
    authDomain: "timer-app-tdd.firebaseapp.com",
    databaseURL: "https://timer-app-tdd.firebaseio.com",
    projectId: "timer-app-tdd",
    storageBucket: "timer-app-tdd.appspot.com",
    messagingSenderId: "597717349647",
    appId: "1:597717349647:web:46d7c9b4015d23431bfa7a",
    measurementId: "G-WL23CZTDPH"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();





// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//         .then(function (registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         }).catch(function (err) {
//             console.log('Service worker registration failed, error:', err);
//         });
// }


// const quizCache = 'Quiz-Cache';
// const assets = [
//     // 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
//     'https://opentdb.com/api.php?amount=10&difficulty=easy',
//     "/static/js / bundle.js",
//     "/static/js/1.chunk.js",
//     "/static/js/main.chunk.js",
//     "/logo192.png",
//     "/manifest.json",
//     "/firebase-messaging-sw.js",
//     "/src/API.ts",
//     "/index.html",
//     "/"
//     // `https://opentdb.com/api.php?amount=${newQuestions.amount}&difficulty=${newQuestions.difficulty}&type=multiple`
// ];

// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(quizCache).then((cache) => {
//             cache.addAll(assets);
//         })
//     )
// })
