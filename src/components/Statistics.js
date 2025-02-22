import React, { useEffect, useState } from 'react';
import './Statistics.css';

const Statistics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://marthex.dev/info.php')
        .then(response => {
          if (!response.ok) {
            throw new Error('Ağ hatası');
          }
          return response.json();
        })
        .then(data => {
          setStats(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(err.message);
          setLoading(false);
        });
    };

    // İlk veri çekme
    fetchData();

    // 5 saniyede bir güncelleme
    const interval = setInterval(fetchData, 5000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className="statistics-container">
      <h1 className="statistics-title">SUNUCU İSTATİSTİKLERİ</h1>
      <div className="statistics-top">
        <div className="statistics-card">
          <i className="fas fa-server"></i>
          <h3>Sunucu Adı</h3>
          <p>{stats.serverName}</p>
        </div>
        
        <div className="statistics-card">
          <i className="fas fa-network-wired"></i>
          <h3>IP Adresi</h3>
          <p>185.193.165.123:27015</p>
        </div>

        <div className="statistics-card">
          <i className="fas fa-users"></i>
          <h3>Aktif Oyuncular</h3>
          <p>{stats.playerCount}</p>
        </div>

        <div className="statistics-card">
          <i className="fas fa-map"></i>
          <h3>Aktif Harita</h3>
          <p>{stats.currentMap}</p>
        </div>
      </div>

      <div className="statistics-players">
        <h2>Aktif Oyuncular</h2>
        {stats.players.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Oyuncu</th>
                <th>Oynama Süresi</th>
              </tr>
            </thead>
            <tbody>
              {stats.players.map((player, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.playTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Oyuncu bilgisi bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
