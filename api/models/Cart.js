var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],

  quantity: {
    type: Number,
    min: 1,
    required: true
  }

});

module.exports = mongoose.model('Cart', schema);
