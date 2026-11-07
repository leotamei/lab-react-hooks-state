import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList, { sampleProducts } from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter((product) => product.category === selectedCategory);

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />

      <label htmlFor="category-select" style={{ margin: '10px 0', display: 'block' }}>
        Filter by Category:
      </label>
      <select 
        id="category-select" 
        value={selectedCategory} 
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cartItems={cart} />
    </div>
  );
}