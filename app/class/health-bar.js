var barHeight = 3;

class HealthBar {
  constructor(model) {
    this.model = model;
  }
  draw(ctx) {
    let ratio = this.model.hpRatio;
    // Don't draw full bars
    if (ratio === 1) {
      return;
    }

    let x = this.model.x;
    let y = this.model.y;
    let size = this.model.size;

    if (ratio > 0) {

      // background
      ctx.fillStyle = 'red';
      ctx.fillRect(x - size / 2, y - size, size, barHeight);

      // foreground
      ctx.fillStyle = 'green';
      ctx.fillRect(x - size / 2, y - size, size * ratio, barHeight);

    }

  }
}

export default HealthBar;
