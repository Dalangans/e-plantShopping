import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = {
    'Indoor Plants': [
      {
        id: 1,
        name: 'Monstera Deliciosa',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1596848212624-11249c1ff57b?w=400&h=400&fit=crop',
      },
      {
        id: 2,
        name: 'Snake Plant',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop',
      },
      {
        id: 3,
        name: 'Pothos',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop',
      },
      {
        id: 4,
        name: 'Peace Lily',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1598928506191-a5ffd268aa6d?w=400&h=400&fit=crop',
      },
      {
        id: 5,
        name: 'Philodendron',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1564241527-3108b1a93e9d?w=400&h=400&fit=crop',
      },
      {
        id: 6,
        name: 'ZZ Plant',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd4b85f?w=400&h=400&fit=crop',
      },
    ],
    'Outdoor Plants': [
      {
        id: 7,
        name: 'Hibiscus',
        price: 42.99,
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop',
      },
      {
        id: 8,
        name: 'Rose Bush',
        price: 38.99,
        image: 'https://images.unsplash.com/photo-1490999881778-02f151234f1d?w=400&h=400&fit=crop',
      },
      {
        id: 9,
        name: 'Lavender',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1490255494193-bfe91e1ee144?w=400&h=400&fit=crop',
      },
      {
        id: 10,
        name: 'Sunflower',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1597848212624-11249c1ff57b?w=400&h=400&fit=crop',
      },
      {
        id: 11,
        name: 'Bougainvillea',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1525763185298-1b434c919eba?w=400&h=400&fit=crop',
      },
      {
        id: 12,
        name: 'Jasmine Vine',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1440262474875-f41898be0857?w=400&h=400&fit=crop',
      },
    ],
    'Succulents': [
      {
        id: 13,
        name: 'Aloe Vera',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1599092160562-40860ee221a3?w=400&h=400&fit=crop',
      },
      {
        id: 14,
        name: 'Echeveria',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1577454712202-08bcfebc0434?w=400&h=400&fit=crop',
      },
      {
        id: 15,
        name: 'Jade Plant',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1598928506191-a5ffd268aa6d?w=400&h=400&fit=crop',
      },
      {
        id: 16,
        name: 'Sedum',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1537632066927-ab7414fa3e3d?w=400&h=400&fit=crop',
      },
      {
        id: 17,
        name: 'Sempervivum',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1608084546069-f6f40c637eef?w=400&h=400&fit=crop',
      },
      {
        id: 18,
        name: 'Cactus Mix',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1563241527-3004a5e4af3b?w=400&h=400&fit=crop',
      },
    ],
  };

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );

    // Disable button
    const newAddedItems = new Set(addedItems);
    newAddedItems.add(product.id);
    setAddedItems(newAddedItems);
  };

  return (
    <div className="product-list-container">
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="product-category">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {items.map((product) => {
              const isAdded = addedItems.has(product.id);
              return (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button
                      className={`add-to-cart-btn ${isAdded ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                    >
                      {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
