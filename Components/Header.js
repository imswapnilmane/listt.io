// components/Header.js
import React from 'react';

const Header = ({ title, description, details, emoji, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
      {details && (
        <div className="subhead">
          <p>{details}</p>
          <p className="emoji">{emoji}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
