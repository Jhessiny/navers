import React from "react";

function DeletingModalContent({ toggleModal, deleteNaver, deletingUserId }) {
  return (
    <div className="modal__card">
      <i className="close fas fa-times" onClick={() => toggleModal()}></i>
      <h2>Excluir Naver</h2>
      <p>Tem certeza que deseja excluir este Naver?</p>
      <div className="delete-modal__btns-wrapper">
        <button onClick={() => toggleModal()}>Cancelar</button>
        <button onClick={() => deleteNaver(deletingUserId)}>Excluir</button>
      </div>
    </div>
  );
}

export default DeletingModalContent;
