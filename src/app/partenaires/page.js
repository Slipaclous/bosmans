"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BackToTopButton from "../components/BackToTopButton";
import '../styles/partenaires.css';
function Partenaires() {
    return (
        <main>
            <Navbar/>
            <div className="container-partenaires">
                {/* Conteneur pour les gros partenaires */}
                <div className="gros-partenaires">
                    <img src="./images/logos/michelin.png" alt="Michelin" className="logo-partenaire gros-partenaire" />
                    <img src="./images/logos/goodyear.png" alt="Goodyear" className="logo-partenaire gros-partenaire" />
                    <img src="./images/logos/dunlop.png" alt="Dunlop" className="logo-partenaire gros-partenaire" />
                </div>
      
                {/* Conteneur pour les petits partenaires */}
                <div className="petits-partenaires">
                    <img src="./images/logos/bridgestone.png" alt="Bridgestone" className="logo-partenaire petit-partenaire" />
                    <img src="./images/logos/continentals.png" alt="Continental" className="logo-partenaire petit-partenaire" />
                    <img src="./images/logos/pirelli.png" alt="Pirelli" className="logo-partenaire petit-partenaire" />
                    <img src="./images/logos/hankook.png" alt="Hankook" className="logo-partenaire petit-partenaire" />
                    {/* Ajoutez d'autres logos ici */}
                </div>
            </div>
            <Footer/>
        </main>
    );
}


export default Partenaires;