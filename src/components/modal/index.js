import React from "react";

const Modal = ({ showModal, toggleModal, activeMan }) => {
  return (
    <div className={`myModal ${showModal ? "open" : ""}`}>
      <div className="wrapper">
        <div className="closeModal" onClick={toggleModal}>
          +
        </div>
        <h1>{activeMan.id}</h1>
      </div>
    </div>
  );
};
export default Modal;
