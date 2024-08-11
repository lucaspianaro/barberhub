// Layout.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  Typography,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  CalendarToday as CalendarIcon,
  ContactMail as ContactIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import logo from '../assets/logo6.png';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Box component="img" src={logo} alt="BarberHub Logo" sx={{ width: '100px', mx: 'auto', my: 2 }} />
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/" onClick={handleDrawerToggle}>
          <HomeIcon sx={{ mr: 1 }} />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/appointments" onClick={handleDrawerToggle}>
          <CalendarIcon sx={{ mr: 1 }} />
          <ListItemText primary="Agendamentos" />
        </ListItem>
        <ListItem button component={NavLink} to="/contact" onClick={handleDrawerToggle}>
          <ContactIcon sx={{ mr: 1 }} />
          <ListItemText primary="Contato" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="BarberHub Logo" style={{ width: '120px', marginRight: '16px' }} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px', display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Home
              </NavLink>
              <NavLink to="/appointments" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px', display: 'flex', alignItems: 'center' }}>
                <CalendarIcon sx={{ mr: 0.5 }} />
                Agendamentos
              </NavLink>
              <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <ContactIcon sx={{ mr: 0.5 }} />
                Contato
              </NavLink>
            </Box>
          </Box>
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 2 }}>Olá, {user.displayName || user.email}</Typography>
              <Button color="inherit" onClick={handleLogout}>
                Sair
              </Button>
            </Box>
          ) : (
            <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '16px' }}>
              <Button variant="outlined" color="inherit">
                Login
              </Button>
            </NavLink>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, width: '100%', padding: 0 }}>
        <Container maxWidth={false} disableGutters>
          {children}
        </Container>
      </Box>

      <Box component="footer" sx={{ backgroundColor: 'primary.dark', padding: 2, color: 'text.primary', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 1 }}>
          © 2024 BarberHub. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
