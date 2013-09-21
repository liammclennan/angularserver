'use strict';

// Declare app level module which depends on filters, and services
var angularserverApp = angular.module('angularserverApp', []).
  config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'appController'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
 }]);



