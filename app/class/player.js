import FirebaseModel from './firebase-model';

var faces = require('cool-ascii-faces');

class Player extends FirebaseModel {
  constructor(auth) {
    super(auth);
    this.model.name = faces();
  }

  get score() {
    return this.model.score || 0;
  }
  set score(val) {
    return this.model.score = val;
  }

  get money() {
    return this.model.money || 100;
  }
  set money(val) {
    return this.model.money = val;
  }

  get lives() {
    return this.model.lives || 15;
  }
  set lives(val) {
    return this.model.lives = val;
  }


  addMoney(bounty) {
    this.score += bounty;
    this.money += bounty;
    this.sync();
  }
}

export default Player;
