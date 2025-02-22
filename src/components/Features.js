import React from 'react';
import './features.css';
import image from '../media/730_screenshots_20241129235036_1.jpg';
import image2 from '../media/730_screenshots_20250216135805_1.jpg';
const Features = () => {
  return (
    <section className="features-container">
      <div className="features-content">
        <h2 className="features-title">HER ŞEY DEĞİŞECEK</h2>
        <p className="features-subtitle">
          Sis bombaları artık çevresiyle etkileşime geçen: ışığa, silah atışlarına ve
          patlamalara tepki gösteren dinamik hacimsel nesnelere dönüştürüldü.
        </p>
        
        <div className="features-grid">
          <div className="features-item">
            <div className="features-item-image">
              <img src={image} alt="Dinamiş Sis Sistemi" />
            </div>
            <h3 className="features-item-title">Dinamiş</h3>
            <p className="features-item-description">
              Sis artık oyun içindeki diğer olaylarla etkileşime geçebiliyor ve bu da yeni fırsatlara
              zemin hazırlıyor. Mermiler ve patlayıcı el bombalarıyla sisi kısa süreliğine yararak bir
              görüş alanı oluşturabilir ya da sisin kapladığı alanı farklı bir yöne doğru itebilirsiniz.
            </p>
          </div>

          <div className="features-item">
            <div className="features-item-image">
              <img src={image2} alt="Gelişmiş Sis Sistemi" />
            </div>
            <h3 className="features-item-title">Boşlukları Doğal Olarak Dolduracak Şekilde Genişler</h3>
            <p className="features-item-description">
              Sis artık açık kapı aralıklarından ve kırık pencerelerden sızacak, merdivenlerde yukarı
              aşağı hareket edecek, ayrıca uzun koridorlarda genişleyecek ve diğer sislerle birleşecek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 