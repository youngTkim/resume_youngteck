import { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0%);
  }

  100%{
    opacity: 1;
    transform: translateY(50%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: sticky;

  &.frame-in {
    animation: ${frameInAnimation} 2s ease-in forwards;
  }
  &.arrow {
    margin-top: 30vh;
    padding-top: 50vh;
    @keyframes arrow {
      0%,
      100% {
        transform: translateY(-20px) scale(1.1);
        opacity: 1;
      }
      50% {
        transform: translateY(0px) scale(1);
        opacity: 0;
      }
    }
    animation: arrow 2s 1s ease-in-out infinite;
  }
`;

const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return { isInViewport, ref };
};

export const ScrollAnimationContainer2 = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? "frame-in arrow" : ""}>
      {children}
    </Container>
  );
};
