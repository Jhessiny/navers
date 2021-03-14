import React, { useContext } from "react";
import "./Header.scss";
import logo from "../Logo.png";
import { UserContext } from "../UserContext";

function Header() {
  const [loggedToken, setLoggedToken] = useContext(UserContext);

  const logout = () => {
    sessionStorage.setItem("currentToken", "");
    setLoggedToken(null);
  };

  return (
    <>
      {loggedToken && (
        <header className="the-header">
          <img className="the-header__logo" src={logo} alt="" />
          <span className="the-header__logout" onClick={logout}>
            Sair
          </span>
        </header>
      )}
    </>
  );
}

export default Header;
