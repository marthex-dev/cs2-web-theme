import React from 'react';
import '../styles/discord.css';

const Discord = () => {
  return (
    <div className="discord-container">
      <div className="discord-content">
        <i className="fab fa-discord discord-icon"></i>
        <h2>Discord Topluluğumuza Katılın!</h2>
        <p>CS2 Türkiye topluluğumuzda binlerce oyuncuyla tanışın, turnuvalara katılın!</p>
        <a href="https://discord.gg/LİNK" className="discord-button" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-headset"></i>
          Discord'a Katıl
        </a>
      </div>
    </div>
  );
};

export default Discord; 