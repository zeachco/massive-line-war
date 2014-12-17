define([], function(){
  'use strict';
  function Gamepad() {
    var self = this;
    this.alias = {};
    this.init = function(node) {
      node = node || window;
      node.addEventListener('keyup', function(e) {
        self.changeState(e.keyCode, false);
      }, self.event, false);
      node.addEventListener('keydown', function(e) {
        self.changeState(e.keyCode, true);
      }, self.event, false);
    };
    this.bind = function(key, name) {
      this.alias[key] = name;
      this[this.alias[key]] = this[key];
    };
    this.changeState = function(key, state) {
      this[key] = state;
      this[this.alias[key]] = state;
    };
  }

  var GAMEPAD = new Gamepad();
  return GAMEPAD;
});
