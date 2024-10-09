export class Viewport {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse = { x: 0, y: 0 };
  constructor(public w: number, public h: number) {
    this.canvas = document.createElement("canvas");
    this.canvas.className = "viewport";
    this.canvas.width = w;
    this.canvas.height = h;
    this.canvas.style.maxHeight = w + "px";
    this.ctx = this.canvas.getContext("2d")!;
    if (!this.ctx) throw new Error("CanvasRenderingContext2D not found");
  }
  get width() {
    return this.canvas.width;
  }
  get height() {
    return this.canvas.height;
  }
  attach(parent: HTMLElement) {
    parent.appendChild(this.canvas);
    window.addEventListener("mousemove", this.updateMouse.bind(this));
  }
  updateMouse(ev: MouseEvent) {
    this.mouse = this.projection(ev.pageX, ev.pageY);
  }
  projection(x: number, y: number) {
    let width = Math.min(this.canvas.width, window.innerWidth);
    let pos = this.canvas.getBoundingClientRect();
    let val = {
      x: (x * this.canvas.width) / width - pos.left,
      y: (y * this.canvas.height) / width - pos.top,
    };
    return val;
  }
}
