import React from "react";
import "./Login.scss";
import logo from "../Logo.png";

function Login() {
  return (
    <form action="" className="login-form">
      <img src={logo} alt="" />
      <div className="input-wrapper">
        <label htmlFor="">E-mail</label>
        <input type="text" name="" id="" placeholder="E-mail" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Senha</label>
        <input type="text" name="" id="" placeholder="Senha" />
      </div>
      <button>Entrar</button>
    </form>
  );
}

export default Login;
