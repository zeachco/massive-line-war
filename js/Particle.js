var PARTICLES = {
    list: [],
    maxSprites: 60,
    texture: {},
    add: function(scene, position) {
        var np;
        if (PARTICLES.list.length < PARTICLES.maxSprites)
            np = new Particle(scene, position);
        else {
            np = PARTICLES.list.splice(0, 1)[0];
        }
        PARTICLES.list.push(np);
        return np;
    },
    update: function() {
        var i = 0;
        while (i < PARTICLES.list.length) {
            PARTICLES.list[i].update();
            if (i < PARTICLES.maxSprites && PARTICLES.list[i].alpha > 0)
                i++;
            else
                PARTICLES.list.splice(i, 1)[0].remove();
        }
    }
};
function Particle(scene, params) {
    var self = this;
    this.scene = scene;
    this.init = function() {
        if (PARTICLES.texture.smoke == undefined)
            PARTICLES.texture.smoke = THREE.ImageUtils
                    .loadTexture('images/smoke.png');
        var material = null;
        material = new THREE.SpriteMaterial({
            map: PARTICLES.texture.smoke,
            useScreenCoordinates: false,
            color: "#fff"
        });
        material.blending = 3;
        self.mesh = new THREE.Sprite(material);
        self.scene.add(self.mesh);
        self.mesh.position.x = params.x;
        self.mesh.position.y = params.y;
        self.mesh.position.z = params.z;
        self.mesh.rotation.x = Math.random() * Math.PI * 2;
        self.mesh.rotation.y = Math.random() * Math.PI * 2;
        self.mesh.rotation.z = Math.random() * Math.PI * 2;
        self.vx = Math.random() * .2 - .1;
        self.vy = 0.1 + Math.random() * .5;
        self.vz = Math.random() * .2 - .1;
        self.alpha = 1;
        var s = Math.random() * 10 + 1;
        self.mesh.scale.set(s * 1.5, s, 1.0);
    };
    this.update = function() {
        self.mesh.position.x += self.vx;
        self.mesh.position.y += self.vy;
        self.mesh.position.z += self.vz;
        self.mesh.material.opacity = self.alpha;
        self.alpha -= 0.01;

    };
    this.remove = function() {
        self.scene.remove(self.mesh);
    };
    this.init();
}