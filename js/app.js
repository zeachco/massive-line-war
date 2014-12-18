define([
  'engine/WebGLGame',
  'engine/Cameraman',
  'engine/GAMEPAD',
  'engine/utils',
  'game/Cube',
  'game/Floor'
],function(
  WebGLGame,
  Cameraman,
  GAMEPAD,
  utils,
  Cube,
  Floor
) {
  'use strict';

  GAMEPAD.bind(38, 'up');
  GAMEPAD.bind(40, 'down');
  GAMEPAD.bind(37, 'left');
  GAMEPAD.bind(39, 'right');
  GAMEPAD.init(window);

  var app = new WebGLGame();
  app._useTimeDelta = true;

  app.cube = new Cube({ engine: app });

  app.cameraman = new Cameraman({
    engine: app,
    target: app.cube,
    smooth: 15,
    mode: 'relative'
  });

  app.floor = new Floor({
    engine: app,
    target: app.cameraman
  });

  return app;
});
