import React from "react";
import { FiDownload, FiMail, FiExternalLink } from "react-icons/fi";
import cvPdf from "../../assets/Jakecorrales.pdf";

export default function Hero(){
  return (
    <section className="container" aria-labelledby="hero-title">
      <div className="card" style={{padding:40}}>
        <div className="hero-decor" aria-hidden="true"></div>
        <div className="hero-grid">
          <div style={{flex:1, minWidth:260}}>
            <h1 id="hero-title" className="gradient-text">Jake Corrales — Frontend Developer</h1>
            <p className="lead fade-up" style={{marginTop:18, maxWidth:640}}>
              Desarrollo interfaces accesibles, performantes y mantenibles aplicando principios de arquitectura, medición de rendimiento y animaciones fluidas. Enfoque en claridad, escalabilidad y experiencia de usuario.
            </p>
            <div className="hero-cta fade-up">
              <a className="btn btn-primary" href={cvPdf} download="JakeCorrales-CV.pdf" aria-label="Descargar CV en PDF">
                <FiDownload /> Descargar CV
              </a>
              <a className="btn btn-outline" href={cvPdf} target="_blank" rel="noopener noreferrer" aria-label="Ver CV en nueva pestaña">
                <FiExternalLink /> Ver Online
              </a>
              <a className="btn btn-outline" href="mailto:jakecorrales24@gmail.com" aria-label="Contactar por correo">
                <FiMail /> Contacto
              </a>
            </div>
          </div>
          <div style={{flexBasis:170, flexGrow:0}}>
            <div className="hero-avatar">
              <img src="/src/assets/repositorio1.png" alt="Avatar" style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>
            <p className="muted" style={{marginTop:14, fontSize:".78rem", letterSpacing:".5px", textTransform:"uppercase"}}>React • UI/UX • Animación • Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
