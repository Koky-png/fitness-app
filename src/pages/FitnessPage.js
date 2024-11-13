import React, { useEffect, useState } from 'react';
import './FitnessPage.css';

const FitnessPage = () => {
  const [fitnessData, setFitnessData] = useState([]);

  // Fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:3000/fitness')  
      .then((response) => response.json())
      .then((data) => setFitnessData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fitness Bots</h1>
      <div className="fitness-list">
        {fitnessData.map((bot) => (
          <div key={bot.id} className="fitness-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p><strong>Class:</strong> {bot.bot_class}</p>
            <p><strong>Health:</strong> {bot.health}</p>
            <p><strong>Damage:</strong> {bot.damage}</p>
            <p><strong>Armor:</strong> {bot.armor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessPage;
