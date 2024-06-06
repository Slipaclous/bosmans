"use client";
import React, {useRef,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import BackToTopButton from "../components/BackToTopButton";
import emailjs from '@emailjs/browser';
import ReCAPTCHA  from "react-google-recaptcha-v3";
import CookieConsent from "../components/CookieConsent";

function contact() {
  const [token, setToken] = useState(''); // Store the ReCAPTCHA token
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const recaptchaRef = useRef();
  const { t } = useTranslation();




  const handleToken = (token) => {
    console.log("Token received:", token); // Add this line to check if the token is being received
    setToken(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hsnjwxq', 'template_w9td2do', e.target, 'K5Twd1LE__X0iu0pO')
      .then((result) => {
        console.log(result.text);
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser les champs du formulaire
        setSuccessMessage('Votre message a été envoyé avec succès !'); // Afficher la bannière de succès
        setTimeout(() => {
          setSuccessMessage(''); // Cacher la bannière de succès après 3 secondes
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    
    <main>
      <CookieConsent />
      <div className="container-contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+32475234567"> 02 396 11 84</a>
            </div>
            <div className="info">
                <FontAwesomeIcon class="icon" icon={faLocationDot} />
                <span> Edingsesteenweg 67, 1540 Herne</span>
            </div>
            <div className="info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>bosmans.anne@outlook.com</span>
            </div>
          </div>
            <div className="contact-form">
                <h2>{t('contactez-nous')}</h2>
                <form onSubmit={handleOnSubmit} method="POST">
                <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
                <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
                <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="button-div">
            
                <button type="submit">{t('envoyer')}</button>
</div>
                </form>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
        <div class="iframe" >
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Chauss%C3%A9e%20d'Enghien%2067,%201540%20Herne+(banden%20bosmans)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

      </div>
    </main>
  );
}

export default contact;
