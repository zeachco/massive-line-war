define([
  'engine/gameObject'
], function(
  gameObject
){
  'use strict';

  return gameObject(function Cameraman() {
    var self = this;
    var target;
    function position(){
      self._target.camera.lookAt(self._target.mesh.position);
    }
    self.update = function() {
      if (target){
        position();
      }else{
        console.log('cameraman is lost...\nno target defined', target);}
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
      self.follow = function(t) {
        target = t || null;
      };
    });
  });
