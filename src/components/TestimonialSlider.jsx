import React, { useState } from "react";

export default function TestimonialSlider({items}){
  const [i,setI] = useState(0);
  function next(){ setI((i+1)%items.length) }
  function prev(){ setI((i-1+items.length)%items.length) }

  if(!items || items.length===0) return null;
  const cur = items[i];

  return (
    <section style={{padding:'32px',background:'linear-gradient(90deg, rgba(251,0,9,0.03), transparent)'}}>
      <div className="container" style={{display:'flex',alignItems:'center',gap:20}}>
        <div style={{flex:1}}>
          <blockquote style={{fontStyle:'italic',fontSize:18}}>"{cur.quote}"</blockquote>
          <p style={{marginTop:8,fontWeight:700}}>- {cur.name}, {cur.program}</p>
        </div>
        <div>
          <img src={cur.photo} alt={cur.name} style={{width:120,height:120,borderRadius:8,objectFit:'cover'}}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <button onClick={prev} aria-label="Anterior">◀</button>
          <button onClick={next} aria-label="Siguiente">▶</button>
        </div>
      </div>
    </section>
  )
}
