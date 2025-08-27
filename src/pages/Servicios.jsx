import React from "react";

export default function Servicios(){
  const services = [
    {title:'Turismo Educativo',desc:'Cursos de idioma, intercambios académicos, prácticas profesionales.'},
    {title:'Turismo de Placer',desc:'Viajes grupales, despedidas, tours culturales.'},
    {title:'Asesoría de Visas',desc:'Guía en procesos de visas y documentos.'}
  ];
  return (
    <section className="container" style={{padding:'48px 0'}}>
      <h1>Servicios</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,marginTop:24}}>
        {services.map(s => (
          <div key={s.title} style={{padding:20,background:'#fff',borderRadius:10,boxShadow:'0 6px 18px rgba(0,0,0,0.04)'}}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div style={{marginTop:12}}>
              <a className="cta" href="/contacto">Cotizar</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
