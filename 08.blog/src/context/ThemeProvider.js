import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../global/theme';

const ThemeContext = createContext(null);
const KEY = 'theme';
const LIGHT = 'light';
const DARK = 'dark';

export default function ThemeProvider({ children }) {
  const localValue = window.localStorage.getItem(KEY) || LIGHT;
  const [theme, setTheme] = useState(localValue);
  const currentTheme = theme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledProvider theme={currentTheme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export const useToggleContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const oppositeTheme = theme === LIGHT ? DARK : LIGHT;
    window.localStorage.setItem(KEY, oppositeTheme);
    setTheme(oppositeTheme);
  };

  return [theme, toggleTheme];
};
