angular.module("macysApp")
  .controller("cartCtrl", function($scope, cartService, getCart) {

    //Display items in cart on cart page
    $scope.products = getCart;

    $scope.removeItemFromCart = function(id, $index) {
     cartService.removeItem(id).then(function(result){
        $scope.products.splice($index, 1);
      })
      }
    });
