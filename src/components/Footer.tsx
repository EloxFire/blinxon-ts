import moment from 'moment'
import * as Icon from 'react-icons/fa'
import blinxon_logo_white from '../img/logo_blinxon_white.svg'
import '../styles/components/footer.scss'

export default function Footer() {
  return (
    <div id="footer">
      <div className="content">
        <div className="left">
          <img src={blinxon_logo_white} alt="Logo blanc de l'association Blinxon " />
        </div>
        <div className="right">
          <p>Association de loi 1901 BLINXON</p>
          <p>Siège social : 36 rue Mignet, 13100 Aix en Provence</p>
          <p>Numéro RNA : W131016311</p>

          <div className="separator"></div>
          <div className="socials">
            <a style={{ marginRight: '20px' }} href="https://www.instagram.com/blinxon_4ltrophy" target="_blank" rel="noreferrer">
              <Icon.FaInstagram style={{ fontSize: '2rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/blinxon-4l-trophy-74b04b258/" target="_blank" rel="noreferrer">
              <Icon.FaLinkedin style={{ fontSize: '2rem' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {moment().format('YYYY')} Blinxon</p>
      </div>
    </div>
  )
}
