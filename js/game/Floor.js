define(['threejs', 'engine/gameObject', 'engine/GAMEPAD'], function(THREE, gameObject, GAMEPAD){
  'use strict';
  GAMEPAD.bind(32, 'jump');
  return gameObject(function Floor(opts) {
    var self = this;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.va = 0;
    self.param(opts);
    var w = 10000, h = 5000;
    var seaGeo, seaTex;
    this.init = function() {
      seaTex = THREE.ImageUtils.loadTexture('images/smoke.gif');
      seaTex.wrapS = seaTex.wrapT = THREE.RepeatWrapping;
      seaTex.repeat.set(4, 2);
      var seaMat = new THREE.MeshPhongMaterial({
        specular: 0xffffff,
        shininess: 100,
        map: seaTex,
        bumpMap: seaTex,
        bumpScale: 5.0
      });
      seaGeo = new THREE.PlaneGeometry(w, h);
      self.mesh = new THREE.Mesh(seaGeo, seaMat);
      self.scene.add(self.mesh);
    };
    this.update = function(msDelta) {
      msDelta = msDelta/100;
      self.mesh.position.x = self.options.engine.camera.position.x;
      self.mesh.position.y = self.options.engine.camera.position.y-20;
      self.mesh.position.z = self.options.engine.camera.position.z;
      seaTex.offset.set(self.x / w * seaTex.repeat.x, self.y / h * seaTex.repeat.y);

    };
    this.build();
  });
});
