import FirebaseModel from './firebase-model';

import Sheep from './sheep';
import Wolf from './wolf';

var waveInterval = 1000 * 60 * 5;
var maps = {
  sheep: Sheep,
  wolf: Wolf
};

var database = require('database');
var waves = database.child('waves');

class WaveManager extends FirebaseModel {
  constructor() {
    super(app.localPlayer._auth);
    this.ref = waves.child(app.localPlayer._auth.uid);
    this.ref.on('value', this.fetch.bind(this));
    this.ref.once('value', this.nextWave.bind(this));
    this.model = {
      creeps: []
    };
    window.console.log(maps);
  }

  fetch(snap) {
    window.console.info(snap.val());
    this.creeps = snap.val();
    this.creeps = {
      sheep: 60,
      wolf: 90
    };
  }

  nextWave() {
    var offset = 0;
    for (let type in this.creeps) {
      let count = this.creeps[type];
      for (let i = 0; i < count; i++) {
        offset++;
        let Cl = maps[type];
        setTimeout(function () {
          let creep = new Cl();
          creep.spawn(200, 5);
        }, offset * 250);
      }
    }
    setTimeout(this.nextWave.bind(this), waveInterval);
    // for (var i = 0; i < 500; i++) {
    //   setTimeout(function () {
    //     if (Math.random() > 0.6) {
    //       app.sheep = new Sheep();
    //       app.sheep.spawn(200, 5);
    //     }
    //
    //     if (Math.random() > 0.9) {
    //       app.wolf = new Wolf();
    //       app.wolf.spawn(100, 5);
    //     }
    //   }, i * 200);
    // }
  }
}

export default WaveManager;
