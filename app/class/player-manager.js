import Player from './player';

var Firebase = require('firebase');
var firebasePlayers = require('database').child('players');
// firebasePlayers.set({}); // reset list
var store = window.localStorage;

class PlayerManager {
  constructor() {
    this.getLocalPlayer();
    firebasePlayers.on('value', this.update.bind(this));
  }

  getLocalPlayer() {
    this.localID = store.getItem('player') || 'null';
    if (this.localID === 'null') {
      delete this.localID;
    }
    if (!this.localID) {
      let name = prompt('what\'s your name?', 'Anonymous defender');
      if (name) {
        this.localID = this.remoteCreate(name);
      }
    }
  }

  remoteCreate(name) {
    let insertion = firebasePlayers.push();
    let id = insertion.key();
    store.setItem('player', id);

    // // auto disconnect
    // insertion.onDisconnect().update({
    //   endedAt: Firebase.ServerValue.TIMESTAMP
    // });
    //
    // // insert TIMESTAMP
    // insertion.update({
    //   startedAt: Firebase.ServerValue.TIMESTAMP
    // });

    // set player attributes
    insertion.set({
      name: name
    });
    return id;
  }

  update(data) {
    var rows = '';
    var players = data.val();
    this.localPlayer = players[this.localID];
    this.renderBoard(data);
    console.log(this.localPlayer);

    if (this.localPlayer) {
      console.info(`Player reconnected with ${this.localPlayer.name} (${this.localID})`);
    } else if (this.localID) {
      alert('You have been disconnected');
      delete store.player;
      window.location.reload();
    } else {
      console.log('Spectator mode');
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
