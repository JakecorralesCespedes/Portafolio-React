import './App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navegar/Navbar.jsx";
import {Button} from "@nextui-org/react";
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Inicio from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<Inicio />} />

        </Routes>


    </BrowserRouter>

  )
}

export default App

