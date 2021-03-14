import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import CreateNaver from "./routes/CreateNaver";
import EditNaver from "./routes/EditNaver";
import Header from "./components/Header";
import Login from "./routes/Login";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
