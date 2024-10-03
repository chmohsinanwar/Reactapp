// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
