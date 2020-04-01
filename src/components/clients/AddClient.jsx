import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
// import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

//uploading to firestore don't need connect

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: "",
    parentName: "",
    classDay: "",
    instrument: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    state: "",
    dob: "",
    signUpDate: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newClient = this.state;
    const { firestore } = this.props;
    //if no balance, make 0
    if (newClient.balance === "") {
      newClient.balance = 0;
    }
    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => this.props.history.push("/"));
  };

  render() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    console.log(date);
    return (
      <div>
        <div className="row">
          <div className="col-md-6"></div>
          <Link to="/" className="btn btn-link">
            <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
          </Link>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>

          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    minLength="2"
                    required
                    onChange={this.onChange}
                    value={this.state.firstName}
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    minLength="2"
                    required
                    onChange={this.onChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="sob">DOB</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dob"
                    minLength="2"
                    required
                    onChange={this.onChange}
                    value={this.state.dob}
                  />
                </div>

                <div className="col-sm-6">
                  <label className="mr-sm-2" htmlFor="instrument">
                    Instrument
                  </label>
                  <select
                    className="custom-select mr-sm-2"
                    id="instrument"
                    name="instrument"
                    onChange={this.onChange}
                  >
                    <option defaultValue="">Choose...</option>
                    <option value="piano">Piano</option>
                    <option value="drums">Drums</option>
                    <option value="guitar">Guitar</option>
                    <option value="bass">Bass</option>
                    <option value="violin">Violin</option>
                    <option value="cello">Cello</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="parentName">Parent Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="parentName"
                  onChange={this.onChange}
                  value={this.state.parentName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    minLength="10"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />
                </div>{" "}
                <div className="col-sm-6">
                  <label htmlFor="balance">Balance</label>
                  <input
                    type="text"
                    className="form-control"
                    name="balance"
                    onChange={this.onChange}
                    value={this.state.balance}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="classDay">Class Day</label>
                  <input
                    type="text"
                    className="form-control"
                    name="classDay"
                    onChange={this.onChange}
                    value={this.state.classDay}
                  />
                </div>{" "}
                <div className="col-sm-6">
                  <label htmlFor="signUpDate">Current Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="signUpDate"
                    onChange={this.onChange}
                    value={this.state.signUpDate}
                    placeholder={date}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-6">
                  <label htmlFor="streetAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="streetAddress"
                    onChange={this.onChange}
                    value={this.state.streetAddress}
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    onChange={this.onChange}
                    value={this.state.city}
                    placeholder="City"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    onChange={this.onChange}
                    value={this.state.state}
                    placeholder="State"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postalCode"
                    value={this.state.postalCode}
                    onChange={this.onChange}
                    placeholder="Postal Code"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(AddClient);
