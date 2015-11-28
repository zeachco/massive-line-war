var firebasePlayers = require('database').child('players');

class PlayerBoard {
  constructor() {
    firebasePlayers.orderByChild('score').on('value', this.render.bind(this));
  }

  createBoard() {
    this.board = document.createElement('player-board');
    document.body.appendChild(this.board);
    return this.board;
  }

  render(players) {
    window.console.log(players.val());
    this.board = this.board || this.createBoard();
    var rows = '';
    players.forEach(function (player) {
      let p = player.val();
      let className = app.localPlayer._auth.uid == player.key() ? 'local' : 'remote';
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
