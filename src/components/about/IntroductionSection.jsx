import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import logoOnly from '../../assets/LogoOnly.webp';
const IntroductionSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mx: 8,
        my: 8,
        p: { xs: 3, sm: 6, md: 8 },
        textAlign: 'center',
        background: theme.palette.grey[900],
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
        color: theme.palette.getContrastText(theme.palette.grey[900])
      }}
    >
      <Box component="img" src={logoOnly} alt="EcoTube Logo" sx={{ width: 160, height: 'auto', mb: 1 }} />
      
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 2, mb: 3 }}>
        Where Sustainability Meets Streaming
      </Typography>
      <Typography variant="subtitle1" sx={{ maxWidth: '650px', mx: 'auto' }}>
        The internet consumes more electricity than the entire United Kingdom. Every search query, video stream, and page load contributes to a digital carbon footprint that's affecting our planet. Introducing <strong>EcoTube</strong>—the platform that combines video streaming with eco-consciousness, because Earth deserves better.
      </Typography>
    </Box>
  );
};

export default IntroductionSection;
