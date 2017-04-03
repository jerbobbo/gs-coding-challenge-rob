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
      url: '/categories',
      templateUrl: '/browser/templates/categories.html',
      controller: 'CategoriesController' 
    })
    .state('category', {
      resolve: {
        category: function(CategoryFactory, $stateParams){
          return CategoryFactory.findOne($stateParams.id);
        }
      },
      url: '/categories/:id',
      templateUrl: '/browser/templates/category.html',
      controller: 'CategoryController' 
    })
    $urlRouterProvider.otherwise('/');

});
