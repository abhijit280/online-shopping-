import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Shoes', price: 50 },
  { id: 3, name: 'Hat', price: 15 },
];

export default function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
} 