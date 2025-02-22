import React from 'react';
import './Crew.css';

const Crew = () => {
  const teamMembers = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/293787178784391168/9daf4f13365a20eea9d2d02e22db4154.png?size=2048",
      nickname: "Marthex",
      role: "Kurucu"
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/avatars/293787178784391168/9daf4f13365a20eea9d2d02e22db4154.png?size=2048",
      nickname: "Jinn",
      role: "Hard Köle"
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/avatars/293787178784391168/9daf4f13365a20eea9d2d02e22db4154.png?size=2048",
      nickname: "YAĞLI KLAVYE",
      role: "Yönetici"
    },
    {
      id: 4,
      image: "https://cdn.discordapp.com/avatars/293787178784391168/9daf4f13365a20eea9d2d02e22db4154.png?size=2048",
      nickname: "Phoenix",
      role: "Moderatör"
    }
  ];

  return (
    <section className="crew-section">
      <div className="crew-container">
        <h2>Ekibimiz</h2>
        <div className="crew-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="crew-member">
              <div className="crew-member-image">
                <img src={member.image} alt={member.nickname} />
              </div>
              <h3>{member.nickname}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew; 