import Player from './player';
var firebasePlayers = require('database').child('players');

class PlayerBoard {
  constructor() {
    firebasePlayers.orderByChild('score').on('value', this.update.bind(this));
  }

  update(data) {
    window.console.log('update');
    this.localPlayer = null;
    data.forEach(function (snap) {
      if (snap.key() === this.localID) {
        this.localPlayer = new Player(snap);
      }
    }.bind(this));
    if (!this.localPlayer) {
      this.remoteCreate();
      return;
    }
    this.renderBoard(data);
  }

  createBoard() {
    this.onLocalPlayer();
    this.board = document.createElement('player-board');
    document.body.appendChild(this.board);
    return this.board;
  }

  renderBoard(players) {
    this.board = this.board || this.createBoard();
    var rows = '';
    players.forEach(function (player) {
      let p = player.val();
      let className = this.localID == player.key() ? 'local' : 'remote';
      rows += `<tr class="${className}">
                <td>${p.name}</td>
                <td>${p.score || '0'}</td>
                <td>${utils.money(p.money)}</td>
              </tr>`;
    }.bind(this));
    this.board.innerHTML = `<table>${rows}</table>`;
  }
}

export default PlayerBoard;
