angular.module('gs').config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/browser/templates/home.html'
    })
    .state('serviceTypes', {
      resolve: {
        serviceTypes: function(ServiceTypeFactory){
          return ServiceTypeFactory.findAll();
        }
      },
      url: '/serviceTypes',
      templateUrl: '/browser/templates/serviceTypes.html',
      controller: 'ServiceTypesController' 
    });

    $urlRouterProvider.otherwise('/');

});
