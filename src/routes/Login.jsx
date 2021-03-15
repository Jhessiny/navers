import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Login.scss";
import logo from "../Logo.png";
import { UserContext } from "../UserContext";
import { Redirect } from "react-router";

function Login() {
  const [loggedToken, setLoggedToken] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    let body = { email: email, password: password };
    const res = await axios.post(
      "https://navedex-api.herokuapp.com/v1/users/login",
      body
    );
    const token = res.data.token;
    localStorage.setItem("currentToken", token);
    setLoggedToken(token);
  };

  let redirect;

  if (loggedToken) {
    redirect = <Redirect to="/" />;
  }

  return (
    <>
      {redirect}
      <form action="" className="login-form">
        <img src={logo} alt="" />
        <div className="input-wrapper">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Senha</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </form>
    </>
  );
}

export default Login;
