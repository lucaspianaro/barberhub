// src/hooks/useAuthState.js
import React, { useEffect, useState, useContext, createContext } from 'react';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { CircularProgress, Box, Typography } from '@mui/material';

// Create a context for the user's authentication state
const AuthContext = createContext(null);

// Auth provider context to wrap child components
export const AuthProvider = ({ children }) => {
  // State to store the authenticated user
  const [currentUser, setCurrentUser] = useState(null);
  // State to control the initial loading state
  const [loading, setLoading] = useState(true);

  // Monitor authentication state changes
  useEffect(() => {
    // Callback function triggered whenever the auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if the user's email is verified
        if (user.emailVerified) {
          setCurrentUser(user);
        } else {
          // If the email is not verified, log out the user
          await signOut(auth);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription when component unmounts
    return unsubscribe;
  }, []);

  // Display a loading indicator if the loading state is active
  if (loading) {
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
        <Typography variant="h6" sx={{ mt: 2 }}>
          Carregando...
        </Typography>
      </Box>
    );
  }

  // Provide context wrapping child components
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
