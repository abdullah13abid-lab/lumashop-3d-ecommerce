import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductViewer from '../components/ProductViewer'
import ColorVariantSwitcher from '../components/ColorVariantSwitcher'
import './ProductPage.css'

const PRODUCT_DATA = {
  id: '1',
  name: 'NovaSphere Wireless Speaker',
  description: 'A compact, premium wireless speaker with 360° surround sound, 20-hour battery life, and IPX7 waterproof rating. Perfect for indoor and outdoor use.',
  price: 89.99,
  colors: [
    { name: 'Midnight Black', hex: '#1a1a1a' },
    { name: 'Arctic White', hex: '#f0f0f0' },
    { name: 'Ocean Blue', hex: '#0077be' },
    { name: 'Sunset Red', hex: '#ff6b6b' }
  ],
  specs: {
    batteryLife: '20 hours',
    waterproof: 'IPX7',
    soundRange: '360° Surround Sound',
    connectivity: 'Bluetooth 5.0',
    weight: '450g'
  }
}

function ProductPage({ onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0])
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleAddToCart = () => {
    if (!user) {
      navigate('/auth')
      return
    }

    onAddToCart({
      ...PRODUCT_DATA,
      color: selectedColor.name
    })

    alert('Added to cart!')
    navigate('/checkout')
  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-layout">
          <div className="product-viewer-section">
            <ProductViewer onColorChange={setSelectedColor} />
          </div>

          <div className="product-details-section">
            <h1>{PRODUCT_DATA.name}</h1>
            <p className="description">{PRODUCT_DATA.description}</p>

            <div className="price-section">
              <h2 className="price">${PRODUCT_DATA.price}</h2>
              <span className="badge">In Stock</span>
            </div>

            <ColorVariantSwitcher
              colors={PRODUCT_DATA.colors}
              onColorSelect={(hex) => {
                const color = PRODUCT_DATA.colors.find(c => c.hex === hex)
                setSelectedColor(color)
              }}
            />

            <div className="specs">
              <h3>Specifications</h3>
              <ul>
                <li><strong>Sound:</strong> {PRODUCT_DATA.specs.soundRange}</li>
                <li><strong>Battery:</strong> {PRODUCT_DATA.specs.batteryLife}</li>
                <li><strong>Waterproof:</strong> {PRODUCT_DATA.specs.waterproof}</li>
                <li><strong>Connectivity:</strong> {PRODUCT_DATA.specs.connectivity}</li>
                <li><strong>Weight:</strong> {PRODUCT_DATA.specs.weight}</li>
              </ul>
            </div>

            <div className="action-buttons">
              <button className="btn-primary btn-large" onClick={handleAddToCart}>
                🛒 Add to Cart
              </button>
              <button className="btn-secondary btn-large">
                ❤️ Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage