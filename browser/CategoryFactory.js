angular.module('gs').factory('CategoryFactory', function($http){
  var findAll = function(){
    return $http.get('/api/categories')
      .then( function(response){ return response.data });
  };

  var findOne = function(id){
    return $http.get(`/api/categories/${id}`)
      .then( (response) => response.data);
    // return 'TODO - show details for category ' + id;
  }

  var removeService = function(categoryId, serviceId){
    return $http.delete(`/api/categories/${categoryId}/services/${serviceId}`)
      .then( (response) => response);
  };

  var createService = function(categoryId, service) {
    return $http.post(`/api/categories/${categoryId}/services/`, service)
    .then( (newService) => newService.data);
  };

  var _serviceCount = { total: 0 };
  return {
    serviceCount: _serviceCount,
    findAll: findAll,
    findOne: findOne,
    removeService: removeService,
    createService: createService
  };
});
