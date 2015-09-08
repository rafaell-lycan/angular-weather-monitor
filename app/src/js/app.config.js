(function () {
  angular.module('app').config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig ($routeProvider) {

    $routeProvider
      .when('/', {
        template: '<h1>{{vm.name}}</h1>',
        controller: 'WeatherController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
