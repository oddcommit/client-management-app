import React from "react";
//Vendor
// import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
// Custom
import {
  InvoiceTable,
  InvoiceListHead,
  TableHeading,
} from "../../styledComponents/invoices/invoiceTables";
import InvoiceListItem from "./InvoiceListItem";
// import InvoiceListLoader from "../../loaders/dashboard/InvoiceListLoader";

// Component
function ViewAllInvoices() {
  const invoices = useSelector((state) => state.firestore.ordered.invoices);

  let tableListItems;

  if (isLoaded(invoices)) {
    tableListItems = invoices.map((invoice) => (
      <InvoiceListItem invoice={invoice} key={invoice.id} />
    ));
  }
  // if (!isLoaded(invoices)) {
  //   tableListItems = Array.from({ length: 10 }).map((invoice) => (
  //     <InvoiceListLoader />
  //   ));
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>
            {" "}
            <i className="fas fa-users" /> Invoices{""}
          </h2>
        </div>
      </div>
      <table className="table table-responsive-md  table-bordered table-hover table-striped">
        <thead className="thead-inverse  thead-dark ">
          <tr>
            <th>No.</th>
            <th>Date</th>

            <th>Name</th>

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
