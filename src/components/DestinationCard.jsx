import React from "react";

export default function DestinationCard({dest}){
  return (
    <article style={{borderRadius:10,overflow:'hidden',boxShadow:'0 6px 18px rgba(0,0,0,0.06)'}}>
      <img src={dest.cover} alt={dest.title} style={{width:'100%',height:160,objectFit:'cover'}} />
      <div style={{padding:12}}>
        <h4 style={{margin:0}}>{dest.title}</h4>
        <p style={{color:'#666',marginTop:6}}>{dest.excerpt}</p>
        <div style={{marginTop:12}}>
          <a className="cta" href={`/destinos/${dest.slug}`}>Ver destino</a>
        </div>
      </div>
    </article>
  )
}
