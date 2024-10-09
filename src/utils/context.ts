var Proto = CanvasRenderingContext2D.prototype;

// typescript definition for utilities on CanvasRenderingContext2D
declare global {
  interface CanvasRenderingContext2D {
    $circle(opt: {
      x: number;
      y: number;
      radius: number;
      fill?: string;
      stroke?: string;
      lineWidth?: number;
      percent?: number;
    }): void;
    $line(x1: number, y1: number, x2: number, y2: number): void;
    $img(opt: {
      x: number;
      y: number;
      url: string;
      width?: number;
      height?: number;
    }): void;
    $cls(): void;
  }
}

Proto.$circle = function (
  opt: Parameters<CanvasRenderingContext2D["$circle"]>["0"]
) {
  this.beginPath();
  var percent = opt.percent || 1;
  var start = Math.PI * -0.5;
  this.arc(
    opt.x,
    opt.y,
    opt.radius,
    start,
    start + 2 * percent * Math.PI,
    true
  );
  if (opt.fill) {
    this.fillStyle = opt.fill;
    this.fill();
  }
  if (opt.stroke) {
    this.strokeStyle = opt.stroke;
    this.lineWidth = opt.lineWidth || 1;
    this.stroke();
  }
};

Proto.$line = function (x1: number, y1: number, x2: number, y2: number) {
  this.beginPath();
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.stroke();
};

const imgCache: { [key: string]: HTMLImageElement } = {};

Proto.$img = function (opt: Parameters<CanvasRenderingContext2D["$img"]>["0"]) {
  let img = imgCache[opt.url];
  if (!img) {
    img = new Image();
    img.src = opt.url;
    imgCache[opt.url] = img;
  }
  if (!img.loading && opt.width && opt.height) {
    this.drawImage(img, opt.x, opt.y, opt.width, opt.height);
  } else if (!img.loading) {
    this.drawImage(img, opt.x, opt.y);
  }
};

Proto.$cls = function () {
  this.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
