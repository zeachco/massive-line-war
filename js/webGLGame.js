/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function WebGLGame(container) {
    var self = this;
    self._container = container;
    self._childs = [];
    self._isActive = false;
    self.init = function() {
        if (self._container === undefined)
            self._container = document.body;

        self.scene = new THREE.Scene();
        self.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        self.camera.position.y = 150;
        self.camera.position.z = 500;
        self.scene.add(self.camera);

        self.renderer = new THREE.CanvasRenderer();
        self.renderer.setClearColor(0x020202);
        self.renderer.setSize(window.innerWidth, window.innerHeight);

        /* test webgl */


//        self.camera = new THREE.Camera(70, window.innerWidth / window.innerHeight, 1, 1000);
//        self.scene.add(self.camera);
//        self.camera.position.z = 350;


//        self.camera.lookAt(cube);
//        cube.position.set(0, 0, 0);

        self._container.appendChild(self.renderer.domElement);


        window.addEventListener('resize', self.windowResize, false);
        window.addEventListener('blur', self.blur, false);
        window.addEventListener('click', self.focus, false);
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
        console.log("focus losed, game is paused");
        self._isActive = false;
    };
    self.focus = function() {
        if (!self._isActive) {
            console.log("game is running");
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
        console.log("loop")
        if (self._isActive)
            requestAnimationFrame(self.run);
    };
    self.init();
}