import { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

interface ChildrenProps {
  children: React.ReactNode;
}

type Mode = 'light' | 'dark';

export const ColorModeProvider :React.FC<ChildrenProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
