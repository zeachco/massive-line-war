var firebasePlayers = require('database').child('players');
var heart = '\u2764';
var skull = '&#128128;';

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
    this.board = this.board || this.createBoard();
    var rows = '';
    players.forEach(function (player) {
      let p = player.val();
      let className = app.localPlayer._auth.uid == player.key() ? 'local' : 'remote';
      var livesTpl = heart.$repeat(p.lives, 5, 'DWEAD! ' + skull);
      rows = `<tr class="${className}">
                <td>
                  ${p.name}
                </td>
                <td>${p.score}</td>
              </tr>
              <tr class="${className} info">
                <td>${livesTpl}</td>
                <td>${utils.money(p.money)}</td>
              </tr>` + rows;
    }.bind(this));
    this.board.innerHTML = `<table>${rows}</table>`;
  }
}

export default PlayerBoard;
