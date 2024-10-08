"use client";
import React, { useEffect } from 'react';
import '../../styles/cTechnique.css'
import { useTranslation } from 'react-i18next';
import CookieConsent from '../../components/CookieConsent';

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
            <CookieConsent/>
            <div className="container-ctechnique">
            <h1>{t("preparation")}</h1>
            <section className="animated-section">
                    <p>{t('introduction-text')}</p>
                </section>
            </div>
        </main>
    );
}

export default cTechnique;