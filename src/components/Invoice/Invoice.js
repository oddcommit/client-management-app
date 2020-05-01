import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import LineItems from "./LineItems";
import Spinner from "../layout/Spinner";

import uuid from "react-uuid";
import * as moment from "moment";
import "moment-recur";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import styles from "./Invoice.module.scss";

import "./invoice.style.css";

class Invoice extends Component {
  locale = "en-US";
  currency = "USD";

  state = {
    dateArray: [],
    totalPrice: 0,
    userPay: false,
    credit: 0,
    book: 0,
    lineItems: [
      {
        id: "initial", // react-beautiful-dnd unique key
        name: "",
        description: "",
        quantity: 0,
        price: 0.0,
      },
    ],
  };

  handleInvoiceChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item;
      return { ...item, [event.target.name]: event.target.value };
    });
    this.setState({ lineItems });
  };

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        { id: uuid(), name: "", description: "", quantity: 0, price: 0.0 },
      ]),
    });
  };

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i;
      }),
    });
  };

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    });
  };

  handleFocusSelect = (event) => {
    event.target.select();
  };

  handlePayButtonClick = () => {
    window.print();
  };

  handleSaveButtonClick = () => {
    const { client, firestore } = this.props;

    this.setState({
      totalPrice: this.formatCurrency(this.calcGrandTotal()),
    });

    const invoiceUpdate = {
      invoice: this.state,
    };

    //update firestore

    firestore.update({ collection: "clients", doc: client.id }, invoiceUpdate);
  };

  handleBootstrapSwith = (checked) => {
    this.setState({ userPay: checked });
  };

  formatCurrency = (amount) => {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  componentDidMount() {
    // let now = moment().format("LLL");
    const { client } = this.props;

    //set the date
    let firstDay = new Date();
    if (client) {
      let nextMonth = new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate()
      );
      let events = moment(nextMonth)
        .recur()
        .every(client.classDay)
        .daysOfWeek()
        .weeksOfMonthByDay();

      let dateArray = events.next(4, "MM/DD/YYYY");
      let newDateState = [dateArray];
      this.setState({
        dateArray: newDateState[0],
        totalPrice: client.price * client.quantity * 4,
      });
    }
  }

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price,
      0
    );
  };

  calcGrandTotal = () => {
    const { client } = this.props;
    let total = this.calcLineItemsTotal() + client.price * client.quantity * 4;

    return total;
  };

  render = () => {
    const { client } = this.props;

    if (client) {
      return (
        <div className="container">
          <div className="row mb-6">
            <div className="col-sm-5">
              <h5 className="mb-1">From:</h5>
              <img
                src="../Doremi.jpg"
                className="img-fluid rounded"
                alt="Invoice logo"
              />
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-4 space-between">
              <h5 className="mb-3">To:</h5>
              <h4 className="text-dark mb-1">
                {" "}
                {client.firstName.charAt(0).toUpperCase() +
                  client.firstName.slice(1)}{" "}
                {client.lastName.charAt(0).toUpperCase() +
                  client.lastName.slice(1)}
              </h4>
              <div>{client.streetAddress}</div>
              <div>
                {client.city}, {client.state}, {client.postalCode}
              </div>
              <div>Email: {client.email}</div>
              <div>Phone: {client.phone}</div>
            </div>
          </div>
          <h2>Invoice</h2>
          <hr className=" bg-primary my-3" />
          <div className="d-flex align-items-end flex-column bd-highlight mb-3 justify-content-end">
            <h4
              className={`${
                client.invoice.credit > 0 ? "text-danger" : "text-success"
              }`}
            >
              Credit: ${client.invoice.credit}{" "}
            </h4>{" "}
            <h4 className="hide-on-print">Deposit: ${client.deposit}</h4>
            <h4
              className={`${
                client.invoice.book > 0 ? "text-danger" : "text-success"
              }`}
            >
              Book: ${client.invoice.book}
            </h4>
          </div>

          <LineItems
            items={this.state.lineItems}
            client={client}
            state={this.state}
            currencyFormatter={this.formatCurrency}
            addHandler={this.handleAddLineItem}
            changeHandler={this.handleLineItemChange}
            focusHandler={this.handleFocusSelect}
            deleteHandler={this.handleRemoveLineItem}
            reorderHandler={this.handleReorderLineItems}
          />
          <hr className=" bg-primary" />

          <div className="d-flex flex-column bd-highlight mb-3 align-items-end">
            <button
              className={` btn btn-circle btn-primary hide-on-print mb-3 `}
              onClick={this.handleSaveButtonClick}
            >
              Save
            </button>

            <div className="hide-on-print mb-3">
              Student Pay:{" "}
              <BootstrapSwitchButton
                checked={client.invoice.userPay}
                onlabel="Yes"
                offlabel="No"
                onstyle="outline-success"
                offstyle="outline-danger"
                onChange={this.handleBootstrapSwith}
              />
            </div>

            <div className={styles.totalContainer}>
              <p></p>
              <form>
                <div className={styles.valueTable}>
                  <div className={styles.row}>
                    <div className={styles.label}>Total Due</div>
                    <div className={`${styles.value} ${styles.currency}`}>
                      {/* {this.formatCurrency(this.calcGrandTotal())} */}
                      {this.state.totalPrice}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className={`${styles.pay} hide-on-print`}>
              <button
                className={styles.payNow}
                onClick={this.handlePayButtonClick}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  };
}

export default compose(
  firestoreConnect((props) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(Invoice);
