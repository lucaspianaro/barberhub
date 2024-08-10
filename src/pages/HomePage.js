// HomePage.js
import React from 'react';
import { Box, Button, Typography, Grid, Paper, IconButton } from '@mui/material';
import { AccessTime, RoomService, People } from '@mui/icons-material';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: { xs: 3, md: 5 },
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900?barber)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          mb: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo ao BarberHub
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 800, margin: '0 auto', mb: 3 }}>
          Descubra nossos serviços e agende seu próximo horário com facilidade.
          Experimente cuidados e estilos de primeira classe em um ambiente confortável.
        </Typography>
        <Button variant="contained" color="secondary" href="#services" sx={{ mt: 3 }}>
          Comece Agora
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 4,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 4,
              },
            }}
            elevation={3}
          >
            <IconButton color="inherit" aria-label="Serviços" sx={{ mb: 1 }}>
              <RoomService fontSize="large" />
            </IconButton>
            <Typography variant="h5" component="h2" gutterBottom>
              Serviços
            </Typography>
            <Typography>
              Oferecemos uma variedade de serviços de corte, barba e tratamentos capilares.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 4,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 4,
              },
            }}
            elevation={3}
          >
            <IconButton color="inherit" aria-label="Agendamentos" sx={{ mb: 1 }}>
              <AccessTime fontSize="large" />
            </IconButton>
            <Typography variant="h5" component="h2" gutterBottom>
              Agendamentos
            </Typography>
            <Typography>
              Reserve seu horário online de forma rápida e fácil, com confirmação instantânea.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 4,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 4,
              },
            }}
            elevation={3}
          >
            <IconButton color="inherit" aria-label="Experiência" sx={{ mb: 1 }}>
              <People fontSize="large" />
            </IconButton>
            <Typography variant="h5" component="h2" gutterBottom>
              Experiência
            </Typography>
            <Typography>
              Desfrute de um ambiente acolhedor e profissionais qualificados prontos para atender você.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
