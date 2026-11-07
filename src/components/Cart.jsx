import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <div className="cart" style={{ marginTop: '30px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  );
}