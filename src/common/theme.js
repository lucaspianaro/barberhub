// src/common/theme.js

import { createTheme } from '@mui/material/styles';

// Define the custom theme using the color palette provided
const theme = createTheme({
  palette: {
    primary: {
      main: '#1C1C1C',   // Charcoal Gray for primary elements
      light: '#383838',  // A lighter shade for subtle variations
      dark: '#000000',   // Darker shade for deeper accents
      contrastText: '#FFFFFF', // Text color that contrasts well with primary
    },
    secondary: {
      main: '#E0A800', // Goldenrod for secondary elements
      light: '#FFC233', // Lighter shade of Goldenrod
      dark: '#A67500',  // Darker shade for contrasts
      contrastText: '#1C1C1C', // Text color for good contrast
    },
    accent: {
      main: '#F5F5F5',    // Light Gray for accents
      contrastText: '#1C1C1C', // Contrasting text color
    },
    support: {
      main: '#FF6F61',   // Coral for CTAs
      light: '#FF8A82',  // Lighter shade for hover effects
      dark: '#CC594E',   // Darker shade for press effects
      contrastText: '#FFFFFF', // White text for clarity
    },
    highlight: {
      main: '#4CAF50', // Green for positive indicators
      light: '#80E27E', // Light green for subtle highlights
      dark: '#087F23',  // Darker green for contrast
      contrastText: '#FFFFFF', // White for text readability
    },
    text: {
      primary: '#FFFFFF', // White for primary text
      secondary: '#B0B0B0', // Light gray for secondary text
      disabled: '#888888', // Gray for disabled text
    },
    background: {
      default: '#F5F5F5', // Light Gray for general background
      paper: '#FFFFFF',   // White for paper components
    },
    error: {
      main: '#F44336', // Standard error red
      light: '#E57373',
      dark: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800', // Standard warning orange
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#1C1C1C',
    },
    info: {
      main: '#2196F3', // Standard info blue
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50', // Standard success green
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
