'use strict';
define([
  'angular',
  //Self module components
//  './directive',
  './routing',
//  './service',
], function(angular) {
  var module = angular.module('HomeModule',
          [
            'HomeModule.routing',
            'AppModule.configuration'
          ]);

  module.controller('HomeController', [
    '$scope',
    '$log',
    'APP',
    'APP_INFO',
    function(
            $scope,
            $log,
            APP,
            APP_INFO
            )
    {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);

});