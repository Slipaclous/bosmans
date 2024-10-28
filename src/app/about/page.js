"use client";
// pages/about.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../styles/about.css"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CookieConsent from '../components/CookieConsent';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';


export default function About() {
  const {t} = useTranslation();
  return (
    <>
    <Head>
      <title>A propos</title>
      <meta name="description" content="A propos de l'histoire de notre garage et comment est-il né." />
    </Head>
      <CookieConsent />
      <h1 class="about-title">{t("overons")}</h1>
      <div className="about-text">
        <p>
        {t('about1')}
        </p>
        <p>
        {t("about2")}
        </p>
        <p>
        {t("about3")}
        </p>
        <p>
        {t("about4")}
        </p>
      </div>
        <div className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
         
          <div>
            <img class="carousel-images" src="./images/about/company10.JPG" alt="Car 3" />
          </div>
          
        {/* Add more images as needed */}
      </Carousel>
        </div>
    </>
  );
}