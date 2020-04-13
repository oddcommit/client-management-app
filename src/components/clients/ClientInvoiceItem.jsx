import React from "react";

export default function ClientInvoiceItem({
  client,
  date,
  state,
  index,
  updateQtyForm,
}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>

      <th scope="row">{date}</th>
      <td>$25</td>
      <td>
        {
          <h3 className="pull-right">
            <small>
              {" "}
              <a href="#!">
                {client.quantity} <span>This is index: </span>
                {index}
              </a>
            </small>
            {updateQtyForm}
          </h3>
        }
      </td>
      <td>${client.quantity * 25}</td>
    </tr>
  );
}
