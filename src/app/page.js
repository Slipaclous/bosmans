"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Use to display open/closed status
  const presentationRef = useRef(null);
  const openingHours = [
    { day: "Lundi", hours: ["08:00-12:00", "13:00-17:00"] },
    { day: "Mardi", hours: ["08:00-12:00", "13:00-17:00"] },
    { day: "Mercredi", hours: ["08:00-12:00", "13:00-17:00"] },
    { day: "Jeudi", hours: ["08:00-12:00", "13:00-17:00"] },
    { day: "Vendredi", hours: ["08:00-12:00", "13:00-17:00"] },
    { day: "Samedi", hours: ["08:00-12:00"] },
    { day: "Dimanche", hours: [] },
  ];

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
      <Navbar />
      <div className="container">
        <div className="wall">
          <img src="./images/logo-pneus.png" alt="" />
        </div>
        <div className="horaires-background">
          <div className="horaires-wrapper">
            <div className="schedule-list">
              <h3>Horaires d'ouverture</h3>
              {openingHours.map(({ day, hours }) => (
                <div key={day} className="horaires">
                  <strong>{day}:</strong> {hours.join(" / ")}
                </div>
              ))}
            </div>
            <div className="current-status">
              <p>
                Le garage est actuellement{" "}
                <strong>{isOpen ? "ouvert" : "fermé"}</strong>.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={presentationRef}
          className={`presentation ${isVisible ? "appear" : ""}`}
        >
          <div className="presentation-text">
            <h2>Passion pneus depuis 78 ans</h2>
            <FontAwesomeIcon icon="fa-regular fa-tire" />
            <p>Lorem ipsum...</p>
            <a className="button" href="#">
              En savoir plus
            </a>
          </div>
          <div className="presentation-image">
            <img src="./images/garage-face.webp" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
