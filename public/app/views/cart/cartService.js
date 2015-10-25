angular.module('macysApp')
  .service('cartService', function($http) {

    this.addToCart = function(product) {
      return $http({
        method: 'POST',
        url: '/api/cart/',
        data: product
      });
    };

    this.getCart = function() {
      return $http({
        method: 'GET',
        url: '/api/cart'
      });
    };

    this.updateItem = function(data) {
      return $http({
        method: 'PUT',
        url: '/api/cart/updateItem',
        data: data
      });
    };

    this.removeItem = function(data) {
      return $http({
        method: 'DELETE',
        url: '/api/cart/remove/' + data
      });
    };
  });
