angular.module('macysApp')
  .controller('adminCtrl', function($scope, adminService) {

    $scope.addToDatabase = function(product) {
      adminService.addToDatabase(product).then(function(resp) {
        $scope.productList = resp;
      });
    };

  });
