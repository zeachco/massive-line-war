class Viewport {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'viewport';
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    this.mouse = {};
  }
  get width() {
    return this.canvas.width;
  }
  get height() {
    return this.canvas.height;
  }
  attach(parent) {
    parent.appendChild(this.canvas);
    window.addEventListener('mousemove', this.updateMouse.bind(this));
  }
  updateMouse(ev) {
    this.mouse = this.projection(ev.pageX, ev.pageY);
  }
  projection(x, y) {
    let val = {
      x: x * this.canvas.width / window.innerWidth,
      y: y * this.canvas.height / window.innerWidth // using width as ratio is keept for canvas
    };
    return val;
  }
}

export default Viewport
