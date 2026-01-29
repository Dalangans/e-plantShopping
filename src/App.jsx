import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/CartSlice';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
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
