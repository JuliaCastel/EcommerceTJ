import { Routes, Route } from "react-router-dom";
import App from "./App";
import Cesta from "./pages/Cesta";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="cesta" element={<Cesta/>}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
