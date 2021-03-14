import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import CreateNaver from "./routes/CreateNaver";
import EditNaver from "./routes/EditNaver";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-naver" component={CreateNaver} />
          <Route path="/edit-naver" component={EditNaver} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
