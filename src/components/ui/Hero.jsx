import React from "react";
import { FiDownload, FiMail, FiExternalLink } from "react-icons/fi";
import cvPdf from "../../assets/Jakecorrales.pdf";
import avatarImg from "../../assets/repositorio1.png";
import {useI18n} from "../../i18n.js";

export default function Hero(){
  const {t} = useI18n();
  return (
    <section className="container" aria-labelledby="hero-title">
      <div className="card" style={{padding:40}}>
        <div className="hero-decor" aria-hidden="true"></div>
        <div className="hero-grid">
          <div style={{flex:1, minWidth:260}}>
            <h1 id="hero-title" className="gradient-text">{t('hero_title')}</h1>
            <p className="lead fade-up" style={{marginTop:18, maxWidth:640}}>{t('hero_intro')}</p>
            <div className="hero-cta fade-up">
              <a className="btn btn-primary" href={cvPdf} download="JakeCorrales-CV.pdf" aria-label={t('hero_download')}>
                <FiDownload /> {t('hero_download')}
              </a>
              <a className="btn btn-outline" href={cvPdf} target="_blank" rel="noopener noreferrer" aria-label={t('hero_view')}>
                <FiExternalLink /> {t('hero_view')}
              </a>
              <a className="btn btn-outline" href="mailto:jakecorrales24@gmail.com" aria-label={t('hero_contact')}>
                <FiMail /> {t('hero_contact')}
              </a>
            </div>
          </div>
          <div style={{flexBasis:200, flexGrow:0, display:"flex", flexDirection:"column", gap:12, alignItems:"center"}}>
            <div className="hero-avatar" style={{width:200, height:200, boxShadow:"0 6px 24px -6px rgba(0,0,0,.6)"}}>
              <img src={avatarImg} alt="Avatar" style={{width:"100%", height:"100%", objectFit:"cover"}} />
              <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.55))", display:"flex", alignItems:"flex-end", justifyContent:"center", padding:8, opacity:0, transition:"opacity .35s"}} className="avatar-overlay">
                <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{padding:"4px 10px", fontSize:"0.65rem"}} aria-label="Abrir CV completo">Ver CV</a>
              </div>
            </div>
            <p className="muted" style={{margin:0, fontSize:".65rem", letterSpacing:".5px", textTransform:"uppercase"}}>JavaScript • React • Node/NestJS • PostgreSQL • Firebase • Docker • Python • Swift • Java</p>
          </div>
        </div>
      </div>
    </section>
  );
}
