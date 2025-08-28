import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="LogoLet" />
        </div>
        <ul className="nav-menu">
          <li><Link className="nav-link" to="/">Inicio</Link></li>
          <li><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
          <li><Link className="nav-link" to="/servicios">Servicios</Link></li>
          <li><Link className="nav-link" to="/clientes">Clientes</Link></li>
          <li><Link className="cta" to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Navbar;
