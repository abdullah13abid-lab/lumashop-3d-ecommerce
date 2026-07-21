import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Cart from '../components/Cart'
import './CheckoutPage.css'

const stripePromise = loadStripe('pk_test_YOUR_STRIPE_PUBLISHABLE_KEY')

function CheckoutPaymentForm({ cart, totalPrice, onPaymentSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/checkout/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          items: cart,
          totalPrice
        })
      })

      const { clientSecret } = await response.json()

      const cardElement = elements.getElement(CardElement)
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
            email: shippingInfo.email
          }
        }
      })

      if (error) {
        alert('Payment failed: ' + error.message)
      } else if (paymentIntent.status === 'succeeded') {
        alert('Payment successful!')
        onPaymentSuccess()
      }
    } catch (error) {
      alert('Payment processing failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Shipping Information</h3>
      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={shippingInfo.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={shippingInfo.lastName}
          onChange={handleInputChange}
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={shippingInfo.email}
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={shippingInfo.street}
        onChange={handleInputChange}
        required
      />

      <div className="form-row">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          value={shippingInfo.zipCode}
          onChange={handleInputChange}
          required
        />
      </div>

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={shippingInfo.country}
        onChange={handleInputChange}
        required
      />

      <h3 style={{ marginTop: '2rem' }}>Payment Information</h3>
      <CardElement
        options={{
          style: {
            base: {
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a'
            }
          }
        }}
      />

      <button type="submit" className="btn-primary btn-large" disabled={loading}>
        {loading ? 'Processing...' : 'Complete Purchase'}
      </button>
    </form>
  )
}

function CheckoutPage({ cart, onRemoveItem }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        <div className="checkout-layout">
          <div className="checkout-cart">
            <Cart items={cart} onRemove={onRemoveItem} totalPrice={totalPrice} />
          </div>
          <div className="checkout-payment">
            <Elements stripe={stripePromise}>
              <CheckoutPaymentForm
                cart={cart}
                totalPrice={totalPrice}
                onPaymentSuccess={() => {
                  alert('Order completed!')
                }}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage