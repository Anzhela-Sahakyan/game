import "./App.css";
import MainPage from "./mainPage/MainPage";
import logo from "../src/logo.png";
import Buttons from "./buttons/Buttons";

function App() {
  return (
    <div className="App">
      <div className="logo_wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div>
        <MainPage />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
