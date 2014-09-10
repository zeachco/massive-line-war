'use strict';
define([
  'angular',
  //Self module components
  './directive',
//  './routing'
//  './service',
], function(angular) {
  var module = angular.module('MainModule',
          [
            'Main.directive',
            'AppModule.configuration'
          ]);

  module.controller('MainController', [
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
      $scope.envMode = APP.ENV_MODE;
      $scope.appInfo = APP_INFO;
    }]);

  module.controller('MainMenuController', [
    '$scope',
    function(
            $scope
            )
    {
      this.menu = 'HOME';
      this.selectMenu = function(setMenu) {
        this.menu = setMenu;
      };
      this.isSelected = function(checkTab) {
        return this.menu === checkTab;
      };
      this.getMenuSelected = function() {
        return this.menu;
      };
    }]);

});