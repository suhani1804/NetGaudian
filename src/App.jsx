import LOGO from "./assets/Logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        <img src={LOGO} className="logo react" alt="React logo" />
      </div>
      <div class="loader">
        <div class="ball"></div>
      </div>
    </>
  );
}

export default App;
