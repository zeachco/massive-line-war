'use strict';
define([
  'angular',
  'text!./templates/home.html'
], function(angular, templateHome) {
  angular.module('HomeModule.routing', ['ngRoute'])
          .config(function($routeProvider) {
    $routeProvider
            .when('/', {
      template: templateHome,
      controller: 'HomeController'
    })
  });


});