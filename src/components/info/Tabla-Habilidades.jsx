import React from "react";

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
    return (
        <section className="container section" aria-labelledby="resume-sections-title">
            <h2 id="resume-sections-title" className="headline gradient-text">Resumen Profesional</h2>
            <p className="lead" style={{maxWidth:760}}>Síntesis de experiencia, proyectos y formación. Destaco impacto, escalabilidad técnica y preparación para roles frontend o full stack junior con foco en calidad.</p>
            <div className="grid-auto mt-5" style={{alignItems:"start"}}>
                <Section title="Experiencia">
                    <Item primary="IT Engineer – Radio Lira" meta="Aug 2024 — Aug 2025 • Alajuela, CR" bullets={[
                        "Mantenimiento y optimización del sitio corporativo (mejor UX y performance)",
                        "Soporte técnico especializado a streaming con >99% uptime",
                        "App iOS beta (SwiftUI) para operaciones internas",
                        "Propuesta IA para respuestas automáticas (fase de integración web)"
                    ]}/>
                    <Item primary="Full Stack Developer – Strix Project (UNADECA)" meta="May 2024 — Dec 2024" bullets={[
                        "Autenticación segura con Firebase",
                        "Endpoints REST y lógica backend escalable",
                        "Mentoría a estudiantes en buenas prácticas y frameworks"
                    ]}/>
                </Section>
                <Section title="Proyectos Destacados">
                    <Item primary="PocketRad (Healthcare Mobile)" meta="React Native • TS • PostgreSQL" bullets={[
                        "Búsqueda inteligente y base anatómica",
                        "Interfaz optimizada para uso clínico",
                        "Arquitectura escalable preparada para módulos IA"
                    ]}/>
                    <Item primary="Strix (University Management)" meta="Svelte • NestJS • Firebase" bullets={[
                        "Gestión de horas de beca y reportes en tiempo real",
                        "Panel administrativo y automatización de seguimiento"
                    ]} link="https://github.com/JakecorralesCespedes/strix"/>
                    <Item primary="StreamLive (Streaming Platform)" meta="SwiftUI • Firebase Auth • AVKit" bullets={[
                        "Reproducción HLS y autenticación Firebase",
                        "Arquitectura modular lista para chat en tiempo real"
                    ]} link="https://github.com/JakecorralesCespedes/Steamlive"/>
                </Section>
                <Section title="Educación y Certificaciones">
                    <Item primary="B.Sc. Ingeniería de Sistemas – UNADECA" meta="2023 — 2025" />
                    <Item primary="Python Fundamentals 1 & 2 (Cisco Skills for All)" meta="2024" />
                        <Item primary="JavaScript Essentials 1 & 2 (Cisco Skills for All)" meta="2024" />
                        <Item primary="Diploma Técnico Cloud Computing (Capacítate)" meta="2024" />
                        <Item primary="Cloud Application Developer (Capacítate)" meta="2024" />
                        <Item primary="English Level B1 (Centro Cultural)" meta="2022" />
                </Section>
                <Section title="Tecnologías y Lenguajes">
                    <Item primary="Lenguajes" bullets={["JavaScript","Python","Java","HTML5","CSS3","Swift"]} />
                    <Item primary="Tecnologías" bullets={["React","Node.js","NestJS","PostgreSQL","Firebase","Docker"]} />
                    <Item primary="Otros" bullets={["Full Stack Development","Microservices Architecture"]} />
                </Section>
            </div>
        </section>
    );
}