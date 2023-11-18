import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Edit />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI API app
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
