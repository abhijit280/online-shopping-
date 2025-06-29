import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <header style={{ background: '#1976d2', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>E-Commerce PWA</h1>
        <div>Cart: {cart.length}</div>
      </header>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App; 