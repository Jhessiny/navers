import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedToken, setLoggedToken] = useState("");

  return (
    <div>
      <UserContext.Provider value={[loggedToken, setLoggedToken]}>
        {props.children}
      </UserContext.Provider>
      ;
    </div>
  );
};
