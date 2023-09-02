import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Header from "./Header/Header.js";
import Footer from "./footer/Footer.js";
import Profile from "./path_profile/profile.js";
import Concept from "./path_concept/Concept.js";
import Project from "./path_project/Project.js";
import Terminal from "./path_terminal/Terminal.js";

import ScrollToTop from "./features/scrollToTop.js";
import { ScrollAnimationContainer2 } from "./features/ScrollAnimationContainer2.js";

import { WaveGroup } from "./animation/wave/wavegroup.js";
import { Ball } from "./animation/bouncing/ball.js";
import BackgroundSection from "./BackgroundSection.js";
import LogoWaveSection from "./LogoWaveSection.js";
import ButtonPopSection from "./ButtonPopSection.js";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const globalStyle = createGlobalStyle`
.gowun {
  font-family: 'Gowun Batang', serif;
}
`;
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafad2;
  width: 100%;
  height: 220vh;
  padding: none;
  margin-top: 56px;
  .click {
    display: flex;
    position: sticky;
    bottom: 0%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      font-size: 100px;
      font-weight: 800;
    }
    .svg {
      width: 40px;
      height: 40px;
    }
  }
  .wave {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0%;
    .waveCanvas {
      background-color: #fafad2;
      width: 120vw;
      height: 100vh;
    }
  }
  .bouncing {
    display: flex;
    position: absolute;
    .bouncingCanvas {
      width: 100vw;
      height: 220vh;
    }
  }
`;

function App() {
  const handle = useFullScreenHandle();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);
  const [screenButton, setScreenButton] = useState(false);
  const [isBookClicked, setIsBookClicked] = useState(false);
  const pathArr = ["profile", "concept", "project", "terminal"];
  const [buttonPop, setButtonPop] = useState([false, false, false, false]);
  const [logoKey, setLogoKey] = useState(0);
  const bookOnClick = (e) => {
    setIsBookClicked(!isBookClicked);
    if (buttonPop.length <= 4) {
      setButtonPop([
        ...buttonPop.slice(0, logoKey),
        true,
        ...buttonPop.slice(logoKey + 1),
      ]);
    }
    setLogoKey(logoKey + 1);
    setTimeout(() => {
      setIsBookClicked(false);
    }, 300);
  };
  class WaveApp {
    constructor() {
      this.canvas = canvasRef2.current;
      this.ctx = this.canvas.getContext("2d");

      this.wavegroup = new WaveGroup();
      window.addEventListener("resize", this.resize.bind(this), false);
      this.resize();

      requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight;

      this.canvas.width = this.stageWidth * 2;
      this.canvas.height = this.stageHeight * 2;
      this.ctx.scale(2, 2);

      this.wavegroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      this.wavegroup.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }
  class Bouncing {
    constructor() {
      this.canvas = canvasRef3.current;
      this.ctx = this.canvas.getContext("2d");
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight * 2.2 + 56;
      this.count = 4;
      this.radius = 60;
      this.speed = 15;
      this.balls = [];

      for (let i = 0; i < this.count; i++) {
        this.balls[i] = new Ball(
          this.stageWidth,
          this.stageHeight,
          this.radius,
          (this.speed * i) / 2 + this.speed
        );
      }

      window.requestAnimationFrame(this.animate.bind(this));
    }
    animate(t) {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].draw(this.ctx, this.stageWidth, this.stageHeight);
      }
      window.requestAnimationFrame(this.animate.bind(this));
    }
  }
  useEffect(() => {
    setLogoKey(0);
    setButtonPop([false, false, false, false]);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      canvasRef3.current.width = window.innerWidth;
      canvasRef3.current.height = window.innerHeight * 2.2;
      new WaveApp();
      new Bouncing();
    }
  }, [pathname]);

  return (
    <div>
      <Header screenButton={screenButton} setScreenButton={setScreenButton} />

      <ScrollToTop />
      <Routes>
        <Route
          path="/project"
          element={
            <>
              <Project />
            </>
          }
        />
      </Routes>
      <ScrollIn key={pathname}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LogoWaveSection
                  bookOnClick={bookOnClick}
                  logoKey={logoKey}
                  isBookClicked={isBookClicked}
                />

                <ButtonPopSection pathArr={pathArr} buttonPop={buttonPop} />
                <AppWrapper>
                  <BackgroundSection />
                  <section className="click">
                    <ArrowUpwardIcon className="svg" />
                    <div>CLICK HERE!</div>
                  </section>
                  <section className="wave">
                    <canvas className="waveCanvas" ref={canvasRef2} />
                  </section>
                  <section className="bouncing">
                    <canvas
                      className="bouncingCanvas"
                      ref={canvasRef3}
                    ></canvas>
                  </section>
                </AppWrapper>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            path="/concept"
            element={
              <>
                <Concept />
              </>
            }
          />

          <Route
            path="/terminal"
            element={
              <>
                <Terminal />
                <Footer />
              </>
            }
          />
        </Routes>
      </ScrollIn>
    </div>
  );
}

export default App;

const ScrollIn = styled.div`
  @keyframes scrollIn {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    20% {
      transform: translateY(90%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  animation: 700ms ease-in normal none running scrollIn;
`;
