// // CommitmentSection.jsx
// import React from 'react';
// import { Box, Typography, Grid, useTheme } from '@mui/material';
// import commitment from '../../assets/commitment.png';

// const CommitmentSection = () => {
//     const theme = useTheme();

//     return (
//       <Box sx={{
//         mx: '16px',
//         my: 8,
//         px: { xs: 3, sm: 6, md: 8 },
//         bgcolor: theme.palette.grey[900], // Dark grey background
//         borderRadius: 1, // Slight round edges for the outer box
//         py: 4 // Padding top and bottom for the outer box
//       }}>
//         <Grid container spacing={4} alignItems="center" justifyContent="center">
//           <Grid item xs={12} md={5}>
//             <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
//               Our Commitment
//             </Typography>
//             <Typography variant="subtitle1" sx={{ color: 'white' }}>
//               At EcoTube, we're redefining the streaming experience with our eco-conscious approach. Unlike conventional platforms, we prioritize sustainability without compromising on quality.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={7}>
//             <Box
//               component="img"
//               src={commitment}
//               alt="Eco-friendly vs Traditional Platform"
//               sx={{
//                 width: '100%',
//                 height: 'auto',
//                 maxWidth: '500px', // Set a max-width for larger screens
//                 maxHeight: { xs: '250px', md: '400px' }, // Larger max-height for medium and up sizes
//                 borderRadius: 2, // Rounded edges for the image
//                 boxShadow: 3, // Optional: adds shadow to the image
//                 mx: 'auto' // Center the image
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   };
  
//   export default CommitmentSection;


// CommitmentSection.jsx
import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import commitment from '../../assets/commitment.png';

const CommitmentSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex', // Enable flexbox
        alignItems: 'center', // Vertically center the content
        justifyContent: 'center', // Horizontally center the content
        height: '100%', // Take full height of the parent
        my: 8,
        px: { xs: 3, sm: 6, md: 8 },
        bgcolor: theme.palette.grey[900],
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200, // Maximum width of the centered content
          width: '100%', // Take up all available width
        
          borderRadius: 2,
          boxShadow: 3, // Optional shadow for depth
          p: 3, // Padding inside the content box
          border: '1px solid', // Border around the content box
          borderColor: 'primary.main', // Color of the border
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
