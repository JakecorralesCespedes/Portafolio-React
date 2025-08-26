import React, {createContext, useContext, useState, useMemo} from 'react';

const messages = {
  es: {
    hero_title: 'Jake Corrales — Desarrollador Frontend',
    hero_intro: 'Desarrollo interfaces accesibles, performantes y mantenibles aplicando principios de arquitectura, medición de rendimiento y animaciones fluidas. Enfoque en claridad, escalabilidad y experiencia de usuario.',
    hero_contact: 'Contacto',
    hero_download: 'Descargar CV',
    hero_view: 'Ver Online',
    skills_title: 'Habilidades técnicas',
    skills_hint: '(nivel relativo de dominio y uso reciente)',
    projects_heading: 'Proyectos Destacados',
    projects_lead: 'Conjunto de desarrollos académicos y personales alineados a mi CV que evidencian aplicación de patrones, consumo de APIs, arquitectura modular y buenas prácticas orientadas a mantenibilidad y escalabilidad.',
    footer_contact: 'Contacto',
    footer_social: 'Social',
    footer_values: 'Valores',
    footer_values_text: 'Código limpio, comunicación clara y entrega incremental. Creo en medir, optimizar y compartir conocimiento.',
    footer_stack: 'Stack actual',
    footer_stack_text: 'React 18, NextUI, Vite, Testing Library.',
    footer_copy: 'Portafolio personal.',
    nav_home: 'Inicio',
    nav_info: 'Info',
    nav_about: 'Sobre mí',
    toggle_day: 'Día',
    toggle_night: 'Noche',
    lang_toggle: 'EN'
  ,about_title:'Sobre mí'
  ,about_intro:'Desarrollador frontend enfocado en crear productos accesibles, performantes y mantenibles. Disfruto convertir requisitos difusos en interfaces claras, con una mentalidad orientada a resultados y calidad continua.'
  ,resume_title:'Resumen Profesional'
  ,resume_lead:'Síntesis de experiencia, proyectos y formación. Destaco impacto, escalabilidad técnica y preparación para roles frontend o full stack junior con foco en calidad.'
  ,resume_experience:'Experiencia'
  ,resume_projects:'Proyectos Destacados'
  ,resume_education:'Educación y Certificaciones'
  ,resume_tech:'Tecnologías y Lenguajes'
  ,resume_langs:'Lenguajes'
  ,resume_tools:'Tecnologías'
  ,resume_other:'Otros'
  },
  en: {
    hero_title: 'Jake Corrales — Frontend Developer',
    hero_intro: 'I build accessible, performant and maintainable interfaces applying architecture principles, performance measurement and smooth animations. Focused on clarity, scalability and user experience.',
    hero_contact: 'Contact',
    hero_download: 'Download CV',
    hero_view: 'View Online',
    skills_title: 'Technical Skills',
    skills_hint: '(relative proficiency and recent usage)',
    projects_heading: 'Featured Projects',
    projects_lead: 'Set of academic and personal projects aligned with my CV demonstrating patterns, API consumption, modular architecture and best practices for maintainability and scalability.',
    footer_contact: 'Contact',
    footer_social: 'Social',
    footer_values: 'Values',
    footer_values_text: 'Clean code, clear communication and incremental delivery. I believe in measuring, optimizing and sharing knowledge.',
    footer_stack: 'Current stack',
    footer_stack_text: 'React 18, NextUI, Vite, Testing Library.',
    footer_copy: 'Personal portfolio.',
    nav_home: 'Home',
    nav_info: 'Info',
    nav_about: 'About',
    toggle_day: 'Day',
    toggle_night: 'Night',
    lang_toggle: 'ES'
  ,about_title:'About me'
  ,about_intro:'Frontend developer focused on building accessible, performant and maintainable products. I enjoy turning fuzzy requirements into clear interfaces with a results and continuous quality mindset.'
  ,resume_title:'Professional Summary'
  ,resume_lead:'Synthesis of experience, projects and education. Emphasis on impact, technical scalability and readiness for junior frontend or full stack roles with quality focus.'
  ,resume_experience:'Experience'
  ,resume_projects:'Featured Projects'
  ,resume_education:'Education & Certifications'
  ,resume_tech:'Technologies & Languages'
  ,resume_langs:'Languages'
  ,resume_tools:'Technologies'
  ,resume_other:'Other'
  }
};

const I18nContext = createContext({lang:'es', t:(k)=>k, setLang:()=>{}});
export const I18nProvider = ({children}) => {
  const [lang,setLang] = useState('es');
  const value = useMemo(()=>({
    lang,
    setLang,
    t:(key)=> messages[lang][key] || key
  }),[lang]);
  return React.createElement(I18nContext.Provider, {value}, children);
};
export const useI18n = ()=> useContext(I18nContext);