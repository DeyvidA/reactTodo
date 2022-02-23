import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-background">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
