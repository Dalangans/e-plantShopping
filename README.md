# Paradise Nursery - Online Plant Shop

## Project Overview
Paradise Nursery is a responsive e-commerce web application designed for an online plant shop. This project demonstrates full-stack development skills with a focus on creating a dynamic shopping experience for plant enthusiasts.

## Project Details

### Company Name
**Paradise Nursery**

### Project Description
Paradise Nursery is an interactive online platform that allows users to browse a curated collection of houseplants, view detailed product information, add items to a shopping cart, and manage their purchases. The application showcases modern web development practices with React, Redux, and React Router.

### Key Features
- **Product Listing**: Browse plants organized by categories (Indoor, Outdoor, Succulents)
- **Shopping Cart**: Dynamic cart management with quantity adjustment
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Redux State Management**: Centralized state management for cart operations
- **Navigation**: Smooth navigation between Home, Products, and Cart pages
- **User-Friendly Interface**: Simple and intuitive design for easy browsing and shopping

### Technology Stack
- **Frontend**: React 18, React Router DOM
- **State Management**: Redux Toolkit, React-Redux
- **Styling**: CSS3
- **JavaScript**: ES6+

### Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── App.jsx
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── Navbar.css
├── store/
│   └── CartSlice.jsx
├── App.css
├── index.js
└── index.css
```

### How to Run
1. Install dependencies: `npm install`
2. Start the application: `npm start`
3. Open browser and navigate to `http://localhost:3000`

### Features Details

#### Product Listing
- Displays at least 6 unique plants per category
- 3+ plant categories (Indoor Plants, Outdoor Plants, Succulents)
- Each plant shows thumbnail, name, and price
- Add to Cart buttons with disable functionality after adding
- Dynamic cart icon counter

#### Shopping Cart
- Display all cart items with thumbnails and prices
- Show total cost for each item and overall total
- Quantity adjustment buttons (increase/decrease)
- Delete items from cart
- Checkout button (Coming Soon)
- Continue Shopping button to return to products

#### Navigation
- Consistent navbar across all pages
- Links to Home, Plants, and Cart pages
- Dynamic cart counter showing total items

### Author
Paradise Nursery Development Team

### Version
1.0.0

### License
MIT License
