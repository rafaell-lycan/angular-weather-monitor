(function () {
  angular.module('app').config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'WeatherController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
