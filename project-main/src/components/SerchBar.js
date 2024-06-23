import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" m={2} >
      <TextField sx={{ marginLeft: 3, backgroundColor: 'gray', fontWeight: 'bold', color: 'black', textAlign: 'center' }}
        fullWidth
        variant="outlined"
        label="Enter searching food"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="contained" color="success" size="large" onClick={handleSearch} sx={{ marginLeft: 3, backgroundColor: 'gray', fontWeight: 'bold', color: 'black' }} >
        Find
      </Button>
    </Box>
  );
};

export default SearchBar;
