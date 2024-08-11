// src/components/appointments/ExportToGoogleCalendar.js
import React from 'react';
import { Button } from '@mui/material';
import { google } from 'googleapis';

const ExportToGoogleCalendar = ({ events }) => {
  const handleExport = async () => {
    // Configuration for Google Calendar API
    const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
    const API_KEY = 'YOUR_GOOGLE_API_KEY';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

    const gapi = window.gapi;
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: SCOPES,
      });

      gapi.auth2.getAuthInstance().signIn().then(() => {
        events.forEach((event) => {
          const eventDetails = {
            summary: event.service,
            start: {
              dateTime: event.start.toISOString(),
            },
            end: {
              dateTime: event.end.toISOString(),
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: eventDetails,
          });

          request.execute((event) => {
            console.log('Event created: ' + event.htmlLink);
          });
        });
      });
    });
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handleExport}
      sx={{ mt: 2, ml: 2 }}
    >
      Exportar para Google Calendar
    </Button>
  );
};

export default ExportToGoogleCalendar;
