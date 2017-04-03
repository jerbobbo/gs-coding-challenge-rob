angular.module('gs').factory('CategoryFactory', function($http){
  return {
    findAll: function(){
      return $http.get('/api/categories')
        .then( function(response){ return response.data });
    },
  };
});
