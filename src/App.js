import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
