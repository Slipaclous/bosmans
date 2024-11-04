"use client";
import React from "react";

import "../../styles/jantes.css";
import { useTranslation } from "react-i18next";
import CookieConsent from "../../components/CookieConsent";
import Head from "next/head";

function jantes() {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <title>Jantes</title>
      <meta name="description" content="Nos 2 collaborateurs pour des jantes qualitatives." />
    </Head>
      <CookieConsent />
      <div className="jantes-container">
       
        
        <div className="marques">
          <h1 className="jantes-title">{t("jantes-title")}</h1>
          
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
    </>
  );
}

export default jantes;
