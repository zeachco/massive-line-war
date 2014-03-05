window.onready = function() {
    var game = new WebGLGame();

    window.cube = new Cube(game.scene);
    game.addObject(cube);

    var cameraman = new Cameraman();
    cameraman.follow(cube.mesh);
    cameraman.place({
        vec3: cube.mesh.position,
        mode: "relative",
        smooth: 15
    });

    game.addObject(cameraman);
};