angular.module('gs').config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/browser/templates/home.html'
    })
    .state('categories', {
      resolve: {
        categories: function(CategoryFactory){
          return CategoryFactory.findAll();
        }
      },
      url: '/serviceTypes',
      templateUrl: '/browser/templates/categories.html',
      controller: 'CategoriesController' 
    })
    $urlRouterProvider.otherwise('/');

});
