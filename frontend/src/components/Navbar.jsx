import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ user, onLogout, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h2>LumaShop</h2>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          {user ? (
            <>
              <Link to="/checkout" className="nav-link">
                🛒 Cart ({cartCount})
              </Link>
              <span className="user-email">{user.email}</span>
              <button className="btn-secondary" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link to="/auth" className="btn-primary">Login / Register</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar