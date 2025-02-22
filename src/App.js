import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import Features from './components/Features';
import Crew from './components/Crew';
import Discord from './components/Discord';
import Loader from './components/Loader';

function App() {
  const [isSuspicious, setIsSuspicious] = useState(false);

  useEffect(() => {
    const suspiciousAgents = [
      'curl',
      'wget',
      'python-requests',
      'scrapy',
      'httpclient',
      'httplib',
      'java',
      'php',
      'go-http-client',
      // vb...
    ];

    const userAgent = window.navigator.userAgent.toLowerCase();
    for (let agent of suspiciousAgents) {
      if (userAgent.includes(agent)) {
        setIsSuspicious(true);
        break;
      }
    }
  }, []);

  if (isSuspicious) {
    // ŞÜPHELİ İSE ENGELLE
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Access Denied</h1>
        <p>Şüpheli bir kullanıcı aracınız (User-Agent) var. Erişim engellendi.</p>
      </div>
    );
  }
  // Şüpheli değilse normal içeriği gösterir
  return (
    <div className="App">
      <Loader />
      <Hero />
      <Statistics />
      <Features />
      <Discord />
      <Crew />
      <Footer />
    </div>
  );
}

export default App;
