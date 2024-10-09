import { state } from "../state";
import { round } from "../utils/math";
import { Updatable } from "./updatable";

export class Grid extends Updatable {
  rect = { x1: 0, y1: 0, x2: 0, y2: 0 };
  constructor(public width: number, public height: number) {
    super();
  }
  update() {
    let tx = round(state.viewport.mouse.x, this.width);
    let ty = round(state.viewport.mouse.y, this.height);
    this.rect = {
      x1: tx,
      y1: ty,
      x2: tx + this.width,
      y2: ty + this.height,
    };

    // draw //
    const { ctx, height, width } = state.viewport;
    ctx.fillStyle = "rgba(128, 128, 128, 0.5)";
    ctx.rect(this.rect.x1, this.rect.y1, this.width, this.height);
    ctx.fill();
    ctx.strokeStyle = "rgba(128, 128, 128, 0.5)";
    ctx.lineWidth = 1;
    ctx.$line(this.rect.x1, 0, this.rect.x1, height);
    ctx.$line(this.rect.x2, 0, this.rect.x2, height);
    ctx.$line(0, this.rect.y1, width, this.rect.y1);
    ctx.$line(0, this.rect.y2, width, this.rect.y2);
  }
}
