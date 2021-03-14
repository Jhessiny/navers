import React from "react";
// import NaverModalContent from "../NaversList/NaverModalContent";
import "./Modal.scss";

function Modal(props) {
  return <div className="modal">{props.children}</div>;
}

export default Modal;
