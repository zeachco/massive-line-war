class Viewport {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'viewport';
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style['max-width'] = width + 'px';
    this.ctx = this.canvas.getContext('2d');
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
    let width = Math.min(this.canvas.width, window.innerWidth);
    let pos = this.canvas.getBoundingClientRect();
    let val = {
      x: x * this.canvas.width / width - pos.left,
      y: y * this.canvas.height / width - pos.top
    };
    return val;
  }
}

export default Viewport;
