import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TheList from './components/theList';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

function App() {
  return (  
    <>
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
    </>
  );
}

export default App;
