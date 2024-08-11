import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Link, Alert, Divider, CircularProgress } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginWithEmailPassword, registerWithEmailPassword, resetPassword } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [barbershopName, setBarbershopName] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the previous path from state or default to home
  const from = location.state?.from?.pathname || '/';

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const emailStr = String(email).trim();
    const passwordStr = String(password).trim();
    const barbershopNameStr = String(barbershopName).trim();

    if (!validateEmail(emailStr)) {
      setError('Por favor, insira um email válido.');
      setLoading(false);
      return;
    }

    if (isSignup) {
      if (barbershopNameStr === '') {
        setError('Por favor, insira o nome da barbearia.');
        setLoading(false);
        return;
      }
      if (passwordStr.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres.');
        setLoading(false);
        return;
      }
    }

    try {
      const authFunction = isSignup ? registerWithEmailPassword : loginWithEmailPassword;
      const authData = isSignup ? [emailStr, passwordStr, barbershopNameStr] : [emailStr, passwordStr];
      const { success, message } = await authFunction(...authData);

      if (success) {
        setMessage(message);
        if (isSignup) {
          setIsSignup(false);
          setMessage('Cadastro realizado com sucesso! Verifique seu email antes de fazer login.');
        } else {
          // Navigate back to the previous location or default path
          navigate(from, { replace: true });
        }
      } else {
        setError(message);
      }
    } catch (error) {
      setError('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    setMessage('');

    const emailStr = String(email).trim();

    if (!validateEmail(emailStr)) {
      setError('Por favor, insira um email válido para redefinir a senha.');
      return;
    }

    try {
      const { success, message } = await resetPassword(emailStr);

      if (success) {
        setMessage(message);
      } else {
        setError(message);
      }
    } catch (error) {
      setError('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography component="h1" variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
          {isSignup ? 'Criar Conta' : 'Entrar'}
        </Typography>
        <Box component="form" onSubmit={handleAuthAction} sx={{ mt: 2, width: '100%' }}>
          {isSignup && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="barbershopName"
              label="Nome da Barbearia"
              name="barbershopName"
              autoComplete="off"
              value={barbershopName}
              onChange={(e) => setBarbershopName(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'text.secondary' },
                '& .MuiInputBase-input': { color: '#000000' },
              }}
              inputProps={{
                style: { color: '#000000' },
              }}
            />
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiInputLabel-root': { color: 'text.secondary' },
              '& .MuiInputBase-input': { color: '#000000' },
            }}
            inputProps={{
              style: { color: '#000000' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiInputLabel-root': { color: 'text.secondary' },
              '& .MuiInputBase-input': { color: '#000000' },
            }}
            inputProps={{
              style: { color: '#000000' },
            }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {message && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}
          {loading ? (
            <CircularProgress sx={{ mt: 3, mb: 2 }} />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                mb: 2,
                padding: '10px',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {isSignup ? 'Cadastrar' : 'Entrar'}
            </Button>
          )}
          <Divider sx={{ width: '100%', mb: 2 }} />
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ mb: 2 }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Cadastre-se'}
          </Button>
          {!isSignup && (
            <Link href="#" variant="body2" onClick={handlePasswordReset} sx={{ color: 'secondary.main' }}>
              Esqueceu a senha?
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
