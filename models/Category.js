const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  name: String,
  status:{
    type: String,
    enum: ['active','inactive'],
    default: 'active'
  }
});
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
