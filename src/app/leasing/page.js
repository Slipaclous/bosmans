"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import BackToTopButton from "../components/BackToTopButton";
import '../styles/partenaires.css';
function Partenaires() {
    const partners = [
        // Exclude "Lease-plan" from this list if rendering it separately
        { name: "ALD", logo: "/images/leasing/ald.png" },
        { name: "Alphabet", logo: "/images/leasing/alphabet.png" },
        { name: "Arval", logo: "/images/leasing/arval.png" },
        { name: "Athlon", logo: "/images/leasing/athlon.png" },
        { name: "Belfius", logo: "/images/leasing/belfius.png" },
        { name: "KBC", logo: "/images/leasing/kbc.png" },
        { name: "Vancia", logo: "/images/leasing/vancia.webp" },
    ];

    return (
        <main>
            <Navbar />
            <div className="container-leasing">
                {/* Dedicated section for the official partner */}
                <div className="official-partner">
                    <h2 className="leasing-title">Notre partenaire officiel</h2>
                    <div className="partner-official">
                        <img src="/images/leasing/lease-plan.png" alt="Lease-plan" />
                    </div>
                </div>
                {/* Section for other partners */}
                <h2 className="leasing-title">Nous travallions également avec :</h2>
                <div className="partners-flex">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner">
                            <img src={partner.logo} alt={partner.name} />
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