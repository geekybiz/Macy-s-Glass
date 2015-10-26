var Product = require('../models/Products.js');

module.exports = {

  addProduct: function(req, res) {
    var arr = [];
    var ind = 0;
    if(!req.session.cart) {
      req.body.qty = 1;
      req.session.cart = [req.body];
      save();
    } else { //if item in cart, loop through object array and push object id to the array arr
      for(var i = 0; i < req.session.cart.length; i++) {
        arr.push(req.session.cart[i]._id);
      }
      ind = arr.indexOf(req.body._id); //set ind to each new occurence of id pushed to arr
      if (ind === -1) {
        req.body.qty = 1;
        req.session.cart.push(req.body);
        save();
      } else {
        req.session.cart[ind].qty++;
        save();
      }
    }
    function save() {
      req.session.save(function(err, sess) {
        if(err) return res.status(500).json(err);
        return res.json(req.session.cart);
      });
    }
  },

  getCart: function(req, res) {
    if(!req.session.cart) {
      req.session.cart = [];
      req.session.save(function(err) {
        if(err) return res.status(500).json(err);
        return res.json(req.session.cart);
      });
    } else {
      return res.json(req.session.cart);
    }
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
      if (req.session.cart[i].item._id === req.body.id) {
        req.session.cart[i].qty = req.body.qty;
        break;
      }
    }
    res.send(req.session.cart);
  },

  deleteItem: function(req, res) {
    for (var i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i]._id === req.params.id) {
        req.session.cart.splice(i, 1);
      }
    }
    res.send(req.session.cart);
  }
};
