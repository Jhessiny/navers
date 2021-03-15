import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import CreateNaver from "./routes/CreateNaver";
import EditNaver from "./routes/EditNaver";
import Header from "./components/Header";
import Login from "./routes/Login";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [loggedToken, setLoggedToken] = useContext(UserContext);

  if (!loggedToken) {
    let storedToken = localStorage.getItem("currentToken");
    if (storedToken) {
      setLoggedToken(storedToken);
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-naver" component={CreateNaver} />
          <Route path="/edit-naver/:id" component={EditNaver} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
