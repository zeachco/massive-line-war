'use strict';
define([
  'angular',
  'text!./templates/about.html'
], function(angular, AboutTemplate) {
  angular.module('AboutModule.routing', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
            .when('/about', {
      template: AboutTemplate,
      controller: 'AboutController'
    });
  });
});