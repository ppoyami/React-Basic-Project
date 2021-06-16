import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

// MEMO: styled-components 로 애니메이션 정의하기
const SlideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: .1;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const SlideUp = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-100%);
    opacity: .1;
  }
`;

const Progress = keyframes`
  0 {
    width: 0%;
    opacity: .8;
  }
  50% {
    width: 95%;
    opacity: .4;
  }
  100% {
    width: 95%;
    opacity: 0;
  }
`;
// MEMO: 속성에 따라 조건부 css(애니메이션) 적용하기
const DialogBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #38d9a9;
  padding: 1rem;
  box-sizing: border-box;

  animation-name: ${SlideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  ${({ invisible }) =>
    invisible &&
    css`
      animation-name: ${SlideUp};
    `}

  span:first-of-type {
    color: white;
    font-size: 1.3rem;
  }
`;

const CloseButton = styled.span`
  box-sizing: border-box;
  font-size: 2rem;
  font-weight: bold;
  color: #364fc7;
  margin-left: 10px;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  height: 5px;
  background: white;
  border-radius: 10rem;

  position: absolute;
  bottom: 20px;

  /* animation */
  width: 0%;
  animation-duration: 1000ms;
  animation-delay: 500ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  ${({ dialog }) =>
    dialog &&
    css`
      animation-name: ${Progress};
    `}
`;
// MEMO: 컴포넌트 내부 상태 값으로 언마운트를 지연시키기
function Dialog({ dialog, setDialog }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!dialog) {
      // 사라질 때, -> 1. 조건부 css 적용이 된다.
      setAnimate(true); // 2. 지연 시키는 역할을 하는 상태 값을 true -> 리렌더링(사라지는 애니메이션이 진행되고)
      setTimeout(() => setAnimate(false), 500); // false는(null을 리턴) 500ms 이후에 콜백이 실행 된다. (정말로 언마운트 됨)
    }
    if (dialog) {
      // 마운트 될 때, 자동적으로 1250ms 이후 사라집니다.
      setTimeout(() => setDialog(false), 1250);
    }
  }, [dialog, setDialog]);

  const closeDialog = () => {
    setDialog(false);
  };

  if (!dialog && !animate) return null;
  return (
    <DialogBox invisible={!dialog}>
      <span>제출되었습니다.</span>
      <CloseButton onClick={closeDialog}>✓</CloseButton>
      <ProgressBar dialog={dialog} />
    </DialogBox>
  );
}

export default Dialog;
