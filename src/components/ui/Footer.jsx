import React from "react";
import {useI18n} from "../../i18n.js";

export default function Footer(){
  const year = new Date().getFullYear();
  const {t} = useI18n();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <div>
          <h3 className="headline gradient-text" style={{fontSize:"1.1rem"}}>{t('footer_contact')}</h3>
          <ul className="list-reset muted mt-3">
            <li><a href="mailto:jakecorrales24@gmail.com">Correo personal</a></li>
            <li><a href="mailto:jake.corrales@unadeca.net">Correo universitario</a></li>
            <li><a href="https://wa.me/87308869" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h3 className="headline" style={{fontSize:"1.1rem"}}>{t('footer_social')}</h3>
          <ul className="list-reset muted mt-3">
            <li><a href="https://www.linkedin.com/in/jake-corrales-39058a295" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/JakecorralesCespedes" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.youtube.com/@itz_jakecr8286" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h3 className="headline" style={{fontSize:"1.1rem"}}>{t('footer_values')}</h3>
          <p className="muted mt-3">{t('footer_values_text')}</p>
        </div>
        <div>
          <h3 className="headline" style={{fontSize:"1.1rem"}}>{t('footer_stack')}</h3>
          <p className="muted mt-3">{t('footer_stack_text')}</p>
        </div>
      </div>
  <div className="footer-bottom">© {year} Jake Corrales. {t('footer_copy')}</div>
    </footer>
  );
}
