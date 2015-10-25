angular.module("macysApp")
  .controller("navController", function($scope, navService){

    $scope.products = 0;

    $scope.getProducts = function() {
        navService.getCart().then(function(resp) {
            $scope.products = resp.data.length;

      });
    }();

  });
