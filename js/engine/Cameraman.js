define(['engine/gameObject'], function(gameObject){
  'use strict';
  return gameObject(function Cameraman() {
    var self = this;
    self.update = function() {
      if (self._target){
        self._position();
      }else{
        console.log('cameraman is lost...\nno target defined');}
      };
      /**
      * camera behaviour object
      * exemple :
      * {
      *  mesh: object to follow,
      *  distance: 10,
      *  smooth: 10
      * }
      * @param {type} target
      * @returns {undefined}
      */
      self.follow = function(target) {
        self._target = target;
      };
      self._position = function() {
        self._target.camera.lookAt(self._target.mesh.position);
      };
    });
  });
