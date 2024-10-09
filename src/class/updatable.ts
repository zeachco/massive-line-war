import { state } from "../state";

export abstract class Updatable {
  constructor() {
    state.objects.push(this);
  }
  update() {
    throw new Error("Method not implemented.");
  }
  remove() {
    state.objects = state.objects.filter((o) => o !== this);
  }
}
