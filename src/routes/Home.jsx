import React, { useContext } from "react";
import { Redirect } from "react-router";
import NaversListWrapper from "../components/NaversList/NaversListWrapper";
import { UserContext } from "../UserContext";

function Home() {
  const [loggedToken] = useContext(UserContext);
  let redirect;

  if (!loggedToken) {
    redirect = <Redirect to="/login" />;
  }
  return (
    <div>
      {redirect}
      <NaversListWrapper />
    </div>
  );
}

export default Home;
