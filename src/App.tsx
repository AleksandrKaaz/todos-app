import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Todos from './components/todos/TodosWrapper';

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
