import { Text } from "./Text.js";
import { BounceString } from "./BounceStrings.js";

export class Visual {
  constructor() {
    this.Text = new Text();
    this.strings = [];

    this.mouse = {
      x: 0,
      y: 56,
      radius: 80,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }
  show(stageWidth, stageHeight) {
    this.pos = this.Text.setText("YOUNGTECK", 4, stageWidth, stageHeight);
    this.strings = [];
    for (let i = 0; i < this.pos.outline.length; i++) {
      this.strings[i] = new BounceString({
        x1: this.pos.outline[i].x,
        y1: this.pos.outline[i].minY,
        x2: this.pos.outline[i].x,
        y2: this.pos.outline[i].maxY,
      });
    }
  }
  animate(ctx) {
    for (let i = 0; i < this.strings.length; i++) {
      this.strings[i].animate(ctx, this.mouse.x, this.mouse.y);
    }
  }
  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY - 56;
  }
}
