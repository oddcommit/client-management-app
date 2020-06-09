import React from "react";
import { Link } from "react-router-dom";

import history from "../../../others/history";

function ClientItem({ client }) {
  const handleClick = (e) => {
    history.push(`/client/${client.id}`);
  };
  return (
    <tr key={client.id} onClick={handleClick} style={{ cursor: "pointer" }}>
      <td>
        {client.firstName.charAt(0).toUpperCase() + client.firstName.slice(1)}{" "}
        {client.lastName.charAt(0).toUpperCase() + client.lastName.slice(1)}
      </td>
      <td>
        {client.teacher.charAt(0).toUpperCase() + client.teacher.slice(1)}
      </td>
      <td>
        {client.classDay.toUpperCase()} - {client.time}
      </td>
      <td>{client.quantity}</td>
      <td>
        {client.active === "true" ? (
          <span className="text-success">Still in ClassName</span>
        ) : (
          <span className="text-danger">Withdrew</span>
        )}
      </td>
      <td>{client.gender.charAt(0).toUpperCase() + client.gender.slice(1)}</td>

      <td>
        {client.cashCheck !== "none" ? (
          client.cashCheck === "cash" ? (
            <p className="text-success">Cash</p>
          ) : (
            <p className="text-primary">Check</p>
          )
        ) : (
          <p className="text-info">None</p>
        )}
      </td>
      <td>
        <Link
          to={`/createinvoice/${client.id}`}
          className="btn btn-primary btn-sm"
        >
          <i className="fas fa-arrow-circle-right " /> Create New Invoice
        </Link>
      </td>
    </tr>
  );
}

export default ClientItem;
