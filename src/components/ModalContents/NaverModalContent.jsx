import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NaverModalContent.scss";

function NaverModalContent({ currentNaver, toggleModal }) {
  const [userImage, setUserImage] = useState(currentNaver.url);

  const calcPeriod = (begin) => {
    let dateStart = new Date(begin);
    let currentDate = new Date();
    return (
      Math.ceil(
        Math.abs(dateStart.getTime() - currentDate.getTime()) /
          (1000 * 3600 * 24)
      ) / 365.25
    );
  };
  return (
    <div className="modal__card modal__card-naver">
      <i className="close fas fa-times" onClick={() => toggleModal()}></i>
      <div className="navers-modal-content">
        <img
          src={userImage}
          alt=""
          onError={() => setUserImage("assets/images/naver.jpg")}
        />
        <div className="navers-modal-content__right">
          <div className="navers-modal-content__right__item">
            <h2>{currentNaver.name}</h2>
            <p>{currentNaver.job_role}</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Idade</h3>
            <p>{Math.floor(calcPeriod(currentNaver.birthdate))} anos.</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Tempo de empresa</h3>
            <p>{calcPeriod(currentNaver.admission_date).toFixed(1)} ano(s)</p>
          </div>
          <div className="navers-modal-content__right__item">
            <h3>Projetos que participou</h3>
            <p>{currentNaver.project}</p>
          </div>
          <div className="navers-modal-content__right__btns-wrapper-naver">
            <button
              className="btn btn-delete"
              onClick={() => toggleModal("deleteNaver", currentNaver.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button className="btn btn-edit">
              <Link to={"/edit-naver/" + currentNaver.id}>
                <i className="fas fa-pen"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NaverModalContent;
