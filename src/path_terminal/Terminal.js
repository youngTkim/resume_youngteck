import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WebFont from "webfontloader";

import { Text } from "./Text";

const TerminalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: none;
  margin-top: 56px;
  canvas {
    left: 0%;
    top: 0%;
  }
`;

function Terminal() {
  let { pathname } = useLocation();
  const canvasRef4 = useRef(null);
  class StringText {
    constructor() {
      this.canvas = canvasRef4.current;
      this.ctx = this.canvas.getContext("2d");
      if (WebFont) {
        console.log(WebFont.load);
      }
      WebFont.load({
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
        fontactive: () => {
          // this.text = new Text(this.ctx);
          // this.text.setText("A", 2);
        },
      });
    }
  }
  useEffect(() => {
    if (pathname === "/terminal") {
      canvasRef4.current.width = window.innerWidth;
      canvasRef4.current.height = window.innerHeight;
      new StringText();
    }
  }, [pathname]);
  return (
    <TerminalWrapper>
      <canvas ref={canvasRef4}></canvas>
    </TerminalWrapper>
  );
}

export default Terminal;
