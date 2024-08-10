// HomePage.js
import React from 'react';
import { Box, Button, Typography, Grid, Paper, IconButton, Container } from '@mui/material';
import { AccessTime, RoomService, People, Star, FormatQuote } from '@mui/icons-material';

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
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          padding: { xs: 3, md: 5 },
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900?barber)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 1.5s ease-in-out',
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}>
          Bem-vindo ao BarberHub
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 800, margin: '0 auto', mb: 3, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
          Conecte-se com barbeiros profissionais e descubra os melhores serviços para suas necessidades. Agende horários e gerencie seus compromissos facilmente.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="#services"
          sx={{
            mt: 3,
            padding: '12px 24px',
            fontSize: '1.2rem',
            borderRadius: '25px',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: 'secondary.dark',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Comece Agora
        </Button>
      </Box>

      {/* Services Section */}
      <Container sx={{ maxWidth: 1200, mx: 'auto', py: 5 }}>
        <Grid container spacing={4}>
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
                Para Barbeiros
              </Typography>
              <Typography>
                Aumente sua visibilidade e gerencie sua clientela com facilidade. Oferecemos ferramentas para simplificar suas operações diárias.
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
                Agendamentos Fáceis
              </Typography>
              <Typography>
                Permita que seus clientes reservem horários de maneira rápida e fácil, com confirmações instantâneas e lembretes automáticos.
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
                Experiência do Cliente
              </Typography>
              <Typography>
                Proporcione uma experiência de qualidade para seus clientes com avaliações e feedback direto na plataforma.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          color: 'white',
          py: 5,
          width: '100%',
          textAlign: 'center',
          mt: 5,
        }}
      >
        <Container sx={{ maxWidth: 900 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            O que nossos usuários dizem
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  backgroundColor: 'secondary.main',
                  color: 'text.primary',
                }}
                elevation={3}
              >
                <FormatQuote sx={{ fontSize: '3rem', mb: 2 }} />
                <Typography>
                  "BarberHub me ajudou a encontrar novos clientes e a manter um cronograma organizado."
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  - João, Barbeiro
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  backgroundColor: 'secondary.main',
                  color: 'text.primary',
                }}
                elevation={3}
              >
                <FormatQuote sx={{ fontSize: '3rem', mb: 2 }} />
                <Typography>
                  "Facilitou muito minha vida ao agendar cortes e receber notificações. Excelente plataforma!"
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  - Maria, Cliente
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  padding: 3,
                  backgroundColor: 'secondary.main',
                  color: 'text.primary',
                }}
                elevation={3}
              >
                <FormatQuote sx={{ fontSize: '3rem', mb: 2 }} />
                <Typography>
                  "A experiência com o BarberHub tem sido fantástica. Recomendo a todos!"
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  - Carlos, Cliente
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                  <Star color="warning" />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
