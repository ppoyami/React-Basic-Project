import React, { useEffect, useState } from 'react';

import styled, { css, keyframes } from 'styled-components';
import useInput from '../../hooks/useInput';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const SlideUp = keyframes`
  from {
    top: 70%;
  }

  to {
    top: 50%;
  }

`;
const SlideDown = keyframes`
  from {
    top: 50%;
    opacity: 1;
  }

  to {
    top: 70%;
    opacity: 0;
  }

`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  animation-name: ${fadeIn};
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  animation-fill-mode: forwards;

  ${({ invisible }) =>
    invisible &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  height: 30%;
  background-color: #fff;
  border-radius: 5px;
  z-index: 100;

  animation-name: ${SlideUp};
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-fill-mode: forwards;

  ${({ invisible }) =>
    invisible &&
    css`
      animation-name: ${SlideDown};
    `}
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem 2rem;
`;
const Input = styled.input`
  outline: none;
  border-color: ${({ theme: { colors } }) => colors.color_text};
  border-radius: 3px;
  padding: 1rem;
  width: 100%;
`;

const CloseBtn = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.1rem;
  color: #fff;
  text-transform: uppercase;

  border: none;
  border-radius: 5px;
  background-color: tomato;
  padding: 0.8rem 1rem;

  cursor: pointer;
`;

export default function Creator({ show, close, onCreateCollection }) {
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(show);
  const [text, onChange, setText] = useInput('');

  const onSubmit = e => {
    e.preventDefault();
    onCreateCollection(text);
    setText('');
    close();
  };

  useEffect(() => {
    // MEMO: 언마운트 전 애니메이션 적용하기
    // 문제상황: show의 초기값은 false, 처음에 무조건 지연이 발생 렌더링이 안되어야 하는데 지연효과가 발생함(잠깐 보이다가 언마운트 된다.)
    // 1. local 하게 보이는 상태라는 의미의 상태 값을 정의: 타이머 등록 이후에, 동기화가 된다.
    // 2. 렌더링이 되지 않은 초기 상태 값 : show: false, -> null
    // 3. 렌더링이 시작되는 상황 show: false -> true,  -> render();
    // IDEA: 지연 효과가 발생해야 되는 상황, show: true -> false,  true(이전 상태 값) -> false(현재 상태 값) 되는 상황을 어떻게 감지할 수 있을까?
    // MEMO: 트랜지션이 안먹는 이유: 렌더링은 css 속성이 변화하는 것이 아니다!, 렌더링이 되고 나서 이 애니메이션(keyframes)을 실행해라 라고 명시를 해야 된다.
    // * ex) true -> false, (true && !false), false -> true, (false && !true)
    if (localVisible && !show) {
      setAnimation(true);

      // 500ms이후 언마운팅(null)
      setTimeout(() => {
        setAnimation(false);
      }, 300);
    }
    setLocalVisible(show);
  }, [show, localVisible]);

  if (!localVisible && !animation) return null;

  return (
    <BackGround invisible={!show}>
      <Wrapper invisible={!show}>
        <CloseBtn onClick={close}>close</CloseBtn>
        <Form onSubmit={onSubmit}>
          <Input value={text} onChange={onChange} />
        </Form>
      </Wrapper>
    </BackGround>
  );
}
