import React from "react";
import { useParams } from "react-router-dom";

import {
  getFormattedDate,
  checkInteger,
  addInCollection,
  getDocument,
  readCollection,
} from "../../utils";

const defaults = {
  customerName: "",
  phone: "",
  invoiceAmount: "",
  invoiceStatus: "",
  // invoiceDate: getFormattedDate(new Date(), "YYYY-MM-DD"),
};

class testinvoiceClient extends React.Component {
  state = {
    ...defaults,
  };

  componentDidMount() {
    // const { invoices } = this.props;
    // if (editMode) {
    //   const {
    //     match: {
    //       params: { id },
    //     },
    //   } = this.props;
    //   getDocument("invoices", id)
    //     .get()
    //     .then((snap) => {
    //       const document = { ...snap.data(), id: snap.id };
    //       this.setState({
    //         ...document,
    //       });
    //     });
    // }

    const collection = readCollection("invoices");

    collection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        // this.setState(doc.data());
        this.setState(snapshot);
      });
    });
  }

  render() {
    const { id } = useParams();

    console.log("state", id);
    return <div>Hey</div>;
  }
}

export default testinvoiceClient;
