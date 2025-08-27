import React from "react";

export default function Hero(){
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>Perfecciona tu francés. Viajamos contigo a donde vayas.</h1>
        <p>Somos una agencia mexicana-canadiense especializada en turismo educativo y de placer desde 2005. Más de 15,347 experiencias cumplidas.</p>
        <div style={{display:'flex',gap:12}}>
          <a className="cta" href="/servicios">Ver servicios</a>
          <a className="nav-link" href="/promociones">Promociones</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/assets/hero.jpg" alt="Viajes" style={{width:'100%',borderRadius:12,boxShadow:'0 10px 30px rgba(0,0,0,0.12)'}}/>
      </div>
    </section>
  );
}
