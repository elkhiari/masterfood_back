const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['processing', 'shipped', 'delivered'],
    default: 'processing'
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deliveryPerson :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  adress:{
    type:String,
    required:true,
  }
});

const order = mongoose.model('Order', orderSchema);

module.exports = {order};