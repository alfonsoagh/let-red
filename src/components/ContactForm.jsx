import React, { useState } from "react";

export default function ContactForm(){
  const [form,setForm]=useState({name:'',email:'',phone:'',message:''});
  const [sent,setSent]=useState(false);

  function onChange(e){
    setForm({...form,[e.target.name]:e.target.value});
  }

  function onSubmit(e){
    e.preventDefault();
    // Demo: solo mostrar confirmación. En producción -> POST a backend.
    setSent(true);
  }

  if(sent) return <div style={{padding:20,background:'#f0fff4',borderRadius:8}}>Gracias {form.name}, recibimos tu mensaje. Nos contactamos pronto.</div>

  return (
    <form onSubmit={onSubmit} style={{display:'grid',gap:12}}>
      <input name="name" value={form.name} onChange={onChange} placeholder="Nombre completo" required/>
      <input name="email" value={form.email} onChange={onChange} placeholder="Correo electrónico" required/>
      <input name="phone" value={form.phone} onChange={onChange} placeholder="Teléfono / WhatsApp" />
      <textarea name="message" value={form.message} onChange={onChange} placeholder="¿En qué te podemos ayudar?" rows="5"/>
      <div style={{display:'flex',gap:8}}>
        <button className="cta" type="submit">Enviar</button>
        <a className="nav-link" href="https://wa.me/5217220000000" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </form>
  );
}
