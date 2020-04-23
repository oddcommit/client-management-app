import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./store";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helper/auth";

import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";
import Homepage from "./components/layout/Homepage";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import Invoice from "./components/invoice/Invoice";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Setting from "./components/settings/Setting";
import Register from "./components/auth/Register";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <div className="App">
              <AppNavBar />
              <div className="container">
                <Switch>
                  <Route
                    exact
                    path="/dashboard"
                    component={UserIsAuthenticated(Dashboard)}
                  />
                  <Route exact path="/" component={Homepage} />
                  <Route
                    exact
                    path="/"
                    component={UserIsNotAuthenticated(Homepage)}
                  />
                  <Route
                    exact
                    path="/client/add"
                    component={UserIsAuthenticated(AddClient)}
                  />
                  <Route
                    exact
                    path="/client/:id"
                    component={UserIsAuthenticated(ClientDetails)}
                  />
                  <Route
                    exact
                    path="/invoice/:id"
                    component={UserIsAuthenticated(Invoice)}
                  />
                  <Route
                    exact
                    path="/client/edit/:id"
                    component={UserIsAuthenticated(EditClient)}
                  />
                  <Route
                    exact
                    path="/login"
                    component={UserIsNotAuthenticated(Login)}
                  />
                  <Route
                    exact
                    path="/settings"
                    component={UserIsAuthenticated(Setting)}
                  />
                  <Route
                    exact
                    path="/register"
                    component={UserIsAuthenticated(Register)}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
