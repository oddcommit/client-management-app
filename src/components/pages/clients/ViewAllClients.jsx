import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import ClientItem from "../clients/clientItems/ClientItem";

import Spinner from "../../layout/Spinner";
class ViewAllClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      activeFilter: true,
      count: null,
      option: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      option: e.target.value,
    });
  };
  handleSearchField = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSoftSearchField = (clients) => {
    const { option, searchField } = this.state;

    const filterClients = clients.filter((client) => {
      if (option === "active") {
        return (
          client.active === "true" &&
          client.lastName.toLowerCase().includes(searchField.toLowerCase())
        );
      } else if (option === "notactive") {
        return (
          client.active === "false" &&
          client.lastName.toLowerCase().includes(searchField.toLowerCase())
        );
      } else if (option === "currentDay") {
        return (
          client.classDay.toLowerCase() ==
            moment(new Date()).format("dddd").toLowerCase() &&
          client.active === "true" &&
          client.lastName.toLowerCase().includes(searchField.toLowerCase())
        );
      } else if (option === "all") {
        return client;
      } else {
        return (
          client.lastName.toLowerCase().includes(searchField.toLowerCase()) &&
          client.active === "true"
        );
      }
    });

    const sortedClients = filterClients.sort(function (a, b) {
      var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return sortedClients;
  };
  render() {
    const { clients } = this.props;
    if (clients) {
      return (
        <div className="container">
          <hr />

          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients{""}
              </h2>
              <div class="form-group">
                <label for="option">View By:</label>
                <select
                  class="form-control"
                  name="option"
                  onChange={this.handleInputChange}
                >
                  <option selected>Select One</option>

                  <option value="active">Active</option>
                  <option value="notactive">Not Active</option>
                  <option value="currentDay"> Current Day of the Week</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>
          </div>
          <table className="table table-sm table-responsive-md  table-bordered table-hover table-striped">
            <thead className="thead-inverse  thead-dark ">
              <tr>
                <th>Name</th>
                <th>Teacher</th>
                <th>
                  <small>ClassName Day & Time</small>
                </th>
                <th>Qty</th>
                <th>Active</th>
                {/* <th className="hoverPointer" onClick={this.activeChange}>
                  {activeFilter ? (
                    <span className="text-success">
                      Active <i className="fas fa-arrows-alt-v "></i>
                    </span>
                  ) : (
                    <span className="text-danger">
                      Active <i className="fas fa-arrows-alt-v "></i>
                    </span>
                  )}
                </th> */}
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
                      onChange={this.handleSearchField}
                    />
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.handleSoftSearchField(clients).map((client) => (
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

ViewAllClients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
  invoices: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: "clients" }, { collection: "invoices" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
    invoices: state.firestore.ordered.invoices,
  }))
)(ViewAllClients);
