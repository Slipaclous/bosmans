"use client";

import React, { useEffect, useRef, useState } from "react";
import "./styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Banner from "./components/Banner";
import Cookies from "js-cookie";
import CookieConsent from "./components/CookieConsent";
import Head from 'next/head';
import Image from 'next/image'; // Ajout de l'importation pour next/image

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Use to display open/closed status
  const presentationRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);
  const openingHours = [
    { day: t("lundi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("mardi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("mercredi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("jeudi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("vendredi"), hours: ["08:00-12:00", "13:00-17:00"] },
    { day: t("samedi"), hours: ["08:00-12:00"] },
    { day: t("dimanche"), hours: [t("ferme")] },
  ];

  useEffect(() => {
    const hasVisited = Cookies.get("hasVisited");
    if (!hasVisited) {
      setShowBanner(true);
      Cookies.set("hasVisited", "true", { expires:2 });
    }
  }, []);

  const closeBanner = () => {
    setHideBanner(true); // Start the hide animation
    setTimeout(() => {
      setShowBanner(false); // Remove the banner from the DOM after the animation
    }, 500); // This should match the duration of the CSS transition
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    const targetElement = presentationRef.current;

    if (targetElement) {
      observer.observe(targetElement);
    }
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);
  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const dayIndex = now.getDay(); // Note: getDay() returns 0 for Sunday, so your array should account for this
      const currentTime = now.getHours() * 100 + now.getMinutes(); // HHMM format

      const todayHours = openingHours[dayIndex - 1]?.hours || [];
      const isOpenNow = todayHours.some((timeRange) => {
        const [start, end] = timeRange.split("-").map((time) => {
          const [hours, minutes] = time.split(":");
          return parseInt(hours, 10) * 100 + parseInt(minutes, 10); // Convert to HHMM
        });
        return currentTime >= start && currentTime <= end;
      });

      setIsOpen(isOpenNow); // Use this state to show if open or closed
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Garage Bosmans",
  "description": "Garage Bosmans à Enghien - Spécialiste en réparation, entretien et pneus.",
  "image": "../public/images/favicon.ico",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Edingsesteenweg 67",
    "addressLocality": "Herne",
    "addressRegion": "Wallonie",
    "postalCode": "1540",
    "addressCountry": "BE"
  },
  "telephone": "+3223961184",
  "url": "https://bosmansbandenpneus.com"
}}
/>

        <title>Garage Bosmans - Hernes</title>
        <meta name="description" content="Garage  Bosmans Hernes" />
      </Head>
      <CookieConsent />
      {showBanner && <Banner closeBanner={closeBanner} hide={hideBanner} />}
      <div className="container">
      <div className="wall">
    <div className="logo-presentation">
      <Image
        src="/images/logo-pneus.png"
        alt="Garage Bosmans - Logo"
        width={400} // Ajustez selon vos besoins
        height={300} // Ajustez selon vos besoins
        priority
      />
      <div className="presentation-text">
        <h2>{t("Notre")} <span>{t("passion")}</span> {t("avotre")} <span>{t("service")}</span> {t("depuis")}   <span>89 {t("ans")} !</span>  </h2>
        <p>{t("sectionabout")}</p>
        <a className="button" href="/about">{t('plus')}</a>
      </div>
    </div>
  </div>
        <div className="horaires-background">
          <h1 className="horaire-title">{t("horaire")}</h1>
          <div className="horaires-wrapper">
            <div className="schedule-list">
              {openingHours.map(({ day, hours }) => (
                <div key={day} className="horaires">
                  <strong>{day}:</strong> {hours.join(" / ")}
                </div>
              ))}
            </div>
            <div className="current-status">
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faCar}
                  size="2x"
                  className="status-icon"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faLock}
                  size="2x"
                  className="status-icon"
                />
              )}
              <p>
                {t("legarage")}{" "}
                <strong>{isOpen ? t("ouvert") : t("fermé")}</strong>.
              </p>
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="status-icon"
              />
              <p>
                {t("question")}</p> <a classname="tel" href="tel:+3223961184">02 396 11 84</a> {t("ou")} <a className="tel" href="tel:+3248620404">0486 20 404</a>
            {/* <div className="exceptional-closure" style={{ display: 'block' }}> 
  <p className="closure-notice">⚠️ Fermeture exceptionnelle du 31/10/24 au 03/11/24.</p>
</div> */}
            </div>

          </div>
        </div>
       
      </div>
    </>
  );
}

export default HomePage;
