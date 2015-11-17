// import Player from './player';

var Firebase = require('firebase');
var firebasePlayers = require('database').child('players');
// firebasePlayers.set({}); // reset list
var store = window.localStorage;

class PlayerManager {
  constructor() {
    firebasePlayers.on('value', this.update.bind(this));
  }

  update(data) {
    this.localPlayer = null;
    data.forEach(function(snap) {
      if (snap.key() === this.localID) {
        this.localPlayer = snap.val();
      }
    }.bind(this));
    if (!this.localPlayer) {
      this.remoteCreate();
      return;
    }
    this.renderBoard(data);
  }

  get localID() {
    if (this._localID) {
      return this._localID;
    }
    this._localID = store.getItem('player') || 'null';
    if (this._localID !== 'null') {
      return this._localID;
    } else {
      delete this._localID;
      return null;
    }
  }
  set localID(val) {
    this._localID = val;
    store.setItem('player', val);
  }

  remoteCreate() {
    let name = prompt('what\'s your name?', 'Anonymous defender');
    if (name) {
      let insertion = firebasePlayers.push();
      this.localID = insertion.key();
      insertion.update({
        name: name
      });
      insertion.update({
        startedAt: Firebase.ServerValue.TIMESTAMP
      });
      insertion.onDisconnect().remove();
    }
  }

  createBoard() {
    this.board = document.createElement('player-board');
    document.body.appendChild(this.board);
    return this.board;
  }

  renderBoard(players) {
    this.board = this.board || this.createBoard();
    var rows = '';
    players.forEach(function(player) {
      let p = player.val();
      let className = this.localID == player.key() ? 'local' : 'remote';
      rows += `<tr class="${className}"><td>${p.name}</td><td>${p.score || '0'}</td></tr>`;
    }.bind(this));
    this.board.innerHTML = `<table>${rows}</table>`;
  }
}

export default PlayerManager;
