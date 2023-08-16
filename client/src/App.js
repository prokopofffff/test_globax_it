import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

//router
import {
    Routes,
    Route
} from "react-router-dom";

import Container from '@mui/material/Container';
import React from "react";

import Dashboard from './components/Dashboard';

function App() {
  return (
    
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
          }}
      >
          <CssBaseline/>

          <Container maxWidth={false}>
              <main>
                  <Routes>
                      <Route path="" element={<Dashboard/>}/>
                  </Routes>
              </main>
          </Container>
      </Box>
);
}

export default App;
