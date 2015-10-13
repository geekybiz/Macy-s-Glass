angular.module("macysApp", ["ui.router", "ui.materialize"])
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
      controller: 'storeCtrl'
    })

    $urlRouterProvider.otherwise('/home')
  });
