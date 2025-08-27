// src/components/layout/Navbar.jsx
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const nav = [
  { to:'/', label:'Inicio' },
  { to:'/nosotros', label:'Nosotros' },
  { to:'/servicios', label:'Servicios' },
  { to:'/comunidad', label:'Comunidad' },
  { to:'/contacto', label:'Contacto' },
]

export default function Navbar(){
  const [open, setOpen] = useState(false)

  

  const close = () => {
    setOpen(false)
    document.body.classList.remove('nav-open') // ← bloquea scroll al cerrar
  }

  const openMenu = () => {
    setOpen(true)
    document.body.classList.add('nav-open')    // ← bloquea scroll al abrir
  }

  // Cerrar con Escape
  const onKeyDown = (e) => { if (e.key === 'Escape') close() }

  return (
    <header className='sticky' style={{ top:0, background:'rgba(255,255,255,.8)', borderBottom:'1px solid var(--line)' }}>
      <div className='container' style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px' }}>
        <Link to='/' onClick={close} style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none', color:'inherit' }}>
          <img src='/logo.png' alt='Grupo LET' style={{ height:32 }}/>
          <strong>Grupo LET</strong>
        </Link>

        {/* Desktop nav */}
        <nav className='nav'>
          {nav.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to==='/' } onClick={close}>{item.label}</NavLink>
          ))}
          <a className='btn btn-primary text-sm' href='https://wa.me/5215555555555' target='_blank' rel='noreferrer'>WhatsApp</a>
        </nav>

        {/* Mobile toggle */}
        <button className='nav-toggle' aria-label='Abrir menú' onClick={openMenu}>☰</button>
      </div>

      {/* Overlay */}
      <div className={`nav-overlay ${open ? 'open' : ''}`} onClick={close} />

      {/* Drawer */}
      <aside
        className={`nav-drawer ${open ? 'open' : ''}`}
        aria-hidden={!open}
        aria-modal={open}
        role='dialog'
        onKeyDown={onKeyDown}
      >
        <header>
          <span style={{ fontWeight:600 }}>Menú</span>
          <button className='nav-toggle' aria-label='Cerrar menú' onClick={close}>✕</button>
        </header>
        <nav>
          {nav.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to==='/' } onClick={close}>{item.label}</NavLink>
          ))}
          <a className='btn btn-primary btn-full' href='https://wa.me/5215555555555' target='_blank' rel='noreferrer' onClick={close}>
            WhatsApp
          </a>
        </nav>
      </aside>
    </header>
  )
}
