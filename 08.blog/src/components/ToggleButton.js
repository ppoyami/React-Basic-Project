import React from 'react';
import styled from 'styled-components';

import { useToggleContext } from '../context/ThemeProvider';

const Button = styled.button`
  position: absolute;
  right: 2rem;
  padding: 1rem;
  font-size: 3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function ToggleButton() {
  const [theme, toggleTheme] = useToggleContext();
  return (
    <Button onClick={toggleTheme}>{theme === 'dark' ? '🌕 ' : '🌞'}</Button>
  );
}
