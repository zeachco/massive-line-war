import BaseObject from './base-object';

class Renderer {
  /**
   * Create an object that render on passed canvas element
   * @param  {[type]} viewport object from Viewport class
   * @return {[type]}        [description]
   */
  constructor(viewport) {
    this.loop = false;
    this.viewport = viewport;
  }
  start() {
    this.loop = true;
    this.render();
  }
  stop() {
    this.loop = false;
  }
  render() {
    var canvas = this.viewport.canvas;
    this.viewport.ctx.$cls();
    BaseObject.updateAll();
    window.requestAnimationFrame(this.render.bind(this));
  }
}

export default Renderer;
