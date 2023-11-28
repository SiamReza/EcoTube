import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/Logo.webp';
import { useNavigate } from 'react-router-dom';

export default function NavBarHome() {

    const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{backgroundColor: "#111111"}}>
      <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="EcoTube Logo" style={{ maxHeight: '60px', cursor: 'pointer' }} onClick={()=>navigate('/')} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" onClick={()=> navigate('/about')}>About</Button>
          <Button color="inherit">Settings</Button>
          <Button color="inherit" variant="outlined">Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
