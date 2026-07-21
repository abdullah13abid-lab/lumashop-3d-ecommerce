import React from 'react'
import './ColorVariantSwitcher.css'

function ColorVariantSwitcher({ colors, onColorSelect }) {
  return (
    <div className="color-switcher">
      <h3>Choose Color:</h3>
      <div className="color-options">
        {colors.map((color) => (
          <div
            key={color.name}
            className="color-option"
            onClick={() => onColorSelect(color.hex)}
            title={color.name}
          >
            <div
              className="color-circle"
              style={{
                backgroundColor: color.hex,
                border: '2px solid transparent',
              }}
            />
            <p>{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorVariantSwitcher