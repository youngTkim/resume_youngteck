import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Point } from "./postit/point";
import { Dialog } from "./postit/dialog";

import "./reset.css";

const ConceptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  padding: none;
  margin-top: 56px;
  canvas {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

function Drag() {
  const { pathname } = useLocation();
  const canvasRef = useRef(null);
  class Postit {
    constructor() {
      this.canvas = canvasRef.current;
      this.ctx = this.canvas.getContext("2d");
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight;
      this.mousePos = new Point();
      this.curItem = null;

      // 각 물체의 속성을 담고 있는 Dialog들을 담는 곳
      this.items = [];
      // Dialog의 숫자
      this.total = 3;
      // total 수만큼 Dialog를 생성
      for (let i = 0; i < this.total; i++) {
        this.items[i] = new Dialog();
      }
      // 포인터를 누르고 움직이고 뗄 때 구현될 애니메이션을 위해 event연결
      document.addEventListener("pointerdown", this.onDown.bind(this), false);
      document.addEventListener("pointermove", this.onMove.bind(this), false);
      document.addEventListener("pointerup", this.onUp.bind(this), false);

      // 애니메이팅 시작
      requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
      const text = "DRAG!";
      const font = "200px serif";
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      this.ctx.fillStyle = "aliceblue";
      this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
      this.ctx.fillStyle = "black";
      this.ctx.font = font;
      this.ctx.textAlign = "left";
      this.ctx.textBaseline = "top";
      let measure = this.ctx.measureText(text);
      this.ctx.fillText(
        text,
        (this.stageWidth - measure.width) / 2,
        (this.stageHeight - measure.fontBoundingBoxDescent) / 2
      );

      for (let i = 0; i < this.items.length; i++) {
        this.items[i].animate(this.ctx);
      }

      if (this.curItem) {
        this.ctx.beginPath();
        this.ctx.fillStyle = `#ff4338`;
        this.ctx.strokeStyle = `#ff4338`;

        this.ctx.beginPath();
        this.ctx.arc(this.mousePos.x, this.mousePos.y, 8, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(
          this.curItem.centerPos.x,
          this.curItem.centerPos.y,
          8,
          0,
          Math.PI * 2
        );
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.mousePos.x, this.mousePos.y);
        this.ctx.lineTo(this.curItem.centerPos.x, this.curItem.centerPos.y);
        this.ctx.stroke();

        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 3;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = `rgba(0,0,0,0.5)`;

        this.ctx.lineWidth = 2;
      }
      window.requestAnimationFrame(this.animate.bind(this));
    }
    onDown(e) {
      // point 인스턴스의 x, y 좌표를 이벤트가 일어난 좌표로 설정
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY - 56;

      // shift보다 push의 시간복잡도가 낮으므로 push를 통해 this.items배열의 가장 마지막 원소를 splice해서 push를 한다.
      // i는 마지막 인덱스부터 0까지 순회하기 때문에 클릭된 Dialog는 화면 가장 먼저 앞으로 오게 되고,
      // break를 통해서 클릭된 하나의 item을 컨트롤하게 된다.
      for (let i = this.items.length - 1; i >= 0; i--) {
        // 렌더링할 때 this.items배열을 0부터 length-1까지 순회하기 때문에 canvas에서 가장 앞쪽처럼 보이는 Dialog는 가장 마지막 원소다.
        // 그래서 거꾸로 배열을 순회하고 마우스 클릭을 했을 때의 x,y 좌표를 down메소드를 통해 지정된 item이 있나 확인 가장 첫번째로 확인되는 curItem으로 지정한다.
        const item = this.items[i].down(this.mousePos.clone());
        if (item) {
          this.curItem = item;
          const index = this.items.indexOf(item);
          this.items.push(this.items.splice(index, 1)[0]);
          break;
        }
      }
    }
    onMove(e) {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY - 56;
      this.items[this.items.length - 1].move(this.mousePos.clone());
    }
    // for (let i = 0; i < this.items.length; i++) {
    //   this.items[i].move(this.mousePos.clone());
    // }
    onUp() {
      this.curItem = null;

      this.items[this.items.length - 1].up();
    }
  }

  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    if (pathname === "/drag") {
      new Postit();
    } else {
      canvasRef.current = null;
    }
  }, [pathname]);

  return (
    <ConceptWrapper>
      <canvas ref={canvasRef} />
    </ConceptWrapper>
  );
}

export default Drag;
