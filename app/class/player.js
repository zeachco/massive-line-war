import FirebaseModel from './firebase-model';

class Player extends FirebaseModel {
  constructor(auth) {
    super(auth);
    if (auth === null) {
      this.model = {
        online: true,
        score: 0,
        money: 100,
        lives: 15
      };
    }
  }

  addMoney(bounty) {
    this.model.score += bounty;
    this.model.money += bounty;
    this.sync();
  }
}

export default Player;
