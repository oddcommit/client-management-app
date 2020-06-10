import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helper/auth";

import AppNavBar from "./components/layout/AppNavBar";
import Client from "./components/clients/Clients";
// import Test from "./components/pages/view/InvoiceDetails"; //fdsf
import Homepage from "./components/layout/Homepage";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import Invoice from "./components/invoice/Invoice";
import CreateInvoice from "./components/invoice/createInvoice";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Setting from "./components/settings/Setting";
import Register from "./components/auth/Register";

import "./App.css";

// Firestore
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

// Pages Components
import NewInvoice from "./components/pages/create/NewInvoice";
import Invoices from "./components/pages/invoices/Invoices";
import InvoiceDetails from "./components/pages/view/InvoiceDetails";
import InvoicePdf from "./components/pages/view/InvoicePDF";

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
        {/* <Route exact path="/test/:id" component={UserIsAuthenticated(Test)} /> */}
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
