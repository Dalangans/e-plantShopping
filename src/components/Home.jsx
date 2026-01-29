import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Reset the landing page state when visiting home
    localStorage.removeItem('viewedPlants');
  }, []);

  const handleGetStarted = () => {
    localStorage.setItem('viewedPlants', 'true');
    navigate('/plant');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Discover beautiful plants to transform your space into a green paradise</p>
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
