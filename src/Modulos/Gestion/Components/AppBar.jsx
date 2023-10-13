import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { ListItemButton } from '@mui/material';
import {useNavigate } from 'react-router';

export const MenuAppBar = ({ appBarOptions }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const Navigate=useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Object.entries(appBarOptions).map(([key, value]) => (
          <ListItem key={key} disablePadding>
              <ListItemButton onClick={()=>Navigate(value)}>
                <ListItemText primary={key} />
                
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: 'fixed', top: '60px', left: 0, width: '100%', backgroundColor: '#1876d2', zIndex: 100, padding: '10px' }}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" sx={{ color: 'white' }} />
      </Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
};
