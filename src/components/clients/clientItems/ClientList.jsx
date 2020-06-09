import React from "react";
import { Link } from "react-router-dom";

import Spinner from "../../layout/Spinner";
import InvoiceDetails from "../../pages/view/InvoiceDetails";

class ClientList extends React.Component {
  render() {
    const {
      state,
      handleChange,
      activeChange,
      clients,
      componentWillUpdate,
      invoices,
    } = this.props;
    const {
      count,
      tallyCheck,
      tallyCash,
      searchField,
      activeFilter,
      // pendingStatus,
    } = state;

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
                  <small>ClassName Day & Time</small>
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

                <th>
                  {" "}
                  <small>
                    <span className="text-success">Cash</span>/
                    <span className="text-primary">Check</span>
                  </small>
                </th>
                <th>
                  <form className="form-inline active-purple-3 active-purple-4">
                    {/* <i className="fas fa-search" aria-hidden="true"></i> */}
                    <input
                      className="form-control form-control-sm ml-3 w-75"
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
                      <span className="text-success">Still in ClassName</span>
                    ) : (
                      <span className="text-danger">Withdrew</span>
                    )}
                  </td>
                  <td>
                    {client.gender.charAt(0).toUpperCase() +
                      client.gender.slice(1)}
                  </td>

                  <td>
                    {client.cashCheck !== "none" ? (
                      client.cashCheck === "cash" ? (
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
                      to={`/createinvoice/${client.id}`}
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
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default ClientList;
