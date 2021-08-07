// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD6hrVuVbqD1IlFyN5PehZS-lQioHBg6j8",
  authDomain: "clone-4b3d3.firebaseapp.com",
  projectId: "clone-4b3d3",
  storageBucket: "clone-4b3d3.appspot.com",
  messagingSenderId: "200105357875",
  appId: "1:200105357875:web:5f884aa2a403642619a946",
  measurementId: "G-JRB1D0WHK1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };