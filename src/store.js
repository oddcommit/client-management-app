import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
//reducers

import notifyReducer from "./reducers/notifyReducer";
import settingReducer from "./reducers/settingReducer";

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

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingReducer
});

//check for settings in localStorage
if (localStorage.getItem("settings") == null) {
  //default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalenceOnEdit: false,
    allowRegistration: false
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
  createFirestoreInstance
};
