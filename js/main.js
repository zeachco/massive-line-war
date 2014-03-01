var game = new WebGLGame();

var player = new Player();
game.addObject(player);

var cube = new Cube(game.scene);
game.addObject(cube);

var cameraman = new Cameraman();
cameraman.follow({camera: game.camera, mesh: cube.mesh, distance: 10, smooth: 10});
game.addObject(cameraman);


/* test webgl */
var radius = 50, segments = 16, rings = 16;
var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC0000
});
var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, rings), sphereMaterial);
game.scene.add(sphere);