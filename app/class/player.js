import FirebaseModel from './firebase-model';

var firebasePlayers = require('database').child('players');
var faces = require('cool-ascii-faces');

class Player extends FirebaseModel {
  constructor(auth) {
    super(auth);
    this.model = {
      name: faces(),
      score: 0,
      lives: 30,
      money: 100
    };

    this.ref = firebasePlayers.child(this._auth.uid);
    this.ref.once('value', this.fetch.bind(this));
  }

  addMoney(bounty) {
    if (this.model.lives > 0) {
      this.model.score += bounty;
      this.model.money += bounty;
      this.sync();
    }
  }

  get lives() {
    return this.model.lives;
  }

  set lives(nb) {
    if (this.model.lives < 1 && nb < 1) {
      return; // no update for dead peoples, they don't deserve it
    }
    this.model.lives = +nb;
    this.sync();
  }
}

export default Player;
