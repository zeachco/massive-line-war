var firebasePlayers = require('database').child('players');
var updateThrottle = 150; // ms

class FirebaseModel {
  constructor(auth) {
    this._model = {};
    this._auth = auth;
    this.ref = firebasePlayers.child(this._auth.uid);
    this.ref.once('value', this.get.bind(this));
  }

  get model() {
    return this._model;
  }

  set model(val) {
    this._model = val;
    this.sync();
  }

  get(snap) {
    let val = snap.val();
    window.console.log(this, val);
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        this.model[key] = val[key];
      }
    }
  }

  syncProceed() {
    window.console.debug('synced');
    firebasePlayers.child(this._auth.uid).set(this.model);
  }

  sync() {
    clearTimeout(this._throttle);
    this._throttle = setTimeout(this.syncProceed.bind(this), updateThrottle);
  }
}

export default FirebaseModel;
