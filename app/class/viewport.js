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
    let winWidth = window.innerWidth;
    let width = Math.min(this.canvas.width, winWidth);
    let padding = (winWidth - width) / 2;
    let val = {
      x: x * this.canvas.width / width - padding,
      y: y * this.canvas.height / width
    };
    return val;
  }
}

export default Viewport;
