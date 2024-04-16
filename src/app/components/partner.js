import '../styles/pneus.css'

// PartnerCard.jsx
import React from 'react';
import '../styles/pneus.css';
import { useTranslation } from 'react-i18next';

function PartnerCard({ name, logo, url, isPremium }) {
    const premiumClass = isPremium ? 'premiumPartner' : '';
    const { t } = useTranslation();
    return (
      <div className={`partnerCard ${premiumClass}`}>
        <img src={logo} alt={name} className="partnerLogo" />
        <div className="cardOverlay">
          <a href={url} target="_blank" rel="noopener noreferrer" className="visitLink">{t('visitez')}</a>
        </div>
      </div>
    );
}

export default PartnerCard;
