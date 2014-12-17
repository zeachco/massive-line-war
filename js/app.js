define([
  'engine/WebGLGame',
  'engine/Cameraman',
  'engine/GAMEPAD',
  'engine/utils',
  'game/Cube'
],function(
  WebGLGame,
  Cameraman,
  GAMEPAD,
  utils,
  Cube
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

    var cameraman = new Cameraman({
      target: app.cube,
      smooth: 15,
      mode: 'relative'
    });
    app.addObject(cameraman);
});
