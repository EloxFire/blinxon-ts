import emailjs from '@emailjs/browser'
import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import * as Icon from 'react-icons/fa'
import { colors } from '../scripts/utils'
import '../styles/pages/contact.scss'

interface ContactProps {
  changeActive: (active: number) => void
}

export default function Contact({ changeActive }: ContactProps) {

  const formRef = useRef<HTMLFormElement | string>("");
  const [successFeedback, setSuccessFeedback] = useState("");
  const [errorFeedback, setErrorFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    changeActive(4)
  }, [changeActive])

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setErrorFeedback("Veuillez remplir tous les champs")
      setTimeout(() => {
        setErrorFeedback("")
      }, 3000)
      return;
    }

    setLoading(true);
    emailjs.sendForm('Blinxon', 'blinxon_template', formRef.current, 'user_OimdLZV4uZQJjsxfr0Cgc')
      .then((result) => {
        console.log(result.text);
        typeof formRef.current !== "string" && formRef.current.reset();
        setSuccessFeedback("Votre message a bien été envoyé !")
        setLoading(false);
        setTimeout(() => {
          setSuccessFeedback("")
        }, 3000)
      }, (error) => {
        console.log(error.text);
        setErrorFeedback("Une erreur est survenue...")
        setLoading(false);
        setTimeout(() => {
          setErrorFeedback("")
        }, 3000)
      });
  };

  return (
    <div id="contact">
      <div className="header">
        <div className="title-container">
          <h1>Nos réseaux</h1>
          <h2>Restez connecté</h2>
        </div>
      </div>
      <div className="content">
        <div className="contact-form-container">
          <h1>Contactez nous</h1>
          <p>Vous avez une question ? Vous souhaitez nous contacter ?</p>
          <form ref={formRef as LegacyRef<HTMLFormElement>} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Nom <span className="required"><small>*</small></span></label>
              <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email <span className="required"><small>*</small></span></label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="mail" name="mail" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span className="required"><small>*</small></span></label>
              <textarea onChange={(e) => setMessage(e.target.value)} id="message" name="message" />
            </div>
            <button disabled={loading} className="submit-btn" type="submit">{loading ? "Envoi en cours..." : "Envoyer"}</button>
          </form>
          {
            successFeedback !== "" &&
            <p className="success-message">{successFeedback}</p>
          }
          {
            errorFeedback !== "" &&
            <p className="error-message">{errorFeedback}</p>
          }
        </div>
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
