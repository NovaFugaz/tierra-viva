'use client';

import { Box, Card, Typography, Stack } from '@mui/material';
import { CalendarMonth as CalendarIcon } from '@mui/icons-material';

type Actividad = {
  dia: number;
  mes: string;
  titulo: string;
  materia: string;
  hora: string;
};

export default function ProximasActividades() {
  const actividades: Actividad[] = [
    {
      dia: 15,
      mes: 'Nov',
      titulo: 'Taller Huerto Escolar',
      materia: 'Ciencias 4°A',
      hora: '10:30 AM',
    },
    {
      dia: 18,
      mes: 'Nov',
      titulo: 'Evaluación Ecosistemas',
      materia: 'Ciencias 6°A',
      hora: '09:00 AM',
    },
    {
      dia: 20,
      mes: 'Nov',
      titulo: 'Reunión de Departamento',
      materia: 'Sala de Profesores',
      hora: '14:00 PM',
    },
    {
      dia: 25,
      mes: 'Nov',
      titulo: 'Salida Educativa',
      materia: 'Parque Natural',
      hora: '08:30 AM',
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Próximas Actividades
      </Typography>
      <Stack spacing={2}>
        {actividades.map((actividad, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: 1,
                bgcolor: index === 0 ? 'info.light' : 
                         index === 1 ? 'success.light' :
                         index === 2 ? 'warning.light' :
                         'error.light',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1 }}>
                {actividad.dia}
              </Typography>
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                {actividad.mes}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                {actividad.titulo}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {actividad.materia} - {actividad.hora}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
