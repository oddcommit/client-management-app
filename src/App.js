import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ReactReduxFirebaseProvider,
  useFirestoreConnect,
} from "react-redux-firebase";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helper/auth";

import AppNavBar from "./components/layout/AppNavBar";
import Client from "./components/clients/Clients";
import Homepage from "./components/layout/Homepage";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import Invoice from "./components/invoice/Invoice";
import InvoicesPage from "./components/invoice/InvoicePage";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Setting from "./components/settings/Setting";
import Register from "./components/auth/Register";

import "./App.css";

function App() {
  const authId = useSelector((state) => state.firebase.auth.uid);
  // // const auth = useSelector((state) => state.firebase);
  // console.log(
  //   "useselector",
  //   useSelector((state) => state.firestore.data.clients)
  // );
  useFirestoreConnect([
    {
      collection: "users",
      doc: authId || " ",
      subcollections: [
        { collection: "invoices", orderBy: ["invoiceDate", "desc"] },
      ],
      storeAs: "invoices",
    },
  ]);
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={UserIsAuthenticated(Client)}
          />
          <Route exact path="/" component={Homepage} />

          <Route
            exact
            path="/client/add"
            component={UserIsAuthenticated(AddClient)}
          />
          <Route
            exact
            path="/client/invoices"
            component={UserIsAuthenticated(InvoicesPage)}
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
    </Router>
  );
}

export default App;
