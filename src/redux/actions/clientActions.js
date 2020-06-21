/* **************** Change Active Status *************** */

export const updateActiveStatus = (clientId, status) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  // const uid = getState().firebase.auth.uid;
  const firestore = getFirebase().firestore();
  firestore
    // .collection("users")
    // .doc(uid)
    .collection("clients")
    .doc(clientId)
    .update({ active: status })
    .then(() => {
      dispatch({ type: "UPDATE_ACTIVE_STATUS" });
    })
    .catch((err) => alert("clientAction updateActive", err));
};
