"use client";
// pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MySwiper from '../components/Swiper'; // Import your Swiper component
import "../styles/about.css"
import BackToTopButton from '../components/BackToTopButton';
import CookieConsent from '../components/CookieConsent';

export default function About() {
  return (
    <main>
      <CookieConsent />
      <Navbar />
      {/* <div className="container-about">
        <MySwiper />
      
      </div> */}
      <div className="wait">
        <h1>Cette page est actuellement en maintenace.</h1>
        <a href="/">Revenir à l'accueil</a>
      </div>
        <BackToTopButton />
      <Footer />
    </main>
  );
}
