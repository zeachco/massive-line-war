var database = require('database');

import FirebaseModel from './firebase-model';

var creepTimeOffset = 750;
var waveInterval = 1000 * 30;

import Sheep from './sheep';
import Wolf from './wolf';
var maps = {
  sheep: Sheep,
  wolf: Wolf
};

class WaveManager extends FirebaseModel {
  constructor() {
    super(app.localPlayer._auth);
    this.queue = [];
    this.ref = database.child('waves/' + app.localPlayer._auth.uid);
    this.ref.on('value', this.fetch.bind(this));
    this.ref.set({
      sheep: 5
    });
    this.nextWave();
  }

  fetch(snap) {
    var creeps = snap.val();
    for (var type in creeps) {
      var count = creeps[type];
      for (var i = 0; i < count; i++) {
        this.queue.push(type);
      }
    }
  }

  send(creeps) {
    this.ref.set(creeps);
  }

  spawn(creepClass) {
    let Cl = maps[creepClass]; //require('./' + type);
    let creep = new Cl();
    creep.spawn(200, 5);
  }

  nextCreep() {
    if (this.queue.length === 0) {
      this.endWave();
      return;
    }
    var next = this.queue.splice(0, 1);
    let Cl = maps[next]; //require('./' + type);
    let creep = new Cl();
    creep.spawn(200, 5);
    setTimeout(this.nextCreep.bind(this), creepTimeOffset);
  }

  nextWave() {
    window.console.info('next wave!', this.queue);
    this.nextCreep();
    clearTimeout(this._nextTimer);
    this._nextTimer = setTimeout(this.nextWave.bind(this), waveInterval);
  }

  endWave() {
    this.ref.set({
      sheep: 1
    });
  }
}

export default WaveManager;
