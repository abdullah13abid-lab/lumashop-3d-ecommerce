import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import AuthPage from './pages/AuthPage'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')
    if (token && savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setCart([])
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductPage onAddToCart={addToCart} />} />
        <Route 
          path="/checkout" 
          element={user ? <CheckoutPage cart={cart} onRemoveItem={removeFromCart} /> : <Navigate to="/auth" />} 
        />
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/" /> : <AuthPage onAuthSuccess={setUser} />} 
        />
      </Routes>
    </Router>
  )
}

export default App