import { state } from "../state";
import { Viewport } from "./viewport";

export class Renderer {
  loop = false;
  constructor(public viewport: Viewport) {}
  start() {
    this.loop = true;
    this.render();
  }
  stop() {
    this.loop = false;
  }
  render() {
    this.viewport.ctx.$cls();
    state.objects.forEach((o) => o.update());
    window.requestAnimationFrame(this.render.bind(this));
  }
}
