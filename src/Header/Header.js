import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import StayCurrentLandscapeIcon from "@mui/icons-material/StayCurrentLandscape";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const Modal = styled.div`
  display: flex;
  width: 280px;
  height: 100px;
  z-index: 100;
  left: 80vw;
  padding-top: 1rem;
  color: white;
  position: fixed;
  section {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 4px;
    box-shadow: 0 4px 2px hsla(0, 0%, 0%, 0.1), 0 4px 4px hsla(0, 0%, 0%, 0.1),
      0 4px 8px hsla(0, 0%, 0%, 0.1);
    span {
      margin: 3px;
      display: flex;
      color: black;
      p {
        margin-top: 3px;
        text-align: center;
      }
    }
  }
  .noneEvent {
    pointer-events: none;
  }
  .none {
    display: none;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9f9;
  border-bottom: 2px solid #b0c0de;
  .homenav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 70px;
    margin: 30px;
    height: 100%;
  }
  .homenav:hover {
    color: #f8f9f9;
    background: rgba(0, 0, 0, 0.4);
  }
  .optionnav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 200px;
    list-style: none;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      margin: 0 2px 0 2px;
    }
    span:hover {
      color: #f8f9f9;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .none {
    display: none;
  }
`;

export default function Header({ screenButton, setScreenButton }) {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  function toggle() {
    setScreenButton(!screenButton);
    if (!screenButton) {
    } else if (screenButton) {
    }
  }
  function onModal() {
    setIsModal(!isModal);
  }
  function offModal() {
    setIsModal(false);
  }
  return (
    <>
      <HeaderWrapper>
        <nav
          className="homenav"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <HomeIcon />
        </nav>
        <nav className="optionnav">
          <span onClick={onModal}>
            <PermPhoneMsgIcon />
          </span>
          <span
            onClick={() => {
              toggle();
            }}
          >
            <StayCurrentLandscapeIcon
              className={`${screenButton ? "none" : ""}`}
            />
            <FullscreenExitIcon className={`${screenButton ? "" : "none"}`} />
          </span>
        </nav>
      </HeaderWrapper>
      <Modal>
        <section className={`${isModal ? "" : "none"}`} onMouseOut={offModal}>
          <span className="noneEvent">
            <GitHubIcon />
            <p>:https://github.com/youngTkim/</p>
          </span>
          <span className="noneEvent">
            <PhoneCallbackIcon />
            <p>:010-9913-7673</p>
          </span>
        </section>
      </Modal>
    </>
  );
}
