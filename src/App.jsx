import './App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navegar/Navbar.jsx";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Inicio from "./components/Home.jsx";
import Projects from "./projects.jsx";
import Info from "./components/info/Info.jsx";

function App() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Info" element={<Info />} />
        </Routes>


    </BrowserRouter>

  )
}

export default App

