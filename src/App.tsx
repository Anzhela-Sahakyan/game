import "./App.css";
import MainPage from "./mainPage/MainPage";
import logo from "../src/logo.png";
import Buttons from "./buttons/Buttons";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {/* <div className="logo_wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div> */}
      <div className="app_container">
        {!start && <MainPage onStartFunction={() => setStart(true)} />}
        {start && <Buttons />}
      </div>
    </div>
  );
}

export default App;
