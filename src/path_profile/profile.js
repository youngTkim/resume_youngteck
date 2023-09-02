import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100vw;
  height: 200vh;
  margin-top: 56px;
  section {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0 120px 0 120px;
    background-color: #f8f8f8;
    border-radius: 5px;
    .flag {
      position: absolute;
      margin-top: 40px;
      font-family: "Gowun Batang", serif;
      font-size: 60px;
      font-weight: 700;
    }
    .in {
      @keyframes flagIn {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      animation: flagIn 0.4s ease 2.4s 1 normal backwards running;
    }
    .out {
      @keyframes flagout {
        0% {
          opacity: 1;
          transform: translateY(0px);
        }
        100% {
          opacity: 0;
          transform: translateY(-40px);
        }
      }
      animation: flagout 0.4s ease 2s 1 normal forwards running;
    }
    .introduction {
      display: flex;
      flex-direction: column;
      margin-top: 130px;
      .part1 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        p {
          font-weight: 400;
          margin-bottom: 4px;
        }
      }
      .part2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        h1 {
          font-weight: 400;
          margin-bottom: 4px;
        }
      }
    }
  }

  p:hover {
    border-radius: 5px;
    background-color: white;
  }
  h1:hover {
    border-radius: 5px;
    background-color: white;
  }
  .none {
    display: none;
  }
`;

export default function Profile() {
  const [flag, setFlag] = useState(false);

  return (
    <ProfileWrapper>
      <section>
        <span className={`flag out`}>김영택</span>
        <span className={`flag in`}>FRONTEND ENGINEER</span>
        <article className="introduction">
          <div className="part1">
            <p>
              저는 최근까지 프로젝트에서 Next.js를 사용하여 React 기반의 웹
              애플리케이션을 개발하였습니다.
            </p>
            <p>
              Next.js의 장점, 서버 사이드 렌더링과 정적 사이트 생성을 지원하는
              점을 통해서 웹 애플리케이션의 성능을 향상시킬 수 있었고,
            </p>
            <p>
              Tailwind CSS, 커스터마이징 가능한 클래스 기반 스타일링 시스템으로,
              개발 생산성을 향상시킬 수 있었습니다.
            </p>
            <p>
              또한, TypeScript를 도입하여 정적 타입 검사를 통해 코드 품질을
              향상시키고 버그를 사전에 방지하고자 하였습니다.
            </p>
          </div>
          <div className="part2 gowun">
            <h1>
              [기술 스택] next.js, typescript, tailwind.css, react, html5, css,
              javascript, aws ec2, aws s3
            </h1>
            <h1>[블로그주소] https://roger097.tistory.com</h1>
          </div>
        </article>
      </section>
    </ProfileWrapper>
  );
}
/* .alternate_IN {
      @keyframes changingIN {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      animation: changingIN 0.4s ease 1s 1 normal none running;
    }
    .alternate_OUT {
      @keyframes changingOUT {
        0% {
          opacity: 0;
          transform: translateY(0px);
        }
        100% {
          opacity: 1;
          transform: translateY(40px);
        }
      }
      animation: changingOUT 0.4s ease 0s 1 normal none running;
    } */
