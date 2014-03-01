var game = new WebGLGame();

var player = new Player();
game.addObject(player);

var cube = new Cube(game.scene);
game.addObject(cube);

var cameraman = new Cameraman();
cameraman.follow({camera: game.camera, mesh: cube.mesh, distance: 10, smooth: 10});
game.addObject(cameraman);