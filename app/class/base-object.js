class BaseObject {
  constructor() {
    this.dirty = false;
    BaseObject.all.push(this);
  }

  get viewport(){
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
      this.update(this.viewport);
    } else {
      console.warn(`No update method for ${this.constructor.name}`);
    }
  }

}

BaseObject.all = [];
BaseObject.updateAll = function() {
  BaseObject.all.forEach(function(d) {
    if (d.updatable) {
      d._update();
    }
  }.bind(this));
  return this;
};

export default BaseObject
