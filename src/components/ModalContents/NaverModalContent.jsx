import React from "react";
import "./NaverModalContent.scss";

function NaverModalContent({
  currentNaver,
  toggleModal,
  deleteNaver,
  deletingUserId,
}) {
  return (
    <div className="modal__card modal__card-naver">
      <i className="close fas fa-times" onClick={toggleModal}></i>
      <div className="navers-modal-content">
        <img src={currentNaver.url} alt="" />
        <div className="navers-modal-content__right">
          <div className="navers-modal-content__right__item">
            <h2>{currentNaver.name}</h2>
            <p>{currentNaver.job_role}</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Idade</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Tempo de empresa</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Projetos que participou</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="navers-modal-content__right__btns-wrapper">
            <button
              className="btn btn-delete"
              onClick={() => deleteNaver(currentNaver.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button className="btn btn-edit">
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NaverModalContent;
