angular.module('macysApp')
  .service("navService", function($http){

    //Used getCart function from cartService for use in navbar service in order to increment cart

    this.getCart = function() {
      return $http({
        method: 'GET',
        url: '/api/cart'
      })
    }

  });
