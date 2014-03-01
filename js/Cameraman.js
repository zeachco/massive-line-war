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
function Cameraman() {
    var self = this;
    self.update = function() {
        if (self._target)
            self._position();
        else
            console.log("cameraman is lost...\nno target defined");
    };
    /**
     * camera behaviour object
     * exemple :
     * {
     *  mesh: object to follow,
     *  distance: 10,
     *  smooth: 10
     * }
     * @param {type} target
     * @returns {undefined}
     */
    self.follow = function(target) {
        self._target = target;
    };
    self._position = function() {

    };
}