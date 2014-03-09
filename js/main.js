var app = null;
require(["engine/utils", "engine/Cameraman", "lib/three.min", "engine/webGLGame", "game/Cube", "engine/GAMEPAD"], function() {
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
