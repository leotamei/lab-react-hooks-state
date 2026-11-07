import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div
      className="product-card"
      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
    >
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button
        data-testid={`product-${product.id}`}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}