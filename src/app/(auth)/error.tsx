'use client';

import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h4" color="error" gutterBottom>
        ¡Ups! Algo salió mal
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 2 }}>
        {error.message || 'Se produjo un error inesperado'}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={reset}>
          Intentar de nuevo
        </Button>
        <Button variant="outlined" onClick={() => router.push('/')}>
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
}
