var Orders = require('../models/User.js');

module.exports = {

  create: function(req, res) {
    Orders.create(req.body, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  read: function(req, res) {
    Orders.find(req.body, function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  readOne: function(req, res){
    Orders.findById(req.params.id, function(err, result){
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  update: function(req, res) {
    Orders.findByIdAndUpdate(req.params.id, function(err, results) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  },

  delete: function(req, res) {
    Orders.findByIdAndRemove(function(err, result) {
      if (err) {
        res.status(500)(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
};
