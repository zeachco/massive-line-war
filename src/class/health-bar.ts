var barHeight = 3;

export class HealthBar {
  x = 0;
  y = 0;
  size = 0;
  hpRatio = 1;
  draw(ctx: CanvasRenderingContext2D) {
    let ratio = this.hpRatio;
    // Don't draw full bars
    if (ratio === 1 || ratio <= 0) {
      return;
    }

    // background
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.x - this.size / 2,
      this.y - this.size,
      this.size,
      barHeight
    );

    // foreground
    ctx.fillStyle = "green";
    ctx.fillRect(
      this.x - this.size / 2,
      this.y - this.size,
      this.size * ratio,
      barHeight
    );
  }
}
