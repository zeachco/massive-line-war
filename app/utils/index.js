function requireAll(r) {
  r.keys().forEach(r);
}
window.utils = {};
requireAll(require.context('./', true, /\.js$/));
