// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/common/theme';
import HomePage from '../src/pages/HomePage'; // Import the HomePage component
import Layout from '../src/common/Layout'; // Import the Layout component

function App() {
  return (
    // Apply the custom theme using ThemeProvider
    <ThemeProvider theme={theme}>
      {/* CssBaseline to normalize CSS across browsers */}
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {/* Define a route for the HomePage */}
            <Route path="/" element={<HomePage />} />
            
            {/* Add more routes here as your application grows */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
