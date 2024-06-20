import './App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navegar/Navbar.jsx";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Inicio from "./components/home/Home.jsx";
import Hobby from "./components/Hobby/Hobby.jsx";
import Info from "./components/info/Info.jsx";
import whatsapp from "./assets/whatsapp.png";

function App() {
    return (
 <>
     <BrowserRouter>

         <Navbar/>

         <Routes>
             <Route path="/" element={<Inicio/>}/>
             <Route path="/Hobby" element={<Hobby/>}/>
             <Route path="/Info" element={<Info/>}/>
         </Routes>

         <div id={"Botones"}
              style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
             <button id={"button"}><a href="https://wa.me/87308869"> whatsapp</a></button>
             <button id={"button"}><a href="mailto:jakecorrales24@gmail.com">mail perosonal</a></button>
             <button id={"button"}><a href="mailto:jake.corrales@unadeca.net">mail Univercitario</a></button>
         </div>
     </BrowserRouter>
 </>

    )
}

export default App

