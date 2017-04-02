angular.module('gs').factory('ServiceTypeFactory', function($http){
  return {
    findAll: function(){
      return $http.get('/api/serviceTypes')
        .then( function(response){ return response.data });
    },
  };
});
