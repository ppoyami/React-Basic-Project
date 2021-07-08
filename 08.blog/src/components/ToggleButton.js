import React from 'react';
import styled from 'styled-components';

import { useToggleContext } from '../context/ThemeProvider';

const Button = styled.button`
  position: absolute;
  right: 2rem;
  padding: 1rem 2rem;
  font-size: 2rem;
`;

export default function ToggleButton() {
  const [theme, toggleTheme] = useToggleContext();
  return (
    <Button onClick={toggleTheme}>{theme === 'dark' ? '🌕 ' : '🌞'}</Button>
  );
}
