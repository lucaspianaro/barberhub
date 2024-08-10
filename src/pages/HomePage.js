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
      <Typography variant="h3" component="h1" gutterBottom>
        Bem-vindo ao BarberHub
      </Typography>
      <Typography variant="h6" component="p" sx={{ maxWidth: 600, marginBottom: 2 }}>
        Descubra nossos serviços e agende seu próximo horário com facilidade.
        Experimente cuidados e estilos de primeira classe em um ambiente confortável.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="#services"
        sx={{ marginTop: 3, marginBottom: 4 }}
      >
        Comece Agora
      </Button>

      <Grid container spacing={3} sx={{ maxWidth: 900 }}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 3,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 3,
              },
            }}
            elevation={2}
          >
            <IconButton color="inherit" aria-label="Serviços" sx={{ marginBottom: 1 }}>
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
              padding: 3,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 3,
              },
            }}
            elevation={2}
          >
            <IconButton color="inherit" aria-label="Agendamentos" sx={{ marginBottom: 1 }}>
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
              padding: 3,
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 3,
              },
            }}
            elevation={2}
          >
            <IconButton color="inherit" aria-label="Experiência" sx={{ marginBottom: 1 }}>
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
