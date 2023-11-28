// // SearchArea.js
// import * as React from 'react';
// import { Box, InputBase, Paper, IconButton, Typography } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import EcoTube from '../assets/EcoTube.png';

// export default function SearchAreaHome() {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//       <Box sx={{ textAlign: 'center' }}>
//       <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
//           <img src={EcoTube} alt="EcoTube Logo" style={{ maxHeight: '90px' }} /> 
//         </Box>
//         <Paper
//           component="form"
//           sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//         >
//             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//             <SearchIcon />
//           </IconButton>
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Search"
//             inputProps={{ 'aria-label': 'search' }}
//           />
          
//         </Paper>
//       </Box>
//     </Box>
//   );
// }


// SearchArea.js
import * as React from 'react';
import { Box, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EcoTubeLogo from '../assets/EcoTube.png'; // Adjust the import if the path to your logo file is different

export default function SearchAreaHome() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column', // Stack children vertically
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh'
    }}>
      <img src={EcoTubeLogo} alt="EcoTube Logo" style={{ maxHeight: '100px', marginBottom: '20px' }} />
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,borderColor: 'primary.main', borderWidth: '1.5px', borderRadius: '8px', borderStyle: 'solid'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1,  }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" sx={{ p: '10px', color:'primary.main' }}  aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
