"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BackToTopButton from "../components/BackToTopButton";
import "../styles/leasing.css";
import { useTranslation } from "react-i18next";
import CookieConsent from "../components/CookieConsent";

function Partenaires() {
  const { t } = useTranslation();
  const partners = [
    // Exclude "Lease-plan" from this list if rendering it separately
    {
      name: "ALD",
      logo: "/images/leasing/ald.png",
      url: "https://www.aldautomotive.be",
    },
    {
      name: "Alphabet",
      logo: "/images/leasing/alphabet.png",
      url: "https://www.alphabet.com",
    },
    {
      name: "Arval",
      logo: "/images/leasing/arval.png",
      url: "https://www.arval.be/fr-be",
    },
    {
      name: "Athlon",
      logo: "/images/leasing/athlon.png",
      url: "https://www.athlon.com/be",
    },
    {
      name: "Belfius",
      logo: "/images/leasing/belfius.png",
      url: "https://www.belfius-autolease.be/FR/index.aspx?firstWA=no",
    },
    {
      name: "KBC",
      logo: "/images/leasing/kbc.png",
      url: "https://www.kbc.be/corporate/fr/produit/financer/leasing/leasing-auto-full-service.html",
    },
    {
      name: "Vancia",
      logo: "/images/leasing/vancia.webp",
      url: "https://www.vanciacarlease.com/fr",
    },
  ];

  return (
    <main>
      <CookieConsent />
      <Navbar />
      <div className="container-leasing">
        {/* Dedicated section for the official partner */}
        <div className="official-partner">
          <h2 className="leasing-title">{t("partenaire-o")}</h2>
          <div className="partner-official">
            <img src="/images/leasing/lease-plan.png" alt="Lease-plan" />
            <div className="partner-info">
              <a
                href="https://www.leaseplan.com/fr-be/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("visitez")}
              </a>
            </div>
          </div>
        </div>
        {/* Section for other partners */}
        <div className="cont-title">
          <h2 className="leasing-title-partner">{t("egal")}</h2>
        </div>
        <div className="partners-flex">
          {partners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.logo} alt={partner.name} />
              {/* Add this div for the hover effect */}
              <div className="partner-info">
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  {t("visitez")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
export default Partenaires;
