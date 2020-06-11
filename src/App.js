import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helper/auth";

import AppNavBar from "./components/layout/AppNavBar";
import Client from "./components/pages/clients/Clients";
// import Test from "./components/pages/view/InvoiceDetails"; //fdsf
import Homepage from "./components/layout/Homepage";
import AddClient from "./components/pages/clients/AddClient";
import ClientDetails from "./components/pages/clients/ClientDetails";
import EditClient from "./components/pages/clients/EditClient";
import Login from "./components/auth/Login";
import Setting from "./components/settings/Setting";
import Register from "./components/auth/Register";

import "./App.css";

// Firestore
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

// Pages Components
import NewInvoice from "./components/pages/create/NewInvoice";
import InvoiceDetails from "./components/pages/invoices/view/InvoiceDetails";
import ViewAllInvoices from "./components/pages/invoices/ViewAllInvoices";

function App() {
  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: "clients",
      // doc: auth.uid || " ",
      // subcollections: [
      //   { collection: "invoices", orderBy: ["invoiceDate", "desc"] },
      // ],
      // storeAs: "invoices",
    },
    {
      collection: "invoices",
    },
  ]);
  return (
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
          path="/createinvoice/:id"
          component={UserIsAuthenticated(NewInvoice)}
        />
        <Route
          exact
          path="/invoices"
          component={UserIsAuthenticated(ViewAllInvoices)}
        />
        <Route
          exact
          path="/client/:id"
          component={UserIsAuthenticated(ClientDetails)}
        />
        <Route
          exact
          path="/invoice/:id"
          component={UserIsAuthenticated(InvoiceDetails)}
        />
        <Route
          exact
          path="/client/edit/:id"
          component={UserIsAuthenticated(EditClient)}
        />
        <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
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
  );
}

export default App;
