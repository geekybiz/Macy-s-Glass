angular.module('macysApp')
  .service('storeService', function($http) {

    //ADD DELETE PRODUCTS

    this.getAllProductData = function() {
      return $http({
        method: 'GET',
        url: '/api/products'
      });
    };

    this.getOneProduct = function() {
      return $http({
        method: 'GET',
        url: '/api/products/' + id
      });
    };

    this.deleteItem = function(id) {
      return $http({
        method: 'DELETE',
        url: '/api/products/' + id
      });
    };


    //CREATE NEW USER
    this.postNewUserData = function(userInfo) {
      return $http({
        method: 'POST',
        url: '/api/users',
        data: userInfo
      }).then(function(resp){
        alert("User Saved!");
      });
    };


    //ORDER REQUESTS

    //Generate New Order
    this.newOrder = function(newOrder) {
      return $http({
        method: 'GET',
        url: '/api/orders'
      });
    };

    //Place New Order
    this.placeOrder = function(placedOrder) {
      return $http({
        method: 'POST',
        url: '/api/orders',
        data: placedOrder
      }).then(function(resp){
        alert("Order Placed!");
      });
    };

    //Post New Order to Cart
    this.postOrderToCart = function(orderInfo) {
      return $http({
        method: 'POST',
        url: '/api/cart',
        data: orderInfo
      }).then(function(resp){
        alert("Added to Cart");
      });
    };

  });
