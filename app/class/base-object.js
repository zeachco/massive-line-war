class BaseObject {
  constructor() {
    this.dirty = false;
    BaseObject.all.push(this);
  }

  get viewport() {
    return BaseObject.viewport;
  }

  set updatable(v) {
    return this._dirty = v;
  }

  get updatable() {
    return this._dirty === undefined ? true : this._dirty;
  }

  _update() {
    if (this.update) {
      if (this._dirty) {
        this._dirty = false;
      }
      this._time = BaseObject._time;
      this.update(BaseObject.viewport);
    } else {
      window.console.warn(`No update method for ${this.constructor.name}`);
    }
  }

  get index() {
    return this._index;
  }

  set index(val) {
    this.removeFromIndex();
    this._index = val;
    BaseObject.all[val] = BaseObject.all[val] || [];
    BaseObject.all[val].push(this);
  }

  removeFromIndex() {
    if (this._index) {
      let index = BaseObject.all[this._index].indexOf(this);
      BaseObject.all[this._index].splice(index, 1);
    }
  }

  remove() {
    this.removeFromIndex();
    BaseObject.all.splice(this._index_all, 1);
  }

}

BaseObject.all = [];
BaseObject._time = {};
var maxLatencyFPS = 1000 / 35;
BaseObject.updateAll = function () {
  var now = Date.now();
  this._time = {
    last: this._time.now || now,
    now: now,
    delta: Math.min(maxLatencyFPS, this._time.now - this._time.last)
  };
  // loop
  BaseObject.all.forEach(function (d, i) {
    d._index_all = i;
    if (d.updatable) {
      d._update();
    }
  }.bind(this));
  return this;
};

export default BaseObject;
