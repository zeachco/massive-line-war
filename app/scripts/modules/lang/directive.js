'use strict';
define([
  'angular',
  'text!./templates/langs.html'
], function(angular,
        langTemplate
        ) {
  var module = angular.module('Lang.directive', []);

  module.directive('langDirective', function() {
    return {
      restrict: 'E',
      template: langTemplate,
      controller: 'LangController'
    };
  });
});