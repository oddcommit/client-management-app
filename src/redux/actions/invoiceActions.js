import history from "../../others/history";

/* ******************* Create Invoice ******************* */

export const createInvoice = (invoiceDetails, invNum) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: "CREATE_BUTTON", payload: true });
  // const uid = getState().firebase.auth.uid;

  // const currInvoice = getState().firebase.profile.invoices;

  const firestore = getFirebase().firestore();
  let path = "";
  firestore
    .collection("invoices")
    // .doc(uid)
    // .collection("invoices")
    .add({ ...invoiceDetails })
    .then((res) => {
      path = res.id;
      firestore.collection("invoices").doc(path).update({ invoiceNum: invNum });
    })
    .then((res) => {
      dispatch({ type: "CREATE_INVOICE", payload: invoiceDetails });
      history.push(`/invoice/${path}`);

      // history.push(`/invoice/${path}`);
    })
    .catch((err) => {
      alert("invoiceAction create", err);
    })
    .finally(() => dispatch({ type: "CREATE_BUTTON", payload: false }));
};

/* ******************* Delete Invoice ******************* */

export const deleteInovice = (invoiceId) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  // const uid = getState().firebase.auth.uid;
  const firestore = getFirebase().firestore();

  firestore
    // .collection("users")
    // .doc(uid)
    .collection("invoices")
    .doc(invoiceId)
    .delete()
    .then(() => {
      dispatch({ type: "DELETE_SUCCESS_BAR" });
    })
    .catch((err) => alert("invoiceAction delete", err));
  if (history.location.pathname !== "/") {
    history.push("/dashboard");
  }
};

/* **************** Change Payment Status *************** */

export const updatePaymentStatus = (invoiceId, status) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  // const uid = getState().firebase.auth.uid;
  const firestore = getFirebase().firestore();
  firestore
    // .collection("users")
    // .doc(uid)
    .collection("invoices")
    .doc(invoiceId)
    .update({ paidStatus: status })
    .then(() => {
      dispatch({ type: "UPDATE_PAYMENT_STATUS" });
    })
    .catch((err) => alert("invoiceAction updatepayment", err));
};
