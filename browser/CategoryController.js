angular.module('gs').controller('CategoryController', function($scope, category, CategoryFactory){
  $scope.category = category;
  $scope.removeService = (serviceId, idx) => {
    return CategoryFactory.removeService($scope.category.id, serviceId)
    .then( () => $scope.category.services.splice(idx, 1));
  };

  $scope.createService = (categoryId, serviceName) => {
    return CategoryFactory.createService(categoryId, { name: serviceName })
    .then( (newService) => {
      category.services.push(newService);
      console.log(category.services);
    });
  };

  console.log($scope.category);
});
