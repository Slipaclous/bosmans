"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../../i18n/i18n';
import '../styles/navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [servicesSubmenuVisible, setServicesSubmenuVisible] = useState(false);
  const [entretiensSubmenuVisible, setEntretiensSubmenuVisible] = useState(false);
  const servicesRef = useRef(null);
  const entretiensRef = useRef(null);

  const switchToFrench = () => {
    i18n.changeLanguage('fr');
  };

  const switchToDutch = () => {
    i18n.changeLanguage('nl');
  };

  const toggleServicesSubmenu = () => {
    setServicesSubmenuVisible(!servicesSubmenuVisible);
  };

  const toggleEntretiensSubmenu = () => {
    setEntretiensSubmenuVisible(!entretiensSubmenuVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesSubmenuVisible(false);
      }
      if (entretiensRef.current && !entretiensRef.current.contains(event.target)) {
        setEntretiensSubmenuVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef, entretiensRef]);

  return (<header>

      <FontAwesomeIcon icon={faBars} className="burger-icon" onClick={() => setSidebarVisible(!sidebarVisible)} />
    <nav className={`${sidebarVisible ? 'sidebar-visible' : ''}`}>
      
      <img class="titre-site" src="/images/bosmans.png" alt="" />
      <ul>
        <li>
          <Link href="/">
            {t('home')}
          </Link>
        </li>
        <li>
          <Link href="/about">
            {t('about')}
          </Link>
        </li>
            <li>
              <Link href="/services/pneus">
                {t('pneus')}
              </Link>
            </li>
            <li>
              <Link href="/services/jantes">
                {t('jantes')}
              </Link>
            </li>
        <li ref={entretiensRef} onClick={toggleEntretiensSubmenu}>
          <span>{t('entretiens')}</span>
          <ul className={`submenu ${entretiensSubmenuVisible ? 'visible' : ''}`}>
            <li>
              <Link href="/entretiens/controle_technique">
                {t('controle technique')}
              </Link>
            </li>
            <li>
              <Link href="/entretiens/climatisation">
                {t('climatisation')}
              </Link>
            </li>
          </ul>
        </li>
        
        <li>
          <Link href="/leasing">
            leasing
          </Link>
        </li>
        
        <li>
          <Link href="/contact">
            {t('contact')}
          </Link>
        </li>
      </ul>
      <div className="buttons">
        <button onClick={switchToFrench}>
          FR
        </button>
        |
        <button onClick={switchToDutch}>
          NL
        </button>
      </div>
    </nav>
  </header>
  );
}

export default Navbar;
