import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AppBarWithDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
      setOpenDrawer(true);
    };
  
    const handleDrawerClose = () => {
      setOpenDrawer(false);
    };
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <IconButton color="inherit">
            </IconButton>
          </Toolbar>    
        </AppBar>     
      </div>
    );
}
