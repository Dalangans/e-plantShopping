import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-content">
          <h1>🌿 Welcome to Paradise Nursery</h1>
          <p>Discover the perfect plants to transform your space into a green paradise</p>
          <button onClick={handleShopNow} className="shop-btn">
            Shop Now
          </button>
        </div>
      </div>

      <div className="home-features">
        <div className="feature">
          <div className="feature-icon">🌱</div>
          <h3>Fresh Plants</h3>
          <p>Carefully selected plants from around the world</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📦</div>
          <h3>Fast Delivery</h3>
          <p>Quick and safe delivery to your doorstep</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💚</div>
          <h3>Plant Care Tips</h3>
          <p>Expert guidance for healthy plant growth</p>
        </div>
      </div>

      <div className="home-cta">
        <h2>Ready to start your plant journey?</h2>
        <button onClick={handleShopNow} className="cta-btn">
          Explore Our Plants
        </button>
      </div>
    </div>
  );
}

export default Home;
