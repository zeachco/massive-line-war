var game = new WebGLGame();
var player = new Player();
var cube = new Cube(game.scene);
var camera = new CameraControl(game.camera);
game.init();
game.addObject(player);
game.addObject(camera);
game.addObject(cube);