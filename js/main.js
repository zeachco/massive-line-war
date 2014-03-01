var game = new WebGLGame();
var player = new Player();
var cube = new Cube(game.scene);
game.start();
game.addObj(player);
game.addObj(cube);