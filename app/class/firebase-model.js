var firebasePlayers = require('database').child('players');

class FirebaseModel {
  constructor(auth) {
    this.model = {};
    this._auth = auth;
    this.ref = firebasePlayers.child(this._auth.uid);
    this.ref.once('value', this.set.bind(this));
  }

  get(snap) {
    let val = snap.val();
    if (val === null) {
      firebasePlayers.push(this.model);
    }
    window.console.log(this, val);
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        this.model[key] = val[key];
      }
    }

  }

  set() {

    firebasePlayers.child(this._auth.uid).set(this.model);
    //
    // this.ref.once('value', this.set.bind(this));


  }

}

export default FirebaseModel;
