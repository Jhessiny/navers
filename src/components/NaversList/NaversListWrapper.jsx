import React from "react";
import NaverItem from "./NaverItem";
import "./NaversListWrapper.scss";

function NaversListWrapper({ navers }) {
  console.log(navers);
  return (
    <div className="navers-list-wrapper">
      <div className="navers-list-wrapper__top">
        <h1>Navers</h1>
        <button>Adicionar Naver</button>
      </div>
      <div className="navers-list-wrapper__list">
        {navers.map((naver) => (
          <NaverItem naver={naver} />
        ))}
      </div>
    </div>
  );
}

export default NaversListWrapper;
