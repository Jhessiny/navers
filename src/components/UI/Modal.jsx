import React from "react";
import "./Modal.scss";

function Modal(props) {
  return <div className="modal">{props.children}</div>;
}

export default Modal;
