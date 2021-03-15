import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NaverItem.scss";

function NaverItem({ naver, getNaver, toggleModal, navers }) {
  const [userImage, setUserImage] = useState(naver.url);
  const handleDelete = (id) => {
    toggleModal("deleteNaver", id);
  };

  return (
    <div className="naver-item">
      <Link
        to={"/" + naver.id}
        onClick={(e) => {
          e.preventDefault();
          getNaver(naver.id);
        }}
      >
        <img
          src={userImage}
          onError={() => setUserImage("assets/images/naver.jpg")}
          alt="User"
          className="naver-item__img"
        />
        <h2 className="naver-item__name">{naver.name}</h2>
        <p>{naver.job_role}</p>
      </Link>
      <div className="naver-item__btns-wrapper">
        <button
          className="btn btn-delete"
          onClick={() => handleDelete(naver.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn btn-edit">
          <Link to={"/edit-naver/" + naver.id}>
            <i className="fas fa-pen"></i>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NaverItem;
