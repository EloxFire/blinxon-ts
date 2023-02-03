import '../styles/components/navbar.scss'
import blinxon_logo from '../img/logo_blinxon.svg'

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img src={blinxon_logo} alt="Logo de l'association Blinxon" />
        </a>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a href="/" className="navbar-menu-link">Accueil</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/about" className="navbar-menu-link">À propos</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/trophy" className="navbar-menu-link">4L Trophy</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/galerie" className="navbar-menu-link">Galerie</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/contact" className="navbar-menu-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
