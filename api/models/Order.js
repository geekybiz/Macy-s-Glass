var mongoose = require('mongoose');
var productSchema = require('./Products.js').schema;

var schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
      product: productSchema,
      quantity: { type: Number, required: true, min: 1 }
  }],
  placed: { type: Date, required: true, default: Date.now }

});

module.exports = mongoose.model('Order', schema);
