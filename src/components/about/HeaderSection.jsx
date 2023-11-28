import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/Logo.png';

const HeaderSection = () => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center', px: { xs: 3, sm: 6, md: 8 } }}>
      <Box component="img" src={logo} alt="EcoTube Logo" sx={{ width: 120, height: 'auto', mb: 2 }} />
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        ECOTUBE
      </Typography>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
        WHERE SUSTAINABILITY MEETS STREAMING
      </Typography>
    </Box>
  );
};

export default HeaderSection;
