// src/components/Notification.js
import React from 'react';
import { Alert } from '@mui/material';

const Notification = ({ error, message }) => (
  <>
    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
    {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
  </>
);

export default Notification;
