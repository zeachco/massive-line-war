
import FirebaseModel from './firebase-model';

class Player extends FirebaseModel {
  constructor(auth) {
    super(auth);
    this.model.online = true;
    this.model.money = this.money || 100;
    this.model.score = this.score || 0;
    this.model.lives = this.lives || 15;
    this.set();
  }

  addMoney(bounty) {
    this._score = this._score + bounty;
    firebasePlayers.child(this.$id).update({
      score: this._score,
      money: this._money
    });
  }

  set score(val) {
    this._score = val;
    // firebasePlayers.child(this.$id).update({
    //   score: this._score
    // });
  }

  get score() {
    return this._score || 0;
  }

  set money(val) {
    this._money = val;
    // firebasePlayers.child(this.$id).update({
    //   money: this._money
    // });
  }

  get money() {
    return this._money || 0;
  }
}

export default Player;
