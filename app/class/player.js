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
}

export default Player;
