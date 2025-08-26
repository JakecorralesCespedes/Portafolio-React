import React from "react";

export default function About(){
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <div className="panel fade-up">
        <h2 id="about-title" className="headline gradient-text">Sobre mí</h2>
        <p className="lead" style={{marginTop:12}}>Desarrollador frontend enfocado en crear productos accesibles, performantes y mantenibles. Disfruto convertir requisitos difusos en interfaces claras, con una mentalidad orientada a resultados y calidad continua.</p>
        <div className="mt-4" style={{display:"flex", flexWrap:"wrap", gap:8}}>
          <span className="badge">React</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Testing</span>
          <span className="badge">UI/UX</span>
          <span className="badge">Performance</span>
          <span className="badge">CSS Animations</span>
        </div>
      </div>
    </section>
  );
}
