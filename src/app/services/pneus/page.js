"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/footer";
import BackToTopButton from "@/app/components/BackToTopButton";
import PartnerCard from "@/app/components/partner";
import "../../styles/pneus.css";

function pneus() {
  const premiumPatners =[
    {name : "Goodyear", logo : "/images/logos/goodyear.png", url: "https://www.goodyear.eu/fr_fr/consumer.html"},
    {name:'Continental', logo : '/images/logos/continentals.png', url: 'https://www.continental-pneus.fr/'},
    {name:"Dunlop", logo : "/images/logos/dunlop.png", url: "https://www.dunlop.eu/fr_fr/consumer.html"},
    {name:"Pirelli", logo : "/images/logos/pirelli.png", url: "https://www.pirelli.com/fr_fr"},
  ]
  const otherPartners = [
    {name:"Vredestein", logo : "/images/logos/vredestein.png", url: "https://www.vredestein.fr/"},
    {name:"Uniroyal", logo : "/images/logos/uniroyal.png", url: "https://www.uniroyal.fr/"},
    {name:"Fulda", logo : "/images/logos/fulda.png", url: "https://www.fulda.com/fr_fr.html"},
    {name:"maxxis", logo : "/images/logos/maxxis.png", url: "https://www.maxxis.fr/"},
  ]
  return (
    <main>
      <Navbar />
      <div className="partners">
        <h2 className="partner-title">Nos partenaires Premium</h2>
        <div className="partners-list premium">
          {premiumPatners.map((partner, index) => (
            <PartnerCard key={index} {...partner} isPremium={true} />
          ))}
        </div>
        <h2 className="partner-title">Nos autres partenaires</h2>
        <div className="partners-list">
          {otherPartners.map((partner, index) => (
            <PartnerCard key={index} {...partner} isPremium={false} />
          ))}
        </div>
      </div>
      <div className="others-partners">
        <h3>Et bien d'autres encore ..</h3>
        <p>Nous travaillons égalements avec d'autres marques , pour toutes informations supplémentaires n'hésitez pas à nous contacter via <a href="/contact">ce formulaire ou par téléphone</a></p>
      </div>
      <BackToTopButton />
      <Footer/>
    </main>
  );
}

export default pneus;