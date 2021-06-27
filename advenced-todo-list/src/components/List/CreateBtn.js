import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  color: #fff;
  background-color: ${({ theme: { colors } }) => colors.color_text};

  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;

  & > span {
    font-size: 2.5rem;
    margin-right: 3px;
  }
`;

export default function CreateBtn({ onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <span>+</span> add new
    </Wrapper>
  );
}
