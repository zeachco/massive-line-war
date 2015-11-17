import BaseObject from './base-object';
class Grid extends BaseObject {
  constructor(width, height) {
    super();
    this.tile = {};
    this.tile.width = width;
    this.tile.height = height;
  }
  update(viewport) {
    let tx = utils.round(viewport.mouse.x, this.tile.width);
    let ty = utils.round(viewport.mouse.y, this.tile.height);
    this.rect = {
      x1: tx,
      y1: ty,
      x2: tx + this.tile.width,
      y2: ty + this.tile.height
    };

    // draw //
    var ctx = viewport.ctx;
    ctx.fillStyle = 'rgba(128, 128, 128, 0.5)';
    ctx.rect(this.rect.x1, this.rect.y1, this.tile.width, this.tile.height);
    ctx.fill();
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.5)';
    ctx.lineWidth = 1;
    ctx.$line(this.rect.x1, 0, this.rect.x1, viewport.height);
    ctx.$line(this.rect.x2, 0, this.rect.x2, viewport.height);
    ctx.$line(0, this.rect.y1, viewport.width, this.rect.y1);
    ctx.$line(0, this.rect.y2, viewport.width, this.rect.y2);
  }
}

export default Grid;
