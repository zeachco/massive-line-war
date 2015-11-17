var firebasePlayers = require('database').child('players');

class Player {
  constructor(id) {
    this.id = id;
    firebasePlayers.child(id).on('value', this.init.bind(this));
  }
  init() {
    console.log(arguments);
  }
}

export default Player;
