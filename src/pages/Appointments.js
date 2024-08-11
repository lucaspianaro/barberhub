// src/pages/Appointments.js
import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
  Alert,
  useTheme,
  Grid,
  ButtonGroup,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  createAppointment,
  getAppointmentsByUser,
  updateAppointment,
  deleteAppointment,
} from '../services/appointmentService';
import { useAuth } from '../hooks/useAuthState';
import AppointmentForm from '../components/appointments/AppointmentForm';

const localizer = momentLocalizer(moment);

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [view, setView] = useState(Views.MONTH); // Initialize view state

  const { user } = useAuth();
  const theme = useTheme();

  const fetchAppointments = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError('');
      setMessage('');

      const { success, data, message } = await getAppointmentsByUser(user.uid);

      if (success) {
        const formattedData = data.map((appointment) => ({
          ...appointment,
          title: `${appointment.service} - ${moment(appointment.date).format('LT')}`,
          start: new Date(appointment.date),
          end: new Date(moment(appointment.date).add(1, 'hours')),
          isPast: moment().isAfter(moment(appointment.date)), // Determine if appointment is in the past
        }));
        setAppointments(formattedData);
      } else {
        setError(message);
      }
    } catch (error) {
      setError('Falha ao carregar agendamentos. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const handleSelectSlot = () => {
    setEditingAppointment(null);
    setOpenForm(true);
  };

  const handleSelectEvent = (event) => {
    setEditingAppointment(event);
    setOpenForm(true);
  };

  const handleCreateOrUpdate = async (appointmentData) => {
    if (!user) return;

    try {
      setLoading(true);
      setError('');
      setMessage('');

      let result;
      if (editingAppointment) {
        result = await updateAppointment(editingAppointment.id, appointmentData);
      } else {
        result = await createAppointment({ ...appointmentData, userId: user.uid });
      }

      if (result.success) {
        const successMessage = editingAppointment
          ? 'Agendamento atualizado com sucesso!'
          : 'Agendamento criado com sucesso!';
        setMessage(successMessage);
        fetchAppointments();
        setOpenForm(false);
        setEditingAppointment(null);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Falha ao salvar agendamento. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (appointmentId) => {
    if (!user) return;

    try {
      setLoading(true);
      setError('');
      setMessage('');

      const { success, message } = await deleteAppointment(appointmentId);

      if (success) {
        setAppointments((prev) => prev.filter((appointment) => appointment.id !== appointmentId));
        setMessage('Agendamento excluído com sucesso!');
      } else {
        setError(message);
      }
    } catch (error) {
      setError('Falha ao excluir agendamento. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', paddingTop: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.contrastText }}>
          Agendamentos
        </Typography>
        {loading && <CircularProgress color="secondary" />}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>
            Selecione o modo de visualização:
          </Typography>
          <ButtonGroup variant="contained" color="secondary">
            <Button onClick={() => setView(Views.DAY)}>Dia</Button>
            <Button onClick={() => setView(Views.WEEK)}>Semana</Button>
            <Button onClick={() => setView(Views.MONTH)}>Mês</Button>
          </ButtonGroup>
        </Grid>
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, marginBottom: 20, backgroundColor: theme.palette.background.paper }}
          selectable
          popup
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          view={view}
          onView={setView}
          eventPropGetter={(event) => {
            const backgroundColor = event.isPast ? theme.palette.secondary.light : theme.palette.primary.main;
            return {
              style: {
                backgroundColor,
                color: theme.palette.text.primary,
                borderRadius: '5px',
                border: 'none',
                padding: '5px',
              },
            };
          }}
          messages={{
            next: 'Próximo',
            previous: 'Anterior',
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            agenda: 'Agenda',
          }}
          components={{
            toolbar: ({ label, onNavigate }) => (
              <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>
                  {label}
                </Typography>
                <Box>
                  <Button onClick={() => onNavigate('PREV')} variant="outlined" color="secondary" sx={{ mx: 1 }}>
                    Anterior
                  </Button>
                  <Button onClick={() => onNavigate('TODAY')} variant="outlined" color="secondary" sx={{ mx: 1 }}>
                    Hoje
                  </Button>
                  <Button onClick={() => onNavigate('NEXT')} variant="outlined" color="secondary" sx={{ mx: 1 }}>
                    Próximo
                  </Button>
                </Box>
              </Grid>
            ),
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Add />}
          onClick={() => setOpenForm(true)}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          Novo Agendamento
        </Button>
      </Box>

      <AppointmentForm
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setEditingAppointment(null);
        }}
        onSubmit={handleCreateOrUpdate}
        initialData={editingAppointment}
      />
    </Container>
  );
};

export default Appointments;
