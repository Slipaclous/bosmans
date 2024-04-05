"use client";
import React, { useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/footer';
import '../../styles/climatisation.css'
import BackToTopButton from '@/app/components/BackToTopButton';

function EntretienClimatisation() {
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
            <div className="container-entretien-climatisation">
                <h1>Entretien de la Climatisation</h1>
                <section className="animated-section">
                    <h2>Pourquoi l'entretien de la climatisation est important ?</h2>
                    <p>L'entretien régulier de la climatisation est crucial pour garantir un air intérieur sain dans votre véhicule, une performance optimale du système et éviter des réparations coûteuses dues à des négligences.</p>
                </section>
                <section className="animated-section">
                    <h2>Quand faire vérifier la climatisation ?</h2>
                    <p>Il est conseillé de faire vérifier votre système de climatisation au moins une fois par an, idéalement avant l'arrivée des fortes chaleurs de l'été.</p>
                </section>
                <section className="animated-section">
                    <h2>Que comprend l'entretien de la climatisation ?</h2>
                    <p>Nos techniciens spécialisés procèdent à une vérification complète du système de climatisation, incluant le niveau de réfrigérant, l'état du filtre d'habitacle, les possibles fuites, et l'efficacité du compresseur.</p>
                </section>
                <section className="animated-section">
                    <h2>Nos services</h2>
                    <p>Notre garage offre un service complet pour l'entretien de la climatisation, assurant que votre système fonctionne efficacement, que l'air dans votre véhicule reste frais et pur, tout en prévenant d'éventuelles pannes.</p>
                </section>
                <BackToTopButton/>
            </div>
                <Footer/>
        </main>
    );
}

export default EntretienClimatisation;
