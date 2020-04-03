import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import "./ClientInvoice.style.css";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class ClientInvoice extends Component {
  render() {
    const { client } = this.props;

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
                <h3 className="mb-0">Invoice #{client.Id}</h3>
                Date: Current date
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
                      <th className="center">#</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th className="right">Price</th>
                      <th className="center">Qty</th>
                      <th className="right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="center">1</td>
                      <td className="left strong">{client.signUpDate}</td>
                      <td className="left">Iphone 10X with headphone</td>
                      <td className="right">$25</td>
                      <td className="center">{client.quantity}</td>
                      <td className="right">${client.quantity * 25}</td>
                    </tr>
                    <tr>
                      <td className="center">2</td>
                      <td className="left">{client.signUpDate}</td>
                      <td className="left">Iphone 8X with extended warranty</td>
                      <td className="right">$25</td>
                      <td className="center">{client.quantity}</td>
                      <td className="right">${client.quantity * 25}</td>
                    </tr>
                    <tr>
                      <td className="center">3</td>
                      <td className="left">{client.signUpDate}</td>
                      <td className="left">
                        Samsung 4C with extended warranty
                      </td>
                      <td className="right">$25</td>
                      <td className="center">{client.quantity}</td>
                      <td className="right">${client.quantity * 25}</td>
                    </tr>
                    <tr>
                      <td className="center">4</td>
                      <td className="left">{client.signUpDate}</td>
                      <td className="left">
                        Google prime with Amazon prime membership
                      </td>
                      <td className="right">$25</td>
                      <td className="center">{client.quantity}</td>
                      <td className="right">${client.quantity * 25}</td>
                    </tr>
                    <tr>
                      <td className="center">Books</td>
                      <td className="left">{client.signUpDate}</td>
                      <td className="left">
                        Google prime with Amazon prime membership
                      </td>
                      <td className="right">input cost</td>
                      <td className="center">{client.quantity}</td>
                      <td className="right">book total</td>
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
                          <strong className="text-dark"> extra</strong>
                        </td>
                        <td className="right"> extra cost</td>
                      </tr>

                      <tr>
                        <td className="left">
                          <strong className="text-dark">Total</strong>{" "}
                        </td>
                        <td className="right">
                          <strong className="text-dark">
                            ${client.quantity * 4 * 25} + book + extra
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
