var Cart = require('../models/Cart.js');

module.exports = {

  create: function(req, res) {
    Cart.create(req.body, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  read: function(req, res) {
    Cart.find({}, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  readOne: function(req, res) {
    Cart.findById(req.params.id, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  update: function(req, res) {
    Cart.findByIdAndUpdate(req.params.id, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  delete: function(req, res) {
    Cart.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
};
