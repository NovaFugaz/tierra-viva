'use client';

import { Box, Button, Typography } from '@mui/material';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
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
            Error en la aplicación
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 2 }}>
            Lo sentimos, ha ocurrido un error inesperado.
          </Typography>
          <Button variant="contained" onClick={reset}>
            Intentar de nuevo
          </Button>
        </Box>
      </body>
    </html>
  );
}
