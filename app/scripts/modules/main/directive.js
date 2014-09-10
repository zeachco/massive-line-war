'use strict';
define([
  'angular',
  'text!./templates/main.html'
], function(angular,mainTemplate) {
  var module = angular.module('Main.directive', []);

  module.directive('mainDirective', function() {
    return {
      restrict: 'E',
      template: mainTemplate,
      controller: 'MainController'
    };
  });
});