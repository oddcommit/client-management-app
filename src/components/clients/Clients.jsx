import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

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
      tallyPay: null,
    };
  }

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
    const { clients } = this.props;
    const {
      count,
      tallyCheck,
      tallyCash,
      tallyPay,
      searchField,
      activeFilter,
    } = this.state;

    console.log(localStorage);

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
          <div class="row my-3">
            <div class="col-xl-3 col-lg-6">
              <div class="card card-inverse card-info">
                <div class="card-block bg-info">
                  <div class="rotate">
                    <i class="fa fa-user fa-5x"></i>
                  </div>
                  <h6 class="text-uppercase text-center mt-4 ">
                    Students in class
                  </h6>
                  <h1 class="display-1 text-center"> {count}</h1>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-inverse card-success">
                <div class="card-block bg-success">
                  <div class="rotate">
                    <i class="fa fa-dollar-sign fa-5x"></i>
                  </div>
                  <h6 class="text-uppercase text-center mt-4 ">Total Cash</h6>
                  <h4 class="display-1 text-center"> $1000</h4>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-inverse card-success">
                <div class="card-block bg-primary text-dark">
                  <div class="rotate">
                    <i class="fa fa-check-circle fa-5x"></i>
                  </div>
                  <h6 class=" text-center mt-4 text-light">
                    Invoice: Fullfilled
                  </h6>
                  <h4 class="display-1 text-center text-light"> 0</h4>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-inverse card-danger">
                <div class="card-block bg-danger text-dark">
                  <div class="rotate">
                    <i class="fa fa-clock fa-5x"></i>
                  </div>
                  <h6 class=" text-center mt-4 text-light">Invoice: Pending</h6>
                  <h4 class="display-1 text-center text-light"> 10</h4>
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
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i class="fas fa-file-invoice-dollar"></i> Recent Invoices
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
                <Link to="/client/invoice">
                  <i class="fas fa-file-alt"></i> View All{" "}
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
            <tbody>
              {filterClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id} </td>
                  <td>
                    {client.classDay.toUpperCase()} - {client.time}
                  </td>
                  <td>
                    {client.firstName.charAt(0).toUpperCase() +
                      client.firstName.slice(1)}{" "}
                    {client.lastName.charAt(0).toUpperCase() +
                      client.lastName.slice(1)}
                  </td>
                  <td>{client.invoice.totalPrice}</td>
                  <td>Pending</td>

                  <td>
                    <ul class="nav nav-list">
                      <li
                        class="nav-header"
                        data-toggle="collapse"
                        data-target="#test"
                      >
                        {" "}
                        <i class="fas fa-ellipsis-v hoverPointer"></i>
                        <ul class="collapse list-unstyled" id="test">
                          <li>
                            <button
                              href="/ticket_list.cfm"
                              title="Show list of tickets"
                              className="bg-danger mb-1"
                            >
                              <small>Delete Invoice</small>
                            </button>
                          </li>
                          <li>
                            <button href="#" title="Edit user accounts">
                              {false ? (
                                <small className="text-danger">
                                  Mark as Pending
                                </small>
                              ) : (
                                <small className="text-success">
                                  Mark as Paid
                                </small>
                              )}
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
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
