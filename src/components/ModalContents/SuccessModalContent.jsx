import React from "react";

function SuccessModalContent({ confirmationType, toggleModal }) {
  return (
    <div className="modal__card">
      <i className="close fas fa-times" onClick={() => toggleModal()}></i>
      <h2>Naver {confirmationType}</h2>
      <p>Naver {confirmationType} com sucesso!</p>
    </div>
  );
}

export default SuccessModalContent;
