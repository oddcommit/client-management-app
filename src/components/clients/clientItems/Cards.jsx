import React from "react";
import { useSelector } from "react-redux";

function Cards({ state }) {
  const { count } = state;
  const pendingInvoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.filter((invoice) => !invoice.paidStatus)
        .length
  );
  const paidInvoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.filter((invoice) => invoice.paidStatus)
        .length
  );
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse card-info">
            <div className="card-block bg-info">
              <div className="rotate">
                <i className="fa fa-user fa-8x"></i>
              </div>
              <h6 className="text-uppercase text-center mt-4 text-white">
                Students in class
              </h6>
              <h1 className="display-1 text-center text-white"> {count}</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse card-success">
            <div className="card-block bg-success">
              <div className="rotate">
                <i className="fa fa-dollar-sign fa-8x "></i>
              </div>
              <h6 className="text-uppercase text-center mt-4 text-white">
                Total Cash
              </h6>
              <h4 className="display-1 text-center text-white"> $1000</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse card-success">
            <div className="card-block bg-primary text-dark">
              <div className="rotate">
                <i className="fa fa-check-circle fa-8x"></i>
              </div>
              <h6 className=" text-center mt-4 text-light">
                Invoice: Fullfilled
              </h6>
              <h4 className="display-1 text-center text-light">
                {" "}
                {paidInvoices}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-inverse card-danger">
            <div className="card-block bg-danger text-dark">
              <div className="rotate">
                <i className="fa fa-clock fa-8x"></i>
              </div>
              <h6 className=" text-center mt-4 text-light">Invoice: Pending</h6>
              <h4 className="display-1 text-center text-light">
                {" "}
                {pendingInvoices}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
