import React from "react";
import {useI18n} from "../../i18n.js";

const Section = ({title, children}) => (
    <div className="panel" style={{padding:"22px 26px"}}>
        <h3 className="headline" style={{marginTop:0, fontSize:"1rem"}}>{title}</h3>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>{children}</div>
    </div>
);

const Item = ({primary, meta, bullets, link}) => (
    <div style={{display:"flex", flexDirection:"column", gap:6}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
            <strong style={{color:"var(--color-heading)", fontSize:'.85rem'}}>{primary}</strong>
            {meta && <span style={{fontSize:"0.65rem", letterSpacing:".5px", color:"var(--color-text-muted)", textTransform:"uppercase"}}>{meta}</span>}
        </div>
        {bullets && (
            <ul className="list-reset" style={{paddingLeft:14, display:"flex", flexDirection:"column", gap:4}}>
                {bullets.map(b => <li key={b} style={{fontSize:"0.75rem", lineHeight:1.4}}>{b}</li>)}
            </ul>
        )}
        {link && <a href={link} target="_blank" rel="noopener noreferrer" style={{fontSize:"0.65rem"}}>{link}</a>}
    </div>
);

export default function ResumeSections(){
    const {t, lang} = useI18n();
    return (
        <section className="container section" aria-labelledby="resume-sections-title">
        <h2 id="resume-sections-title" className="headline gradient-text">{t('resume_title')}</h2>
        <p className="lead" style={{maxWidth:760}}>{t('resume_lead')}</p>
            <div className="grid-auto mt-5" style={{alignItems:"start"}}>
        <Section title={t('resume_experience')}>
                    <Item primary="IT Engineer – Radio Lira" meta="Aug 2024 — Aug 2025 • Alajuela, CR" bullets={[
            lang==='es'?"Mantenimiento y optimización del sitio corporativo (mejor UX y performance)":"Corporate site maintenance & optimization (UX & performance improvements)",
            lang==='es'?"Soporte técnico especializado a streaming con >99% uptime":"Specialized support for streaming with >99% uptime",
            lang==='es'?"App iOS beta (SwiftUI) para operaciones internas":"iOS beta app (SwiftUI) for internal operations",
            lang==='es'?"Propuesta IA para respuestas automáticas (fase de integración web)":"AI proposal for automated responses (web integration phase)"
                    ]}/>
                    <Item primary="Full Stack Developer – Strix Project (UNADECA)" meta="May 2024 — Dec 2024" bullets={[
            lang==='es'?"Autenticación segura con Firebase":"Secure authentication with Firebase",
            lang==='es'?"Endpoints REST y lógica backend escalable":"REST endpoints and scalable backend logic",
            lang==='es'?"Mentoría a estudiantes en buenas prácticas y frameworks":"Mentoring students on best practices and frameworks"
                    ]}/>
                </Section>
        <Section title={t('resume_projects')}>
                    <Item primary="PocketRad (Healthcare Mobile)" meta="React Native • TS • PostgreSQL" bullets={[
            lang==='es'?"Búsqueda inteligente y base anatómica":"Smart search & anatomy dataset",
            lang==='es'?"Interfaz optimizada para uso clínico":"Interface optimized for clinical use",
            lang==='es'?"Arquitectura escalable preparada para módulos IA":"Scalable architecture prepared for AI modules"
                    ]}/>
                    <Item primary="Strix (University Management)" meta="Svelte • NestJS • Firebase" bullets={[
            lang==='es'?"Gestión de horas de beca y reportes en tiempo real":"Scholarship hours management & real-time reports",
            lang==='es'?"Panel administrativo y automatización de seguimiento":"Admin panel and follow-up automation"
                    ]} link="https://github.com/JakecorralesCespedes/strix"/>
                    <Item primary="StreamLive (Streaming Platform)" meta="SwiftUI • Firebase Auth • AVKit" bullets={[
            lang==='es'?"Reproducción HLS y autenticación Firebase":"HLS playback & Firebase auth",
            lang==='es'?"Arquitectura modular lista para chat en tiempo real":"Modular architecture ready for real-time chat"
                    ]} link="https://github.com/JakecorralesCespedes/Steamlive"/>
                </Section>
        <Section title={t('resume_education')}>
                    <Item primary="B.Sc. Ingeniería de Sistemas – UNADECA" meta="2023 — 2025" />
                    <Item primary="Python Fundamentals 1 & 2 (Cisco Skills for All)" meta="2024" />
                        <Item primary="JavaScript Essentials 1 & 2 (Cisco Skills for All)" meta="2024" />
                        <Item primary="Diploma Técnico Cloud Computing (Capacítate)" meta="2024" />
                        <Item primary="Cloud Application Developer (Capacítate)" meta="2024" />
                        <Item primary="English Level B1 (Centro Cultural)" meta="2022" />
                </Section>
        <Section title={t('resume_tech')}>
            <Item primary={t('resume_langs')} bullets={["JavaScript","Python","Java","HTML5","CSS3","Swift"]} />
            <Item primary={t('resume_tools')} bullets={["React","Node.js","NestJS","PostgreSQL","Firebase","Docker"]} />
            <Item primary={t('resume_other')} bullets={[lang==='es'?"Desarrollo Full Stack":"Full Stack Development", lang==='es'?"Arquitectura de Microservicios":"Microservices Architecture"]} />
                </Section>
            </div>
        </section>
    );
}