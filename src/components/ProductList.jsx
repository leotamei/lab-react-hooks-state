import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Bread', category: 'Bakery' },
  { id: 3, name: 'Cheese', category: 'Dairy' },
  { id: 4, name: 'Apple', category: 'Fruits' }
];

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list" style={{ marginTop: '20px' }}>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
}