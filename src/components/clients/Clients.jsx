import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import InvoiceDetails from "../pages/view/InvoiceDetails";
import testInvoiceClient from "./testinvoiceClient";

import { firestoreConnect } from "react-redux-firebase";

class Clients extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      activeFilter: true,
      count: null,
      tallyCheck: null,
      tallyCash: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      let tallyCheck = clients.filter((client) => {
        return client.cashCheck === "check";
      });
      let tallyCash = clients.filter((client) => {
        return client.cashCheck === "cash";
      });

      let count = clients.filter((client) => {
        return client.active === "true";
      });

      return {
        count: count.length,
        tallyCheck: tallyCheck.length,
        tallyCash: tallyCash.length,
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
    const { clients, invoices } = this.props;
    console.log("clients", clients);
    console.log("invoices", invoices);
    const {
      count,
      tallyCheck,
      tallyCash,
      searchField,
      activeFilter,
    } = this.state;
    //filter 10
    if (clients) {
      const filterClients = clients.filter((client) => {
        if (activeFilter) {
          return (
            client.active === "true" &&
            client.lastName.toLowerCase().includes(searchField.toLowerCase())
          );
        }
        return client.lastName
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });
      return (
        <div className="container">
          <div className="row my-3">
            <div className="col-xl-3 col-lg-6">
              <div className="card card-inverse card-info">
                <div className="card-block bg-info">
                  <div className="rotate">
                    <i className="fa fa-user fa-8x"></i>
                  </div>
                  <h6 className="text-uppercase text-center mt-4 text-white">
                    Students in class
                  </h6>
                  <h1 className="display-1 text-center text-white"> {count}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-inverse card-success">
                <div className="card-block bg-success">
                  <div className="rotate">
                    <i className="fa fa-dollar-sign fa-8x "></i>
                  </div>
                  <h6 className="text-uppercase text-center mt-4 text-white">
                    Total Cash
                  </h6>
                  <h4 className="display-1 text-center text-white"> $1000</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-inverse card-success">
                <div className="card-block bg-primary text-dark">
                  <div className="rotate">
                    <i className="fa fa-check-circle fa-8x"></i>
                  </div>
                  <h6 className=" text-center mt-4 text-light">
                    Invoice: Fullfilled
                  </h6>
                  <h4 className="display-1 text-center text-light"> 0</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="card card-inverse card-danger">
                <div className="card-block bg-danger text-dark">
                  <div className="rotate">
                    <i className="fa fa-clock fa-8x"></i>
                  </div>
                  <h6 className=" text-center mt-4 text-light">
                    Invoice: Pending
                  </h6>
                  <h4 className="display-1 text-center text-light"> 10</h4>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients{""}
              </h2>

              <button className="btn btn-outline-dark mb-1" type="button">
                <Link to="/client/add">
                  <i className="fas fa-plus"> New</i>
                </Link>
              </button>
            </div>
          </div>
          <table className="table table-responsive-md  table-bordered table-hover table-striped">
            <thead className="thead-inverse  thead-dark ">
              <tr>
                <th>Name</th>
                <th>Teacher</th>
                <th>
                  <small>ClassName Day & Time</small>
                </th>
                <th>Qty</th>
                <th className="hoverPointer" onClick={this.activeChange}>
                  {activeFilter ? (
                    <span className="text-success">
                      Active <i className="fas fa-arrows-alt-v "></i>
                    </span>
                  ) : (
                    <span className="text-danger">
                      Active <i className="fas fa-arrows-alt-v "></i>
                    </span>
                  )}
                </th>
                <th>Gender</th>

                <th>
                  {" "}
                  <small>
                    <span className="text-success">Cash</span>/
                    <span className="text-primary">Check</span>
                  </small>
                </th>
                <th>
                  <form className="form-inline active-purple-3 active-purple-4">
                    {/* <i className="fas fa-search" aria-hidden="true"></i> */}
                    <input
                      className="form-control form-control-sm ml-3 w-75"
                      type="text"
                      placeholder="Last Name Search"
                      aria-label="Search"
                      onChange={this.handleChange}
                    />
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {filterClients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName.charAt(0).toUpperCase() +
                      client.firstName.slice(1)}{" "}
                    {client.lastName.charAt(0).toUpperCase() +
                      client.lastName.slice(1)}
                  </td>
                  <td>
                    {client.teacher.charAt(0).toUpperCase() +
                      client.teacher.slice(1)}
                  </td>
                  <td>
                    {client.classDay.toUpperCase()} - {client.time}
                  </td>
                  <td>{client.quantity}</td>
                  <td>
                    {client.active === "true" ? (
                      <span className="text-success">Still in ClassName</span>
                    ) : (
                      <span className="text-danger">Withdrew</span>
                    )}
                  </td>
                  <td>
                    {client.gender.charAt(0).toUpperCase() +
                      client.gender.slice(1)}
                  </td>

                  <td>
                    {client.cashCheck !== "none" ? (
                      client.cashCheck === "cash" ? (
                        <p className="text-success">Cash</p>
                      ) : (
                        <p className="text-primary">Check</p>
                      )
                    ) : (
                      <p className="text-info">None</p>
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right " /> Details
                    </Link>{" "}
                    <Link
                      to={`/createinvoice/${client.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right " /> Invoice
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-file-invoice-dollar"></i> Recent Invoices
                {""}
              </h2>
              <button
                className="btn btn-outline-dark mb-1 mr-2"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <Link to="/client/invoices">
                  <i className="fas fa-file-alt"></i> View All{" "}
                </Link>
              </button>
            </div>
            {/* recent invoices */}
          </div>
          <table className="  table table-responsive-md  table-bordered table-hover table-striped">
            <thead className="thead-inverse  thead-dark ">
              <tr>
                <th>No.</th>
                <th>Date</th>

                <th>Name</th>

                <th>Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            {/* {invoices
              ? invoices.map((invoice) => (
                  <testInvoiceClient invoices={invoices} />
                ))
              : console.log("none")} */}
            <testInvoiceClient />
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
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
