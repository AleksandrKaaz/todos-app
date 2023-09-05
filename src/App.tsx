import React from 'react';
import './App.css';
import Todos from './presentation/components/TodosWrapper';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
    >
      <Todos />
    </Box>
  );
}

export default App;
