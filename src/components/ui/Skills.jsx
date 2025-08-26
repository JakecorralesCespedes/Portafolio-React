import React, { useEffect } from "react";

export default function Skills({ items = [
  {name:"React", value:90},
  {name:"TypeScript", value:82},
  {name:"CSS/Animations", value:88},
  {name:"Performance", value:78}
]}){
  useEffect(()=>{
    const bars = document.querySelectorAll(".progress > i");
    bars.forEach((b, i) => {
      const val = items[i]?.value ?? 60;
      requestAnimationFrame(()=> b.style.width = val + "%");
    });
  },[items]);

  return (
    <section className="container" aria-labelledby="skills-title">
      <h2 id="skills-title">Habilidades técnicas</h2>
      <p className="lead">Listado corto y medible de competencias y ejemplos de funciones/animaciones aplicadas.</p>

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
