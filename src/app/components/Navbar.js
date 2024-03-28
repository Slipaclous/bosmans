"use client";

// Navbar.js
import React,{useState}  from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n';
import '../styles/navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const switchToFrench = () => {
    i18n.changeLanguage('fr');
  };

  const switchToDutch = () => {
    i18n.changeLanguage('nl');
  };
  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  return (
    <nav>
      <h2>{t('title')}</h2>
      <ul>
        <li>
          <Link href="/">
            {t('home')}
          </Link>
        </li>
        <li onClick={toggleSubmenu}>
          <span>{t('services')}</span>
          <ul className={`submenu ${submenuVisible ? 'visible' : ''}`}>
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
            <li>
              <Link href="/services/divers">
                {t('divers')}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/partenaires">
            {t('partenaires')}
          </Link>
        </li>
        <li>
          <Link href="/entretiens">
            {t('entretiens')}
          </Link>
        </li>
        <li>
          <Link href="/about">
            {t('about')}
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
  );
}

export default Navbar;

