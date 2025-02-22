import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    // EMEĞE SAYGISIZLIK YAPMA! 
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          <a 
            href="https://marthex.dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-flame"
          >
            Marthex </a> tarafından tasarlanmıştır. </p>
      </div>
    </footer>
  );
};

export default Footer;
