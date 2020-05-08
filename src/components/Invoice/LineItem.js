import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdCancel as DeleteIcon } from "react-icons/md";

class LineItem extends Component {
  render = () => {
    const { index, name, description, quantity, price } = this.props;

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <th scope="row">
          <input
            name="name"
            type="text"
            className="form-control"
            value={name}
            onChange={this.props.changeHandler(index)}
          />
        </th>
        <td>
          <input
            name="description"
            type="text"
            className="form-control"
            value={description}
            onChange={this.props.changeHandler(index)}
          />
        </td>
        <td>
          <input
            name="quantity"
            type="number"
            className="form-control"
            step="1"
            value={quantity}
            onChange={this.props.changeHandler(index)}
            onFocus={this.props.focusHandler}
          />
        </td>
        <td>
          <input
            name="price"
            type="number"
            step="0.01"
            min="0.00"
            className="form-control"
            max="9999999.99"
            value={price}
            onChange={this.props.changeHandler(index)}
            onFocus={this.props.focusHandler}
          />
        </td>
        <td>{this.props.currencyFormatter(quantity * price)}</td>
        <td className="hide-on-print">
          <button
            type="button"
            className="btn"
            onClick={this.props.deleteHandler(index)}
          >
            <DeleteIcon size="1.25em" />
          </button>
        </td>
      </tr>
    );
  };
}

export default LineItem;

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
