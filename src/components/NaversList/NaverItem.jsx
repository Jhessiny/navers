import React from "react";
import "./NaverItem.scss";

function NaverItem({ naver }) {
  return (
    <div className="naver-item">
      <img src={naver.url} alt="" className="naver-item__img" />
      <h2 className="naver-item__name">{naver.name}</h2>
      <p>{naver.job_role}</p>
      <div className="naver-item__btns-wrapper">
        <button className="btn btn-delete">
          <i class="fas fa-trash"></i>
        </button>
        <button className="btn btn-edit">
          <i class="fas fa-pen"></i>
        </button>
      </div>
    </div>
  );
}

export default NaverItem;
