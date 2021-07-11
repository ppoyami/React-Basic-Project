import React from 'react';
import styled from 'styled-components';

// MEMO: 컴포넌트 속성 깔끔하게 전달하기
export default function Input({ icon, ...other }) {
  return (
    <InputWrapper>
      <StyledInput {...other} />
      <IconWrapper>{icon}</IconWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  height: 5rem;
  width: 100%;
  outline: none;

  padding-left: 6rem;
  border-radius: 5px;
  font-size: 2rem;

  transition: 0.3s;

  &:focus + i {
    color: tomato;
  }

  &:focus {
    border: 1px solid tomato;
    box-shadow: 0 0 5px tomato;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;
const IconWrapper = styled.i`
  position: absolute;
  left: 0;
  top: 0;
  width: 5rem;
  height: 5rem;

  text-align: center;
  line-height: 5rem;

  font-size: 2rem;

  color: #444;
  transition: 0.3s;

  border-radius: 5px 0 0 5px;
`;
