/**
 * take a number and round it (with the selected method) to the closest base value
 * @param  {Number} value  number to round
 * @param  {Number} base   base value
 * @param  {String} method can be 'floor', 'ceil' or 'round' default is floor
 * @return {Number}        [description]
 */
export function round(
  value: number,
  base: number,
  method: "floor" | "ceil" | "round" = "floor"
): number {
  return Math[method](value / base) * base;
}

export function money(value = 0) {
  return round(value, 0.01) + "&nbsp;$";
}

export function distance(o1x: number, o1y: number, o2x: number, o2y: number) {
  return Math.sqrt(Math.pow(o1x - o2x, 2) + Math.pow(o1y - o2y, 2));
}
