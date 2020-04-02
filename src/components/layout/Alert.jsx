import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const { message, messageType } = props;
  const setMessage = () => {
    if (messageType === "success") {
      return "alert-success";
    } else {
      return "alert-danger";
    }
  };
  return <div className={`alert ${setMessage()}`}>{message}</div>;
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired
};

export default Alert;
