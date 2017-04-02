angular.module('gs', ['ui.router'])
  .run(function($rootScope){
    $rootScope.$on('$stateChangeError', 
function(event, toState, toParams, fromState, fromParams, error){ 
        console.log(error);
        event.preventDefault();
})
  });



