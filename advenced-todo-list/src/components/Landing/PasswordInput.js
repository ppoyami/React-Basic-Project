import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Input = styled.input`
  width: 70%;
  padding: 1rem 1.5rem;
  outline: none;
  border: 1px solid ${({ theme: { colors } }) => colors.color_primary_light};
  border-radius: 4px;

  &::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.color_primary_light};
  }
`;

export default function PasswordInput() {
  return (
    <Form>
      <Input placeholder="Enter Your Password" />
    </Form>
  );
}
