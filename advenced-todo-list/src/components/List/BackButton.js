import React from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span``;

export default function BackButton({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <FiArrowLeft />
      <Text>Targets</Text>
    </Wrapper>
  );
}
