"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/footer";
import BackToTopButton from "@/app/components/BackToTopButton";
import PartnerCard from "@/app/components/partner";
import "../../styles/pneus.css";
import { useTranslation } from "react-i18next";

function pneus() {
  const { t } = useTranslation();
  const premiumPatners = [
    {
      name: "Goodyear",
      logo: "/images/logos/goodyear.png",
      url: "https://www.goodyear.eu/fr_fr/consumer.html",
    },
    {
      name: "Continental",
      logo: "/images/logos/continentals.png",
      url: "https://www.continental-pneus.fr/",
    },
    {
      name: "Dunlop",
      logo: "/images/logos/dunlop.png",
      url: "https://www.dunlop.eu/fr_fr/consumer.html",
    },
    {
      name: "Pirelli",
      logo: "/images/logos/pirelli.png",
      url: "https://www.pirelli.com/fr_fr",
    },
  ];
  const otherPartners = [
    {
      name: "Vredestein",
      logo: "/images/logos/vredestein.png",
      url: "https://www.vredestein.fr/",
    },
    {
      name: "Uniroyal",
      logo: "/images/logos/uniroyal.png",
      url: "https://www.uniroyal.fr/",
    },
    {
      name: "Fulda",
      logo: "/images/logos/fulda.png",
      url: "https://www.fulda.com/fr_fr.html",
    },
    {
      name: "maxxis",
      logo: "/images/logos/maxxis.png",
      url: "https://www.maxxis.fr/",
    },
  ];
  return (
    <main>
      <Navbar />
      <div className="tires-container">
      <div className="partners">
        <h2 className="partner-title">{t("Nos partenaires premium")}</h2>
        <div className="partners-list premium">
          {premiumPatners.map((partner, index) => (
            <PartnerCard key={index} {...partner} isPremium={true} />
          ))}
        </div>
        <h2 className="partner-title">{t("Nos autres partenaires")}</h2>
        <div className="partners-list">
          {otherPartners.map((partner, index) => (
            <PartnerCard key={index} {...partner} isPremium={false} />
          ))}
        </div>
      </div>
      <div className="others-partners">
        <h3>{t("Et bien d'autres encore")}</h3>
        <p>
          {t("egalement")} <a href="/contact">{t("formulaire")}</a>
        </p>
      </div>
      </div>
      <BackToTopButton />
      <Footer />
    </main>
  );
}

export default pneus;
