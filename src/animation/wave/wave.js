import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    // 각 wave의 index값
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // 끝 포인트 움직이지 않으므로 중간의 점 개수로 나누면 각 점들이 배치될 거리를 일정하게 나눌 수 있음
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(
        // this.index값은 wave 내에서 일정하게 유지되는 값으로 각 웨이브마다 시작되는 cur값에 영향을 줘서 웨이브가 시작되는 부분을 교차시킴
        // i값은 point마다 변동되는 값으로 포인트마다의 sin값을 일정하게 변화시켜 파고의 패턴을 그린다.
        this.index + i,
        this.pointGap * i,
        this.centerY
      );
      this.points[i] = point;
    }
  }
  draw(ctx) {
    ctx.beginPath();
    // wavegroup에서 설정해둔 컬러 값을 배치한다.
    ctx.fillStyle = this.color;

    // 0번째 index의 x값은 0 y는 centerY의 값
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      // update하는 건 가운데 점들만 하지만 곡선이 그려지는 시작점 끝점은 똑같이 그려진다
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }
      let cx = (prevX + this.points[i].x) / 2;
      let cy = (prevY + this.points[i].y) / 2;
      // ctx.beginPath();
      // ctx.arc(prevX, prevY, 15, 0, Math.PI * 2);
      // ctx.fill();
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
// quadraticCurveTo
