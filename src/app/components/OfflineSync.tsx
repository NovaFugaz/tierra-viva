'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  CircularProgress,
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

export default function OfflineSync() {
  const [isOnline, setIsOnline] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // Simulate offline/online status change
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      setShowDialog(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate going offline after 5 seconds for demo
    const timer = setTimeout(() => {
      setIsOnline(false);
    }, 5000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncing(false);
      setShowDialog(false);
    }, 2000);
  };

  return (
    <Box position="fixed" bottom={16} right={16}>
      {!isOnline && (
        <Typography
          variant="body2"
          sx={{
            bgcolor: 'warning.main',
            color: 'warning.contrastText',
            p: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          Trabajando sin conexión
        </Typography>
      )}

      <Dialog open={showDialog && !isSyncing} onClose={() => setShowDialog(false)}>
        <DialogTitle>Conexión Restaurada</DialogTitle>
        <DialogContent>
          <Typography>
            Se ha detectado conexión a internet. ¿Desea sincronizar los cambios realizados sin conexión?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Más tarde</Button>
          <Button onClick={handleSync} variant="contained" startIcon={<CloudUploadIcon />}>
            Sincronizar ahora
          </Button>
        </DialogActions>
      </Dialog>

      {isSyncing && (
        <Dialog open={true}>
          <DialogContent>
            <Box display="flex" alignItems="center" gap={2}>
              <CircularProgress />
              <Typography>Sincronizando cambios...</Typography>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
