export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    // sin값의 변동량 => 파고의 속도
    this.speed = 0.05;
    // sin값이 Math.PI() 즉 3.14를 기준으로 변동하고 중간에 사인 값이 +,-의 정점 값에 있을 때는 변동량이 적기 때문에 부자연스러운 파고가 생기므로
    // 포인트가 배치될 때에 배치되는 sin이 배치되는 값이 1.7정점 구간을 통과해서 포인트가 생성되는 것이 좋다.
    this.cur = index;
    this.index = index;
    // 파고의 진폭
    this.max = Math.random() * 50 + 100;
  }
  update() {
    this.cur += this.speed;
    // this.fixedY는 clientHeight/2 즉 y의 center값이고, max에 sin값을 넣으면은 point의 y좌표값이 centerY기준으로 +-값을 오가면서 파고를 생성한다.
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
