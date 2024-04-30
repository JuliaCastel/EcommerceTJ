import logo from "./logo.svg";
import "./App.css";
import Catalogo from "./pages/Catalogo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
      {/* <header className="App-header">
      </header> */}
      <Catalogo />
    </div>
  );
}

export default App;
