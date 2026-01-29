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
        <p>Welcome to Paradise Nursery, your ultimate destination for premium plants and botanical excellence. Since our establishment, we have been dedicated to bringing nature's beauty into homes and offices across the country. Our carefully curated collection features a diverse range of plants, from low-maintenance succulents to lush tropical varieties, each selected for their exceptional quality and aesthetic appeal. Whether you're a seasoned plant enthusiast or just beginning your green journey, our expert team is committed to helping you find the perfect plants to create a thriving indoor garden. At Paradise Nursery, we believe that every space deserves to be transformed into a green paradise, and we're here to make that vision a reality with our premium selection and exceptional customer service.</p>
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
