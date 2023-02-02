import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import './App.css';
import Nicoperez12 from "./components/pages/Nicoperez12";
import TTrincado from "./components/pages/TTrincado";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Nicoperez12" element={<Nicoperez12 />} />
          <Route path="/TTrincado" element={<TTrincado />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;