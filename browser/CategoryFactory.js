angular.module('gs').factory('CategoryFactory', function($http){
  var findAll = function(){
    return $http.get('/api/categories')
      .then( function(response){ return response.data });
  };

  var findOne = function(id){
    return 'TODO - show details for category ' + id;
  }

  var _serviceCount = { total: 0 };
  return {
    serviceCount: _serviceCount,
    findAll: findAll,
    findOne: findOne
  };
});
