import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import * as moment from "moment";
import "moment-recur";

import "./invoice.style.css";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import InvoiceItem from "./InvoiceItem";

class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      extra: "",
      total: "",
      1: {
        id: 1,
        date: "1/1/2020",
        qty: "",
      },
      2: {
        id: 2,
        date: "2/2/2020",
        qty: "",
      },
      3: {
        id: 3,
        date: "3/3/2020",
        qty: "",
      },
      4: {
        id: 4,
        date: "4/4/2020",
        qty: "",
      },
      showUpdate: false,
    };
  }

  getNextEvents = (dayOfWeek) => {
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

    return events.next(5, "MM/DD/YYYY");
  };

  //update submit////
  updateSubmit = (e) => {
    e.preventDefault();

    const { client, firestore } = this.props;
    const { showUpdate, extra } = this.state;

    let extra1 = extra;

    const clientUpdate = {
      invoice: this.state.qty,
      extra: extra1,
    };

    //update firestore

    firestore.update({ collection: "clients", doc: client.id }, clientUpdate);

    this.setState({
      showUpdate: !showUpdate,
    });
  };

  onUpdateChange = () => {
    const { showUpdate } = this.state;
    this.setState({
      showUpdate: !showUpdate,
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //render
  render() {
    const { client } = this.props;
    const { extra, showUpdate } = this.state;
    let now = moment().format("LLL");
    console.log(this.state);

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
                      <th>#</th>
                      <th>Date</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {console.log(this.getNextEvents(client.classDay))}

                    <InvoiceItem
                    // client={client}
                    // date={this.state[1].date}
                    // key={this.state[1].id}
                    // index={this.state[1].id}
                    // state={this.state}
                    // onQtyChange={this.onQtySubmit}
                    // updateQtyForm={this.updateQtyForm}
                    />

                    <tr>
                      <th scope="row">Extra</th>
                      <td></td>
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
  firestoreConnect((props) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(Invoice);
