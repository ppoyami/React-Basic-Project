import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import GlobalStyled from './GlobalStyled';

import StateDispatchProvider from './context';

const theme = {
  colors: {
    primary: '#4dabf7',
    primary_dark: '#1c7ed6',
    secondary_dark: '#e03131',
    secondary_light: '#fa5252',
    gray_light: '#f1f3f5',
    gray_dark: '#212529',
  },
};

// MEMO: theme 사용하기
const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme: { colors } }) => colors.primary};
`;

// MEMO: ThemeProvider 사용하기
export default function App() {
  const [expendible, setExpendible] = useState(false);
  return (
    <StateDispatchProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <AppBlock>
          <TodoTemplate>
            <TodoCreator
              expendible={expendible}
              onToggle={() => setExpendible(prev => !prev)}
            />
            <TodoList expendible={expendible}></TodoList>
          </TodoTemplate>
        </AppBlock>
      </ThemeProvider>
    </StateDispatchProvider>
  );
}
