import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//reducers

//todo

const firebaseConfig = {
  apiKey: "AIzaSyBY02a75-x4cbWJPLkrYeBGxgH0WyMHrTw",
  authDomain: "contacts-keeper-16284.firebaseapp.com",
  databaseURL: "https://contacts-keeper-16284.firebaseio.com",
  projectId: "contacts-keeper-16284",
  storageBucket: "contacts-keeper-16284.appspot.com",
  messagingSenderId: "752525306288",
  appId: "1:752525306288:web:0257a4043773b8236dce75",
  measurementId: "G-84BMRXFKJV"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
const firestore = firebase.firestore();
