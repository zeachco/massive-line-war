import Modal from 'class/dialog-box';

var modal;
utils.prompt = function(message, value, callback) {
  modal = modal || new Modal();
  modal.html = `<p>${message}<p><input autoselect value="${value}"/><input type="submit" value="Go"/>`;
  let input = modal.content.getElementsByTagName('input')[0];
  input.select();
  input.onclick = function() {
    this.select();
  };
  modal.on('resolve', callback.bind(this));
};
