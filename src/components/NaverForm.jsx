import React from "react";
import { Link } from "react-router-dom";
import "./NaverForm.scss";

const NaverForm = ({
  title,
  changeHandler,
  clickHandler,
  formData,
  formType,
}) => {
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
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Nome"
              value={formData.name}
              onChange={changeHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="birthday">Data de nascimento</label>
            <input
              type="date"
              name="birthdate"
              placeholder="Data de nascimento"
              value={formData.birthdate}
              onChange={changeHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="projects">Projetos que participou</label>
            <input
              type="text"
              name="project"
              placeholder="Projectos que participou"
              value={formData.project}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="form-col">
          <div className="input-wrapper">
            <label htmlFor="">Cargo</label>
            <input
              type="text"
              name="job_role"
              placeholder="Cargo"
              value={formData.job_role}
              onChange={changeHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="admission">Tempo na empresa</label>
            <input
              type="date"
              name="admission_date"
              placeholder="Tempo na empresa"
              value={formData.admission_date}
              onChange={changeHandler}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Url da foto do Naver</label>
            <input
              type="text"
              name="url"
              placeholder="Url da foto do Naver"
              value={formData.url}
              onChange={changeHandler}
            />
          </div>
          <button onClick={clickHandler}>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default NaverForm;
