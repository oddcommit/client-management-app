import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import App from "./App";

import { Provider } from "react-redux";
import { store, rrfProps } from "./redux/store";
import history from "./others/history";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReactReduxFirebaseProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
