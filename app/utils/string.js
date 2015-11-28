String.prototype.$repeat = function (count, max = 5, zero = '---') {
  if (count > max) {
    return `${this} x ${count}`;
  } else if (count > 0) {
    return this.repeat(count);
  } else {
    return zero;
  }
};
