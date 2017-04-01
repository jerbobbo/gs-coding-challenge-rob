var app = angular.module('gs', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
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
      controller: function($scope, serviceTypes){
        console.log(serviceTypes);
        $scope.serviceTypes = serviceTypes;
      }
    })

});

app.directive('gsNav', function(){
  return {
    templateUrl: '/browser/templates/gsNav.html',
  };
});

app.factory('ServiceTypeFactory', function($http){
  return {
    findAll: function(){
      return $http.get('/api/serviceTypes')
        .then( function(response){ return response.data });
    }
  };
});
