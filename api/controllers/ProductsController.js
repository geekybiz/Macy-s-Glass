var Product = require('../models/Products.js');

module.exports = {
  create: function(req, res) {
    Product.create(req.body, function(err, result) {
      console.log(req);
      if (err) {
        console.log(err)
        return res.status(500).json(err);
      } else {
        return res.status(200).json(result);
      }
    });
  },
  read: function(req, res) {
    Product.find({}, function(err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  readOne: function(req, res) {
    Product.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(result);
    })
  },
  update: function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  delete: function(req, res) {
    console.log(req.params.id);
    Product.remove({_id:req.params.id}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
};
