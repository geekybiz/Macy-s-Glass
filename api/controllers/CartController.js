var Product = require('../models/Products.js');

module.exports = {

  addProduct: function(req, res) {
    var arr = [];
    var ind = 0;
    if(req.session.cart.length < 1) {
      req.body.qty = 1;  //if nothing in cart, then push object to cart
      req.session.cart.push(req.body);
    }
    if(req.session.cart.length > 0) { //if item in cart, loop through object array and push object id to the array arr
      for(var i = 0; i < req.session.cart.length; i++) {
        arr.push(req.session.cart[i]._id);
      }
      ind = arr.indexOf(req.body._id); //set ind to each new occurence of id pushed to arr
      if (ind === -1) {
        req.body.qty = 1;
        req.session.cart.push(req.body);
      } else {
        req.session.cart[ind].qty++;
      }
    }
    req.session.save(function(err, sess) {
      if(err) return res.status(500).json(err);
      return req.session.cart;
    });
  },

  getCart: function(req, res) {
    res.send(req.session.cart);
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
      if (req.session.cart[i].item._id === req.body._id) {
        req.session.cart[i].quantity = req.body.quantity;
        break;
      }
    }
    res.send(req.session.cart);
  },

  deleteItem: function(req, res) {
    for (var i = 0; i < req.session.cart.length; i++) {
      console.log(12121212, req.session.cart[i]);
      if (req.session.cart[i]._id === req.params.id) {
        req.session.cart.splice(i, 1);
        break;
      }
    }
    res.send(req.session.cart);
  }
};
