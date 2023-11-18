import { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBar from './components/navbar';
import TheList from './components/theList';
import { ColorModeContext } from './contexts/ColorModeContext';

function App() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <CssBaseline enableColorScheme />
      <NavBar>
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </NavBar>
      <TheList />
    </>
  );
}

export default App;
