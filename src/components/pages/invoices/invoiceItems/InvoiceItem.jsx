import React from "react";

import InvoiceListItem from "../InvoiceListItem";

function InvoiceItem({ invoice }) {
  // const invoices = useSelector((state) =>
  //   // state.firestore.ordered.invoices &&
  //   state.firestore.ordered.invoices.slice(0, 5)
  // );

  const tableListItems = <InvoiceListItem invoice={invoice} key={invoice.id} />;

  return <tbody>{tableListItems}</tbody>;
}

export default InvoiceItem;
