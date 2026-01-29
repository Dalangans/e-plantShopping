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
        <p>Welcome to Paradise Nursery, your ultimate destination for premium plants and botanical excellence. We offer a carefully curated collection of diverse plants, from low-maintenance succulents to lush tropical varieties, each selected for exceptional quality. Transform your space into a green paradise with our expert selection and outstanding customer service.</p>
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
