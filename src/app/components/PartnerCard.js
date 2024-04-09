import React, { useState } from 'react';

function PartnerCard({ logo, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`card ${isHovered ? 'hovered' : ''}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={logo} alt={name} />
    </div>
  );
}

export default PartnerCard;
