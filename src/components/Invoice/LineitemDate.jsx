import React, { Component } from "react";
import PropTypes from "prop-types";

class LineItemDate extends Component {
  render = () => {
    const { index, name, description, quantity, price } = this.props;

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <th scope="row">{name}</th>

        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{this.props.currencyFormatter(quantity * price)}</td>
        <td className="hide-on-print"></td>
      </tr>
    );
  };
}

export default LineItemDate;

LineItemDate.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
