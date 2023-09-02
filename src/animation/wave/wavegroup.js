import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    // wave의 갯수
    this.totalWaves = 3;
    // wave를 구성할 포인트의 갯수
    this.totalPoints = 8;

    this.color = [
      "rgba(255,0,0,0.4)",
      "rgba(255,255,0,0.4)",
      "rgba(0,255,255,0.5)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      this.waves[i].resize(stageWidth, stageHeight);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      this.waves[i].draw(ctx);
    }
  }
}
