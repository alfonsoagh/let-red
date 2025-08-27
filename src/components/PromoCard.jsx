import React from "react";

export default function PromoCard({promo}){
  return (
    <article className="promo">
      <img src={promo.cover} alt={promo.title} />
      <div className="body">
        <h3 style={{marginBottom:6}}>{promo.title}</h3>
        <p style={{margin:0,fontSize:14,color:'#555'}}>{promo.dates} · {promo.type}</p>
        <p style={{marginTop:10}} className="price">Desde ${promo.priceFrom}</p>
        <div style={{marginTop:12}}>
          <a href={`/promociones/${promo.slug}`} className="cta" style={{marginRight:8}}>Ver detalle</a>
          <a className="nav-link" href="#contacto">Cotizar</a>
        </div>
      </div>
    </article>
  )
}
