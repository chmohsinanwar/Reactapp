// src/components/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ cart, clearCart }) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty. Please add products to place an order.');
      return;
    }

    const orderDetails = {
      customerName,
      products: cart.map((product) => product.name).join(', '),
      address,
    };

    try {
      await axios.post('http://localhost:5000/api/orders', orderDetails);
      alert('Order placed successfully!');
      clearCart();
      setCustomerName('');
      setAddress('');
    } catch (err) {
      console.error('Error placing order:', err);
    }
  };

  return (
    <div className="order-form">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
