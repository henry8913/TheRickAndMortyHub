import React, { useState } from 'react';
import '../styles/CharacterCard.css';

function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusColor = () => {
    switch(character.status) {
      case 'Alive': return '#4CAF50';
      case 'Dead': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <div className="character-card" onClick={() => setShowDetails(!showDetails)}>
      <div className="character-image-container">
        <div className="status-indicator" style={{backgroundColor: getStatusColor()}}></div>
        <img src={character.image} alt={character.name} className="character-image" />
      </div>

      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-species">{character.species}</p>

        {showDetails && (
          <div className="character-details">
            <p><span>Status:</span> {character.status}</p>
            <p><span>Origin:</span> {character.origin.name}</p>
            <p><span>Location:</span> {character.location.name}</p>
            <p><span>Gender:</span> {character.gender}</p>
          </div>
        )}

        <div className="show-more">
          {showDetails ? 'Click to hide details' : 'Click to show details'}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;