import React, { useEffect } from "react";
import {useI18n} from "../../i18n.js";

export default function Skills({ items = [
  {name:"JavaScript", value:88},
  {name:"React", value:86},
  {name:"Node/NestJS", value:74},
  {name:"PostgreSQL", value:68},
  {name:"Firebase", value:72},
  {name:"Docker", value:60},
  {name:"Python", value:70},
  {name:"Java", value:55},
  {name:"Swift", value:50},
  {name:"CSS / Animación", value:84},
  {name:"Performance", value:76}
]}){
  useEffect(()=>{
    const bars = document.querySelectorAll(".progress > i");
    bars.forEach((b, i) => {
      const val = items[i]?.value ?? 60;
      requestAnimationFrame(()=> b.style.width = val + "%");
    });
  },[items]);

  const {t} = useI18n();
  return (
    <section className="container" aria-labelledby="skills-title">
      <h2 id="skills-title">{t('skills_title')} <span style={{fontSize:"0.65em", fontWeight:400, color:"var(--color-text-muted)"}}>{t('skills_hint')}</span></h2>

      <div style={{marginTop:16}}>
        {items.map(s => (
          <div className="skill-row card" key={s.name} style={{marginBottom:12}}>
            <div className="skill-name">{s.name}</div>
            <div className="progress" aria-hidden="true"><i style={{width:0}} /></div>
            <div style={{width:60, textAlign:"right", color:"var(--muted)"}}>{s.value}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
