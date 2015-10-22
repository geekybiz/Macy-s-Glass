var Product = require('../models/Products.js');

module.exports = {

  addProduct: function(req, res) {
    req.session.cart.push(req.body)
    req.session.save(function(err, resp) {
      if(err) return res.status(500).json(err);
      return res.status(200).json(resp);
    })
    // res.send(req.session.cart)
  },

  getCart: function(req, res) {
    console.log('GETTING CART', req.session.cart)
    res.send(req.session.cart)
  },

  // readOne: function(req, res) {
  //   Cart.findById(req.params.id, function(err, result) {
  //     if (err) {
  //       res.status(500)(err);
  //     } else {
  //       res.status(200).json(result);
  //     }
  //   });
  // },

  updateItem: function(req, res) {
    for (var i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i].item.id === req.body.id) {
        req.session.cart[i].quantity = req.body.quantity;
        break;
      }
    }
    res.send(req.session.cart)
  },

  deleteItem: function(req, res) {
    for (var i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i].item.id === req.body.id) {
        req.session.cart.splice(i, 1);
        break;
      }
    }
    res.send(req.session.cart)
  }
};
