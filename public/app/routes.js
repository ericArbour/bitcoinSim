var app = angular.module('coinMod');

app.config(function($routeProvider){

  $routeProvider.when("/",{
    templateUrl: 'views/dashboard.html',
    controller: 'apiController'
  })
  .when("/info",{
    templateUrl: 'views/info.html'
  })
  .when("/signin",{
    templateUrl: 'views/signin.html'
  });

});
