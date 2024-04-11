"use client";
import React, { useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/footer';
import '../../styles/cTechnique.css'
import BackToTopButton from '@/app/components/BackToTopButton';
import { useTranslation } from 'react-i18next';

function cTechnique() {
    const { t } = useTranslation();
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
            <h1>{t("preparation")}</h1>
            <section className="animated-section">
                    <h2>{t('introduction')}</h2>
                    <p>{t('introduction-text')}</p>
                </section>
                <section className="animated-section">
                    <h2>{t("points de controle")}</h2>
                    <p>{t("controle-text")}.</p>
                </section>
                <section className="animated-section">
                    <h2>{t('importance')}</h2>
                    <p>{t('importance-text')}</p>
                </section>
                <section className="animated-section">
                    <h2>{t("nos services")}</h2>
                    <p>{t('services-text')}</p>
                </section>
                <BackToTopButton/>
            </div>
                <Footer/>
        </main>
    );
}

export default cTechnique;