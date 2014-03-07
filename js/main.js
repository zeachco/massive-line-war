var app = null;
require(["gameEngine/utils", "gameEngine/Cameraman", "lib/three.min", "gameEngine/webGLGame", "Cube", "gameEngine/GAMEPAD"], function() {
    var app = new WebGLGame();
    app._useTimeDelta = false;

    window.cube = new Cube(app.scene);
    app.addObject(cube);
    
    var cameraman = new Cameraman();
    cameraman.follow(cube.mesh);
//    cameraman.place({
//        vec3: cube.mesh.position,
//        mode: "relative",
//        smooth: 15
//    });
    app.addObject(cameraman);
});
