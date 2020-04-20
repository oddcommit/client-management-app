import React, { Component } from "react";
import PropTypes from "prop-types";

import LineItem from "./LineItem";
import LineItemDate from "./LineitemDate";

import { MdAddCircle as AddIcon } from "react-icons/md";
import styles from "./LineItems.module.scss";

class LineItems extends Component {
  handleDragEnd = (result) => {
    if (!result.destination) return;

    // helper function to reorder result (src: react-beautiful-dnd docs)
    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    // perform reorder
    const lineItems = reorder(
      this.props.items,
      result.source.index,
      result.destination.index
    );

    // call parent handler with new state representation
    this.props.reorderHandler(lineItems);
  };

  render = () => {
    const {
      items,
      client,
      state,
      addHandler,
      reorderHandler,
      ...functions
    } = this.props;

    return (
      <form>
        <div className="table-responsive">
          <table className="table table-bordered table-condensed ">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {state.dateArray.map((date, index) => {
                return (
                  <LineItemDate
                    style={{ color: "red" }}
                    index={index}
                    key={client.id + index}
                    name={
                      client.firstName.charAt(0).toUpperCase() +
                      client.firstName.slice(1) +
                      " " +
                      client.lastName.charAt(0).toUpperCase() +
                      client.lastName.slice(1)
                    }
                    description={date}
                    quantity={client.quantity}
                    price={25}
                    {...functions}
                  />
                );
              })}
              {this.props.items.map((item, i) => (
                <LineItem
                  style={{ color: "red" }}
                  key={i + item.id}
                  index={i}
                  name={item.name}
                  description={item.description}
                  quantity={item.quantity}
                  price={item.price}
                  {...functions}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-circle btn-light right"
          type="button"
          onClick={addHandler}
        >
          <AddIcon /> Add Item
        </button>
      </form>
    );
  };
}

export default LineItems;

LineItems.propTypes = {
  items: PropTypes.array.isRequired,
  currencyFormatter: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  reorderHandler: PropTypes.func.isRequired,
};
