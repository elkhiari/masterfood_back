const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    picture:{
      type:String,
      required:true
    }
  });
  


  // Product model
  const Product = mongoose.model('Product', productSchema);
  
module.exports = {
       Product
  };