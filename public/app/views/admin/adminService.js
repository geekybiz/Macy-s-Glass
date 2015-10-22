angular.module('macysApp')
  .service('adminService', function($http){

    //Allows admin to add products to database

    this.addToDatabase = function(data){
      return $http({
        method: 'POST',
        url: '/api/products',
        data: data
      }).then(function(resp){
        console.log(resp)
        return resp.data;
      })
    }

  })
