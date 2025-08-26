import React, {useEffect, useState} from "react";
import {Navbar as NBar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import {Link} from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import youtube from "../../assets/youtube.svg";

export default function Navbar(){
    const [day,setDay] = useState(false);
    useEffect(()=>{
        if(day) document.body.classList.add('theme-day'); else document.body.classList.remove('theme-day');
    },[day]);
    const toggleDay = ()=> setDay(d=> !d);
    return (
        <NBar maxWidth="xl" isBordered className="nav" aria-label="Barra de navegación principal">
            <NavbarBrand style={{gap:10}}>
                <Logo />
                <p style={{fontWeight:600, letterSpacing:"1px"}}>Portafolio</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem isActive>
                    <Link to="/" aria-label="Ir al inicio">Inicio</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/Hobby" aria-label="Ver hobbies">Hobby</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/Info" aria-label="Ver información">Info</Link>
                </NavbarItem>
                <NavbarItem>
                    <a href="#about" aria-label="Ir a sobre mí">Sobre mí</a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" style={{gap:4}}>
                                <button onClick={toggleDay} aria-label="Cambiar a modo día" style={{background:'var(--color-surface)', color:'var(--color-text)', border:'1px solid var(--color-border)', padding:'6px 10px', borderRadius:10, cursor:'pointer', fontSize:'.65rem', letterSpacing:'.5px'}}>
                                    {day ? 'Night' : 'Day'}
                                </button>
                <Link to="https://www.linkedin.com/in/jake-corrales-39058a295" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><img src={linkedin} width={30} alt="LinkedIn"/></Link>
                <Link to="https://github.com/JakecorralesCespedes" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><img src={github} width={34} alt="GitHub"/></Link>
                <Link to="https://www.youtube.com/@itz_jakecr8286" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><img src={youtube} width={34} alt="YouTube"/></Link>
                <Link to="https://www.instagram.com/corralesjake/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><img src={instagram} width={34} alt="Instagram"/></Link>
            </NavbarContent>
        </NBar>
    );
}
