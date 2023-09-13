import styled from "styled-components";

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .box {
    position: fixed;
    width: 100%;
    height: 650px;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, 0.2);
    background: lighten(#f0f4c3, 10%);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .wave {
    opacity: 0.4;
    position: absolute;
    top: 3%;
    left: 50%;
    background: #0af;
    width: 1000px;
    height: 1000px;
    margin-left: -500px;
    margin-top: -500px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 3000ms infinite linear;
  }

  .wave.-three {
    animation: drift 5000ms infinite linear;
  }

  .wave.-two {
    animation: drift 7000ms infinite linear;
    opacity: 0.1;
    background: yellow;
  }

  .box:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    line-height: 300px;
    text-align: center;
    transform: translate3d(0, 0, 0);
    color: white;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.4em;
    font-size: 24px;
    text-shadow: 0 1px 0 rgba(black, 0.1);
    text-indent: 0.3em;
  }
  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

function BackgroundSection() {
  return (
    <AnimationWrapper>
      <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
        <div class="title">CANVAS Animation</div>
      </div>
    </AnimationWrapper>
  );
}

export default BackgroundSection;
