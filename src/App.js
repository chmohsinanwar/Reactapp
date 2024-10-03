// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Product A', price: 30 },
    { id: 2, name: 'Product B', price: 45 },
    { id: 3, name: 'Product C', price: 60 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <h1>On-Demand Delivery App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <OrderForm cart={cart} clearCart={clearCart} />
    </div>
  );
}

export default App;
