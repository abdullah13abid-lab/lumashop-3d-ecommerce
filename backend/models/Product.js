const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  modelUrl: {
    type: String,
    default: '/models/speaker.glb'
  },
  colors: [{
    name: String,
    hex: String,
    image: String
  }],
  specs: {
    batteryLife: String,
    waterproof: String,
    soundRange: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);