"use client";
// pages/about.js
import React from 'react';
import MySwiper from '../components/Swiper'; // Import your Swiper component
import "../styles/about.css"
import CookieConsent from '../components/CookieConsent';

export default function About() {
  return (
    <main>
      <CookieConsent />
      {/* <div className="container-about">
        <MySwiper />
      
      </div> */}
      <div className="wait">
        <h1>Cette page est actuellement en maintenance.</h1>
        <a href="/">Revenir à l'accueil</a>
      </div>
    </main>
  );
}
