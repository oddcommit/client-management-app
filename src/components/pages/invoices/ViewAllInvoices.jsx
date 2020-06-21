import React, { useState } from "react";
//Vendor
// import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
// Custom

import InvoiceListItem from "./InvoiceListItem";
// import InvoiceListLoader from "../../loaders/dashboard/InvoiceListLoader";

// Component
function ViewAllInvoices() {
  const [option, setOption] = useState(null);

  const invoices = useSelector((state) => state.firestore.ordered.invoices);

  const handleInputChange = (e) => {
    setOption(e.target.value);
  };
  // const handleSearchField = (e) => {
  //   this.setSearch(e.target.value);
  // };

  const handleSoftSearchField = (invoices) => {
    const filterinvoices = invoices.filter((invoice) => {
      if (option === "pending") {
        return invoice.paidStatus === false;
      } else if (option === "fulfill") {
        return invoice.paidStatus === true;
      } else {
        return invoice;
      }
    });
    return filterinvoices.sort((a, b) => a.dueDate - b.dueDate);
  };

  let tableListItems;

  if (isLoaded(invoices)) {
    tableListItems = handleSoftSearchField(invoices).map((invoice) => (
      <InvoiceListItem invoice={invoice} key={invoice.id} />
    ));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <i className="fas fa-file-invoice-dollar" /> Invoices
          </h2>
          <div className="form-group">
            <label for="option">View By:</label>
            <select
              className="form-control"
              name="option"
              onChange={handleInputChange}
            >
              <option selected>Select One</option>

              <option value="pending">Pending</option>
              <option value="fulfill">Fulfill</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>
      <table className="table table-responsive-md  table-bordered table-hover table-striped">
        <thead className="thead-inverse  thead-dark ">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Due Date</th>

            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableListItems}</tbody>
      </table>
      <hr />
    </div>
  );
}

export default ViewAllInvoices;
