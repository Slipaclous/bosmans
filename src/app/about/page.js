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
            <img class="carousel-images" src="./images/about/company1.JPG" alt="Car 1" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company2.JPG" alt="Car 2" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company3.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company4.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company5.jpg" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company9.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company10.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company11.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company13.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company14.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company15.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company16.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company17.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company18.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company19.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company20.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company21.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company22.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company23.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company24.JPG" alt="Car 3" />
          </div>
          <div>
            <img class="carousel-images" src="./images/about/company25.JPG" alt="Car 3" />
          </div>
        {/* Add more images as needed */}
      </Carousel>
        </div>
    </main>
  );
}