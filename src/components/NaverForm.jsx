import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import "./NaverForm.scss";

const NaverForm = ({ title, submitHandler, formData }) => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .trim("Campo não pode estar vazio.")
      .required("Campo não pode estar vazio."),
    admission_date: yup.date().required("Campo não pode estar vazio."),
    job_role: yup
      .string()
      .trim("Campo não pode estar vazio.")
      .required("Campo não pode estar vazio."),
    project: yup
      .string()
      .trim("Campo não pode estar vazio.")
      .required("Campo não pode estar vazio."),
    birthdate: yup.date().required("Campo não pode estar vazio."),
    url: yup
      .string()
      .trim("Campo não pode estar vazio.")
      .required("Campo não pode estar vazio."),
  });

  return (
    <div className="form-wrapper">
      <h2>
        <Link to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
        {title}
      </h2>
      <Formik
        initialValues={formData}
        onSubmit={submitHandler}
        validationSchema={formSchema}
      >
        <Form className="naver-form">
          <div className="form-col">
            <div className="input-wrapper">
              <label htmlFor="">Nome</label>
              <Field required type="text" name="name" placeholder="Nome" />
              <ErrorMessage
                className="input-error-msg"
                component="span"
                name="name"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">Data de nascimento</label>
              <Field
                required
                type="date"
                name="birthdate"
                placeholder="Data de nascimento"
              />
              <ErrorMessage
                className="input-error-msg"
                component="div"
                name="birthdate"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="projects">Projetos que participou</label>
              <Field
                required
                type="text"
                name="project"
                placeholder="Projectos que participou"
              />
              <ErrorMessage
                className="input-error-msg"
                component="div"
                name="project"
              />
            </div>
          </div>
          <div className="form-col">
            <div className="input-wrapper">
              <label htmlFor="">Cargo</label>
              <Field required type="text" name="job_role" placeholder="Cargo" />
              <ErrorMessage
                className="input-error-msg"
                component="div"
                name="job_role"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="admission">Tempo na empresa</label>
              <Field
                required
                type="date"
                name="admission_date"
                placeholder="Tempo na empresa"
              />
              <ErrorMessage
                className="input-error-msg"
                component="div"
                name="admission_date"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Url da foto do Naver</label>
              <Field
                required
                type="text"
                name="url"
                placeholder="Url da foto do Naver"
              />
              <ErrorMessage
                className="input-error-msg"
                component="div"
                name="url"
              />
            </div>
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NaverForm;
