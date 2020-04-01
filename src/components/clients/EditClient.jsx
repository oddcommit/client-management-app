import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

import { firestoreConnect } from "react-redux-firebase";

class EditClient extends Component {
  constructor(props) {
    super(props);
    //create refs
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.parentNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
    this.classDayInput = React.createRef();
    this.instrumentInput = React.createRef();
    this.streetAddressInput = React.createRef();
    this.cityInput = React.createRef();
    this.stateInput = React.createRef();
    this.postalCodeInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const { client, firestore } = this.props;
    //updated the client
    const updClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      parentName: this.parentNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance:
        this.balanceInput.current.value == ""
          ? 0
          : this.balanceInput.current.value,
      classDay: this.classDayInput.current.value,
      instrument: this.instrumentInput.current.value,
      streetAddress: this.streetAddressInput.current.value,
      city: this.cityInput.current.value,
      state: this.stateInput.current.value,
      postalCode: this.postalCodeInput.current.value
    };
    //update the firestore
    firestore
      .update({ collection: "clients", doc: client.id }, updClient)
      .then(this.props.history.push("/"));
  };
  render() {
    const { client } = this.props;

    if (client) {
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
                      ref={this.firstNameInput}
                      defaultValue={client.firstName}
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
                      ref={this.lastNameInput}
                      defaultValue={client.lastName}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="parentName">Parent Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="parentName"
                    ref={this.parentNameInput}
                    defaultValue={client.parentName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    ref={this.emailInput}
                    defaultValue={client.email}
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
                      ref={this.phoneInput}
                      defaultValue={client.phone}
                    />
                  </div>{" "}
                  <div className="col-sm-6">
                    <label htmlFor="balance">Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      name="balance"
                      ref={this.balanceInput}
                      defaultValue={client.balance}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="classDay">Class Day</label>
                  <input
                    type="text"
                    className="form-control"
                    name="classDay"
                    ref={this.classDayInput}
                    defaultValue={client.classDay}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="instrument">Instrument</label>
                  <input
                    type="text"
                    className="form-control"
                    name="instrument"
                    ref={this.instrumentInput}
                    defaultValue={client.instrument}
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="streetAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="streetAddress"
                      ref={this.streetAddressInput}
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      ref={this.cityInput}
                      placeholder="City"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      ref={this.stateInput}
                      placeholder="State"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCode"
                      ref={this.postalCodeInput}
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
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
