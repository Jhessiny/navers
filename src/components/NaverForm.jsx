import React from "react";
import { Link } from "react-router-dom";
import "./NaverForm.scss";

function NaverForm({ title }) {
  return (
    <div className="form-wrapper">
      <h2>
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
        {title}
      </h2>
      <form className="naver-form">
        <div className="form-col">
          <div className="input-wrapper">
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" placeholder="Nome" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Data de nascimento</label>
            <input type="text" name="" id="" placeholder="Data de nascimento" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Projectos que participou</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Projectos que participou"
            />
          </div>
        </div>
        <div className="form-col">
          <div className="input-wrapper">
            <label htmlFor="">Cargo</label>
            <input type="text" name="" id="" placeholder="Cargo" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Tempo na empresa</label>
            <input type="text" name="" id="" placeholder="Tempo na empresa" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Url da foto do Naver</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Url da foto do Naver"
            />
          </div>
          <button>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default NaverForm;
