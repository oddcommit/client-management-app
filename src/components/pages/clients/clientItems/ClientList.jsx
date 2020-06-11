import React from "react";
import { Link } from "react-router-dom";

import Spinner from "../../../layout/Spinner";
import ClientItem from "./ClientItem";
class ClientList extends React.Component {
  render() {
    const {
      state,
      handleChange,
      // activeChange,
      clients,
      searchField,
      // componentWillUpdate,
      // invoices,
    } = this.props;

    if (clients) {
      return (
        <div className="container">
          <hr />

          <div className="row">
            <div className="col-md-6">
              <Link to="/clients">
                <h2>
                  {" "}
                  <i className="fas fa-users" /> Clients{""}
                </h2>
              </Link>

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
                <th>Active</th>
                <th>Gender</th>

                {/* <th>
                  {" "}
                  <small>
                    <span className="text-success">Cash</span>/
                    <span className="text-primary">Check</span>
                  </small>
                </th> */}
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
              {clients.map((client) => (
                <ClientItem client={client} />
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
