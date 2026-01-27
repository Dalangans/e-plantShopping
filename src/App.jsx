import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/CartSlice';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              showProductList ? (
                <>
                  <Navbar />
                  <ProductList />
                </>
              ) : (
                <div className="landing-page">
                  <div className="landing-content">
                    <h1>🌿 Paradise Nursery</h1>
                    <p>Discover beautiful plants to transform your space into a green paradise</p>
                    <button onClick={handleGetStartedClick} className="get-started-btn">
                      Get Started
                    </button>
                  </div>
                </div>
              )
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <ProductList />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <CartItem />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
