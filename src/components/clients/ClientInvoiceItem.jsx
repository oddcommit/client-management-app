import React from "react";

export default function ClientInvoiceItem({ client, date }) {
  return (
    <tr>
      <th scope="row">{date}</th>
      <td>$25</td>
      <td>{client.quantity}</td>
      <td>${client.quantity * 25}</td>
    </tr>
  );
}
