// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Grupo LET" width="120" height="32" />
            <p className="text-sm text-muted">
              Movilidad internacional con transparencia, calidad y servicio.
            </p>
          </div>

          <div className="footer-grid">
            <nav aria-label="Sitio">
              <h4 className="footer-title">Sitio</h4>
              <ul className="footer-list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/clientes">Comunidad</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-list">
                <li><a href="#">Aviso de privacidad</a></li>
                <li><a href="#">Términos de servicio</a></li>
              </ul>
            </nav>

            <div aria-label="Contacto">
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-list">
                <li><a href="mailto:hola@grupo-let.com">hola@grupo-let.com</a></li>
                <li><a href="tel:+525555555555">+52 55 5555 5555</a></li>
                <li>CDMX · México</li>
              </ul>
              <div className="footer-actions">
                <a className="btn btn-primary" href="https://wa.me/5215555555555" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-sep" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Grupo LET. Todos los derechos reservados.</p>
          <ul className="footer-social">
            <li><a href="#" aria-label="Facebook">Fb</a></li>
            <li><a href="#" aria-label="Instagram">Ig</a></li>
            <li><a href="#" aria-label="LinkedIn">In</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
