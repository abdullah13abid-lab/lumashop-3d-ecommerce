const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

// Create payment intent
router.post('/create-payment-intent', verifyToken, async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalPrice * 100),
      currency: 'usd',
      metadata: { userId: req.userId }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Payment intent failed', error: error.message });
  }
});

// Confirm payment
router.post('/confirm-payment', verifyToken, async (req, res) => {
  try {
    const { paymentIntentId, items, totalPrice, shippingAddress } = req.body;

    const order = new Order({
      userId: req.userId,
      items,
      totalPrice,
      shippingAddress,
      stripePaymentId: paymentIntentId,
      status: 'completed'
    });

    await order.save();
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ message: 'Payment confirmation failed', error: error.message });
  }
});

module.exports = router;