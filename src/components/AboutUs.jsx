import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to make gardening and plant care accessible to everyone. 
            We believe that having plants in your home and workspace can improve your well-being and 
            create a more vibrant living environment.
          </p>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Founded in 2020, Paradise Nursery has grown to become a leading online plant retailer. 
            Our team consists of passionate plant enthusiasts and horticulturists dedicated to providing 
            high-quality plants and exceptional customer service.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul className="features-list">
            <li>Wide selection of indoor and outdoor plants</li>
            <li>Rare and exotic plant species</li>
            <li>Expert care guides and tips</li>
            <li>Fast and reliable shipping</li>
            <li>Customer support and plant consultations</li>
            <li>Sustainable and eco-friendly practices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <div className="why-choose-us">
            <div className="feature-card">
              <h3>🌱 Quality Plants</h3>
              <p>All our plants are carefully selected and inspected for health and quality</p>
            </div>
            <div className="feature-card">
              <h3>📦 Fast Shipping</h3>
              <p>We ship within 24 hours to ensure your plants arrive fresh and healthy</p>
            </div>
            <div className="feature-card">
              <h3>💚 Expert Support</h3>
              <p>Our team is here to help you choose the perfect plant and provide care tips</p>
            </div>
            <div className="feature-card">
              <h3>🌍 Sustainable</h3>
              <p>We are committed to environmentally friendly practices in all our operations</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to providing the highest quality plants, exceptional customer service, 
            and promoting sustainable gardening practices. Every plant we sell comes with care instructions 
            and our team is always ready to answer your questions.
          </p>
        </section>

        <section className="about-section contact-section">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          <div className="contact-info">
            <p><strong>Email:</strong> info@paradisenursery.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Garden Lane, Green City, GC 45678</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
