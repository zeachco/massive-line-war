define(['threejs', 'engine/gameObject', 'engine/GAMEPAD'], function(THREE, gameObject, GAMEPAD){
  'use strict';
  return gameObject(function Cube(scene) {
    var self = this;
    this.scene = scene;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.va = 0;
    this.init = function() {
      var geometry = new THREE.CubeGeometry(5, 3, 10);
      var material = new THREE.MeshBasicMaterial({
        color: '#f00'
      });
      self.mesh = new THREE.Mesh(geometry, material);
      self.mesh.rotation.y = Math.PI;
      self.scene.add(self.mesh);
      GAMEPAD.bind(32, 'jump');
    };
    this.trust = function(speed) {
      self.vx = self.vx + Math.sin(self.mesh.rotation.y) * speed;
      self.vz = self.vz + Math.cos(self.mesh.rotation.y) * speed;
      self.addSmoke(0.4);
      //        console.log('cube xyz', Math.round(self.mesh.position.x), Math.round(self.mesh.position.y), Math.round(self.mesh.position.z));
    };
    this.update = function(msDelta) {
      msDelta = msDelta/100;
      if (self.mesh.position.y > 0) {
        self.vy -= 0.1;
      } else {
        self.vy = 0;
        self.mesh.position.y = 0;
        if (GAMEPAD.jump){
          self.vy += 2;
        }
        if (GAMEPAD.up){
          self.trust(0.2);
        }
        if (GAMEPAD.down){
          self.trust(-0.1);
        }
        if (GAMEPAD.left){
          self.va += 0.02;
        }
        if (GAMEPAD.right){
          self.va -= 0.02;
        }
        self.vx /= 1.1;
        self.vy /= 1.1;
      }
      self.vz /= 1.1;
      self.va /= 1.2;
      self.mesh.rotation.y += (self.va * msDelta);
      self.mesh.position.x += (self.vx * msDelta);
      self.mesh.position.y += (self.vy * msDelta);
      self.mesh.position.z += (self.vz * msDelta);
      self.addSmoke(0.2);
    };
    this.addSmoke = function(/*a*/) {
      //        var x = self.vx + Math.cos(self.mesh.rotation.y) * -7;
      //        var np = PARTICLES.add(self.scene, {
      //            x: self.mesh.position.x + x,
      //            y: self.mesh.position.y,
      //            z: self.mesh.position.z + z
      //        });
      //        np.mesh.rotation.vy = self.mesh.rotation.vy;
      //        np.alpha = 0.1 + Math.sin(self.mesh.rotation.y) * -7;
      //        var z = self.vz + Math.random() * a * 2;
    };
    this.init();
  });
});
