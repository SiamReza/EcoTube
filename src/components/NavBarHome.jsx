// import * as React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import logo from '../assets/Logo.webp';
// import { useNavigate } from 'react-router-dom';

// export default function NavBarHome() {

//     const navigate = useNavigate();

//   return (
//     <AppBar position="static" sx={{backgroundColor: "#111111"}}>
//       <Toolbar>
//       <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//           <img src={logo} alt="EcoTube Logo" style={{ maxHeight: '60px', width:"199px", height:"58px", cursor: 'pointer' }} onClick={()=>navigate('/')} />
//         </Box>
//         <Box sx={{ display: 'flex' }}>
//           <Button color="inherit" onClick={()=> navigate('/about')}>About</Button>
//           <Button color="inherit">Settings</Button>
//           <Button color="inherit" variant="outlined">Signup</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }


import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/Logo.webp';
import { useNavigate } from 'react-router-dom';

export default function NavBarHome() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigationItems = (
    <>
      <Button color="inherit" sx={{color:"primary.main"}} onClick={()=> navigate('/about')}>About</Button>
      <Button color="inherit">Settings</Button>
      <Button color="inherit" variant="outlined">Signup</Button>
    </>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#111111" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="EcoTube Logo" style={{ maxHeight: '60px', width:"199px", height:"58px", cursor: 'pointer' }} onClick={()=>navigate('/')} />
        </Box>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              {navigationItems}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {navigationItems}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}