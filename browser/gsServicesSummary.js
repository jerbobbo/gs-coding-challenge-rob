angular.module('gs').directive('gsServicesSummary', function(){
  return {
    templateUrl: '/browser/templates/gsServicesSummary.html',
    controller: function($scope, CategoryFactory){
      $scope.serviceCount = CategoryFactory.serviceCount;
    }
  };
});
