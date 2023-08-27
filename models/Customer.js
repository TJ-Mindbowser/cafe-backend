// models/User.js
const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: String,
  birthdate: {
    type: Date,
    required: false
  },
  address: { type: String, required: false }
});
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
