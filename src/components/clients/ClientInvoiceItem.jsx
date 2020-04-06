import React from "react";

export default function ClientInvoiceItem({
  client,
  date,
  index,
  key,
  state,
  onQtyChange
}) {
  {
    let qty = state.qty;
    qty[key] = client.quantity;
  }

  return (
    <tr>
      <th scope="row">{date}</th>
      <td>$25</td>
      <td>
        {
          <h3 className="pull-right">
            <small>
              {" "}
              <a href="#!" onClick={() => onQtyChange(index)}>
                {client.quantity}
              </a>
            </small>
            {/* {updateForm} */}
          </h3>
        }
      </td>
      <td>${client.quantity * 25}</td>
    </tr>
  );
}
