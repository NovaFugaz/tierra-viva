'use client';
import { useState } from 'react';
import { Box, Paper, Typography, Modal, TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import es from 'date-fns/locale/es';

interface Event {
  date: Date;
  title: string;
  description: string;
}

export default function CalendarioPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '' });
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateClick = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setIsModalOpen(true);
    }
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.title) {
      setEvents([
        ...events,
        {
          date: selectedDate,
          title: newEvent.title,
          description: newEvent.description,
        },
      ]);
      setNewEvent({ title: '', description: '' });
      setIsModalOpen(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Calendario
      </Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Paper elevation={3} sx={{ p: 2, flexGrow: 1, maxWidth: 800 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <DateCalendar
              value={selectedDate}
              onChange={handleDateClick}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            Eventos del día
          </Typography>
          {events
            .filter(
              (event) =>
                selectedDate &&
                event.date.toDateString() === selectedDate.toDateString()
            )
            .map((event, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </Box>
            ))}
        </Paper>
      </Box>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="add-event-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Agregar evento
          </Typography>
          <TextField
            fullWidth
            label="Título"
            margin="normal"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <TextField
            fullWidth
            label="Descripción"
            margin="normal"
            multiline
            rows={4}
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
          />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button variant="contained" onClick={handleAddEvent}>
              Guardar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
