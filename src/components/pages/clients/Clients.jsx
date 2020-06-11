import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import ClientList from "./clientItems/ClientList";
import InvoiceList from "../invoices/invoiceItems/InvoiceList";
import Cards from "./clientItems/Cards";

import { firestoreConnect } from "react-redux-firebase";

class Clients extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      activeFilter: true,
      count: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      let count = clients.filter((client) => {
        return client.active === "true";
      });

      return {
        count: count.length,
      };
    }
    return null;
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        activeFilter: this.userData.activeFilter,
      });
    } else {
      this.setState({
        activeFilter: true,
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    window.localStorage.setItem("user", JSON.stringify(nextState));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  activeChange = () => {
    const currentState = this.state.activeFilter;
    this.setState({ activeFilter: !currentState });
  };

  render() {
    const { clients, invoices, searchField } = this.props;

    return (
      <>
        <Cards invoices={invoices} state={this.state} />
        <ClientList
          clients={clients}
          state={this.state}
          componentWillUpdate={this.componentWillUpdate}
          handleChange={this.handleChange}
          activeChange={this.activeChange}
          invoices={invoices}
          searchField={searchField}
        />
        <InvoiceList invoices={invoices} />
      </>
    );
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
  invoices: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: "clients" }, { collection: "invoices" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
    invoices: state.firestore.ordered.invoices,
  }))
)(Clients);
