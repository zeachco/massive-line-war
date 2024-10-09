import { Sheep } from "./sheep";
import { Wolf } from "./wolf";

const creepTimeOffset = 750;
const waveInterval = 1000 * 30;
const maps = {
  sheep: Sheep,
  wolf: Wolf,
} as const;

export class WaveManager {
  queue: string[] = new Array(5).fill("sheep");
  _nextTimer?: NodeJS.Timeout;
  constructor() {
    this.nextWave();
  }

  // fetch(snap) {
  //   var creeps = snap.val();
  //   for (var type in creeps) {
  //     var count = creeps[type];
  //     for (var i = 0; i < count; i++) {
  //       this.queue.push(type);
  //     }
  //   }
  // }

  // send(creeps, uid = app.localPlayer._auth.uid) {
  //   database.child("waves/" + uid).set(creeps);
  // }

  // spawn(creepClass) {
  //   let CreepClass = maps[creepClass]; //require('./' + type);
  //   let creep = new CreepClass();
  //   creep.spawn(200, 5);
  // }

  nextCreep() {
    if (this.queue.length === 0) {
      // this.endWave();
      return;
    }
    var [next = "sheep"] = this.queue.splice(0, 1);
    let ClassName = maps[next as keyof typeof maps];
    if (!ClassName) {
      window.console.error("Unknown creep type", next);
      return;
    }
    let creep = new ClassName();
    creep.spawn(200, 5);
    setTimeout(this.nextCreep.bind(this), creepTimeOffset);
  }

  nextWave() {
    window.console.info("next wave!", this.queue);
    this.nextCreep();
    clearTimeout(this._nextTimer);
    this._nextTimer = setTimeout(() => this.nextWave(), waveInterval);
  }

  // endWave() {
  //   this.ref.set({
  //     sheep: 1,
  //   });
  // }
}

export default WaveManager;
