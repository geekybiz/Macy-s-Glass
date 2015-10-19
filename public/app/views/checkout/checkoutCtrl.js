angular.module("macysApp")
.controller("checkoutCtrl", function($scope){

  $scope.stripeCallback = function(code, result){
    if (result.error) {
      window.alert('It failed! error: ' + result.error.message);
    } else {
      window.alert('Success! token: ' + result.id);
    }
  };
});
