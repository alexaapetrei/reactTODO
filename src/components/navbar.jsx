import react from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Edit } from "@mui/icons-material";

function NavBar(props) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Edit />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI API app
          </Typography>
          {props.children}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
