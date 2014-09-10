'use strict';
define([
  'angular',
  'text!./templates/contact.html'
], function(angular, templateContact) {
  angular.module('ContactModule.routing', ['ngRoute'])
          .config(function($routeProvider) {
    $routeProvider
            .when('/contact', {
      template: templateContact,
      controller: 'ContactController'
    }).otherwise({
      redirectTo: '/'
    });
  });
});