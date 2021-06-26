import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.span``;

export default function BackButton() {
  return (
    <Wrapper>
      <FiArrowLeft />
      <Text>Targets</Text>
    </Wrapper>
  );
}
