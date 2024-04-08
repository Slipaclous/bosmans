import '../styles/pneus.css'

// PartnerCard.jsx
import React from 'react';
import '../styles/pneus.css';

function PartnerCard({ name, logo, url, isPremium }) {
    const premiumClass = isPremium ? 'premiumPartner' : '';
    return (
      <div className={`partnerCard ${premiumClass}`}>
        <img src={logo} alt={name} className="partnerLogo" />
        <div className="cardOverlay">
          <a href={url} target="_blank" rel="noopener noreferrer" className="visitLink">Visit</a>
        </div>
      </div>
    );
}

export default PartnerCard;
