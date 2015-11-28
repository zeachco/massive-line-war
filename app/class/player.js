import FirebaseModel from './firebase-model';

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
  }

  addMoney(bounty) {
    this.model.score += bounty;
    this.model.money += bounty;
    this.sync();
  }

  get lives() {
    return this.model.lives;
  }

  set lives(nb) {
    this.model.lives = +nb;
    this.sync();
  }
}

export default Player;
