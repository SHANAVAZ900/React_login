import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAj9AG5bNslalBSDpF2E5J7sFJfOexnFWQ",
    authDomain: "react-login-654db.firebaseapp.com",
    projectId: "react-login-654db",
    storageBucket: "react-login-654db.appspot.com",
    messagingSenderId: "24257276860",
    appId: "1:24257276860:web:72c72b794cdfe6de9519b9",
    measurementId: "G-E3DVWV6D7S"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;
