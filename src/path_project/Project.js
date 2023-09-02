import styled, { keyframes } from "styled-components";
import { ScrollAnimationContainer } from "../features/ScrollAnimationContainer";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 260vh;
  padding: none;
  margin-top: 56px;

  section {
    display: flex;
    flex-direction: column;
    padding: 0 120px 86px 120px;
    background-color: #f8f8f8;
    height: 100%;
    border-radius: 5px;
    .title {
      display: flex;
      margin-top: 40px;
      font-family: "Gowun Batang", serif;
      font-weight: 700;
      div {
        display: flex;
        flex-direction: column-reverse;
        p {
          margin-bottom: 10px;
        }
      }
      label {
        font-size: 60px;
        font-weight: 700;
      }
    }
    .margin {
      margin-top: 120px;
    }
    .project {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      .part1 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        p {
          font-family: "Gowun Batang", serif;
          font-weight: 400;
          margin-bottom: 4px;
        }
        .pMargin {
          margin-top: 15px;
        }
      }
      .part2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        h1 {
          font-family: "Gowun Batang", serif;
          font-weight: 700;
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
`;

function Project() {
  return (
    <ProjectWrapper>
      <section>
        <ScrollAnimationContainer>
          <span className="title">
            <label>뉴 드림 플래너</label>
            <div>
              <p>2023.06.~2023.07.</p>
            </div>
          </span>
        </ScrollAnimationContainer>

        <ScrollAnimationContainer>
          <article className="project">
            <div className="part1">
              <p>
                {`각 유저들의 행동 사명, 주간, 월간 목표들을 설정하고, 주간, 월간
              플래닝을 통하여 사용자들의 일정과 목표를 상기시켜`}
              </p>
              <p>
                {`효율적인 목표 달성에 기여하는 어플리케이션을 만들고자 하였습니다.`}
              </p>
              <p></p>
              <p className="pMargin">{`-OAuth를 이용, Kakao와 Google 계정을 통한 로그인 기능 구현`}</p>
            </div>
            <div className="part2">
              <h1>{`[기술스택] scss, axios, next.js, typescript`}</h1>
              <h1>{`[github주소] https://github.com/youngTkim/planner.git`}</h1>
            </div>
          </article>
        </ScrollAnimationContainer>

        <ScrollAnimationContainer>
          <span className="title margin">
            <label>우리의 급여</label>
            <div>
              <p>2023.05~2023.06.</p>
            </div>
          </span>
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <article className="project">
            <div className="part1">
              <p>
                {`근로기준법이 개정되면서 법적으로 반드시 근로자들에게 급여 명세서를 발급하게 되었으므로,
              `}
              </p>
              <p>
                {`세금과 근태 기록을 모두 어플리케이션 안에서 확인해서 온라인으로 급여 명세서를 받아볼 수 있는 어플리케이션을 만들고자 하였습니다.`}
              </p>
              <p>{`또한 관리자 입장에선 근로자 유저들의 목록을 관리해 근태를 체크하여 명세서에 반영될 수 있도록 만들고자 하였습니다.`}</p>
              <p></p>
              <p className="pMargin">{`-국세청 api와 연동 사업자 등록증의 진위 확인 후 회사 정보가 등록 가능하도록 구현`}</p>
              <p className="pMargin">{`-page router 기능을 사용하여 컴포넌트들을 따로 보관하여 코드 재사용성 증가`}</p>
              <p className="pMargin">{`-각 계획별 중요도와 일정에 따라 계획 순서 로직 구현`}</p>
              <p className="pMargin">{`-삽입정렬 알고리즘으로 시간 순대로 계획 정렬 구현`}</p>
              <p className="pMargin">{`-aws 배포`}</p>
              <p className="pMargin">{`-api 설계 및 관리 `}</p>
            </div>
            <div className="part2">
              <h1>{`[기술스택] next.js, tailwind.css, typescript, html5`}</h1>
              <h1>{`[github주소] https://github.com/youngTkim/main-033-project`}</h1>
              <h1>{`[배포 주소] http://ourmainpro-33.s3-website.ap-northeast-2.amazonaws.com/`}</h1>
            </div>
          </article>
        </ScrollAnimationContainer>

        <ScrollAnimationContainer>
          <span className="title margin">
            <label>Stack Overflow</label>
            <div>
              <p>2023.04.~2023.05.</p>
            </div>
          </span>
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <article className="project">
            <div className="part1">
              <p>
                {`이 프로젝트는 Stack Overflow 메인 페이지의 기능을 카피해서 구현해보기 위해, 
              `}
              </p>
              <p>
                {` Stack Overflow의 token을 이용한 로그인, 질문CRUD, 답변 CRUD, 유저의 질문, 답변 목록을 마이 페이지에서 볼 수 있도록 구현하고,`}
              </p>
              <p>{`질문을 답변 수, 추천 수, 유저명, 태그명을 통해 검색하는 기능들을 만들고자 하였습니다. 저는 이 프로젝트의 질문, 답변 CRUD와 검색창 작업을 맡았습니다.`}</p>
              <p></p>
              <p className="pMargin">{`-서버에 데이터를 요구, 응답받을 때에 JSON으로 변환하는 과정을 생략하기 위해 axios 사용`}</p>
              <p className="pMargin">{`-서버에 이미지데이터를 저장하는 부분에 어려움이 있어 base64로 이미지를 인코딩하여 서버에 보관`}</p>
              <p className="pMargin">{`-로그인시 Response에 token을 넣기 위해 서버의 Exposed-Header에 token 설정`}</p>
              <p className="pMargin">{`-질문 검색시 조건 세분화를 위해 질문을 요건을 정규표현식으로 변환하여 react-query를 사용하여 query 자체를 변수로 라우팅`}</p>
            </div>
            <div className="part2">
              <h1>{`[기술스택] scss, axios, next.js, typescript`}</h1>
              <h1>{`[github주소] https://github.com/youngTkim/planner.git`}</h1>
            </div>
          </article>
        </ScrollAnimationContainer>
      </section>
    </ProjectWrapper>
  );
}

export default Project;
