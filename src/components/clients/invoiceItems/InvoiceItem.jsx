import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import InvoiceListItem from "../../pages/invoices/InvoiceListItem";

function InvoiceItem() {
  const invoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.slice(0, 5)
  );
  let tableListItems;

  if (isLoaded(invoices)) {
    tableListItems = invoices.map((invoice) => (
      <InvoiceListItem invoice={invoice} key={invoice.id} />
    ));
  }
  return <div>{tableListItems}</div>;
}

export default InvoiceItem;
