import styled, { keyframes } from "styled-components";
import { ReactComponent as Mainbook } from "./Image/mainbook.svg";
import Book from "./Image/book.png";

const wave = keyframes`
  0% {
    transform: scale(0);
    background: rgb(111, 39, 190);
    opacity: 1;
  }
  100% {
    background: rgb(111, 39, 190);
    transform: scale(8.0);
    opacity: 0;
  }
`;
const Waves = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  &:before,
  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    margin-left: -12px;
    margin-top: -12px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: ${wave} 1s 2 normal linear;
  }

  &:after {
    pointer-events: none;
    opacity: 0;
    animation: ${wave} 1s 0.5s 2 normal linear;
  }
`;

const Logo = styled.div`
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    transform: rotate(120deg);
  }
  .notClicked {
    @keyframes zoomInout {
      0%,
      100% {
        width: 225px;
        height: 225px;
        opacity: 0.6;
      }
      50% {
        width: 275px;
        height: 275px;

        opacity: 1;
      }
    }
    animation: zoomInout 3s ease-in-out infinite normal none running;
  }
  .clicked {
    @keyframes zoomInout {
      100% {
        width: 225px;
        height: 225px;
        opacity: 0.6;
      }
      50% {
        width: 315px;
        height: 315px;

        opacity: 1;
      }
      0% {
        width: 225px;
        height: 225px;
        opacity: 0.6;
      }
    }
    animation: zoomInout 310ms ease-in-out infinite normal none running;
  }
`;

export default function LogoWaveSection({
  bookOnClick,
  logoKey,
  isBookClicked,
}) {
  return (
    <Logo>
      <Waves key={logoKey} />
      <div key={logoKey}>
        <img
          src={Book}
          className={`${isBookClicked ? "clicked" : "notClicked"}`}
          onClick={bookOnClick}
        />
      </div>
    </Logo>
  );
}
