import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import Spinner from "../../../layout/Spinner";
import ClientItem from "./ClientItem";
class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
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
    const { searchField } = this.state;

    const filterClients = clients.filter((client) => {
      return (
        client.lastName.toLowerCase().includes(searchField.toLowerCase()) &&
        client.active === "true" &&
        client.classDay.toLowerCase() ==
          moment(new Date()).format("dddd").toLowerCase() &&
        client.lastName.toLowerCase().includes(searchField.toLowerCase())
      );
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
    return sortedClients.filter((val, i) => i < 20);
  };

  render() {
    const { clients } = this.props;

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
                      onChange={this.handleSearchField}
                    />
                  </form>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.handleSoftSearchField(clients).map((client) => (
                <ClientItem client={client} key={client.id} />
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
