import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import Spinner from "../../layout/Spinner";

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
    this.depositInput = React.createRef();
    this.quantityInput = React.createRef();
    this.classDayInput = React.createRef();
    this.timeDayInput = React.createRef();
    this.teacherInput = React.createRef();
    this.signUpDateInput = React.createRef();
    this.dobInput = React.createRef();
    this.instrumentInput = React.createRef();
    this.genderInput = React.createRef();
    this.activeInput = React.createRef();
    this.knowAboutUsInput = React.createRef();
    this.streetAddressInput = React.createRef();
    this.cityInput = React.createRef();
    this.stateInput = React.createRef();
    this.postalCodeInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { client, firestore } = this.props;
    //updated the client
    const updClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      parentName: this.parentNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      deposit:
        this.depositInput.current.value === ""
          ? 0
          : this.depositInput.current.value,
      quantity:
        this.quantityInput.current.value == ""
          ? 0
          : this.quantityInput.current.value,
      classDay: this.classDayInput.current.value,
      timeDay: this.timeDayInput.current.value,
      teacher: this.teacherInput.current.value,
      signUpDate: this.signUpDateInput.current.value,
      dob: this.dobInput.current.value,
      instrument: this.instrumentInput.current.value,
      gender: this.genderInput.current.value,
      active: this.activeInput.current.value,
      knowAboutUs: this.knowAboutUsInput.current.value,
      streetAddress: this.streetAddressInput.current.value,
      city: this.cityInput.current.value,
      state: this.stateInput.current.value,
      postalCode: this.postalCodeInput.current.value,
    };
    //update the firestore
    firestore
      .update({ collection: "clients", doc: client.id }, updClient)
      .then(this.props.history.push("/dashboard"));
  };
  render() {
    const { client } = this.props;
    const { disableBalanceOnEdit } = this.props.settings;

    if (client) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <Link to="/dashboard" className="btn btn-link">
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
                  <div className="col-sm-6">
                    <label htmlFor="sob">DOB</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dob"
                      minLength="2"
                      required
                      ref={this.dobInput}
                      defaultValue={client.dob}
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
                      ref={this.instrumentInput}
                      defaultValue={client.instrument}
                    >
                      <option defaultValue="">Choose...</option>
                      <option value="piano">Piano</option>
                      <option value="drums">Drums</option>
                      <option value="guitar">Guitar</option>
                      <option value="bass">Bass</option>
                      <option value="violin">Violin</option>
                      <option value="cello">Cello</option>
                      <option value="vocal">Vocal</option>
                    </select>
                  </div>

                  <div className="col-sm-3 mt-4 space-between">
                    <label htmlFor="gender">
                      Gender{" "}
                      <select
                        name="gender"
                        id="gender"
                        ref={this.genderInput}
                        defaultValue={client.gender}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </label>
                  </div>

                  <div className="col-sm-3 mt-4 space-between">
                    <label htmlFor="active">
                      Active{" "}
                      <select
                        name="active"
                        id="active"
                        ref={this.activeInput}
                        defaultValue={client.active}
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </label>
                  </div>

                  <div className="col-sm-6">
                    <label className="mr-sm-2" htmlFor="knowAboutUs">
                      How did you know about us?
                    </label>
                    <select
                      className="custom-select mr-sm-2"
                      id="knowAboutUs"
                      name="knowAboutUs"
                      ref={this.knowAboutUsInput}
                      defaultValue={client.knowAboutUs}
                    >
                      <option defaultValue="">Choose...</option>
                      <option value="internet">Internet</option>
                      <option value="newspaper">Newspaper</option>
                      <option value="walkIn">Walk In</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
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
                  <div className="col-sm-4">
                    <label htmlFor="deposit">Deposit</label>
                    <input
                      type="text"
                      className="form-control"
                      name="deposit"
                      ref={this.depositInput}
                      defaultValue={client.deposit}
                      disabled={disableBalanceOnEdit}
                    />
                  </div>
                  <div className="col-sm-2">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      ref={this.quantityInput}
                      defaultValue={client.quantity}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-2">
                    <label className="mr-sm-2" htmlFor="classDay">
                      Class Day
                    </label>
                    <select
                      className="custom-select mr-sm-2"
                      id="classDay"
                      name="classDay"
                      ref={this.classDayInput}
                      defaultValue={client.classDay}
                    >
                      <option defaultValue="">Choose...</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>{" "}
                  <div className="col-sm-2">
                    <label htmlFor="time">Time</label>
                    <input
                      type="text"
                      className="form-control"
                      name="time"
                      ref={this.timeDayInput}
                      defaultValue={client.time}
                    />
                  </div>{" "}
                  <div className="col-sm-2">
                    <label htmlFor="teacher">Teacher</label>
                    <input
                      type="text"
                      className="form-control"
                      name="teacher"
                      ref={this.teacherInput}
                      defaultValue={client.teacher}
                    />
                  </div>{" "}
                  <div className="col-sm-6">
                    <label htmlFor="signUpDate">
                      Sign Up Date (<small>Default: current date</small>)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="signUpDate"
                      ref={this.signUpDateInput}
                      defaultValue={client.signUpDate}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="streetAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="streetAddress"
                      ref={this.streetAddressInput}
                      defaultValue={client.streetAddress}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      ref={this.cityInput}
                      defaultValue={client.city}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      ref={this.stateInput}
                      defaultValue={client.state}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCode"
                      ref={this.postalCodeInput}
                      defaultValue={client.postalCode}
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
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect((props) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings: settings,
  }))
)(EditClient);
