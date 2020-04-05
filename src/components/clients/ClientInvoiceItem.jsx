import React from "react";

export default function ClientInvoiceItem({ client, date, index, state }) {
  {
    let qty = state.qty;
    qty[index] = client.quantity;
  }

  return (
    <tr>
      <th scope="row">{date}</th>
      <td>$25</td>
      <td>{client.invoice.qty[index]}</td>
      <td>${client.invoice.qty[index] * 25}</td>
    </tr>
  );
}
