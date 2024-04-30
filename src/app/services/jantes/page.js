"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/footer";
import BackToTopButton from "@/app/components/BackToTopButton";
import "../../styles/jantes.css";
import { useTranslation } from "react-i18next";
import CookieConsent from "@/app/components/CookieConsent";

function jantes() {
  const { t } = useTranslation();

  return (
    <main>
      <CookieConsent />
      <Navbar />
      <div className="jantes-container">
        <div className="marques">
          
          <div className="marque atraxion">
            <img src="/images/jantes/atraxion.png" alt="audi" />
            <p>{t("atraxion-text")}s.</p>
            <a
              href="https://www.atraxion.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {t("visitez")}{" "}
            </a>
            <h4>{t("toutes-jantes")} </h4>
          </div>
          <div className="marque alcar">
            <img src="/images/jantes/alcar.jpg" alt="audi" />
            <p>{t("alcar-text")}.</p>
            <a
              href="https://www.alcar.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {t("visitez")}{" "}
            </a>
            <h4>{t("toutes-jantes")} </h4>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}

export default jantes;
