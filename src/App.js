import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "./components/iniciosesion";
import Formulario from "./components/formulario";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
};

export default App;