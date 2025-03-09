
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="portal-animation"></div>
      <div className="header-content">
        <h1 className="title">The Rick and Morty Hub</h1>
        <h2 className="subtitle">Your portal to the multiverse!</h2>
      </div>
    </div>
  );
}

export default Header;
