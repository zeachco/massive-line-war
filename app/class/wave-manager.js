import FirebaseModel from './firebase-model';

// require('./preload');

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
        let Cl = maps[type]; //require('./' + type);
        setTimeout(function () {
          let creep = new Cl();
          creep.spawn(200, 5);
        }, offset * 250);
      }
    }
    setTimeout(this.nextWave.bind(this), waveInterval);
  }
}

export default WaveManager;
