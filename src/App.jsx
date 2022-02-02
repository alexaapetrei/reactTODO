import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import TheList from './components/theList';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBar from "./components/navbar"

export const theAPI = React.createContext()
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  // the api is live on :
  // https://tame-culottes-lamb.cyclic.app/api/
  // http://localhost:8491/api/
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (  
    <>
      <theAPI.Provider value="https://tame-culottes-lamb.cyclic.app/api/">
      <CssBaseline enableColorScheme />

        <NavBar>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </NavBar>
   
        <TheList />  
      
      </theAPI.Provider>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
