import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// import authReducer from './authReducer';
import invoiceReducer from "./invoiceReducer";
import loadingStateReducer from "./loadingStateReducer";
import notifyReducer from "./notifyReducer";
import settingReducer from "./settingReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // auth: authReducer,
  invoice: invoiceReducer,
  loadingState: loadingStateReducer,
  notify: notifyReducer,
  settings: settingReducer,
});

export default rootReducer;
