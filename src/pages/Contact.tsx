import React, { useEffect } from 'react'
import * as Icon from 'react-icons/fa'
import { colors } from '../scripts/utils'
import '../styles/pages/contact.scss'

interface ContactProps {
  changeActive: (active: number) => void
}

export default function Contact({ changeActive }: ContactProps) {

  useEffect(() => {
    changeActive(4)
  }, [changeActive])

  return (
    <div id="contact">
      <div className="header">
        <div className="title-container">
          <h1>Nos réseaux</h1>
          <h2>Restez connecté</h2>
        </div>
      </div>
      <div className="content">
        <h1>Retrouvez blinxon sur les réseaux sociaux</h1>
        <p>Nous sommes présents sur Instagram et Linkedin !</p>
        <div className="socials-container">
          <a href="https://www.instagram.com/blinxon_4ltrophy/?hl=fr" target={'_blank'} rel="noreferrer">
            <Icon.FaInstagram style={{ color: colors.green, fontSize: '3rem', marginRight: '30px' }} />
          </a>
          <a href="https://www.instagram.com/blinxon_4ltrophy/?hl=fr" target={'_blank'} rel="noreferrer">
            <Icon.FaLinkedin style={{ color: colors.green, fontSize: '3rem', marginRight: '30px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}
