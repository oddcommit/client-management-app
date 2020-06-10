import React, { useState } from "react";
import { Link } from "react-router-dom";

import history from "../../../others/history";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Divider } from "@material-ui/core";

function ClientItem({ client }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOptionOpen = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleOptionClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(null);
  };

  // const handleCreateInvoice = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();

  //   history.push(`/createinvoice/${client.id}`);
  //   setAnchorEl(null);
  // };

  return (
    <tr key={client.id}>
      <td>
        <Link
          to={`/client/${client.id}`}
          // className="btn btn-primary btn-sm"
        >
          {client.firstName.charAt(0).toUpperCase() + client.firstName.slice(1)}{" "}
          {client.lastName.charAt(0).toUpperCase() + client.lastName.slice(1)}
        </Link>
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
      {/* <td>
        <Link
          to={`/createinvoice/${client.id}`}
          className="btn btn-primary btn-sm"
        >
          <i className="fas fa-arrow-circle-right " /> Create New Invoice
        </Link>
      </td> */}

      <td>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleOptionOpen}
          tabIndex={1}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          open={open}
          onClose={handleOptionClose}
        >
          <MenuItem>
            <Link
              to={`/createinvoice/${client.id}`}
              // className="btn btn-primary btn-sm"
            >
              <i className="fas fa-arrow-circle-right " /> Create New Invoice
            </Link>
          </MenuItem>
          <MenuItem>
            {/* onClick={togglePaymentStatus} change this to toggle cash or check */}
            <p>Mark as cash or check </p>
            {/* {invoice.paidStatus ? <p>Mark as Pending</p> : <p>Mark as Paid</p>} */}
          </MenuItem>
        </Menu>
      </td>
    </tr>
  );
}

export default ClientItem;
