import './App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navegar/Navbar.jsx";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Inicio from "./components/home/Home.jsx";
import Info from "./components/info/Info.jsx";
import About from "./components/ui/About.jsx";
import Footer from "./components/ui/Footer.jsx";

function App() {
    return (
 <>
     <BrowserRouter>

         <Navbar/>

         <Routes>
             <Route path="/" element={<Inicio/>}/>
             <Route path="/Info" element={<Info/>}/>
         </Routes>
            <About />
            <Footer />
            <div className="contact-bar" aria-label="Acciones rápidas de contacto">
                <a className="contact-fab" href="https://wa.me/87308869" title="WhatsApp" aria-label="WhatsApp">WA</a>
                <a className="contact-fab" href="mailto:jakecorrales24@gmail.com" title="Correo personal" aria-label="Correo personal">@</a>
                <a className="contact-fab" href="mailto:jake.corrales@unadeca.net" title="Correo universitario" aria-label="Correo universitario">UNI</a>
            </div>
     </BrowserRouter>
 </>

    )
}

export default App

