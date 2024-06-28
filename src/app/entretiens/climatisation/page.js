"use client";
import React, { useEffect } from 'react';
import '../../styles/climatisation.css'
import { useTranslation } from 'react-i18next';
import CookieConsent from '../../components/CookieConsent';

function EntretienClimatisation() {
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
            <div className="container-entretien-climatisation">
                <h1>{t('climatisation-titre')}</h1>
                <section className="animated-section">
                    <h2>{t('pourquoi')}</h2>
                    <p>{t('pourquoi-text')}</p>
                </section>
                <section className="animated-section">
                    <h2>{t('verif')}</h2>
                    <p>{t('verif-text')}</p>
                </section>
                <section className="animated-section">
                    <h2>{t('comprends')}</h2>
                    <p>{t('comprends-text')}</p>
                </section>
                <section className="animated-section">
                    <h2>{t('nos services')}</h2>
                    <p>{t('nos-text')}</p>
                </section>
            </div>
        </main>
    );
}

export default EntretienClimatisation;
