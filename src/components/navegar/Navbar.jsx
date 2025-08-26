import React, {useEffect, useState} from "react";
import {useI18n} from "../../i18n.js";
import {Navbar as NBar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import {Link} from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import youtube from "../../assets/youtube.svg";

export default function Navbar(){
    const {t, lang, setLang} = useI18n();
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
                    <Link to="/" aria-label={t('nav_home')}>{t('nav_home')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/Info" aria-label={t('nav_info')}>{t('nav_info')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <a href="#about" aria-label={t('nav_about')}>{t('nav_about')}</a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" style={{gap:4}}>
                <button onClick={toggleDay} aria-label={day ? t('toggle_night') : t('toggle_day')} style={{background:'var(--color-surface)', color:'var(--color-text)', border:'1px solid var(--color-border)', padding:'6px 10px', borderRadius:10, cursor:'pointer', fontSize:'.65rem', letterSpacing:'.5px'}}>
                    {day ? t('toggle_night') : t('toggle_day')}
                </button>
                <button onClick={()=> setLang(lang==='es'?'en':'es')} aria-label="Cambiar idioma" style={{background:'var(--color-surface)', color:'var(--color-text)', border:'1px solid var(--color-border)', padding:'6px 10px', borderRadius:10, cursor:'pointer', fontSize:'.65rem', letterSpacing:'.5px'}}>
                    {t('lang_toggle')}
                </button>
                <Link to="https://www.linkedin.com/in/jake-corrales-39058a295" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><img src={linkedin} width={30} alt="LinkedIn"/></Link>
                <Link to="https://github.com/JakecorralesCespedes" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><img src={github} width={34} alt="GitHub"/></Link>
                <Link to="https://www.youtube.com/@itz_jakecr8286" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><img src={youtube} width={34} alt="YouTube"/></Link>
                <Link to="https://www.instagram.com/corralesjake/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><img src={instagram} width={34} alt="Instagram"/></Link>
            </NavbarContent>
        </NBar>
    );
}
