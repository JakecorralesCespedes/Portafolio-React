// eslint-disable-next-line no-unused-vars
import React from "react";

/* Logo usando imagen proporcionada con efecto aura */
import avatar from "../../assets/gojo-avatar.png";

export const Logo = () => (
    <div className="anime-logo image" aria-label="Logo" role="img">
        <img src={avatar} alt="Logo" className="anime-logo-img" />
        {Array.from({length:5}).map((_,i)=> <span key={i} className="logo-spark" style={{'--i':i}} />)}
    </div>
);
