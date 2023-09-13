import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

const Modal = styled.div`
  display: flex;
  width: 280px;
  height: 100px;
  z-index: 100;
  left: 80%;
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
const Sidebar = styled.div`
  display: flex;
  width: 20vw;
  height: 50vh;
  z-index: 101;
  right: 0%;
  padding-top: 1rem;
  color: white;
  position: fixed;
  section {
    display: flex;
    padding: 4px;
    flex-direction: column;
    background-color: #f8f8f8;

    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 4px;
    box-shadow: 0 4px 2px hsla(0, 0%, 0%, 0.1), 0 4px 4px hsla(0, 0%, 0%, 0.1),
      0 4px 8px hsla(0, 0%, 0%, 0.1);
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      /* border: 2px solid black; */
      border-radius: 5px;
      li {
        border: 2px solid #f8f8f8;
        padding: 3px;
        padding-top: 0.35rem;
        padding-left: 1rem;
        color: black;
        margin: 1px;
        flex: 1;
        border-radius: 3px;
        font-family: "Gowun Batang", serif;
        font-size: 20px;
        font-weight: 600;
      }
      li:hover {
        color: whitesmoke;
        border: 2px solid #213555;
        background-color: #4f709c;
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

export default function Header() {
  const [isModal, setIsModal] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const navigate = useNavigate();

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
              setIsSidebar(!isSidebar);
            }}
          >
            <MenuOpenIcon className={`${isSidebar ? "none" : ""}`} />
            <UnfoldLessIcon className={`${isSidebar ? "" : "none"}`} />
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
      <Sidebar>
        <section className={`${isSidebar ? "" : "none noneEvent"}`}>
          <ul>
            <li
              onClick={() => {
                navigate("/profile");
              }}
            >
              PROFILE
            </li>
            <li
              onClick={() => {
                navigate("/project");
              }}
            >
              PROJECT
            </li>
            <li
              onClick={() => {
                navigate("/drag");
              }}
            >
              DRAG Animation
            </li>
            <li
              onClick={() => {
                navigate("/scratch");
              }}
            >
              SCRATCH Animation
            </li>
          </ul>
        </section>
      </Sidebar>
    </>
  );
}
