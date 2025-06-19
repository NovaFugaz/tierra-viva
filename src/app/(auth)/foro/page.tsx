'use client';
import { Box, Paper, Typography, Alert } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

export default function ForoPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Foro
      </Typography>
      <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ForumIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Alert severity="info" sx={{ width: '100%', maxWidth: 500 }}>
          No hay nuevos mensajes en el foro.
        </Alert>
      </Paper>
    </Box>
  );
}
