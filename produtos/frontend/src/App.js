import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import Cesta from "./pages/Cesta";
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalogo />}></Route>
          <Route path="/cesta" element={<Cesta />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
