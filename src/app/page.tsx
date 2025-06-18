'use client';

import { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const OfflineSync = dynamic(() => import('./components/OfflineSync'), {
  ssr: false,
});

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Profesor' && password === 'Profesor1') {
      router.push('/dashboard');
    } else {
      alert('Credenciales incorrectas. Use Profesor/Profesor1 para la demostración.');
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f5f5f5'
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography 
              component="h1" 
              variant="h4" 
              sx={{ 
                mb: 4,
                color: 'primary.main',
                fontWeight: 'bold'
              }}
            >
              TierraViva
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Typography variant="body2" color="text.secondary" align="center">
                Demo: Use Profesor/Profesor1
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
      <OfflineSync />
    </Box>
  );
}
