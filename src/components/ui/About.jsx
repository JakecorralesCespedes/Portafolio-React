import React from "react";
import {useI18n} from "../../i18n.js";

export default function About(){
  const {t} = useI18n();
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <div className="panel fade-up">
        <h2 id="about-title" className="headline gradient-text">{t('about_title')}</h2>
        <p className="lead" style={{marginTop:12}}>{t('about_intro')}</p>
        <div className="mt-4" style={{display:"flex", flexWrap:"wrap", gap:8}}>
          <span className="badge">JavaScript</span>
          <span className="badge">Python</span>
          <span className="badge">Java</span>
          <span className="badge">React</span>
          <span className="badge">NestJS</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">Firebase</span>
          <span className="badge">Docker</span>
        </div>
      </div>
    </section>
  );
}
