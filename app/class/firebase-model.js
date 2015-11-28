var updateThrottle = 150; // ms

class FirebaseModel {
  /**
   * help having DRY and performant Sync from local to firebase
   * @param  {[type]} auth Firebase auth object (reads uid from it)
   * @return {[type]}      [description]
   */
  constructor(auth) {
    this._model = {};
    this._auth = auth;
  }

  get model() {
    return this._model;
  }

  set model(val) {
    this._model = val;
    this.sync();
  }

  fetch(snap) {
    let val = snap.val();
    for (var key in val) {
      if (val.hasOwnProperty(key)) {
        this.model[key] = val[key];
      }
    }
  }

  syncProceed() {
    this.ref.set(this.model);
  }

  sync() {
    clearTimeout(this._throttle);
    this._throttle = setTimeout(this.syncProceed.bind(this), updateThrottle);
  }
}

export default FirebaseModel;
