(function () {
  'use strict';

  require('angular');
  require('angular-route');

  angular.module('app',['ngRoute']);

  require('./weather/weather.controller');
  require('./app.config');
})();
