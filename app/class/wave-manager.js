import Sheep from './sheep';
import Wolf from './wolf';

class WaveManager {
  constructor() {

  }

  startNextWave() {
    for (var i = 0; i < 500; i++) {
      setTimeout(function () {
        if (Math.random() > 0.6) {
          app.sheep = new Sheep();
          app.sheep.spawn(200, 5);
        }

        if (Math.random() > 0.9) {
          app.wolf = new Wolf();
          app.wolf.spawn(100, 5);
        }
      }, i * 200);
    }
  }
}

export default WaveManager;
