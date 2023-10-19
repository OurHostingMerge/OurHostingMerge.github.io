import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import './App.css';
import Nicoperez12 from "./components/pages/Nicoperez12.jsx";
import TTrincado from "./components/pages/TTrincado.jsx";
import Projects from "./components/pages/Projects.jsx";
import ToryFuyu from "./components/pages/ToryFuyu.jsx";
import Vidal from "./components/pages/Vidal.jsx";
import FlappyBirdAI from "./components/pages/FlappyBirdAI.jsx";
import InstagramUnfollowers from "./components/pages/InstagramUnfollowers.jsx";
import Mandala from "./components/pages/Mandala.jsx";
import Tory from "./components/pages/Tory.jsx";
import Fuyu from "./components/pages/Fuyu.jsx";
import Footer from "./components/Footer.jsx"


function Routing() {
  return (
    <>
      {/* Todo lo relacionado a rutas debe ser hecho bajo un BrowserRouter */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Nicoperez12" element={<Nicoperez12 />} />
          <Route path="/TTrincado" element={<TTrincado />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ToryFuyu" element={<ToryFuyu />} />
          <Route path="/Vidal" element={<Vidal />} />
          <Route path="/FlappyBirdAI" element={<FlappyBirdAI />} />
          <Route path="/Mandala" element={<Mandala />} />
          <Route path="/Tory" element={<Tory />} />
          <Route path="/Fuyu" element={<Fuyu />} />
          <Route path="/InstagramUnfollowers" element={<InstagramUnfollowers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default Routing