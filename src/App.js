import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import './App.css';
import Nicoperez12 from "./components/pages/Nicoperez12";
import TTrincado from "./components/pages/TTrincado";
import Projects from "./components/pages/Projects";
import ToryFuyu from "./components/pages/ToryFuyu.js";
import Vidal from "./components/pages/Vidal.js";
import FlappyBirdAI from "./components/pages/FlappyBirdAI.js";
import Nito from "./components/pages/Nito.js";
import Mandala from "./components/pages/Mandala.js";
import Tory from "./components/pages/Tory.js";
import Fuyu from "./components/pages/Fuyu.js";
import Footer from "./components/Footer"

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
          <Route path="/ToryFuyu" element={<ToryFuyu />} />
          <Route path="/Vidal" element={<Vidal />} />
          <Route path="/FlappyBirdAI" element={<FlappyBirdAI />} />
          <Route path="/Nito" element={<Nito />} />
          <Route path="/Mandala" element={<Mandala />} />
          <Route path="/Tory" element={<Tory />} />
          <Route path="/Fuyu" element={<Fuyu />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;