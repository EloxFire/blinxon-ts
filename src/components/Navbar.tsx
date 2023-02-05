import { useEffect } from 'react'
import blinxon_logo from '../img/logo_blinxon.svg'
import * as Icon from 'react-icons/fa'
import '../styles/components/navbar.scss'
import { useLocation } from 'react-router-dom'

interface NavbarProps {
  active: number
}

export default function Navbar({ active }: NavbarProps) {

  const location = useLocation()

  // Add small border around navbar on page scroll
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar?.classList.add('navbar-active')
      } else {
        navbar?.classList.remove('navbar-active')
      }
    })
  }, [])

  useEffect(() => {
    handleCloseBurger()
  }, [location])

  const handleCloseBurger = () => {
    const burgerMenuModal = document.getElementById('burger-modal');
    if (burgerMenuModal) {
      burgerMenuModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  const handleOpenBurger = () => {
    const burgerMenuModal = document.getElementById('burger-modal');
    if (burgerMenuModal) {
      burgerMenuModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <img src={blinxon_logo} alt="Logo de l'association Blinxon" />
          </a>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className={`navbar-menu-item ${active === 0 && "active"}`}>
              <a href="/" className="navbar-menu-link">Accueil</a>
            </li>
            <li className={`navbar-menu-item ${active === 1 && "active"}`}>
              <a href="/a-propos" className="navbar-menu-link">À propos</a>
            </li>
            {/* <li className={`navbar-menu-item ${active === 2 && "active"}`}>
            <a href="/trophy" className="navbar-menu-link">4L Trophy</a>
          </li>
          <li className={`navbar-menu-item ${active === 3 && "active"}`}>
            <a href="/galerie" className="navbar-menu-link">Galerie</a>
          </li>
          <li className={`navbar-menu-item ${active === 4 && "active"}`}>
            <a href="/contact" className="navbar-menu-link">Contact</a>
          </li> */}
          </ul>
          <div onClick={() => handleOpenBurger()} className="navbar-burger">
            <Icon.FaBars style={{ fontSize: '1.5rem', verticalAlign: 'middle' }} />
          </div>
        </div>
      </nav>
      <div id="burger-modal" className="burger-modal">
        <ul className="navbar-menu">
          <li className={`navbar-menu-item ${active === 0 && "active"}`}>
            <a href="/" className="navbar-menu-link">Accueil</a>
          </li>
          <li className={`navbar-menu-item ${active === 1 && "active"}`}>
            <a href="/a-propos" className="navbar-menu-link">À propos</a>
          </li>
          {/* <li className={`navbar-menu-item ${active === 2 && "active"}`}>
            <a href="/trophy" className="navbar-menu-link">4L Trophy</a>
          </li>
          <li className={`navbar-menu-item ${active === 3 && "active"}`}>
            <a href="/galerie" className="navbar-menu-link">Galerie</a>
          </li>
          <li className={`navbar-menu-item ${active === 4 && "active"}`}>
            <a href="/contact" className="navbar-menu-link">Contact</a>
          </li> */}
          <p className="burger-close-btn" onClick={() => handleCloseBurger()}>Fermer</p>
        </ul>
      </div>
    </>
  )
}
