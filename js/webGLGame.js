/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
WebGLGame.prototype = new Game();
function WebGLGame(container) {
    var self = this;
    self._container = container;
    self._childs = [];
    self.init = function() {
        self.renderer = new THREE.CanvasRenderer();
        if (self._container === undefined)
            self._container = document.body;
        self._container.appendChild(self.renderer.domElement);
        self.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
        self.scene = new THREE.Scene();
        self.scene.add(self.camera);
        window.addEventListener('resize', self.windowResize, false);
        self.windowResize();
        window.onblur = function(){
            self.blur();
        };
        window.onclick = self.focus;
        self.focus();
    };
    self.windowResize = function() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log("viewport : " + w + " x " + h);
        self.camera.aspect = w / h;
        self.camera.updateProjectionMatrix();
        self.renderer.setSize(w, h);
    };
    self.addObject = function(obj) {
        this._childs.push(obj);
    };
    self.blur = function() {
        self._isActive = false;
    };
    self.focus = function() {
        if (!self._isActive) {
            self._isActive = true;
            self.run();
        }
    };
    self.run = function() {
        for (var i = 0; i < self._childs.length; i++) {
            try {
                self._childs[i].update();
            } catch (e) {
                console.warn(e);
            }
        }
        self.renderer.render(self.scene, self.camera);
        requestAnimationFrame(self.run);
    };
    self.init();
}