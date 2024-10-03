// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
