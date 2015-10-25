angular.module("macysApp")
.controller("storeCtrl", function($scope, cartService, storeService, getProducts){

    //Display products on store page after upload ("getProducts is a function as a resolve on app.js routes")
  $scope.products = getProducts;


    //Add items to cart
    $scope.addToCart = function(product) {
      cartService.addToCart(product);
    };


    //Function to allow admin to delete items

    $scope.deleteFromStore = function(id, $index){
      storeService.deleteItem(id).then(function(result){
        $scope.products.splice($index, 1);
      });
    }






});
