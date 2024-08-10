// Layout.js
import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  RoomService as ServicesIcon,
  ContactMail as ContactIcon,
  PrivacyTip as PrivacyIcon,
  Gavel as TermsIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        BarberHub
      </Typography>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/" onClick={handleDrawerToggle}>
          <HomeIcon sx={{ mr: 1 }} />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/services" onClick={handleDrawerToggle}>
          <ServicesIcon sx={{ mr: 1 }} />
          <ListItemText primary="Serviços" />
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BarberHub
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px', display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Home
            </NavLink>
            <NavLink to="/services" style={{ textDecoration: 'none', color: 'inherit', marginRight: '16px', display: 'flex', alignItems: 'center' }}>
              <ServicesIcon sx={{ mr: 0.5 }} />
              Serviços
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <ContactIcon sx={{ mr: 0.5 }} />
              Contato
            </NavLink>
          </Box>
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
        <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PrivacyIcon sx={{ mr: 0.5 }} />
          <NavLink to="/privacy" style={{ textDecoration: 'none', color: 'inherit', marginRight: '8px' }}>
            Política de Privacidade
          </NavLink>
          <TermsIcon sx={{ mr: 0.5 }} />
          <NavLink to="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
            Termos de Uso
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
