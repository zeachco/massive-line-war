var db = require('database');

import DialogBox from 'class/dialog-box';

class LoginPrompt {
  createLink(type, label) {
    let e = document.createElement('login-link');
    e.innerHTML = label;
    e.addEventListener('click', function () {
      switch (type) {
      case 'anonymous':
        db.authAnonymously(this.start.bind(this));
        break;
      default:
        db.authWithOAuthPopup(type, this.start.bind(this));
      }
      this.dialog.hide();
    }.bind(this));
    this.dialog.container.appendChild(e);
    return e;
  }
  start(err) {
    window.console.error(err);
    if (err) {
      this.render();
      return;
    }
  }
  render() {
    this.dialog = new DialogBox();
    this.dialog.html = '<h3>Create an account</h3>';
    this.createLink('anonymous', 'Anonymous');
    this.createLink('github', 'Github');
    this.createLink('facebook', 'Facebook');
    this.createLink('google', 'Google');
    this.createLink('twitter', 'Twitter');
  }
}

export default LoginPrompt;
