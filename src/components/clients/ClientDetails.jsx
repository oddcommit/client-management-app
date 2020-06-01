import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

import { firestoreConnect } from "react-redux-firebase";

class ClientDetails extends Component {
  state = {
    showDepositUpdate: false,
    depositUpdateAmount: "",
  };
  //update deposit
  depositSubmit = (e) => {
    e.preventDefault();

    const { client, firestore } = this.props;
    const { depositUpdateAmount } = this.state;
    const clientUpdate = {
      deposit: parseFloat(depositUpdateAmount),
    };

    //update firestore

    firestore.update({ collection: "clients", doc: client.id }, clientUpdate);
  };

  //delete client

  onDeleteClick = () => {
    const { client, firestore } = this.props;
    firestore
      .delete({ collection: "clients", doc: client.id })
      .then(() => this.props.history.push("/dashboard"));
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  week = (numberOfDays) => {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor((numberOfDays % 365) / 30);
    var days = Math.floor((numberOfDays % 365) % 30);

    var yearsDisplay =
      years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay =
      months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay + daysDisplay;
  };

  render() {
    const { client } = this.props;
    const {
      showDepositUpdate,
      depositUpdateAmount,
      showActiveUpdate,
    } = this.state;
    //get the total and current day
    function parseDate(str) {
      var mdy = str.split("-");
      return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    }

    function datediff(first) {
      var today = new Date();
      var date =
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear();

      return Math.round(
        Math.abs((parseDate(first) - parseDate(date)) / (1000 * 60 * 60 * 24))
      );
    }

    let depositForm = "";
    //if deposit form should deisplay
    if (showDepositUpdate) {
      depositForm = (
        <form onSubmit={this.depositSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="depositUpdateAmount"
              placeholder="Add New deposit"
              value={depositUpdateAmount}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <input
                type="submit"
                value="Update"
                className="btn btn-outline-dark"
              />
            </div>
          </div>
        </form>
      );
    } else {
      depositForm = null;
    }

    if (client) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link to="/dashboard" className="btn btn-link">
                <i className="fas fa-arrow-circle-left">Back to Dashboard</i>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                  {" "}
                  Edit
                </Link>
                <button onClick={this.onDeleteClick} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <h3 className="card-header">
              {client.firstName.charAt(0).toUpperCase() +
                client.firstName.slice(1)}{" "}
              {client.lastName.charAt(0).toUpperCase() +
                client.lastName.slice(1)}{" "}
              ({client.instrument.toUpperCase()})
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Client Id:{" "}
                    <span className="text-secondary">{client.id}</span>
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className="pull-right">
                    Deposit: ${parseFloat(client.deposit).toFixed(2)}{" "}
                    <small>
                      {" "}
                      <a
                        href="#!"
                        onClick={() =>
                          this.setState({
                            showDepositUpdate: !this.state.showDepositUpdate,
                          })
                        }
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                    </small>
                  </h3>
                  {depositForm}
                  <h3 className="pull-right">
                    Active:{" "}
                    {client.active === "true" ? (
                      <span className="text-success">Still in Class</span>
                    ) : (
                      <span className="text-danger">Withdrew </span>
                    )}
                  </h3>
                </div>
              </div>

              <hr className="bg-primary" />
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  Contact Email: {client.email}
                </li>
                <li className="list-group-item">
                  {" "}
                  Parent: {client.parentName}
                </li>
                <li className="list-group-item">
                  {" "}
                  Contact Phone: {client.phone}
                </li>
                <li className="list-group-item"> DOB: {client.dob}</li>
                <li className="list-group-item"> Gender: {client.gender}</li>
                <li className="list-group-item">
                  {" "}
                  Class Day: {client.classDay.toUpperCase()}
                </li>
                <li className="list-group-item"> Time: {client.time}</li>
                <li className="list-group-item"> Teacher: {client.teacher}</li>
                <li className="list-group-item">
                  {" "}
                  Sign Up: {client.signUpDate}
                </li>
                <li className="list-group-item">
                  {" "}
                  Total Days: {this.week(datediff(client.signUpDate))}
                </li>
                <li className="list-group-item">
                  {" "}
                  Know About Us: {client.knowAboutUs}
                </li>
              </ul>
              <hr className="bg-primary" />

              {/* <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  Price: ${client.invoice.price}
                </li>
                <li className="list-group-item">
                  {" "}
                  credit: {client.invoice.credit}
                </li>

                <li className="list-group-item">
                  {" "}
                  Pay: {client.invoice.userPay}
                </li>
              </ul> */}

              <hr className="bg-success" />
              <div className="container">
                <div className="col-md-4">
                  <div>
                    <strong>Address</strong>
                    <br />
                    {client.streetAddress}
                    <br />
                    {client.city}, {client.state} {client.postalCode}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect((props) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(ClientDetails);
