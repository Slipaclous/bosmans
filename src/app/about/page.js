"use client";
// pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import MySwiper from '../components/Swiper'; // Import your Swiper component
import "../styles/about.css"
import BackToTopButton from '../components/BackToTopButton';

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="container-about">
        <MySwiper /> {/* Use the Swiper component */}
        {/* Any other content */}
        <BackToTopButton />
      </div>
      <Footer />
    </main>
  );
}
