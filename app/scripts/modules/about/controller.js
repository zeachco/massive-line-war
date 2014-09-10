'use strict';
define([
  'angular',
  //Self module components
//  './directive',
  './routing',
//  './service',
], function(angular) {
  angular.module('AboutModule',
          [
            'AboutModule.routing'
          ])
          .controller('AboutController', [
    '$scope',
    '$log',
    function(
            $scope,
            $log
            )
    {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);

});