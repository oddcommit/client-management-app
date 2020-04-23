import React, { Component } from "react";
import PropTypes from "prop-types";

import LineItem from "./LineItem";
import LineItemDate from "./LineitemDate";
import Spinner from "../layout/Spinner";

import { MdAddCircle as AddIcon } from "react-icons/md";
import styles from "./LineItems.module.scss";

class LineItems extends Component {
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
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-condensed ">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th className="hide-on-print"></th>
              </tr>
            </thead>
            <tbody>
              {client ? (
                state.dateArray.map((date, index) => {
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
                      price={client.price}
                      {...functions}
                    />
                  );
                })
              ) : (
                <Spinner />
              )}
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
          className="btn btn-circle btn-light right hide-on-print"
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
