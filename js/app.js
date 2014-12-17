define([
  'engine/utils',
  'engine/Cameraman',
  'engine/WebGLGame',
  'game/Cube',
  'engine/GAMEPAD'
],function(
  utils,
  Cameraman,
  WebGLGame,
  Cube,
  GAMEPAD
) {
  'use strict';

  GAMEPAD.bind(38, 'up');
  GAMEPAD.bind(40, 'down');
  GAMEPAD.bind(37, 'left');
  GAMEPAD.bind(39, 'right');
  GAMEPAD.init(window);

  var app = new WebGLGame();
    app._useTimeDelta = false;
    app.cube = new Cube(app.scene);
    app.addObject(app.cube);

    var cameraman = new Cameraman();
    cameraman.follow(app.cube.mesh);
//    cameraman.place({
//        vec3: cube.mesh.position,
//        mode: "relative",
//        smooth: 15
//    });
    app.addObject(cameraman);
});
