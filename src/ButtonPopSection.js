import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonSection = styled.section`
  pointer-events: none;
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 15;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      position: fixed;
      cursor: pointer;
      label {
        display: flex;
        justify-content: center;
        height: 100px;
        width: 100px;
        font-weight: 700;
        font-size: 25px;
        padding-top: 4px;
        overflow: hidden;
        color: white;
      }
    }
    .pop {
      display: none;
      pointer-events: all;
    }
    .profile {
      @keyframes profilepop {
        100% {
          transform: translate(350px, 200px) scale(1) rotate(450deg);
          opacity: 1;
        }
        0% {
          transform: translate(0px, 0px) scale(0);
          opacity: 0;
        }
      }
      animation: profilepop 700ms ease-in-out forwards;
    }
    .concept {
      @keyframes conceptpop {
        100% {
          transform: translate(-300px, -200px) scale(1) rotate(550deg);
          opacity: 1;
        }
        0% {
          transform: translate(0px, 0px) scale(0);
          opacity: 0;
        }
      }
      animation: conceptpop 700ms ease-in-out forwards;
    }
    .project {
      @keyframes projectpop {
        100% {
          transform: translate(300px, -200px) scale(1) rotate(300deg);
          opacity: 1;
        }
        0% {
          transform: translate(0px, 0px) scale(0);
          opacity: 0;
        }
      }
      animation: projectpop 700ms ease-in-out forwards;
    }
    .terminal {
      @keyframes terminalpop {
        100% {
          transform: translate(-350px, 200px) scale(1) rotate(400deg);
          opacity: 1;
        }
        0% {
          transform: translate(0px, 0px) scale(0);
          opacity: 0;
        }
      }
      animation: terminalpop 700ms ease-in-out forwards;
    }
    .clicked {
      display: flex;
    }
  }
  .sway0 {
    animation: swaying 8s infinite ease-in-out;
  }
  .sway1 {
    @keyframes swaying {
      0% {
        transform: translateX(-30px);
      }
      50% {
        transform: translateX(30px);
      }
      100% {
        transform: translateX(-30px);
      }
    }
    animation: swaying 6s infinite ease-in-out;
  }
  .sway2 {
    @keyframes swaying {
      0% {
        transform: translateX(-30px);
      }
      50% {
        transform: translateX(30px);
      }
      100% {
        transform: translateX(-30px);
      }
    }
    animation: swaying 7s infinite ease-in-out;
  }
  .sway3 {
    @keyframes swaying {
      0% {
        transform: translateX(-30px);
      }
      50% {
        transform: translateX(30px);
      }
      100% {
        transform: translateX(-30px);
      }
    }
    animation: swaying 5s infinite ease-in-out;
  }
  .color0 {
    background-color: #94a684;
  }
  .color1 {
    background-color: #e4e4d0;
  }
  .color2 {
    background-color: #aec3ae;
  }
  .color3 {
    background-color: #5a3b3b;
  }
`;

export default function ButtonPopSection({ pathArr, buttonPop }) {
  const navigate = useNavigate();
  return (
    <ButtonSection>
      {pathArr.map((x, idx) => {
        return (
          <div className={`sway${idx}`}>
            <span
              className={`${x} pop ${
                buttonPop[idx] ? "clicked" : "notClicked"
              } color${idx}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${x}`);
              }}
              key={idx}
            >
              <label>{`${x}`}</label>
            </span>
          </div>
        );
      })}
    </ButtonSection>
  );
}
