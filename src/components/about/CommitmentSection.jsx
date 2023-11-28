import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import commitment from '../../assets/commitment.webp';

const CommitmentSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        my: 8,
        px: { xs: 3, sm: 6, md: 8 },
        bgcolor: theme.palette.grey[900],
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: '100%',
        
          borderRadius: 2,
          boxShadow: 3,
          p: 3, 
          border: '1px solid',
          borderColor: 'primary.main',
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
              Our Commitment
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
              At EcoTube, we're not just reimagining the streaming experience; we're crafting it with the utmost respect for our environment. We believe that technology and ecology can coexist in harmony, which is why our platform is built on the principles of sustainability from the ground up. Join us on our journey to a greener future, where every stream contributes positively to the well-being of our planet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              // loading="lazy"
              src={commitment}
              alt="Eco-friendly vs Traditional Platform"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '500px',
                maxHeight: { xs: '250px', md: '400px' },
                borderRadius: 2,
                mx: 'auto'
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommitmentSection;
