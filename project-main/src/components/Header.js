import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="info" sx={{ backgroundColor: 'black', fontWeight: 'bold', color: 'white', textAlign:'center' }}>
    <Toolbar>
      <Typography variant="h5" position="mid" sx={{fontWeight: 'bold', color: 'white', textAlign:'center', marginLeft:'37%' }}>
        Recipe search by Piotr Baranowski 158097
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
