"use client"
// pages/about.js
import React from 'react';
import CookieConsent from '../components/CookieConsent';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import "../styles/about.css"

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>A propos</title>
        <meta name="description" content="A propos de l'histoire de notre garage et comment il est né." />
      </Head>
      <CookieConsent />
      <div className="about-container">
        <div className="about-image">
          <img src="./images/about/company10.JPG" alt="Notre garage" />
        </div>
        <div className="about-content">
          <h1>{t("overons")}</h1>
          <p>{t('about1')}</p>
          <p>{t("about2")}</p>
          <p>{t("about3")}</p>
          <p>{t("about4")}</p>
        </div>
      </div>
    </>
  );
}
