import Viewport from 'class/viewport';
import Renderer from 'class/renderer';
import Path from 'class/path';
import BaseObject from 'class/base-object';
import LoginPrompt from 'class/login-prompt';
import Player from 'class/player';
import PlayerBoard from 'class/player-board';
import Grid from 'class/grid';
import WaveManager from 'class/wave-manager';
import CollisionController from 'class/collision-controller';

var gw = 600;
var gh = 600;
window.app = {};

var database = require('database');

app.viewport = new Viewport(gw, gh);
app.viewport.attach(document.body);

// use this viewport for all BaseObject updates
BaseObject.viewport = app.viewport;
app.objects = BaseObject;

app.renderer = new Renderer(app.viewport);
app.renderer.start();

app.grid = new Grid(gw / 20, gh / 20);

app.path = new Path();
app.path.add(200, 30);
app.path.add(200, 150);
app.path.add(100, 150);
app.path.add(100, 450);
app.path.add(400, 450);
app.path.add(400, 600);

app.collisionController = new CollisionController();

database.onAuth(function (auth) {
  if (!auth) {
    app.auth = app.auth || new LoginPrompt();
    app.auth.render();
    return;
  }
  app.board = new PlayerBoard();
  app.localPlayer = new Player(auth);
  app.waveManager = new WaveManager();
});
