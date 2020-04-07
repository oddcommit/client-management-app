import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import * as moment from "moment";
import "moment-recur";

import "./ClientInvoice.style.css";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import ClientInvoiceItem from "./ClientInvoiceItem";

class ClientInvoice extends Component {
  state = {
    extra: "",
    qty: [
      { showQtyUpdate: false, qtyItem: "hey" },
      { showQtyUpdate: false, qtyItem: "ad" },
      { showQtyUpdate: false, qtyItem: "yho" },
      { showQtyUpdate: false, qtyItem: "bv" }
    ],
    total: "",
    showUpdate: false
  };
  getNextEvents = dayOfWeek => {
    let firstDay = new Date();

    let nextMonth = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      firstDay.getDate()
    );
    let events = moment(nextMonth)
      .recur()
      .every(dayOfWeek)
      .daysOfWeek()
      .weeksOfMonthByDay();

    return events.next(4, "MM/DD/YYYY");
  };

  //update submit
  updateSubmit = e => {
    e.preventDefault();

    const { client, firestore } = this.props;
    const { showUpdate, extra } = this.state;

    let extra1 = extra;

    const clientUpdate = {
      invoice: this.state.qty,
      extra: extra1
    };

    //update firestore

    firestore.update({ collection: "clients", doc: client.id }, clientUpdate);

    this.setState({
      showUpdate: !showUpdate
    });
  };
  //qty submit form
  // onQtySubmitForm = e => {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   const { client, firestore } = this.props;
  //   const { qty } = this.state;

  //   const clientUpdate = {
  //     qty: qty
  //   };

  //   //update firestore

  //   firestore.update({ collection: "clients", doc: client.id }, clientUpdate);
  // };
  /////////////////////////////
  onUpdateChange = () => {
    const { showUpdate } = this.state;
    this.setState({
      showUpdate: !showUpdate
    });
  };

  //updating QTy

  // onQtySubmit = i => {
  //   const { qty } = this.state;
  //   let qtyArray = [];
  //   for (let index in qty) {
  //     let newQty = qty[index];
  //     if (index == i) {
  //       newQty = {
  //         showQtyUpdate: !newQty.showQtyUpdate,
  //         qty1: "It work!"
  //       };
  //     }
  //     qtyArray.push(newQty);
  //   }
  //   this.setState({
  //     qty: qtyArray
  //   });
  // };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //qty change
  // onQtyChange = e => {
  //   const { qty } = { ...this.state };
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   console.log("name and value", name, value, e);
  //   // const currentState = qty;
  //   // currentState[name] = value;
  //   // this.setState({ qty: currentState });
  // };

  render() {
    const { client } = this.props;
    const { extra, showUpdate, qty } = this.state;
    let now = moment().format("LLL");

    //set update book and extra
    let updateForm = "";
    //if deposit form should deisplay
    if (showUpdate) {
      updateForm = (
        <form onSubmit={this.updateSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="extra"
              placeholder="Enter the amount"
              value={extra}
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
      updateForm = null;
    }

    //update Qty form
    let updateQtyForm = "";
    //if deposit form should deisplay

    qty.map((item, index) => {
      if (item.showQtyUpdate) {
        updateQtyForm = (
          <form onSubmit={this.onQtySubmitForm}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="AHHHH"
                placeholder="Enter Qty"
                value="kikiki"
                onChange={this.onQtyChange}
              />

              <div className="input-group-append">
                <input
                  type="submit"
                  value="Change"
                  className="btn btn-outline-dark"
                />
              </div>
            </div>
          </form>
        );
      } else {
        updateQtyForm = null;
      }
    });

    if (client) {
      return (
        <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
          <div className="card">
            <div className="card-header p-4">
              <a
                className="pt-2 d-inline-block"
                href="index.html"
                data-abc="true"
              >
                www.doremimusic.net{" "}
              </a>
              <div className="float-right">
                <h3 className="mb-0">Invoice #{client.id}</h3>
                Date: {now}
              </div>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h5 className="mb-3">From:</h5>
                  <img
                    src="../Doremi.jpg"
                    className="img-fluid rounded"
                    alt="Invoice logo"
                  />
                </div>
                <div className="col-sm-6 space-between">
                  <h5 className="mb-3">To:</h5>
                  <h3 className="text-dark mb-1">
                    {" "}
                    {client.firstName} {client.lastName}
                  </h3>
                  <div>{client.streetAddress}</div>
                  <div>
                    {client.city}, {client.state}, {client.postalCode}
                  </div>
                  <div>Email: {client.email}</div>
                  <div>Phone: {client.phone}</div>
                </div>
              </div>
              <div className="table-responsive-sm">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* {this.getNextEvents(client.classDay).map((date, index) => (
                      <ClientInvoiceItem
                        client={client}
                        date={date}
                        key={index}
                        index={index}
                        state={this.state}
                        onQtyChange={this.onQtySubmit}
                        updateQtyForm={this.updateQtyForm}
                      />
                    ))} */}

                    <tr>
                      <th scope="row">This is the date</th>
                      <td>$25</td>
                      <td>
                        {
                          <h3 className="pull-right">
                            <small>
                              {" "}
                              <a href="#!" onClick={() => this.onQtyChange()}>
                                {client.quantity}
                              </a>
                            </small>
                            {updateQtyForm}
                          </h3>
                        }
                      </td>
                      <td>${client.quantity * 25}</td>
                    </tr>

                    <tr>
                      <th scope="row">Extra</th>
                      <td></td>
                      <td></td>
                      <td>
                        {
                          <h3 className="pull-right">
                            <small>
                              {" "}
                              <a href="#!" onClick={this.onUpdateChange}>
                                $
                                {extra === ""
                                  ? 0
                                  : parseFloat(extra).toFixed(2)}{" "}
                              </a>
                            </small>
                            {updateForm}
                          </h3>
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-5"></div>
                <div className="col-lg-4 col-sm-5 ml-auto">
                  <table className="table table-clear">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Total</strong>{" "}
                        </td>
                        <td className="right">
                          <strong className="text-dark">
                            {extra
                              ? `$${(
                                  client.quantity * 4 * 25 +
                                  parseFloat(extra)
                                ).toFixed(2)}`
                              : `$${client.quantity * 4 * 25}`}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white">
              <p className="mb-0">Thank You for learning music with us!</p>
              <p className="mb-0">
                Reminder: All absences need to be notified 1 day ahead
              </p>
              <p className="mb-0">
                There will be a $5 processing fee for payments after due date.
                Thank You
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientInvoice);
