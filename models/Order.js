const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.ObjectId,
    ref: 'Customer',
    required: true
  },
  phone: String,
  date: {
    type: Date,
    required: false
  },
  products: [
    {
      productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: String
    }
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  amount: String,
  status: {
    type: String,
    enum: ['paid','pending'],
    default: 'paid'
   }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
