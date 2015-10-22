angular.module("macysApp", ["ui.router", "ui.materialize", "angularPayments"])

.config(function() {
  Stripe.setPublishableKey('pk_test_EfL4Q9ol8yuS5yMornTqnBNK');
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'app/views/home/homeTmpl.html',
    controller: 'homeCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'app/views/about/aboutTmpl.html',
    controller: 'aboutCtrl'
  })

  .state('services', {
    url: '/services',
    templateUrl: 'app/views/services/servicesTmpl.html',
    controller: 'servicesCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'app/views/contact/contactTmpl.html',
    controller: 'contactCtrl'
  })

  .state('store', {
    url: '/store',
    templateUrl: 'app/views/store/storeTmpl.html',
    controller: 'storeCtrl',
    resolve: {
      getProducts: function(storeService){
        return storeService.getAllProductData().then(function(resp){
          return resp.data;
        }, function(err){
          console.log(err)
        })
      }
    }
  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'app/views/cart/cartTmpl.html',
    controller: 'cartCtrl',
    resolve: {
      getCart: function(cartService) {
        return cartService.getCart().then(function(resp) {
          return resp.data;
        });        
      }
    }
  })

  .state('checkout', {
    url: '/checkout',
    templateUrl: 'app/views/checkout/checkoutTmpl.html',
    controller: 'checkoutCtrl'
  })

  .state('admin', {
    url: '/admin',
    templateUrl: 'app/views/admin/adminTmpl.html',
    controller: 'adminCtrl'
  })

  $urlRouterProvider.otherwise('/home')
});
