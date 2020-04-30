import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import { firestoreConnect } from "react-redux-firebase";

class Clients extends Component {
  state = {
    totalDeposit: null,
    searchResult: "",
    count: null,
    cashCheck: "",
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      //add the deposits
      // const total = clients.reduce((total, client) => {
      //   return total + parseFloat(client.deposit.toString());
      // }, 0);
      // return { totalDeposit: total };
      let count = clients.filter((client) => {
        return client.active === "true";
      });
      return {
        count: count.length,
      };
    }
    return null;
  }
  handleBootstrapSwith = (checked) => {
    this.setState({ cashCheck: checked });
  };

  render() {
    const { clients } = this.props;
    const { totalDeposit, count } = this.state;

    if (clients) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-9">
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

            <div className="col-md-3 collapse my-0 py-0 " id="collapseExample">
              <h5 className="text-right text-secondary my-0 py-0 ">
                Total Still In Class:{" "}
                <span className="text-primary ">{count}</span>
              </h5>
              <h5 className="text-right text-secondary my-0 py-0 ">
                Total Cash: <span className="text-primary">{count}</span>
              </h5>
              <h5 className="text-right text-secondary my-0 py-0 ">
                Total check: <span className="text-primary">{count}</span>
              </h5>
              <h5 className="text-right text-secondary my-0 py-0 ">
                Pay: <span className="text-primary">{count}</span>
              </h5>
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
                <th>Active</th>
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
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input
                      class="form-control form-control-sm ml-3 w-75"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
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
                    {client.invoice.userPay ? (
                      <p className="text-success">YES</p>
                    ) : (
                      <p className="text-danger">NO</p>
                    )}
                  </td>
                  <td>
                    <BootstrapSwitchButton
                      checked={this.state.userPay}
                      onlabel="Cash"
                      offlabel="Check"
                      size="sm"
                      onstyle="outline-success"
                      offstyle="outline-primary"
                      onChange={this.handleBootstrapSwith}
                    />
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
