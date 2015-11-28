var firebasePlayers = require('database').child('players');

class Player {
  constructor(auth) {
    this._auth = auth;
    this._money = 100;
    this._score = 0;
    firebasePlayers.set(this);
    this.ref = firebasePlayers.child(this._auth.uid);
    this.ref.once('value', this.set.bind(this));
  }

  set(snap) {
    let val = snap.val();
    window.console.log(this, val);
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        this[key] = val[key];
      }
    }
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
    firebasePlayers.child(this.$id).update({
      money: this._money
    });
  }

  get money() {
    return this._money || 0;
  }
}

export default Player;
