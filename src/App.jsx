import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TheList from './components/theList';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const theAPI = React.createContext()

function App() {
  return (  
    <>
      <theAPI.Provider value="https://tame-culottes-lamb.cyclic.app/api/">
      <CssBaseline enableColorScheme />
      <AppBar position="relative">
        <Toolbar>
          <Edit />
          <Typography variant="h6">
            An API based ToDo app with MateriaUI
          </Typography>
        </Toolbar>
       </AppBar>
      
      <main>
         
        <TheList />  
      
      </main>
      </theAPI.Provider>
    </>
  );
}

export default App;
