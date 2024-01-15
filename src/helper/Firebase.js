// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDOzpXlIjWPzGSNCEbmKu0Sjd0PgsJ8VA",
  authDomain: "venoth-authenticator.firebaseapp.com",
  projectId: "venoth-authenticator",
  storageBucket: "venoth-authenticator.appspot.com",
  messagingSenderId: "709774512621",
  appId: "1:709774512621:web:77a717eeea19e496a957e4",
  measurementId: "G-7GBNVGZZKK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default auth;
