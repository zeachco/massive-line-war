/*
 * To-be-prototype to base all game engine's objects
 * gameObject function return function incremented by prototype
 */
define([
  /* no dependencies */
], function(
  /* no dependencies */
){
  'use strict';
  function GameObject(){
    this.update = function(){ throw 'no this.update() defined in game Object'; };
    this.update = function(){ throw 'no this.init() defined in game Object'; };
  }
  GameObject._list = [];
  GameObject.add = function(){
    console.log(this);
    GameObject._list.push(this);
    return this;
  };
  return function gameObject(func){
    func.prototype = new GameObject();
    return func;
  };
});
