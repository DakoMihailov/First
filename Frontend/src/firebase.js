 import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASzcktK5SOnr0482o9qeSsOfapqqjnRew",
  authDomain: "react-firebase-auth-9b4d3.firebaseapp.com",
  projectId: "react-firebase-auth-9b4d3",
  storageBucket: "react-firebase-auth-9b4d3.appspot.com",
  messagingSenderId: "524504050921",
  appId: "1:524504050921:web:33561268049bfda05d9478"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider };