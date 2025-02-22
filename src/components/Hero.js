import React from 'react';
import './Hero.css';
import backgroundImage from '../media/1329760.jpeg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Rewind <span>Jailbreak</span></h1>
        <p>Aktif topluluğumuzla en iyi Jailbreak oyununu deneyimleyin, özel haritalar, eklentiler ve ekibimiz ile sunucuya davetlisin.</p>
        <div className="hero-cta">
          <a href="#" className="hero-btn">
            Discord'a Bağlan <i className="fas fa-arrow-right"></i>
          </a>
          <div className="hero-cta-text">
            <h2>Discord'a katılmak ister misin?</h2>
            <p>Ekip arkadaşlarımız kayıt için seni discord'a bekliyor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 