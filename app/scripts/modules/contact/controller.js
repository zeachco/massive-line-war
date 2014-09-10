'use strict';
define([
  'angular',
  //Self module components
//  './directive',
  './routing',
//  './service',
], function(angular) {
  angular.module('ContactModule',
          [
            'ContactModule.routing'
          ])
          .controller('ContactController', [
    '$scope',
    '$log',
    function(
            $scope,
            $log
            )
    {
    }]);

});