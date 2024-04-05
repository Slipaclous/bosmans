"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import BackToTopButton from "../components/BackToTopButton";

function contact() {
  return (
    <main>
      <Navbar />
      <div className="container-contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+32475234567"> +32 475 23 45 67</a>
            </div>
            <div className="info">
                <FontAwesomeIcon class="icon" icon={faLocationDot} />
                <span> Chaussée d'Enghien 67, 1540 Herne</span>
            </div>
            <div className="info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Anne.bosmans@outlook.com</span>
            </div>
          </div>
            <div className="contact-form">
                <h2>Contactez-nous</h2>
                <form>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Envoyer</button>
                </form>

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
          <BackToTopButton />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default contact;
