import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Alert,
} from '@mui/material';

const services = [
  { value: 'corte', label: 'Corte' },
  { value: 'barba', label: 'Barba' },
  { value: 'combo', label: 'Combo Corte & Barba' },
];

const AppointmentForm = ({ open, onClose, onSubmit, initialData }) => {
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setDate(initialData.date || '');
      setService(initialData.service || '');
    } else {
      setDate('');
      setService('');
    }
  }, [initialData]);

  const handleSubmit = () => {
    // Validate form fields
    if (!date || !service) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Clear any previous error messages
    setError('');

    // Call onSubmit with the appointment data
    onSubmit({ date, service });

    // Close the dialog and reset form state
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Editar Agendamento' : 'Novo Agendamento'}</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          margin="normal"
          required
          fullWidth
          id="date"
          label="Data e Hora"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="service"
          select
          label="Serviço"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {services.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {initialData ? 'Salvar' : 'Criar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentForm;
