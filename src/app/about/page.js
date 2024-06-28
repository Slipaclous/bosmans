"use client";
// pages/about.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../styles/about.css"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CookieConsent from '../components/CookieConsent';
import { useTranslation } from 'react-i18next';


export default function About() {
  const {t} = useTranslation();
  return (
    <main>
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
            <img class="carousel-images" src="./images/about/company1.jpg" alt="Car 1" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company2.jpg" alt="Car 2" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company3.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company4.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company5.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company9.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company10.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company11.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company13.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company14.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company15.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company16.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company17.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company18.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company19.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company20.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company21.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company22.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company23.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company24.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company25.jpg" alt="Car 3" />
          </div>
        {/* Add more images as needed */}
      </Carousel>
        </div>
    </main>
  );
}