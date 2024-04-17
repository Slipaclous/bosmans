"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer";
import BackToTopButton from "./components/BackToTopButton";
import Banner from "./components/Banner";
import Cookies from "js-cookie";
import CookieConsent from "./components/CookieConsent";

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
      Cookies.set("hasVisited", "true", { expires: 7 });
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
    <main>
      <CookieConsent />
       {showBanner && <Banner   closeBanner={closeBanner} hide={hideBanner} />}
      <Navbar />
      <div className="container">
        <div className="wall">
          <img src="./images/logo-pneus.png" alt="" />
        </div>
        <div className="horaires-background">
          <h3 class="horaire-title">{t("horaire")}</h3>
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
                {t("question")} <strong>+32 475 23 45 67</strong>.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={presentationRef}
          className={`presentation ${isVisible ? "appear" : ""}`}
        >
          <div className="presentation-title">

            <h2>Notre <span>passion</span> </h2>
            <h2>À votre <span>service</span> </h2>
            <h2>Depuis <span>88 ans</span> !</h2>
          </div>
          <div className="presentation-text">
            <p>
              Notre garage est une affaire familiale qui a été transmise de
              génération en génération. Nous sommes spécialisés dans la vente de
              pneus et jantes, ainsi que dans l'entretien et la réparation de
              véhicules. Nous travaillons depuis 88 ans maintenant pour vous offrir un service de qualité, rapide et efficace.
            </p>
            <a className="button" href="/about">
              En savoir plus
            </a>
          </div>
          
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </main>
  );
}

export default HomePage;
