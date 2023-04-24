import { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light' });

export const ThemeProvider = ({ chidren }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {chidren}
    </ThemeContext.Provider>
