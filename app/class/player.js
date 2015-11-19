var firebasePlayers = require('database').child('players');

class Player {
  constructor(snap) {
    this.$id = snap.key();
    let val = snap.val();
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        this[key] = val[key];
      }
    }
    this._money = 1000;
    this._score = 0;
  }

  addMoney(bounty) {
    this._money = this._money + bounty;
    this._score = this._score + bounty;
    firebasePlayers.child(this.$id).update({
      score: this._score,
      money: this._money
    });
  }

  set score(val) {
    this._score = val;
    firebasePlayers.child(this.$id).update({
      score: this._score
    });
  }

  get score() {
    return this._score || 0;
  }

  set money(val) {
    this._money = val;
    firebasePlayers.child(this.$id).update({
      money: this._money
    });
  }

  get money() {
    return this._money || 0;
  }
}

export default Player;
