import React, {useState} from 'react';
import { Box, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EcoTubeLogo from '../assets/EcoTube.png'; 
import { useNavigate } from "react-router-dom";

export default function SearchAreaHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
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
        onSubmit={onhandleSubmit}
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" sx={{ p: '10px', color:'primary.main' }}  aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
