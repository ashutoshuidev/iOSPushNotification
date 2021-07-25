importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyD7d6yRayr_gMsoCeGdgaVwxxeEqNQWPB4",
    authDomain: "iospushnotification-fbb44.firebaseapp.com",
    projectId: "iospushnotification-fbb44",
    storageBucket: "iospushnotification-fbb44.appspot.com",
    messagingSenderId: "299988279218",
    appId: "1:299988279218:web:d0f5a454cf28455fcb0eab",
    measurementId: "G-VL2C7FYEV3"
});
const messaging = firebase.messaging();