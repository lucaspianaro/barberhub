// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuthState';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, CircularProgress, Box } from '@mui/material';
import theme from './common/theme';
import HomePage from './pages/HomePage'; 
import Login from './pages/Login';
import Appointments from './pages/Appointments';
import Layout from './common/Layout';

// Component for authenticated routes
function AuthenticatedApp() {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Show a loading indicator while the authentication state is being checked
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!currentUser ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/appointments"
          element={
            currentUser ? (
              <Appointments />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
        {/* Add more routes here as your application grows */}
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <AuthenticatedApp />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
