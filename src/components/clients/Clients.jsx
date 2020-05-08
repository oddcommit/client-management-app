import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

import { firestoreConnect } from "react-redux-firebase";

class Clients extends Component {
  state = {
    searchField: "",
    activeFilter: true,
    count: null,
    tallyCheck: null,
    tallyCash: null,
    tallyPay: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      let tallyCheck = clients.filter((client) => {
        return client.invoice.cashCheck === "check";
      });
      let tallyCash = clients.filter((client) => {
        return client.invoice.cashCheck === "cash";
      });
      let tallyPay = clients.filter((client) => {
        return client.invoice.userPay === "yes";
      });
      let count = clients.filter((client) => {
        return client.active === "true";
      });

      return {
        count: count.length,
        tallyCheck: tallyCheck.length,
        tallyCash: tallyCash.length,
        tallyPay: tallyPay.length,
      };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  activeChange = () => {
    const currentState = this.state.activeFilter;
    this.setState({ activeFilter: !currentState });
  };

  render() {
    const { clients } = this.props;
    const {
      count,
      tallyCheck,
      tallyCash,
      tallyPay,
      searchField,
      activeFilter,
    } = this.state;
    console.log(activeFilter);

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
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Client{""}
              </h2>
              <button
                className="btn btn-outline-dark mb-1 mr-2"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <small> Total Report</small>
              </button>
              <button className="btn btn-outline-dark mb-1" type="button">
                <Link to="/client/add">
                  <i className="fas fa-plus"> New</i>
                </Link>
              </button>
            </div>

            <div className="col-md-6 collapse my-0 py-0 " id="collapseExample">
              <ul className="list-group ">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Total Still In Class:{" "}
                  <span className="badge badge-primary badge-pill">
                    {count}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Total Cash:
                  <span className="badge badge-primary badge-pill">
                    {tallyCash}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Total Check:
                  <span className="badge badge-primary badge-pill">
                    {tallyCheck}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Pay:
                  <span className="badge badge-primary badge-pill">
                    {tallyPay}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <table className="  table table-responsive-md  table-bordered table-hover table-striped">
            <thead className="thead-inverse  thead-dark ">
              <tr>
                <th>Name</th>
                <th>Teacher</th>
                <th>
                  <small>Class Day & Time</small>
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
                <th>Pay</th>

                <th>
                  {" "}
                  <small>
                    <span className="text-success">Cash</span>/
                    <span className="text-primary">Check</span>
                  </small>
                </th>
                <th>
                  <form class="form-inline active-purple-3 active-purple-4">
                    {/* <i class="fas fa-search" aria-hidden="true"></i> */}
                    <input
                      class="form-control form-control-sm ml-3 w-75"
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
                      <span className="text-success">Still in Class</span>
                    ) : (
                      <span className="text-danger">Withdrew</span>
                    )}
                  </td>
                  <td>
                    {client.gender.charAt(0).toUpperCase() +
                      client.gender.slice(1)}
                  </td>
                  <td>
                    {client.invoice.userPay !== "none" ? (
                      client.invoice.userPay === "yes" ? (
                        <p className="text-success">YES</p>
                      ) : (
                        <p className="text-danger">NO</p>
                      )
                    ) : (
                      <p className="text-info">None</p>
                    )}
                  </td>
                  <td>
                    {client.invoice.cashCheck !== "none" ? (
                      client.invoice.cashCheck === "cash" ? (
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
                      to={`/invoice/${client.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right " /> Invoice
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
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
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);
