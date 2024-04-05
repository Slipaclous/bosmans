"use client";
import React, { useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/footer';
import '../../styles/cTechnique.css'
import BackToTopButton from '@/app/components/BackToTopButton';

function cTechnique() {
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('.animated-section');
          sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = sectionTop - window.innerHeight < 0;
            if (sectionVisible) {
              section.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        
        // Déclenche une fois au chargement pour les sections déjà visibles
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <main>
            <Navbar/>
            <div className="container-ctechnique">
            <h1>Préparation au Contrôle Technique</h1>
            <section className="animated-section">
                    <h2>Introduction</h2>
                    <p>Avant de soumettre votre véhicule au contrôle technique, une visite préalable chez votre garagiste est fortement conseillée. Cela permet d'identifier et de corriger les éventuels problèmes pour assurer un passage réussi.</p>
                </section>
                <section className="animated-section">
                    <h2>Points de contrôle</h2>
                    <p>Nous effectuons une vérification complète des points de contrôle exigés lors du contrôle technique, incluant les freins, les lumières, l'émission des gaz d'échappement, et bien d'autres aspects cruciaux pour votre sécurité et celle des autres usagers de la route.</p>
                </section>
                <section className="animated-section">
                    <h2>L'importance de la préparation</h2>
                    <p>Une préparation adéquate réduit le risque de contre-visite, vous permettant ainsi de gagner du temps et d'économiser de l'argent. De plus, cela contribue à maintenir votre véhicule en bon état de fonctionnement, prolongeant sa durée de vie et assurant votre sécurité.</p>
                </section>
                <section className="animated-section">
                    <h2>Nos services</h2>
                    <p>Notre garage offre une inspection pré-contrôle technique qui inclut un diagnostic complet du véhicule. Nous proposons ensuite les réparations nécessaires pour garantir que votre véhicule passe le contrôle technique sans encombre.</p>
                </section>
                <BackToTopButton/>
            </div>
                <Footer/>
        </main>
    );
}

export default cTechnique;