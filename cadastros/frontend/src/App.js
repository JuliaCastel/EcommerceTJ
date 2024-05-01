import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateProdutoForm from './components/CreateProdutoForm'
import NavBar from "./components/NavBar";
import ProdutoList from "./components/ProdutoList";
import Produtos from "./components/Produtos";
import { ProdutoListProvider } from "./context/ProdutoContext";
import ProdutoDetail from "./components/ProdutoDetail";
import UpdateProdutoForm from './components/UpdateProdutoForm';

function App() {
  return (
    <Router>
      <ProdutoListProvider>
        <div className="container">
          <NavBar />
          <hr />
          <Routes>
            <Route path="/new" element={<CreateProdutoForm />} />
            <Route path="/" element={<Produtos />}>
              <Route index element={<ProdutoList />} />
              <Route path=":id" element={<ProdutoDetail />} />
              <Route path=":id/edit" element={<UpdateProdutoForm />} />
            </Route>
          </Routes>
        </div>
      </ProdutoListProvider>
    </Router>
  );
}

export default App;
