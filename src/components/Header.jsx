import React from "react";
import "./Header.scss";
import logo from "../Logo.png";

function Header() {
  return (
    <header className="the-header">
      <img className="the-header__logo" src={logo} alt="" />
      <a className="the-header__logout" href="#">
        Sair
      </a>
    </header>
  );
}

export default Header;
