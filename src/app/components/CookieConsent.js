// components/CookieConsent.js

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/cookies.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Expires in 365 days
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
        <FontAwesomeIcon className='cookie-logo' icon={faCookieBite} />
      <p> {t('cookie')} </p>
      <button onClick={handleAccept}>{t('accept')}</button>
    </div>
  );
};

export default CookieConsent;
