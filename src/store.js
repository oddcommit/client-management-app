import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import {
  createFirestoreInstance,
  firestoreReducer,
  reduxFirestore,
} from "redux-firestore";

// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducers";
//reducers

import notifyReducer from "./redux/notifyReducer";
import settingReducer from "./redux/settingReducer";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_GOOGLE_DATABASE_URL,
  projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_APP_ID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENT_ID,
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore

const firestore = firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingReducer,
});

//check for settings in localStorage
if (localStorage.getItem("settings") == null) {
  //default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalenceOnEdit: false,
    allowRegistration: false,
  };

  //set to localstore. Localstore use string. turn the object to string.
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

//create initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

//create store
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
