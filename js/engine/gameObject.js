define([], function(){
  'use strict';
  function GameObject(){
    this.update = function(){ throw 'no this.update() defined in game Object'; };
    this.update = function(){ throw 'no this.init() defined in game Object'; };
  }
  return function gameObject(func){
    func.prototype = new GameObject();
    return func;
  };
});
