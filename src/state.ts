import { observable } from "mobx";
import { Viewport } from "./class/viewport";
import { Renderer } from "./class/renderer";
import { Grid } from "./class/grid";
import { Path } from "./class/path";
import { BaseObject } from "./types/base";
import { Player } from "./class/player";
import { CollisionController } from "./class/collision-controller";
import { WaveManager } from "./class/wave-manager";

const GW = 600;
const GH = 600;

const defaultState = {
  objects: [] as BaseObject[],
  viewport: new Viewport(GW, GH),
  renderer: null as Renderer | null,
  grid: null as Grid | null,
  path: null as Path | null,
  localPlayer: new Player(),
  collisionController: null as CollisionController | null,
  waveManager: null as WaveManager | null,
  init() {
    this.viewport.attach(document.body);
    this.renderer = new Renderer(this.viewport);
    this.grid = new Grid(GW / 20, GH / 20);
    this.renderer.start();

    this.path = new Path();
    this.path.add(200, 30);
    this.path.add(200, 150);
    this.path.add(100, 150);
    this.path.add(100, 450);
    this.path.add(400, 450);
    this.path.add(400, 600);

    this.collisionController = new CollisionController();
    this.waveManager = new WaveManager();
  },
};

export const state = observable(defaultState);

(window as any).state = state;
