import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyD7d6yRayr_gMsoCeGdgaVwxxeEqNQWPB4",
    authDomain: "iospushnotification-fbb44.firebaseapp.com",
    projectId: "iospushnotification-fbb44",
    storageBucket: "iospushnotification-fbb44.appspot.com",
    messagingSenderId: "299988279218",
    appId: "1:299988279218:web:d0f5a454cf28455fcb0eab",
    measurementId: "G-VL2C7FYEV3"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('Your token is:', token);
    return token;
  } catch (error) {
    console.error(error);
    return error;
  }
}