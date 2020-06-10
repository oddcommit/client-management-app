import React, { useState } from "react";
//Vendor
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Custom
import {
  deleteInovice,
  updatePaymentStatus,
} from "../../../redux/actions/invoiceActions";
import history from "../../../others/history";

// Component
function InvoiceListItem(props) {
  const { invoice } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const currencySign = "$";

  const handleOptionOpen = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClose = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleDeleteInvoice = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteInovice(invoice.id));
    setAnchorEl(null);
  };

  const togglePaymentStatus = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(updatePaymentStatus(invoice.id, !invoice.paidStatus));

    setAnchorEl(null);
  };
  const handleClick = (e) => {
    history.push(`/invoice/${invoice.id}`);
  };
  return (
    <tr key={invoice.id} onClick={handleClick} style={{ cursor: "pointer" }}>
      <td>{invoice.invoiceNum}</td>

      <td>{moment(invoice.invoiceDate.toDate()).format("MM-DD-YYYY")} </td>
      <td>{invoice.clientName}</td>

      <td>
        {" "}
        {invoice.totalAmount.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>
      <td>
        {invoice.paidStatus ? (
          <span style={{ color: "#219735" }}>Fulfilled</span>
        ) : (
          <span style={{ color: "#FD5665" }}>Pending</span>
        )}
      </td>

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
          <MenuItem onClick={handleDeleteInvoice}>
            <p>Delete Invoice</p>
          </MenuItem>
          <MenuItem onClick={togglePaymentStatus}>
            {invoice.paidStatus ? <p>Mark as Pending</p> : <p>Mark as Paid</p>}
          </MenuItem>
        </Menu>
      </td>
    </tr>
  );
}

export default InvoiceListItem;
