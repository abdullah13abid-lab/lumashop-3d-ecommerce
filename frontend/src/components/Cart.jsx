import React from 'react'
import './Cart.css'

function Cart({ items, onRemove, totalPrice }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>Color: {item.color}</p>
                  <p className="item-price">${item.price}</p>
                </div>
                <button
                  className="btn-secondary"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart