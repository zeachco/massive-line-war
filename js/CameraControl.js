/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 
 * @param {THREE.mesh} camera
 * @returns {undefined}
 */
function CameraControl(camera) {
    var self = this;
    self.init = function() {
//        camera.position.z = 20;
//        camera.position.y = 20;
//        camera.rotation.x = -0.2;
        window.cam = camera;
    };
    self.update = function() {
//        camera.;
        console.log("camera update()");
    };
    self.init();
}